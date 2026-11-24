/* ARSHIF search: pure ranking and public-route checks; no query transmission. */
export function publicURL(value){
 try{const u=new URL(value);if(u.protocol!=="https:"||u.username||u.password)return null;
 if(/(?:^|\/)(?:admin|private|credentials?|vault|diagnostics?|backup|stos)(?:\/|$)/i.test(u.pathname))return null;
 return u.href}catch{return null}
}
export function routeKey(value){const u=new URL(value);return u.hostname.replace(/^vervenveda\.github\.io$/,"vervenveda.com")+u.pathname.replace(/index\.html$/,"").replace(/\/$/,"")+u.search+u.hash}
export function canonicalRecords(entries){return entries.filter(e=>e?.status==="active"&&e.directoryVisible===true&&e.access==="free-public"&&publicURL(e.url)).map(e=>({id:e.id,title:e.title,url:e.url,description:e.description||"",subject:e.category,type:e.type,keywords:e.keywords||[],source:"Master ecosystem directory",developmentStatus:e.developmentStatus||"unassessed"}))}
export function pageRecords(pages){return pages.filter(p=>p?.title&&publicURL(p.url)&&["vervenveda.com","vervenveda.github.io","artist1970.github.io"].includes(new URL(p.url).hostname)).map(p=>({id:p.id||p.url,title:p.title,url:p.url,description:"Public page catalog entry",subject:p.category||"Other",type:"Public page",keywords:[p.repo,p.path,p.source].filter(Boolean),source:"Public page catalog"}))}
export function mergeRecords(...lists){const map=new Map;for(const list of lists)for(const r of list){if(!r?.title||!publicURL(r.url))continue;const key=routeKey(r.url);if(!map.has(key))map.set(key,r)}return [...map.values()]}
const clean=s=>String(s??"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim();
export function search(records,query="",subject=""){const q=clean(query),terms=q.split(/\s+/).filter(Boolean);return records.filter(r=>!subject||r.subject===subject).map(r=>{const t=clean(r.title),body=clean([r.description,r.subject,r.type,r.source,...(r.keywords||[])].join(" "));if(!terms.every(x=>t.includes(x)||body.includes(x)))return null;return {record:r,score:(q&&t===q?100:0)+(q&&t.includes(q)?40:0)+terms.reduce((n,x)=>n+(t.includes(x)?8:1),0)}}).filter(Boolean).sort((a,b)=>b.score-a.score||a.record.title.localeCompare(b.record.title)).map(x=>x.record)}
