#!/usr/bin/env node
import fs from "node:fs";
const forbidden=["tools/arshif-global-standard-audit.mjs","tools/semantic-hierarchy-audit.mjs","tools/arshif-halls-header-audit.mjs","tools/arshif-semantic-source-normalizer.mjs",".github/workflows/arshif-global-standard.yml"];
const shim="assets/arshif-global-standard-v1.js";
const problems=[];
for(const p of forbidden) if(fs.existsSync(p)) problems.push("retired regulator authority returned: "+p);
if(shim){
 if(!fs.existsSync(shim)) problems.push("compatibility shim missing: "+shim);
 else{
  const src=fs.readFileSync(shim,"utf8");
  if(!/retired/i.test(src)) problems.push("compatibility shim not retired: "+shim);
  for(const token of ["MutationObserver","VNV_HEADER","VNVEcosystemToolbar","vnv-333-ticker.js","vnv-ticker-autopopulate.js","enforceFloor","normalizeHierarchy"]){
   if(src.includes(token)) problems.push("active regulator token returned in "+shim+": "+token);
  }
 }
}
if(problems.length){console.error(JSON.stringify({status:"FAIL",problems},null,2));process.exit(1)}
console.log(JSON.stringify({status:"PASS",scope:"Arshif",policy:"page regulator and reinjection authority absent"},null,2));
