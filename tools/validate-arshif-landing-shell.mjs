#!/usr/bin/env node
import fs from "node:fs";
const file="index.html";
const s=fs.readFileSync(file,"utf8");
const count=re=>(s.match(re)||[]).length;
const problems=[];
const exact=[
 ["333 ticker loader",/vnv-333-ticker\.js/g,1],
 ["auto ticker loader",/vnv-ticker-autopopulate\.js/g,1],
 ["auto ticker invocation",/VNV_TICKER(?:\?*\.)?autoPopulate\s*\(/g,1],
 ["official header loader",/vnv-header-autopopulate\.js/g,1],
 ["official header mount",/VNV_HEADER(?:\?*\.)?mount\s*\(/g,1],
 ["lower-left class tools",/vnv-class-tools-toolbar\.js/g,1],
 ["lower-right ecosystem toolbar",/vnv-ecosystem-toolbar\.js/g,1],
 ["canonical language engine",/vnv-language\.js/g,1],
 ["Linguistics translator loader",/khaemenes-translator-loader\.js/g,1],
 ["phrase bank",/khaemenes-campus-phrases\.js/g,1],
 ["interlingual core",/khaemenes-interlingual-core\.js/g,1],
 ["site footer",/<footer class="site-footer"/g,1],
 ["About ARSHIF section",/class="section arshif-about"/g,1],
 ["feature cards",/class="arshif-feature-card"/g,4]
];
for(const [name,re,want] of exact){const got=count(re);if(got!==want)problems.push(name+": expected "+want+", found "+got)}
if(/arshif-language\.js/.test(s))problems.push("legacy local translator returned");
if(/arshif-global-standard-v1\.js/.test(s))problems.push("retired page regulator loaded by landing page");
if(/arshif-vnv-header-offset-reconcile/.test(s))problems.push("runtime ticker/header observer returned");
if(!/"actions":\[\]/.test(s))problems.push("official header must be hamburger-only");
for(const label of ["Learner Profile","Parent Profile","Enrollment"])if(!s.includes(">"+label+"<"))problems.push("missing access button: "+label);
for(const token of [
 "font:400 33px/1.15 Cinzel",
 "font:400 66px/1.05 Cinzel",
 'font:400 24px/1.35 "Brandon Grotesque"',
 "background:#243038!important",
 "grid-template-columns:repeat(2,minmax(0,1fr))",
 "border-radius:7px"
])if(!s.includes(token))problems.push("landing geometry token missing: "+token);
if(!/id="arshif-class-tools-config"[\s\S]*label:"Translate"/.test(s))problems.push("translator is not exposed from lower-left toolbar");
if(!/id="arshif-canonical-dual-ticker-stack"/.test(s))problems.push("canonical static dual-ticker stack missing");
if(problems.length){console.error(JSON.stringify({status:"FAIL",problems},null,2));process.exit(1)}
console.log(JSON.stringify({status:"PASS",scope:"ARSHIF landing",contract:"one canonical component each; hamburger-only header; canonical translator in lower-left tools; 33/66/24 charcoal landing hierarchy"},null,2));
