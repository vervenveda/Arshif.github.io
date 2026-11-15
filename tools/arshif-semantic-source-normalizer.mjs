#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const ROOT=process.cwd();
const WRITE=process.argv.includes("--write");

function walk(dir){
  const out=[];
  for(const e of fs.readdirSync(dir,{withFileTypes:true})){
    if([".git","node_modules"].includes(e.name))continue;
    const f=path.join(dir,e.name);
    if(e.isDirectory())out.push(...walk(f));
    else if(/\.html?$/i.test(e.name))out.push(f);
  }
  return out;
}
const strip=s=>String(s||"")
  .replace(/<[^>]*>/g," ")
  .replace(/&nbsp;/gi," ")
  .replace(/&amp;/gi,"&")
  .replace(/&#39;|&apos;/gi,"'")
  .replace(/&quot;/gi,'"')
  .replace(/\s+/g," ")
  .trim();
const words=s=>strip(s).split(/\s+/).filter(Boolean);
const brandLike=s=>/^(?:verve\s*n\s*veda|arshif|arshif archives|knowledge\s*&\s*archives)(?:\b|\s*[·|—-])/i.test(strip(s));
const titleLike=s=>{const t=strip(s),w=words(t);return !!t&&t.length<=100&&w.length>=1&&w.length<=10&&!/[.!?…]$/.test(t)};
const sentenceLike=s=>{const t=strip(s),w=words(t);return /[.!?…]$/.test(t)||w.length>=9||(w.length>=6&&/[,;:]/.test(t))};

const classes='(?:eyebrow|kicker|section-kicker|overline|pretitle|arshif-future-eyebrow)';
const re=new RegExp(
  '(<(?:p|span|div)\\b[^>]*class=["\\\'][^"\\\']*'+classes+'[^"\\\']*["\\\'][^>]*>)([\\s\\S]*?)(<\\/(?:p|span|div)>)(\\s*)(<h([1-6])\\b[^>]*>)([\\s\\S]*?)(<\\/h\\6>)',
  'gi'
);

const files=walk(ROOT).sort();
let totalPairs=0, clear=0, ambiguous=0, already=0, changedFiles=0;
const samples=[];

for(const abs of files){
  const before=fs.readFileSync(abs,"utf8");
  let localChanged=0;
  const after=before.replace(re,(whole,labelOpen,labelInner,labelClose,space,headingOpen,level,headingInner,headingClose)=>{
    totalPairs++;
    const labelText=strip(labelInner);
    const headingText=strip(headingInner);

    if(sentenceLike(headingText)&&titleLike(labelText)){
      if(brandLike(labelText)){
        ambiguous++;
        if(samples.length<60)samples.push({type:"review",file:path.relative(ROOT,abs).split(path.sep).join("/"),label:labelText,heading:headingText});
        return whole;
      }

      clear++;
      if(samples.length<60)samples.push({type:"rewrite",file:path.relative(ROOT,abs).split(path.sep).join("/"),label:labelText,heading:headingText});
      if(!WRITE)return whole;

      localChanged++;
      const descClass=/section-kicker/i.test(labelOpen)?"arshif-section-description":"arshif-section-description";
      return `${labelOpen}ARSHIF${labelClose}${space}${headingOpen}${labelInner}${headingClose}${space}<p class="${descClass}">${headingInner}</p>`;
    }

    already++;
    return whole;
  });

  if(WRITE&&localChanged&&after!==before){
    fs.writeFileSync(abs,after);
    changedFiles++;
  }
}

console.log(JSON.stringify({
  mode:WRITE?"write":"check",
  scannedFiles:files.length,
  labelHeadingPairs:totalPairs,
  clearReversedPairs:clear,
  ambiguousBrandOrCategoryPairs:ambiguous,
  alreadyTitleLikePairs:already,
  changedFiles,
  rule:"Rewrite only clear reversals; preserve ambiguous brand/category cases.",
  samples
},null,2));

if(!WRITE && clear>0) process.exitCode=2;
