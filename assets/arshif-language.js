/* ARSHIF sovereign language entry bridge: no network, no storage of archive content.
 * Curated navigation vocabulary only. Never machine-translate research text. */
(()=>{"use strict";
const LANG={en:"English",es:"Español",fr:"Français",ar:"العربية",zh:"中文",de:"Deutsch",ru:"Русский",pt:"Português",hi:"हिन्दी",ja:"日本語",ko:"한국어",it:"Italiano",bn:"বাংলা"};
const COPY={
"Search the index…":{es:"Buscar en el índice…",fr:"Rechercher dans l’index…",ar:"ابحث في الفهرس",zh:"搜索索引",de:"Index durchsuchen…",ru:"Поиск по указателю…",pt:"Pesquisar no índice…",hi:"सूची में खोजें…",ja:"索引を検索…",ko:"색인 검색…",it:"Cerca nell’indice…",bn:"সূচিতে খুঁজুন…"},
"Open archive menu":{es:"Abrir menú del archivo",fr:"Ouvrir le menu des archives",ar:"افتح قائمة الأرشيف",zh:"打开档案菜单",de:"Archivmenü öffnen",ru:"Открыть меню архива",pt:"Abrir menu do arquivo",hi:"अभिलेखागार मेनू खोलें",ja:"アーカイブメニューを開く",ko:"보관소 메뉴 열기",it:"Apri menu archivio",bn:"আর্কাইভ মেনু খুলুন"},
"Close archive menu":{es:"Cerrar menú del archivo",fr:"Fermer le menu des archives",ar:"أغلق قائمة الأرشيف",zh:"关闭档案菜单",de:"Archivmenü schließen",ru:"Закрыть меню архива",pt:"Fechar menu do arquivo",hi:"अभिलेखागार मेनू बंद करें",ja:"アーカイブメニューを閉じる",ko:"보관소 메뉴 닫기",it:"Chiudi menu archivio",bn:"আর্কাইভ মেনু বন্ধ করুন"}
};
const KEY="vnv_language_v1",codes=Object.keys(LANG);let current="en";
try{const u=new URL(location.href).searchParams.get("lang"),p=localStorage.getItem(KEY);current=codes.includes(u)?u:codes.includes(p)?p:"en"}catch{}
const original=new WeakMap(),last=new WeakMap();
function localize(root){
 if(!root||root.nodeType!==1)return;
 const items=[root,...root.querySelectorAll("[aria-label],[placeholder]")];
 for(const el of items){
  if(el.closest("[data-private],[data-student],[data-account],[data-learner],form,[contenteditable]"))continue;
  for(const attr of ["aria-label","placeholder"]){
   const v=el.getAttribute(attr);if(v===null)continue;
   let bases=original.get(el)||{},rendered=last.get(el)||{};
   if(!(attr in bases)||v!==rendered[attr])bases[attr]=v;
   const text=COPY[bases[attr]]?.[current]||bases[attr];if(v!==text)el.setAttribute(attr,text);
   rendered[attr]=text;original.set(el,bases);last.set(el,rendered);
  }
 }
}
function apply(){
 document.documentElement.lang=current;
 // The site layout remains LTR: Arabic/Bengali translations are confined to controls.
 localize(document.body);
 document.querySelectorAll("a[href]").forEach(a=>{
  let u;try{u=new URL(a.href,location.href)}catch{return}
  if(u.protocol!=="https:"||!["vervenveda.com","www.vervenveda.com","vervenveda.github.io","khaemenesacademy.github.io","artist1970.github.io"].includes(u.hostname))return;
  u.searchParams.set("lang",current);a.href=u.href;
 });
}
function init(){
 const select=document.createElement("select");select.id="arshif-language-choice";select.setAttribute("aria-label","Choose interface language");
 select.style.cssText="border-radius:7px;padding:7px;background:#f8f2e7;color:#17211d;border:1px solid #b49c70;max-width:155px;";
 for(const [code,label] of Object.entries(LANG)){const option=document.createElement("option");option.value=code;option.textContent=label;select.append(option)}
 select.value=current;select.addEventListener("change",()=>{current=select.value;try{localStorage.setItem(KEY,current)}catch{}apply()});
 const slot=document.createElement("div");slot.style.cssText="display:flex;justify-content:center;padding:7px;";slot.append(select);
 (document.querySelector(".site-header")||document.body).append(slot);
 apply();
 // Re-render labels added by the archive's own menu scripts, without altering archive text.
 const observer=new MutationObserver(records=>{for(const record of records){for(const node of record.addedNodes||[])if(node.nodeType===1)localize(node)}});
 observer.observe(document.body,{childList:true,subtree:true});
 window.ARSHIFLanguage=Object.freeze({getLanguage:()=>current,availableLanguages:()=>codes.slice(),coverage:()=>({status:"curated-navigation-only",fullyTranslated:false})});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();
})();