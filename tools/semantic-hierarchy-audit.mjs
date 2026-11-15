#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
const ROOT=process.cwd();
function walk(dir){const out=[];for(const e of fs.readdirSync(dir,{withFileTypes:true})){if([".git","node_modules"].includes(e.name))continue;const f=path.join(dir,e.name);if(e.isDirectory())out.push(...walk(f));else out.push(path.relative(ROOT,f).split(path.sep).join("/"))}return out}
const strip=s=>String(s||"").replace(/<[^>]*>/g," ").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/&#39;|&apos;/gi,"'").replace(/&quot;/gi,'"').replace(/\s+/g," ").trim();
const words=s=>strip(s).split(/\s+/).filter(Boolean);
const brandLike=s=>/^(?:verve\s*n\s*veda|arshif|arshif archives|knowledge\s*&\s*archives)(?:\b|\s*[·|—-])/i.test(strip(s));
const titleLike=s=>{const t=strip(s),w=words(t);return !!t&&t.length<=100&&w.length>=1&&w.length<=10&&!/[.!?…]$/.test(t)};
const sentenceLike=s=>{const t=strip(s),w=words(t);return /[.!?…]$/.test(t)||w.length>=9||(w.length>=6&&/[,;:]/.test(t))};
const files=walk(ROOT).filter(f=>/\.html?$/i.test(f)).sort();
const classes='(?:eyebrow|kicker|section-kicker|overline|pretitle|arshif-future-eyebrow)';
const re=new RegExp('<(?:p|span|div)\\b[^>]*class=["\\\'][^"\\\']*'+classes+'[^"\\\']*["\\\'][^>]*>([\\s\\S]*?)<\\/(?:p|span|div)>\\s*<h([1-6])\\b[^>]*>([\\s\\S]*?)<\\/h\\2>','gi');
let pairs=0,reversed=0,brandReview=0,correct=0;const samples=[];
for(const file of files){
  const s=fs.readFileSync(path.join(ROOT,file),"utf8");let m;
  while((m=re.exec(s))){
    pairs++;const label=strip(m[1]),heading=strip(m[3]);
    if(sentenceLike(heading)&&titleLike(label)){
      if(brandLike(label)){brandReview++;if(samples.length<40)samples.push({type:"review",file,label,heading})}
      else{reversed++;if(samples.length<40)samples.push({type:"auto-repair",file,label,heading})}
    }else correct++;
  }
}
const guard=fs.readFileSync(path.join(ROOT,"assets/arshif-global-standard-v1.js"),"utf8");
const authorityPresent=guard.includes('arshifHierarchy="category-title-description-v1"');
console.log(JSON.stringify({scannedFiles:files.length,labelHeadingPairs:pairs,clearReversedPairs:reversed,ambiguousBrandOrCategoryPairs:brandReview,alreadyTitleLikePairs:correct,runtimeSemanticAuthority:authorityPresent,labelsScanned:["eyebrow","kicker","section-kicker","overline","pretitle","arshif-future-eyebrow"],samples},null,2));
if(!authorityPresent)process.exitCode=1;