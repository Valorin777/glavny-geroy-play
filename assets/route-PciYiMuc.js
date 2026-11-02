import{c as o}from"./index-D9xZJ6Fk.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=o("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=o("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=o("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=o("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]),s=60;function r(t,e){if(t.latitude===null||t.longitude===null||e.latitude===null||e.longitude===null)return null;const a=6378137,n=Math.PI/180,l=(e.latitude-t.latitude)*n,i=(e.longitude-t.longitude)*n,u=Math.sin(l/2)**2+Math.cos(t.latitude*n)*Math.cos(e.latitude*n)*Math.sin(i/2)**2;return 2*a*Math.asin(Math.min(1,Math.sqrt(u)))}const h=["на север","на северо-восток","на восток","на юго-восток","на юг","на юго-запад","на запад","на северо-запад"];function p(t,e){if(r(t,e)===null)return null;const a=Math.PI/180,n=Math.sin((e.longitude-t.longitude)*a)*Math.cos(e.latitude*a),l=Math.cos(t.latitude*a)*Math.sin(e.latitude*a)-Math.sin(t.latitude*a)*Math.cos(e.latitude*a)*Math.cos((e.longitude-t.longitude)*a),i=(Math.atan2(n,l)/a+360)%360;return h[Math.round(i/45)%8]}function S(t){return t<1e3?`${Math.round(t/10)*10} м`:`${(t/1e3).toFixed(t<1e4?1:0).replace(".",",")} км`}function M(t,e){const a=r(t.place,e.place);return a!==null&&a<=s}function L(t){return t.slice(1).map((e,a)=>{const n=a+1,l=t[n-1],i=t.slice(0,n).map((c,d)=>M(c,e)?d:-1).filter(c=>c>=0),u=r(l.place,e.place);return{from:n-1,to:n,meters:u,direction:p(l.place,e.place),sameSpot:u!==null&&u<=s,visit:i.length+1,earlier:i,dateChanged:l.date.trim()!==e.date.trim()}})}function E(t){const e=[];return t.forEach((a,n)=>{a.place.latitude===null?e.push(`Глава ${n+1}: место не отмечено на карте`):a.place.geo||e.push(`Глава ${n+1}: геометрия места не загружена`),(!a.date.trim()||a.datePrecision==="unknown")&&e.push(`Глава ${n+1}: время события не указано`)}),e}export{g as C,k as E,y as R,m as S,E as a,S as f,L as r};
