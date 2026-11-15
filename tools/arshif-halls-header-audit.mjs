#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const ROOT=process.cwd();
const WRITE=process.argv.includes("--write");
const HALLS=path.join(ROOT,"halls");

function walk(dir){
  const out=[];
  for(const e of fs.readdirSync(dir,{withFileTypes:true})){
    const f=path.join(dir,e.name);
    if(e.isDirectory())out.push(...walk(f));
    else if(/\.html?$/i.test(e.name))out.push(f);
  }
  return out;
}
function rel(f){return path.relative(ROOT,f).split(path.sep).join("/")}

function convertHeaders(source){
  let changed=0;
  const out=source.replace(/<header\b([^>]*)>([\s\S]*?)<\/header>/gi,(whole,attrs,inner)=>{
    changed++;
    const cls=(attrs.match(/class=["']([^"']*)["']/i)||[])[1]||"";
    const isHero=/\b(hero|cc-top|aph-header)\b/i.test(cls);
    const tag=isHero?"section":"div";
    return `<${tag}${attrs} data-arshif-former-header="true">${inner}</${tag}>`;
  });
  return {source:out,changed:out===source?0:changed};
}

const files=walk(HALLS).sort();
let changedFiles=0,totalHeadersBefore=0,totalHeadersAfter=0;
const report=[];

for(const abs of files){
  let s=fs.readFileSync(abs,"utf8");
  const before=(s.match(/<header\b/gi)||[]).length;
  totalHeadersBefore+=before;

  if(WRITE&&before){
    const r=convertHeaders(s);
    s=r.source;
    fs.writeFileSync(abs,s);
    if(r.changed)changedFiles++;
  }

  const after=(s.match(/<header\b/gi)||[]).length;
  totalHeadersAfter+=after;
  report.push({file:rel(abs),headersBefore:before,headersAfter:after});
}

console.log(JSON.stringify({
  mode:WRITE?"write":"check",
  hallPages:files.length,
  sourceHeadersBefore:totalHeadersBefore,
  sourceHeadersAfter:totalHeadersAfter,
  changedFiles,
  rule:"One runtime official ARSHIF/VNV page header; Hall-local hero/modal wrappers are not <header> elements.",
  pages:report
},null,2));

if(!WRITE&&totalHeadersAfter!==0)process.exitCode=1;
