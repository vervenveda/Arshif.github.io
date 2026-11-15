/* Arshif Archives · global standard v1.0.0
   Identity preserved: ARSHIF / The Living Archive of Human Knowledge.
   Chrome: 333 ticker -> AutoPopulate ticker -> official VNV header/menu -> lower-right 3x2 ecosystem toolbar.
   Typography: 16px readable floor · 33px ordinary titles · one 66px primary title.
   Semantics: eyebrow/category label -> title heading -> descriptive paragraph.
*/
(()=>{"use strict";
if(window.__ARSHIF_GLOBAL_STANDARD_V1__)return;
window.__ARSHIF_GLOBAL_STANDARD_V1__=true;

const VNV="https://vervenveda.com/assets/";
const ROOT="https://vervenveda.com/Arshif.github.io/";
const STYLE_ID="arshifGlobalTypographyStandardV1";
const PRIMARY_ATTR="data-arshif-primary-title";
const SCRIPTS={
  ticker333:VNV+"vnv-333-ticker.js",
  tickerAuto:VNV+"vnv-ticker-autopopulate.js",
  header:VNV+"vnv-header-autopopulate.js",
  toolbar:VNV+"vnv-ecosystem-toolbar.js"
};

function hasScript(pathname){
  return [...document.scripts].some(s=>{try{return new URL(s.src,location.href).pathname===pathname}catch{return false}});
}
function load(src,key){
  const u=new URL(src,location.href);
  if(hasScript(u.pathname))return Promise.resolve();
  return new Promise(resolve=>{
    const s=document.createElement("script");s.src=u.href;s.defer=true;s.dataset[key]="true";
    s.onload=resolve;s.onerror=resolve;(document.head||document.documentElement).append(s);
  });
}
function visible(el){
  if(!el||!el.isConnected||el.hidden||el.getAttribute("aria-hidden")==="true")return false;
  const cs=getComputedStyle(el);return cs.display!=="none"&&cs.visibility!=="hidden";
}
function markPrimary(){
  const cur=document.querySelector('['+PRIMARY_ATTR+'="true"]');
  if(cur&&visible(cur))return cur;
  document.querySelectorAll('['+PRIMARY_ATTR+']').forEach(el=>el.removeAttribute(PRIMARY_ATTR));
  const chosen=[...document.querySelectorAll(
    'main .hero h1,main h1,.hero h1,[data-hero] h1,h1,.hero-title,.main-title,.page-title'
  )].find(visible)||null;
  if(chosen)chosen.setAttribute(PRIMARY_ATTR,"true");
  return chosen;
}
function hasReadableText(el){
  if(!el||el.nodeType!==1)return false;
  if(el.matches("script,style,noscript,template,svg,svg *,canvas,iframe,br,hr,source,track,meta,link"))return false;
  return [...el.childNodes].some(n=>n.nodeType===Node.TEXT_NODE&&String(n.nodeValue||"").trim())||
    el.matches("input,select,textarea,button,option");
}
function enforceFloor(root=document.body){
  if(!root)return;
  for(const el of [root,...root.querySelectorAll("*")]){
    if(!hasReadableText(el)||el.matches("h1,h2,h3,h4,h5,h6,[role=heading],["+PRIMARY_ATTR+"]"))continue;
    const size=parseFloat(getComputedStyle(el).fontSize||"0");
    if(size>0&&size<16){
      el.style.setProperty("font-size","16px","important");
      el.dataset.arshifMinText="16";
    }
  }
}
function installTypography(){
  if(!document.head||!document.body)return;
  if(!document.getElementById(STYLE_ID)){
    const style=document.createElement("style");style.id=STYLE_ID;
    style.textContent=`
html:root body{font-size:16px!important}
html:root body :is(
 p,li,dt,dd,blockquote,figcaption,caption,legend,label,a,button,input,select,textarea,option,output,
 td,th,summary,small,strong,em,b,i,u,s,mark,time,.eyebrow,.kicker,.section-kicker,.overline,.pretitle,
 .arshif-future-eyebrow,.subtitle,.subheading,.lead,.description,.breadcrumbs,.breadcrumb,.badge,.chip,
 .pill,.status,.meta,.caption,.note,.helper,.hint,.message,.toast,.brand-name,.brand-sub,.menu-group,
 .menu-link,.menu-link small,.menu-link strong
){font-size:max(16px,1em)!important}
html:root body :is(
 h1,h2,h3,h4,h5,h6,[role="heading"],.page-title,.hero-title,.main-title,.section-title,.card-title,
 .display-title,.site-title,.brand-title,.modal-title,.dialog-title
){
 font-size:33px!important;line-height:1.2!important;font-weight:400!important;
 overflow-wrap:anywhere;text-wrap:balance
}
html:root body [${PRIMARY_ATTR}="true"]{
 font-size:66px!important;line-height:1.05!important;font-weight:400!important;
 overflow-wrap:anywhere;text-wrap:balance
}
@media(max-width:560px){html:root body [${PRIMARY_ATTR}="true"]{font-size:66px!important}}
`;document.head.append(style);
  }
  markPrimary();enforceFloor();
  document.documentElement.dataset.arshifTypography="16-33-66";
}

const LABELS=".eyebrow,.kicker,.section-kicker,.overline,.pretitle,.arshif-future-eyebrow,[data-eyebrow],[data-kicker]";
const clean=s=>String(s||"").replace(/\s+/g," ").trim();
const words=s=>clean(s).split(/\s+/).filter(Boolean);
const brandLike=s=>/^(?:verve\s*n\s*veda|arshif|arshif archives|knowledge\s*&\s*archives)(?:\b|\s*[·|—-])/i.test(clean(s));
const titleLike=s=>{const t=clean(s),w=words(t);return !!t&&t.length<=100&&w.length>=1&&w.length<=10&&!/[.!?…]$/.test(t)};
const sentenceLike=s=>{const t=clean(s),w=words(t);return /[.!?…]$/.test(t)||w.length>=9||(w.length>=6&&/[,;:]/.test(t))};

function normalizeLabel(label){
  if(!label||label.dataset.arshifHierarchyChecked==="true")return;
  label.dataset.arshifHierarchyChecked="true";
  if(label.closest("nav,footer,[data-arshif-no-semantic-normalize]"))return;
  const h=label.nextElementSibling;
  if(!h||!/^H[1-6]$/.test(h.tagName)||label.children.length||h.children.length)return;
  const l=clean(label.textContent),t=clean(h.textContent);
  if(!sentenceLike(t)||!titleLike(l))return;
  if(brandLike(l)){h.dataset.arshifHierarchyReview="brand-or-category-eyebrow-sentence-heading";return}
  const p=document.createElement("p");
  p.className="arshif-section-description";
  p.textContent=t;
  p.dataset.arshifDemotedFromHeading="true";
  h.dataset.arshifOriginalHeading=t;
  h.dataset.arshifPromotedFromEyebrow=l;
  h.textContent=l;
  label.dataset.arshifOriginalEyebrow=l;
  label.textContent="ARSHIF";
  h.insertAdjacentElement("afterend",p);
  h.closest("section,article,header,main,div")?.setAttribute("data-arshif-hierarchy-normalized","true");
}
function normalizeHierarchy(root=document){
  root.querySelectorAll?.(LABELS).forEach(normalizeLabel);
  document.documentElement.dataset.arshifHierarchy="category-title-description-v1";
}
function mount333(){try{window.VNV333Ticker?.mount?.()}catch{}}
function mountAuto(){
  try{if(!document.getElementById("vnvTickerAutoPopulate"))window.VNV_TICKER?.autoPopulate?.({mode:"auto"})}catch{}
  mount333();
}
function mountHeader(){
  try{window.VNV_HEADER?.mount?.({
    title:"ARSHIF",
    subtitle:"The Living Archive of Human Knowledge",
    icon:"A",
    home:ROOT,
    actions:[
      {label:"Archive",href:ROOT+"#archive"},
      {label:"Collections",href:ROOT+"#collections"},
      {label:"Halls",href:ROOT+"halls/"},
      {label:"Catalog",href:ROOT+"catalog/"},
      {label:"Ecosystem",href:"https://vervenveda.com/#directory"}
    ]
  })}catch{}
}
function mountToolbar(){
  try{window.VNVEcosystemToolbar?.mount?.()}catch{}
  const dock=document.getElementById("vnvEcosystemUtilityDock");
  if(dock){
    dock.style.setProperty("left","auto","important");
    dock.style.setProperty("right","max(12px, env(safe-area-inset-right))","important");
    dock.dataset.arshifCanonicalToolbar="true";
  }
}
let pending=false;
function schedule(){
  if(pending)return;pending=true;
  requestAnimationFrame(()=>{pending=false;installTypography();normalizeHierarchy(document);mount333();mountAuto();mountHeader();mountToolbar()});
}
async function start(){
  if(!document.body)return;
  installTypography();normalizeHierarchy(document);
  await load(SCRIPTS.ticker333,"arshif333");mount333();
  await load(SCRIPTS.tickerAuto,"arshifAuto");mountAuto();
  await load(SCRIPTS.header,"arshifHeader");mountHeader();
  await load(SCRIPTS.toolbar,"arshifToolbar");mountToolbar();
  document.documentElement.dataset.arshifChrome="333-auto-header-menu-toolbar";
  if(typeof MutationObserver==="function")new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true});
  window.addEventListener("resize",schedule,{passive:true});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
})();