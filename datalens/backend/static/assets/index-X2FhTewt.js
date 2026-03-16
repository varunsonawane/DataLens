import{r as P,R as mr,g as wf,j as l,A as mt,m as pe,a as Tf,u as Af}from"./motion-DyHhTJOe.js";import{r as Rf,c as Bt,R as Cf,B as vl,C as Rr,X as Cr,Y as Nr,T as Yi,L as Ki,a as bl,S as Nf,b as Pf,P as Lf,d as Df,e as If,f as kf,g as Uf}from"./charts-Ch_HThLF.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var La={},yl=Rf;La.createRoot=yl.createRoot,La.hydrateRoot=yl.hydrateRoot;function Ff(n={}){const{nonce:e,locale:t,onScriptLoadSuccess:i,onScriptLoadError:r}=n,[s,a]=P.useState(!1),o=P.useRef(i);o.current=i;const d=P.useRef(r);return d.current=r,P.useEffect(()=>{const c=document.createElement("script");return c.src="https://accounts.google.com/gsi/client",t&&(c.src+=`?hl=${t}`),c.async=!0,c.defer=!0,c.nonce=e,c.onload=()=>{var u;a(!0),(u=o.current)===null||u===void 0||u.call(o)},c.onerror=()=>{var u;a(!1),(u=d.current)===null||u===void 0||u.call(d)},document.body.appendChild(c),()=>{document.body.removeChild(c)}},[e]),s}const dd=P.createContext(null);function Of({clientId:n,nonce:e,locale:t,onScriptLoadSuccess:i,onScriptLoadError:r,children:s}){const a=Ff({nonce:e,onScriptLoadSuccess:i,onScriptLoadError:r,locale:t}),o=P.useMemo(()=>({locale:t,clientId:n,scriptLoadedSuccessfully:a}),[n,a]);return mr.createElement(dd.Provider,{value:o},s)}function Bf(){const n=P.useContext(dd);if(!n)throw new Error("Google OAuth components must be used within GoogleOAuthProvider");return n}function zf(n){var e;return(e=n==null?void 0:n.clientId)!==null&&e!==void 0?e:n==null?void 0:n.client_id}const jf={large:40,medium:32,small:20};function Vf({onSuccess:n,onError:e,useOneTap:t,promptMomentNotification:i,type:r="standard",theme:s="outline",size:a="large",text:o,shape:d,logo_alignment:c,width:u,click_listener:h,state:f,containerProps:g,...p}){const _=P.useRef(null),{clientId:m,locale:x,scriptLoadedSuccessfully:y}=Bf(),w=P.useRef(n);w.current=n;const E=P.useRef(e);E.current=e;const A=P.useRef(i);return A.current=i,P.useEffect(()=>{var T,C,v,M,H,N,F,z,j;if(y)return(v=(C=(T=window==null?void 0:window.google)===null||T===void 0?void 0:T.accounts)===null||C===void 0?void 0:C.id)===null||v===void 0||v.initialize({client_id:m,callback:B=>{var I;if(!(B!=null&&B.credential))return(I=E.current)===null||I===void 0?void 0:I.call(E);const{credential:O,select_by:ee}=B;w.current({credential:O,clientId:zf(B),select_by:ee})},...p}),(N=(H=(M=window==null?void 0:window.google)===null||M===void 0?void 0:M.accounts)===null||H===void 0?void 0:H.id)===null||N===void 0||N.renderButton(_.current,{type:r,theme:s,size:a,text:o,shape:d,logo_alignment:c,width:u,locale:x,click_listener:h,state:f}),t&&((j=(z=(F=window==null?void 0:window.google)===null||F===void 0?void 0:F.accounts)===null||z===void 0?void 0:z.id)===null||j===void 0||j.prompt(A.current)),()=>{var B,I,O;t&&((O=(I=(B=window==null?void 0:window.google)===null||B===void 0?void 0:B.accounts)===null||I===void 0?void 0:I.id)===null||O===void 0||O.cancel())}},[m,y,t,r,s,a,o,d,c,u,x]),mr.createElement("div",{...g,ref:_,style:{height:jf[a],...g==null?void 0:g.style}})}/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ud=(...n)=>n.filter((e,t,i)=>!!e&&i.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=P.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},d)=>P.createElement("svg",{ref:d,...Hf,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:ud("lucide",r),...o},[...a.map(([c,u])=>P.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=(n,e)=>{const t=P.forwardRef(({className:i,...r},s)=>P.createElement(Wf,{ref:s,iconNode:e,className:ud(`lucide-${Gf(n)}`,i),...r}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=De("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=De("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=De("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=De("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=De("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=De("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=De("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=De("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=De("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=De("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=De("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=De("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=De("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=De("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=De("CircleUserRound",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=De("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=De("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=De("CornerDownLeft",[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=De("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=De("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=De("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=De("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=De("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=De("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=De("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=De("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=De("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=De("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=De("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=De("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=De("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=De("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=De("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=De("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=De("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=De("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=De("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=De("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=De("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=De("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=De("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=De("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=De("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=De("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=De("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=De("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=De("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=De("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=De("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=De("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=De("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=De("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=De("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=De("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=De("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=De("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=De("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=De("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),Mh={},El=n=>{let e;const t=new Set,i=(u,h)=>{const f=typeof u=="function"?u(e):u;if(!Object.is(f,e)){const g=e;e=h??(typeof f!="object"||f===null)?f:Object.assign({},e,f),t.forEach(p=>p(e,g))}},r=()=>e,d={setState:i,getState:r,getInitialState:()=>c,subscribe:u=>(t.add(u),()=>t.delete(u)),destroy:()=>{(Mh?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},c=e=n(i,r,d);return d},Eh=n=>n?El(n):El;var wd={exports:{}},Td={},Ad={exports:{}},Rd={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fi=P;function wh(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Th=typeof Object.is=="function"?Object.is:wh,Ah=Fi.useState,Rh=Fi.useEffect,Ch=Fi.useLayoutEffect,Nh=Fi.useDebugValue;function Ph(n,e){var t=e(),i=Ah({inst:{value:t,getSnapshot:e}}),r=i[0].inst,s=i[1];return Ch(function(){r.value=t,r.getSnapshot=e,js(r)&&s({inst:r})},[n,t,e]),Rh(function(){return js(r)&&s({inst:r}),n(function(){js(r)&&s({inst:r})})},[n]),Nh(t),t}function js(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Th(n,t)}catch{return!0}}function Lh(n,e){return e()}var Dh=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Lh:Ph;Rd.useSyncExternalStore=Fi.useSyncExternalStore!==void 0?Fi.useSyncExternalStore:Dh;Ad.exports=Rd;var Cd=Ad.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ws=P,Ih=Cd;function kh(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Uh=typeof Object.is=="function"?Object.is:kh,Fh=Ih.useSyncExternalStore,Oh=ws.useRef,Bh=ws.useEffect,zh=ws.useMemo,jh=ws.useDebugValue;Td.useSyncExternalStoreWithSelector=function(n,e,t,i,r){var s=Oh(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=zh(function(){function d(g){if(!c){if(c=!0,u=g,g=i(g),r!==void 0&&a.hasValue){var p=a.value;if(r(p,g))return h=p}return h=g}if(p=h,Uh(u,g))return p;var _=i(g);return r!==void 0&&r(p,_)?(u=g,p):(u=g,h=_)}var c=!1,u,h,f=t===void 0?null:t;return[function(){return d(e())},f===null?void 0:function(){return d(f())}]},[e,t,i,r]);var o=Fh(n,s[0],s[1]);return Bh(function(){a.hasValue=!0,a.value=o},[o]),jh(o),o};wd.exports=Td;var Vh=wd.exports;const Gh=wf(Vh),Nd={},{useDebugValue:Hh}=mr,{useSyncExternalStoreWithSelector:Wh}=Gh;let wl=!1;const Xh=n=>n;function qh(n,e=Xh,t){(Nd?"production":void 0)!=="production"&&t&&!wl&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),wl=!0);const i=Wh(n.subscribe,n.getState,n.getServerState||n.getInitialState,e,t);return Hh(i),i}const Tl=n=>{(Nd?"production":void 0)!=="production"&&typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof n=="function"?Eh(n):n,t=(i,r)=>qh(e,i,r);return Object.assign(t,e),t},zo=n=>n?Tl(n):Tl,Ft=zo((n,e)=>({currentSession:null,sessionList:[],sessionId:null,dataProfile:null,dashboardMode:"upload",globalSearchQuery:"",isStreaming:!1,streamProgress:{eli5:"",architecture:"",analyst:""},activeFormat:"eli5",pendingImages:new Map,resolvedImages:[],voiceOrbState:"idle",conversationHistory:[],chartData:null,setCurrentSession:t=>n({currentSession:t}),setSessionList:t=>n({sessionList:t}),setIsStreaming:t=>n({isStreaming:t}),appendStoryText:(t,i)=>n(r=>({streamProgress:{...r.streamProgress,[t]:r.streamProgress[t]+i}})),setActiveFormat:t=>n({activeFormat:t}),addPendingImage:(t,i,r)=>n(s=>{const a=new Map(s.pendingImages);return a.set(t,{prompt:i,format:r}),{pendingImages:a}}),resolveImage:(t,i,r,s,a)=>n(o=>{const d=new Map(o.pendingImages),c=d.get(t);d.delete(t);const u={id:t,url:i,prompt:r||(c==null?void 0:c.prompt)||"",caption:a||(c==null?void 0:c.caption)||"",format:s||(c==null?void 0:c.format)||"eli5"};return{pendingImages:d,resolvedImages:[...o.resolvedImages,u]}}),setVoiceOrbState:t=>n({voiceOrbState:t}),addConversationMessage:t=>n(i=>{const r=i.conversationHistory[i.conversationHistory.length-1];return r&&r.role===t.role&&r.content===t.content&&Math.abs(new Date(t.timestamp).getTime()-new Date(r.timestamp).getTime())<500?i:{conversationHistory:[...i.conversationHistory,t]}}),setDataProfile:t=>n({dataProfile:t}),setSessionId:t=>n({sessionId:t}),setChartData:t=>n({chartData:t}),resetStream:()=>n({streamProgress:{eli5:"",architecture:"",analyst:""},pendingImages:new Map,resolvedImages:[],isStreaming:!1,chartData:null}),loadSession:t=>{const i=t.images.map(r=>({...r,id:r.id||crypto.randomUUID()}));n({currentSession:t,sessionId:t.session_id,dataProfile:t.data_profile,streamProgress:{eli5:t.stories.eli5||"",architecture:t.stories.architecture||"",analyst:t.stories.analyst||""},resolvedImages:i,pendingImages:new Map,conversationHistory:t.conversation_history||[],isStreaming:!1,chartData:t.stories.chart_data||null,activeFormat:"eli5",dashboardMode:"session"})},finalizeStories:t=>{const{sessionId:i,dataProfile:r,resolvedImages:s}=e();if(!i||!r)return;const a={session_id:i,created_at:new Date().toISOString(),filename:r.filename||"dataset",data_profile:r,stories:t,images:s,conversation_history:e().conversationHistory};n({currentSession:a,streamProgress:{eli5:t.eli5||"",architecture:t.architecture||"",analyst:t.analyst||""},chartData:t.chart_data||null,isStreaming:!1})},setDashboardMode:t=>n({dashboardMode:t}),setGlobalSearchQuery:t=>n({globalSearchQuery:t}),clearChat:()=>n({currentSession:null,sessionId:`agent_${crypto.randomUUID()}`,dataProfile:null,conversationHistory:[],pendingImages:new Map,resolvedImages:[],chartData:null})})),$h=()=>{if(typeof window<"u"){const e=localStorage.getItem("datalens-theme")||"dark";return e==="dark"?(document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light")):(document.documentElement.classList.remove("dark"),document.documentElement.classList.add("light")),e}return"dark"},Hi=zo(n=>({theme:$h(),sidebarOpen:!0,toggleTheme:()=>n(e=>{const t=e.theme==="light"?"dark":"light";return typeof window<"u"&&(localStorage.setItem("datalens-theme",t),t==="dark"?(document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light")):(document.documentElement.classList.remove("dark"),document.documentElement.classList.add("light"))),{theme:t}}),setTheme:e=>n(()=>(typeof window<"u"&&(localStorage.setItem("datalens-theme",e),e==="dark"?(document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light")):(document.documentElement.classList.remove("dark"),document.documentElement.classList.add("light"))),{theme:e})),toggleSidebar:()=>n(e=>({sidebarOpen:!e.sidebarOpen})),setSidebarOpen:e=>n(()=>({sidebarOpen:e}))}));function Yh(){const{isStreaming:n,globalSearchQuery:e,setGlobalSearchQuery:t,setDashboardMode:i}=Ft(),{theme:r,toggleTheme:s,sidebarOpen:a,toggleSidebar:o}=Hi(),[d,c]=P.useState([]),[u,h]=P.useState([]),[f,g]=P.useState(!1),p=P.useRef(0),_=P.useRef(n),m=P.useRef(null);P.useEffect(()=>{if(_.current&&!n){const T=++p.current,C={id:T,message:"Data Story is ready! 🎉",time:new Date,read:!1};c(v=>[C,...v]),h(v=>[...v,C]),setTimeout(()=>{h(v=>v.filter(M=>M.id!==T))},5e3)}_.current=n},[n]),P.useEffect(()=>{if(!f)return;const T=C=>{m.current&&!m.current.contains(C.target)&&g(!1)};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[f]);const x=d.filter(T=>!T.read).length,y=()=>{g(T=>!T),c(T=>T.map(C=>({...C,read:!0})))},w=T=>h(C=>C.filter(v=>v.id!==T)),E=()=>c([]),A=T=>{const C=Math.floor((Date.now()-T.getTime())/1e3);return C<60?"just now":C<3600?`${Math.floor(C/60)}m ago`:`${Math.floor(C/3600)}h ago`};return l.jsxs(l.Fragment,{children:[l.jsxs("header",{className:"flex-shrink-0 flex items-center justify-between px-6 h-16 z-40 transition-all duration-300 bg-white dark:bg-[#020617] border-b border-slate-200 dark:border-white/5",children:[l.jsxs("div",{className:"flex items-center gap-4 flex-1",children:[l.jsx("button",{onClick:o,className:"w-10 h-10 flex items-center justify-center rounded-xl transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/50 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white",children:a?l.jsx(fh,{size:20}):l.jsx(hh,{size:20})}),l.jsxs("div",{className:"hidden md:flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-50 dark:bg-[#0f172a]/50 border border-slate-200 dark:border-slate-800/60 focus-within:border-emerald-500/50 transition-colors w-full max-w-md",children:[l.jsx(yd,{size:16,className:"text-slate-400 dark:text-slate-500"}),l.jsx("input",{type:"text",placeholder:"Search stories...",value:e,onChange:T=>t(T.target.value),onKeyDown:T=>{T.key==="Enter"&&i("directory")},className:"flex-1 bg-transparent text-sm text-slate-900 dark:text-slate-200 outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"}),l.jsx("kbd",{className:"text-[10px] px-1.5 py-0.5 rounded font-medium font-sans bg-slate-200 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700/50",children:"⌘ K"})]})]}),l.jsxs("div",{className:"flex items-center gap-4 justify-end",children:[n&&l.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20",children:[l.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),l.jsx("span",{className:"text-xs font-semibold text-emerald-400",children:"Processing..."})]}),l.jsxs("div",{className:"relative",ref:m,children:[l.jsxs("button",{id:"notification-bell",onClick:y,className:"relative w-9 h-9 flex items-center justify-center rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors",children:[l.jsx(Sl,{size:18}),x>0&&l.jsx("span",{className:"absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-0.5 flex items-center justify-center bg-emerald-500 text-white text-[9px] font-bold rounded-full border border-white dark:border-[#020617]",children:x>9?"9+":x})]}),l.jsx(mt,{children:f&&l.jsxs(pe.div,{initial:{opacity:0,y:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-8,scale:.95},transition:{type:"spring",stiffness:400,damping:30},className:"absolute right-0 top-12 w-[calc(100vw-2rem)] sm:w-80 rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 z-50",children:[l.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800/60",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Sl,{size:14,className:"text-slate-600 dark:text-slate-400"}),l.jsx("span",{className:"text-sm font-semibold text-slate-800 dark:text-slate-200",children:"Notifications"}),d.length>0&&l.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold",children:d.length})]}),d.length>0&&l.jsx("button",{onClick:E,className:"text-[11px] text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors",children:"Clear all"})]}),l.jsx("div",{className:"max-h-72 overflow-y-auto",children:d.length===0?l.jsxs("div",{className:"flex flex-col items-center justify-center py-10 gap-2 text-center",children:[l.jsx(qf,{size:24,className:"text-slate-300 dark:text-slate-600"}),l.jsx("p",{className:"text-sm text-slate-400 dark:text-slate-500",children:"No notifications yet"}),l.jsx("p",{className:"text-xs text-slate-300 dark:text-slate-600",children:"You'll be notified when stories are ready"})]}):d.map(T=>l.jsxs("div",{className:`flex items-start gap-3 px-4 py-3 border-b border-slate-50 dark:border-slate-800/40 last:border-0 transition-colors ${T.read?"":"bg-emerald-50/50 dark:bg-emerald-500/5"}`,children:[l.jsx("div",{className:"w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-500/15 flex items-center justify-center flex-shrink-0 mt-0.5",children:l.jsx(Da,{size:14,className:"text-emerald-600 dark:text-emerald-400"})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:"text-sm text-slate-800 dark:text-slate-200 font-medium",children:T.message}),l.jsx("p",{className:"text-[11px] text-slate-400 dark:text-slate-500 mt-0.5",children:A(T.time)})]}),l.jsx("button",{onClick:()=>c(C=>C.filter(v=>v.id!==T.id)),className:"text-slate-300 dark:text-slate-600 hover:text-slate-500 dark:hover:text-slate-400 transition-colors flex-shrink-0",children:l.jsx(mi,{size:13})})]},T.id))})]})})]}),l.jsx("button",{onClick:s,className:"w-9 h-9 flex items-center justify-center rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors",title:`Switch to ${r==="dark"?"light":"dark"} mode`,children:r==="dark"?l.jsx(gh,{size:18}):l.jsx(uh,{size:18})})]})]}),l.jsx("div",{className:"fixed top-20 right-5 z-[9999] flex flex-col gap-2 pointer-events-none",children:l.jsx(mt,{children:u.map(T=>l.jsxs(pe.div,{initial:{opacity:0,x:60,scale:.9},animate:{opacity:1,x:0,scale:1},exit:{opacity:0,x:60,scale:.9},transition:{type:"spring",stiffness:350,damping:28},className:"flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl pointer-events-auto cursor-pointer bg-white dark:bg-slate-800 border border-emerald-400/40 dark:border-emerald-500/30",onClick:()=>w(T.id),children:[l.jsx(Da,{size:18,className:"text-emerald-500 flex-shrink-0"}),l.jsx("span",{className:"text-sm font-medium text-slate-800 dark:text-slate-200",children:T.message}),l.jsx(mi,{size:14,className:"text-slate-400 flex-shrink-0 ml-1"})]},T.id))})})]})}const Kh={};function Zh(n,e){let t;try{t=n()}catch{return}return{getItem:r=>{var s;const a=d=>d===null?null:JSON.parse(d,void 0),o=(s=t.getItem(r))!=null?s:null;return o instanceof Promise?o.then(a):a(o)},setItem:(r,s)=>t.setItem(r,JSON.stringify(s,void 0)),removeItem:r=>t.removeItem(r)}}const ur=n=>e=>{try{const t=n(e);return t instanceof Promise?t:{then(i){return ur(i)(t)},catch(i){return this}}}catch(t){return{then(i){return this},catch(i){return ur(i)(t)}}}},Jh=(n,e)=>(t,i,r)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:m=>m,version:0,merge:(m,x)=>({...x,...m}),...e},a=!1;const o=new Set,d=new Set;let c;try{c=s.getStorage()}catch{}if(!c)return n((...m)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),t(...m)},i,r);const u=ur(s.serialize),h=()=>{const m=s.partialize({...i()});let x;const y=u({state:m,version:s.version}).then(w=>c.setItem(s.name,w)).catch(w=>{x=w});if(x)throw x;return y},f=r.setState;r.setState=(m,x)=>{f(m,x),h()};const g=n((...m)=>{t(...m),h()},i,r);let p;const _=()=>{var m;if(!c)return;a=!1,o.forEach(y=>y(i()));const x=((m=s.onRehydrateStorage)==null?void 0:m.call(s,i()))||void 0;return ur(c.getItem.bind(c))(s.name).then(y=>{if(y)return s.deserialize(y)}).then(y=>{if(y)if(typeof y.version=="number"&&y.version!==s.version){if(s.migrate)return s.migrate(y.state,y.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return y.state}).then(y=>{var w;return p=s.merge(y,(w=i())!=null?w:g),t(p,!0),h()}).then(()=>{x==null||x(p,void 0),a=!0,d.forEach(y=>y(p))}).catch(y=>{x==null||x(void 0,y)})};return r.persist={setOptions:m=>{s={...s,...m},m.getStorage&&(c=m.getStorage())},clearStorage:()=>{c==null||c.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>_(),hasHydrated:()=>a,onHydrate:m=>(o.add(m),()=>{o.delete(m)}),onFinishHydration:m=>(d.add(m),()=>{d.delete(m)})},_(),p||g},Qh=(n,e)=>(t,i,r)=>{let s={storage:Zh(()=>localStorage),partialize:_=>_,version:0,merge:(_,m)=>({...m,..._}),...e},a=!1;const o=new Set,d=new Set;let c=s.storage;if(!c)return n((..._)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),t(..._)},i,r);const u=()=>{const _=s.partialize({...i()});return c.setItem(s.name,{state:_,version:s.version})},h=r.setState;r.setState=(_,m)=>{h(_,m),u()};const f=n((..._)=>{t(..._),u()},i,r);r.getInitialState=()=>f;let g;const p=()=>{var _,m;if(!c)return;a=!1,o.forEach(y=>{var w;return y((w=i())!=null?w:f)});const x=((m=s.onRehydrateStorage)==null?void 0:m.call(s,(_=i())!=null?_:f))||void 0;return ur(c.getItem.bind(c))(s.name).then(y=>{if(y)if(typeof y.version=="number"&&y.version!==s.version){if(s.migrate)return[!0,s.migrate(y.state,y.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,y.state];return[!1,void 0]}).then(y=>{var w;const[E,A]=y;if(g=s.merge(A,(w=i())!=null?w:f),t(g,!0),E)return u()}).then(()=>{x==null||x(g,void 0),g=i(),a=!0,d.forEach(y=>y(g))}).catch(y=>{x==null||x(void 0,y)})};return r.persist={setOptions:_=>{s={...s,..._},_.storage&&(c=_.storage)},clearStorage:()=>{c==null||c.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>p(),hasHydrated:()=>a,onHydrate:_=>(o.add(_),()=>{o.delete(_)}),onFinishHydration:_=>(d.add(_),()=>{d.delete(_)})},s.skipHydration||p(),g||f},ep=(n,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((Kh?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Jh(n,e)):Qh(n,e),tp=ep,Pd="https://datalens-backend-844382502061.us-central1.run.app";function np(){return"guest_"+crypto.randomUUID()}async function ei(n,e={}){return fetch(`${Pd}${n}`,{headers:{"Content-Type":"application/json",...e.headers},...e})}async function Al(n){try{await fetch(`${Pd}/sessions/claim-unclaimed`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`}})}catch{}}function Ts(){const{appToken:n,isGuest:e,guestId:t}=Kn.getState();if(n)return`Bearer ${n}`;if(e&&t)return`Guest ${t}`}const Kn=zo()(tp((n,e)=>({user:null,isGuest:!1,guestId:null,appToken:null,isLoading:!1,error:null,loginWithGoogle:async t=>{n({isLoading:!0,error:null});try{const i=await ei("/auth/google",{method:"POST",body:JSON.stringify({credential:t})});if(!i.ok){const a=await i.json();throw new Error(a.detail??"Google sign-in failed.")}const{user:r,app_token:s}=await i.json();n({user:r,appToken:s,isGuest:!1,guestId:null,isLoading:!1}),await Al(s)}catch(i){throw n({error:i.message,isLoading:!1}),i}},loginWithEmail:async(t,i)=>{n({isLoading:!0,error:null});try{const r=await ei("/auth/login",{method:"POST",body:JSON.stringify({email:t,password:i})});if(!r.ok){const o=await r.json();throw new Error(o.detail??"Login failed.")}const{user:s,app_token:a}=await r.json();n({user:s,appToken:a,isGuest:!1,guestId:null,isLoading:!1}),await Al(a)}catch(r){throw n({error:r.message,isLoading:!1}),r}},registerWithEmail:async(t,i,r)=>{n({isLoading:!0,error:null});try{const s=await ei("/auth/register",{method:"POST",body:JSON.stringify({email:t,name:i,password:r})});if(!s.ok){const d=await s.json();throw new Error(d.detail??"Registration failed.")}const{user:a,app_token:o}=await s.json();n({user:a,appToken:o,isGuest:!1,guestId:null,isLoading:!1})}catch(s){throw n({error:s.message,isLoading:!1}),s}},continueAsGuest:()=>{n({user:null,isGuest:!0,guestId:np(),appToken:null,error:null})},signOut:async()=>{const{appToken:t}=e();if(t)try{await ei("/auth/logout",{method:"POST",headers:{Authorization:`Bearer ${t}`}})}catch{}n({user:null,isGuest:!1,guestId:null,appToken:null,error:null})},updateProfile:async t=>{const{appToken:i}=e();if(!i)throw new Error("Not authenticated.");const r=await ei("/users/me",{method:"PATCH",headers:{Authorization:`Bearer ${i}`},body:JSON.stringify(t)});if(!r.ok)throw new Error("Profile update failed.");const s=await r.json();n({user:s})},deleteAccount:async()=>{const{appToken:t}=e();if(!t)throw new Error("Not authenticated.");if(!(await ei("/users/me",{method:"DELETE",headers:{Authorization:`Bearer ${t}`}})).ok)throw new Error("Account deletion failed.");n({user:null,isGuest:!1,guestId:null,appToken:null})},refreshUser:async()=>{const{appToken:t}=e();if(t)try{const i=await ei("/auth/me",{headers:{Authorization:`Bearer ${t}`}});if(i.ok){const r=await i.json();n({user:r})}else n({user:null,appToken:null})}catch{}},clearError:()=>n({error:null})}),{name:"datalens-auth",partialize:n=>({user:n.user,isGuest:n.isGuest,guestId:n.guestId,appToken:n.appToken})}));function Ld(n,e){return function(){return n.apply(e,arguments)}}const{toString:ip}=Object.prototype,{getPrototypeOf:jo}=Object,{iterator:As,toStringTag:Dd}=Symbol,Rs=(n=>e=>{const t=ip.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),on=n=>(n=n.toLowerCase(),e=>Rs(e)===n),Cs=n=>e=>typeof e===n,{isArray:Wi}=Array,Oi=Cs("undefined");function xr(n){return n!==null&&!Oi(n)&&n.constructor!==null&&!Oi(n.constructor)&&zt(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Id=on("ArrayBuffer");function rp(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&Id(n.buffer),e}const sp=Cs("string"),zt=Cs("function"),kd=Cs("number"),_r=n=>n!==null&&typeof n=="object",ap=n=>n===!0||n===!1,ss=n=>{if(Rs(n)!=="object")return!1;const e=jo(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Dd in n)&&!(As in n)},op=n=>{if(!_r(n)||xr(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},lp=on("Date"),cp=on("File"),dp=on("Blob"),up=on("FileList"),fp=n=>_r(n)&&zt(n.pipe),hp=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||zt(n.append)&&((e=Rs(n))==="formdata"||e==="object"&&zt(n.toString)&&n.toString()==="[object FormData]"))},pp=on("URLSearchParams"),[mp,gp,xp,_p]=["ReadableStream","Request","Response","Headers"].map(on),vp=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function vr(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,r;if(typeof n!="object"&&(n=[n]),Wi(n))for(i=0,r=n.length;i<r;i++)e.call(null,n[i],i,n);else{if(xr(n))return;const s=t?Object.getOwnPropertyNames(n):Object.keys(n),a=s.length;let o;for(i=0;i<a;i++)o=s[i],e.call(null,n[o],o,n)}}function Ud(n,e){if(xr(n))return null;e=e.toLowerCase();const t=Object.keys(n);let i=t.length,r;for(;i-- >0;)if(r=t[i],e===r.toLowerCase())return r;return null}const ui=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Fd=n=>!Oi(n)&&n!==ui;function Fa(){const{caseless:n,skipUndefined:e}=Fd(this)&&this||{},t={},i=(r,s)=>{if(s==="__proto__"||s==="constructor"||s==="prototype")return;const a=n&&Ud(t,s)||s;ss(t[a])&&ss(r)?t[a]=Fa(t[a],r):ss(r)?t[a]=Fa({},r):Wi(r)?t[a]=r.slice():(!e||!Oi(r))&&(t[a]=r)};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&vr(arguments[r],i);return t}const bp=(n,e,t,{allOwnKeys:i}={})=>(vr(e,(r,s)=>{t&&zt(r)?Object.defineProperty(n,s,{value:Ld(r,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(n,s,{value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),n),yp=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),Sp=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),Object.defineProperty(n.prototype,"constructor",{value:n,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},Mp=(n,e,t,i)=>{let r,s,a;const o={};if(e=e||{},n==null)return e;do{for(r=Object.getOwnPropertyNames(n),s=r.length;s-- >0;)a=r[s],(!i||i(a,n,e))&&!o[a]&&(e[a]=n[a],o[a]=!0);n=t!==!1&&jo(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},Ep=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},wp=n=>{if(!n)return null;if(Wi(n))return n;let e=n.length;if(!kd(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},Tp=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&jo(Uint8Array)),Ap=(n,e)=>{const i=(n&&n[As]).call(n);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(n,s[0],s[1])}},Rp=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},Cp=on("HTMLFormElement"),Np=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,r){return i.toUpperCase()+r}),Rl=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),Pp=on("RegExp"),Od=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};vr(t,(r,s)=>{let a;(a=e(r,s,n))!==!1&&(i[s]=a||r)}),Object.defineProperties(n,i)},Lp=n=>{Od(n,(e,t)=>{if(zt(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const i=n[t];if(zt(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},Dp=(n,e)=>{const t={},i=r=>{r.forEach(s=>{t[s]=!0})};return Wi(n)?i(n):i(String(n).split(e)),t},Ip=()=>{},kp=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e;function Up(n){return!!(n&&zt(n.append)&&n[Dd]==="FormData"&&n[As])}const Fp=n=>{const e=new Array(10),t=(i,r)=>{if(_r(i)){if(e.indexOf(i)>=0)return;if(xr(i))return i;if(!("toJSON"in i)){e[r]=i;const s=Wi(i)?[]:{};return vr(i,(a,o)=>{const d=t(a,r+1);!Oi(d)&&(s[o]=d)}),e[r]=void 0,s}}return i};return t(n,0)},Op=on("AsyncFunction"),Bp=n=>n&&(_r(n)||zt(n))&&zt(n.then)&&zt(n.catch),Bd=((n,e)=>n?setImmediate:e?((t,i)=>(ui.addEventListener("message",({source:r,data:s})=>{r===ui&&s===t&&i.length&&i.shift()()},!1),r=>{i.push(r),ui.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",zt(ui.postMessage)),zp=typeof queueMicrotask<"u"?queueMicrotask.bind(ui):typeof process<"u"&&process.nextTick||Bd,jp=n=>n!=null&&zt(n[As]),q={isArray:Wi,isArrayBuffer:Id,isBuffer:xr,isFormData:hp,isArrayBufferView:rp,isString:sp,isNumber:kd,isBoolean:ap,isObject:_r,isPlainObject:ss,isEmptyObject:op,isReadableStream:mp,isRequest:gp,isResponse:xp,isHeaders:_p,isUndefined:Oi,isDate:lp,isFile:cp,isBlob:dp,isRegExp:Pp,isFunction:zt,isStream:fp,isURLSearchParams:pp,isTypedArray:Tp,isFileList:up,forEach:vr,merge:Fa,extend:bp,trim:vp,stripBOM:yp,inherits:Sp,toFlatObject:Mp,kindOf:Rs,kindOfTest:on,endsWith:Ep,toArray:wp,forEachEntry:Ap,matchAll:Rp,isHTMLForm:Cp,hasOwnProperty:Rl,hasOwnProp:Rl,reduceDescriptors:Od,freezeMethods:Lp,toObjectSet:Dp,toCamelCase:Np,noop:Ip,toFiniteNumber:kp,findKey:Ud,global:ui,isContextDefined:Fd,isSpecCompliantForm:Up,toJSONObject:Fp,isAsyncFn:Op,isThenable:Bp,setImmediate:Bd,asap:zp,isIterable:jp};let Be=class zd extends Error{static from(e,t,i,r,s,a){const o=new zd(e.message,t||e.code,i,r,s);return o.cause=e,o.name=e.name,a&&Object.assign(o,a),o}constructor(e,t,i,r,s){super(e),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s,this.status=s.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.status}}};Be.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Be.ERR_BAD_OPTION="ERR_BAD_OPTION";Be.ECONNABORTED="ECONNABORTED";Be.ETIMEDOUT="ETIMEDOUT";Be.ERR_NETWORK="ERR_NETWORK";Be.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Be.ERR_DEPRECATED="ERR_DEPRECATED";Be.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Be.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Be.ERR_CANCELED="ERR_CANCELED";Be.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Be.ERR_INVALID_URL="ERR_INVALID_URL";const Vp=null;function Oa(n){return q.isPlainObject(n)||q.isArray(n)}function jd(n){return q.endsWith(n,"[]")?n.slice(0,-2):n}function Cl(n,e,t){return n?n.concat(e).map(function(r,s){return r=jd(r),!t&&s?"["+r+"]":r}).join(t?".":""):e}function Gp(n){return q.isArray(n)&&!n.some(Oa)}const Hp=q.toFlatObject(q,{},null,function(e){return/^is[A-Z]/.test(e)});function Ns(n,e,t){if(!q.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=q.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,m){return!q.isUndefined(m[_])});const i=t.metaTokens,r=t.visitor||u,s=t.dots,a=t.indexes,d=(t.Blob||typeof Blob<"u"&&Blob)&&q.isSpecCompliantForm(e);if(!q.isFunction(r))throw new TypeError("visitor must be a function");function c(p){if(p===null)return"";if(q.isDate(p))return p.toISOString();if(q.isBoolean(p))return p.toString();if(!d&&q.isBlob(p))throw new Be("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(p)||q.isTypedArray(p)?d&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,_,m){let x=p;if(p&&!m&&typeof p=="object"){if(q.endsWith(_,"{}"))_=i?_:_.slice(0,-2),p=JSON.stringify(p);else if(q.isArray(p)&&Gp(p)||(q.isFileList(p)||q.endsWith(_,"[]"))&&(x=q.toArray(p)))return _=jd(_),x.forEach(function(w,E){!(q.isUndefined(w)||w===null)&&e.append(a===!0?Cl([_],E,s):a===null?_:_+"[]",c(w))}),!1}return Oa(p)?!0:(e.append(Cl(m,_,s),c(p)),!1)}const h=[],f=Object.assign(Hp,{defaultVisitor:u,convertValue:c,isVisitable:Oa});function g(p,_){if(!q.isUndefined(p)){if(h.indexOf(p)!==-1)throw Error("Circular reference detected in "+_.join("."));h.push(p),q.forEach(p,function(x,y){(!(q.isUndefined(x)||x===null)&&r.call(e,x,q.isString(y)?y.trim():y,_,f))===!0&&g(x,_?_.concat(y):[y])}),h.pop()}}if(!q.isObject(n))throw new TypeError("data must be an object");return g(n),e}function Nl(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Vo(n,e){this._pairs=[],n&&Ns(n,this,e)}const Vd=Vo.prototype;Vd.append=function(e,t){this._pairs.push([e,t])};Vd.toString=function(e){const t=e?function(i){return e.call(this,i,Nl)}:Nl;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function Wp(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Gd(n,e,t){if(!e)return n;const i=t&&t.encode||Wp,r=q.isFunction(t)?{serialize:t}:t,s=r&&r.serialize;let a;if(s?a=s(e,r):a=q.isURLSearchParams(e)?e.toString():new Vo(e,r).toString(i),a){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+a}return n}class Pl{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){q.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Go={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Xp=typeof URLSearchParams<"u"?URLSearchParams:Vo,qp=typeof FormData<"u"?FormData:null,$p=typeof Blob<"u"?Blob:null,Yp={isBrowser:!0,classes:{URLSearchParams:Xp,FormData:qp,Blob:$p},protocols:["http","https","file","blob","url","data"]},Ho=typeof window<"u"&&typeof document<"u",Ba=typeof navigator=="object"&&navigator||void 0,Kp=Ho&&(!Ba||["ReactNative","NativeScript","NS"].indexOf(Ba.product)<0),Zp=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Jp=Ho&&window.location.href||"http://localhost",Qp=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ho,hasStandardBrowserEnv:Kp,hasStandardBrowserWebWorkerEnv:Zp,navigator:Ba,origin:Jp},Symbol.toStringTag,{value:"Module"})),Dt={...Qp,...Yp};function em(n,e){return Ns(n,new Dt.classes.URLSearchParams,{visitor:function(t,i,r,s){return Dt.isNode&&q.isBuffer(t)?(this.append(i,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}function tm(n){return q.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function nm(n){const e={},t=Object.keys(n);let i;const r=t.length;let s;for(i=0;i<r;i++)s=t[i],e[s]=n[s];return e}function Hd(n){function e(t,i,r,s){let a=t[s++];if(a==="__proto__")return!0;const o=Number.isFinite(+a),d=s>=t.length;return a=!a&&q.isArray(r)?r.length:a,d?(q.hasOwnProp(r,a)?r[a]=[r[a],i]:r[a]=i,!o):((!r[a]||!q.isObject(r[a]))&&(r[a]=[]),e(t,i,r[a],s)&&q.isArray(r[a])&&(r[a]=nm(r[a])),!o)}if(q.isFormData(n)&&q.isFunction(n.entries)){const t={};return q.forEachEntry(n,(i,r)=>{e(tm(i),r,t,0)}),t}return null}function im(n,e,t){if(q.isString(n))try{return(e||JSON.parse)(n),q.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const br={transitional:Go,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const i=t.getContentType()||"",r=i.indexOf("application/json")>-1,s=q.isObject(e);if(s&&q.isHTMLForm(e)&&(e=new FormData(e)),q.isFormData(e))return r?JSON.stringify(Hd(e)):e;if(q.isArrayBuffer(e)||q.isBuffer(e)||q.isStream(e)||q.isFile(e)||q.isBlob(e)||q.isReadableStream(e))return e;if(q.isArrayBufferView(e))return e.buffer;if(q.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return em(e,this.formSerializer).toString();if((o=q.isFileList(e))||i.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Ns(o?{"files[]":e}:e,d&&new d,this.formSerializer)}}return s||r?(t.setContentType("application/json",!1),im(e)):e}],transformResponse:[function(e){const t=this.transitional||br.transitional,i=t&&t.forcedJSONParsing,r=this.responseType==="json";if(q.isResponse(e)||q.isReadableStream(e))return e;if(e&&q.isString(e)&&(i&&!this.responseType||r)){const a=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e,this.parseReviver)}catch(o){if(a)throw o.name==="SyntaxError"?Be.from(o,Be.ERR_BAD_RESPONSE,this,null,this.response):o}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Dt.classes.FormData,Blob:Dt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};q.forEach(["delete","get","head","post","put","patch"],n=>{br.headers[n]={}});const rm=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),sm=n=>{const e={};let t,i,r;return n&&n.split(`
`).forEach(function(a){r=a.indexOf(":"),t=a.substring(0,r).trim().toLowerCase(),i=a.substring(r+1).trim(),!(!t||e[t]&&rm[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},Ll=Symbol("internals");function Zi(n){return n&&String(n).trim().toLowerCase()}function as(n){return n===!1||n==null?n:q.isArray(n)?n.map(as):String(n)}function am(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const om=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Vs(n,e,t,i,r){if(q.isFunction(i))return i.call(this,e,t);if(r&&(e=t),!!q.isString(e)){if(q.isString(i))return e.indexOf(i)!==-1;if(q.isRegExp(i))return i.test(e)}}function lm(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function cm(n,e){const t=q.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{value:function(r,s,a){return this[i].call(this,e,r,s,a)},configurable:!0})})}let jt=class{constructor(e){e&&this.set(e)}set(e,t,i){const r=this;function s(o,d,c){const u=Zi(d);if(!u)throw new Error("header name must be a non-empty string");const h=q.findKey(r,u);(!h||r[h]===void 0||c===!0||c===void 0&&r[h]!==!1)&&(r[h||d]=as(o))}const a=(o,d)=>q.forEach(o,(c,u)=>s(c,u,d));if(q.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(q.isString(e)&&(e=e.trim())&&!om(e))a(sm(e),t);else if(q.isObject(e)&&q.isIterable(e)){let o={},d,c;for(const u of e){if(!q.isArray(u))throw TypeError("Object iterator must return a key-value pair");o[c=u[0]]=(d=o[c])?q.isArray(d)?[...d,u[1]]:[d,u[1]]:u[1]}a(o,t)}else e!=null&&s(t,e,i);return this}get(e,t){if(e=Zi(e),e){const i=q.findKey(this,e);if(i){const r=this[i];if(!t)return r;if(t===!0)return am(r);if(q.isFunction(t))return t.call(this,r,i);if(q.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Zi(e),e){const i=q.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||Vs(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let r=!1;function s(a){if(a=Zi(a),a){const o=q.findKey(i,a);o&&(!t||Vs(i,i[o],o,t))&&(delete i[o],r=!0)}}return q.isArray(e)?e.forEach(s):s(e),r}clear(e){const t=Object.keys(this);let i=t.length,r=!1;for(;i--;){const s=t[i];(!e||Vs(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const t=this,i={};return q.forEach(this,(r,s)=>{const a=q.findKey(i,s);if(a){t[a]=as(r),delete t[s];return}const o=e?lm(s):String(s).trim();o!==s&&delete t[s],t[o]=as(r),i[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return q.forEach(this,(i,r)=>{i!=null&&i!==!1&&(t[r]=e&&q.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Ll]=this[Ll]={accessors:{}}).accessors,r=this.prototype;function s(a){const o=Zi(a);i[o]||(cm(r,a),i[o]=!0)}return q.isArray(e)?e.forEach(s):s(e),this}};jt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);q.reduceDescriptors(jt.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(i){this[t]=i}}});q.freezeMethods(jt);function Gs(n,e){const t=this||br,i=e||t,r=jt.from(i.headers);let s=i.data;return q.forEach(n,function(o){s=o.call(t,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function Wd(n){return!!(n&&n.__CANCEL__)}let yr=class extends Be{constructor(e,t,i){super(e??"canceled",Be.ERR_CANCELED,t,i),this.name="CanceledError",this.__CANCEL__=!0}};function Xd(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new Be("Request failed with status code "+t.status,[Be.ERR_BAD_REQUEST,Be.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function dm(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function um(n,e){n=n||10;const t=new Array(n),i=new Array(n);let r=0,s=0,a;return e=e!==void 0?e:1e3,function(d){const c=Date.now(),u=i[s];a||(a=c),t[r]=d,i[r]=c;let h=s,f=0;for(;h!==r;)f+=t[h++],h=h%n;if(r=(r+1)%n,r===s&&(s=(s+1)%n),c-a<e)return;const g=u&&c-u;return g?Math.round(f*1e3/g):void 0}}function fm(n,e){let t=0,i=1e3/e,r,s;const a=(c,u=Date.now())=>{t=u,r=null,s&&(clearTimeout(s),s=null),n(...c)};return[(...c)=>{const u=Date.now(),h=u-t;h>=i?a(c,u):(r=c,s||(s=setTimeout(()=>{s=null,a(r)},i-h)))},()=>r&&a(r)]}const xs=(n,e,t=3)=>{let i=0;const r=um(50,250);return fm(s=>{const a=s.loaded,o=s.lengthComputable?s.total:void 0,d=a-i,c=r(d),u=a<=o;i=a;const h={loaded:a,total:o,progress:o?a/o:void 0,bytes:d,rate:c||void 0,estimated:c&&o&&u?(o-a)/c:void 0,event:s,lengthComputable:o!=null,[e?"download":"upload"]:!0};n(h)},t)},Dl=(n,e)=>{const t=n!=null;return[i=>e[0]({lengthComputable:t,total:n,loaded:i}),e[1]]},Il=n=>(...e)=>q.asap(()=>n(...e)),hm=Dt.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,Dt.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(Dt.origin),Dt.navigator&&/(msie|trident)/i.test(Dt.navigator.userAgent)):()=>!0,pm=Dt.hasStandardBrowserEnv?{write(n,e,t,i,r,s,a){if(typeof document>"u")return;const o=[`${n}=${encodeURIComponent(e)}`];q.isNumber(t)&&o.push(`expires=${new Date(t).toUTCString()}`),q.isString(i)&&o.push(`path=${i}`),q.isString(r)&&o.push(`domain=${r}`),s===!0&&o.push("secure"),q.isString(a)&&o.push(`SameSite=${a}`),document.cookie=o.join("; ")},read(n){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+n+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(n){this.write(n,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function mm(n){return typeof n!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function gm(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function qd(n,e,t){let i=!mm(e);return n&&(i||t==!1)?gm(n,e):e}const kl=n=>n instanceof jt?{...n}:n;function gi(n,e){e=e||{};const t={};function i(c,u,h,f){return q.isPlainObject(c)&&q.isPlainObject(u)?q.merge.call({caseless:f},c,u):q.isPlainObject(u)?q.merge({},u):q.isArray(u)?u.slice():u}function r(c,u,h,f){if(q.isUndefined(u)){if(!q.isUndefined(c))return i(void 0,c,h,f)}else return i(c,u,h,f)}function s(c,u){if(!q.isUndefined(u))return i(void 0,u)}function a(c,u){if(q.isUndefined(u)){if(!q.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function o(c,u,h){if(h in e)return i(c,u);if(h in n)return i(void 0,c)}const d={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:o,headers:(c,u,h)=>r(kl(c),kl(u),h,!0)};return q.forEach(Object.keys({...n,...e}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const h=q.hasOwnProp(d,u)?d[u]:r,f=h(n[u],e[u],u);q.isUndefined(f)&&h!==o||(t[u]=f)}),t}const $d=n=>{const e=gi({},n);let{data:t,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:a,auth:o}=e;if(e.headers=a=jt.from(a),e.url=Gd(qd(e.baseURL,e.url,e.allowAbsoluteUrls),n.params,n.paramsSerializer),o&&a.set("Authorization","Basic "+btoa((o.username||"")+":"+(o.password?unescape(encodeURIComponent(o.password)):""))),q.isFormData(t)){if(Dt.hasStandardBrowserEnv||Dt.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(q.isFunction(t.getHeaders)){const d=t.getHeaders(),c=["content-type","content-length"];Object.entries(d).forEach(([u,h])=>{c.includes(u.toLowerCase())&&a.set(u,h)})}}if(Dt.hasStandardBrowserEnv&&(i&&q.isFunction(i)&&(i=i(e)),i||i!==!1&&hm(e.url))){const d=r&&s&&pm.read(s);d&&a.set(r,d)}return e},xm=typeof XMLHttpRequest<"u",_m=xm&&function(n){return new Promise(function(t,i){const r=$d(n);let s=r.data;const a=jt.from(r.headers).normalize();let{responseType:o,onUploadProgress:d,onDownloadProgress:c}=r,u,h,f,g,p;function _(){g&&g(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout;function x(){if(!m)return;const w=jt.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),A={data:!o||o==="text"||o==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:w,config:n,request:m};Xd(function(C){t(C),_()},function(C){i(C),_()},A),m=null}"onloadend"in m?m.onloadend=x:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(x)},m.onabort=function(){m&&(i(new Be("Request aborted",Be.ECONNABORTED,n,m)),m=null)},m.onerror=function(E){const A=E&&E.message?E.message:"Network Error",T=new Be(A,Be.ERR_NETWORK,n,m);T.event=E||null,i(T),m=null},m.ontimeout=function(){let E=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const A=r.transitional||Go;r.timeoutErrorMessage&&(E=r.timeoutErrorMessage),i(new Be(E,A.clarifyTimeoutError?Be.ETIMEDOUT:Be.ECONNABORTED,n,m)),m=null},s===void 0&&a.setContentType(null),"setRequestHeader"in m&&q.forEach(a.toJSON(),function(E,A){m.setRequestHeader(A,E)}),q.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),o&&o!=="json"&&(m.responseType=r.responseType),c&&([f,p]=xs(c,!0),m.addEventListener("progress",f)),d&&m.upload&&([h,g]=xs(d),m.upload.addEventListener("progress",h),m.upload.addEventListener("loadend",g)),(r.cancelToken||r.signal)&&(u=w=>{m&&(i(!w||w.type?new yr(null,n,m):w),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const y=dm(r.url);if(y&&Dt.protocols.indexOf(y)===-1){i(new Be("Unsupported protocol "+y+":",Be.ERR_BAD_REQUEST,n));return}m.send(s||null)})},vm=(n,e)=>{const{length:t}=n=n?n.filter(Boolean):[];if(e||t){let i=new AbortController,r;const s=function(c){if(!r){r=!0,o();const u=c instanceof Error?c:this.reason;i.abort(u instanceof Be?u:new yr(u instanceof Error?u.message:u))}};let a=e&&setTimeout(()=>{a=null,s(new Be(`timeout of ${e}ms exceeded`,Be.ETIMEDOUT))},e);const o=()=>{n&&(a&&clearTimeout(a),a=null,n.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),n=null)};n.forEach(c=>c.addEventListener("abort",s));const{signal:d}=i;return d.unsubscribe=()=>q.asap(o),d}},bm=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let i=0,r;for(;i<t;)r=i+e,yield n.slice(i,r),i=r},ym=async function*(n,e){for await(const t of Sm(n))yield*bm(t,e)},Sm=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:i}=await e.read();if(t)break;yield i}}finally{await e.cancel()}},Ul=(n,e,t,i)=>{const r=ym(n,e);let s=0,a,o=d=>{a||(a=!0,i&&i(d))};return new ReadableStream({async pull(d){try{const{done:c,value:u}=await r.next();if(c){o(),d.close();return}let h=u.byteLength;if(t){let f=s+=h;t(f)}d.enqueue(new Uint8Array(u))}catch(c){throw o(c),c}},cancel(d){return o(d),r.return()}},{highWaterMark:2})},Fl=64*1024,{isFunction:Pr}=q,Mm=(({Request:n,Response:e})=>({Request:n,Response:e}))(q.global),{ReadableStream:Ol,TextEncoder:Bl}=q.global,zl=(n,...e)=>{try{return!!n(...e)}catch{return!1}},Em=n=>{n=q.merge.call({skipUndefined:!0},Mm,n);const{fetch:e,Request:t,Response:i}=n,r=e?Pr(e):typeof fetch=="function",s=Pr(t),a=Pr(i);if(!r)return!1;const o=r&&Pr(Ol),d=r&&(typeof Bl=="function"?(p=>_=>p.encode(_))(new Bl):async p=>new Uint8Array(await new t(p).arrayBuffer())),c=s&&o&&zl(()=>{let p=!1;const _=new t(Dt.origin,{body:new Ol,method:"POST",get duplex(){return p=!0,"half"}}).headers.has("Content-Type");return p&&!_}),u=a&&o&&zl(()=>q.isReadableStream(new i("").body)),h={stream:u&&(p=>p.body)};r&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!h[p]&&(h[p]=(_,m)=>{let x=_&&_[p];if(x)return x.call(_);throw new Be(`Response type '${p}' is not supported`,Be.ERR_NOT_SUPPORT,m)})});const f=async p=>{if(p==null)return 0;if(q.isBlob(p))return p.size;if(q.isSpecCompliantForm(p))return(await new t(Dt.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(q.isArrayBufferView(p)||q.isArrayBuffer(p))return p.byteLength;if(q.isURLSearchParams(p)&&(p=p+""),q.isString(p))return(await d(p)).byteLength},g=async(p,_)=>{const m=q.toFiniteNumber(p.getContentLength());return m??f(_)};return async p=>{let{url:_,method:m,data:x,signal:y,cancelToken:w,timeout:E,onDownloadProgress:A,onUploadProgress:T,responseType:C,headers:v,withCredentials:M="same-origin",fetchOptions:H}=$d(p),N=e||fetch;C=C?(C+"").toLowerCase():"text";let F=vm([y,w&&w.toAbortSignal()],E),z=null;const j=F&&F.unsubscribe&&(()=>{F.unsubscribe()});let B;try{if(T&&c&&m!=="get"&&m!=="head"&&(B=await g(v,x))!==0){let te=new t(_,{method:"POST",body:x,duplex:"half"}),J;if(q.isFormData(x)&&(J=te.headers.get("content-type"))&&v.setContentType(J),te.body){const[fe,Fe]=Dl(B,xs(Il(T)));x=Ul(te.body,Fl,fe,Fe)}}q.isString(M)||(M=M?"include":"omit");const I=s&&"credentials"in t.prototype,O={...H,signal:F,method:m.toUpperCase(),headers:v.normalize().toJSON(),body:x,duplex:"half",credentials:I?M:void 0};z=s&&new t(_,O);let ee=await(s?N(z,H):N(_,O));const ie=u&&(C==="stream"||C==="response");if(u&&(A||ie&&j)){const te={};["status","statusText","headers"].forEach(Ee=>{te[Ee]=ee[Ee]});const J=q.toFiniteNumber(ee.headers.get("content-length")),[fe,Fe]=A&&Dl(J,xs(Il(A),!0))||[];ee=new i(Ul(ee.body,Fl,fe,()=>{Fe&&Fe(),j&&j()}),te)}C=C||"text";let K=await h[q.findKey(h,C)||"text"](ee,p);return!ie&&j&&j(),await new Promise((te,J)=>{Xd(te,J,{data:K,headers:jt.from(ee.headers),status:ee.status,statusText:ee.statusText,config:p,request:z})})}catch(I){throw j&&j(),I&&I.name==="TypeError"&&/Load failed|fetch/i.test(I.message)?Object.assign(new Be("Network Error",Be.ERR_NETWORK,p,z,I&&I.response),{cause:I.cause||I}):Be.from(I,I&&I.code,p,z,I&&I.response)}}},wm=new Map,Yd=n=>{let e=n&&n.env||{};const{fetch:t,Request:i,Response:r}=e,s=[i,r,t];let a=s.length,o=a,d,c,u=wm;for(;o--;)d=s[o],c=u.get(d),c===void 0&&u.set(d,c=o?new Map:Em(e)),u=c;return c};Yd();const Wo={http:Vp,xhr:_m,fetch:{get:Yd}};q.forEach(Wo,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const jl=n=>`- ${n}`,Tm=n=>q.isFunction(n)||n===null||n===!1;function Am(n,e){n=q.isArray(n)?n:[n];const{length:t}=n;let i,r;const s={};for(let a=0;a<t;a++){i=n[a];let o;if(r=i,!Tm(i)&&(r=Wo[(o=String(i)).toLowerCase()],r===void 0))throw new Be(`Unknown adapter '${o}'`);if(r&&(q.isFunction(r)||(r=r.get(e))))break;s[o||"#"+a]=r}if(!r){const a=Object.entries(s).map(([d,c])=>`adapter ${d} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=t?a.length>1?`since :
`+a.map(jl).join(`
`):" "+jl(a[0]):"as no adapter specified";throw new Be("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r}const Kd={getAdapter:Am,adapters:Wo};function Hs(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new yr(null,n)}function Vl(n){return Hs(n),n.headers=jt.from(n.headers),n.data=Gs.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Kd.getAdapter(n.adapter||br.adapter,n)(n).then(function(i){return Hs(n),i.data=Gs.call(n,n.transformResponse,i),i.headers=jt.from(i.headers),i},function(i){return Wd(i)||(Hs(n),i&&i.response&&(i.response.data=Gs.call(n,n.transformResponse,i.response),i.response.headers=jt.from(i.response.headers))),Promise.reject(i)})}const Zd="1.13.5",Ps={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{Ps[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const Gl={};Ps.transitional=function(e,t,i){function r(s,a){return"[Axios v"+Zd+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return(s,a,o)=>{if(e===!1)throw new Be(r(a," has been removed"+(t?" in "+t:"")),Be.ERR_DEPRECATED);return t&&!Gl[a]&&(Gl[a]=!0,console.warn(r(a," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,a,o):!0}};Ps.spelling=function(e){return(t,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function Rm(n,e,t){if(typeof n!="object")throw new Be("options must be an object",Be.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let r=i.length;for(;r-- >0;){const s=i[r],a=e[s];if(a){const o=n[s],d=o===void 0||a(o,s,n);if(d!==!0)throw new Be("option "+s+" must be "+d,Be.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Be("Unknown option "+s,Be.ERR_BAD_OPTION)}}const os={assertOptions:Rm,validators:Ps},qt=os.validators;let pi=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Pl,response:new Pl}}async request(e,t){try{return await this._request(e,t)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=gi(this.defaults,t);const{transitional:i,paramsSerializer:r,headers:s}=t;i!==void 0&&os.assertOptions(i,{silentJSONParsing:qt.transitional(qt.boolean),forcedJSONParsing:qt.transitional(qt.boolean),clarifyTimeoutError:qt.transitional(qt.boolean),legacyInterceptorReqResOrdering:qt.transitional(qt.boolean)},!1),r!=null&&(q.isFunction(r)?t.paramsSerializer={serialize:r}:os.assertOptions(r,{encode:qt.function,serialize:qt.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),os.assertOptions(t,{baseUrl:qt.spelling("baseURL"),withXsrfToken:qt.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let a=s&&q.merge(s.common,s[t.method]);s&&q.forEach(["delete","get","head","post","put","patch","common"],p=>{delete s[p]}),t.headers=jt.concat(a,s);const o=[];let d=!0;this.interceptors.request.forEach(function(_){if(typeof _.runWhen=="function"&&_.runWhen(t)===!1)return;d=d&&_.synchronous;const m=t.transitional||Go;m&&m.legacyInterceptorReqResOrdering?o.unshift(_.fulfilled,_.rejected):o.push(_.fulfilled,_.rejected)});const c=[];this.interceptors.response.forEach(function(_){c.push(_.fulfilled,_.rejected)});let u,h=0,f;if(!d){const p=[Vl.bind(this),void 0];for(p.unshift(...o),p.push(...c),f=p.length,u=Promise.resolve(t);h<f;)u=u.then(p[h++],p[h++]);return u}f=o.length;let g=t;for(;h<f;){const p=o[h++],_=o[h++];try{g=p(g)}catch(m){_.call(this,m);break}}try{u=Vl.call(this,g)}catch(p){return Promise.reject(p)}for(h=0,f=c.length;h<f;)u=u.then(c[h++],c[h++]);return u}getUri(e){e=gi(this.defaults,e);const t=qd(e.baseURL,e.url,e.allowAbsoluteUrls);return Gd(t,e.params,e.paramsSerializer)}};q.forEach(["delete","get","head","options"],function(e){pi.prototype[e]=function(t,i){return this.request(gi(i||{},{method:e,url:t,data:(i||{}).data}))}});q.forEach(["post","put","patch"],function(e){function t(i){return function(s,a,o){return this.request(gi(o||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}pi.prototype[e]=t(),pi.prototype[e+"Form"]=t(!0)});let Cm=class Jd{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const a=new Promise(o=>{i.subscribe(o),s=o}).then(r);return a.cancel=function(){i.unsubscribe(s)},a},e(function(s,a,o){i.reason||(i.reason=new yr(s,a,o),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=i=>{e.abort(i)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Jd(function(r){e=r}),cancel:e}}};function Nm(n){return function(t){return n.apply(null,t)}}function Pm(n){return q.isObject(n)&&n.isAxiosError===!0}const za={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(za).forEach(([n,e])=>{za[e]=n});function Qd(n){const e=new pi(n),t=Ld(pi.prototype.request,e);return q.extend(t,pi.prototype,e,{allOwnKeys:!0}),q.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return Qd(gi(n,r))},t}const tt=Qd(br);tt.Axios=pi;tt.CanceledError=yr;tt.CancelToken=Cm;tt.isCancel=Wd;tt.VERSION=Zd;tt.toFormData=Ns;tt.AxiosError=Be;tt.Cancel=tt.CanceledError;tt.all=function(e){return Promise.all(e)};tt.spread=Nm;tt.isAxiosError=Pm;tt.mergeConfig=gi;tt.AxiosHeaders=jt;tt.formToJSON=n=>Hd(q.isHTMLForm(n)?new FormData(n):n);tt.getAdapter=Kd.getAdapter;tt.HttpStatusCode=za;tt.default=tt;const{Axios:g1,AxiosError:x1,CanceledError:_1,isCancel:v1,CancelToken:b1,VERSION:y1,all:S1,Cancel:M1,isAxiosError:E1,spread:w1,toFormData:T1,AxiosHeaders:A1,HttpStatusCode:R1,formToJSON:C1,getAdapter:N1,mergeConfig:P1}=tt,Ws="https://datalens-backend-844382502061.us-central1.run.app";function Xs(){const n=Ts();return n?{Authorization:n}:{}}function Ls(){const[n,e]=P.useState(!1),[t,i]=P.useState(null),{setSessionList:r,loadSession:s,sessionList:a}=Ft(),o=Kn(h=>h.appToken??h.guestId??"none"),d=P.useCallback(async(h="all")=>{var f,g;e(!0),i(null);try{const p=await tt.get(`${Ws}/sessions?type=${h}`,{headers:Xs()});r(p.data)}catch(p){const _=tt.isAxiosError(p)?((g=(f=p.response)==null?void 0:f.data)==null?void 0:g.detail)||p.message:"Failed to fetch sessions";i(_),console.error("Failed to fetch sessions:",p)}finally{e(!1)}},[r]),c=P.useCallback(async h=>{var f,g;e(!0),i(null);try{const p=await tt.get(`${Ws}/sessions/${h}`,{headers:Xs()});s(p.data)}catch(p){const _=tt.isAxiosError(p)?((g=(f=p.response)==null?void 0:f.data)==null?void 0:g.detail)||p.message:"Failed to load session";i(_),console.error("Failed to load session:",p)}finally{e(!1)}},[s]),u=P.useCallback(async h=>{var f,g;e(!0),i(null);try{await tt.delete(`${Ws}/sessions/${h}`,{headers:Xs()}),await d();const p=Ft.getState();return p.sessionId===h&&(p.resetStream(),p.setSessionId(null),p.setDataProfile(null),p.currentSession=null),!0}catch(p){const _=tt.isAxiosError(p)?((g=(f=p.response)==null?void 0:f.data)==null?void 0:g.detail)||p.message:"Failed to delete session";return i(_),console.error("Failed to delete session:",p),!1}finally{e(!1)}},[d]);return P.useEffect(()=>{d("data")},[d,o]),{sessions:a,loadSession:c,deleteSession:u,refreshSessions:d,isLoading:n,error:t}}const Lm=(n,e)=>{const t=new Array(n.length+e.length);for(let i=0;i<n.length;i++)t[i]=n[i];for(let i=0;i<e.length;i++)t[n.length+i]=e[i];return t},Dm=(n,e)=>({classGroupId:n,validator:e}),eu=(n=new Map,e=null,t)=>({nextPart:n,validators:e,classGroupId:t}),_s="-",Hl=[],Im="arbitrary..",km=n=>{const e=Fm(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:i}=n;return{getClassGroupId:a=>{if(a.startsWith("[")&&a.endsWith("]"))return Um(a);const o=a.split(_s),d=o[0]===""&&o.length>1?1:0;return tu(o,d,e)},getConflictingClassGroupIds:(a,o)=>{if(o){const d=i[a],c=t[a];return d?c?Lm(c,d):d:c||Hl}return t[a]||Hl}}},tu=(n,e,t)=>{if(n.length-e===0)return t.classGroupId;const r=n[e],s=t.nextPart.get(r);if(s){const c=tu(n,e+1,s);if(c)return c}const a=t.validators;if(a===null)return;const o=e===0?n.join(_s):n.slice(e).join(_s),d=a.length;for(let c=0;c<d;c++){const u=a[c];if(u.validator(o))return u.classGroupId}},Um=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=n.slice(1,-1),t=e.indexOf(":"),i=e.slice(0,t);return i?Im+i:void 0})(),Fm=n=>{const{theme:e,classGroups:t}=n;return Om(t,e)},Om=(n,e)=>{const t=eu();for(const i in n){const r=n[i];Xo(r,t,i,e)}return t},Xo=(n,e,t,i)=>{const r=n.length;for(let s=0;s<r;s++){const a=n[s];Bm(a,e,t,i)}},Bm=(n,e,t,i)=>{if(typeof n=="string"){zm(n,e,t);return}if(typeof n=="function"){jm(n,e,t,i);return}Vm(n,e,t,i)},zm=(n,e,t)=>{const i=n===""?e:nu(e,n);i.classGroupId=t},jm=(n,e,t,i)=>{if(Gm(n)){Xo(n(i),e,t,i);return}e.validators===null&&(e.validators=[]),e.validators.push(Dm(t,n))},Vm=(n,e,t,i)=>{const r=Object.entries(n),s=r.length;for(let a=0;a<s;a++){const[o,d]=r[a];Xo(d,nu(e,o),t,i)}},nu=(n,e)=>{let t=n;const i=e.split(_s),r=i.length;for(let s=0;s<r;s++){const a=i[s];let o=t.nextPart.get(a);o||(o=eu(),t.nextPart.set(a,o)),t=o}return t},Gm=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,Hm=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=Object.create(null),i=Object.create(null);const r=(s,a)=>{t[s]=a,e++,e>n&&(e=0,i=t,t=Object.create(null))};return{get(s){let a=t[s];if(a!==void 0)return a;if((a=i[s])!==void 0)return r(s,a),a},set(s,a){s in t?t[s]=a:r(s,a)}}},ja="!",Wl=":",Wm=[],Xl=(n,e,t,i,r)=>({modifiers:n,hasImportantModifier:e,baseClassName:t,maybePostfixModifierPosition:i,isExternal:r}),Xm=n=>{const{prefix:e,experimentalParseClassName:t}=n;let i=r=>{const s=[];let a=0,o=0,d=0,c;const u=r.length;for(let _=0;_<u;_++){const m=r[_];if(a===0&&o===0){if(m===Wl){s.push(r.slice(d,_)),d=_+1;continue}if(m==="/"){c=_;continue}}m==="["?a++:m==="]"?a--:m==="("?o++:m===")"&&o--}const h=s.length===0?r:r.slice(d);let f=h,g=!1;h.endsWith(ja)?(f=h.slice(0,-1),g=!0):h.startsWith(ja)&&(f=h.slice(1),g=!0);const p=c&&c>d?c-d:void 0;return Xl(s,g,f,p)};if(e){const r=e+Wl,s=i;i=a=>a.startsWith(r)?s(a.slice(r.length)):Xl(Wm,!1,a,void 0,!0)}if(t){const r=i;i=s=>t({className:s,parseClassName:r})}return i},qm=n=>{const e=new Map;return n.orderSensitiveModifiers.forEach((t,i)=>{e.set(t,1e6+i)}),t=>{const i=[];let r=[];for(let s=0;s<t.length;s++){const a=t[s],o=a[0]==="[",d=e.has(a);o||d?(r.length>0&&(r.sort(),i.push(...r),r=[]),i.push(a)):r.push(a)}return r.length>0&&(r.sort(),i.push(...r)),i}},$m=n=>({cache:Hm(n.cacheSize),parseClassName:Xm(n),sortModifiers:qm(n),...km(n)}),Ym=/\s+/,Km=(n,e)=>{const{parseClassName:t,getClassGroupId:i,getConflictingClassGroupIds:r,sortModifiers:s}=e,a=[],o=n.trim().split(Ym);let d="";for(let c=o.length-1;c>=0;c-=1){const u=o[c],{isExternal:h,modifiers:f,hasImportantModifier:g,baseClassName:p,maybePostfixModifierPosition:_}=t(u);if(h){d=u+(d.length>0?" "+d:d);continue}let m=!!_,x=i(m?p.substring(0,_):p);if(!x){if(!m){d=u+(d.length>0?" "+d:d);continue}if(x=i(p),!x){d=u+(d.length>0?" "+d:d);continue}m=!1}const y=f.length===0?"":f.length===1?f[0]:s(f).join(":"),w=g?y+ja:y,E=w+x;if(a.indexOf(E)>-1)continue;a.push(E);const A=r(x,m);for(let T=0;T<A.length;++T){const C=A[T];a.push(w+C)}d=u+(d.length>0?" "+d:d)}return d},Zm=(...n)=>{let e=0,t,i,r="";for(;e<n.length;)(t=n[e++])&&(i=iu(t))&&(r&&(r+=" "),r+=i);return r},iu=n=>{if(typeof n=="string")return n;let e,t="";for(let i=0;i<n.length;i++)n[i]&&(e=iu(n[i]))&&(t&&(t+=" "),t+=e);return t},Jm=(n,...e)=>{let t,i,r,s;const a=d=>{const c=e.reduce((u,h)=>h(u),n());return t=$m(c),i=t.cache.get,r=t.cache.set,s=o,o(d)},o=d=>{const c=i(d);if(c)return c;const u=Km(d,t);return r(d,u),u};return s=a,(...d)=>s(Zm(...d))},Qm=[],Mt=n=>{const e=t=>t[n]||Qm;return e.isThemeGetter=!0,e},ru=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,su=/^\((?:(\w[\w-]*):)?(.+)\)$/i,e0=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,t0=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,n0=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,i0=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,r0=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,s0=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,On=n=>e0.test(n),$e=n=>!!n&&!Number.isNaN(Number(n)),Bn=n=>!!n&&Number.isInteger(Number(n)),qs=n=>n.endsWith("%")&&$e(n.slice(0,-1)),Sn=n=>t0.test(n),au=()=>!0,a0=n=>n0.test(n)&&!i0.test(n),qo=()=>!1,o0=n=>r0.test(n),l0=n=>s0.test(n),c0=n=>!Se(n)&&!Me(n),d0=n=>Zn(n,cu,qo),Se=n=>ru.test(n),ti=n=>Zn(n,du,a0),ql=n=>Zn(n,_0,$e),u0=n=>Zn(n,fu,au),f0=n=>Zn(n,uu,qo),$l=n=>Zn(n,ou,qo),h0=n=>Zn(n,lu,l0),Lr=n=>Zn(n,hu,o0),Me=n=>su.test(n),Ji=n=>_i(n,du),p0=n=>_i(n,uu),Yl=n=>_i(n,ou),m0=n=>_i(n,cu),g0=n=>_i(n,lu),Dr=n=>_i(n,hu,!0),x0=n=>_i(n,fu,!0),Zn=(n,e,t)=>{const i=ru.exec(n);return i?i[1]?e(i[1]):t(i[2]):!1},_i=(n,e,t=!1)=>{const i=su.exec(n);return i?i[1]?e(i[1]):t:!1},ou=n=>n==="position"||n==="percentage",lu=n=>n==="image"||n==="url",cu=n=>n==="length"||n==="size"||n==="bg-size",du=n=>n==="length",_0=n=>n==="number",uu=n=>n==="family-name",fu=n=>n==="number"||n==="weight",hu=n=>n==="shadow",v0=()=>{const n=Mt("color"),e=Mt("font"),t=Mt("text"),i=Mt("font-weight"),r=Mt("tracking"),s=Mt("leading"),a=Mt("breakpoint"),o=Mt("container"),d=Mt("spacing"),c=Mt("radius"),u=Mt("shadow"),h=Mt("inset-shadow"),f=Mt("text-shadow"),g=Mt("drop-shadow"),p=Mt("blur"),_=Mt("perspective"),m=Mt("aspect"),x=Mt("ease"),y=Mt("animate"),w=()=>["auto","avoid","all","avoid-page","page","left","right","column"],E=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],A=()=>[...E(),Me,Se],T=()=>["auto","hidden","clip","visible","scroll"],C=()=>["auto","contain","none"],v=()=>[Me,Se,d],M=()=>[On,"full","auto",...v()],H=()=>[Bn,"none","subgrid",Me,Se],N=()=>["auto",{span:["full",Bn,Me,Se]},Bn,Me,Se],F=()=>[Bn,"auto",Me,Se],z=()=>["auto","min","max","fr",Me,Se],j=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],B=()=>["start","end","center","stretch","center-safe","end-safe"],I=()=>["auto",...v()],O=()=>[On,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...v()],ee=()=>[On,"screen","full","dvw","lvw","svw","min","max","fit",...v()],ie=()=>[On,"screen","full","lh","dvh","lvh","svh","min","max","fit",...v()],K=()=>[n,Me,Se],te=()=>[...E(),Yl,$l,{position:[Me,Se]}],J=()=>["no-repeat",{repeat:["","x","y","space","round"]}],fe=()=>["auto","cover","contain",m0,d0,{size:[Me,Se]}],Fe=()=>[qs,Ji,ti],Ee=()=>["","none","full",c,Me,Se],X=()=>["",$e,Ji,ti],re=()=>["solid","dashed","dotted","double"],se=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ve=()=>[$e,qs,Yl,$l],_e=()=>["","none",p,Me,Se],Re=()=>["none",$e,Me,Se],dt=()=>["none",$e,Me,Se],Ye=()=>[$e,Me,Se],Ze=()=>[On,"full",...v()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Sn],breakpoint:[Sn],color:[au],container:[Sn],"drop-shadow":[Sn],ease:["in","out","in-out"],font:[c0],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Sn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Sn],shadow:[Sn],spacing:["px",$e],text:[Sn],"text-shadow":[Sn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",On,Se,Me,m]}],container:["container"],columns:[{columns:[$e,Se,Me,o]}],"break-after":[{"break-after":w()}],"break-before":[{"break-before":w()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:A()}],overflow:[{overflow:T()}],"overflow-x":[{"overflow-x":T()}],"overflow-y":[{"overflow-y":T()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:M()}],"inset-x":[{"inset-x":M()}],"inset-y":[{"inset-y":M()}],start:[{"inset-s":M(),start:M()}],end:[{"inset-e":M(),end:M()}],"inset-bs":[{"inset-bs":M()}],"inset-be":[{"inset-be":M()}],top:[{top:M()}],right:[{right:M()}],bottom:[{bottom:M()}],left:[{left:M()}],visibility:["visible","invisible","collapse"],z:[{z:[Bn,"auto",Me,Se]}],basis:[{basis:[On,"full","auto",o,...v()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[$e,On,"auto","initial","none",Se]}],grow:[{grow:["",$e,Me,Se]}],shrink:[{shrink:["",$e,Me,Se]}],order:[{order:[Bn,"first","last","none",Me,Se]}],"grid-cols":[{"grid-cols":H()}],"col-start-end":[{col:N()}],"col-start":[{"col-start":F()}],"col-end":[{"col-end":F()}],"grid-rows":[{"grid-rows":H()}],"row-start-end":[{row:N()}],"row-start":[{"row-start":F()}],"row-end":[{"row-end":F()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":z()}],"auto-rows":[{"auto-rows":z()}],gap:[{gap:v()}],"gap-x":[{"gap-x":v()}],"gap-y":[{"gap-y":v()}],"justify-content":[{justify:[...j(),"normal"]}],"justify-items":[{"justify-items":[...B(),"normal"]}],"justify-self":[{"justify-self":["auto",...B()]}],"align-content":[{content:["normal",...j()]}],"align-items":[{items:[...B(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...B(),{baseline:["","last"]}]}],"place-content":[{"place-content":j()}],"place-items":[{"place-items":[...B(),"baseline"]}],"place-self":[{"place-self":["auto",...B()]}],p:[{p:v()}],px:[{px:v()}],py:[{py:v()}],ps:[{ps:v()}],pe:[{pe:v()}],pbs:[{pbs:v()}],pbe:[{pbe:v()}],pt:[{pt:v()}],pr:[{pr:v()}],pb:[{pb:v()}],pl:[{pl:v()}],m:[{m:I()}],mx:[{mx:I()}],my:[{my:I()}],ms:[{ms:I()}],me:[{me:I()}],mbs:[{mbs:I()}],mbe:[{mbe:I()}],mt:[{mt:I()}],mr:[{mr:I()}],mb:[{mb:I()}],ml:[{ml:I()}],"space-x":[{"space-x":v()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":v()}],"space-y-reverse":["space-y-reverse"],size:[{size:O()}],"inline-size":[{inline:["auto",...ee()]}],"min-inline-size":[{"min-inline":["auto",...ee()]}],"max-inline-size":[{"max-inline":["none",...ee()]}],"block-size":[{block:["auto",...ie()]}],"min-block-size":[{"min-block":["auto",...ie()]}],"max-block-size":[{"max-block":["none",...ie()]}],w:[{w:[o,"screen",...O()]}],"min-w":[{"min-w":[o,"screen","none",...O()]}],"max-w":[{"max-w":[o,"screen","none","prose",{screen:[a]},...O()]}],h:[{h:["screen","lh",...O()]}],"min-h":[{"min-h":["screen","lh","none",...O()]}],"max-h":[{"max-h":["screen","lh",...O()]}],"font-size":[{text:["base",t,Ji,ti]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[i,x0,u0]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",qs,Se]}],"font-family":[{font:[p0,f0,e]}],"font-features":[{"font-features":[Se]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[r,Me,Se]}],"line-clamp":[{"line-clamp":[$e,"none",Me,ql]}],leading:[{leading:[s,...v()]}],"list-image":[{"list-image":["none",Me,Se]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Me,Se]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:K()}],"text-color":[{text:K()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...re(),"wavy"]}],"text-decoration-thickness":[{decoration:[$e,"from-font","auto",Me,ti]}],"text-decoration-color":[{decoration:K()}],"underline-offset":[{"underline-offset":[$e,"auto",Me,Se]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:v()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Me,Se]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Me,Se]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:te()}],"bg-repeat":[{bg:J()}],"bg-size":[{bg:fe()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Bn,Me,Se],radial:["",Me,Se],conic:[Bn,Me,Se]},g0,h0]}],"bg-color":[{bg:K()}],"gradient-from-pos":[{from:Fe()}],"gradient-via-pos":[{via:Fe()}],"gradient-to-pos":[{to:Fe()}],"gradient-from":[{from:K()}],"gradient-via":[{via:K()}],"gradient-to":[{to:K()}],rounded:[{rounded:Ee()}],"rounded-s":[{"rounded-s":Ee()}],"rounded-e":[{"rounded-e":Ee()}],"rounded-t":[{"rounded-t":Ee()}],"rounded-r":[{"rounded-r":Ee()}],"rounded-b":[{"rounded-b":Ee()}],"rounded-l":[{"rounded-l":Ee()}],"rounded-ss":[{"rounded-ss":Ee()}],"rounded-se":[{"rounded-se":Ee()}],"rounded-ee":[{"rounded-ee":Ee()}],"rounded-es":[{"rounded-es":Ee()}],"rounded-tl":[{"rounded-tl":Ee()}],"rounded-tr":[{"rounded-tr":Ee()}],"rounded-br":[{"rounded-br":Ee()}],"rounded-bl":[{"rounded-bl":Ee()}],"border-w":[{border:X()}],"border-w-x":[{"border-x":X()}],"border-w-y":[{"border-y":X()}],"border-w-s":[{"border-s":X()}],"border-w-e":[{"border-e":X()}],"border-w-bs":[{"border-bs":X()}],"border-w-be":[{"border-be":X()}],"border-w-t":[{"border-t":X()}],"border-w-r":[{"border-r":X()}],"border-w-b":[{"border-b":X()}],"border-w-l":[{"border-l":X()}],"divide-x":[{"divide-x":X()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":X()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...re(),"hidden","none"]}],"divide-style":[{divide:[...re(),"hidden","none"]}],"border-color":[{border:K()}],"border-color-x":[{"border-x":K()}],"border-color-y":[{"border-y":K()}],"border-color-s":[{"border-s":K()}],"border-color-e":[{"border-e":K()}],"border-color-bs":[{"border-bs":K()}],"border-color-be":[{"border-be":K()}],"border-color-t":[{"border-t":K()}],"border-color-r":[{"border-r":K()}],"border-color-b":[{"border-b":K()}],"border-color-l":[{"border-l":K()}],"divide-color":[{divide:K()}],"outline-style":[{outline:[...re(),"none","hidden"]}],"outline-offset":[{"outline-offset":[$e,Me,Se]}],"outline-w":[{outline:["",$e,Ji,ti]}],"outline-color":[{outline:K()}],shadow:[{shadow:["","none",u,Dr,Lr]}],"shadow-color":[{shadow:K()}],"inset-shadow":[{"inset-shadow":["none",h,Dr,Lr]}],"inset-shadow-color":[{"inset-shadow":K()}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:K()}],"ring-offset-w":[{"ring-offset":[$e,ti]}],"ring-offset-color":[{"ring-offset":K()}],"inset-ring-w":[{"inset-ring":X()}],"inset-ring-color":[{"inset-ring":K()}],"text-shadow":[{"text-shadow":["none",f,Dr,Lr]}],"text-shadow-color":[{"text-shadow":K()}],opacity:[{opacity:[$e,Me,Se]}],"mix-blend":[{"mix-blend":[...se(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":se()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[$e]}],"mask-image-linear-from-pos":[{"mask-linear-from":ve()}],"mask-image-linear-to-pos":[{"mask-linear-to":ve()}],"mask-image-linear-from-color":[{"mask-linear-from":K()}],"mask-image-linear-to-color":[{"mask-linear-to":K()}],"mask-image-t-from-pos":[{"mask-t-from":ve()}],"mask-image-t-to-pos":[{"mask-t-to":ve()}],"mask-image-t-from-color":[{"mask-t-from":K()}],"mask-image-t-to-color":[{"mask-t-to":K()}],"mask-image-r-from-pos":[{"mask-r-from":ve()}],"mask-image-r-to-pos":[{"mask-r-to":ve()}],"mask-image-r-from-color":[{"mask-r-from":K()}],"mask-image-r-to-color":[{"mask-r-to":K()}],"mask-image-b-from-pos":[{"mask-b-from":ve()}],"mask-image-b-to-pos":[{"mask-b-to":ve()}],"mask-image-b-from-color":[{"mask-b-from":K()}],"mask-image-b-to-color":[{"mask-b-to":K()}],"mask-image-l-from-pos":[{"mask-l-from":ve()}],"mask-image-l-to-pos":[{"mask-l-to":ve()}],"mask-image-l-from-color":[{"mask-l-from":K()}],"mask-image-l-to-color":[{"mask-l-to":K()}],"mask-image-x-from-pos":[{"mask-x-from":ve()}],"mask-image-x-to-pos":[{"mask-x-to":ve()}],"mask-image-x-from-color":[{"mask-x-from":K()}],"mask-image-x-to-color":[{"mask-x-to":K()}],"mask-image-y-from-pos":[{"mask-y-from":ve()}],"mask-image-y-to-pos":[{"mask-y-to":ve()}],"mask-image-y-from-color":[{"mask-y-from":K()}],"mask-image-y-to-color":[{"mask-y-to":K()}],"mask-image-radial":[{"mask-radial":[Me,Se]}],"mask-image-radial-from-pos":[{"mask-radial-from":ve()}],"mask-image-radial-to-pos":[{"mask-radial-to":ve()}],"mask-image-radial-from-color":[{"mask-radial-from":K()}],"mask-image-radial-to-color":[{"mask-radial-to":K()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":E()}],"mask-image-conic-pos":[{"mask-conic":[$e]}],"mask-image-conic-from-pos":[{"mask-conic-from":ve()}],"mask-image-conic-to-pos":[{"mask-conic-to":ve()}],"mask-image-conic-from-color":[{"mask-conic-from":K()}],"mask-image-conic-to-color":[{"mask-conic-to":K()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:te()}],"mask-repeat":[{mask:J()}],"mask-size":[{mask:fe()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Me,Se]}],filter:[{filter:["","none",Me,Se]}],blur:[{blur:_e()}],brightness:[{brightness:[$e,Me,Se]}],contrast:[{contrast:[$e,Me,Se]}],"drop-shadow":[{"drop-shadow":["","none",g,Dr,Lr]}],"drop-shadow-color":[{"drop-shadow":K()}],grayscale:[{grayscale:["",$e,Me,Se]}],"hue-rotate":[{"hue-rotate":[$e,Me,Se]}],invert:[{invert:["",$e,Me,Se]}],saturate:[{saturate:[$e,Me,Se]}],sepia:[{sepia:["",$e,Me,Se]}],"backdrop-filter":[{"backdrop-filter":["","none",Me,Se]}],"backdrop-blur":[{"backdrop-blur":_e()}],"backdrop-brightness":[{"backdrop-brightness":[$e,Me,Se]}],"backdrop-contrast":[{"backdrop-contrast":[$e,Me,Se]}],"backdrop-grayscale":[{"backdrop-grayscale":["",$e,Me,Se]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[$e,Me,Se]}],"backdrop-invert":[{"backdrop-invert":["",$e,Me,Se]}],"backdrop-opacity":[{"backdrop-opacity":[$e,Me,Se]}],"backdrop-saturate":[{"backdrop-saturate":[$e,Me,Se]}],"backdrop-sepia":[{"backdrop-sepia":["",$e,Me,Se]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":v()}],"border-spacing-x":[{"border-spacing-x":v()}],"border-spacing-y":[{"border-spacing-y":v()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Me,Se]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[$e,"initial",Me,Se]}],ease:[{ease:["linear","initial",x,Me,Se]}],delay:[{delay:[$e,Me,Se]}],animate:[{animate:["none",y,Me,Se]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[_,Me,Se]}],"perspective-origin":[{"perspective-origin":A()}],rotate:[{rotate:Re()}],"rotate-x":[{"rotate-x":Re()}],"rotate-y":[{"rotate-y":Re()}],"rotate-z":[{"rotate-z":Re()}],scale:[{scale:dt()}],"scale-x":[{"scale-x":dt()}],"scale-y":[{"scale-y":dt()}],"scale-z":[{"scale-z":dt()}],"scale-3d":["scale-3d"],skew:[{skew:Ye()}],"skew-x":[{"skew-x":Ye()}],"skew-y":[{"skew-y":Ye()}],transform:[{transform:[Me,Se,"","none","gpu","cpu"]}],"transform-origin":[{origin:A()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ze()}],"translate-x":[{"translate-x":Ze()}],"translate-y":[{"translate-y":Ze()}],"translate-z":[{"translate-z":Ze()}],"translate-none":["translate-none"],accent:[{accent:K()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:K()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Me,Se]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":v()}],"scroll-mx":[{"scroll-mx":v()}],"scroll-my":[{"scroll-my":v()}],"scroll-ms":[{"scroll-ms":v()}],"scroll-me":[{"scroll-me":v()}],"scroll-mbs":[{"scroll-mbs":v()}],"scroll-mbe":[{"scroll-mbe":v()}],"scroll-mt":[{"scroll-mt":v()}],"scroll-mr":[{"scroll-mr":v()}],"scroll-mb":[{"scroll-mb":v()}],"scroll-ml":[{"scroll-ml":v()}],"scroll-p":[{"scroll-p":v()}],"scroll-px":[{"scroll-px":v()}],"scroll-py":[{"scroll-py":v()}],"scroll-ps":[{"scroll-ps":v()}],"scroll-pe":[{"scroll-pe":v()}],"scroll-pbs":[{"scroll-pbs":v()}],"scroll-pbe":[{"scroll-pbe":v()}],"scroll-pt":[{"scroll-pt":v()}],"scroll-pr":[{"scroll-pr":v()}],"scroll-pb":[{"scroll-pb":v()}],"scroll-pl":[{"scroll-pl":v()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Me,Se]}],fill:[{fill:["none",...K()]}],"stroke-w":[{stroke:[$e,Ji,ti,ql]}],stroke:[{stroke:["none",...K()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},b0=Jm(v0);function it(...n){return b0(Bt(n))}const y0="https://datalens-backend-844382502061.us-central1.run.app",Kl=["from-violet-500 to-indigo-600","from-emerald-500 to-teal-600","from-rose-500 to-pink-600","from-amber-500 to-orange-600","from-cyan-500 to-sky-600","from-fuchsia-500 to-purple-600","from-lime-500 to-green-600","from-red-500 to-rose-600"];function S0(n){let e=0;for(let t=0;t<n.length;t++)e=e*31+n.charCodeAt(t)>>>0;return e}function M0({name:n,size:e="w-20 h-20",textSize:t="text-2xl",ringClass:i}){const r=n.split(/\s+/).filter(Boolean).slice(0,2).map(a=>a[0].toUpperCase()).join(""),s=Kl[S0(n)%Kl.length];return l.jsx("div",{className:it("relative rounded-full flex items-center justify-center select-none",`bg-gradient-to-br ${s}`,e,i&&`ring-2 ring-offset-2 ring-offset-slate-900 ${i}`),children:l.jsx("span",{className:it("font-bold text-white tracking-tight leading-none",t),children:r||"?"})})}const E0=n=>{try{return new Date(n).toLocaleDateString(void 0,{month:"short",year:"numeric"})}catch{return n}},w0={type:"spring",stiffness:340,damping:34};function T0(n){const e={google:{label:"Google",ringClass:"ring-blue-400/60",pillClass:"bg-blue-500/10 text-blue-400 border border-blue-500/20",icon:l.jsx(Ua,{size:10})},password:{label:"Email / Password",ringClass:"ring-violet-400/60",pillClass:"bg-violet-500/10 text-violet-400 border border-violet-500/20",icon:l.jsx(Ua,{size:10})},guest:{label:"Guest",ringClass:"ring-slate-500/40",pillClass:"bg-slate-700/60 text-slate-400 border border-slate-600/30",icon:l.jsx(gd,{size:10})}};return e[n]??e.guest}function A0({open:n,onClose:e}){const{user:t,isGuest:i,guestId:r,appToken:s,signOut:a,updateProfile:o,deleteAccount:d}=Kn(),[c,u]=P.useState([]),[h,f]=P.useState(!1),[g,p]=P.useState(!1),[_,m]=P.useState((t==null?void 0:t.name)??""),[x,y]=P.useState(!1),[w,E]=P.useState(!1),[A,T]=P.useState(!1),C=P.useRef(null);P.useEffect(()=>{if(!n)return;const N=F=>{C.current&&!C.current.contains(F.target)&&e()};return document.addEventListener("mousedown",N),()=>document.removeEventListener("mousedown",N)},[n,e]),P.useEffect(()=>{!n||!s||(f(!0),fetch(`${y0}/users/me/sessions`,{headers:{Authorization:`Bearer ${s}`}}).then(N=>N.json()).then(N=>u(Array.isArray(N)?N:[])).catch(()=>u([])).finally(()=>f(!1)))},[n,s]);const v=async()=>{if(!_.trim()||_===(t==null?void 0:t.name)){p(!1);return}y(!0);try{await o({name:_.trim()})}finally{y(!1),p(!1)}},M=async()=>{T(!0);try{await d(),e()}finally{T(!1),E(!1)}},H=async()=>{await a(),e()};return l.jsx(mt,{children:n&&l.jsxs(l.Fragment,{children:[l.jsx(pe.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"fixed inset-x-0 top-16 bottom-0 z-40 bg-black/30 dark:bg-black/50 backdrop-blur-[2px]"}),l.jsx(pe.div,{ref:C,initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:w0,className:it("fixed right-0 top-16 bottom-0 z-50 w-[340px] flex flex-col","bg-white/90 dark:bg-slate-950/95 backdrop-blur-xl","border-l border-slate-200/60 dark:border-slate-800/60","shadow-[−8px_0_48px_rgba(0,0,0,0.18)]","overflow-hidden"),children:t&&!i?l.jsx(R0,{user:t,sessions:c,sessionsLoading:h,editingName:g,nameInput:_,savingName:x,confirmDelete:w,deleting:A,setEditingName:p,setNameInput:m,setConfirmDelete:E,onSaveName:v,onSignOut:H,onDeleteAccount:M,onClose:e}):l.jsx(C0,{guestId:r,onSignIn:H,onClose:e})})]})})}function R0({user:n,sessions:e,sessionsLoading:t,editingName:i,nameInput:r,savingName:s,confirmDelete:a,deleting:o,setEditingName:d,setNameInput:c,setConfirmDelete:u,onSaveName:h,onSignOut:f,onDeleteAccount:g,onClose:p}){var m;const _=T0(n.auth_method);return l.jsxs("div",{className:"flex flex-col h-full overflow-hidden",children:[l.jsxs("div",{className:"relative flex-shrink-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden",children:[l.jsx("div",{"aria-hidden":!0,className:"pointer-events-none absolute -top-10 -left-10 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl"}),l.jsx("div",{"aria-hidden":!0,className:"pointer-events-none absolute top-12 right-0 w-32 h-32 rounded-full bg-emerald-400/5 blur-2xl"}),l.jsx("button",{onClick:p,className:it("absolute top-3.5 right-3.5 z-10","w-7 h-7 flex items-center justify-center rounded-full","bg-white/10 hover:bg-white/20 text-white/60 hover:text-white/90","backdrop-blur-sm border border-white/10","transition-all duration-150"),children:l.jsx(mi,{size:14})}),l.jsxs("div",{className:"relative z-0 flex flex-col items-center gap-3 px-6 pt-10 pb-7",children:[l.jsxs("div",{className:"relative",children:[l.jsx("div",{className:"absolute inset-0 rounded-full bg-emerald-500/25 blur-md scale-110"}),n.picture?l.jsx("img",{src:n.picture,alt:n.name,referrerPolicy:"no-referrer",className:it("relative w-20 h-20 rounded-full object-cover","ring-2 ring-offset-2 ring-offset-slate-900",_.ringClass)}):l.jsx(M0,{name:n.name||n.email,ringClass:_.ringClass}),l.jsx("span",{className:"absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-slate-900 shadow-emerald-500/60 shadow-sm"})]}),i?l.jsxs("div",{className:"flex items-center gap-2 w-full max-w-[220px]",children:[l.jsx("input",{autoFocus:!0,value:r,onChange:x=>c(x.target.value),onKeyDown:x=>{x.key==="Enter"&&h(),x.key==="Escape"&&d(!1)},className:it("flex-1 text-center text-lg font-bold bg-transparent","border-b border-emerald-500 outline-none","text-white placeholder:text-white/30")}),s?l.jsx(ps,{size:15,className:"animate-spin text-emerald-400 flex-shrink-0"}):l.jsx("button",{onClick:h,className:"flex-shrink-0 text-emerald-400 hover:text-emerald-300 transition-colors",children:l.jsx(Yf,{size:15})})]}):l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("h2",{className:"text-lg font-bold text-white tracking-tight leading-tight",children:n.name}),n.auth_method!=="google"&&l.jsx("button",{onClick:()=>{c(n.name),d(!0)},className:"text-white/30 hover:text-white/70 transition-colors",title:"Edit name",children:l.jsx(ph,{size:13})})]}),l.jsxs("span",{className:it("inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold",_.pillClass),children:[_.icon,_.label]})]})]}),l.jsxs("div",{className:"flex-1 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800",children:[l.jsx("div",{className:"px-4 pt-4 pb-3",children:l.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[l.jsx($s,{icon:l.jsx(Bo,{size:13,className:"text-emerald-500"}),value:String(((m=n.session_ids)==null?void 0:m.length)??0),label:"Sessions"}),l.jsx($s,{icon:l.jsx(Oo,{size:13,className:"text-slate-400"}),value:E0(n.created_at),label:"Joined"}),l.jsx($s,{icon:l.jsx(Ua,{size:13,className:"text-violet-400"}),value:n.auth_method==="google"?"OAuth":"Email",label:"Auth"})]})}),l.jsx("div",{className:"mx-4 mb-4 px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/60",children:l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx(bd,{size:13,className:"text-slate-400 flex-shrink-0"}),l.jsx("span",{className:"text-[11px] text-slate-400 w-10 flex-shrink-0",children:"Email"}),l.jsx("span",{className:"text-xs font-medium text-slate-600 dark:text-slate-300 truncate",children:n.email})]})})]}),l.jsxs("div",{className:"flex-shrink-0 border-t border-slate-100 dark:border-slate-800/60 px-4 py-4 flex flex-col gap-2",children:[l.jsxs(pe.button,{whileHover:{scale:1.01},whileTap:{scale:.98},onClick:f,className:it("flex items-center justify-center gap-2.5 w-full px-4 py-2.5 rounded-xl","text-sm font-medium text-slate-600 dark:text-slate-300","bg-slate-100 dark:bg-slate-800/70 hover:bg-slate-200 dark:hover:bg-slate-800","border border-slate-200 dark:border-slate-700/50","transition-colors duration-150"),children:[l.jsx(vd,{size:14}),"Sign Out"]}),l.jsx(mt,{mode:"wait",children:a?l.jsxs(pe.div,{initial:{opacity:0,y:4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},className:"rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/30 p-3 flex flex-col gap-2.5",children:[l.jsx("p",{className:"text-xs text-red-600 dark:text-red-400 font-medium leading-relaxed",children:"This will permanently delete your account and all your data. This cannot be undone."}),l.jsxs("div",{className:"flex gap-2",children:[l.jsx("button",{onClick:()=>u(!1),className:it("flex-1 py-1.5 text-xs rounded-lg","border border-slate-200 dark:border-slate-700","text-slate-500 dark:text-slate-400","hover:bg-slate-50 dark:hover:bg-slate-800","transition-colors"),children:"Cancel"}),l.jsxs("button",{onClick:g,disabled:o,className:it("flex-1 py-1.5 text-xs rounded-lg font-semibold","bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700","text-white shadow-sm shadow-red-500/30","disabled:opacity-60 disabled:cursor-not-allowed","flex items-center justify-center gap-1.5 transition-all"),children:[o?l.jsx(ps,{size:12,className:"animate-spin"}):null,o?"Deleting…":"Yes, Delete"]})]})]},"delete-confirm"):l.jsxs(pe.button,{initial:{opacity:0,y:4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},whileHover:{scale:1.01},whileTap:{scale:.98},onClick:()=>u(!0),className:it("flex items-center justify-center gap-2 w-full px-4 py-2 rounded-xl","text-xs font-medium text-red-400 dark:text-red-500","hover:bg-red-50 dark:hover:bg-red-500/10","transition-colors duration-150"),children:[l.jsx(Sd,{size:13}),"Delete Account"]},"delete-trigger")})]})]})}function C0({guestId:n,onSignIn:e,onClose:t}){return l.jsxs("div",{className:"flex flex-col h-full",children:[l.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800/60 flex-shrink-0",children:[l.jsx("span",{className:"text-sm font-semibold text-slate-700 dark:text-slate-200",children:"Profile"}),l.jsx("button",{onClick:t,className:"w-7 h-7 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 transition-colors",children:l.jsx(mi,{size:14})})]}),l.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center gap-6 px-8 text-center",children:[l.jsxs("div",{className:"relative",children:[l.jsx("div",{className:"absolute inset-0 rounded-full bg-emerald-500/15 blur-2xl scale-150"}),l.jsx("div",{className:"relative w-24 h-24 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center border border-slate-200 dark:border-slate-700/60 shadow-inner",children:l.jsx(gd,{size:44,className:"text-slate-400 dark:text-slate-500"})})]}),l.jsxs("div",{className:"flex flex-col gap-2",children:[l.jsx("h3",{className:"text-base font-bold text-slate-800 dark:text-white",children:"Browsing as Guest"}),l.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400 leading-relaxed",children:"Your sessions aren't saved between visits. Sign in to keep your work, access history, and unlock all features."}),n&&l.jsx("p",{className:"mt-1 text-[10px] font-mono text-slate-300 dark:text-slate-700 truncate",children:n})]}),l.jsx("div",{className:"w-full flex flex-col gap-1.5 text-left",children:[{icon:l.jsx(Bo,{size:12}),text:"Saved session history"},{icon:l.jsx(_d,{size:12}),text:"Persistent AI-generated images"}].map(({icon:i,text:r})=>l.jsxs("div",{className:"flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400",children:[l.jsx("span",{className:"w-5 h-5 rounded-md bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0",children:i}),r]},r))}),l.jsxs(pe.button,{whileHover:{scale:1.03},whileTap:{scale:.97},onClick:e,className:it("flex items-center gap-2 px-6 py-2.5 rounded-full w-full justify-center","bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500","text-white text-sm font-semibold","shadow-lg shadow-emerald-500/25","transition-all duration-150"),children:[l.jsx(vd,{size:14}),"Sign In to Save Your Work"]})]})]})}function $s({icon:n,value:e,label:t}){return l.jsxs("div",{className:it("flex flex-col items-center gap-1 px-2 py-2.5 rounded-xl","bg-slate-50 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800/60"),children:[l.jsx("span",{className:"flex items-center gap-1",children:n}),l.jsx("span",{className:"text-[11px] font-bold text-slate-700 dark:text-slate-200 leading-none truncate max-w-full",children:e}),l.jsx("span",{className:"text-[9px] text-slate-400 dark:text-slate-600 uppercase tracking-wider",children:t})]})}const N0=[{id:"upload",label:"Upload",icon:l.jsx(gs,{size:18})},{id:"ai",label:"AI Assistant",icon:l.jsx(ms,{size:18})},{id:"story",label:"Data Story",icon:l.jsx(sh,{size:18})}],Zl=["from-violet-500 to-indigo-600","from-emerald-500 to-teal-600","from-rose-500 to-pink-600","from-amber-500 to-orange-600","from-cyan-500 to-sky-600","from-fuchsia-500 to-purple-600","from-lime-500 to-green-600","from-red-500 to-rose-600"];function P0(n){let e=0;for(let t=0;t<n.length;t++)e=e*31+n.charCodeAt(t)>>>0;return e}function L0({name:n}){const e=n.split(/\s+/).filter(Boolean).slice(0,2).map(i=>i[0].toUpperCase()).join("")||"?",t=Zl[P0(n)%Zl.length];return l.jsx("div",{className:Bt("h-10 w-10 rounded-full flex items-center justify-center select-none",`bg-gradient-to-br ${t}`,"ring-2 ring-emerald-500/50 ring-offset-2 ring-offset-white dark:ring-offset-slate-900"),children:l.jsx("span",{className:"text-xs font-bold text-white leading-none",children:e})})}function D0(n){try{return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(n))}catch{return"Unknown date"}}function I0(){const{sidebarOpen:n}=Hi(),{sessionId:e,resetStream:t,setCurrentSession:i,setSessionId:r,setDataProfile:s,dashboardMode:a,setDashboardMode:o}=Ft(),{sessions:d,loadSession:c,deleteSession:u,isLoading:h}=Ls(),{user:f,isGuest:g}=Kn(),[p,_]=P.useState(!1);let m="upload";a==="directory"||a==="session"&&e?m="story":a==="ai"&&(m="ai");const x=P.useCallback(()=>{t(),i(null),r(null),s(null),o("upload")},[t,i,r,s,o]);return l.jsxs("div",{className:"flex justify-between flex-col h-full w-full py-6",children:[l.jsxs("div",{className:"flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-4 gap-8",children:[l.jsxs("div",{className:"flex items-center gap-3 px-2 mb-2 cursor-pointer group",onClick:x,children:[l.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-500 flex-shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.4)] group-hover:scale-105 transition-transform duration-200",children:l.jsx(Es,{size:20,className:"text-[#020617]",strokeWidth:2.5})}),l.jsxs(pe.div,{animate:{display:n?"block":"none",opacity:n?1:0},initial:!1,className:"flex flex-col min-w-0",children:[l.jsx("h1",{className:"text-xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400 leading-tight group-hover:text-emerald-500 dark:group-hover:text-emerald-300 transition-colors",children:"DataLens"}),l.jsx("p",{className:"text-[10px] font-semibold text-slate-400 dark:text-slate-500 tracking-widest uppercase group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors",children:"AI Analytics"})]})]}),l.jsxs("div",{className:"flex flex-col gap-1",children:[l.jsx(pe.div,{animate:{opacity:n?1:0,display:n?"block":"none"},initial:!1,className:"px-2 mb-2",children:l.jsx("span",{className:"text-xs font-bold tracking-widest uppercase text-slate-400 dark:text-slate-600",children:"Workspace"})}),N0.map(y=>{const w=y.id===m;return l.jsxs("button",{onClick:()=>{y.id==="upload"?x():y.id==="story"?o("directory"):y.id==="ai"&&(r(`agent_${crypto.randomUUID()}`),o("ai"))},className:Bt("flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group w-full text-left",w?"bg-emerald-50 dark:bg-slate-800/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-slate-700/50":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/20 border border-transparent"),children:[l.jsx("div",{className:Bt("flex-shrink-0 transition-colors duration-200",w?"text-emerald-600 dark:text-emerald-400":"text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300"),children:y.icon}),l.jsx(pe.span,{animate:{display:n?"block":"none",opacity:n?1:0},initial:!1,className:"font-medium text-sm whitespace-nowrap",children:y.label}),w&&n&&l.jsx(pe.div,{layoutId:"active-indicator",className:"absolute left-0 w-1 h-6 bg-emerald-500 rounded-r-full"})]},y.id)})]}),l.jsxs("div",{className:"flex flex-col gap-1",children:[l.jsx(pe.div,{animate:{opacity:n?1:0,display:n?"flex":"none"},initial:!1,className:"px-2 mb-2 items-center justify-between",children:l.jsx("span",{className:"text-xs font-bold tracking-widest uppercase text-slate-400 dark:text-slate-600",children:"Recent Sessions"})}),l.jsxs("button",{onClick:x,className:Bt("flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group w-full text-left",e?"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/20 border border-transparent":"bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30"),children:[l.jsx("div",{className:"flex-shrink-0 transition-colors duration-200 text-emerald-600 dark:text-emerald-500",children:l.jsx(gs,{size:16})}),l.jsx(pe.span,{animate:{display:n?"block":"none",opacity:n?1:0},initial:!1,className:"font-medium text-sm whitespace-nowrap",children:"New Chat"})]}),h&&d.length===0&&l.jsx("div",{className:"px-3 py-4 text-xs text-slate-500",children:"Loading sessions..."}),d.map(y=>l.jsxs("button",{draggable:!0,onDragStart:w=>{w.dataTransfer.setData("application/json",JSON.stringify({session_id:y.session_id,filename:y.filename}));const E=w.target.getBoundingClientRect();w.dataTransfer.setDragImage(w.target,E.width/2,E.height/2)},onClick:()=>{c(y.session_id),o("session")},className:Bt("flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 group relative w-full text-left cursor-grab active:cursor-grabbing",e===y.session_id&&a==="session"?"bg-emerald-50 dark:bg-slate-800/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-slate-700/50":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/20 border border-transparent","hover:scale-[1.02]"),children:[l.jsxs("div",{className:"flex items-center gap-3 min-w-0 pr-8",children:[l.jsx("div",{className:Bt("flex-shrink-0 transition-colors",e===y.session_id?"text-emerald-600 dark:text-emerald-400":"text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300"),children:l.jsx(ms,{size:16})}),l.jsxs(pe.div,{animate:{display:n?"flex":"none",opacity:n?1:0},initial:!1,className:"flex-col min-w-0 text-left",children:[l.jsx("span",{className:"font-medium text-sm block truncate text-slate-800 dark:text-slate-300",children:y.filename||"Dataset"}),l.jsx("span",{className:"text-[10px] text-slate-400 dark:text-slate-500 block truncate",children:D0(y.created_at)})]})]}),l.jsxs("div",{className:"absolute right-3 flex items-center",children:[l.jsx("div",{onClick:async w=>{w.stopPropagation(),window.confirm("Are you sure you want to delete this session?")&&await u(y.session_id)},className:"hidden group-hover:flex items-center justify-center p-1.5 rounded-md hover:bg-red-500/20 text-slate-500 hover:text-red-400 transition-colors",title:"Delete chat",children:l.jsx(Sd,{size:14})}),y.image_count>0&&l.jsxs(pe.div,{animate:{opacity:n?1:0,display:n?"flex":"none"},initial:!1,className:"items-center justify-center px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-slate-800 text-emerald-500 border border-emerald-500/20 group-hover:hidden",children:[y.image_count," img"]})]})]},y.session_id))]})]}),l.jsxs("div",{className:"mt-4 px-3",children:[l.jsx("div",{className:"mb-3 h-px bg-slate-200/60 dark:bg-slate-700/40"}),l.jsxs("button",{onClick:()=>_(!0),className:Bt("group w-full flex items-center rounded-xl transition-all duration-200","bg-transparent hover:bg-slate-50/50 dark:hover:bg-slate-800/20","border border-transparent hover:border-slate-200 dark:hover:border-slate-700/50",n?"gap-3 px-2.5 py-2 justify-between":"justify-center p-2"),children:[l.jsxs("div",{className:"relative flex-shrink-0",children:[f!=null&&f.picture?l.jsx("img",{src:f.picture,alt:f.name,referrerPolicy:"no-referrer",className:Bt("h-10 w-10 rounded-full object-cover","ring-2 ring-emerald-500/50 ring-offset-2 ring-offset-white dark:ring-offset-slate-900")}):f?l.jsx(L0,{name:f.name||f.email}):l.jsx("div",{className:"h-10 w-10 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center",children:l.jsx(Ed,{size:18,className:"text-emerald-500"})}),g&&l.jsx("span",{className:"absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-amber-400 border-2 border-white dark:border-slate-900 shadow-sm"})]}),l.jsxs(pe.div,{animate:{display:n?"flex":"none",opacity:n?1:0},initial:!1,className:"flex-1 flex-col items-start min-w-0 text-left",children:[l.jsx("p",{className:"text-sm font-bold text-slate-800 dark:text-slate-200 truncate w-full leading-snug",children:(f==null?void 0:f.name)??(g?"Guest":"Sign In")}),l.jsx("p",{className:"text-[11px] font-medium text-slate-400 dark:text-slate-500 truncate w-full leading-snug",children:f?f.auth_method==="google"?"Google Account":f.auth_method==="password"?f.email:"Account":g?"Guest session":"Not signed in"})]}),l.jsx(pe.div,{animate:{display:n?"flex":"none",opacity:n?1:0},initial:!1,className:"flex-shrink-0 flex items-center justify-center",children:l.jsx(mh,{size:16,className:Bt("text-slate-400 dark:text-slate-500","group-hover:text-slate-600 dark:group-hover:text-slate-300","group-hover:rotate-45 transition-all duration-300")})})]})]}),l.jsx(A0,{open:p,onClose:()=>_(!1)})]})}const k0=P.createContext(void 0),U0=({children:n,open:e,setOpen:t,animate:i=!0})=>{const[r,s]=P.useState(!1),a=e!==void 0?e:r,o=t!==void 0?t:s;return l.jsx(k0.Provider,{value:{open:a,setOpen:o,animate:i},children:n})},F0=({children:n,open:e,setOpen:t,animate:i})=>l.jsx(U0,{open:e,setOpen:t,animate:i,children:n}),O0=n=>l.jsxs(l.Fragment,{children:[l.jsx(B0,{...n}),l.jsx(z0,{...n})]}),B0=({className:n,children:e,...t})=>{const{sidebarOpen:i}=Hi();return l.jsx(pe.div,{className:it("h-full px-4 py-4 hidden md:flex md:flex-col flex-shrink-0 z-30 transition-shadow bg-slate-50 dark:bg-[#020617] border-r border-slate-200 dark:border-white/5",n),animate:{width:i?"260px":"80px"},...t,children:e})},z0=({className:n,children:e,...t})=>{const{sidebarOpen:i,toggleSidebar:r}=Hi();return l.jsx("div",{className:"md:hidden",children:l.jsx(mt,{children:i&&l.jsxs(pe.div,{initial:{x:"-100%",opacity:0},animate:{x:0,opacity:1},exit:{x:"-100%",opacity:0},transition:{duration:.3,ease:"easeInOut"},className:it("fixed h-full w-full inset-0 p-10 z-[100] flex flex-col justify-between bg-white dark:bg-[#0f172a]",n),children:[l.jsx("div",{className:"absolute right-10 top-10 z-50 cursor-pointer text-slate-900 dark:text-white transition-colors",onClick:r,children:l.jsx(mi,{})}),e]})})})};function Ys(n){const e=Ts();return{...e?{Authorization:e}:{},...n}}const Ks="https://datalens-backend-844382502061.us-central1.run.app";function Zs(n,e="Request failed"){var r,s;const t=n,i=(s=(r=t==null?void 0:t.response)==null?void 0:r.data)==null?void 0:s.detail;return typeof i=="string"?i:Array.isArray(i)&&i.length>0?i.map(a=>{const o=a.loc?a.loc[a.loc.length-1]:"";return o?`${o}: ${a.msg}`:a.msg}).join(" · "):(t==null?void 0:t.message)||e}function j0({profile:n,onContinue:e}){var h,f,g;const t=n.source==="database",i=n.columns||[],r=((h=n.numeric_columns)==null?void 0:h.length)??0,s=((f=n.categorical_columns)==null?void 0:f.length)??0,a=((g=n.datetime_columns)==null?void 0:g.length)??0,o=i.length>0?Math.round(i.reduce((p,_)=>p+(100-(_.null_pct||0)),0)/i.length):100,d=n.tables_summary??[],c=t?[{label:"Tables",value:n.total_tables??0,cls:"text-emerald-600 dark:text-emerald-400"},{label:"Columns",value:n.total_columns??0,cls:"text-violet-600 dark:text-violet-400"},{label:"Relationships",value:n.total_relationships??0,cls:"text-cyan-600 dark:text-cyan-400"},{label:"Dialect",value:n.dialect??"sql",cls:"text-amber-600 dark:text-amber-400"}]:[{label:"Completeness",value:`${o}%`,cls:"text-emerald-600 dark:text-emerald-400"},{label:"Numeric cols",value:r,cls:"text-violet-600 dark:text-violet-400"},{label:"Categorical",value:s,cls:"text-cyan-600 dark:text-cyan-400"},{label:"Datetime",value:a,cls:"text-amber-600 dark:text-amber-400"}],u=t?`${n.total_tables} tables · ${n.total_columns} columns · ${n.dialect}`:`${n.shape.rows.toLocaleString()} rows × ${n.shape.columns} columns`;return l.jsxs(pe.div,{initial:{opacity:0,y:24,scale:.97},animate:{opacity:1,y:0,scale:1},transition:{duration:.5,ease:[.16,1,.3,1]},className:"w-full max-w-2xl mx-auto px-4 space-y-4",children:[l.jsxs("div",{className:"rounded-2xl p-6 mb-4 bg-white dark:bg-slate-900/80 border border-emerald-200 dark:border-emerald-500/20 shadow-sm dark:shadow-none transition-colors",children:[l.jsxs("div",{className:"flex items-start justify-between gap-4",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-emerald-500 shadow-lg shadow-emerald-500/30",children:t?l.jsx(Ia,{size:22,className:"text-white"}):l.jsx(Da,{size:22,className:"text-white"})}),l.jsxs("div",{children:[l.jsx("p",{className:"font-bold text-base text-slate-900 dark:text-white transition-colors",children:n.filename||(t?"Database connected":"Dataset uploaded")}),l.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400 transition-colors",children:u})]})]}),l.jsxs(pe.button,{onClick:e,whileHover:{scale:1.03},whileTap:{scale:.97},className:"flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white flex-shrink-0 bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-500/30 transition-colors",children:[l.jsx(Es,{size:14}),"Generate Stories",l.jsx(fd,{size:14})]})]}),l.jsx("div",{className:"grid grid-cols-4 gap-3 mt-5",children:c.map(({label:p,value:_,cls:m})=>l.jsxs("div",{className:"rounded-xl p-3 text-center bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/40 transition-colors",children:[l.jsx("p",{className:`text-lg font-bold transition-colors ${m}`,children:_}),l.jsx("p",{className:"text-[11px] mt-0.5 text-slate-500 dark:text-slate-400 transition-colors",children:p})]},p))})]}),t&&d.length>0&&l.jsxs("div",{className:"rounded-2xl p-5 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/40 shadow-sm dark:shadow-none transition-colors",children:[l.jsxs("p",{className:"text-xs font-semibold mb-3 uppercase tracking-wider text-slate-500 dark:text-slate-400 transition-colors",children:["Tables (",d.length,")"]}),l.jsx("div",{className:"flex flex-col gap-1.5 max-h-48 overflow-y-auto pr-1",children:d.map(p=>l.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/40 transition-colors",children:[l.jsxs("span",{className:"flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300",children:[l.jsx(Ia,{size:10,className:"text-emerald-500 flex-shrink-0"}),p.schema&&p.schema!=="default"&&p.schema!=="public"?`${p.schema}.${p.name}`:p.name]}),l.jsxs("span",{className:"text-[11px] text-slate-400 dark:text-slate-500 flex-shrink-0",children:[p.column_count," cols",p.row_count!=null?` · ${p.row_count.toLocaleString()} rows`:""]})]},`${p.schema}.${p.name}`))})]}),!t&&i.length>0&&l.jsxs("div",{className:"rounded-2xl p-5 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/40 shadow-sm dark:shadow-none transition-colors",children:[l.jsxs("p",{className:"text-xs font-semibold mb-3 uppercase tracking-wider text-slate-500 dark:text-slate-400 transition-colors",children:["Columns (",i.length,")"]}),l.jsxs("div",{className:"flex flex-wrap gap-2",children:[i.slice(0,20).map(p=>{var w,E,A;const _=(w=n.numeric_columns)==null?void 0:w.includes(p.name),m=(E=n.categorical_columns)==null?void 0:E.includes(p.name),x=(A=n.datetime_columns)==null?void 0:A.includes(p.name),y=_?"bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 text-violet-700 dark:text-violet-300":m?"bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-300":x?"bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-700 dark:text-amber-300":"bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-400";return l.jsxs("span",{className:`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${y}`,children:[_?l.jsx(lh,{size:10}):m?l.jsx(_h,{size:10}):x?l.jsx(Oo,{size:10}):l.jsx(Bo,{size:10}),p.name]},p.name)}),i.length>20&&l.jsxs("span",{className:"px-2.5 py-1 rounded-lg text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700/40 transition-colors",children:["+",i.length-20," more"]})]})]})]})}function V0({onUploadComplete:n}){const[e,t]=P.useState("file"),[i,r]=P.useState(!1),[s,a]=P.useState(!1),[o,d]=P.useState(null),[c,u]=P.useState(null),[h,f]=P.useState(null),g=P.useRef(null),[p,_]=P.useState({db_type:"postgresql",host:"",port:"5432",database:"",username:"",password:"",schema_filter:""}),m=P.useCallback(A=>{u(A.data_profile),f(A.session_id),d(null)},[]),x=P.useCallback(()=>{c&&h&&n(h,c)},[c,h,n]),y=P.useCallback(async A=>{var C;const T=(C=A.name.split(".").pop())==null?void 0:C.toLowerCase();if(!["csv","xlsx","xls","json"].includes(T||"")){d("Only CSV, Excel, and JSON files are supported.");return}a(!0),d(null);try{const v=new FormData;v.append("file",A);const{data:M}=await tt.post(`${Ks}/upload/file`,v,{headers:Ys({"Content-Type":"multipart/form-data"})});m(M)}catch(v){d(Zs(v,"Upload failed"))}finally{a(!1)}},[m]);P.useCallback(async A=>{a(!0),d(null);try{const{data:T}=await tt.get(`${Ks}/upload/sample/${A}`,{headers:Ys()});m(T)}catch(T){d(Zs(T,"Failed to load sample"))}finally{a(!1)}},[m]);const w=P.useCallback(async A=>{A.preventDefault(),a(!0),d(null);try{const T={db_type:p.db_type,host:p.host,port:p.port,database:p.database,username:p.username,password:p.password};p.schema_filter.trim()&&(T.schema_filter=p.schema_filter.trim());const{data:C}=await tt.post(`${Ks}/upload/database`,T,{headers:Ys()});m(C)}catch(T){d(Zs(T,"Connection failed"))}finally{a(!1)}},[p,m]),E=P.useCallback(A=>{A.preventDefault(),r(!1);const T=A.dataTransfer.files[0];T&&y(T)},[y]);return c&&h?l.jsxs("div",{className:"flex flex-col items-center justify-center min-h-full py-10 relative overflow-hidden",children:[l.jsx("div",{className:"absolute inset-x-0 bottom-0 h-64 pointer-events-none"}),l.jsx(j0,{profile:c,sessionId:h,onContinue:x})]}):l.jsx("div",{className:"flex flex-col items-center justify-center min-h-full py-10 relative overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors",children:l.jsxs("div",{className:"w-full max-w-3xl px-4 relative z-10 flex flex-col items-center",children:[l.jsxs(pe.div,{className:"text-center mb-10 mt-10",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6,ease:[.16,1,.3,1]},children:[l.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 text-slate-900 dark:text-white transition-colors",children:"Upload Your Data"}),l.jsx("p",{className:"text-sm sm:text-base text-slate-500 dark:text-slate-400 transition-colors",children:"Drop your files here and let AI transform them into insights"})]}),l.jsxs("div",{className:"flex bg-slate-200/50 dark:bg-slate-900 rounded-xl p-1 mb-8 border border-slate-300 dark:border-white/5 transition-colors",children:[l.jsxs("button",{onClick:()=>t("file"),className:`flex-1 py-2 px-6 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${e==="file"?"bg-white dark:bg-slate-800 text-emerald-600 dark:text-slate-100 shadow-sm":"text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`,children:[l.jsx(rh,{size:16}),"File Upload"]}),l.jsxs("button",{onClick:()=>t("db"),className:`flex-1 py-2 px-6 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${e==="db"?"bg-white dark:bg-slate-800 text-emerald-600 dark:text-slate-100 shadow-sm":"text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`,children:[l.jsx(Ia,{size:16}),"Database"]})]}),l.jsx("div",{className:"w-full max-w-2xl",children:l.jsx(mt,{mode:"wait",children:e==="file"?l.jsx(pe.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},exit:{opacity:0,y:-16},transition:{duration:.25},children:l.jsxs("div",{onDragOver:A=>{A.preventDefault(),r(!0)},onDragLeave:()=>r(!1),onDrop:E,onClick:()=>{var A;return(A=g.current)==null?void 0:A.click()},className:"cursor-pointer rounded-3xl p-12 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]",style:{background:i?"rgba(15,23,42,0.8)":"rgba(15,23,42,0.4)",border:`1px dashed ${i?"#10b981":"rgba(255,255,255,0.1)"}`,transition:"all 0.2s ease"},children:[l.jsx("div",{className:"w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5",children:s?l.jsx(pe.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},children:l.jsx(Sh,{size:28,className:"text-emerald-500"})}):l.jsx(gs,{size:28,className:"text-slate-400 dark:text-slate-300",strokeWidth:1.5})}),l.jsx("p",{className:"font-bold text-lg mb-2 text-slate-800 dark:text-white",children:s?"Uploading & profiling...":i?"Drop it here!":"Drag and drop your files"}),l.jsx("p",{className:"text-sm mb-8 text-slate-500 dark:text-slate-400",children:"Supports CSV, Excel, JSON, PDF, and images"}),l.jsxs("span",{className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-500/30",children:[l.jsx(gs,{size:16}),"Browse Files"]}),l.jsx("input",{ref:g,type:"file",accept:".csv,.xlsx,.xls,.json,.pdf",className:"hidden",onChange:A=>{var C;const T=(C=A.target.files)==null?void 0:C[0];T&&y(T)}})]})},"file"):l.jsx(pe.div,{initial:{opacity:0,x:16},animate:{opacity:1,x:0},exit:{opacity:0,x:-16},transition:{duration:.25},children:l.jsxs("form",{onSubmit:w,className:"rounded-3xl p-8 space-y-5 flex flex-col items-center justify-center min-h-[300px] bg-white/50 dark:bg-slate-900/40 border border-slate-300 dark:border-white/5 transition-colors",children:[l.jsxs("div",{className:"grid grid-cols-2 gap-4 w-full",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-medium mb-1.5 text-slate-600 dark:text-slate-400",children:"Database Type"}),l.jsx("select",{value:p.db_type,onChange:A=>_(T=>({...T,db_type:A.target.value})),className:"w-full px-3 py-2.5 rounded-xl text-sm outline-none bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/50 text-slate-900 dark:text-white focus:border-emerald-500/50 transition-colors",children:["postgresql","mysql","sqlite"].map(A=>l.jsx("option",{value:A,className:"bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white",children:A},A))})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-medium mb-1.5 text-slate-600 dark:text-slate-400",children:"Host"}),l.jsx("input",{type:"text",placeholder:"localhost",value:p.host,onChange:A=>_(T=>({...T,host:A.target.value})),className:"w-full px-3 py-2.5 rounded-xl text-sm outline-none bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-emerald-500/50 transition-colors"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-medium mb-1.5 text-slate-600 dark:text-slate-400",children:"Port"}),l.jsx("input",{type:"text",placeholder:"5432",value:p.port,onChange:A=>_(T=>({...T,port:A.target.value})),className:"w-full px-3 py-2.5 rounded-xl text-sm outline-none bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-emerald-500/50 transition-colors"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-medium mb-1.5 text-slate-600 dark:text-slate-400",children:"Database"}),l.jsx("input",{type:"text",placeholder:"mydb",value:p.database,onChange:A=>_(T=>({...T,database:A.target.value})),className:"w-full px-3 py-2.5 rounded-xl text-sm outline-none bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-emerald-500/50 transition-colors"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-medium mb-1.5 text-slate-600 dark:text-slate-400",children:"Username"}),l.jsx("input",{type:"text",placeholder:"postgres",value:p.username,onChange:A=>_(T=>({...T,username:A.target.value})),className:"w-full px-3 py-2.5 rounded-xl text-sm outline-none bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-emerald-500/50 transition-colors"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-medium mb-1.5 text-slate-600 dark:text-slate-400",children:"Password"}),l.jsx("input",{type:"password",placeholder:"••••••••",value:p.password,onChange:A=>_(T=>({...T,password:A.target.value})),className:"w-full px-3 py-2.5 rounded-xl text-sm outline-none bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-emerald-500/50 transition-colors"})]})]}),l.jsxs("div",{className:"w-full",children:[l.jsxs("label",{className:"block text-xs font-medium mb-1.5 text-slate-600 dark:text-slate-400",children:["Schema Filter ",l.jsx("span",{className:"font-normal text-slate-400",children:"(optional — leave blank to inspect all schemas)"})]}),l.jsx("input",{type:"text",placeholder:"public",value:p.schema_filter,onChange:A=>_(T=>({...T,schema_filter:A.target.value})),className:"w-full px-3 py-2.5 rounded-xl text-sm outline-none bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-emerald-500/50 transition-colors"})]}),l.jsxs(pe.button,{type:"submit",disabled:s,whileHover:{scale:1.02},whileTap:{scale:.97},className:"w-full mt-2 py-3 rounded-xl text-sm font-semibold text-white dark:text-slate-950 flex items-center justify-center gap-2 bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors disabled:opacity-50",style:{boxShadow:"0 4px 20px rgba(16,185,129,0.3)"},children:[l.jsx(th,{size:16}),s?"Connecting...":"Connect & Analyse"]})]})},"db")})}),l.jsx(mt,{children:o&&l.jsxs(pe.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,x:-8},className:"flex items-start gap-2.5 mt-4 p-4 rounded-xl w-full max-w-2xl text-left",style:{background:"rgba(239,68,68,0.08)",border:"1px solid rgba(239,68,68,0.2)"},children:[l.jsx(md,{size:15,className:"text-red-400 flex-shrink-0 mt-0.5"}),l.jsx("p",{className:"text-sm text-red-300",children:o})]})})]})})}const Jl={eli5:{label:"🧒 ELI5",color:"#f59e0b",bg:"rgba(245,158,11,0.15)"},architecture:{label:"🏗️ Arch",color:"#34d399",bg:"rgba(52,211,153,0.12)"},analyst:{label:"📊 Data",color:"#0ea5e9",bg:"rgba(14,165,233,0.12)"}};function G0(n){if(!n)return"Visualization of your uploaded data";const e=n.match(/\bCaption[:\s]+["']?([^"'\n]{10,200})["']?/i);if(e){const u=e[1].trim().replace(/["']$/,"");if(u.length>=10)return u}const t=n.split(new RegExp("(?<=[.!?])\\s+")).map(u=>u.trim()).filter(u=>u.length>=20&&u.length<=300),i=u=>{let h=0;return h+=(u.match(/\d{2,}/g)||[]).length*3,h+=(u.match(/[$%]/g)||[]).length*2,h+=(u.match(/\b(avg|total|max|min|top|count|rate|sum|mean|median|correlation|r=)/gi)||[]).length*2,h+=(u.match(/\b(more|less|higher|lower|biggest|smallest|most|least|dominant|leading)/gi)||[]).length,h-=(u.match(/\b(style|illustration|background|color|font|diagram|layout|design|render|image|pixel|palette|neon|gradient)/gi)||[]).length*2,h},r=t.reduce((u,h)=>{const f=i(h);return f>0&&(!u||f>u.score)?{s:h,score:f}:u},null);if(r&&r.score>=3)return r.s.length>220?r.s.slice(0,220)+"…":r.s;const s=n.match(/\bScene:\s*(.+?)(?:\n|$)/is);if(s){const u=s[1].trim();if(/\d{2,}/.test(u))return u.length>200?u.slice(0,200)+"…":u}const a=n.match(/(?:focused on|displaying|visualizing|showing|titled?|about)\s+["']?([^"'\n,]{8,80})["']?(?:[.,]|$)/i),o=[],d=/['"]([^'"]{4,80})['"]/g;let c;for(;(c=d.exec(n))!==null&&o.length<4;){const u=c[1].trim();/\d{2,}|%|\$|avg|total|max|min|top|count|rate|ratio|score/i.test(u)&&o.push(u)}if(a||o.length>0){const u=a?a[1].trim():"",h=o.join(" · "),f=[u,h].filter(Boolean).join(": ");if(f.length>=10)return f.length>200?f.slice(0,200)+"…":f}return"Visualization of your uploaded data"}function Va(n){return Jl[n??"eli5"]??Jl.eli5}function H0(n){const e=n.currentTarget,t=e.getBoundingClientRect(),i=(n.clientX-t.left)/t.width,r=(n.clientY-t.top)/t.height;e.style.transform=`perspective(500px) rotateX(${(.5-r)*12}deg) rotateY(${(i-.5)*12}deg) translateZ(8px) scale(1.03)`}function W0(n){n.currentTarget.style.transform="perspective(500px) rotateX(0) rotateY(0) translateZ(0) scale(1)"}function Ds({image:n,onClose:e}){const t=Va(n.format);return P.useEffect(()=>{const i=r=>{r.key==="Escape"&&e()};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[e]),l.jsx(pe.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-50 flex items-center justify-center p-6",style:{background:"rgba(0,0,0,0.85)",backdropFilter:"blur(24px)"},onClick:e,children:l.jsxs(pe.div,{initial:{scale:.9,y:20},animate:{scale:1,y:0},exit:{scale:.9,y:20},transition:{type:"spring",stiffness:300,damping:25},className:"relative max-w-4xl w-full rounded-2xl overflow-hidden",style:{border:"1px solid rgba(255,255,255,0.1)",boxShadow:"0 40px 80px rgba(0,0,0,0.8)"},onClick:i=>i.stopPropagation(),children:[l.jsx("button",{onClick:e,className:"absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-white/60 dark:bg-slate-900/60 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 backdrop-blur-md",children:l.jsx(mi,{size:16,className:"text-slate-900 dark:text-white"})}),l.jsx("div",{className:"absolute top-3 left-3 z-10",children:l.jsx("kbd",{className:"text-[10px] px-1.5 py-0.5 rounded bg-black/40 text-white/70 backdrop-blur-md border border-white/10",children:"ESC"})}),l.jsx("img",{src:n.url,alt:n.prompt,className:"w-full object-contain max-h-[70vh] bg-slate-50 dark:bg-slate-950 transition-colors"}),l.jsx("div",{className:"p-4 bg-white/95 dark:bg-slate-900/95 border-t border-slate-200 dark:border-slate-800/60 transition-colors",children:l.jsxs("div",{className:"flex items-start justify-between gap-3",children:[l.jsx("p",{className:"text-sm leading-relaxed text-slate-700 dark:text-slate-300 transition-colors",children:n.caption?n.caption:G0(n.prompt)}),l.jsx("span",{className:"flex-shrink-0 text-xs px-2.5 py-1 rounded-full font-medium",style:{background:t.bg,color:t.color},children:t.label})]})})]})})}function X0(){const{resolvedImages:n,pendingImages:e}=Ft(),[t,i]=P.useState(null),r=P.useCallback(()=>i(null),[]),s=Array.from(e.entries());return n.length+s.length===0?null:l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"flex-shrink-0 w-full min-w-0 bg-white/90 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800/60 backdrop-blur-md transition-colors",children:[l.jsxs("div",{className:"flex items-center gap-3 px-4 pt-3 pb-2",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(_d,{size:13,className:"text-slate-500 dark:text-slate-400 transition-colors"}),l.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-400 transition-colors",children:"Generated Images"})]}),l.jsx("span",{className:"text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 transition-colors",children:n.length}),s.length>0&&l.jsxs("div",{className:"flex items-center gap-1.5 text-slate-600 dark:text-slate-500 transition-colors",children:[l.jsx(ps,{size:11,className:"animate-spin text-emerald-500 dark:text-emerald-400 transition-colors"}),l.jsxs("span",{className:"text-[11px]",children:[s.length," generating"]})]})]}),l.jsxs("div",{className:"flex gap-2.5 px-4 pb-3 overflow-x-auto",style:{scrollbarWidth:"none"},children:[(()=>{const o=["eli5","architecture","analyst"];return[...s].sort((c,u)=>{const h=c[1].format||"eli5",f=u[1].format||"eli5",g=o.indexOf(h),p=o.indexOf(f);return(g===-1?999:g)-(p===-1?999:p)}).map(([c,u])=>{const h=Va(u.format);return l.jsx("div",{className:"flex-shrink-0 w-36 h-24 rounded-xl shimmer relative overflow-hidden border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/40 transition-colors",children:l.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center p-2 gap-1",children:[l.jsx(Es,{size:14,style:{color:h.color,opacity:.7}}),l.jsx("p",{className:"text-[9px] text-center line-clamp-2 text-slate-500 dark:text-slate-400 transition-colors",children:u.prompt})]})},c)})})(),(()=>{const o=["eli5","architecture","analyst"];return[...n].sort((c,u)=>{const h=c.format||"eli5",f=u.format||"eli5",g=o.indexOf(h),p=o.indexOf(f);return(g===-1?999:g)-(p===-1?999:p)}).map((c,u)=>{const h=Va(c.format);return l.jsxs(pe.div,{initial:{opacity:0,scale:.85,y:8},animate:{opacity:1,scale:1,y:0},transition:{delay:u*.05,type:"spring",stiffness:300,damping:22},className:"flex-shrink-0 w-36 h-24 rounded-xl overflow-hidden cursor-pointer relative group border border-slate-200 dark:border-slate-700/50 hover:border-emerald-500 dark:hover:border-emerald-500/50 transition-colors",style:{transition:"transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease",transformStyle:"preserve-3d"},onMouseMove:H0,onMouseLeave:W0,onClick:()=>i(c),children:[l.jsx("img",{src:c.url,alt:c.prompt,className:"w-full h-full object-cover"}),l.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",style:{background:"rgba(0,0,0,0.5)",backdropFilter:"blur(2px)"},children:l.jsx(gr,{size:20,className:"text-white"})}),l.jsx("div",{className:"absolute bottom-1.5 left-1.5",children:l.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded-full font-semibold",style:{background:h.bg,color:h.color,backdropFilter:"blur(4px)"},children:h.label})})]},c.id)})})()]})]}),l.jsx(mt,{children:t&&l.jsx(Ds,{image:t,onClose:r})})]})}function q0(n){return n.split(`
`)}function $0(n){const e=[],t=/\*\*(.+?)\*\*/g;let i=0,r,s=0;for(;(r=t.exec(n))!==null;)r.index>i&&e.push(l.jsx("span",{children:n.slice(i,r.index)},s++)),e.push(l.jsx("strong",{className:"text-emerald-400 font-bold",children:r[1]},s++)),i=r.index+r[0].length;return i<n.length&&e.push(l.jsx("span",{children:n.slice(i)},s++)),e.length?e:n}function Y0(n,e){if(!n.trim())return l.jsx("div",{className:"h-3"},e);const t=n.startsWith("# ")||n.startsWith("## "),i=t?n.replace(/^#{1,2}\s+/,""):n,r=$0(i);return t?l.jsx(pe.h3,{initial:{opacity:0,x:-12},animate:{opacity:1,x:0},transition:{duration:.4},className:"text-lg font-extrabold mt-6 mb-2 text-emerald-400",children:r},e):l.jsx(pe.p,{initial:{opacity:0,y:4},animate:{opacity:1,y:0},transition:{duration:.3,delay:Math.min(e*.01,.3)},className:"mb-3 leading-relaxed text-base text-slate-700 dark:text-slate-300 transition-colors",children:r},e)}function K0(){const{streamProgress:n,isStreaming:e,pendingImages:t,resolvedImages:i}=Ft(),r=n.eli5.replace(/<IMAGE_PROMPT>[\s\S]*?(?:<\/IMAGE_PROMPT>|$)/g,""),s=P.useMemo(()=>q0(r),[r]),a=P.useMemo(()=>Array.from(t.entries()).filter(([,h])=>!h.format||h.format==="eli5"),[t]),o=P.useMemo(()=>i.filter(h=>!h.format||h.format==="eli5"),[i]),[d,c]=P.useState(null),u=P.useCallback(()=>c(null),[]);return!r&&!e&&a.length===0?l.jsxs("div",{className:"flex flex-col items-center justify-center h-64 text-center px-8",children:[l.jsx("div",{className:"w-14 h-14 rounded-2xl flex items-center justify-center mb-3 bg-emerald-500/10 border border-emerald-500/20",children:l.jsx(hd,{size:22,className:"text-emerald-400"})}),l.jsx("p",{className:"font-semibold text-sm text-slate-700 dark:text-slate-300 transition-colors",children:"ELI5 story will appear here"}),l.jsx("p",{className:"text-xs mt-1 text-slate-500 dark:text-slate-400 transition-colors",children:"Simple analogies and fun characters"})]}):l.jsxs("div",{className:"px-6 py-5 story-content",children:[l.jsx("div",{className:"flex gap-1.5 mb-8",children:["#10b981","#34d399","#6ee7b7"].map((h,f)=>l.jsx("div",{className:"h-1 rounded-full",style:{width:f===0?48:f===1?28:16,background:h}},f))}),l.jsx(mt,{children:o.length>0&&l.jsx(pe.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6",children:o.map(h=>l.jsxs(pe.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:"rounded-2xl overflow-hidden aspect-video relative group border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)] cursor-pointer",onClick:()=>c(h),children:[l.jsx("img",{src:h.url,alt:h.prompt,className:"w-full h-full object-cover"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-center pb-4",children:l.jsx(gr,{size:22,className:"text-white drop-shadow-lg"})})]},h.id))})}),l.jsx(mt,{children:d&&l.jsx(Ds,{image:d,onClose:u})}),l.jsx("div",{className:"text-base leading-relaxed",children:s.map((h,f)=>Y0(h,f))}),a.length>0&&l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5",children:a.map(([h,f])=>l.jsxs("div",{className:"shimmer rounded-2xl aspect-video flex flex-col items-center justify-center p-4 border border-emerald-200 dark:border-emerald-500/10 bg-slate-50 dark:bg-slate-800/30 transition-colors",children:[l.jsx("div",{className:"text-2xl mb-2",children:"🎨"}),l.jsx("p",{className:"text-xs text-center line-clamp-2 text-slate-600 dark:text-slate-500 transition-colors",children:f.prompt})]},h))}),e&&l.jsx(pe.span,{animate:{opacity:[1,0]},transition:{duration:.7,repeat:1/0},className:"inline-block w-1 h-5 ml-1 align-middle rounded-full bg-emerald-400"})]})}function Z0(n){const e=[],t=n.split(`
`);let i=0,r=[];const s=()=>{const a=r.join(`
`).trim();a&&e.push({type:"text",content:a}),r=[]};for(;i<t.length;){const a=t[i];if(a.startsWith("```")){s();const o=a.slice(3).trim()||"text",d=[];for(i++;i<t.length&&!t[i].startsWith("```");)d.push(t[i]),i++;e.push({type:"code",content:d.join(`
`),lang:o}),i++;continue}if(a.startsWith("#")){s(),e.push({type:"heading",content:a.replace(/^#{1,3}\s+/,"")}),i++;continue}if(a.includes("|")&&a.includes("→")||a.match(/^\s*\w+\s*::\s*/)){s(),e.push({type:"schema",content:a}),i++;continue}if(!a.trim()){r.push(""),i++;continue}r.push(a),i++}return s(),e}function J0(n){const e=[],t=/\*\*(.+?)\*\*|`([^`]+)`/g;let i=0,r,s=0;for(;(r=t.exec(n))!==null;)r.index>i&&e.push(l.jsx("span",{children:n.slice(i,r.index)},s++)),r[1]!=null?e.push(l.jsx("strong",{className:"text-emerald-400 font-semibold",children:r[1]},s++)):e.push(l.jsx("code",{className:"px-1.5 py-0.5 rounded-md text-xs font-mono bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20 transition-colors",children:r[2]},s++)),i=r.index+r[0].length;return i<n.length&&e.push(l.jsx("span",{children:n.slice(i)},s++)),e.length?e:n}function Q0(){const{streamProgress:n,isStreaming:e,pendingImages:t,resolvedImages:i}=Ft(),r=n.architecture.replace(/<IMAGE_PROMPT>[\s\S]*?(?:<\/IMAGE_PROMPT>|$)/g,""),s=P.useMemo(()=>Z0(r),[r]),a=P.useMemo(()=>Array.from(t.entries()).filter(([,h])=>h.format==="architecture"),[t]),o=P.useMemo(()=>i.filter(h=>h.format==="architecture"),[i]),[d,c]=P.useState(null),u=P.useCallback(()=>c(null),[]);return!r&&!e&&a.length===0?l.jsxs("div",{className:"flex flex-col items-center justify-center h-64 text-center px-8",children:[l.jsx("div",{className:"w-14 h-14 rounded-2xl flex items-center justify-center mb-3 bg-emerald-500/10 border border-emerald-500/20",children:l.jsx(xd,{size:22,className:"text-emerald-400"})}),l.jsx("p",{className:"font-semibold text-sm text-slate-700 dark:text-slate-300 transition-colors",children:"Architecture story will appear here"}),l.jsx("p",{className:"text-xs mt-1 text-slate-500 dark:text-slate-400 transition-colors",children:"Schema, ER diagrams, and data structure"})]}):l.jsxs("div",{className:"px-6 py-5 story-content font-mono text-sm",children:[l.jsx("div",{className:"flex gap-1.5 mb-8",children:["#10b981","#34d399","#6ee7b7"].map((h,f)=>l.jsx("div",{className:"h-1 rounded-full",style:{width:f===0?48:f===1?28:16,background:h}},f))}),l.jsx(mt,{children:o.length>0&&l.jsx(pe.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6",children:o.map(h=>l.jsxs(pe.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:"rounded-2xl overflow-hidden aspect-video relative group border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)] cursor-pointer",onClick:()=>c(h),children:[l.jsx("img",{src:h.url,alt:h.prompt,className:"w-full h-full object-cover"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-center pb-4",children:l.jsx(gr,{size:22,className:"text-white drop-shadow-lg"})})]},h.id))})}),l.jsx(mt,{children:d&&l.jsx(Ds,{image:d,onClose:u})}),l.jsx("div",{className:"space-y-4",children:s.map((h,f)=>{switch(h.type){case"heading":return l.jsx(pe.h3,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{duration:.35},className:"text-lg font-bold mt-8 mb-4 first:mt-0 font-sans text-emerald-400",children:h.content},f);case"code":return l.jsxs(pe.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},transition:{duration:.35},className:"rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/40 backdrop-blur-sm transition-colors",children:[l.jsxs("div",{className:"px-4 py-3 flex items-center gap-2 bg-slate-200/50 dark:bg-slate-900/50 border-b border-slate-300 dark:border-slate-800/60 transition-colors",children:[l.jsx("div",{className:"flex gap-1.5",children:["#ff5f57","#febc2e","#28c840"].map(g=>l.jsx("div",{className:"w-2.5 h-2.5 rounded-full",style:{background:g}},g))}),h.lang&&h.lang!=="text"&&l.jsx("span",{className:"text-xs ml-2 font-sans text-slate-600 dark:text-slate-500 transition-colors",children:h.lang})]}),l.jsx("pre",{className:"p-4 text-xs leading-relaxed overflow-x-auto bg-transparent text-slate-800 dark:text-slate-300 transition-colors",children:l.jsx("code",{children:h.content})})]},f);case"schema":return l.jsx(pe.div,{initial:{opacity:0},animate:{opacity:1},className:"px-4 py-3 rounded-xl text-xs bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-300 my-4 transition-colors",children:h.content},f);default:return l.jsx(pe.div,{initial:{opacity:0,y:3},animate:{opacity:1,y:0},transition:{duration:.3,delay:Math.min(f*.015,.35)},className:"font-sans leading-relaxed text-slate-700 dark:text-slate-300 transition-colors",children:h.content.split(`
`).map((g,p)=>g.trim()?l.jsx("p",{className:"mb-1.5",children:J0(g)},p):l.jsx("br",{},p))},f)}})}),a.length>0&&l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5",children:a.map(([h,f])=>l.jsxs("div",{className:"shimmer rounded-2xl aspect-video flex flex-col items-center justify-center p-4 border border-emerald-200 dark:border-emerald-500/10 bg-slate-50 dark:bg-slate-800/30 transition-colors",children:[l.jsx("div",{className:"text-2xl mb-2",children:"🏗️"}),l.jsx("p",{className:"text-xs text-center line-clamp-2 text-slate-600 dark:text-slate-500 transition-colors",children:f.prompt})]},h))}),e&&l.jsx(pe.span,{animate:{opacity:[1,0]},transition:{duration:.7,repeat:1/0},className:"inline-block w-1 h-5 ml-1 align-middle rounded-full bg-emerald-400"})]})}const $t=["#10b981","#34d399","#0ea5e9","#38bdf8","#06b6d4","#2dd4bf","#f59e0b","#ec4899"],Qi="rgba(255,255,255,0.05)",pu="rgba(255,255,255,0.3)",zn={fill:pu,fontSize:11,fontFamily:"Inter, sans-serif"},Ql={fill:"rgba(16,185,129,0.08)"};function eg(n){return!(n!=null&&n.labels)||!(n!=null&&n.datasets)?[]:n.labels.map((e,t)=>{const i={name:e};return n.datasets.forEach(r=>{var s;i[r.label]=((s=r.data)==null?void 0:s[t])??0}),i})}function tg(n,e){return n!=null&&n.data?n.data.map((t,i)=>({x:i,y:t,name:(e==null?void 0:e[i])||`${i}`})):[]}function ng(n){var t;if(!((t=n==null?void 0:n.datasets)!=null&&t.length)||!(n!=null&&n.labels))return[];const e=n.datasets[0];return n.labels.map((i,r)=>{var s;return{name:i,value:((s=e.data)==null?void 0:s[r])??0}})}function er({payload:n}){return n!=null&&n.length?l.jsx("div",{className:"flex flex-wrap gap-3 justify-center mt-2",children:n.map((e,t)=>l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("div",{className:"w-2 h-2 rounded-full",style:{background:e.color}}),l.jsx("span",{className:"text-[11px]",style:{color:pu},children:e.value})]},t))}):null}function tr({active:n,payload:e,label:t}){return!n||!(e!=null&&e.length)?null:l.jsxs("div",{className:"bg-white/95 dark:bg-slate-900/95 border border-emerald-500/20 rounded-xl text-slate-800 dark:text-slate-200 text-xs backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/50 px-3 py-2",children:[t&&l.jsx("p",{className:"text-xs mb-1.5 font-medium text-emerald-600 dark:text-emerald-400",children:t}),e.map((i,r)=>l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-1.5 h-1.5 rounded-full",style:{background:i.color}}),l.jsxs("span",{className:"text-[11px] text-slate-500 dark:text-slate-400",children:[i.name,":"]}),l.jsx("span",{className:"text-[11px] font-semibold text-slate-900 dark:text-slate-100",children:typeof i.value=="number"?i.value.toLocaleString():i.value})]},r))]})}function ig({data:n}){if(!(n!=null&&n.labels)||!(n!=null&&n.datasets)||n.labels.length===0)return null;const e=eg(n),{chart_type:t,datasets:i}=n,r=t.charAt(0).toUpperCase()+t.slice(1),s=()=>{switch(t){case"bar":return l.jsxs(vl,{data:e,margin:{top:8,right:16,left:-8,bottom:0},children:[l.jsx(Rr,{strokeDasharray:"3 3",stroke:Qi,vertical:!1}),l.jsx(Cr,{dataKey:"name",tick:zn,axisLine:!1,tickLine:!1}),l.jsx(Nr,{tick:zn,axisLine:!1,tickLine:!1}),l.jsx(Yi,{content:l.jsx(tr,{}),cursor:Ql}),l.jsx(Ki,{content:l.jsx(er,{})}),i.map((a,o)=>l.jsx(bl,{dataKey:a.label,fill:a.color||$t[o%$t.length],radius:[6,6,0,0],maxBarSize:52},a.label))]});case"line":return l.jsxs(kf,{data:e,margin:{top:8,right:16,left:-8,bottom:0},children:[l.jsx(Rr,{strokeDasharray:"3 3",stroke:Qi,vertical:!1}),l.jsx(Cr,{dataKey:"name",tick:zn,axisLine:!1,tickLine:!1}),l.jsx(Nr,{tick:zn,axisLine:!1,tickLine:!1}),l.jsx(Yi,{content:l.jsx(tr,{})}),l.jsx(Ki,{content:l.jsx(er,{})}),i.map((a,o)=>{const d=a.color||$t[o%$t.length];return l.jsx(Uf,{type:"monotone",dataKey:a.label,stroke:d,strokeWidth:2.5,dot:{r:3,fill:d,strokeWidth:0},activeDot:{r:5,strokeWidth:0}},a.label)})]});case"pie":{const a=ng(n);return l.jsxs(Lf,{margin:{top:4,right:16,left:16,bottom:4},children:[l.jsx(Df,{data:a,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:110,innerRadius:55,paddingAngle:3,label:({name:o,percent:d})=>`${o} ${(d*100).toFixed(0)}%`,labelLine:{stroke:"rgba(16,185,129,0.4)",strokeWidth:1},children:a.map((o,d)=>l.jsx(If,{fill:$t[d%$t.length],stroke:"rgba(15,23,42,0.6)",strokeWidth:2},d))}),l.jsx(Yi,{content:l.jsx(tr,{})}),l.jsx(Ki,{content:l.jsx(er,{})})]})}case"scatter":return l.jsxs(Nf,{margin:{top:8,right:16,left:-8,bottom:0},children:[l.jsx(Rr,{strokeDasharray:"3 3",stroke:Qi}),l.jsx(Cr,{dataKey:"x",type:"number",name:"x",tick:zn,axisLine:!1,tickLine:!1}),l.jsx(Nr,{dataKey:"y",type:"number",name:"y",tick:zn,axisLine:!1,tickLine:!1}),l.jsx(Yi,{content:l.jsx(tr,{}),cursor:{strokeDasharray:"3 3",stroke:Qi}}),l.jsx(Ki,{content:l.jsx(er,{})}),i.map((a,o)=>l.jsx(Pf,{name:a.label,data:tg(a,n.labels),fill:a.color||$t[o%$t.length],opacity:.85},a.label))]});default:return l.jsxs(vl,{data:e,margin:{top:8,right:16,left:-8,bottom:0},children:[l.jsx(Rr,{strokeDasharray:"3 3",stroke:Qi,vertical:!1}),l.jsx(Cr,{dataKey:"name",tick:zn,axisLine:!1,tickLine:!1}),l.jsx(Nr,{tick:zn,axisLine:!1,tickLine:!1}),l.jsx(Yi,{content:l.jsx(tr,{}),cursor:Ql}),l.jsx(Ki,{content:l.jsx(er,{})}),i.map((a,o)=>l.jsx(bl,{dataKey:a.label,fill:a.color||$t[o%$t.length],radius:[6,6,0,0],maxBarSize:52},a.label))]})}};return l.jsxs(pe.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},className:"w-full rounded-2xl overflow-hidden bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-emerald-500/20 shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] backdrop-blur-md transition-colors",children:[l.jsxs("div",{className:"px-5 py-3.5 flex items-center justify-between border-b border-slate-200 dark:border-white/5 transition-colors",children:[l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("div",{className:"px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400",children:r}),l.jsx("span",{className:"text-xs font-medium text-slate-700 dark:text-slate-300",children:"Chart"})]}),i.length>0&&l.jsxs("div",{className:"flex items-center gap-1",children:[i.slice(0,4).map((a,o)=>l.jsx("div",{className:"w-2 h-2 rounded-full",style:{background:a.color||$t[o%$t.length]}},o)),l.jsxs("span",{className:"text-[10px] ml-1 text-slate-500",children:[i.length," series"]})]})]}),l.jsx("div",{className:"p-4 pt-3",children:l.jsx(Cf,{width:"100%",height:300,children:s()})})]})}const ec=/\[KPI:([^\]]+)\]/g;function rg(n){const e=[];let t;for(ec.lastIndex=0;(t=ec.exec(n))!==null;){const i=t[1].split(",").map(r=>r.trim());i.length>=2&&e.push({label:i[0],value:i[1],trend:i[2]})}return e}function sg(n){const e=n.filter(r=>r.trim().startsWith("|")).map(r=>r.split("|").map(s=>s.trim()).filter(s=>s&&!s.match(/^[-:]+$/))).filter(r=>r.length>0);if(!e.length)return{headers:[],rows:[]};const[t,...i]=e;return{headers:t??[],rows:i}}function ag(n){const e=[],t=n.split(`
`);let i=0,r=[];const s=()=>{const a=r.join(`
`).trim();if(!a){r=[];return}const o=rg(a);e.push(o.length>0?{type:"kpi",content:a,kpis:o}:{type:"text",content:a}),r=[]};for(;i<t.length;){const a=t[i];if(a.startsWith("#")){s(),e.push({type:"heading",content:a.replace(/^#{1,3}\s+/,"")}),i++;continue}if(a.trim().startsWith("|")){s();const o=[];for(;i<t.length&&(t[i].trim().startsWith("|")||t[i].match(/^\|?[-:]+\|/));)o.push(t[i]),i++;const d=sg(o);d.headers.length&&e.push({type:"table",content:o.join(`
`),table:d});continue}if(a.startsWith("> ")){s(),e.push({type:"highlight",content:a.slice(2)}),i++;continue}r.push(a),i++}return s(),e}function tc(n){const e=[],t=/\*\*(.+?)\*\*|`([^`]+)`|\[KPI:[^\]]+\]/g;let i=0,r,s=0;for(;(r=t.exec(n))!==null;){if(r.index>i&&e.push(l.jsx("span",{children:n.slice(i,r.index)},s++)),r[0].startsWith("[KPI:")){i=r.index+r[0].length;continue}r[1]!=null?e.push(l.jsx("strong",{className:"text-emerald-400 font-semibold",children:r[1]},s++)):e.push(l.jsx("code",{className:"px-1.5 py-0.5 rounded-md text-xs font-mono bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20 transition-colors",children:r[2]},s++)),i=r.index+r[0].length}return i<n.length&&e.push(l.jsx("span",{children:n.slice(i)},s++)),e.length?e:n}function og({kpi:n,index:e}){const t=P.useRef(null),i=o=>{const d=t.current;if(!d)return;const c=d.getBoundingClientRect(),u=(o.clientX-c.left)/c.width,h=(o.clientY-c.top)/c.height;d.style.transform=`perspective(600px) rotateX(${(.5-h)*14}deg) rotateY(${(u-.5)*14}deg) translateZ(12px)`,d.style.boxShadow="0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(16,185,129,0.2)"},r=()=>{const o=t.current;o&&(o.style.transform="perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0)",o.style.boxShadow="")},s=n.trend==="up"?"#34d399":n.trend==="down"?"#f87171":"#64748b",a=n.trend==="up"?Md:n.trend==="down"?xh:dh;return l.jsxs(pe.div,{ref:t,initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{delay:e*.08,duration:.4,ease:[.16,1,.3,1]},onMouseMove:i,onMouseLeave:r,className:"p-5 rounded-3xl cursor-default bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 backdrop-blur-md transition-colors",style:{transition:"transform 0.15s ease, box-shadow 0.15s ease",transformStyle:"preserve-3d"},children:[l.jsx("p",{className:"text-[11px] uppercase tracking-wider font-semibold mb-2 text-slate-500 dark:text-slate-400 transition-colors",children:n.label}),l.jsx("p",{className:"text-2xl font-extrabold text-slate-900 dark:text-white transition-colors",children:n.value}),n.trend&&l.jsxs("div",{className:"flex items-center gap-1 mt-1.5",children:[l.jsx(a,{size:12,style:{color:s}}),l.jsx("span",{className:"text-xs font-medium",style:{color:s},children:n.trend==="up"?"Trending up":n.trend==="down"?"Declining":"Stable"})]})]})}function lg({table:n}){return n.headers.length?l.jsx("div",{className:"rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 transition-colors",children:l.jsxs("table",{className:"w-full text-sm",children:[l.jsx("thead",{children:l.jsx("tr",{className:"bg-emerald-50 dark:bg-emerald-500/10 border-b border-emerald-200 dark:border-emerald-500/20 transition-colors",children:n.headers.map((e,t)=>l.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400 transition-colors",children:e},t))})}),l.jsx("tbody",{children:n.rows.map((e,t)=>l.jsx("tr",{className:"even:bg-slate-50 dark:even:bg-white/5 transition-colors",children:e.map((i,r)=>l.jsx("td",{className:"px-4 py-2.5 text-xs text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-white/5 transition-colors",children:i},r))},t))})]})}):null}function cg(){const{streamProgress:n,isStreaming:e,pendingImages:t,resolvedImages:i,chartData:r}=Ft(),s=n.analyst.replace(/<IMAGE_PROMPT>[\s\S]*?(?:<\/IMAGE_PROMPT>|$)/g,""),a=P.useMemo(()=>ag(s),[s]),o=P.useMemo(()=>Array.from(t.entries()).filter(([,f])=>f.format==="analyst"),[t]),d=P.useMemo(()=>i.filter(f=>f.format==="analyst"),[i]),[c,u]=P.useState(null),h=P.useCallback(()=>u(null),[]);return!s&&!e&&!r?l.jsxs("div",{className:"flex flex-col items-center justify-center h-64 text-center px-8",children:[l.jsx("div",{className:"w-14 h-14 rounded-2xl flex items-center justify-center mb-3 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 transition-colors",children:l.jsx($f,{size:22,className:"text-emerald-400"})}),l.jsx("p",{className:"font-semibold text-sm text-slate-700 dark:text-slate-300 transition-colors",children:"Analyst story will appear here"}),l.jsx("p",{className:"text-xs mt-1 text-slate-500 dark:text-slate-400 transition-colors",children:"KPIs, charts, trends, and insights"})]}):l.jsxs("div",{className:"px-6 py-5 story-content",children:[l.jsx("div",{className:"flex gap-1.5 mb-8",children:["#10b981","#34d399","#6ee7b7"].map((f,g)=>l.jsx("div",{className:"h-1 rounded-full",style:{width:g===0?48:g===1?28:16,background:f}},g))}),r&&l.jsx(pe.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"mb-6",children:l.jsx(ig,{data:r})}),l.jsx(mt,{children:d.length>0&&l.jsx(pe.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6",children:d.map(f=>l.jsxs(pe.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:"rounded-2xl overflow-hidden aspect-video relative group border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)] cursor-pointer",onClick:()=>u(f),children:[l.jsx("img",{src:f.url,alt:f.prompt,className:"w-full h-full object-cover"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-center pb-4",children:l.jsx(gr,{size:22,className:"text-white drop-shadow-lg"})})]},f.id))})}),l.jsx(mt,{children:c&&l.jsx(Ds,{image:c,onClose:h})}),l.jsx("div",{className:"space-y-4",children:a.map((f,g)=>{switch(f.type){case"heading":return l.jsx(pe.h3,{initial:{opacity:0,x:-8},animate:{opacity:1,x:0},transition:{duration:.35},className:"text-lg font-bold mt-8 mb-4 first:mt-0 text-emerald-600 dark:text-emerald-400 transition-colors",children:f.content},g);case"kpi":return l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-4",children:(f.kpis??[]).map((p,_)=>l.jsx(og,{kpi:p,index:_},_))},g);case"table":return l.jsx(pe.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},children:f.table&&l.jsx(lg,{table:f.table})},g);case"highlight":return l.jsx(pe.div,{initial:{opacity:0,x:-6},animate:{opacity:1,x:0},className:"pl-4 py-3 rounded-r-xl border-l-[3px] border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 my-4 transition-colors",children:l.jsx("p",{className:"text-sm text-emerald-800 dark:text-emerald-200 transition-colors",children:tc(f.content)})},g);default:return l.jsx(pe.div,{initial:{opacity:0,y:4},animate:{opacity:1,y:0},transition:{duration:.3,delay:Math.min(g*.015,.35)},className:"text-sm leading-relaxed text-slate-700 dark:text-slate-300 transition-colors",children:f.content.split(`
`).map((p,_)=>p.trim()?l.jsx("p",{className:"mb-2",children:tc(p)},_):l.jsx("br",{},_))},g)}})}),o.length>0&&l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5",children:o.map(([f,g])=>l.jsxs("div",{className:"shimmer rounded-2xl aspect-video flex flex-col items-center justify-center p-4 border border-emerald-200 dark:border-emerald-500/10 bg-slate-50 dark:bg-slate-800/30 transition-colors",children:[l.jsx("div",{className:"text-2xl mb-2",children:"📊"}),l.jsx("p",{className:"text-xs text-center line-clamp-2 text-slate-600 dark:text-slate-500 transition-colors",children:g.prompt})]},f))}),e&&l.jsx(pe.span,{animate:{opacity:[1,0]},transition:{duration:.7,repeat:1/0},className:"inline-block w-1 h-5 ml-1 align-middle rounded-full bg-emerald-400"})]})}const dg=[{id:"eli5",label:"ELI5",icon:hd,color:"var(--primary)",bg:"var(--bg-base)",border:"var(--border-subtle)"},{id:"architecture",label:"Architecture",icon:xd,color:"var(--accent)",bg:"var(--bg-base)",border:"var(--border-subtle)"},{id:"analyst",label:"Analyst",icon:Md,color:"var(--primary-light)",bg:"var(--bg-base)",border:"var(--border-subtle)"}];function ug(n){return n===0?null:n<1e3?`${n}`:`${(n/1e3).toFixed(1)}k`}function fg(){const{activeFormat:n,setActiveFormat:e,streamProgress:t,isStreaming:i}=Ft();return l.jsxs("div",{className:"flex flex-col h-full bg-slate-50 dark:bg-[#020617] transition-colors",children:[l.jsxs("div",{className:"flex-shrink-0 flex items-center gap-1.5 px-3 sm:px-6 py-4 bg-white/50 dark:bg-[#0f172a]/80 border-b border-slate-200 dark:border-white/5 backdrop-blur-md transition-colors z-10 overflow-x-auto no-scrollbar",children:[l.jsx("div",{className:"flex items-center gap-2 flex-1",children:dg.map(r=>{const s=n===r.id,a=ug(t[r.id].length),o=i&&n===r.id,d=r.icon;return l.jsxs(pe.button,{onClick:()=>e(r.id),whileHover:{scale:1.02},whileTap:{scale:.98},className:`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 relative ${s?"bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 shadow-sm dark:shadow-[0_0_15px_rgba(16,185,129,0.1)]":"bg-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/40 border border-transparent"}`,children:[l.jsx(d,{size:16,strokeWidth:2.5}),l.jsx("span",{children:r.label}),o&&l.jsx(pe.span,{className:"w-1.5 h-1.5 rounded-full bg-emerald-400",animate:{opacity:[1,.3,1],scale:[1,.8,1]},transition:{duration:1,repeat:1/0}}),a&&!o&&l.jsx("span",{className:`text-[10px] font-bold px-2 py-0.5 rounded-full ${s?"bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300":"bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-500"}`,children:a})]},r.id)})}),l.jsx(mt,{children:i&&l.jsxs(pe.div,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},className:"flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 shadow-sm dark:shadow-[0_0_10px_rgba(16,185,129,0.15)]",children:[l.jsx("div",{className:"flex gap-0.5",children:[0,1,2].map(r=>l.jsx(pe.div,{className:"w-1.5 h-1.5 rounded-full bg-emerald-400",animate:{opacity:[.3,1,.3]},transition:{duration:1.2,repeat:1/0,delay:r*.2}},r))}),l.jsx("span",{className:"text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wide uppercase",children:"Generating"})]})})]}),l.jsx("div",{className:"flex-1 overflow-y-auto panel-scroll",children:l.jsx(mt,{mode:"wait",children:l.jsxs(pe.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.2},className:"h-full",children:[n==="eli5"&&l.jsx(K0,{}),n==="architecture"&&l.jsx(Q0,{}),n==="analyst"&&l.jsx(cg,{})]},n)})})]})}function hg(n){try{return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric"}).format(new Date(n))}catch{return"Unknown date"}}function pg(){const{sessions:n,loadSession:e,isLoading:t}=Ls(),{setDashboardMode:i,globalSearchQuery:r,setGlobalSearchQuery:s}=Ft(),a=n.filter(o=>(o.filename||"Dataset").toLowerCase().includes(r.toLowerCase()));return l.jsx("div",{className:"flex-1 overflow-y-auto w-full h-full bg-slate-50 dark:bg-slate-950 p-10 md:p-16 flex flex-col items-center transition-colors",children:l.jsxs("div",{className:"w-full max-w-4xl max-h-full flex flex-col",children:[l.jsxs("div",{className:"flex items-center gap-4 mb-8 text-slate-900 dark:text-slate-200 transition-colors",children:[l.jsx(ah,{size:32,className:"text-emerald-400 stroke-1"}),l.jsx("h1",{className:"text-3xl font-medium tracking-tight",children:"Data Story Directory"})]}),l.jsxs("div",{className:"relative mb-6",children:[l.jsx("div",{className:"absolute inset-y-0 left-4 flex flex-col justify-center pointer-events-none",children:l.jsx(yd,{size:20,className:"text-slate-500"})}),l.jsx("input",{type:"text",placeholder:"Search through past dataset stories...",value:r,onChange:o=>s(o.target.value),className:"w-full bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 transition-colors text-slate-900 dark:text-slate-200 pl-12 pr-4 py-4 rounded-2xl outline-none border border-slate-300 dark:border-transparent shadow-sm focus:border-emerald-500/30"})]}),l.jsx("div",{className:"flex-1 flex flex-col gap-2 overflow-y-auto panel-scroll pb-10",children:t?l.jsx("div",{className:"text-center py-20 text-slate-500",children:"Loading your stories..."}):a.length===0?l.jsx("div",{className:"text-center py-20 text-slate-500",children:r?"No stories match your search.":"You have no analyzed datasets yet."}):a.map((o,d)=>l.jsxs(pe.button,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.2,delay:d*.05},onClick:()=>{e(o.session_id),i("session")},className:"group flex items-center justify-between p-4 rounded-xl hover:bg-white dark:hover:bg-slate-900 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-all text-left w-full cursor-pointer",children:[l.jsxs("div",{className:"flex flex-col min-w-0 pr-8",children:[l.jsx("h3",{className:"text-base font-semibold text-slate-900 dark:text-slate-200 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors break-words",children:o.filename||"Dataset"}),l.jsxs("div",{className:"flex items-center gap-3 mt-1.5",children:[l.jsxs("span",{className:"text-xs text-slate-500 flex items-center gap-1.5",children:[l.jsx(Oo,{size:12}),hg(o.created_at)]}),o.image_count>0&&l.jsxs("span",{className:"text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20",children:[o.image_count," visualizations"]})]})]}),l.jsx("div",{className:"flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-200",children:l.jsx(pd,{size:20,className:"text-emerald-500"})})]},o.session_id))})]})})}const mg="wss://datalens-backend-844382502061.us-central1.run.app",gg=2e3,nc=5;function xg(){const[n,e]=P.useState(!1),[t,i]=P.useState(!1),[r,s]=P.useState(!1),[a,o]=P.useState(!1),[d]=P.useState(""),c=P.useRef(null),u=P.useRef(""),h=P.useRef(null),f=P.useRef(0),g=P.useRef([]),p=P.useRef(null),_=P.useRef(null),m=P.useRef(null);P.useRef(null);const x=P.useRef(0),y=P.useRef(null),w=P.useRef(null),E=P.useRef(!1),A=P.useRef(!1),T=Kn(te=>te.appToken??te.guestId??"none"),{setVoiceOrbState:C,addConversationMessage:v,resolveImage:M,conversationHistory:H}=Ft(),N=P.useCallback(()=>{if(!h.current){const te=window.AudioContext||window.webkitAudioContext;h.current=new te({sampleRate:16e3}),f.current=h.current.currentTime}return h.current.state==="suspended"&&h.current.resume(),h.current},[]),F=P.useCallback(()=>{g.current.forEach(te=>{try{te.stop()}catch{}}),g.current=[],h.current&&(f.current=h.current.currentTime),o(!1),C("listening")},[C]),z=P.useCallback(te=>{const J=N();try{const fe=atob(te),Fe=new Uint8Array(fe.length);for(let _e=0;_e<fe.length;_e++)Fe[_e]=fe.charCodeAt(_e);const Ee=new Int16Array(Fe.buffer),X=new Float32Array(Ee.length);for(let _e=0;_e<Ee.length;_e++)X[_e]=Ee[_e]/(Ee[_e]<0?32768:32767);const re=J.createBuffer(1,X.length,16e3);re.getChannelData(0).set(X);const se=J.createBufferSource();se.buffer=re,se.connect(J.destination);const ve=J.currentTime;f.current<ve&&(f.current=ve),se.start(f.current),f.current+=re.duration,o(!0),C("speaking"),se.onended=()=>{g.current=g.current.filter(_e=>_e!==se),J.currentTime>=f.current-.1&&(o(!1),C("listening"))},g.current.push(se)}catch(fe){console.error("[DataLens] Error playing audio chunk",fe)}},[N,C]),j=P.useCallback(te=>{switch(te.type){case"text_response":{u.current+=te.content;break}case"text_done":{const J=u.current.trim();if(u.current="",J.length>0){const fe={id:crypto.randomUUID(),role:"agent",content:J,timestamp:new Date().toISOString()};v(fe)}C("listening");break}case"audio_response":{z(te.data);break}case"new_image":{C("generating");const J=crypto.randomUUID();M(J,te.url,te.prompt??"","analyst");const fe={id:crypto.randomUUID(),role:"agent",content:`Generated visualization: ${te.prompt??""}`,timestamp:new Date().toISOString(),imageUrl:te.url};v(fe);break}case"connected":{e(!0),x.current=0;break}case"disconnected":{e(!1);break}case"error":{console.error("[DataLens] Agent error:",te.message),C("listening");break}}},[C,v,M,z]),B=P.useCallback(te=>{var Fe;if(((Fe=c.current)==null?void 0:Fe.readyState)===WebSocket.OPEN)return;w.current=te,E.current=!1;const J=`${mg}/ws/agent/${te}?token=${T}`,fe=new WebSocket(J);c.current=fe,fe.onopen=()=>{e(!0),x.current=0,console.log("[DataLens] Voice agent connected")},fe.onmessage=Ee=>{try{const X=JSON.parse(Ee.data);j(X)}catch(X){console.error("[DataLens] WS parse error:",X)}},fe.onerror=Ee=>console.error("[DataLens] WS error:",Ee),fe.onclose=Ee=>{e(!1),c.current=null,!E.current&&x.current<nc&&Ee.code!==1e3&&(x.current++,console.log(`[DataLens] Reconnecting (attempt ${x.current}/${nc})...`),y.current=setTimeout(()=>{w.current&&B(w.current)},gg*x.current))}},[j,T]),I=P.useCallback(te=>{if(F(),!c.current||c.current.readyState!==WebSocket.OPEN){console.warn("[DataLens] WebSocket not connected");return}c.current.send(JSON.stringify({type:"text",content:te})),C("generating")},[F,C]),O=P.useCallback(async()=>{try{const te=await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,sampleRate:16e3,echoCancellation:!0,noiseSuppression:!0}});p.current=te;const J=N(),fe=J.createMediaStreamSource(te);m.current=fe;const Fe=J.createScriptProcessor(4096,1,1);_.current=Fe,Fe.onaudioprocess=Ee=>{if(!c.current||c.current.readyState!==WebSocket.OPEN||!A.current)return;const X=Ee.inputBuffer.getChannelData(0),re=new Int16Array(X.length);for(let Re=0;Re<X.length;Re++){let dt=Math.max(-1,Math.min(1,X[Re]));re[Re]=dt<0?dt*32768:dt*32767}const se=new Uint8Array(re.buffer);let ve="";for(let Re=0;Re<se.byteLength;Re+=1024)ve+=String.fromCharCode.apply(null,Array.from(se.subarray(Re,Re+1024)));const _e=btoa(ve);c.current.send(JSON.stringify({type:"audio",data:_e}))},fe.connect(Fe),Fe.connect(J.destination),i(!0),C("listening")}catch(te){console.error("[DataLens] Microphone access denied or failed:",te),s(!1),A.current=!1}},[N,C]),ee=P.useCallback(()=>{_.current&&(_.current.disconnect(),_.current=null),m.current&&(m.current.disconnect(),m.current=null),p.current&&(p.current.getTracks().forEach(te=>te.stop()),p.current=null),i(!1),C("idle")},[C]),ie=P.useCallback(()=>{E.current=!0,ee(),F(),y.current&&clearTimeout(y.current),c.current&&(c.current.close(1e3,"User disconnected"),c.current=null),e(!1),o(!1),C("idle")},[ee,F,C]),K=P.useCallback(()=>{s(te=>{const J=!te;return A.current=J,J||ee(),J})},[ee]);return P.useEffect(()=>{n&&r&&!t&&O()},[n,r,t,O]),P.useEffect(()=>{!n&&t&&ee()},[n,t,ee]),P.useEffect(()=>()=>{E.current=!0,ee(),y.current&&clearTimeout(y.current),c.current&&c.current.close(),h.current&&h.current.close()},[ee]),{connect:B,disconnect:ie,sendText:I,toggleMic:K,isConnected:n,isListening:t,isMicEnabled:r,isSpeaking:a,interimTranscript:d,messages:H}}function _g(n,e=[]){let t=[];function i(s,a){const o=P.createContext(a);o.displayName=s+"Context";const d=t.length;t=[...t,a];const c=h=>{var x;const{scope:f,children:g,...p}=h,_=((x=f==null?void 0:f[n])==null?void 0:x[d])||o,m=P.useMemo(()=>p,Object.values(p));return l.jsx(_.Provider,{value:m,children:g})};c.displayName=s+"Provider";function u(h,f){var _;const g=((_=f==null?void 0:f[n])==null?void 0:_[d])||o,p=P.useContext(g);if(p)return p;if(a!==void 0)return a;throw new Error(`\`${h}\` must be used within \`${s}\``)}return[c,u]}const r=()=>{const s=t.map(a=>P.createContext(a));return function(o){const d=(o==null?void 0:o[n])||s;return P.useMemo(()=>({[`__scope${n}`]:{...o,[n]:d}}),[o,d])}};return r.scopeName=n,[i,vg(r,...e)]}function vg(...n){const e=n[0];if(n.length===1)return e;const t=()=>{const i=n.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const a=i.reduce((o,{useScope:d,scopeName:c})=>{const h=d(s)[`__scope${c}`];return{...o,...h}},{});return P.useMemo(()=>({[`__scope${e.scopeName}`]:a}),[a])}};return t.scopeName=e.scopeName,t}function bg(n){const e=P.useRef(n);return P.useEffect(()=>{e.current=n}),P.useMemo(()=>(...t)=>{var i;return(i=e.current)==null?void 0:i.call(e,...t)},[])}var Ga=globalThis!=null&&globalThis.document?P.useLayoutEffect:()=>{};function ic(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function yg(...n){return e=>{let t=!1;const i=n.map(r=>{const s=ic(r,e);return!t&&typeof s=="function"&&(t=!0),s});if(t)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():ic(n[r],null)}}}}var Sg=Symbol.for("react.lazy"),vs=Tf[" use ".trim().toString()];function Mg(n){return typeof n=="object"&&n!==null&&"then"in n}function mu(n){return n!=null&&typeof n=="object"&&"$$typeof"in n&&n.$$typeof===Sg&&"_payload"in n&&Mg(n._payload)}function gu(n){const e=wg(n),t=P.forwardRef((i,r)=>{let{children:s,...a}=i;mu(s)&&typeof vs=="function"&&(s=vs(s._payload));const o=P.Children.toArray(s),d=o.find(Ag);if(d){const c=d.props.children,u=o.map(h=>h===d?P.Children.count(c)>1?P.Children.only(null):P.isValidElement(c)?c.props.children:null:h);return l.jsx(e,{...a,ref:r,children:P.isValidElement(c)?P.cloneElement(c,void 0,u):null})}return l.jsx(e,{...a,ref:r,children:s})});return t.displayName=`${n}.Slot`,t}var Eg=gu("Slot");function wg(n){const e=P.forwardRef((t,i)=>{let{children:r,...s}=t;if(mu(r)&&typeof vs=="function"&&(r=vs(r._payload)),P.isValidElement(r)){const a=Cg(r),o=Rg(s,r.props);return r.type!==P.Fragment&&(o.ref=i?yg(i,a):a),P.cloneElement(r,o)}return P.Children.count(r)>1?P.Children.only(null):null});return e.displayName=`${n}.SlotClone`,e}var Tg=Symbol("radix.slottable");function Ag(n){return P.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===Tg}function Rg(n,e){const t={...e};for(const i in e){const r=n[i],s=e[i];/^on[A-Z]/.test(i)?r&&s?t[i]=(...o)=>{const d=s(...o);return r(...o),d}:r&&(t[i]=r):i==="style"?t[i]={...r,...s}:i==="className"&&(t[i]=[r,s].filter(Boolean).join(" "))}return{...n,...t}}function Cg(n){var i,r;let e=(i=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:i.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=(r=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:r.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}var Ng=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],$o=Ng.reduce((n,e)=>{const t=gu(`Primitive.${e}`),i=P.forwardRef((r,s)=>{const{asChild:a,...o}=r,d=a?t:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),l.jsx(d,{...o,ref:s})});return i.displayName=`Primitive.${e}`,{...n,[e]:i}},{});function Pg(){return Cd.useSyncExternalStore(Lg,()=>!0,()=>!1)}function Lg(){return()=>{}}var Yo="Avatar",[Dg]=_g(Yo),[Ig,xu]=Dg(Yo),_u=P.forwardRef((n,e)=>{const{__scopeAvatar:t,...i}=n,[r,s]=P.useState("idle");return l.jsx(Ig,{scope:t,imageLoadingStatus:r,onImageLoadingStatusChange:s,children:l.jsx($o.span,{...i,ref:e})})});_u.displayName=Yo;var vu="AvatarImage",bu=P.forwardRef((n,e)=>{const{__scopeAvatar:t,src:i,onLoadingStatusChange:r=()=>{},...s}=n,a=xu(vu,t),o=kg(i,s),d=bg(c=>{r(c),a.onImageLoadingStatusChange(c)});return Ga(()=>{o!=="idle"&&d(o)},[o,d]),o==="loaded"?l.jsx($o.img,{...s,ref:e,src:i}):null});bu.displayName=vu;var yu="AvatarFallback",Su=P.forwardRef((n,e)=>{const{__scopeAvatar:t,delayMs:i,...r}=n,s=xu(yu,t),[a,o]=P.useState(i===void 0);return P.useEffect(()=>{if(i!==void 0){const d=window.setTimeout(()=>o(!0),i);return()=>window.clearTimeout(d)}},[i]),a&&s.imageLoadingStatus!=="loaded"?l.jsx($o.span,{...r,ref:e}):null});Su.displayName=yu;function rc(n,e){return n?e?(n.src!==e&&(n.src=e),n.complete&&n.naturalWidth>0?"loaded":"loading"):"error":"idle"}function kg(n,{referrerPolicy:e,crossOrigin:t}){const i=Pg(),r=P.useRef(null),s=i?(r.current||(r.current=new window.Image),r.current):null,[a,o]=P.useState(()=>rc(s,n));return Ga(()=>{o(rc(s,n))},[s,n]),Ga(()=>{const d=h=>()=>{o(h)};if(!s)return;const c=d("loaded"),u=d("error");return s.addEventListener("load",c),s.addEventListener("error",u),e&&(s.referrerPolicy=e),typeof t=="string"&&(s.crossOrigin=t),()=>{s.removeEventListener("load",c),s.removeEventListener("error",u)}},[s,t,e]),a}var Mu=_u,Eu=bu,wu=Su;const Ko=P.forwardRef(({className:n,...e},t)=>l.jsx(Mu,{ref:t,className:it("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",n),...e}));Ko.displayName=Mu.displayName;const Tu=P.forwardRef(({className:n,...e},t)=>l.jsx(Eu,{ref:t,className:it("aspect-square h-full w-full",n),...e}));Tu.displayName=Eu.displayName;const Zo=P.forwardRef(({className:n,...e},t)=>l.jsx(wu,{ref:t,className:it("flex h-full w-full items-center justify-center rounded-full bg-muted",n),...e}));Zo.displayName=wu.displayName;const sc=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,ac=Bt,Ug=(n,e)=>t=>{var i;if((e==null?void 0:e.variants)==null)return ac(n,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:r,defaultVariants:s}=e,a=Object.keys(r).map(c=>{const u=t==null?void 0:t[c],h=s==null?void 0:s[c];if(u===null)return null;const f=sc(u)||sc(h);return r[c][f]}),o=t&&Object.entries(t).reduce((c,u)=>{let[h,f]=u;return f===void 0||(c[h]=f),c},{}),d=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,u)=>{let{class:h,className:f,...g}=u;return Object.entries(g).every(p=>{let[_,m]=p;return Array.isArray(m)?m.includes({...s,...o}[_]):{...s,...o}[_]===m})?[...c,h,f]:c},[]);return ac(n,a,d,t==null?void 0:t.class,t==null?void 0:t.className)},Fg=Ug("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Jo=P.forwardRef(({className:n,variant:e,size:t,asChild:i=!1,...r},s)=>{const a=i?Eg:"button";return l.jsx(a,{className:it(Fg({variant:e,size:t,className:n})),ref:s,...r})});Jo.displayName="Button";function Og(){return l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"text-foreground",children:[l.jsx("circle",{cx:"4",cy:"12",r:"2",fill:"currentColor",children:l.jsx("animate",{id:"spinner_qFRN",begin:"0;spinner_OcgL.end+0.25s",attributeName:"cy",calcMode:"spline",dur:"0.6s",values:"12;6;12",keySplines:".33,.66,.66,1;.33,0,.66,.33"})}),l.jsx("circle",{cx:"12",cy:"12",r:"2",fill:"currentColor",children:l.jsx("animate",{begin:"spinner_qFRN.begin+0.1s",attributeName:"cy",calcMode:"spline",dur:"0.6s",values:"12;6;12",keySplines:".33,.66,.66,1;.33,0,.66,.33"})}),l.jsx("circle",{cx:"20",cy:"12",r:"2",fill:"currentColor",children:l.jsx("animate",{id:"spinner_OcgL",begin:"spinner_qFRN.begin+0.2s",attributeName:"cy",calcMode:"spline",dur:"0.6s",values:"12;6;12",keySplines:".33,.66,.66,1;.33,0,.66,.33"})})]})}function oc({variant:n="received",layout:e="default",className:t,children:i}){return l.jsx("div",{className:it("flex items-start gap-2",n==="sent"&&"flex-row-reverse",t),children:i})}function lc({variant:n="received",isLoading:e,className:t,children:i}){return l.jsx("div",{className:it("rounded-2xl px-4 py-2.5 text-sm max-w-[80%] leading-relaxed",n==="sent"?"bg-black text-white dark:bg-white dark:text-black rounded-tr-sm":"bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-tl-sm",t),children:e?l.jsx("div",{className:"flex items-center py-1",children:l.jsx(Og,{})}):i})}function cc({src:n,fallback:e="AI",className:t}){return l.jsxs(Ko,{className:it("h-8 w-8 shrink-0",t),children:[n&&l.jsx(Tu,{src:n}),l.jsx(Zo,{className:"text-xs font-semibold bg-gradient-to-br from-emerald-400 to-sky-500 text-white",children:e})]})}function Bg(n={}){const{offset:e=20,smooth:t=!1,content:i}=n,r=P.useRef(null),s=P.useRef(0),a=P.useRef(!1),[o,d]=P.useState({isAtBottom:!0,autoScrollEnabled:!0}),c=P.useCallback(g=>{const{scrollTop:p,scrollHeight:_,clientHeight:m}=g;return Math.abs(_-p-m)<=e},[e]),u=P.useCallback(g=>{if(!r.current)return;const p=r.current.scrollHeight-r.current.clientHeight;g?r.current.scrollTop=p:r.current.scrollTo({top:p,behavior:t?"smooth":"auto"}),d({isAtBottom:!0,autoScrollEnabled:!0}),a.current=!1},[t]),h=P.useCallback(()=>{if(!r.current)return;const g=c(r.current);d(p=>({isAtBottom:g,autoScrollEnabled:g?!0:p.autoScrollEnabled}))},[c]);P.useEffect(()=>{const g=r.current;if(g)return g.addEventListener("scroll",h,{passive:!0}),()=>g.removeEventListener("scroll",h)},[h]),P.useEffect(()=>{const g=r.current;if(!g)return;const p=g.scrollHeight;p!==s.current&&(o.autoScrollEnabled&&requestAnimationFrame(()=>u(s.current===0)),s.current=p)},[i,o.autoScrollEnabled,u]),P.useEffect(()=>{const g=r.current;if(!g)return;const p=new ResizeObserver(()=>{o.autoScrollEnabled&&u(!0)});return p.observe(g),()=>p.disconnect()},[o.autoScrollEnabled,u]);const f=P.useCallback(()=>{(r.current?c(r.current):!1)||(a.current=!0,d(p=>({...p,autoScrollEnabled:!1})))},[c]);return{scrollRef:r,isAtBottom:o.isAtBottom,autoScrollEnabled:o.autoScrollEnabled,scrollToBottom:()=>u(!1),disableAutoScroll:f}}const Au=P.forwardRef(({className:n,children:e,smooth:t=!1,...i},r)=>{const{scrollRef:s,isAtBottom:a,scrollToBottom:o,disableAutoScroll:d}=Bg({smooth:t,content:e});return l.jsxs("div",{className:"relative w-full h-full",children:[l.jsx("div",{className:it("flex flex-col w-full h-full px-4 py-3 overflow-y-auto",n),ref:s,onWheel:d,onTouchMove:d,...i,children:l.jsx("div",{className:"flex flex-col gap-4",children:e})}),!a&&l.jsx(Jo,{onClick:o,size:"icon",variant:"outline",className:"absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full shadow-md h-8 w-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700","aria-label":"Scroll to bottom",children:l.jsx(Xf,{className:"h-3.5 w-3.5"})})]})});Au.displayName="ChatMessageList";function zg({url:n,onClose:e}){return P.useEffect(()=>{const t=i=>{i.key==="Escape"&&e()};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[e]),l.jsx(pe.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4",onClick:e,children:l.jsxs(pe.div,{initial:{scale:.92,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.92,opacity:0},transition:{type:"spring",damping:25,stiffness:300},className:"relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center",onClick:t=>t.stopPropagation(),children:[l.jsxs("div",{className:"flex items-center justify-between w-full mb-3",children:[l.jsx("span",{className:"text-white/60 text-xs",children:"Generated Visualization"}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("a",{href:n,download:!0,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs border border-white/10 transition-colors",onClick:t=>t.stopPropagation(),children:[l.jsx(eh,{size:12})," Download"]}),l.jsxs("button",{onClick:e,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-red-500/30 text-white text-xs border border-white/10 transition-colors",children:[l.jsx(mi,{size:12})," Close"]})]})]}),l.jsx("div",{className:"rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-full",children:l.jsx("img",{src:n,alt:"Generated visualization",className:"w-full h-auto max-h-[80vh] object-contain bg-slate-900"})}),l.jsx("p",{className:"mt-3 text-white/30 text-[11px]",children:"Press ESC or click outside to close"})]})})}function jg({text:n}){const e=n.split(`
`);return l.jsx("div",{className:"space-y-1",children:e.map((t,i)=>{var u;if(!t.trim())return l.jsx("div",{className:"h-1"},i);const r=[];let s=t,a=0;const o=[{re:/```([^`]+)```|`([^`]+)`/,render:(h,f,g)=>l.jsx("code",{className:"px-1 py-0.5 rounded bg-black/10 dark:bg-white/10 text-[11px] font-mono",children:f||g},a++)},{re:/\*\*([^*]+)\*\*/,render:(h,f)=>l.jsx("strong",{className:"font-semibold",children:f},a++)},{re:/\*([^*]+)\*/,render:(h,f)=>l.jsx("em",{className:"italic",children:f},a++)},{re:/\[([^\]]+)\]\(([^)]+)\)/,render:(h,f,g)=>l.jsx("a",{href:g,target:"_blank",rel:"noopener noreferrer",className:"underline underline-offset-2 opacity-80 hover:opacity-100",children:f},a++)}];for(;s.length>0;){let h=s.length,f=null,g=null;for(const p of o){const _=s.match(p.re);_&&_.index!==void 0&&_.index<h&&(h=_.index,f=p,g=_)}if(f&&g&&g.index!==void 0)g.index>0&&r.push(l.jsx("span",{children:s.slice(0,g.index)},a++)),r.push(f.render(g[0],g[1],g[2])),s=s.slice(g.index+g[0].length);else{r.push(l.jsx("span",{children:s},a++));break}}const d=/^[-*•]\s/.test(t.trim()),c=/^\d+\.\s/.test(t.trim());return d||c?l.jsxs("div",{className:"flex gap-2 items-start",children:[l.jsx("span",{className:"opacity-60 mt-0.5 flex-shrink-0 text-[11px]",children:d?"•":(u=t.trim().match(/^(\d+\.)/))==null?void 0:u[1]}),l.jsx("span",{children:r})]},i):l.jsx("div",{children:r},i)})})}function Vg({message:n}){const[e,t]=P.useState(!1);return l.jsxs(l.Fragment,{children:[l.jsx(jg,{text:n.content}),n.imageUrl&&l.jsxs("div",{className:"mt-2.5 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 relative group/img cursor-pointer",onClick:()=>t(!0),children:[l.jsx("img",{src:n.imageUrl,alt:"Generated visual",className:"w-full object-cover hover:opacity-90 transition-opacity",style:{maxHeight:"200px"},loading:"lazy",onError:i=>{i.target.parentElement.style.display="none"}}),l.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/25 rounded-xl",children:l.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/60 text-white text-xs border border-white/10",children:[l.jsx(gr,{size:12})," View full size"]})})]}),l.jsx(mt,{children:e&&n.imageUrl&&l.jsx(zg,{url:n.imageUrl,onClose:()=>t(!1)})})]})}function Gg(){return l.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center px-6 py-8",children:[l.jsxs("div",{className:"relative mb-5",children:[l.jsx("div",{className:"w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 border border-emerald-500/20 shadow-sm",children:l.jsx("span",{className:"text-2xl",children:"✦"})}),l.jsx("div",{className:"absolute inset-0 rounded-2xl animate-ping opacity-10 bg-emerald-400"})]}),l.jsx("p",{className:"text-sm font-semibold mb-1 text-slate-800 dark:text-slate-200",children:"Ask me anything"}),l.jsx("p",{className:"text-xs leading-relaxed text-slate-400 max-w-[200px]",children:"I can explain your data, generate charts, or create visualizations."}),l.jsx("div",{className:"flex flex-wrap gap-1.5 mt-5 justify-center",children:["Explain the trends","Key outliers?","Summarize data"].map(n=>l.jsx("span",{className:"px-2.5 py-1 rounded-full text-[10px] bg-slate-100 dark:bg-slate-800/60 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400",children:n},n))})]})}function Hg({messages:n,isResponding:e}){return n.length===0&&!e?l.jsx(Gg,{}):l.jsxs(Au,{smooth:!0,className:"h-full",children:[n.map(t=>l.jsxs(oc,{variant:t.role==="user"?"sent":"received",children:[t.role==="agent"&&l.jsx(cc,{fallback:"AI"}),l.jsx(lc,{variant:t.role==="user"?"sent":"received",children:t.role==="user"?t.content:l.jsx(Vg,{message:t})}),t.role==="user"&&l.jsx(Ko,{className:"h-8 w-8 shrink-0 bg-slate-200 dark:bg-slate-700 flex items-center justify-center",children:l.jsx(Zo,{className:"bg-slate-200 dark:bg-slate-700",children:l.jsx(vh,{size:16,className:"text-slate-600 dark:text-slate-300"})})})]},t.id)),e&&l.jsxs(oc,{variant:"received",children:[l.jsx(cc,{fallback:"AI"}),l.jsx(lc,{variant:"received",isLoading:!0})]})]})}function Ru(){const n=Ts();return n?{Authorization:n}:{}}const Cu="https://datalens-backend-844382502061.us-central1.run.app";function Wg(n){try{return new Date(n).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return""}}function Xg({session:n,onDrag:e}){const[t,i]=P.useState(!1),[r,s]=P.useState([]),[a,o]=P.useState(!1),d=P.useCallback(async()=>{if(!(r.length>0)){o(!0);try{const u=await tt.get(`${Cu}/sessions/${n.session_id}`,{headers:Ru()});s(u.data.conversation_history||[])}catch{s([])}finally{o(!1)}}},[n.session_id,r.length]),c=()=>{i(u=>!u),t||d()};return l.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/60 overflow-hidden group",draggable:!0,onDragStart:u=>{u.dataTransfer.setData("application/json",JSON.stringify({session_id:n.session_id,filename:n.filename})),e(n.session_id,n.filename)},children:[l.jsxs("div",{className:"flex items-center gap-2 px-3 py-2.5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors select-none",onClick:c,children:[l.jsx(oh,{size:13,className:"text-slate-300 dark:text-slate-600 flex-shrink-0 group-hover:text-slate-500 cursor-grab active:cursor-grabbing"}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:"text-xs font-semibold text-slate-800 dark:text-slate-200 truncate",children:n.filename}),l.jsxs("p",{className:"text-[10px] text-slate-400 flex items-center gap-1 mt-0.5",children:[l.jsx(Jf,{size:8}),Wg(n.created_at)]})]}),l.jsxs("div",{className:"flex items-center gap-1 flex-shrink-0",children:[l.jsxs("span",{className:"text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 font-medium",children:[n.image_count," imgs"]}),t?l.jsx(Kf,{size:12,className:"text-slate-400"}):l.jsx(pd,{size:12,className:"text-slate-400"})]})]}),l.jsx(mt,{children:t&&l.jsxs(pe.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.2},className:"overflow-hidden border-t border-slate-100 dark:border-slate-700/50",children:[l.jsx("div",{className:"px-3 py-2 max-h-48 overflow-y-auto space-y-2",children:a?l.jsxs("div",{className:"flex items-center gap-2 py-2",children:[l.jsx(ka,{size:11,className:"animate-spin text-slate-400"}),l.jsx("span",{className:"text-[10px] text-slate-400",children:"Loading…"})]}):r.length===0?l.jsx("p",{className:"text-[10px] text-slate-400 py-2",children:"No conversation history yet."}):r.slice(-6).map((u,h)=>l.jsx("div",{className:`flex gap-1.5 ${u.role==="user"?"flex-row-reverse":""}`,children:l.jsxs("div",{className:`rounded-lg px-2.5 py-1.5 text-[10px] leading-snug max-w-[80%] ${u.role==="user"?"bg-emerald-500 text-white":"bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300"}`,children:[u.content.slice(0,120),u.content.length>120?"…":""]})},h))}),l.jsx("div",{className:"px-3 py-1.5 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-100 dark:border-slate-700/50",children:l.jsx("p",{className:"text-[9px] text-slate-400 text-center",children:"↕ Drag this card into the chat to give the AI access to this data"})})]})})]})}function qg({onDragSession:n,className:e}){const[t,i]=P.useState([]),[r,s]=P.useState(!1),[a,o]=P.useState(null),d=Kn(u=>u.appToken??u.guestId??"none"),c=P.useCallback(async()=>{s(!0);try{const u=await tt.get(`${Cu}/sessions?type=all`,{headers:Ru()});i(u.data||[])}catch{i([])}finally{s(!1)}},[]);return P.useEffect(()=>{c()},[c,d]),l.jsxs("div",{className:`flex flex-col h-full bg-slate-50 dark:bg-slate-900/50 border-l border-slate-200 dark:border-slate-700/50 ${e}`,style:{width:220,minWidth:200,maxWidth:260},children:[l.jsxs("div",{className:"flex items-center justify-between px-3 py-3 border-b border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-900/60",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(ms,{size:13,className:"text-emerald-500"}),l.jsx("span",{className:"text-xs font-semibold text-slate-700 dark:text-slate-300",children:"Past Chats"})]}),l.jsx("button",{onClick:c,disabled:r,className:"p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors",title:"Refresh",children:l.jsx(ka,{size:11,className:`text-slate-400 ${r?"animate-spin":""}`})})]}),l.jsx("div",{className:"px-3 py-2 bg-emerald-50 dark:bg-emerald-500/5 border-b border-emerald-100 dark:border-emerald-500/10",children:l.jsx("p",{className:"text-[9px] text-emerald-600 dark:text-emerald-400 leading-relaxed",children:"💡 Drag any session into the AI chat to give the agent context from that dataset"})}),l.jsx("div",{className:"flex-1 overflow-y-auto px-2 py-2 space-y-2",children:r&&t.length===0?l.jsxs("div",{className:"flex items-center gap-2 py-4 justify-center",children:[l.jsx(ka,{size:13,className:"animate-spin text-slate-400"}),l.jsx("span",{className:"text-[11px] text-slate-400",children:"Loading…"})]}):t.length===0?l.jsxs("div",{className:"text-center py-8 px-3",children:[l.jsx(ms,{size:24,className:"text-slate-300 dark:text-slate-600 mx-auto mb-2"}),l.jsx("p",{className:"text-[11px] text-slate-400",children:"No sessions yet"})]}):t.map(u=>l.jsx(Xg,{session:u,onDrag:(h,f)=>{o(h),n(h,f)}},u.session_id))})]})}const Nu=P.forwardRef(({className:n,...e},t)=>l.jsx("textarea",{className:it("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...e}));Nu.displayName="Textarea";const Pu=P.forwardRef(({className:n,...e},t)=>l.jsx(Nu,{autoComplete:"off",ref:t,name:"message",className:it("max-h-32 px-4 py-3 bg-background text-sm placeholder:text-muted-foreground","focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0","disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-md","flex items-center h-16 resize-none border-0 shadow-none",n),...e}));Pu.displayName="ChatInput";function dc({variant:n="sidebar"}){const[e,t]=P.useState(""),[i,r]=P.useState(!1),[s,a]=P.useState(!1),[o,d]=P.useState(!0),[c,u]=P.useState(300),h=P.useRef(!1),f=P.useCallback(J=>{h.current=!0,document.body.style.cursor="col-resize"},[]),g=P.useCallback(()=>{h.current&&(h.current=!1,document.body.style.cursor="default")},[]),p=P.useCallback(J=>{if(h.current){const fe=window.innerWidth-J.clientX;fe>250&&fe<800&&u(fe)}},[]);P.useEffect(()=>(window.addEventListener("mousemove",p),window.addEventListener("mouseup",g),()=>{window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",g)}),[p,g]);const{sessionId:_,voiceOrbState:m,addConversationMessage:x,conversationHistory:y,setDashboardMode:w,dashboardMode:E,clearChat:A}=Ft(),{loadSession:T}=Ls(),{connect:C,disconnect:v,sendText:M,isConnected:H,isListening:N,isSpeaking:F}=xg();P.useEffect(()=>{_?C(_):v()},[_]);const z=typeof window<"u"&&!!(window.SpeechRecognition||window.webkitSpeechRecognition),j=P.useCallback(async J=>{const fe=J.trim();fe&&(x({id:crypto.randomUUID(),role:"user",content:fe,timestamp:new Date().toISOString()}),r(!0),H?M(fe):setTimeout(()=>{x({id:crypto.randomUUID(),role:"agent",content:"I'm currently disconnected. Please wait while I reconnect, then try again.",timestamp:new Date().toISOString()}),r(!1)},1500))},[H,M,x]),B=P.useCallback(J=>{J.key==="Enter"&&!J.shiftKey&&(J.preventDefault(),j(e),t(""))},[e,j]);P.useCallback(()=>{x({id:crypto.randomUUID(),role:"user",content:"Generate a visualization image for this data",timestamp:new Date().toISOString()}),H&&(M("Please generate a data visualization image for the current dataset."),r(!0))},[x,H,M]);const I=P.useRef(y.length);P.useEffect(()=>{var J;y.length>I.current&&((J=y[y.length-1])==null?void 0:J.role)==="agent"&&r(!1),I.current=y.length},[y]),P.useEffect(()=>{m==="listening"&&r(!1)},[m]);const O=P.useCallback(J=>{J.preventDefault(),a(!0)},[]),ee=P.useCallback(J=>{J.preventDefault(),a(!1)},[]),ie=P.useCallback(async J=>{J.preventDefault(),a(!1);try{const fe=J.dataTransfer.getData("application/json");if(fe){const{session_id:Fe,filename:Ee}=JSON.parse(fe);Fe&&Fe!==_&&(_!=null&&_.startsWith("agent_")||_==="global_agent"?(x({id:crypto.randomUUID(),role:"user",content:`Please consider my past chat history from dataset: **${Ee||"Unknown"}** (Session ID: ${Fe}) in your reasoning.`,timestamp:new Date().toISOString()}),H&&(r(!0),M(`Please consider my past chat history from dataset: **${Ee||"Unknown"}** (Session ID: ${Fe}) in your reasoning.`))):(await T(Fe),w("session"),x({id:crypto.randomUUID(),role:"agent",content:`I've loaded your chat for **${Ee||"the dataset"}**. I'm reviewing the profile and stories now. What would you like to know?`,timestamp:new Date().toISOString()})))}}catch(fe){console.error("Failed to parse dropped session:",fe)}},[_,T,w,x,H,M]),K=H?N?"Listening":F?"Speaking":"Connected":_?"Reconnecting…":"No session",te=H?N?"#34d399":F?"#0ea5e9":"#10b981":"rgba(255,255,255,0.25)";return l.jsxs("div",{className:Bt("flex h-full bg-white dark:bg-[#0f172a] relative",n==="sidebar"?"flex-shrink-0 border-l border-slate-200 dark:border-white/5":"flex-1 w-full border-none"),style:n==="sidebar"?{width:c}:{},children:[n==="sidebar"&&l.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1.5 -ml-[3px] cursor-col-resize hover:bg-emerald-500/50 z-50 transition-colors",onMouseDown:f}),l.jsxs("div",{className:Bt("flex flex-col flex-1 min-w-0 relative transition-colors duration-300",s?"bg-emerald-50 dark:bg-emerald-900/10":"",n==="center"?"rounded-t-md border-t border-x border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#0f172a]":""),style:n==="center"?{borderTopLeftRadius:"16px",borderTopRightRadius:"16px"}:{},onDragOver:O,onDragLeave:ee,onDrop:ie,children:[l.jsx(mt,{children:s&&l.jsx(pe.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-2 border-emerald-500/50 border-dashed m-2 rounded-2xl pointer-events-none",children:l.jsxs("div",{className:"flex flex-col items-center gap-3 text-emerald-500",children:[l.jsx(Ml,{size:40,className:"animate-bounce"}),l.jsx("p",{className:"font-semibold text-sm tracking-wide",children:"Drop to load context"})]})})}),l.jsxs("div",{className:"flex-shrink-0 flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/60 transition-colors",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-8 h-8 rounded-xl flex items-center justify-center bg-gradient-to-br from-emerald-400 to-sky-500 shadow-sm",children:l.jsx(Ml,{size:16,className:"text-white"})}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs font-bold leading-none text-slate-800 dark:text-slate-200",children:"AI Agent"}),l.jsx("p",{className:"text-[10px] mt-0.5 leading-none text-slate-500",children:"Gemini Live"})]})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx(pe.div,{animate:{opacity:H?1:[1,.3,1]},transition:H?{}:{duration:1.8,repeat:1/0},className:"w-1.5 h-1.5 rounded-full",style:{background:te}}),H?l.jsx(yh,{size:11,style:{color:te}}):l.jsx(bh,{size:11,style:{color:"rgba(148,163,184,0.4)"}}),l.jsx("span",{className:"text-[10px] font-medium text-slate-400",children:K}),l.jsx(mt,{children:H&&N&&l.jsxs(pe.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},className:"flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),l.jsx("span",{className:"text-[9px] font-bold uppercase tracking-wide text-emerald-400",children:"Live"})]})})]}),E==="ai"&&l.jsxs("button",{onClick:A,className:"px-2.5 py-1 rounded-lg text-[10px] font-semibold flex items-center gap-1.5 transition-colors bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300",children:[l.jsx(Es,{size:10})," New Chat"]})]})]}),!z&&l.jsx("div",{className:"flex-shrink-0 mx-3 mt-2 px-3 py-2 rounded-xl bg-amber-500/8 border border-amber-500/20",children:l.jsx("p",{className:"text-[10px] leading-relaxed text-amber-500",children:"Voice input not supported — use Chrome/Edge."})}),l.jsx("div",{className:"flex-1 overflow-hidden flex flex-col min-h-0",children:l.jsx(Hg,{messages:y,isResponding:i})}),l.jsx("div",{className:"flex-shrink-0 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/60",children:l.jsx("div",{className:"p-3",children:l.jsxs("form",{onSubmit:J=>{J.preventDefault(),j(e),t("")},className:"relative rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus-within:border-emerald-500/40 focus-within:ring-1 focus-within:ring-emerald-500/20 transition-all shadow-sm",children:[l.jsx(Pu,{value:e,onChange:J=>t(J.target.value),onKeyDown:B,placeholder:_?"Ask anything about your data…":"Upload a dataset first",className:"min-h-[52px] max-h-32 bg-transparent border-0 shadow-none focus-visible:ring-0 px-3 py-3 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 resize-none"}),l.jsx("div",{className:"flex items-center px-2 pb-2 gap-1 justify-end",children:l.jsx(Jo,{type:"submit",size:"sm",disabled:!e.trim()||!_,className:Bt("gap-1.5 text-xs h-8 rounded-lg",e.trim()&&_?"bg-emerald-500 hover:bg-emerald-400 text-white shadow-sm shadow-emerald-500/20":"bg-slate-100 dark:bg-slate-800 text-slate-400"),children:i?l.jsxs("span",{className:"flex items-center gap-1.5",children:[l.jsx("span",{className:"w-1.5 h-1.5 bg-current rounded-sm animate-spin",style:{animationDuration:"2s"}}),"Thinking…"]}):l.jsxs(l.Fragment,{children:["Send ",l.jsx(Qf,{size:11})]})})})]})})})]}),E==="ai"&&o&&l.jsx("div",{className:"hidden md:flex h-full flex-shrink-0",children:l.jsx(qg,{onDragSession:(J,fe)=>{}})})]})}const uc="https://datalens-backend-844382502061.us-central1.run.app";function $g(){const[n,e]=P.useState(null),t=P.useRef(null),i=P.useRef("eli5"),{setIsStreaming:r,appendStoryText:s,addPendingImage:a,resolveImage:o,setChartData:d,finalizeStories:c,setActiveFormat:u,isStreaming:h}=Ft(),f=P.useCallback(()=>{t.current&&(t.current.abort(),t.current=null),r(!1)},[r]),g=P.useCallback(_=>{switch(_.type){case"text":{s(_.format,_.content);break}case"image_placeholder":{a(_.placeholder_id,_.prompt,_.format);break}case"image_ready":{const m=_.placeholder_id||crypto.randomUUID();o(m,_.url,_.prompt,_.format,_.caption);break}case"chart_data":{d(_.data);break}case"complete":{const m=Ft.getState();fetch(`${uc}/stories/save`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({session_id:m.sessionId,eli5:_.stories.eli5,architecture:_.stories.architecture,analyst:_.stories.analyst,chart_data:_.stories.chart_data||{},images:m.resolvedImages})}).catch(console.error),c(_.stories);break}case"error":{e(_.message),r(!1);break}}},[s,a,o,d,c,u,r]);return{startStream:P.useCallback(async(_,m)=>{h&&f(),e(null),r(!0),i.current="eli5";const x=new AbortController;t.current=x;try{const y=Ts(),w=await fetch(`${uc}/stories/generate`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"text/event-stream",...y?{Authorization:y}:{}},body:JSON.stringify({session_id:_,data_profile:m}),signal:x.signal});if(!w.ok){const C=await w.text();throw new Error(`HTTP ${w.status}: ${C}`)}if(!w.body)throw new Error("Response body is null — SSE stream unavailable");const E=w.body.getReader(),A=new TextDecoder("utf-8");let T="";for(;;){const{done:C,value:v}=await E.read();if(C)break;T+=A.decode(v,{stream:!0});const M=T.split(`
`);T=M.pop()??"";for(const H of M){const N=H.trim();if(!(!N||N.startsWith(":"))&&N.startsWith("data: ")){const F=N.slice(6).trim();if(F==="[DONE]"){r(!1);continue}try{const z=JSON.parse(F);g(z)}catch(z){console.warn("Failed to parse SSE chunk:",F,z)}}}}if(T.trim().startsWith("data: ")){const C=T.slice(T.indexOf("data: ")+6).trim();if(C&&C!=="[DONE]")try{const v=JSON.parse(C);g(v)}catch{}}}catch(y){if(y instanceof Error&&y.name==="AbortError")return;const w=y instanceof Error?y.message:"Unknown streaming error";e(w),console.error("Story stream error:",y)}finally{r(!1),t.current=null}},[h,f,r,g]),isStreaming:h,error:n,cancelStream:f}}function Yg(){const{startStream:n}=$g(),{refreshSessions:e}=Ls(),{sessionId:t,dataProfile:i,resetStream:r,setDataProfile:s,setSessionId:a,dashboardMode:o,setDashboardMode:d}=Ft(),c=P.useCallback(async(u,h)=>{a(u),s(h),r(),d("session"),await e(),await n(u,h)},[a,s,r,e,n,d]);return l.jsxs("div",{className:"flex flex-1 overflow-hidden relative bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white",children:[l.jsx(F0,{children:l.jsx(O0,{children:l.jsx(I0,{})})}),l.jsxs("div",{className:"flex flex-1 overflow-hidden relative z-10 bg-white dark:bg-[#0f172a] border-l border-slate-200 dark:border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.1)]",children:[l.jsx("div",{className:"flex-1 flex flex-col overflow-hidden",children:l.jsxs(mt,{mode:"wait",children:[o==="upload"&&l.jsx(pe.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.35},className:"flex-1 overflow-y-auto panel-scroll",children:l.jsx(V0,{onUploadComplete:c})},"upload"),o==="directory"&&l.jsx(pe.div,{initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.98},transition:{duration:.3},className:"flex-1 flex overflow-hidden",children:l.jsx(pg,{})},"directory"),o==="session"&&l.jsxs(pe.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.35},className:"flex-1 flex flex-col overflow-hidden",children:[l.jsx("div",{className:"flex-1 overflow-hidden",style:{minHeight:0},children:l.jsx(fg,{})}),l.jsx("div",{className:"flex-shrink-0 w-full min-w-0 overflow-y-auto panel-scroll",style:{height:"220px",borderTop:"1px solid rgba(255,255,255,0.06)"},children:l.jsx(X0,{})})]},"stories"),o==="ai"&&l.jsx(pe.div,{initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.98},transition:{duration:.3},className:"flex-1 flex flex-col overflow-hidden",children:l.jsx(dc,{variant:"center"})},"ai_assistant")]})}),o==="session"&&l.jsx("div",{className:"hidden lg:flex h-full",children:l.jsx(dc,{variant:"sidebar"})})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qo="183",Kg=0,fc=1,Zg=2,ls=1,Jg=2,cr=3,Yn=0,Vt=1,Rn=2,Nn=0,ki=1,hc=2,pc=3,mc=4,Qg=5,ci=100,ex=101,tx=102,nx=103,ix=104,rx=200,sx=201,ax=202,ox=203,Ha=204,Wa=205,lx=206,cx=207,dx=208,ux=209,fx=210,hx=211,px=212,mx=213,gx=214,Xa=0,qa=1,$a=2,Bi=3,Ya=4,Ka=5,Za=6,Ja=7,Lu=0,xx=1,_x=2,mn=0,Du=1,Iu=2,ku=3,Uu=4,Fu=5,Ou=6,Bu=7,zu=300,xi=301,zi=302,Js=303,Qs=304,Is=306,Qa=1e3,Cn=1001,eo=1002,Ct=1003,vx=1004,Ir=1005,It=1006,ea=1007,fi=1008,Jt=1009,ju=1010,Vu=1011,fr=1012,el=1013,_n=1014,hn=1015,Ln=1016,tl=1017,nl=1018,hr=1020,Gu=35902,Hu=35899,Wu=1021,Xu=1022,sn=1023,Dn=1026,hi=1027,qu=1028,il=1029,ji=1030,rl=1031,sl=1033,cs=33776,ds=33777,us=33778,fs=33779,to=35840,no=35841,io=35842,ro=35843,so=36196,ao=37492,oo=37496,lo=37488,co=37489,uo=37490,fo=37491,ho=37808,po=37809,mo=37810,go=37811,xo=37812,_o=37813,vo=37814,bo=37815,yo=37816,So=37817,Mo=37818,Eo=37819,wo=37820,To=37821,Ao=36492,Ro=36494,Co=36495,No=36283,Po=36284,Lo=36285,Do=36286,bx=3200,yx=0,Sx=1,qn="",Kt="srgb",Vi="srgb-linear",bs="linear",at="srgb",yi=7680,gc=519,Mx=512,Ex=513,wx=514,al=515,Tx=516,Ax=517,ol=518,Rx=519,xc=35044,_c="300 es",pn=2e3,ys=2001;function Cx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ss(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Nx(){const n=Ss("canvas");return n.style.display="block",n}const vc={};function bc(...n){const e="THREE."+n.shift();console.log(e,...n)}function $u(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function je(...n){n=$u(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function et(...n){n=$u(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ms(...n){const e=n.join(" ");e in vc||(vc[e]=!0,je(...n))}function Px(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Lx={[Xa]:qa,[$a]:Za,[Ya]:Ja,[Bi]:Ka,[qa]:Xa,[Za]:$a,[Ja]:Ya,[Ka]:Bi};class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ta=Math.PI/180,Io=180/Math.PI;function Sr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function Dx(n,e){return(n%e+e)%e}function na(n,e,t){return(1-t)*n+t*e}function nr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let d=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],f=s[a+0],g=s[a+1],p=s[a+2],_=s[a+3];if(h!==_||d!==f||c!==g||u!==p){let m=d*f+c*g+u*p+h*_;m<0&&(f=-f,g=-g,p=-p,_=-_,m=-m);let x=1-o;if(m<.9995){const y=Math.acos(m),w=Math.sin(y);x=Math.sin(x*y)/w,o=Math.sin(o*y)/w,d=d*x+f*o,c=c*x+g*o,u=u*x+p*o,h=h*x+_*o}else{d=d*x+f*o,c=c*x+g*o,u=u*x+p*o,h=h*x+_*o;const y=1/Math.sqrt(d*d+c*c+u*u+h*h);d*=y,c*=y,u*=y,h*=y}}e[t]=d,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],d=i[r+1],c=i[r+2],u=i[r+3],h=s[a],f=s[a+1],g=s[a+2],p=s[a+3];return e[t]=o*p+u*h+d*g-c*f,e[t+1]=d*p+u*f+c*h-o*g,e[t+2]=c*p+u*g+o*f-d*h,e[t+3]=u*p-o*h-d*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,d=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),f=d(i/2),g=d(r/2),p=d(s/2);switch(a){case"XYZ":this._x=f*u*h+c*g*p,this._y=c*g*h-f*u*p,this._z=c*u*p+f*g*h,this._w=c*u*h-f*g*p;break;case"YXZ":this._x=f*u*h+c*g*p,this._y=c*g*h-f*u*p,this._z=c*u*p-f*g*h,this._w=c*u*h+f*g*p;break;case"ZXY":this._x=f*u*h-c*g*p,this._y=c*g*h+f*u*p,this._z=c*u*p+f*g*h,this._w=c*u*h-f*g*p;break;case"ZYX":this._x=f*u*h-c*g*p,this._y=c*g*h+f*u*p,this._z=c*u*p-f*g*h,this._w=c*u*h+f*g*p;break;case"YZX":this._x=f*u*h+c*g*p,this._y=c*g*h+f*u*p,this._z=c*u*p-f*g*h,this._w=c*u*h-f*g*p;break;case"XZY":this._x=f*u*h-c*g*p,this._y=c*g*h-f*u*p,this._z=c*u*p+f*g*h,this._w=c*u*h+f*g*p;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],d=t[9],c=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(u-d)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>h){const g=2*Math.sqrt(1+i-o-h);this._w=(u-d)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>h){const g=2*Math.sqrt(1+o-i-h);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(d+u)/g}else{const g=2*Math.sqrt(1+h-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(d+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,d=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*d,this._y=r*u+a*d+s*o-i*c,this._z=s*u+a*c+i*d-r*o,this._w=a*u-i*o-r*d-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let d=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);d=Math.sin(d*c)/u,t=Math.sin(t*c)/u,this._x=this._x*d+i*t,this._y=this._y*d+r*t,this._z=this._z*d+s*t,this._w=this._w*d+a*t,this._onChangeCallback()}else this._x=this._x*d+i*t,this._y=this._y*d+r*t,this._z=this._z*d+s*t,this._w=this._w*d+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,d=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+d*c+a*h-o*u,this.y=i+d*u+o*c-s*h,this.z=r+d*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,d=t.z;return this.x=r*d-s*o,this.y=s*a-i*d,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ia.copy(this).projectOnVector(e),this.sub(ia)}reflect(e){return this.sub(ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ia=new W,yc=new qi;class Ge{constructor(e,t,i,r,s,a,o,d,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,d,c)}set(e,t,i,r,s,a,o,d,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=d,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],d=i[6],c=i[1],u=i[4],h=i[7],f=i[2],g=i[5],p=i[8],_=r[0],m=r[3],x=r[6],y=r[1],w=r[4],E=r[7],A=r[2],T=r[5],C=r[8];return s[0]=a*_+o*y+d*A,s[3]=a*m+o*w+d*T,s[6]=a*x+o*E+d*C,s[1]=c*_+u*y+h*A,s[4]=c*m+u*w+h*T,s[7]=c*x+u*E+h*C,s[2]=f*_+g*y+p*A,s[5]=f*m+g*w+p*T,s[8]=f*x+g*E+p*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],d=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*d+r*s*c-r*a*d}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],d=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*d-u*s,g=c*s-a*d,p=t*h+i*f+r*g;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=f*_,e[4]=(u*t-r*d)*_,e[5]=(r*s-o*t)*_,e[6]=g*_,e[7]=(i*d-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const d=Math.cos(s),c=Math.sin(s);return this.set(i*d,i*c,-i*(d*a+c*o)+a+e,-r*c,r*d,-r*(-c*a+d*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ra.makeScale(e,t)),this}rotate(e){return this.premultiply(ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new Ge,Sc=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mc=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ix(){const n={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=Pn(r.r),r.g=Pn(r.g),r.b=Pn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=Ui(r.r),r.g=Ui(r.g),r.b=Ui(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qn?bs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Vi]:{primaries:e,whitePoint:i,transfer:bs,toXYZ:Sc,fromXYZ:Mc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Sc,fromXYZ:Mc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),n}const Je=Ix();function Pn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ui(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Si;class kx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Si===void 0&&(Si=Ss("canvas")),Si.width=e.width,Si.height=e.height;const r=Si.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Si}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ss("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Pn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pn(t[i]/255)*255):t[i]=Pn(t[i]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ux=0;class ll{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=Sr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(sa(r[a].image)):s.push(sa(r[a]))}else s=sa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function sa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?kx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let Fx=0;const aa=new W;class Ut extends Xi{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=Cn,r=Cn,s=It,a=fi,o=sn,d=Jt,c=Ut.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=Sr(),this.name="",this.source=new ll(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=d,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(aa).x}get height(){return this.source.getSize(aa).y}get depth(){return this.source.getSize(aa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qa:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qa:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=zu;Ut.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,i=0,r=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const d=e.elements,c=d[0],u=d[4],h=d[8],f=d[1],g=d[5],p=d[9],_=d[2],m=d[6],x=d[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+g+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,E=(g+1)/2,A=(x+1)/2,T=(u+f)/4,C=(h+_)/4,v=(p+m)/4;return w>E&&w>A?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=T/i,s=C/i):E>A?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=T/r,s=v/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=v/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-p)*(m-p)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+g+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ox extends Xi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Ut(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ll(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends Ox{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Yu extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bx extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bt{constructor(e,t,i,r,s,a,o,d,c,u,h,f,g,p,_,m){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,d,c,u,h,f,g,p,_,m)}set(e,t,i,r,s,a,o,d,c,u,h,f,g,p,_,m){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=r,x[1]=s,x[5]=a,x[9]=o,x[13]=d,x[2]=c,x[6]=u,x[10]=h,x[14]=f,x[3]=g,x[7]=p,x[11]=_,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Mi.setFromMatrixColumn(e,0).length(),s=1/Mi.setFromMatrixColumn(e,1).length(),a=1/Mi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),d=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,g=a*h,p=o*u,_=o*h;t[0]=d*u,t[4]=-d*h,t[8]=c,t[1]=g+p*c,t[5]=f-_*c,t[9]=-o*d,t[2]=_-f*c,t[6]=p+g*c,t[10]=a*d}else if(e.order==="YXZ"){const f=d*u,g=d*h,p=c*u,_=c*h;t[0]=f+_*o,t[4]=p*o-g,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=g*o-p,t[6]=_+f*o,t[10]=a*d}else if(e.order==="ZXY"){const f=d*u,g=d*h,p=c*u,_=c*h;t[0]=f-_*o,t[4]=-a*h,t[8]=p+g*o,t[1]=g+p*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*d}else if(e.order==="ZYX"){const f=a*u,g=a*h,p=o*u,_=o*h;t[0]=d*u,t[4]=p*c-g,t[8]=f*c+_,t[1]=d*h,t[5]=_*c+f,t[9]=g*c-p,t[2]=-c,t[6]=o*d,t[10]=a*d}else if(e.order==="YZX"){const f=a*d,g=a*c,p=o*d,_=o*c;t[0]=d*u,t[4]=_-f*h,t[8]=p*h+g,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=g*h+p,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*d,g=a*c,p=o*d,_=o*c;t[0]=d*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=g*h-p,t[2]=p*h-g,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zx,e,jx)}lookAt(e,t,i){const r=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),jn.crossVectors(i,Wt),jn.lengthSq()===0&&(Math.abs(i.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),jn.crossVectors(i,Wt)),jn.normalize(),kr.crossVectors(Wt,jn),r[0]=jn.x,r[4]=kr.x,r[8]=Wt.x,r[1]=jn.y,r[5]=kr.y,r[9]=Wt.y,r[2]=jn.z,r[6]=kr.z,r[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],d=i[8],c=i[12],u=i[1],h=i[5],f=i[9],g=i[13],p=i[2],_=i[6],m=i[10],x=i[14],y=i[3],w=i[7],E=i[11],A=i[15],T=r[0],C=r[4],v=r[8],M=r[12],H=r[1],N=r[5],F=r[9],z=r[13],j=r[2],B=r[6],I=r[10],O=r[14],ee=r[3],ie=r[7],K=r[11],te=r[15];return s[0]=a*T+o*H+d*j+c*ee,s[4]=a*C+o*N+d*B+c*ie,s[8]=a*v+o*F+d*I+c*K,s[12]=a*M+o*z+d*O+c*te,s[1]=u*T+h*H+f*j+g*ee,s[5]=u*C+h*N+f*B+g*ie,s[9]=u*v+h*F+f*I+g*K,s[13]=u*M+h*z+f*O+g*te,s[2]=p*T+_*H+m*j+x*ee,s[6]=p*C+_*N+m*B+x*ie,s[10]=p*v+_*F+m*I+x*K,s[14]=p*M+_*z+m*O+x*te,s[3]=y*T+w*H+E*j+A*ee,s[7]=y*C+w*N+E*B+A*ie,s[11]=y*v+w*F+E*I+A*K,s[15]=y*M+w*z+E*O+A*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],d=e[9],c=e[13],u=e[2],h=e[6],f=e[10],g=e[14],p=e[3],_=e[7],m=e[11],x=e[15],y=d*g-c*f,w=o*g-c*h,E=o*f-d*h,A=a*g-c*u,T=a*f-d*u,C=a*h-o*u;return t*(_*y-m*w+x*E)-i*(p*y-m*A+x*T)+r*(p*w-_*A+x*C)-s*(p*E-_*T+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],d=e[6],c=e[7],u=e[8],h=e[9],f=e[10],g=e[11],p=e[12],_=e[13],m=e[14],x=e[15],y=t*o-i*a,w=t*d-r*a,E=t*c-s*a,A=i*d-r*o,T=i*c-s*o,C=r*c-s*d,v=u*_-h*p,M=u*m-f*p,H=u*x-g*p,N=h*m-f*_,F=h*x-g*_,z=f*x-g*m,j=y*z-w*F+E*N+A*H-T*M+C*v;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/j;return e[0]=(o*z-d*F+c*N)*B,e[1]=(r*F-i*z-s*N)*B,e[2]=(_*C-m*T+x*A)*B,e[3]=(f*T-h*C-g*A)*B,e[4]=(d*H-a*z-c*M)*B,e[5]=(t*z-r*H+s*M)*B,e[6]=(m*E-p*C-x*w)*B,e[7]=(u*C-f*E+g*w)*B,e[8]=(a*F-o*H+c*v)*B,e[9]=(i*H-t*F-s*v)*B,e[10]=(p*T-_*E+x*y)*B,e[11]=(h*E-u*T-g*y)*B,e[12]=(o*M-a*N-d*v)*B,e[13]=(t*N-i*M+r*v)*B,e[14]=(_*w-p*A-m*y)*B,e[15]=(u*A-h*w+f*y)*B,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,d=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*d,c*d+r*o,0,c*o+r*d,u*o+i,u*d-r*a,0,c*d-r*o,u*d+r*a,s*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,d=t._w,c=s+s,u=a+a,h=o+o,f=s*c,g=s*u,p=s*h,_=a*u,m=a*h,x=o*h,y=d*c,w=d*u,E=d*h,A=i.x,T=i.y,C=i.z;return r[0]=(1-(_+x))*A,r[1]=(g+E)*A,r[2]=(p-w)*A,r[3]=0,r[4]=(g-E)*T,r[5]=(1-(f+x))*T,r[6]=(m+y)*T,r[7]=0,r[8]=(p+w)*C,r[9]=(m-y)*C,r[10]=(1-(f+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Mi.set(r[0],r[1],r[2]).length();const o=Mi.set(r[4],r[5],r[6]).length(),d=Mi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),en.copy(this);const c=1/a,u=1/o,h=1/d;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=h,en.elements[9]*=h,en.elements[10]*=h,t.setFromRotationMatrix(en),i.x=a,i.y=o,i.z=d,this}makePerspective(e,t,i,r,s,a,o=pn,d=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),g=(i+r)/(i-r);let p,_;if(d)p=s/(a-s),_=a*s/(a-s);else if(o===pn)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ys)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=pn,d=!1){const c=this.elements,u=2/(t-e),h=2/(i-r),f=-(t+e)/(t-e),g=-(i+r)/(i-r);let p,_;if(d)p=1/(a-s),_=a/(a-s);else if(o===pn)p=-2/(a-s),_=-(a+s)/(a-s);else if(o===ys)p=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Mi=new W,en=new bt,zx=new W(0,0,0),jx=new W(1,1,1),jn=new W,kr=new W,Wt=new W,Ec=new bt,wc=new qi;class In{constructor(e=0,t=0,i=0,r=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],d=r[1],c=r[5],u=r[9],h=r[2],f=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(d,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(d,s));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(d,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ec,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wc.setFromEuler(this),this.setFromQuaternion(wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class Ku{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vx=0;const Tc=new W,Ei=new qi,Mn=new bt,Ur=new W,ir=new W,Gx=new W,Hx=new qi,Ac=new W(1,0,0),Rc=new W(0,1,0),Cc=new W(0,0,1),Nc={type:"added"},Wx={type:"removed"},wi={type:"childadded",child:null},oa={type:"childremoved",child:null};class Gt extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new W,t=new In,i=new qi,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new Ge}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ku,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(Ac,e)}rotateY(e){return this.rotateOnAxis(Rc,e)}rotateZ(e){return this.rotateOnAxis(Cc,e)}translateOnAxis(e,t){return Tc.copy(e).applyQuaternion(this.quaternion),this.position.add(Tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ac,e)}translateY(e){return this.translateOnAxis(Rc,e)}translateZ(e){return this.translateOnAxis(Cc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ur.copy(e):Ur.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(ir,Ur,this.up):Mn.lookAt(Ur,ir,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),Ei.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nc),wi.child=e,this.dispatchEvent(wi),wi.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wx),oa.child=e,this.dispatchEvent(oa),oa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nc),wi.child=e,this.dispatchEvent(wi),wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,Gx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,Hx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,d){return o[d.uuid]===void 0&&(o[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const d=o.shapes;if(Array.isArray(d))for(let c=0,u=d.length;c<u;c++){const h=d[c];s(e.shapes,h)}else s(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let d=0,c=this.material.length;d<c;d++)o.push(s(e.materials,this.material[d]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const d=this.animations[o];r.animations.push(s(e.animations,d))}}if(t){const o=a(e.geometries),d=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),g=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),d.length>0&&(i.materials=d),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),p.length>0&&(i.nodes=p)}return i.object=r,i;function a(o){const d=[];for(const c in o){const u=o[c];delete u.metadata,d.push(u)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new W(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fr extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xx={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,d=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),x=this._getHandJoint(c,_);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),g=.02,p=.005;c.inputState.pinching&&f>g+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xx)))}return o!==null&&(o.visible=r!==null),d!==null&&(d.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Or={h:0,s:0,l:0};function ca(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=Dx(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ca(a,s,e+1/3),this.g=ca(a,s,e),this.b=ca(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=Kt){function i(s){s!==void 0&&parseFloat(s)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const i=Zu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Je.workingToColorSpace(Lt.copy(this),e),Math.round(Ke(Lt.r*255,0,255))*65536+Math.round(Ke(Lt.g*255,0,255))*256+Math.round(Ke(Lt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Lt.copy(this),t);const i=Lt.r,r=Lt.g,s=Lt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let d,c;const u=(o+a)/2;if(o===a)d=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:d=(r-s)/h+(r<s?6:0);break;case r:d=(s-i)/h+2;break;case s:d=(i-r)/h+4;break}d/=6}return e.h=d,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Kt){Je.workingToColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,r=Lt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(Or);const i=na(Vn.h,Or.h,t),r=na(Vn.s,Or.s,t),s=na(Vn.l,Or.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new rt;rt.NAMES=Zu;class cl{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new rt(e),this.near=t,this.far=i}clone(){return new cl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class qx extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const tn=new W,En=new W,da=new W,wn=new W,Ti=new W,Ai=new W,Pc=new W,ua=new W,fa=new W,ha=new W,pa=new vt,ma=new vt,ga=new vt;class rn{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),tn.subVectors(e,t),r.cross(tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){tn.subVectors(r,t),En.subVectors(i,t),da.subVectors(e,t);const a=tn.dot(tn),o=tn.dot(En),d=tn.dot(da),c=En.dot(En),u=En.dot(da),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,g=(c*d-o*u)*f,p=(a*u-o*d)*f;return s.set(1-g-p,p,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,i,r,s,a,o,d){return this.getBarycoord(e,t,i,r,wn)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(s,wn.x),d.addScaledVector(a,wn.y),d.addScaledVector(o,wn.z),d)}static getInterpolatedAttribute(e,t,i,r,s,a){return pa.setScalar(0),ma.setScalar(0),ga.setScalar(0),pa.fromBufferAttribute(e,t),ma.fromBufferAttribute(e,i),ga.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(pa,s.x),a.addScaledVector(ma,s.y),a.addScaledVector(ga,s.z),a}static isFrontFacing(e,t,i,r){return tn.subVectors(i,t),En.subVectors(e,t),tn.cross(En).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),tn.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return rn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ti.subVectors(r,i),Ai.subVectors(s,i),ua.subVectors(e,i);const d=Ti.dot(ua),c=Ai.dot(ua);if(d<=0&&c<=0)return t.copy(i);fa.subVectors(e,r);const u=Ti.dot(fa),h=Ai.dot(fa);if(u>=0&&h<=u)return t.copy(r);const f=d*h-u*c;if(f<=0&&d>=0&&u<=0)return a=d/(d-u),t.copy(i).addScaledVector(Ti,a);ha.subVectors(e,s);const g=Ti.dot(ha),p=Ai.dot(ha);if(p>=0&&g<=p)return t.copy(s);const _=g*c-d*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(Ai,o);const m=u*p-g*h;if(m<=0&&h-u>=0&&g-p>=0)return Pc.subVectors(s,r),o=(h-u)/(h-u+(g-p)),t.copy(r).addScaledVector(Pc,o);const x=1/(m+_+f);return a=_*x,o=f*x,t.copy(i).addScaledVector(Ti,a).addScaledVector(Ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Mr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,nn):nn.fromBufferAttribute(s,a),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Br.copy(i.boundingBox)),Br.applyMatrix4(e.matrixWorld),this.union(Br)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),zr.subVectors(this.max,rr),Ri.subVectors(e.a,rr),Ci.subVectors(e.b,rr),Ni.subVectors(e.c,rr),Gn.subVectors(Ci,Ri),Hn.subVectors(Ni,Ci),ni.subVectors(Ri,Ni);let t=[0,-Gn.z,Gn.y,0,-Hn.z,Hn.y,0,-ni.z,ni.y,Gn.z,0,-Gn.x,Hn.z,0,-Hn.x,ni.z,0,-ni.x,-Gn.y,Gn.x,0,-Hn.y,Hn.x,0,-ni.y,ni.x,0];return!xa(t,Ri,Ci,Ni,zr)||(t=[1,0,0,0,1,0,0,0,1],!xa(t,Ri,Ci,Ni,zr))?!1:(jr.crossVectors(Gn,Hn),t=[jr.x,jr.y,jr.z],xa(t,Ri,Ci,Ni,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Tn=[new W,new W,new W,new W,new W,new W,new W,new W],nn=new W,Br=new Mr,Ri=new W,Ci=new W,Ni=new W,Gn=new W,Hn=new W,ni=new W,rr=new W,zr=new W,jr=new W,ii=new W;function xa(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ii.fromArray(n,s);const o=r.x*Math.abs(ii.x)+r.y*Math.abs(ii.y)+r.z*Math.abs(ii.z),d=e.dot(ii),c=t.dot(ii),u=i.dot(ii);if(Math.max(-Math.max(d,c,u),Math.min(d,c,u))>o)return!1}return!0}const St=new W,Vr=new ct;let $x=0;class xn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$x++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=xc,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix3(e),this.setXY(t,Vr.x,Vr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=nr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xc&&(e.usage=this.usage),e}}class Ju extends xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Qu extends xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class an extends xn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Yx=new Mr,sr=new W,_a=new W;class ks{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Yx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(sr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(_a)),this.expandByPoint(sr.copy(e.center).sub(_a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Kx=0;const Yt=new bt,va=new Gt,Pi=new W,Xt=new Mr,ar=new Mr,At=new W;class ln extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cx(e)?Qu:Ju)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,i){return Yt.makeTranslation(e,t,i),this.applyMatrix4(Yt),this}scale(e,t,i){return Yt.makeScale(e,t,i),this.applyMatrix4(Yt),this}lookAt(e){return va.lookAt(e),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new an(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Xt.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ar.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(Xt.min,ar.min),Xt.expandByPoint(At),At.addVectors(Xt.max,ar.max),Xt.expandByPoint(At)):(Xt.expandByPoint(ar.min),Xt.expandByPoint(ar.max))}Xt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],d=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)At.fromBufferAttribute(o,c),d&&(Pi.fromBufferAttribute(e,c),At.add(Pi)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],d=[];for(let v=0;v<i.count;v++)o[v]=new W,d[v]=new W;const c=new W,u=new W,h=new W,f=new ct,g=new ct,p=new ct,_=new W,m=new W;function x(v,M,H){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,H),f.fromBufferAttribute(s,v),g.fromBufferAttribute(s,M),p.fromBufferAttribute(s,H),u.sub(c),h.sub(c),g.sub(f),p.sub(f);const N=1/(g.x*p.y-p.x*g.y);isFinite(N)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-g.y).multiplyScalar(N),m.copy(h).multiplyScalar(g.x).addScaledVector(u,-p.x).multiplyScalar(N),o[v].add(_),o[M].add(_),o[H].add(_),d[v].add(m),d[M].add(m),d[H].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,M=y.length;v<M;++v){const H=y[v],N=H.start,F=H.count;for(let z=N,j=N+F;z<j;z+=3)x(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const w=new W,E=new W,A=new W,T=new W;function C(v){A.fromBufferAttribute(r,v),T.copy(A);const M=o[v];w.copy(M),w.sub(A.multiplyScalar(A.dot(M))).normalize(),E.crossVectors(T,M);const N=E.dot(d[v])<0?-1:1;a.setXYZW(v,w.x,w.y,w.z,N)}for(let v=0,M=y.length;v<M;++v){const H=y[v],N=H.start,F=H.count;for(let z=N,j=N+F;z<j;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new W,s=new W,a=new W,o=new W,d=new W,c=new W,u=new W,h=new W;if(e)for(let f=0,g=e.count;f<g;f+=3){const p=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,p),d.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),d.add(u),c.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(_,d.x,d.y,d.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,g=t.count;f<g;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,d){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(d.length*u);let g=0,p=0;for(let _=0,m=d.length;_<m;_++){o.isInterleavedBufferAttribute?g=d[_]*o.data.stride+o.offset:g=d[_]*u;for(let x=0;x<u;x++)f[p++]=c[g++]}return new xn(f,u,h)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,i=this.index.array,r=this.attributes;for(const o in r){const d=r[o],c=e(d,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const d=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],g=e(f,i);d.push(g)}t.morphAttributes[o]=d}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,d=a.length;o<d;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const c in d)d[c]!==void 0&&(e[c]=d[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const c=i[d];e.data.attributes[d]=c.toJSON(e.data)}const r={};let s=!1;for(const d in this.morphAttributes){const c=this.morphAttributes[d],u=[];for(let h=0,f=c.length;h<f;h++){const g=c[h];u.push(g.toJSON(e.data))}u.length>0&&(r[d]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,g=h.length;f<g;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Zx=0;class Er extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=ki,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=Wa,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(i.blending=this.blending),this.side!==Yn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ha&&(i.blendSrc=this.blendSrc),this.blendDst!==Wa&&(i.blendDst=this.blendDst),this.blendEquation!==ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const d=s[o];delete d.metadata,a.push(d)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const An=new W,ba=new W,Gr=new W,Wn=new W,ya=new W,Hr=new W,Sa=new W;class ef{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ba.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(ba);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Gr),o=Wn.dot(this.direction),d=-Wn.dot(Gr),c=Wn.lengthSq(),u=Math.abs(1-a*a);let h,f,g,p;if(u>0)if(h=a*d-o,f=a*o-d,p=s*u,h>=0)if(f>=-p)if(f<=p){const _=1/u;h*=_,f*=_,g=h*(h+a*f+2*o)+f*(a*h+f+2*d)+c}else f=s,h=Math.max(0,-(a*f+o)),g=-h*h+f*(f+2*d)+c;else f=-s,h=Math.max(0,-(a*f+o)),g=-h*h+f*(f+2*d)+c;else f<=-p?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-d),s),g=-h*h+f*(f+2*d)+c):f<=p?(h=0,f=Math.min(Math.max(-s,-d),s),g=f*(f+2*d)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-d),s),g=-h*h+f*(f+2*d)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),g=-h*h+f*(f+2*d)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ba).addScaledVector(Gr,f),g}intersectSphere(e,t){An.subVectors(e.center,this.origin);const i=An.dot(this.direction),r=An.dot(An)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,d=i+a;return d<0?null:o<0?this.at(d,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,d;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,d=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,d=(e.min.z-f.z)*h),i>d||o>r)||((o>i||i!==i)&&(i=o),(d<r||r!==r)&&(r=d),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,i,r,s){ya.subVectors(t,e),Hr.subVectors(i,e),Sa.crossVectors(ya,Hr);let a=this.direction.dot(Sa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wn.subVectors(this.origin,e);const d=o*this.direction.dot(Hr.crossVectors(Wn,Hr));if(d<0)return null;const c=o*this.direction.dot(ya.cross(Wn));if(c<0||d+c>a)return null;const u=-o*Wn.dot(Sa);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tf extends Er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lc=new bt,ri=new ef,Wr=new ks,Dc=new W,Xr=new W,qr=new W,$r=new W,Ma=new W,Yr=new W,Ic=new W,Kr=new W;class kn extends Gt{constructor(e=new ln,t=new tf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Yr.set(0,0,0);for(let d=0,c=s.length;d<c;d++){const u=o[d],h=s[d];u!==0&&(Ma.fromBufferAttribute(h,e),a?Yr.addScaledVector(Ma,u):Yr.addScaledVector(Ma.sub(t),u))}t.add(Yr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wr.copy(i.boundingSphere),Wr.applyMatrix4(s),ri.copy(e.ray).recast(e.near),!(Wr.containsPoint(ri.origin)===!1&&(ri.intersectSphere(Wr,Dc)===null||ri.origin.distanceToSquared(Dc)>(e.far-e.near)**2))&&(Lc.copy(s).invert(),ri.copy(e.ray).applyMatrix4(Lc),!(i.boundingBox!==null&&ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,d=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){const m=f[p],x=a[m.materialIndex],y=Math.max(m.start,g.start),w=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let E=y,A=w;E<A;E+=3){const T=o.getX(E),C=o.getX(E+1),v=o.getX(E+2);r=Zr(this,x,e,i,c,u,h,T,C,v),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const p=Math.max(0,g.start),_=Math.min(o.count,g.start+g.count);for(let m=p,x=_;m<x;m+=3){const y=o.getX(m),w=o.getX(m+1),E=o.getX(m+2);r=Zr(this,a,e,i,c,u,h,y,w,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(d!==void 0)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){const m=f[p],x=a[m.materialIndex],y=Math.max(m.start,g.start),w=Math.min(d.count,Math.min(m.start+m.count,g.start+g.count));for(let E=y,A=w;E<A;E+=3){const T=E,C=E+1,v=E+2;r=Zr(this,x,e,i,c,u,h,T,C,v),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const p=Math.max(0,g.start),_=Math.min(d.count,g.start+g.count);for(let m=p,x=_;m<x;m+=3){const y=m,w=m+1,E=m+2;r=Zr(this,a,e,i,c,u,h,y,w,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Jx(n,e,t,i,r,s,a,o){let d;if(e.side===Vt?d=i.intersectTriangle(a,s,r,!0,o):d=i.intersectTriangle(r,s,a,e.side===Yn,o),d===null)return null;Kr.copy(o),Kr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Kr);return c<t.near||c>t.far?null:{distance:c,point:Kr.clone(),object:n}}function Zr(n,e,t,i,r,s,a,o,d,c){n.getVertexPosition(o,Xr),n.getVertexPosition(d,qr),n.getVertexPosition(c,$r);const u=Jx(n,e,t,i,Xr,qr,$r,Ic);if(u){const h=new W;rn.getBarycoord(Ic,Xr,qr,$r,h),r&&(u.uv=rn.getInterpolatedAttribute(r,o,d,c,h,new ct)),s&&(u.uv1=rn.getInterpolatedAttribute(s,o,d,c,h,new ct)),a&&(u.normal=rn.getInterpolatedAttribute(a,o,d,c,h,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:d,c,normal:new W,materialIndex:0};rn.getNormal(Xr,qr,$r,f.normal),u.face=f,u.barycoord=h}return u}class Qx extends Ut{constructor(e=null,t=1,i=1,r,s,a,o,d,c=Ct,u=Ct,h,f){super(null,a,o,d,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ea=new W,e_=new W,t_=new Ge;class li{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ea.subVectors(i,t).cross(e_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ea),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||t_.getNormalMatrix(e),r=this.coplanarPoint(Ea).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const si=new ks,n_=new ct(.5,.5),Jr=new W;class nf{constructor(e=new li,t=new li,i=new li,r=new li,s=new li,a=new li){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],d=s[2],c=s[3],u=s[4],h=s[5],f=s[6],g=s[7],p=s[8],_=s[9],m=s[10],x=s[11],y=s[12],w=s[13],E=s[14],A=s[15];if(r[0].setComponents(c-a,g-u,x-p,A-y).normalize(),r[1].setComponents(c+a,g+u,x+p,A+y).normalize(),r[2].setComponents(c+o,g+h,x+_,A+w).normalize(),r[3].setComponents(c-o,g-h,x-_,A-w).normalize(),i)r[4].setComponents(d,f,m,E).normalize(),r[5].setComponents(c-d,g-f,x-m,A-E).normalize();else if(r[4].setComponents(c-d,g-f,x-m,A-E).normalize(),t===pn)r[5].setComponents(c+d,g+f,x+m,A+E).normalize();else if(t===ys)r[5].setComponents(d,f,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(e){si.center.set(0,0,0);const t=n_.distanceTo(e.center);return si.radius=.7071067811865476+t,si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Jr.x=r.normal.x>0?e.max.x:e.min.x,Jr.y=r.normal.y>0?e.max.y:e.min.y,Jr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rf extends Er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kc=new bt,ko=new ef,Qr=new ks,es=new W;class Uc extends Gt{constructor(e=new ln,t=new rf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(r),Qr.radius+=s,e.ray.intersectsSphere(Qr)===!1)return;kc.copy(r).invert(),ko.copy(e.ray).applyMatrix4(kc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),d=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let p=f,_=g;p<_;p++){const m=c.getX(p);es.fromBufferAttribute(h,m),Fc(es,m,d,r,e,t,this)}}else{const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let p=f,_=g;p<_;p++)es.fromBufferAttribute(h,p),Fc(es,p,d,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Fc(n,e,t,i,r,s,a){const o=ko.distanceSqToPoint(n);if(o<t){const d=new W;ko.closestPointToPoint(n,d),d.applyMatrix4(i);const c=r.ray.origin.distanceTo(d);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class sf extends Ut{constructor(e=[],t=xi,i,r,s,a,o,d,c,u){super(e,t,i,r,s,a,o,d,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pr extends Ut{constructor(e,t,i=_n,r,s,a,o=Ct,d=Ct,c,u=Dn,h=1){if(u!==Dn&&u!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,a,o,d,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ll(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class i_ extends pr{constructor(e,t=_n,i=xi,r,s,a=Ct,o=Ct,d,c=Dn){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,d,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class af extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wr extends ln{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const d=[],c=[],u=[],h=[];let f=0,g=0;p("z","y","x",-1,-1,i,t,e,a,s,0),p("z","y","x",1,-1,i,t,-e,a,s,1),p("x","z","y",1,1,e,i,t,r,a,2),p("x","z","y",1,-1,e,i,-t,r,a,3),p("x","y","z",1,-1,e,t,i,r,s,4),p("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(d),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(u,3)),this.setAttribute("uv",new an(h,2));function p(_,m,x,y,w,E,A,T,C,v,M){const H=E/C,N=A/v,F=E/2,z=A/2,j=T/2,B=C+1,I=v+1;let O=0,ee=0;const ie=new W;for(let K=0;K<I;K++){const te=K*N-z;for(let J=0;J<B;J++){const fe=J*H-F;ie[_]=fe*y,ie[m]=te*w,ie[x]=j,c.push(ie.x,ie.y,ie.z),ie[_]=0,ie[m]=0,ie[x]=T>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(J/C),h.push(1-K/v),O+=1}}for(let K=0;K<v;K++)for(let te=0;te<C;te++){const J=f+te+B*K,fe=f+te+B*(K+1),Fe=f+(te+1)+B*(K+1),Ee=f+(te+1)+B*K;d.push(J,fe,Ee),d.push(fe,Fe,Ee),ee+=6}o.addGroup(g,ee,M),g+=ee,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Us extends ln{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),d=Math.floor(r),c=o+1,u=d+1,h=e/o,f=t/d,g=[],p=[],_=[],m=[];for(let x=0;x<u;x++){const y=x*f-a;for(let w=0;w<c;w++){const E=w*h-s;p.push(E,-y,0),_.push(0,0,1),m.push(w/o),m.push(1-x/d)}}for(let x=0;x<d;x++)for(let y=0;y<o;y++){const w=y+c*x,E=y+c*(x+1),A=y+1+c*(x+1),T=y+1+c*x;g.push(w,E,T),g.push(E,A,T)}this.setIndex(g),this.setAttribute("position",new an(p,3)),this.setAttribute("normal",new an(_,3)),this.setAttribute("uv",new an(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.widthSegments,e.heightSegments)}}function Gi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function kt(n){const e={};for(let t=0;t<n.length;t++){const i=Gi(n[t]);for(const r in i)e[r]=i[r]}return e}function r_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function of(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const s_={clone:Gi,merge:kt};var a_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends Er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a_,this.fragmentShader=o_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=r_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class l_ extends vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class c_ extends Er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class d_ extends Er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ts=new W,ns=new qi,dn=new W;class lf extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ts,ns,dn),dn.x===1&&dn.y===1&&dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ts,ns,dn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ts,ns,dn),dn.x===1&&dn.y===1&&dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ts,ns,dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new W,Oc=new ct,Bc=new ct;class Zt extends lf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,Oc,Bc),t.subVectors(Bc,Oc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ta*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const d=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/d,t-=a.offsetY*i/c,r*=a.width/d,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class cf extends lf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,d=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Li=-90,Di=1;class u_ extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zt(Li,Di,e,t);r.layers=this.layers,this.add(r);const s=new Zt(Li,Di,e,t);s.layers=this.layers,this.add(s);const a=new Zt(Li,Di,e,t);a.layers=this.layers,this.add(a);const o=new Zt(Li,Di,e,t);o.layers=this.layers,this.add(o);const d=new Zt(Li,Di,e,t);d.layers=this.layers,this.add(d);const c=new Zt(Li,Di,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,d]=t;for(const c of t)this.remove(c);if(e===pn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===ys)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,d,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,g),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class f_ extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function zc(n,e,t,i){const r=h_(i);switch(t){case Wu:return n*e;case qu:return n*e/r.components*r.byteLength;case il:return n*e/r.components*r.byteLength;case ji:return n*e*2/r.components*r.byteLength;case rl:return n*e*2/r.components*r.byteLength;case Xu:return n*e*3/r.components*r.byteLength;case sn:return n*e*4/r.components*r.byteLength;case sl:return n*e*4/r.components*r.byteLength;case cs:case ds:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case us:case fs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case no:case ro:return Math.max(n,16)*Math.max(e,8)/4;case to:case io:return Math.max(n,8)*Math.max(e,8)/2;case so:case ao:case lo:case co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oo:case uo:case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case po:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case mo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case go:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case xo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case _o:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case vo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case bo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case yo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case So:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case wo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case To:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ao:case Ro:case Co:return Math.ceil(n/4)*Math.ceil(e/4)*16;case No:case Po:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Lo:case Do:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function h_(n){switch(n){case Jt:case ju:return{byteLength:1,components:1};case fr:case Vu:case Ln:return{byteLength:2,components:1};case tl:case nl:return{byteLength:2,components:4};case _n:case el:case hn:return{byteLength:4,components:1};case Gu:case Hu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qo}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function df(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function p_(n){const e=new WeakMap;function t(o,d){const c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(d,f),n.bufferData(d,c,u),o.onUploadCallback();let g;if(c instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=n.SHORT;else if(c instanceof Uint32Array)g=n.UNSIGNED_INT;else if(c instanceof Int32Array)g=n.INT;else if(c instanceof Int8Array)g=n.BYTE;else if(c instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,d,c){const u=d.array,h=d.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((g,p)=>g.start-p.start);let f=0;for(let g=1;g<h.length;g++){const p=h[f],_=h[g];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,h[f]=_)}h.length=f+1;for(let g=0,p=h.length;g<p;g++){const _=h[g];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const d=e.get(o);d&&(n.deleteBuffer(d.buffer),e.delete(o))}function a(o,d){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,d));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,d),c.version=o.version}}return{get:r,remove:s,update:a}}var m_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,x_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,__=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,S_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,E_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,R_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,C_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,k_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,U_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,F_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,O_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,B_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,z_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,j_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W_="gl_FragColor = linearToOutputTexel( gl_FragColor );",X_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,q_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Y_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,K_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,J_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ev=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,av=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ov=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_v=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ev=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Av=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ov=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Hv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$v=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Zv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ib=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ab=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ob=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ab=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Db=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ub=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:m_,alphahash_pars_fragment:g_,alphamap_fragment:x_,alphamap_pars_fragment:__,alphatest_fragment:v_,alphatest_pars_fragment:b_,aomap_fragment:y_,aomap_pars_fragment:S_,batching_pars_vertex:M_,batching_vertex:E_,begin_vertex:w_,beginnormal_vertex:T_,bsdfs:A_,iridescence_fragment:R_,bumpmap_pars_fragment:C_,clipping_planes_fragment:N_,clipping_planes_pars_fragment:P_,clipping_planes_pars_vertex:L_,clipping_planes_vertex:D_,color_fragment:I_,color_pars_fragment:k_,color_pars_vertex:U_,color_vertex:F_,common:O_,cube_uv_reflection_fragment:B_,defaultnormal_vertex:z_,displacementmap_pars_vertex:j_,displacementmap_vertex:V_,emissivemap_fragment:G_,emissivemap_pars_fragment:H_,colorspace_fragment:W_,colorspace_pars_fragment:X_,envmap_fragment:q_,envmap_common_pars_fragment:$_,envmap_pars_fragment:Y_,envmap_pars_vertex:K_,envmap_physical_pars_fragment:ov,envmap_vertex:Z_,fog_vertex:J_,fog_pars_vertex:Q_,fog_fragment:ev,fog_pars_fragment:tv,gradientmap_pars_fragment:nv,lightmap_pars_fragment:iv,lights_lambert_fragment:rv,lights_lambert_pars_fragment:sv,lights_pars_begin:av,lights_toon_fragment:lv,lights_toon_pars_fragment:cv,lights_phong_fragment:dv,lights_phong_pars_fragment:uv,lights_physical_fragment:fv,lights_physical_pars_fragment:hv,lights_fragment_begin:pv,lights_fragment_maps:mv,lights_fragment_end:gv,logdepthbuf_fragment:xv,logdepthbuf_pars_fragment:_v,logdepthbuf_pars_vertex:vv,logdepthbuf_vertex:bv,map_fragment:yv,map_pars_fragment:Sv,map_particle_fragment:Mv,map_particle_pars_fragment:Ev,metalnessmap_fragment:wv,metalnessmap_pars_fragment:Tv,morphinstance_vertex:Av,morphcolor_vertex:Rv,morphnormal_vertex:Cv,morphtarget_pars_vertex:Nv,morphtarget_vertex:Pv,normal_fragment_begin:Lv,normal_fragment_maps:Dv,normal_pars_fragment:Iv,normal_pars_vertex:kv,normal_vertex:Uv,normalmap_pars_fragment:Fv,clearcoat_normal_fragment_begin:Ov,clearcoat_normal_fragment_maps:Bv,clearcoat_pars_fragment:zv,iridescence_pars_fragment:jv,opaque_fragment:Vv,packing:Gv,premultiplied_alpha_fragment:Hv,project_vertex:Wv,dithering_fragment:Xv,dithering_pars_fragment:qv,roughnessmap_fragment:$v,roughnessmap_pars_fragment:Yv,shadowmap_pars_fragment:Kv,shadowmap_pars_vertex:Zv,shadowmap_vertex:Jv,shadowmask_pars_fragment:Qv,skinbase_vertex:eb,skinning_pars_vertex:tb,skinning_vertex:nb,skinnormal_vertex:ib,specularmap_fragment:rb,specularmap_pars_fragment:sb,tonemapping_fragment:ab,tonemapping_pars_fragment:ob,transmission_fragment:lb,transmission_pars_fragment:cb,uv_pars_fragment:db,uv_pars_vertex:ub,uv_vertex:fb,worldpos_vertex:hb,background_vert:pb,background_frag:mb,backgroundCube_vert:gb,backgroundCube_frag:xb,cube_vert:_b,cube_frag:vb,depth_vert:bb,depth_frag:yb,distance_vert:Sb,distance_frag:Mb,equirect_vert:Eb,equirect_frag:wb,linedashed_vert:Tb,linedashed_frag:Ab,meshbasic_vert:Rb,meshbasic_frag:Cb,meshlambert_vert:Nb,meshlambert_frag:Pb,meshmatcap_vert:Lb,meshmatcap_frag:Db,meshnormal_vert:Ib,meshnormal_frag:kb,meshphong_vert:Ub,meshphong_frag:Fb,meshphysical_vert:Ob,meshphysical_frag:Bb,meshtoon_vert:zb,meshtoon_frag:jb,points_vert:Vb,points_frag:Gb,shadow_vert:Hb,shadow_frag:Wb,sprite_vert:Xb,sprite_frag:qb},he={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},fn={basic:{uniforms:kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:kt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:kt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new rt(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:kt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:kt([he.points,he.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:kt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:kt([he.common,he.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:kt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:kt([he.sprite,he.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:kt([he.common,he.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:kt([he.lights,he.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};fn.physical={uniforms:kt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const is={r:0,b:0,g:0},ai=new In,$b=new bt;function Yb(n,e,t,i,r,s){const a=new rt(0);let o=r===!0?0:1,d,c,u=null,h=0,f=null;function g(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){const E=y.backgroundBlurriness>0;w=e.get(w,E)}return w}function p(y){let w=!1;const E=g(y);E===null?m(a,o):E&&E.isColor&&(m(E,1),w=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(y,w){const E=g(w);E&&(E.isCubeTexture||E.mapping===Is)?(c===void 0&&(c=new kn(new wr(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Gi(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),ai.copy(w.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($b.makeRotationFromEuler(ai)),c.material.toneMapped=Je.getTransfer(E.colorSpace)!==at,(u!==E||h!==E.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,h=E.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(d===void 0&&(d=new kn(new Us(2,2),new vn({name:"BackgroundMaterial",uniforms:Gi(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=E,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.toneMapped=Je.getTransfer(E.colorSpace)!==at,E.matrixAutoUpdate===!0&&E.updateMatrix(),d.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||h!==E.version||f!==n.toneMapping)&&(d.material.needsUpdate=!0,u=E,h=E.version,f=n.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null))}function m(y,w){y.getRGB(is,of(n)),t.buffers.color.setClear(is.r,is.g,is.b,w,s)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,w=1){a.set(y),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:p,addToRenderList:_,dispose:x}}function Kb(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(N,F,z,j,B){let I=!1;const O=h(N,j,z,F);s!==O&&(s=O,c(s.object)),I=g(N,j,z,B),I&&p(N,j,z,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(I||a)&&(a=!1,E(N,F,z,j),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function d(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function u(N){return n.deleteVertexArray(N)}function h(N,F,z,j){const B=j.wireframe===!0;let I=i[F.id];I===void 0&&(I={},i[F.id]=I);const O=N.isInstancedMesh===!0?N.id:0;let ee=I[O];ee===void 0&&(ee={},I[O]=ee);let ie=ee[z.id];ie===void 0&&(ie={},ee[z.id]=ie);let K=ie[B];return K===void 0&&(K=f(d()),ie[B]=K),K}function f(N){const F=[],z=[],j=[];for(let B=0;B<t;B++)F[B]=0,z[B]=0,j[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:j,object:N,attributes:{},index:null}}function g(N,F,z,j){const B=s.attributes,I=F.attributes;let O=0;const ee=z.getAttributes();for(const ie in ee)if(ee[ie].location>=0){const te=B[ie];let J=I[ie];if(J===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(J=N.instanceColor)),te===void 0||te.attribute!==J||J&&te.data!==J.data)return!0;O++}return s.attributesNum!==O||s.index!==j}function p(N,F,z,j){const B={},I=F.attributes;let O=0;const ee=z.getAttributes();for(const ie in ee)if(ee[ie].location>=0){let te=I[ie];te===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(te=N.instanceColor));const J={};J.attribute=te,te&&te.data&&(J.data=te.data),B[ie]=J,O++}s.attributes=B,s.attributesNum=O,s.index=j}function _(){const N=s.newAttributes;for(let F=0,z=N.length;F<z;F++)N[F]=0}function m(N){x(N,0)}function x(N,F){const z=s.newAttributes,j=s.enabledAttributes,B=s.attributeDivisors;z[N]=1,j[N]===0&&(n.enableVertexAttribArray(N),j[N]=1),B[N]!==F&&(n.vertexAttribDivisor(N,F),B[N]=F)}function y(){const N=s.newAttributes,F=s.enabledAttributes;for(let z=0,j=F.length;z<j;z++)F[z]!==N[z]&&(n.disableVertexAttribArray(z),F[z]=0)}function w(N,F,z,j,B,I,O){O===!0?n.vertexAttribIPointer(N,F,z,B,I):n.vertexAttribPointer(N,F,z,j,B,I)}function E(N,F,z,j){_();const B=j.attributes,I=z.getAttributes(),O=F.defaultAttributeValues;for(const ee in I){const ie=I[ee];if(ie.location>=0){let K=B[ee];if(K===void 0&&(ee==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),ee==="instanceColor"&&N.instanceColor&&(K=N.instanceColor)),K!==void 0){const te=K.normalized,J=K.itemSize,fe=e.get(K);if(fe===void 0)continue;const Fe=fe.buffer,Ee=fe.type,X=fe.bytesPerElement,re=Ee===n.INT||Ee===n.UNSIGNED_INT||K.gpuType===el;if(K.isInterleavedBufferAttribute){const se=K.data,ve=se.stride,_e=K.offset;if(se.isInstancedInterleavedBuffer){for(let Re=0;Re<ie.locationSize;Re++)x(ie.location+Re,se.meshPerAttribute);N.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Re=0;Re<ie.locationSize;Re++)m(ie.location+Re);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let Re=0;Re<ie.locationSize;Re++)w(ie.location+Re,J/ie.locationSize,Ee,te,ve*X,(_e+J/ie.locationSize*Re)*X,re)}else{if(K.isInstancedBufferAttribute){for(let se=0;se<ie.locationSize;se++)x(ie.location+se,K.meshPerAttribute);N.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let se=0;se<ie.locationSize;se++)m(ie.location+se);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let se=0;se<ie.locationSize;se++)w(ie.location+se,J/ie.locationSize,Ee,te,J*X,J/ie.locationSize*se*X,re)}}else if(O!==void 0){const te=O[ee];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(ie.location,te);break;case 3:n.vertexAttrib3fv(ie.location,te);break;case 4:n.vertexAttrib4fv(ie.location,te);break;default:n.vertexAttrib1fv(ie.location,te)}}}}y()}function A(){M();for(const N in i){const F=i[N];for(const z in F){const j=F[z];for(const B in j){const I=j[B];for(const O in I)u(I[O].object),delete I[O];delete j[B]}}delete i[N]}}function T(N){if(i[N.id]===void 0)return;const F=i[N.id];for(const z in F){const j=F[z];for(const B in j){const I=j[B];for(const O in I)u(I[O].object),delete I[O];delete j[B]}}delete i[N.id]}function C(N){for(const F in i){const z=i[F];for(const j in z){const B=z[j];if(B[N.id]===void 0)continue;const I=B[N.id];for(const O in I)u(I[O].object),delete I[O];delete B[N.id]}}}function v(N){for(const F in i){const z=i[F],j=N.isInstancedMesh===!0?N.id:0,B=z[j];if(B!==void 0){for(const I in B){const O=B[I];for(const ee in O)u(O[ee].object),delete O[ee];delete B[I]}delete z[j],Object.keys(z).length===0&&delete i[F]}}}function M(){H(),a=!0,s!==r&&(s=r,c(s.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:M,resetDefaultState:H,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Zb(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let g=0;for(let p=0;p<h;p++)g+=u[p];t.update(g,i,1)}function d(c,u,h,f){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<c.length;p++)a(c[p],u[p],f[p]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_]*f[_];t.update(p,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=d}function Jb(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==sn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===Ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Jt&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==hn&&!v)}function d(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=d(c);u!==c&&(je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:d,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:g,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:E,maxSamples:A,samples:T}}function Qb(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new li,o=new Ge,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const g=h.length!==0||f||i!==0||r;return r=f,i=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,g){const p=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,x=n.get(h);if(!r||p===null||p.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,w=y*4;let E=x.clippingState||null;d.value=E,E=u(p,f,w,g);for(let A=0;A!==w;++A)E[A]=t[A];x.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,g,p){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=d.value,p!==!0||m===null){const x=g+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<x)&&(m=new Float32Array(x));for(let w=0,E=g;w!==_;++w,E+=4)a.copy(h[w]).applyMatrix4(y,o),a.normal.toArray(m,E),m[E+3]=a.constant}d.value=m,d.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const $n=4,jc=[.125,.215,.35,.446,.526,.582],di=20,ey=256,or=new cf,Vc=new rt;let wa=null,Ta=0,Aa=0,Ra=!1;const ty=new W;class Gc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=ty}=s;wa=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,i,r,d,o),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wa,Ta,Aa),this._renderer.xr.enabled=Ra,e.scissorTest=!1,Ii(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wa=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:It,minFilter:It,generateMipmaps:!1,type:Ln,format:sn,colorSpace:Vi,depthBuffer:!1},r=Hc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hc(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ny(s)),this._blurMaterial=ry(s,e,t),this._ggxMaterial=iy(s,e,t)}return r}_compileMaterial(e){const t=new kn(new ln,e);this._renderer.compile(t,or)}_sceneToCubeUV(e,t,i,r,s){const d=new Zt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,g=h.toneMapping;h.getClearColor(Vc),h.toneMapping=mn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new kn(new wr,new tf({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let x=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,x=!0):(m.color.copy(Vc),x=!0);for(let w=0;w<6;w++){const E=w%3;E===0?(d.up.set(0,c[w],0),d.position.set(s.x,s.y,s.z),d.lookAt(s.x+u[w],s.y,s.z)):E===1?(d.up.set(0,0,c[w]),d.position.set(s.x,s.y,s.z),d.lookAt(s.x,s.y+u[w],s.z)):(d.up.set(0,c[w],0),d.position.set(s.x,s.y,s.z),d.lookAt(s.x,s.y,s.z+u[w]));const A=this._cubeSize;Ii(r,E*A,w>2?A:0,A,A),h.setRenderTarget(r),x&&h.render(_,d),h.render(e,d)}h.toneMapping=g,h.autoClear=f,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===xi||e.mapping===zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const d=this._cubeSize;Ii(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(a,or)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const d=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,g=h*f,{_lodMax:p}=this,_=this._sizeLods[i],m=3*_*(i>p-$n?i-p+$n:0),x=4*(this._cubeSize-_);d.envMap.value=e.texture,d.roughness.value=g,d.mipInt.value=p-t,Ii(s,m,x,3*_,2*_),r.setRenderTarget(s),r.render(o,or),d.envMap.value=s.texture,d.roughness.value=0,d.mipInt.value=p-i,Ii(e,m,x,3*_,2*_),r.setRenderTarget(e),r.render(o,or)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const d=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,g=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*di-1),_=s/p,m=isFinite(s)?1+Math.floor(u*_):di;m>di&&je(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${di}`);const x=[];let y=0;for(let C=0;C<di;++C){const v=C/_,M=Math.exp(-v*v/2);x.push(M),C===0?y+=M:C<m&&(y+=2*M)}for(let C=0;C<x.length;C++)x[C]=x[C]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=x,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:w}=this;f.dTheta.value=p,f.mipInt.value=w-i;const E=this._sizeLods[r],A=3*E*(r>w-$n?r-w+$n:0),T=4*(this._cubeSize-E);Ii(t,A,T,3*E,2*E),d.setRenderTarget(t),d.render(h,or)}}function ny(n){const e=[],t=[],i=[];let r=n;const s=n-$n+1+jc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let d=1/o;a>n-$n?d=jc[a-n+$n-1]:a===0&&(d=0),t.push(d);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,p=6,_=3,m=2,x=1,y=new Float32Array(_*p*g),w=new Float32Array(m*p*g),E=new Float32Array(x*p*g);for(let T=0;T<g;T++){const C=T%3*2/3-1,v=T>2?0:-1,M=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];y.set(M,_*p*T),w.set(f,m*p*T);const H=[T,T,T,T,T,T];E.set(H,x*p*T)}const A=new ln;A.setAttribute("position",new xn(y,_)),A.setAttribute("uv",new xn(w,m)),A.setAttribute("faceIndex",new xn(E,x)),i.push(new kn(A,null)),r>$n&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Hc(n,e,t){const i=new gn(n,e,t);return i.texture.mapping=Is,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ii(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function iy(n,e,t){return new vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ey,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function ry(n,e,t){const i=new Float32Array(di),r=new W(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Wc(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Xc(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Fs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class uf extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new sf(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wr(5,5,5),s=new vn({name:"CubemapFromEquirect",uniforms:Gi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Nn});s.uniforms.tEquirect.value=t;const a=new kn(r,s),o=t.minFilter;return t.minFilter===fi&&(t.minFilter=It),new u_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function sy(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,g=!1){return f==null?null:g?a(f):s(f)}function s(f){if(f&&f.isTexture){const g=f.mapping;if(g===Js||g===Qs)if(e.has(f)){const p=e.get(f).texture;return o(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const _=new uf(p.height);return _.fromEquirectangularTexture(n,f),e.set(f,_),f.addEventListener("dispose",c),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const g=f.mapping,p=g===Js||g===Qs,_=g===xi||g===zi;if(p||_){let m=t.get(f);const x=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return i===null&&(i=new Gc(n)),m=p?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const y=f.image;return p&&y&&y.height>0||_&&y&&d(y)?(i===null&&(i=new Gc(n)),m=p?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,g){return g===Js?f.mapping=xi:g===Qs&&(f.mapping=zi),f}function d(f){let g=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&g++;return g===p}function c(f){const g=f.target;g.removeEventListener("dispose",c);const p=e.get(g);p!==void 0&&(e.delete(g),p.dispose())}function u(f){const g=f.target;g.removeEventListener("dispose",u);const p=t.get(g);p!==void 0&&(t.delete(g),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function ay(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ms("WebGLRenderer: "+i+" extension not supported."),r}}}function oy(n,e,t,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",a),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function d(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER)}function c(h){const f=[],g=h.index,p=h.attributes.position;let _=0;if(p===void 0)return;if(g!==null){const y=g.array;_=g.version;for(let w=0,E=y.length;w<E;w+=3){const A=y[w+0],T=y[w+1],C=y[w+2];f.push(A,T,T,C,C,A)}}else{const y=p.array;_=p.version;for(let w=0,E=y.length/3-1;w<E;w+=3){const A=w+0,T=w+1,C=w+2;f.push(A,T,T,C,C,A)}}const m=new(p.count>=65535?Qu:Ju)(f,1);m.version=_;const x=s.get(h);x&&e.remove(x),s.set(h,m)}function u(h){const f=s.get(h);if(f){const g=h.index;g!==null&&f.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:d,getWireframeAttribute:u}}function ly(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function d(f,g){n.drawElements(i,g,s,f*a),t.update(g,i,1)}function c(f,g,p){p!==0&&(n.drawElementsInstanced(i,g,s,f*a,p),t.update(g,i,p))}function u(f,g,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,f,0,p);let m=0;for(let x=0;x<p;x++)m+=g[x];t.update(m,i,1)}function h(f,g,p,_){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<f.length;x++)c(f[x]/a,g[x],_[x]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,f,0,_,0,p);let x=0;for(let y=0;y<p;y++)x+=g[y]*_[y];t.update(x,i,1)}}this.setMode=r,this.setIndex=o,this.render=d,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function dy(n,e,t){const i=new WeakMap,r=new vt;function s(a,o,d){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let M=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let w=0;g===!0&&(w=1),p===!0&&(w=2),_===!0&&(w=3);let E=o.attributes.position.count*w,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const T=new Float32Array(E*A*4*h),C=new Yu(T,E,A,h);C.type=hn,C.needsUpdate=!0;const v=w*4;for(let H=0;H<h;H++){const N=m[H],F=x[H],z=y[H],j=E*A*4*H;for(let B=0;B<N.count;B++){const I=B*v;g===!0&&(r.fromBufferAttribute(N,B),T[j+I+0]=r.x,T[j+I+1]=r.y,T[j+I+2]=r.z,T[j+I+3]=0),p===!0&&(r.fromBufferAttribute(F,B),T[j+I+4]=r.x,T[j+I+5]=r.y,T[j+I+6]=r.z,T[j+I+7]=0),_===!0&&(r.fromBufferAttribute(z,B),T[j+I+8]=r.x,T[j+I+9]=r.y,T[j+I+10]=r.z,T[j+I+11]=z.itemSize===4?r.w:1)}}f={count:h,texture:C,size:new ct(E,A)},i.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let _=0;_<c.length;_++)g+=c[_];const p=o.morphTargetsRelative?1:1-g;d.getUniforms().setValue(n,"morphTargetBaseInfluence",p),d.getUniforms().setValue(n,"morphTargetInfluences",c)}d.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function uy(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",d)===!1&&c.addEventListener("dispose",d),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const g=c.skeleton;s.get(g)!==u&&(g.update(),s.set(g,u))}return f}function o(){s=new WeakMap}function d(c){const u=c.target;u.removeEventListener("dispose",d),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const fy={[Du]:"LINEAR_TONE_MAPPING",[Iu]:"REINHARD_TONE_MAPPING",[ku]:"CINEON_TONE_MAPPING",[Uu]:"ACES_FILMIC_TONE_MAPPING",[Ou]:"AGX_TONE_MAPPING",[Bu]:"NEUTRAL_TONE_MAPPING",[Fu]:"CUSTOM_TONE_MAPPING"};function hy(n,e,t,i,r){const s=new gn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new gn(e,t,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),o=new ln;o.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new an([0,2,0,0,2,0],2));const d=new l_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new kn(o,d),u=new cf(-1,1,1,-1,0,1);let h=null,f=null,g=!1,p,_=null,m=[],x=!1;this.setSize=function(y,w){s.setSize(y,w),a.setSize(y,w);for(let E=0;E<m.length;E++){const A=m[E];A.setSize&&A.setSize(y,w)}},this.setEffects=function(y){m=y,x=m.length>0&&m[0].isRenderPass===!0;const w=s.width,E=s.height;for(let A=0;A<m.length;A++){const T=m[A];T.setSize&&T.setSize(w,E)}},this.begin=function(y,w){if(g||y.toneMapping===mn&&m.length===0)return!1;if(_=w,w!==null){const E=w.width,A=w.height;(s.width!==E||s.height!==A)&&this.setSize(E,A)}return x===!1&&y.setRenderTarget(s),p=y.toneMapping,y.toneMapping=mn,!0},this.hasRenderPass=function(){return x},this.end=function(y,w){y.toneMapping=p,g=!0;let E=s,A=a;for(let T=0;T<m.length;T++){const C=m[T];if(C.enabled!==!1&&(C.render(y,A,E,w),C.needsSwap!==!1)){const v=E;E=A,A=v}}if(h!==y.outputColorSpace||f!==y.toneMapping){h=y.outputColorSpace,f=y.toneMapping,d.defines={},Je.getTransfer(h)===at&&(d.defines.SRGB_TRANSFER="");const T=fy[f];T&&(d.defines[T]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(_),y.render(c,u),_=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),d.dispose()}}const ff=new Ut,Uo=new pr(1,1),hf=new Yu,pf=new Bx,mf=new sf,qc=[],$c=[],Yc=new Float32Array(16),Kc=new Float32Array(9),Zc=new Float32Array(4);function $i(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=qc[r];if(s===void 0&&(s=new Float32Array(r),qc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Os(n,e){let t=$c[e];t===void 0&&(t=new Int32Array(e),$c[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function py(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function my(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function gy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function _y(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;Zc.set(i),n.uniformMatrix2fv(this.addr,!1,Zc),wt(t,i)}}function vy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;Kc.set(i),n.uniformMatrix3fv(this.addr,!1,Kc),wt(t,i)}}function by(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;Yc.set(i),n.uniformMatrix4fv(this.addr,!1,Yc),wt(t,i)}}function yy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Sy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function My(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function Ey(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function wy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ty(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function Ay(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function Ry(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function Cy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Uo.compareFunction=t.isReversedDepthBuffer()?ol:al,s=Uo):s=ff,t.setTexture2D(e||s,r)}function Ny(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||pf,r)}function Py(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||mf,r)}function Ly(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||hf,r)}function Dy(n){switch(n){case 5126:return py;case 35664:return my;case 35665:return gy;case 35666:return xy;case 35674:return _y;case 35675:return vy;case 35676:return by;case 5124:case 35670:return yy;case 35667:case 35671:return Sy;case 35668:case 35672:return My;case 35669:case 35673:return Ey;case 5125:return wy;case 36294:return Ty;case 36295:return Ay;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Cy;case 35679:case 36299:case 36307:return Ny;case 35680:case 36300:case 36308:case 36293:return Py;case 36289:case 36303:case 36311:case 36292:return Ly}}function Iy(n,e){n.uniform1fv(this.addr,e)}function ky(n,e){const t=$i(e,this.size,2);n.uniform2fv(this.addr,t)}function Uy(n,e){const t=$i(e,this.size,3);n.uniform3fv(this.addr,t)}function Fy(n,e){const t=$i(e,this.size,4);n.uniform4fv(this.addr,t)}function Oy(n,e){const t=$i(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function By(n,e){const t=$i(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zy(n,e){const t=$i(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function jy(n,e){n.uniform1iv(this.addr,e)}function Vy(n,e){n.uniform2iv(this.addr,e)}function Gy(n,e){n.uniform3iv(this.addr,e)}function Hy(n,e){n.uniform4iv(this.addr,e)}function Wy(n,e){n.uniform1uiv(this.addr,e)}function Xy(n,e){n.uniform2uiv(this.addr,e)}function qy(n,e){n.uniform3uiv(this.addr,e)}function $y(n,e){n.uniform4uiv(this.addr,e)}function Yy(n,e,t){const i=this.cache,r=e.length,s=Os(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Uo:a=ff;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Ky(n,e,t){const i=this.cache,r=e.length,s=Os(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||pf,s[a])}function Zy(n,e,t){const i=this.cache,r=e.length,s=Os(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||mf,s[a])}function Jy(n,e,t){const i=this.cache,r=e.length,s=Os(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||hf,s[a])}function Qy(n){switch(n){case 5126:return Iy;case 35664:return ky;case 35665:return Uy;case 35666:return Fy;case 35674:return Oy;case 35675:return By;case 35676:return zy;case 5124:case 35670:return jy;case 35667:case 35671:return Vy;case 35668:case 35672:return Gy;case 35669:case 35673:return Hy;case 5125:return Wy;case 36294:return Xy;case 36295:return qy;case 36296:return $y;case 35678:case 36198:case 36298:case 36306:case 35682:return Yy;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return Zy;case 36289:case 36303:case 36311:case 36292:return Jy}}class eS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Dy(t.type)}}class tS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qy(t.type)}}class nS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function Jc(n,e){n.seq.push(e),n.map[e.id]=e}function iS(n,e,t){const i=n.name,r=i.length;for(Ca.lastIndex=0;;){const s=Ca.exec(i),a=Ca.lastIndex;let o=s[1];const d=s[2]==="]",c=s[3];if(d&&(o=o|0),c===void 0||c==="["&&a+2===r){Jc(t,c===void 0?new eS(o,n,e):new tS(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new nS(o),Jc(t,h)),t=h}}}class hs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),d=e.getUniformLocation(t,o.name);iS(o,d,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],d=i[o.id];d.needsUpdate!==!1&&o.setValue(e,d.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Qc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const rS=37297;let sS=0;function aS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const ed=new Ge;function oS(n){Je._getMatrix(ed,Je.workingColorSpace,n);const e=`mat3( ${ed.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case bs:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function td(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+aS(n.getShaderSource(e),o)}else return s}function lS(n,e){const t=oS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const cS={[Du]:"Linear",[Iu]:"Reinhard",[ku]:"Cineon",[Uu]:"ACESFilmic",[Ou]:"AgX",[Bu]:"Neutral",[Fu]:"Custom"};function dS(n,e){const t=cS[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const rs=new W;function uS(){Je.getLuminanceCoefficients(rs);const n=rs.x.toFixed(4),e=rs.y.toFixed(4),t=rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function hS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function pS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function dr(n){return n!==""}function nd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function id(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(n){return n.replace(mS,xS)}const gS=new Map;function xS(n,e){let t=He[e];if(t===void 0){const i=gS.get(e);if(i!==void 0)t=He[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fo(t)}const _S=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rd(n){return n.replace(_S,vS)}function vS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const bS={[ls]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function yS(n){return bS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const SS={[xi]:"ENVMAP_TYPE_CUBE",[zi]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE_UV"};function MS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":SS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const ES={[zi]:"ENVMAP_MODE_REFRACTION"};function wS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ES[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const TS={[Lu]:"ENVMAP_BLENDING_MULTIPLY",[xx]:"ENVMAP_BLENDING_MIX",[_x]:"ENVMAP_BLENDING_ADD"};function AS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":TS[n.combine]||"ENVMAP_BLENDING_NONE"}function RS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function CS(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const d=yS(t),c=MS(t),u=wS(t),h=AS(t),f=RS(t),g=fS(t),p=hS(s),_=r.createProgram();let m,x,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(dr).join(`
`),m.length>0&&(m+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(dr).join(`
`),x.length>0&&(x+=`
`)):(m=[sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),x=[sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mn?"#define TONE_MAPPING":"",t.toneMapping!==mn?He.tonemapping_pars_fragment:"",t.toneMapping!==mn?dS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,lS("linearToOutputTexel",t.outputColorSpace),uS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),a=Fo(a),a=nd(a,t),a=id(a,t),o=Fo(o),o=nd(o,t),o=id(o,t),a=rd(a),o=rd(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["#define varying in",t.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const w=y+m+a,E=y+x+o,A=Qc(r,r.VERTEX_SHADER,w),T=Qc(r,r.FRAGMENT_SHADER,E);r.attachShader(_,A),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(N){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(_)||"",z=r.getShaderInfoLog(A)||"",j=r.getShaderInfoLog(T)||"",B=F.trim(),I=z.trim(),O=j.trim();let ee=!0,ie=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,A,T);else{const K=td(r,A,"vertex"),te=td(r,T,"fragment");et("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+B+`
`+K+`
`+te)}else B!==""?je("WebGLProgram: Program Info Log:",B):(I===""||O==="")&&(ie=!1);ie&&(N.diagnostics={runnable:ee,programLog:B,vertexShader:{log:I,prefix:m},fragmentShader:{log:O,prefix:x}})}r.deleteShader(A),r.deleteShader(T),v=new hs(r,_),M=pS(r,_)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(_,rS)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let NS=0;class PS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new LS(e),t.set(e,i)),i}}class LS{constructor(e){this.id=NS++,this.code=e,this.usedTimes=0}}function DS(n,e,t,i,r,s){const a=new Ku,o=new PS,d=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return d.add(v),v===0?"uv":`uv${v}`}function _(v,M,H,N,F){const z=N.fog,j=F.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,I=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,O=e.get(v.envMap||B,I),ee=O&&O.mapping===Is?O.image.height:null,ie=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&je("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const K=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,te=K!==void 0?K.length:0;let J=0;j.morphAttributes.position!==void 0&&(J=1),j.morphAttributes.normal!==void 0&&(J=2),j.morphAttributes.color!==void 0&&(J=3);let fe,Fe,Ee,X;if(ie){const st=fn[ie];fe=st.vertexShader,Fe=st.fragmentShader}else fe=v.vertexShader,Fe=v.fragmentShader,o.update(v),Ee=o.getVertexShaderID(v),X=o.getFragmentShaderID(v);const re=n.getRenderTarget(),se=n.state.buffers.depth.getReversed(),ve=F.isInstancedMesh===!0,_e=F.isBatchedMesh===!0,Re=!!v.map,dt=!!v.matcap,Ye=!!O,Ze=!!v.aoMap,ut=!!v.lightMap,We=!!v.bumpMap,xt=!!v.normalMap,L=!!v.displacementMap,yt=!!v.emissiveMap,nt=!!v.metalnessMap,ht=!!v.roughnessMap,Pe=v.anisotropy>0,R=v.clearcoat>0,b=v.dispersion>0,k=v.iridescence>0,Q=v.sheen>0,ne=v.transmission>0,Z=Pe&&!!v.anisotropyMap,we=R&&!!v.clearcoatMap,de=R&&!!v.clearcoatNormalMap,Ue=R&&!!v.clearcoatRoughnessMap,Oe=k&&!!v.iridescenceMap,ae=k&&!!v.iridescenceThicknessMap,le=Q&&!!v.sheenColorMap,Te=Q&&!!v.sheenRoughnessMap,Ce=!!v.specularMap,xe=!!v.specularColorMap,Xe=!!v.specularIntensityMap,D=ne&&!!v.transmissionMap,ue=ne&&!!v.thicknessMap,ce=!!v.gradientMap,ye=!!v.alphaMap,oe=v.alphaTest>0,Y=!!v.alphaHash,Ae=!!v.extensions;let ze=mn;v.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ze=n.toneMapping);const pt={shaderID:ie,shaderType:v.type,shaderName:v.name,vertexShader:fe,fragmentShader:Fe,defines:v.defines,customVertexShaderID:Ee,customFragmentShaderID:X,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:_e,batchingColor:_e&&F._colorsTexture!==null,instancing:ve,instancingColor:ve&&F.instanceColor!==null,instancingMorph:ve&&F.morphTexture!==null,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Vi,alphaToCoverage:!!v.alphaToCoverage,map:Re,matcap:dt,envMap:Ye,envMapMode:Ye&&O.mapping,envMapCubeUVHeight:ee,aoMap:Ze,lightMap:ut,bumpMap:We,normalMap:xt,displacementMap:L,emissiveMap:yt,normalMapObjectSpace:xt&&v.normalMapType===Sx,normalMapTangentSpace:xt&&v.normalMapType===yx,metalnessMap:nt,roughnessMap:ht,anisotropy:Pe,anisotropyMap:Z,clearcoat:R,clearcoatMap:we,clearcoatNormalMap:de,clearcoatRoughnessMap:Ue,dispersion:b,iridescence:k,iridescenceMap:Oe,iridescenceThicknessMap:ae,sheen:Q,sheenColorMap:le,sheenRoughnessMap:Te,specularMap:Ce,specularColorMap:xe,specularIntensityMap:Xe,transmission:ne,transmissionMap:D,thicknessMap:ue,gradientMap:ce,opaque:v.transparent===!1&&v.blending===ki&&v.alphaToCoverage===!1,alphaMap:ye,alphaTest:oe,alphaHash:Y,combine:v.combine,mapUv:Re&&p(v.map.channel),aoMapUv:Ze&&p(v.aoMap.channel),lightMapUv:ut&&p(v.lightMap.channel),bumpMapUv:We&&p(v.bumpMap.channel),normalMapUv:xt&&p(v.normalMap.channel),displacementMapUv:L&&p(v.displacementMap.channel),emissiveMapUv:yt&&p(v.emissiveMap.channel),metalnessMapUv:nt&&p(v.metalnessMap.channel),roughnessMapUv:ht&&p(v.roughnessMap.channel),anisotropyMapUv:Z&&p(v.anisotropyMap.channel),clearcoatMapUv:we&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:de&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:le&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Te&&p(v.sheenRoughnessMap.channel),specularMapUv:Ce&&p(v.specularMap.channel),specularColorMapUv:xe&&p(v.specularColorMap.channel),specularIntensityMapUv:Xe&&p(v.specularIntensityMap.channel),transmissionMapUv:D&&p(v.transmissionMap.channel),thicknessMapUv:ue&&p(v.thicknessMap.channel),alphaMapUv:ye&&p(v.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(xt||Pe),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!j.attributes.uv&&(Re||ye),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||j.attributes.normal===void 0&&xt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:se,skinning:F.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:J,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:Re&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===at,decodeVideoTextureEmissive:yt&&v.emissiveMap.isVideoTexture===!0&&Je.getTransfer(v.emissiveMap.colorSpace)===at,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Rn,flipSided:v.side===Vt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ae&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&v.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return pt.vertexUv1s=d.has(1),pt.vertexUv2s=d.has(2),pt.vertexUv3s=d.has(3),d.clear(),pt}function m(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const H in v.defines)M.push(H),M.push(v.defines[H]);return v.isRawShaderMaterial===!1&&(x(M,v),y(M,v),M.push(n.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function x(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function y(v,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),v.push(a.mask)}function w(v){const M=g[v.type];let H;if(M){const N=fn[M];H=s_.clone(N.uniforms)}else H=v.uniforms;return H}function E(v,M){let H=u.get(M);return H!==void 0?++H.usedTimes:(H=new CS(n,M,v,r),c.push(H),u.set(M,H)),H}function A(v){if(--v.usedTimes===0){const M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:w,acquireProgram:E,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:C}}function IS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,d){n.get(a)[o]=d}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function kS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ad(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function od(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f){let g=0;return f.isInstancedMesh&&(g+=2),f.isSkinnedMesh&&(g+=1),g}function o(f,g,p,_,m,x){let y=n[e];return y===void 0?(y={id:f.id,object:f,geometry:g,material:p,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:x},n[e]=y):(y.id=f.id,y.object=f,y.geometry=g,y.material=p,y.materialVariant=a(f),y.groupOrder=_,y.renderOrder=f.renderOrder,y.z=m,y.group=x),e++,y}function d(f,g,p,_,m,x){const y=o(f,g,p,_,m,x);p.transmission>0?i.push(y):p.transparent===!0?r.push(y):t.push(y)}function c(f,g,p,_,m,x){const y=o(f,g,p,_,m,x);p.transmission>0?i.unshift(y):p.transparent===!0?r.unshift(y):t.unshift(y)}function u(f,g){t.length>1&&t.sort(f||kS),i.length>1&&i.sort(g||ad),r.length>1&&r.sort(g||ad)}function h(){for(let f=e,g=n.length;f<g;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:d,unshift:c,finish:h,sort:u}}function US(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new od,n.set(i,[a])):r>=s.length?(a=new od,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function FS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new rt};break;case"SpotLight":t={position:new W,direction:new W,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function OS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let BS=0;function zS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jS(n){const e=new FS,t=OS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new bt,a=new bt;function o(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let g=0,p=0,_=0,m=0,x=0,y=0,w=0,E=0,A=0,T=0,C=0;c.sort(zS);for(let M=0,H=c.length;M<H;M++){const N=c[M],F=N.color,z=N.intensity,j=N.distance;let B=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ji?B=N.shadow.map.texture:B=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=F.r*z,h+=F.g*z,f+=F.b*z;else if(N.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(N.sh.coefficients[I],z);C++}else if(N.isDirectionalLight){const I=e.get(N);if(I.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const O=N.shadow,ee=t.get(N);ee.shadowIntensity=O.intensity,ee.shadowBias=O.bias,ee.shadowNormalBias=O.normalBias,ee.shadowRadius=O.radius,ee.shadowMapSize=O.mapSize,i.directionalShadow[g]=ee,i.directionalShadowMap[g]=B,i.directionalShadowMatrix[g]=N.shadow.matrix,y++}i.directional[g]=I,g++}else if(N.isSpotLight){const I=e.get(N);I.position.setFromMatrixPosition(N.matrixWorld),I.color.copy(F).multiplyScalar(z),I.distance=j,I.coneCos=Math.cos(N.angle),I.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),I.decay=N.decay,i.spot[_]=I;const O=N.shadow;if(N.map&&(i.spotLightMap[A]=N.map,A++,O.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[_]=O.matrix,N.castShadow){const ee=t.get(N);ee.shadowIntensity=O.intensity,ee.shadowBias=O.bias,ee.shadowNormalBias=O.normalBias,ee.shadowRadius=O.radius,ee.shadowMapSize=O.mapSize,i.spotShadow[_]=ee,i.spotShadowMap[_]=B,E++}_++}else if(N.isRectAreaLight){const I=e.get(N);I.color.copy(F).multiplyScalar(z),I.halfWidth.set(N.width*.5,0,0),I.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=I,m++}else if(N.isPointLight){const I=e.get(N);if(I.color.copy(N.color).multiplyScalar(N.intensity),I.distance=N.distance,I.decay=N.decay,N.castShadow){const O=N.shadow,ee=t.get(N);ee.shadowIntensity=O.intensity,ee.shadowBias=O.bias,ee.shadowNormalBias=O.normalBias,ee.shadowRadius=O.radius,ee.shadowMapSize=O.mapSize,ee.shadowCameraNear=O.camera.near,ee.shadowCameraFar=O.camera.far,i.pointShadow[p]=ee,i.pointShadowMap[p]=B,i.pointShadowMatrix[p]=N.shadow.matrix,w++}i.point[p]=I,p++}else if(N.isHemisphereLight){const I=e.get(N);I.skyColor.copy(N.color).multiplyScalar(z),I.groundColor.copy(N.groundColor).multiplyScalar(z),i.hemi[x]=I,x++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const v=i.hash;(v.directionalLength!==g||v.pointLength!==p||v.spotLength!==_||v.rectAreaLength!==m||v.hemiLength!==x||v.numDirectionalShadows!==y||v.numPointShadows!==w||v.numSpotShadows!==E||v.numSpotMaps!==A||v.numLightProbes!==C)&&(i.directional.length=g,i.spot.length=_,i.rectArea.length=m,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=E+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,v.directionalLength=g,v.pointLength=p,v.spotLength=_,v.rectAreaLength=m,v.hemiLength=x,v.numDirectionalShadows=y,v.numPointShadows=w,v.numSpotShadows=E,v.numSpotMaps=A,v.numLightProbes=C,i.version=BS++)}function d(c,u){let h=0,f=0,g=0,p=0,_=0;const m=u.matrixWorldInverse;for(let x=0,y=c.length;x<y;x++){const w=c[x];if(w.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(w.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),g++}else if(w.isRectAreaLight){const E=i.rectArea[p];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(w.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),p++}else if(w.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:o,setupView:d,state:i}}function ld(n){const e=new jS(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function d(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:d,pushLight:s,pushShadow:a}}function VS(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ld(n),e.set(r,[o])):s>=a.length?(o=new ld(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const GS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,WS=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],XS=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],cd=new bt,lr=new W,Na=new W;function qS(n,e,t){let i=new nf;const r=new ct,s=new ct,a=new vt,o=new c_,d=new d_,c={},u=t.maxTextureSize,h={[Yn]:Vt,[Vt]:Yn,[Rn]:Rn},f=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:GS,fragmentShader:HS}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const p=new ln;p.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new kn(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ls;let x=this.type;this.render=function(T,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Jg&&(je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ls);const M=n.getRenderTarget(),H=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Nn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=x!==this.type;z&&C.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(B=>B.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,B=T.length;j<B;j++){const I=T[j],O=I.shadow;if(O===void 0){je("WebGLShadowMap:",I,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const ee=O.getFrameExtents();r.multiply(ee),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,O.mapSize.y=s.y));const ie=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=ie,O.map===null||z===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===cr){if(I.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new gn(r.x,r.y,{format:ji,type:Ln,minFilter:It,magFilter:It,generateMipmaps:!1}),O.map.texture.name=I.name+".shadowMap",O.map.depthTexture=new pr(r.x,r.y,hn),O.map.depthTexture.name=I.name+".shadowMapDepth",O.map.depthTexture.format=Dn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ct,O.map.depthTexture.magFilter=Ct}else I.isPointLight?(O.map=new uf(r.x),O.map.depthTexture=new i_(r.x,_n)):(O.map=new gn(r.x,r.y),O.map.depthTexture=new pr(r.x,r.y,_n)),O.map.depthTexture.name=I.name+".shadowMap",O.map.depthTexture.format=Dn,this.type===ls?(O.map.depthTexture.compareFunction=ie?ol:al,O.map.depthTexture.minFilter=It,O.map.depthTexture.magFilter=It):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ct,O.map.depthTexture.magFilter=Ct);O.camera.updateProjectionMatrix()}const K=O.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<K;te++){if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,te),n.clear();else{te===0&&(n.setRenderTarget(O.map),n.clear());const J=O.getViewport(te);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),F.viewport(a)}if(I.isPointLight){const J=O.camera,fe=O.matrix,Fe=I.distance||J.far;Fe!==J.far&&(J.far=Fe,J.updateProjectionMatrix()),lr.setFromMatrixPosition(I.matrixWorld),J.position.copy(lr),Na.copy(J.position),Na.add(WS[te]),J.up.copy(XS[te]),J.lookAt(Na),J.updateMatrixWorld(),fe.makeTranslation(-lr.x,-lr.y,-lr.z),cd.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),O._frustum.setFromProjectionMatrix(cd,J.coordinateSystem,J.reversedDepth)}else O.updateMatrices(I);i=O.getFrustum(),E(C,v,O.camera,I,this.type)}O.isPointLightShadow!==!0&&this.type===cr&&y(O,v),O.needsUpdate=!1}x=this.type,m.needsUpdate=!1,n.setRenderTarget(M,H,N)};function y(T,C){const v=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new gn(r.x,r.y,{format:ji,type:Ln})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,v,f,_,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,v,g,_,null)}function w(T,C,v,M){let H=null;const N=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)H=N;else if(H=v.isPointLight===!0?d:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=H.uuid,z=C.uuid;let j=c[F];j===void 0&&(j={},c[F]=j);let B=j[z];B===void 0&&(B=H.clone(),j[z]=B,C.addEventListener("dispose",A)),H=B}if(H.visible=C.visible,H.wireframe=C.wireframe,M===cr?H.side=C.shadowSide!==null?C.shadowSide:C.side:H.side=C.shadowSide!==null?C.shadowSide:h[C.side],H.alphaMap=C.alphaMap,H.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,H.map=C.map,H.clipShadows=C.clipShadows,H.clippingPlanes=C.clippingPlanes,H.clipIntersection=C.clipIntersection,H.displacementMap=C.displacementMap,H.displacementScale=C.displacementScale,H.displacementBias=C.displacementBias,H.wireframeLinewidth=C.wireframeLinewidth,H.linewidth=C.linewidth,v.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const F=n.properties.get(H);F.light=v}return H}function E(T,C,v,M,H){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&H===cr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const z=e.update(T),j=T.material;if(Array.isArray(j)){const B=z.groups;for(let I=0,O=B.length;I<O;I++){const ee=B[I],ie=j[ee.materialIndex];if(ie&&ie.visible){const K=w(T,ie,M,H);T.onBeforeShadow(n,T,C,v,z,K,ee),n.renderBufferDirect(v,null,z,K,T,ee),T.onAfterShadow(n,T,C,v,z,K,ee)}}}else if(j.visible){const B=w(T,j,M,H);T.onBeforeShadow(n,T,C,v,z,B,null),n.renderBufferDirect(v,null,z,B,T,null),T.onAfterShadow(n,T,C,v,z,B,null)}}const F=T.children;for(let z=0,j=F.length;z<j;z++)E(F[z],C,v,M,H)}function A(T){T.target.removeEventListener("dispose",A);for(const v in c){const M=c[v],H=T.target.uuid;H in M&&(M[H].dispose(),delete M[H])}}}function $S(n,e){function t(){let D=!1;const ue=new vt;let ce=null;const ye=new vt(0,0,0,0);return{setMask:function(oe){ce!==oe&&!D&&(n.colorMask(oe,oe,oe,oe),ce=oe)},setLocked:function(oe){D=oe},setClear:function(oe,Y,Ae,ze,pt){pt===!0&&(oe*=ze,Y*=ze,Ae*=ze),ue.set(oe,Y,Ae,ze),ye.equals(ue)===!1&&(n.clearColor(oe,Y,Ae,ze),ye.copy(ue))},reset:function(){D=!1,ce=null,ye.set(-1,0,0,0)}}}function i(){let D=!1,ue=!1,ce=null,ye=null,oe=null;return{setReversed:function(Y){if(ue!==Y){const Ae=e.get("EXT_clip_control");Y?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ue=Y;const ze=oe;oe=null,this.setClear(ze)}},getReversed:function(){return ue},setTest:function(Y){Y?re(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(Y){ce!==Y&&!D&&(n.depthMask(Y),ce=Y)},setFunc:function(Y){if(ue&&(Y=Lx[Y]),ye!==Y){switch(Y){case Xa:n.depthFunc(n.NEVER);break;case qa:n.depthFunc(n.ALWAYS);break;case $a:n.depthFunc(n.LESS);break;case Bi:n.depthFunc(n.LEQUAL);break;case Ya:n.depthFunc(n.EQUAL);break;case Ka:n.depthFunc(n.GEQUAL);break;case Za:n.depthFunc(n.GREATER);break;case Ja:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=Y}},setLocked:function(Y){D=Y},setClear:function(Y){oe!==Y&&(oe=Y,ue&&(Y=1-Y),n.clearDepth(Y))},reset:function(){D=!1,ce=null,ye=null,oe=null,ue=!1}}}function r(){let D=!1,ue=null,ce=null,ye=null,oe=null,Y=null,Ae=null,ze=null,pt=null;return{setTest:function(st){D||(st?re(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(st){ue!==st&&!D&&(n.stencilMask(st),ue=st)},setFunc:function(st,bn,yn){(ce!==st||ye!==bn||oe!==yn)&&(n.stencilFunc(st,bn,yn),ce=st,ye=bn,oe=yn)},setOp:function(st,bn,yn){(Y!==st||Ae!==bn||ze!==yn)&&(n.stencilOp(st,bn,yn),Y=st,Ae=bn,ze=yn)},setLocked:function(st){D=st},setClear:function(st){pt!==st&&(n.clearStencil(st),pt=st)},reset:function(){D=!1,ue=null,ce=null,ye=null,oe=null,Y=null,Ae=null,ze=null,pt=null}}}const s=new t,a=new i,o=new r,d=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,g=[],p=null,_=!1,m=null,x=null,y=null,w=null,E=null,A=null,T=null,C=new rt(0,0,0),v=0,M=!1,H=null,N=null,F=null,z=null,j=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,O=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(ee)[1]),I=O>=1):ee.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),I=O>=2);let ie=null,K={};const te=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),fe=new vt().fromArray(te),Fe=new vt().fromArray(J);function Ee(D,ue,ce,ye){const oe=new Uint8Array(4),Y=n.createTexture();n.bindTexture(D,Y),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<ce;Ae++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(ue+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return Y}const X={};X[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(n.DEPTH_TEST),a.setFunc(Bi),We(!1),xt(fc),re(n.CULL_FACE),Ze(Nn);function re(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function se(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function ve(D,ue){return h[D]!==ue?(n.bindFramebuffer(D,ue),h[D]=ue,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ue),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function _e(D,ue){let ce=g,ye=!1;if(D){ce=f.get(ue),ce===void 0&&(ce=[],f.set(ue,ce));const oe=D.textures;if(ce.length!==oe.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let Y=0,Ae=oe.length;Y<Ae;Y++)ce[Y]=n.COLOR_ATTACHMENT0+Y;ce.length=oe.length,ye=!0}}else ce[0]!==n.BACK&&(ce[0]=n.BACK,ye=!0);ye&&n.drawBuffers(ce)}function Re(D){return p!==D?(n.useProgram(D),p=D,!0):!1}const dt={[ci]:n.FUNC_ADD,[ex]:n.FUNC_SUBTRACT,[tx]:n.FUNC_REVERSE_SUBTRACT};dt[nx]=n.MIN,dt[ix]=n.MAX;const Ye={[rx]:n.ZERO,[sx]:n.ONE,[ax]:n.SRC_COLOR,[Ha]:n.SRC_ALPHA,[fx]:n.SRC_ALPHA_SATURATE,[dx]:n.DST_COLOR,[lx]:n.DST_ALPHA,[ox]:n.ONE_MINUS_SRC_COLOR,[Wa]:n.ONE_MINUS_SRC_ALPHA,[ux]:n.ONE_MINUS_DST_COLOR,[cx]:n.ONE_MINUS_DST_ALPHA,[hx]:n.CONSTANT_COLOR,[px]:n.ONE_MINUS_CONSTANT_COLOR,[mx]:n.CONSTANT_ALPHA,[gx]:n.ONE_MINUS_CONSTANT_ALPHA};function Ze(D,ue,ce,ye,oe,Y,Ae,ze,pt,st){if(D===Nn){_===!0&&(se(n.BLEND),_=!1);return}if(_===!1&&(re(n.BLEND),_=!0),D!==Qg){if(D!==m||st!==M){if((x!==ci||E!==ci)&&(n.blendEquation(n.FUNC_ADD),x=ci,E=ci),st)switch(D){case ki:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hc:n.blendFunc(n.ONE,n.ONE);break;case pc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:et("WebGLState: Invalid blending: ",D);break}else switch(D){case ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case pc:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mc:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",D);break}y=null,w=null,A=null,T=null,C.set(0,0,0),v=0,m=D,M=st}return}oe=oe||ue,Y=Y||ce,Ae=Ae||ye,(ue!==x||oe!==E)&&(n.blendEquationSeparate(dt[ue],dt[oe]),x=ue,E=oe),(ce!==y||ye!==w||Y!==A||Ae!==T)&&(n.blendFuncSeparate(Ye[ce],Ye[ye],Ye[Y],Ye[Ae]),y=ce,w=ye,A=Y,T=Ae),(ze.equals(C)===!1||pt!==v)&&(n.blendColor(ze.r,ze.g,ze.b,pt),C.copy(ze),v=pt),m=D,M=!1}function ut(D,ue){D.side===Rn?se(n.CULL_FACE):re(n.CULL_FACE);let ce=D.side===Vt;ue&&(ce=!ce),We(ce),D.blending===ki&&D.transparent===!1?Ze(Nn):Ze(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const ye=D.stencilWrite;o.setTest(ye),ye&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),yt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function We(D){H!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),H=D)}function xt(D){D!==Kg?(re(n.CULL_FACE),D!==N&&(D===fc?n.cullFace(n.BACK):D===Zg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),N=D}function L(D){D!==F&&(I&&n.lineWidth(D),F=D)}function yt(D,ue,ce){D?(re(n.POLYGON_OFFSET_FILL),(z!==ue||j!==ce)&&(z=ue,j=ce,a.getReversed()&&(ue=-ue),n.polygonOffset(ue,ce))):se(n.POLYGON_OFFSET_FILL)}function nt(D){D?re(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function ht(D){D===void 0&&(D=n.TEXTURE0+B-1),ie!==D&&(n.activeTexture(D),ie=D)}function Pe(D,ue,ce){ce===void 0&&(ie===null?ce=n.TEXTURE0+B-1:ce=ie);let ye=K[ce];ye===void 0&&(ye={type:void 0,texture:void 0},K[ce]=ye),(ye.type!==D||ye.texture!==ue)&&(ie!==ce&&(n.activeTexture(ce),ie=ce),n.bindTexture(D,ue||X[D]),ye.type=D,ye.texture=ue)}function R(){const D=K[ie];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function b(){try{n.compressedTexImage2D(...arguments)}catch(D){et("WebGLState:",D)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(D){et("WebGLState:",D)}}function Q(){try{n.texSubImage2D(...arguments)}catch(D){et("WebGLState:",D)}}function ne(){try{n.texSubImage3D(...arguments)}catch(D){et("WebGLState:",D)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(D){et("WebGLState:",D)}}function we(){try{n.compressedTexSubImage3D(...arguments)}catch(D){et("WebGLState:",D)}}function de(){try{n.texStorage2D(...arguments)}catch(D){et("WebGLState:",D)}}function Ue(){try{n.texStorage3D(...arguments)}catch(D){et("WebGLState:",D)}}function Oe(){try{n.texImage2D(...arguments)}catch(D){et("WebGLState:",D)}}function ae(){try{n.texImage3D(...arguments)}catch(D){et("WebGLState:",D)}}function le(D){fe.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),fe.copy(D))}function Te(D){Fe.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Fe.copy(D))}function Ce(D,ue){let ce=c.get(ue);ce===void 0&&(ce=new WeakMap,c.set(ue,ce));let ye=ce.get(D);ye===void 0&&(ye=n.getUniformBlockIndex(ue,D.name),ce.set(D,ye))}function xe(D,ue){const ye=c.get(ue).get(D);d.get(ue)!==ye&&(n.uniformBlockBinding(ue,ye,D.__bindingPointIndex),d.set(ue,ye))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ie=null,K={},h={},f=new WeakMap,g=[],p=null,_=!1,m=null,x=null,y=null,w=null,E=null,A=null,T=null,C=new rt(0,0,0),v=0,M=!1,H=null,N=null,F=null,z=null,j=null,fe.set(0,0,n.canvas.width,n.canvas.height),Fe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:se,bindFramebuffer:ve,drawBuffers:_e,useProgram:Re,setBlending:Ze,setMaterial:ut,setFlipSided:We,setCullFace:xt,setLineWidth:L,setPolygonOffset:yt,setScissorTest:nt,activeTexture:ht,bindTexture:Pe,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:k,texImage2D:Oe,texImage3D:ae,updateUBOMapping:Ce,uniformBlockBinding:xe,texStorage2D:de,texStorage3D:Ue,texSubImage2D:Q,texSubImage3D:ne,compressedTexSubImage2D:Z,compressedTexSubImage3D:we,scissor:le,viewport:Te,reset:Xe}}function YS(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,b){return g?new OffscreenCanvas(R,b):Ss("canvas")}function _(R,b,k){let Q=1;const ne=Pe(R);if((ne.width>k||ne.height>k)&&(Q=k/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(Q*ne.width),we=Math.floor(Q*ne.height);h===void 0&&(h=p(Z,we));const de=b?p(Z,we):h;return de.width=Z,de.height=we,de.getContext("2d").drawImage(R,0,0,Z,we),je("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Z+"x"+we+")."),de}else return"data"in R&&je("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function m(R){return R.generateMipmaps}function x(R){n.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(R,b,k,Q,ne=!1){if(R!==null){if(n[R]!==void 0)return n[R];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=b;if(b===n.RED&&(k===n.FLOAT&&(Z=n.R32F),k===n.HALF_FLOAT&&(Z=n.R16F),k===n.UNSIGNED_BYTE&&(Z=n.R8)),b===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.R8UI),k===n.UNSIGNED_SHORT&&(Z=n.R16UI),k===n.UNSIGNED_INT&&(Z=n.R32UI),k===n.BYTE&&(Z=n.R8I),k===n.SHORT&&(Z=n.R16I),k===n.INT&&(Z=n.R32I)),b===n.RG&&(k===n.FLOAT&&(Z=n.RG32F),k===n.HALF_FLOAT&&(Z=n.RG16F),k===n.UNSIGNED_BYTE&&(Z=n.RG8)),b===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RG8UI),k===n.UNSIGNED_SHORT&&(Z=n.RG16UI),k===n.UNSIGNED_INT&&(Z=n.RG32UI),k===n.BYTE&&(Z=n.RG8I),k===n.SHORT&&(Z=n.RG16I),k===n.INT&&(Z=n.RG32I)),b===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),k===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),k===n.UNSIGNED_INT&&(Z=n.RGB32UI),k===n.BYTE&&(Z=n.RGB8I),k===n.SHORT&&(Z=n.RGB16I),k===n.INT&&(Z=n.RGB32I)),b===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),k===n.UNSIGNED_INT&&(Z=n.RGBA32UI),k===n.BYTE&&(Z=n.RGBA8I),k===n.SHORT&&(Z=n.RGBA16I),k===n.INT&&(Z=n.RGBA32I)),b===n.RGB&&(k===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),b===n.RGBA){const we=ne?bs:Je.getTransfer(Q);k===n.FLOAT&&(Z=n.RGBA32F),k===n.HALF_FLOAT&&(Z=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Z=we===at?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function E(R,b){let k;return R?b===null||b===_n||b===hr?k=n.DEPTH24_STENCIL8:b===hn?k=n.DEPTH32F_STENCIL8:b===fr&&(k=n.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===_n||b===hr?k=n.DEPTH_COMPONENT24:b===hn?k=n.DEPTH_COMPONENT32F:b===fr&&(k=n.DEPTH_COMPONENT16),k}function A(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ct&&R.minFilter!==It?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function T(R){const b=R.target;b.removeEventListener("dispose",T),v(b),b.isVideoTexture&&u.delete(b)}function C(R){const b=R.target;b.removeEventListener("dispose",C),H(b)}function v(R){const b=i.get(R);if(b.__webglInit===void 0)return;const k=R.source,Q=f.get(k);if(Q){const ne=Q[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(R),Object.keys(Q).length===0&&f.delete(k)}i.remove(R)}function M(R){const b=i.get(R);n.deleteTexture(b.__webglTexture);const k=R.source,Q=f.get(k);delete Q[b.__cacheKey],a.memory.textures--}function H(R){const b=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let ne=0;ne<b.__webglFramebuffer[Q].length;ne++)n.deleteFramebuffer(b.__webglFramebuffer[Q][ne]);else n.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)n.deleteFramebuffer(b.__webglFramebuffer[Q]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=R.textures;for(let Q=0,ne=k.length;Q<ne;Q++){const Z=i.get(k[Q]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(k[Q])}i.remove(R)}let N=0;function F(){N=0}function z(){const R=N;return R>=r.maxTextures&&je("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),N+=1,R}function j(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function B(R,b){const k=i.get(R);if(R.isVideoTexture&&nt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const Q=R.image;if(Q===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{X(k,R,b);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+b)}function I(R,b){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){X(k,R,b);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+b)}function O(R,b){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){X(k,R,b);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+b)}function ee(R,b){const k=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){re(k,R,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+b)}const ie={[Qa]:n.REPEAT,[Cn]:n.CLAMP_TO_EDGE,[eo]:n.MIRRORED_REPEAT},K={[Ct]:n.NEAREST,[vx]:n.NEAREST_MIPMAP_NEAREST,[Ir]:n.NEAREST_MIPMAP_LINEAR,[It]:n.LINEAR,[ea]:n.LINEAR_MIPMAP_NEAREST,[fi]:n.LINEAR_MIPMAP_LINEAR},te={[Mx]:n.NEVER,[Rx]:n.ALWAYS,[Ex]:n.LESS,[al]:n.LEQUAL,[wx]:n.EQUAL,[ol]:n.GEQUAL,[Tx]:n.GREATER,[Ax]:n.NOTEQUAL};function J(R,b){if(b.type===hn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===It||b.magFilter===ea||b.magFilter===Ir||b.magFilter===fi||b.minFilter===It||b.minFilter===ea||b.minFilter===Ir||b.minFilter===fi)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ie[b.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ie[b.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ie[b.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,K[b.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,K[b.minFilter]),b.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,te[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ct||b.minFilter!==Ir&&b.minFilter!==fi||b.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function fe(R,b){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",T));const Q=b.source;let ne=f.get(Q);ne===void 0&&(ne={},f.set(Q,ne));const Z=j(b);if(Z!==R.__cacheKey){ne[Z]===void 0&&(ne[Z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),ne[Z].usedTimes++;const we=ne[R.__cacheKey];we!==void 0&&(ne[R.__cacheKey].usedTimes--,we.usedTimes===0&&M(b)),R.__cacheKey=Z,R.__webglTexture=ne[Z].texture}return k}function Fe(R,b,k){return Math.floor(Math.floor(R/k)/b)}function Ee(R,b,k,Q){const Z=R.updateRanges;if(Z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,k,Q,b.data);else{Z.sort((ae,le)=>ae.start-le.start);let we=0;for(let ae=1;ae<Z.length;ae++){const le=Z[we],Te=Z[ae],Ce=le.start+le.count,xe=Fe(Te.start,b.width,4),Xe=Fe(le.start,b.width,4);Te.start<=Ce+1&&xe===Xe&&Fe(Te.start+Te.count-1,b.width,4)===xe?le.count=Math.max(le.count,Te.start+Te.count-le.start):(++we,Z[we]=Te)}Z.length=we+1;const de=n.getParameter(n.UNPACK_ROW_LENGTH),Ue=n.getParameter(n.UNPACK_SKIP_PIXELS),Oe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let ae=0,le=Z.length;ae<le;ae++){const Te=Z[ae],Ce=Math.floor(Te.start/4),xe=Math.ceil(Te.count/4),Xe=Ce%b.width,D=Math.floor(Ce/b.width),ue=xe,ce=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,Xe,D,ue,ce,k,Q,b.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,de),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(n.UNPACK_SKIP_ROWS,Oe)}}function X(R,b,k){let Q=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=n.TEXTURE_3D);const ne=fe(R,b),Z=b.source;t.bindTexture(Q,R.__webglTexture,n.TEXTURE0+k);const we=i.get(Z);if(Z.version!==we.__version||ne===!0){t.activeTexture(n.TEXTURE0+k);const de=Je.getPrimaries(Je.workingColorSpace),Ue=b.colorSpace===qn?null:Je.getPrimaries(b.colorSpace),Oe=b.colorSpace===qn||de===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let ae=_(b.image,!1,r.maxTextureSize);ae=ht(b,ae);const le=s.convert(b.format,b.colorSpace),Te=s.convert(b.type);let Ce=w(b.internalFormat,le,Te,b.colorSpace,b.isVideoTexture);J(Q,b);let xe;const Xe=b.mipmaps,D=b.isVideoTexture!==!0,ue=we.__version===void 0||ne===!0,ce=Z.dataReady,ye=A(b,ae);if(b.isDepthTexture)Ce=E(b.format===hi,b.type),ue&&(D?t.texStorage2D(n.TEXTURE_2D,1,Ce,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Ce,ae.width,ae.height,0,le,Te,null));else if(b.isDataTexture)if(Xe.length>0){D&&ue&&t.texStorage2D(n.TEXTURE_2D,ye,Ce,Xe[0].width,Xe[0].height);for(let oe=0,Y=Xe.length;oe<Y;oe++)xe=Xe[oe],D?ce&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,xe.width,xe.height,le,Te,xe.data):t.texImage2D(n.TEXTURE_2D,oe,Ce,xe.width,xe.height,0,le,Te,xe.data);b.generateMipmaps=!1}else D?(ue&&t.texStorage2D(n.TEXTURE_2D,ye,Ce,ae.width,ae.height),ce&&Ee(b,ae,le,Te)):t.texImage2D(n.TEXTURE_2D,0,Ce,ae.width,ae.height,0,le,Te,ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){D&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ce,Xe[0].width,Xe[0].height,ae.depth);for(let oe=0,Y=Xe.length;oe<Y;oe++)if(xe=Xe[oe],b.format!==sn)if(le!==null)if(D){if(ce)if(b.layerUpdates.size>0){const Ae=zc(xe.width,xe.height,b.format,b.type);for(const ze of b.layerUpdates){const pt=xe.data.subarray(ze*Ae/xe.data.BYTES_PER_ELEMENT,(ze+1)*Ae/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,ze,xe.width,xe.height,1,le,pt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,xe.width,xe.height,ae.depth,le,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Ce,xe.width,xe.height,ae.depth,0,xe.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,xe.width,xe.height,ae.depth,le,Te,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Ce,xe.width,xe.height,ae.depth,0,le,Te,xe.data)}else{D&&ue&&t.texStorage2D(n.TEXTURE_2D,ye,Ce,Xe[0].width,Xe[0].height);for(let oe=0,Y=Xe.length;oe<Y;oe++)xe=Xe[oe],b.format!==sn?le!==null?D?ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,xe.width,xe.height,le,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Ce,xe.width,xe.height,0,xe.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ce&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,xe.width,xe.height,le,Te,xe.data):t.texImage2D(n.TEXTURE_2D,oe,Ce,xe.width,xe.height,0,le,Te,xe.data)}else if(b.isDataArrayTexture)if(D){if(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ce,ae.width,ae.height,ae.depth),ce)if(b.layerUpdates.size>0){const oe=zc(ae.width,ae.height,b.format,b.type);for(const Y of b.layerUpdates){const Ae=ae.data.subarray(Y*oe/ae.data.BYTES_PER_ELEMENT,(Y+1)*oe/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Y,ae.width,ae.height,1,le,Te,Ae)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,le,Te,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,ae.width,ae.height,ae.depth,0,le,Te,ae.data);else if(b.isData3DTexture)D?(ue&&t.texStorage3D(n.TEXTURE_3D,ye,Ce,ae.width,ae.height,ae.depth),ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,le,Te,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,ae.width,ae.height,ae.depth,0,le,Te,ae.data);else if(b.isFramebufferTexture){if(ue)if(D)t.texStorage2D(n.TEXTURE_2D,ye,Ce,ae.width,ae.height);else{let oe=ae.width,Y=ae.height;for(let Ae=0;Ae<ye;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Ce,oe,Y,0,le,Te,null),oe>>=1,Y>>=1}}else if(Xe.length>0){if(D&&ue){const oe=Pe(Xe[0]);t.texStorage2D(n.TEXTURE_2D,ye,Ce,oe.width,oe.height)}for(let oe=0,Y=Xe.length;oe<Y;oe++)xe=Xe[oe],D?ce&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,le,Te,xe):t.texImage2D(n.TEXTURE_2D,oe,Ce,le,Te,xe);b.generateMipmaps=!1}else if(D){if(ue){const oe=Pe(ae);t.texStorage2D(n.TEXTURE_2D,ye,Ce,oe.width,oe.height)}ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,Te,ae)}else t.texImage2D(n.TEXTURE_2D,0,Ce,le,Te,ae);m(b)&&x(Q),we.__version=Z.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function re(R,b,k){if(b.image.length!==6)return;const Q=fe(R,b),ne=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+k);const Z=i.get(ne);if(ne.version!==Z.__version||Q===!0){t.activeTexture(n.TEXTURE0+k);const we=Je.getPrimaries(Je.workingColorSpace),de=b.colorSpace===qn?null:Je.getPrimaries(b.colorSpace),Ue=b.colorSpace===qn||we===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const Oe=b.isCompressedTexture||b.image[0].isCompressedTexture,ae=b.image[0]&&b.image[0].isDataTexture,le=[];for(let Y=0;Y<6;Y++)!Oe&&!ae?le[Y]=_(b.image[Y],!0,r.maxCubemapSize):le[Y]=ae?b.image[Y].image:b.image[Y],le[Y]=ht(b,le[Y]);const Te=le[0],Ce=s.convert(b.format,b.colorSpace),xe=s.convert(b.type),Xe=w(b.internalFormat,Ce,xe,b.colorSpace),D=b.isVideoTexture!==!0,ue=Z.__version===void 0||Q===!0,ce=ne.dataReady;let ye=A(b,Te);J(n.TEXTURE_CUBE_MAP,b);let oe;if(Oe){D&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Xe,Te.width,Te.height);for(let Y=0;Y<6;Y++){oe=le[Y].mipmaps;for(let Ae=0;Ae<oe.length;Ae++){const ze=oe[Ae];b.format!==sn?Ce!==null?D?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ae,0,0,ze.width,ze.height,Ce,ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ae,Xe,ze.width,ze.height,0,ze.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ae,0,0,ze.width,ze.height,Ce,xe,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ae,Xe,ze.width,ze.height,0,Ce,xe,ze.data)}}}else{if(oe=b.mipmaps,D&&ue){oe.length>0&&ye++;const Y=Pe(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Xe,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ae){D?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,le[Y].width,le[Y].height,Ce,xe,le[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Xe,le[Y].width,le[Y].height,0,Ce,xe,le[Y].data);for(let Ae=0;Ae<oe.length;Ae++){const pt=oe[Ae].image[Y].image;D?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ae+1,0,0,pt.width,pt.height,Ce,xe,pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ae+1,Xe,pt.width,pt.height,0,Ce,xe,pt.data)}}else{D?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ce,xe,le[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Xe,Ce,xe,le[Y]);for(let Ae=0;Ae<oe.length;Ae++){const ze=oe[Ae];D?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ae+1,0,0,Ce,xe,ze.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ae+1,Xe,Ce,xe,ze.image[Y])}}}m(b)&&x(n.TEXTURE_CUBE_MAP),Z.__version=ne.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function se(R,b,k,Q,ne,Z){const we=s.convert(k.format,k.colorSpace),de=s.convert(k.type),Ue=w(k.internalFormat,we,de,k.colorSpace),Oe=i.get(b),ae=i.get(k);if(ae.__renderTarget=b,!Oe.__hasExternalTextures){const le=Math.max(1,b.width>>Z),Te=Math.max(1,b.height>>Z);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,Z,Ue,le,Te,b.depth,0,we,de,null):t.texImage2D(ne,Z,Ue,le,Te,0,we,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),yt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ne,ae.__webglTexture,0,L(b)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ne,ae.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(R,b,k){if(n.bindRenderbuffer(n.RENDERBUFFER,R),b.depthBuffer){const Q=b.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,Z=E(b.stencilBuffer,ne),we=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;yt(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L(b),Z,b.width,b.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,L(b),Z,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Z,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,R)}else{const Q=b.textures;for(let ne=0;ne<Q.length;ne++){const Z=Q[ne],we=s.convert(Z.format,Z.colorSpace),de=s.convert(Z.type),Ue=w(Z.internalFormat,we,de,Z.colorSpace);yt(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L(b),Ue,b.width,b.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,L(b),Ue,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Ue,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _e(R,b,k){const Q=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(b.depthTexture);if(ne.__renderTarget=b,(!ne.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Q){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,b.depthTexture.addEventListener("dispose",T)),ne.__webglTexture===void 0){ne.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),J(n.TEXTURE_CUBE_MAP,b.depthTexture);const Oe=s.convert(b.depthTexture.format),ae=s.convert(b.depthTexture.type);let le;b.depthTexture.format===Dn?le=n.DEPTH_COMPONENT24:b.depthTexture.format===hi&&(le=n.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,le,b.width,b.height,0,Oe,ae,null)}}else B(b.depthTexture,0);const Z=ne.__webglTexture,we=L(b),de=Q?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,Ue=b.depthTexture.format===hi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===Dn)yt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ue,de,Z,0,we):n.framebufferTexture2D(n.FRAMEBUFFER,Ue,de,Z,0);else if(b.depthTexture.format===hi)yt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ue,de,Z,0,we):n.framebufferTexture2D(n.FRAMEBUFFER,Ue,de,Z,0);else throw new Error("Unknown depthTexture format")}function Re(R){const b=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Q){const ne=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),b.__depthDisposeCallback=ne}b.__boundDepthTexture=Q}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(k)for(let Q=0;Q<6;Q++)_e(b.__webglFramebuffer[Q],R,Q);else{const Q=R.texture.mipmaps;Q&&Q.length>0?_e(b.__webglFramebuffer[0],R,0):_e(b.__webglFramebuffer,R,0)}else if(k){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]===void 0)b.__webglDepthbuffer[Q]=n.createRenderbuffer(),ve(b.__webglDepthbuffer[Q],R,!1);else{const ne=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,Z)}}else{const Q=R.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ve(b.__webglDepthbuffer,R,!1);else{const ne=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,Z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(R,b,k){const Q=i.get(R);b!==void 0&&se(Q.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Re(R)}function Ye(R){const b=R.texture,k=i.get(R),Q=i.get(b);R.addEventListener("dispose",C);const ne=R.textures,Z=R.isWebGLCubeRenderTarget===!0,we=ne.length>1;if(we||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=b.version,a.memory.textures++),Z){k.__webglFramebuffer=[];for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[de]=[];for(let Ue=0;Ue<b.mipmaps.length;Ue++)k.__webglFramebuffer[de][Ue]=n.createFramebuffer()}else k.__webglFramebuffer[de]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let de=0;de<b.mipmaps.length;de++)k.__webglFramebuffer[de]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(we)for(let de=0,Ue=ne.length;de<Ue;de++){const Oe=i.get(ne[de]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&yt(R)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let de=0;de<ne.length;de++){const Ue=ne[de];k.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[de]);const Oe=s.convert(Ue.format,Ue.colorSpace),ae=s.convert(Ue.type),le=w(Ue.internalFormat,Oe,ae,Ue.colorSpace,R.isXRRenderTarget===!0),Te=L(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,le,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,k.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),J(n.TEXTURE_CUBE_MAP,b);for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ue=0;Ue<b.mipmaps.length;Ue++)se(k.__webglFramebuffer[de][Ue],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ue);else se(k.__webglFramebuffer[de],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(b)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let de=0,Ue=ne.length;de<Ue;de++){const Oe=ne[de],ae=i.get(Oe);let le=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,ae.__webglTexture),J(le,Oe),se(k.__webglFramebuffer,R,Oe,n.COLOR_ATTACHMENT0+de,le,0),m(Oe)&&x(le)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,Q.__webglTexture),J(de,b),b.mipmaps&&b.mipmaps.length>0)for(let Ue=0;Ue<b.mipmaps.length;Ue++)se(k.__webglFramebuffer[Ue],R,b,n.COLOR_ATTACHMENT0,de,Ue);else se(k.__webglFramebuffer,R,b,n.COLOR_ATTACHMENT0,de,0);m(b)&&x(de),t.unbindTexture()}R.depthBuffer&&Re(R)}function Ze(R){const b=R.textures;for(let k=0,Q=b.length;k<Q;k++){const ne=b[k];if(m(ne)){const Z=y(R),we=i.get(ne).__webglTexture;t.bindTexture(Z,we),x(Z),t.unbindTexture()}}}const ut=[],We=[];function xt(R){if(R.samples>0){if(yt(R)===!1){const b=R.textures,k=R.width,Q=R.height;let ne=n.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(R),de=b.length>1;if(de)for(let Oe=0;Oe<b.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Ue=R.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Oe=0;Oe<b.length;Oe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Oe]);const ae=i.get(b[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,k,Q,0,0,k,Q,ne,n.NEAREST),d===!0&&(ut.length=0,We.length=0,ut.push(n.COLOR_ATTACHMENT0+Oe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ut.push(Z),We.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,We)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let Oe=0;Oe<b.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,we.__webglColorRenderbuffer[Oe]);const ae=i.get(b[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&d){const b=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function L(R){return Math.min(r.maxSamples,R.samples)}function yt(R){const b=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function nt(R){const b=a.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function ht(R,b){const k=R.colorSpace,Q=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Vi&&k!==qn&&(Je.getTransfer(k)===at?(Q!==sn||ne!==Jt)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",k)),b}function Pe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=B,this.setTexture2DArray=I,this.setTexture3D=O,this.setTextureCube=ee,this.rebindTextures=dt,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=se,this.useMultisampledRTT=yt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function KS(n,e){function t(i,r=qn){let s;const a=Je.getTransfer(r);if(i===Jt)return n.UNSIGNED_BYTE;if(i===tl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ju)return n.BYTE;if(i===Vu)return n.SHORT;if(i===fr)return n.UNSIGNED_SHORT;if(i===el)return n.INT;if(i===_n)return n.UNSIGNED_INT;if(i===hn)return n.FLOAT;if(i===Ln)return n.HALF_FLOAT;if(i===Wu)return n.ALPHA;if(i===Xu)return n.RGB;if(i===sn)return n.RGBA;if(i===Dn)return n.DEPTH_COMPONENT;if(i===hi)return n.DEPTH_STENCIL;if(i===qu)return n.RED;if(i===il)return n.RED_INTEGER;if(i===ji)return n.RG;if(i===rl)return n.RG_INTEGER;if(i===sl)return n.RGBA_INTEGER;if(i===cs||i===ds||i===us||i===fs)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===cs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===cs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ds)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===us)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===to||i===no||i===io||i===ro)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===to)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===no)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===io)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ro)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===so||i===ao||i===oo||i===lo||i===co||i===uo||i===fo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===so||i===ao)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===oo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===lo)return s.COMPRESSED_R11_EAC;if(i===co)return s.COMPRESSED_SIGNED_R11_EAC;if(i===uo)return s.COMPRESSED_RG11_EAC;if(i===fo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ho||i===po||i===mo||i===go||i===xo||i===_o||i===vo||i===bo||i===yo||i===So||i===Mo||i===Eo||i===wo||i===To)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ho)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===po)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===go)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_o)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===So)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Eo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===To)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ao||i===Ro||i===Co)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ao)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ro)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Co)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===No||i===Po||i===Lo||i===Do)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===No)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Po)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Do)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ZS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class QS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new af(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new vn({vertexShader:ZS,fragmentShader:JS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kn(new Us(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class e1 extends Xi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",d=1,c=null,u=null,h=null,f=null,g=null,p=null;const _=typeof XRWebGLBinding<"u",m=new QS,x={},y=t.getContextAttributes();let w=null,E=null;const A=[],T=[],C=new ct;let v=null;const M=new Zt;M.viewport=new vt;const H=new Zt;H.viewport=new vt;const N=[M,H],F=new f_;let z=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let re=A[X];return re===void 0&&(re=new la,A[X]=re),re.getTargetRaySpace()},this.getControllerGrip=function(X){let re=A[X];return re===void 0&&(re=new la,A[X]=re),re.getGripSpace()},this.getHand=function(X){let re=A[X];return re===void 0&&(re=new la,A[X]=re),re.getHandSpace()};function B(X){const re=T.indexOf(X.inputSource);if(re===-1)return;const se=A[re];se!==void 0&&(se.update(X.inputSource,X.frame,c||a),se.dispatchEvent({type:X.type,data:X.inputSource}))}function I(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",O);for(let X=0;X<A.length;X++){const re=T[X];re!==null&&(T[X]=null,A[X].disconnect(re))}z=null,j=null,m.reset();for(const X in x)delete x[X];e.setRenderTarget(w),g=null,f=null,h=null,r=null,E=null,Ee.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",I),r.addEventListener("inputsourceschange",O),y.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,ve=null,_e=null;y.depth&&(_e=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=y.stencil?hi:Dn,ve=y.stencil?hr:_n);const Re={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new gn(f.textureWidth,f.textureHeight,{format:sn,type:Jt,depthTexture:new pr(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new gn(g.framebufferWidth,g.framebufferHeight,{format:sn,type:Jt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(d),c=null,a=await r.requestReferenceSpace(o),Ee.setContext(r),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(X){for(let re=0;re<X.removed.length;re++){const se=X.removed[re],ve=T.indexOf(se);ve>=0&&(T[ve]=null,A[ve].disconnect(se))}for(let re=0;re<X.added.length;re++){const se=X.added[re];let ve=T.indexOf(se);if(ve===-1){for(let Re=0;Re<A.length;Re++)if(Re>=T.length){T.push(se),ve=Re;break}else if(T[Re]===null){T[Re]=se,ve=Re;break}if(ve===-1)break}const _e=A[ve];_e&&_e.connect(se)}}const ee=new W,ie=new W;function K(X,re,se){ee.setFromMatrixPosition(re.matrixWorld),ie.setFromMatrixPosition(se.matrixWorld);const ve=ee.distanceTo(ie),_e=re.projectionMatrix.elements,Re=se.projectionMatrix.elements,dt=_e[14]/(_e[10]-1),Ye=_e[14]/(_e[10]+1),Ze=(_e[9]+1)/_e[5],ut=(_e[9]-1)/_e[5],We=(_e[8]-1)/_e[0],xt=(Re[8]+1)/Re[0],L=dt*We,yt=dt*xt,nt=ve/(-We+xt),ht=nt*-We;if(re.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ht),X.translateZ(nt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),_e[10]===-1)X.projectionMatrix.copy(re.projectionMatrix),X.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Pe=dt+nt,R=Ye+nt,b=L-ht,k=yt+(ve-ht),Q=Ze*Ye/R*Pe,ne=ut*Ye/R*Pe;X.projectionMatrix.makePerspective(b,k,Q,ne,Pe,R),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function te(X,re){re===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(re.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let re=X.near,se=X.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(se=m.depthFar)),F.near=H.near=M.near=re,F.far=H.far=M.far=se,(z!==F.near||j!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,j=F.far),F.layers.mask=X.layers.mask|6,M.layers.mask=F.layers.mask&-5,H.layers.mask=F.layers.mask&-3;const ve=X.parent,_e=F.cameras;te(F,ve);for(let Re=0;Re<_e.length;Re++)te(_e[Re],ve);_e.length===2?K(F,M,H):F.projectionMatrix.copy(M.projectionMatrix),J(X,F,ve)};function J(X,re,se){se===null?X.matrix.copy(re.matrixWorld):(X.matrix.copy(se.matrixWorld),X.matrix.invert(),X.matrix.multiply(re.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(re.projectionMatrix),X.projectionMatrixInverse.copy(re.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Io*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&g===null))return d},this.setFoveation=function(X){d=X,f!==null&&(f.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(X){return x[X]};let fe=null;function Fe(X,re){if(u=re.getViewerPose(c||a),p=re,u!==null){const se=u.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let ve=!1;se.length!==F.cameras.length&&(F.cameras.length=0,ve=!0);for(let Ye=0;Ye<se.length;Ye++){const Ze=se[Ye];let ut=null;if(g!==null)ut=g.getViewport(Ze);else{const xt=h.getViewSubImage(f,Ze);ut=xt.viewport,Ye===0&&(e.setRenderTargetTextures(E,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(E))}let We=N[Ye];We===void 0&&(We=new Zt,We.layers.enable(Ye),We.viewport=new vt,N[Ye]=We),We.matrix.fromArray(Ze.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ze.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ut.x,ut.y,ut.width,ut.height),Ye===0&&(F.matrix.copy(We.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ve===!0&&F.cameras.push(We)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const Ye=h.getDepthInformation(se[0]);Ye&&Ye.isValid&&Ye.texture&&m.init(Ye,r.renderState)}if(_e&&_e.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let Ye=0;Ye<se.length;Ye++){const Ze=se[Ye].camera;if(Ze){let ut=x[Ze];ut||(ut=new af,x[Ze]=ut);const We=h.getCameraImage(Ze);ut.sourceTexture=We}}}}for(let se=0;se<A.length;se++){const ve=T[se],_e=A[se];ve!==null&&_e!==void 0&&_e.update(ve,re,c||a)}fe&&fe(X,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),p=null}const Ee=new df;Ee.setAnimationLoop(Fe),this.setAnimationLoop=function(X){fe=X},this.dispose=function(){}}}const oi=new In,t1=new bt;function n1(n,e){function t(m,x){m.matrixAutoUpdate===!0&&m.updateMatrix(),x.value.copy(m.matrix)}function i(m,x){x.color.getRGB(m.fogColor.value,of(n)),x.isFog?(m.fogNear.value=x.near,m.fogFar.value=x.far):x.isFogExp2&&(m.fogDensity.value=x.density)}function r(m,x,y,w,E){x.isMeshBasicMaterial?s(m,x):x.isMeshLambertMaterial?(s(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(s(m,x),h(m,x)):x.isMeshPhongMaterial?(s(m,x),u(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(s(m,x),f(m,x),x.isMeshPhysicalMaterial&&g(m,x,E)):x.isMeshMatcapMaterial?(s(m,x),p(m,x)):x.isMeshDepthMaterial?s(m,x):x.isMeshDistanceMaterial?(s(m,x),_(m,x)):x.isMeshNormalMaterial?s(m,x):x.isLineBasicMaterial?(a(m,x),x.isLineDashedMaterial&&o(m,x)):x.isPointsMaterial?d(m,x,y,w):x.isSpriteMaterial?c(m,x):x.isShadowMaterial?(m.color.value.copy(x.color),m.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function s(m,x){m.opacity.value=x.opacity,x.color&&m.diffuse.value.copy(x.color),x.emissive&&m.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.bumpMap&&(m.bumpMap.value=x.bumpMap,t(x.bumpMap,m.bumpMapTransform),m.bumpScale.value=x.bumpScale,x.side===Vt&&(m.bumpScale.value*=-1)),x.normalMap&&(m.normalMap.value=x.normalMap,t(x.normalMap,m.normalMapTransform),m.normalScale.value.copy(x.normalScale),x.side===Vt&&m.normalScale.value.negate()),x.displacementMap&&(m.displacementMap.value=x.displacementMap,t(x.displacementMap,m.displacementMapTransform),m.displacementScale.value=x.displacementScale,m.displacementBias.value=x.displacementBias),x.emissiveMap&&(m.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,m.emissiveMapTransform)),x.specularMap&&(m.specularMap.value=x.specularMap,t(x.specularMap,m.specularMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest);const y=e.get(x),w=y.envMap,E=y.envMapRotation;w&&(m.envMap.value=w,oi.copy(E),oi.x*=-1,oi.y*=-1,oi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),m.envMapRotation.value.setFromMatrix4(t1.makeRotationFromEuler(oi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=x.reflectivity,m.ior.value=x.ior,m.refractionRatio.value=x.refractionRatio),x.lightMap&&(m.lightMap.value=x.lightMap,m.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,m.lightMapTransform)),x.aoMap&&(m.aoMap.value=x.aoMap,m.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,m.aoMapTransform))}function a(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform))}function o(m,x){m.dashSize.value=x.dashSize,m.totalSize.value=x.dashSize+x.gapSize,m.scale.value=x.scale}function d(m,x,y,w){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.size.value=x.size*y,m.scale.value=w*.5,x.map&&(m.map.value=x.map,t(x.map,m.uvTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function c(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.rotation.value=x.rotation,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function u(m,x){m.specular.value.copy(x.specular),m.shininess.value=Math.max(x.shininess,1e-4)}function h(m,x){x.gradientMap&&(m.gradientMap.value=x.gradientMap)}function f(m,x){m.metalness.value=x.metalness,x.metalnessMap&&(m.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,m.metalnessMapTransform)),m.roughness.value=x.roughness,x.roughnessMap&&(m.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,m.roughnessMapTransform)),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)}function g(m,x,y){m.ior.value=x.ior,x.sheen>0&&(m.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),m.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(m.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,m.sheenColorMapTransform)),x.sheenRoughnessMap&&(m.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,m.sheenRoughnessMapTransform))),x.clearcoat>0&&(m.clearcoat.value=x.clearcoat,m.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(m.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,m.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(m.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Vt&&m.clearcoatNormalScale.value.negate())),x.dispersion>0&&(m.dispersion.value=x.dispersion),x.iridescence>0&&(m.iridescence.value=x.iridescence,m.iridescenceIOR.value=x.iridescenceIOR,m.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(m.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,m.iridescenceMapTransform)),x.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),x.transmission>0&&(m.transmission.value=x.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),x.transmissionMap&&(m.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,m.transmissionMapTransform)),m.thickness.value=x.thickness,x.thicknessMap&&(m.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=x.attenuationDistance,m.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(m.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(m.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=x.specularIntensity,m.specularColor.value.copy(x.specularColor),x.specularColorMap&&(m.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,m.specularColorMapTransform)),x.specularIntensityMap&&(m.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,x){x.matcap&&(m.matcap.value=x.matcap)}function _(m,x){const y=e.get(x).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function i1(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(y,w){const E=w.program;i.uniformBlockBinding(y,E)}function c(y,w){let E=r[y.id];E===void 0&&(p(y),E=u(y),r[y.id]=E,y.addEventListener("dispose",m));const A=w.program;i.updateUBOMapping(y,A);const T=e.render.frame;s[y.id]!==T&&(f(y),s[y.id]=T)}function u(y){const w=h();y.__bindingPointIndex=w;const E=n.createBuffer(),A=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,E),E}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const w=r[y.id],E=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let T=0,C=E.length;T<C;T++){const v=Array.isArray(E[T])?E[T]:[E[T]];for(let M=0,H=v.length;M<H;M++){const N=v[M];if(g(N,T,M,A)===!0){const F=N.__offset,z=Array.isArray(N.value)?N.value:[N.value];let j=0;for(let B=0;B<z.length;B++){const I=z[B],O=_(I);typeof I=="number"||typeof I=="boolean"?(N.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,F+j,N.__data)):I.isMatrix3?(N.__data[0]=I.elements[0],N.__data[1]=I.elements[1],N.__data[2]=I.elements[2],N.__data[3]=0,N.__data[4]=I.elements[3],N.__data[5]=I.elements[4],N.__data[6]=I.elements[5],N.__data[7]=0,N.__data[8]=I.elements[6],N.__data[9]=I.elements[7],N.__data[10]=I.elements[8],N.__data[11]=0):(I.toArray(N.__data,j),j+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(y,w,E,A){const T=y.value,C=w+"_"+E;if(A[C]===void 0)return typeof T=="number"||typeof T=="boolean"?A[C]=T:A[C]=T.clone(),!0;{const v=A[C];if(typeof T=="number"||typeof T=="boolean"){if(v!==T)return A[C]=T,!0}else if(v.equals(T)===!1)return v.copy(T),!0}return!1}function p(y){const w=y.uniforms;let E=0;const A=16;for(let C=0,v=w.length;C<v;C++){const M=Array.isArray(w[C])?w[C]:[w[C]];for(let H=0,N=M.length;H<N;H++){const F=M[H],z=Array.isArray(F.value)?F.value:[F.value];for(let j=0,B=z.length;j<B;j++){const I=z[j],O=_(I),ee=E%A,ie=ee%O.boundary,K=ee+ie;E+=ie,K!==0&&A-K<O.storage&&(E+=A-K),F.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=O.storage}}}const T=E%A;return T>0&&(E+=A-T),y.__size=E,y.__cache={},this}function _(y){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):je("WebGLRenderer: Unsupported uniform value type.",y),w}function m(y){const w=y.target;w.removeEventListener("dispose",m);const E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function x(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:d,update:c,dispose:x}}const r1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let un=null;function s1(){return un===null&&(un=new Qx(r1,16,16,ji,Ln),un.name="DFG_LUT",un.minFilter=It,un.magFilter=It,un.wrapS=Cn,un.wrapT=Cn,un.generateMipmaps=!1,un.needsUpdate=!0),un}class a1{constructor(e={}){const{canvas:t=Nx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:g=Jt}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=g,m=new Set([sl,rl,il]),x=new Set([Jt,_n,fr,hr,tl,nl]),y=new Uint32Array(4),w=new Int32Array(4);let E=null,A=null;const T=[],C=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let H=!1;this._outputColorSpace=Kt;let N=0,F=0,z=null,j=-1,B=null;const I=new vt,O=new vt;let ee=null;const ie=new rt(0);let K=0,te=t.width,J=t.height,fe=1,Fe=null,Ee=null;const X=new vt(0,0,te,J),re=new vt(0,0,te,J);let se=!1;const ve=new nf;let _e=!1,Re=!1;const dt=new bt,Ye=new W,Ze=new vt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function xt(){return z===null?fe:1}let L=i;function yt(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:d,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qo}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",pt,!1),L===null){const U="webgl2";if(L=yt(U,S),L===null)throw yt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw et("WebGLRenderer: "+S.message),S}let nt,ht,Pe,R,b,k,Q,ne,Z,we,de,Ue,Oe,ae,le,Te,Ce,xe,Xe,D,ue,ce,ye;function oe(){nt=new ay(L),nt.init(),ue=new KS(L,nt),ht=new Jb(L,nt,e,ue),Pe=new $S(L,nt),ht.reversedDepthBuffer&&f&&Pe.buffers.depth.setReversed(!0),R=new cy(L),b=new IS,k=new YS(L,nt,Pe,b,ht,ue,R),Q=new sy(M),ne=new p_(L),ce=new Kb(L,ne),Z=new oy(L,ne,R,ce),we=new uy(L,Z,ne,ce,R),xe=new dy(L,ht,k),le=new Qb(b),de=new DS(M,Q,nt,ht,ce,le),Ue=new n1(M,b),Oe=new US,ae=new VS(nt),Ce=new Yb(M,Q,Pe,we,p,d),Te=new qS(M,we,ht),ye=new i1(L,R,ht,Pe),Xe=new Zb(L,nt,R),D=new ly(L,nt,R),R.programs=de.programs,M.capabilities=ht,M.extensions=nt,M.properties=b,M.renderLists=Oe,M.shadowMap=Te,M.state=Pe,M.info=R}oe(),_!==Jt&&(v=new hy(_,t.width,t.height,r,s));const Y=new e1(M,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=nt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=nt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(S){S!==void 0&&(fe=S,this.setSize(te,J,!1))},this.getSize=function(S){return S.set(te,J)},this.setSize=function(S,U,$=!0){if(Y.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}te=S,J=U,t.width=Math.floor(S*fe),t.height=Math.floor(U*fe),$===!0&&(t.style.width=S+"px",t.style.height=U+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(te*fe,J*fe).floor()},this.setDrawingBufferSize=function(S,U,$){te=S,J=U,fe=$,t.width=Math.floor(S*$),t.height=Math.floor(U*$),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(_===Jt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(X)},this.setViewport=function(S,U,$,G){S.isVector4?X.set(S.x,S.y,S.z,S.w):X.set(S,U,$,G),Pe.viewport(I.copy(X).multiplyScalar(fe).round())},this.getScissor=function(S){return S.copy(re)},this.setScissor=function(S,U,$,G){S.isVector4?re.set(S.x,S.y,S.z,S.w):re.set(S,U,$,G),Pe.scissor(O.copy(re).multiplyScalar(fe).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(S){Pe.setScissorTest(se=S)},this.setOpaqueSort=function(S){Fe=S},this.setTransparentSort=function(S){Ee=S},this.getClearColor=function(S){return S.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,$=!0){let G=0;if(S){let V=!1;if(z!==null){const me=z.texture.format;V=m.has(me)}if(V){const me=z.texture.type,be=x.has(me),ge=Ce.getClearColor(),Ne=Ce.getClearAlpha(),Ie=ge.r,Ve=ge.g,qe=ge.b;be?(y[0]=Ie,y[1]=Ve,y[2]=qe,y[3]=Ne,L.clearBufferuiv(L.COLOR,0,y)):(w[0]=Ie,w[1]=Ve,w[2]=qe,w[3]=Ne,L.clearBufferiv(L.COLOR,0,w))}else G|=L.COLOR_BUFFER_BIT}U&&(G|=L.DEPTH_BUFFER_BIT),$&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",pt,!1),Ce.dispose(),Oe.dispose(),ae.dispose(),b.dispose(),Q.dispose(),we.dispose(),ce.dispose(),ye.dispose(),de.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",ul),Y.removeEventListener("sessionend",fl),Jn.stop()};function Ae(S){S.preventDefault(),bc("WebGLRenderer: Context Lost."),H=!0}function ze(){bc("WebGLRenderer: Context Restored."),H=!1;const S=R.autoReset,U=Te.enabled,$=Te.autoUpdate,G=Te.needsUpdate,V=Te.type;oe(),R.autoReset=S,Te.enabled=U,Te.autoUpdate=$,Te.needsUpdate=G,Te.type=V}function pt(S){et("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function st(S){const U=S.target;U.removeEventListener("dispose",st),bn(U)}function bn(S){yn(S),b.remove(S)}function yn(S){const U=b.get(S).programs;U!==void 0&&(U.forEach(function($){de.releaseProgram($)}),S.isShaderMaterial&&de.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,$,G,V,me){U===null&&(U=ut);const be=V.isMesh&&V.matrixWorld.determinant()<0,ge=vf(S,U,$,G,V);Pe.setMaterial(G,be);let Ne=$.index,Ie=1;if(G.wireframe===!0){if(Ne=Z.getWireframeAttribute($),Ne===void 0)return;Ie=2}const Ve=$.drawRange,qe=$.attributes.position;let ke=Ve.start*Ie,ot=(Ve.start+Ve.count)*Ie;me!==null&&(ke=Math.max(ke,me.start*Ie),ot=Math.min(ot,(me.start+me.count)*Ie)),Ne!==null?(ke=Math.max(ke,0),ot=Math.min(ot,Ne.count)):qe!=null&&(ke=Math.max(ke,0),ot=Math.min(ot,qe.count));const _t=ot-ke;if(_t<0||_t===1/0)return;ce.setup(V,G,ge,$,Ne);let gt,lt=Xe;if(Ne!==null&&(gt=ne.get(Ne),lt=D,lt.setIndex(gt)),V.isMesh)G.wireframe===!0?(Pe.setLineWidth(G.wireframeLinewidth*xt()),lt.setMode(L.LINES)):lt.setMode(L.TRIANGLES);else if(V.isLine){let Nt=G.linewidth;Nt===void 0&&(Nt=1),Pe.setLineWidth(Nt*xt()),V.isLineSegments?lt.setMode(L.LINES):V.isLineLoop?lt.setMode(L.LINE_LOOP):lt.setMode(L.LINE_STRIP)}else V.isPoints?lt.setMode(L.POINTS):V.isSprite&&lt.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Ms("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))lt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Nt=V._multiDrawStarts,Le=V._multiDrawCounts,Ht=V._multiDrawCount,Qe=Ne?ne.get(Ne).bytesPerElement:1,Qt=b.get(G).currentProgram.getUniforms();for(let cn=0;cn<Ht;cn++)Qt.setValue(L,"_gl_DrawID",cn),lt.render(Nt[cn]/Qe,Le[cn])}else if(V.isInstancedMesh)lt.renderInstances(ke,_t,V.count);else if($.isInstancedBufferGeometry){const Nt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Le=Math.min($.instanceCount,Nt);lt.renderInstances(ke,_t,Le)}else lt.render(ke,_t)};function dl(S,U,$){S.transparent===!0&&S.side===Rn&&S.forceSinglePass===!1?(S.side=Vt,S.needsUpdate=!0,Ar(S,U,$),S.side=Yn,S.needsUpdate=!0,Ar(S,U,$),S.side=Rn):Ar(S,U,$)}this.compile=function(S,U,$=null){$===null&&($=S),A=ae.get($),A.init(U),C.push(A),$.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),S!==$&&S.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights();const G=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const me=V.material;if(me)if(Array.isArray(me))for(let be=0;be<me.length;be++){const ge=me[be];dl(ge,$,V),G.add(ge)}else dl(me,$,V),G.add(me)}),A=C.pop(),G},this.compileAsync=function(S,U,$=null){const G=this.compile(S,U,$);return new Promise(V=>{function me(){if(G.forEach(function(be){b.get(be).currentProgram.isReady()&&G.delete(be)}),G.size===0){V(S);return}setTimeout(me,10)}nt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Bs=null;function _f(S){Bs&&Bs(S)}function ul(){Jn.stop()}function fl(){Jn.start()}const Jn=new df;Jn.setAnimationLoop(_f),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(S){Bs=S,Y.setAnimationLoop(S),S===null?Jn.stop():Jn.start()},Y.addEventListener("sessionstart",ul),Y.addEventListener("sessionend",fl),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;const $=Y.enabled===!0&&Y.isPresenting===!0,G=v!==null&&(z===null||$)&&v.begin(M,z);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,U,z),A=ae.get(S,C.length),A.init(U),C.push(A),dt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ve.setFromProjectionMatrix(dt,pn,U.reversedDepth),Re=this.localClippingEnabled,_e=le.init(this.clippingPlanes,Re),E=Oe.get(S,T.length),E.init(),T.push(E),Y.enabled===!0&&Y.isPresenting===!0){const be=M.xr.getDepthSensingMesh();be!==null&&zs(be,U,-1/0,M.sortObjects)}zs(S,U,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort(Fe,Ee),We=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,We&&Ce.addToRenderList(E,S),this.info.render.frame++,_e===!0&&le.beginShadows();const V=A.state.shadowsArray;if(Te.render(V,S,U),_e===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&v.hasRenderPass())===!1){const be=E.opaque,ge=E.transmissive;if(A.setupLights(),U.isArrayCamera){const Ne=U.cameras;if(ge.length>0)for(let Ie=0,Ve=Ne.length;Ie<Ve;Ie++){const qe=Ne[Ie];pl(be,ge,S,qe)}We&&Ce.render(S);for(let Ie=0,Ve=Ne.length;Ie<Ve;Ie++){const qe=Ne[Ie];hl(E,S,qe,qe.viewport)}}else ge.length>0&&pl(be,ge,S,U),We&&Ce.render(S),hl(E,S,U)}z!==null&&F===0&&(k.updateMultisampleRenderTarget(z),k.updateRenderTargetMipmap(z)),G&&v.end(M),S.isScene===!0&&S.onAfterRender(M,S,U),ce.resetDefaultState(),j=-1,B=null,C.pop(),C.length>0?(A=C[C.length-1],_e===!0&&le.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,T.pop(),T.length>0?E=T[T.length-1]:E=null};function zs(S,U,$,G){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ve.intersectsSprite(S)){G&&Ze.setFromMatrixPosition(S.matrixWorld).applyMatrix4(dt);const be=we.update(S),ge=S.material;ge.visible&&E.push(S,be,ge,$,Ze.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ve.intersectsObject(S))){const be=we.update(S),ge=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ze.copy(S.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ze.copy(be.boundingSphere.center)),Ze.applyMatrix4(S.matrixWorld).applyMatrix4(dt)),Array.isArray(ge)){const Ne=be.groups;for(let Ie=0,Ve=Ne.length;Ie<Ve;Ie++){const qe=Ne[Ie],ke=ge[qe.materialIndex];ke&&ke.visible&&E.push(S,be,ke,$,Ze.z,qe)}}else ge.visible&&E.push(S,be,ge,$,Ze.z,null)}}const me=S.children;for(let be=0,ge=me.length;be<ge;be++)zs(me[be],U,$,G)}function hl(S,U,$,G){const{opaque:V,transmissive:me,transparent:be}=S;A.setupLightsView($),_e===!0&&le.setGlobalState(M.clippingPlanes,$),G&&Pe.viewport(I.copy(G)),V.length>0&&Tr(V,U,$),me.length>0&&Tr(me,U,$),be.length>0&&Tr(be,U,$),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function pl(S,U,$,G){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[G.id]===void 0){const ke=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[G.id]=new gn(1,1,{generateMipmaps:!0,type:ke?Ln:Jt,minFilter:fi,samples:Math.max(4,ht.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const me=A.state.transmissionRenderTarget[G.id],be=G.viewport||I;me.setSize(be.z*M.transmissionResolutionScale,be.w*M.transmissionResolutionScale);const ge=M.getRenderTarget(),Ne=M.getActiveCubeFace(),Ie=M.getActiveMipmapLevel();M.setRenderTarget(me),M.getClearColor(ie),K=M.getClearAlpha(),K<1&&M.setClearColor(16777215,.5),M.clear(),We&&Ce.render($);const Ve=M.toneMapping;M.toneMapping=mn;const qe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),A.setupLightsView(G),_e===!0&&le.setGlobalState(M.clippingPlanes,G),Tr(S,$,G),k.updateMultisampleRenderTarget(me),k.updateRenderTargetMipmap(me),nt.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let ot=0,_t=U.length;ot<_t;ot++){const gt=U[ot],{object:lt,geometry:Nt,material:Le,group:Ht}=gt;if(Le.side===Rn&&lt.layers.test(G.layers)){const Qe=Le.side;Le.side=Vt,Le.needsUpdate=!0,ml(lt,$,G,Nt,Le,Ht),Le.side=Qe,Le.needsUpdate=!0,ke=!0}}ke===!0&&(k.updateMultisampleRenderTarget(me),k.updateRenderTargetMipmap(me))}M.setRenderTarget(ge,Ne,Ie),M.setClearColor(ie,K),qe!==void 0&&(G.viewport=qe),M.toneMapping=Ve}function Tr(S,U,$){const G=U.isScene===!0?U.overrideMaterial:null;for(let V=0,me=S.length;V<me;V++){const be=S[V],{object:ge,geometry:Ne,group:Ie}=be;let Ve=be.material;Ve.allowOverride===!0&&G!==null&&(Ve=G),ge.layers.test($.layers)&&ml(ge,U,$,Ne,Ve,Ie)}}function ml(S,U,$,G,V,me){S.onBeforeRender(M,U,$,G,V,me),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(M,U,$,G,S,me),V.transparent===!0&&V.side===Rn&&V.forceSinglePass===!1?(V.side=Vt,V.needsUpdate=!0,M.renderBufferDirect($,U,G,V,S,me),V.side=Yn,V.needsUpdate=!0,M.renderBufferDirect($,U,G,V,S,me),V.side=Rn):M.renderBufferDirect($,U,G,V,S,me),S.onAfterRender(M,U,$,G,V,me)}function Ar(S,U,$){U.isScene!==!0&&(U=ut);const G=b.get(S),V=A.state.lights,me=A.state.shadowsArray,be=V.state.version,ge=de.getParameters(S,V.state,me,U,$),Ne=de.getProgramCacheKey(ge);let Ie=G.programs;G.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;const Ve=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;G.envMap=Q.get(S.envMap||G.environment,Ve),G.envMapRotation=G.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ie===void 0&&(S.addEventListener("dispose",st),Ie=new Map,G.programs=Ie);let qe=Ie.get(Ne);if(qe!==void 0){if(G.currentProgram===qe&&G.lightsStateVersion===be)return xl(S,ge),qe}else ge.uniforms=de.getUniforms(S),S.onBeforeCompile(ge,M),qe=de.acquireProgram(ge,Ne),Ie.set(Ne,qe),G.uniforms=ge.uniforms;const ke=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ke.clippingPlanes=le.uniform),xl(S,ge),G.needsLights=yf(S),G.lightsStateVersion=be,G.needsLights&&(ke.ambientLightColor.value=V.state.ambient,ke.lightProbe.value=V.state.probe,ke.directionalLights.value=V.state.directional,ke.directionalLightShadows.value=V.state.directionalShadow,ke.spotLights.value=V.state.spot,ke.spotLightShadows.value=V.state.spotShadow,ke.rectAreaLights.value=V.state.rectArea,ke.ltc_1.value=V.state.rectAreaLTC1,ke.ltc_2.value=V.state.rectAreaLTC2,ke.pointLights.value=V.state.point,ke.pointLightShadows.value=V.state.pointShadow,ke.hemisphereLights.value=V.state.hemi,ke.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ke.spotLightMatrix.value=V.state.spotLightMatrix,ke.spotLightMap.value=V.state.spotLightMap,ke.pointShadowMatrix.value=V.state.pointShadowMatrix),G.currentProgram=qe,G.uniformsList=null,qe}function gl(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=hs.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function xl(S,U){const $=b.get(S);$.outputColorSpace=U.outputColorSpace,$.batching=U.batching,$.batchingColor=U.batchingColor,$.instancing=U.instancing,$.instancingColor=U.instancingColor,$.instancingMorph=U.instancingMorph,$.skinning=U.skinning,$.morphTargets=U.morphTargets,$.morphNormals=U.morphNormals,$.morphColors=U.morphColors,$.morphTargetsCount=U.morphTargetsCount,$.numClippingPlanes=U.numClippingPlanes,$.numIntersection=U.numClipIntersection,$.vertexAlphas=U.vertexAlphas,$.vertexTangents=U.vertexTangents,$.toneMapping=U.toneMapping}function vf(S,U,$,G,V){U.isScene!==!0&&(U=ut),k.resetTextureUnits();const me=U.fog,be=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,ge=z===null?M.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Vi,Ne=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ie=Q.get(G.envMap||be,Ne),Ve=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,qe=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ke=!!$.morphAttributes.position,ot=!!$.morphAttributes.normal,_t=!!$.morphAttributes.color;let gt=mn;G.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(gt=M.toneMapping);const lt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Nt=lt!==void 0?lt.length:0,Le=b.get(G),Ht=A.state.lights;if(_e===!0&&(Re===!0||S!==B)){const Tt=S===B&&G.id===j;le.setState(G,S,Tt)}let Qe=!1;G.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Ht.state.version||Le.outputColorSpace!==ge||V.isBatchedMesh&&Le.batching===!1||!V.isBatchedMesh&&Le.batching===!0||V.isBatchedMesh&&Le.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Le.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Le.instancing===!1||!V.isInstancedMesh&&Le.instancing===!0||V.isSkinnedMesh&&Le.skinning===!1||!V.isSkinnedMesh&&Le.skinning===!0||V.isInstancedMesh&&Le.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Le.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Le.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Le.instancingMorph===!1&&V.morphTexture!==null||Le.envMap!==Ie||G.fog===!0&&Le.fog!==me||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==le.numPlanes||Le.numIntersection!==le.numIntersection)||Le.vertexAlphas!==Ve||Le.vertexTangents!==qe||Le.morphTargets!==ke||Le.morphNormals!==ot||Le.morphColors!==_t||Le.toneMapping!==gt||Le.morphTargetsCount!==Nt)&&(Qe=!0):(Qe=!0,Le.__version=G.version);let Qt=Le.currentProgram;Qe===!0&&(Qt=Ar(G,U,V));let cn=!1,Qn=!1,vi=!1;const ft=Qt.getUniforms(),Rt=Le.uniforms;if(Pe.useProgram(Qt.program)&&(cn=!0,Qn=!0,vi=!0),G.id!==j&&(j=G.id,Qn=!0),cn||B!==S){Pe.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ft.setValue(L,"projectionMatrix",S.projectionMatrix),ft.setValue(L,"viewMatrix",S.matrixWorldInverse);const Fn=ft.map.cameraPosition;Fn!==void 0&&Fn.setValue(L,Ye.setFromMatrixPosition(S.matrixWorld)),ht.logarithmicDepthBuffer&&ft.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ft.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),B!==S&&(B=S,Qn=!0,vi=!0)}if(Le.needsLights&&(Ht.state.directionalShadowMap.length>0&&ft.setValue(L,"directionalShadowMap",Ht.state.directionalShadowMap,k),Ht.state.spotShadowMap.length>0&&ft.setValue(L,"spotShadowMap",Ht.state.spotShadowMap,k),Ht.state.pointShadowMap.length>0&&ft.setValue(L,"pointShadowMap",Ht.state.pointShadowMap,k)),V.isSkinnedMesh){ft.setOptional(L,V,"bindMatrix"),ft.setOptional(L,V,"bindMatrixInverse");const Tt=V.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),ft.setValue(L,"boneTexture",Tt.boneTexture,k))}V.isBatchedMesh&&(ft.setOptional(L,V,"batchingTexture"),ft.setValue(L,"batchingTexture",V._matricesTexture,k),ft.setOptional(L,V,"batchingIdTexture"),ft.setValue(L,"batchingIdTexture",V._indirectTexture,k),ft.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&ft.setValue(L,"batchingColorTexture",V._colorsTexture,k));const Un=$.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&xe.update(V,$,Qt),(Qn||Le.receiveShadow!==V.receiveShadow)&&(Le.receiveShadow=V.receiveShadow,ft.setValue(L,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Rt.envMapIntensity.value=U.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=s1()),Qn&&(ft.setValue(L,"toneMappingExposure",M.toneMappingExposure),Le.needsLights&&bf(Rt,vi),me&&G.fog===!0&&Ue.refreshFogUniforms(Rt,me),Ue.refreshMaterialUniforms(Rt,G,fe,J,A.state.transmissionRenderTarget[S.id]),hs.upload(L,gl(Le),Rt,k)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(hs.upload(L,gl(Le),Rt,k),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ft.setValue(L,"center",V.center),ft.setValue(L,"modelViewMatrix",V.modelViewMatrix),ft.setValue(L,"normalMatrix",V.normalMatrix),ft.setValue(L,"modelMatrix",V.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Tt=G.uniformsGroups;for(let Fn=0,bi=Tt.length;Fn<bi;Fn++){const _l=Tt[Fn];ye.update(_l,Qt),ye.bind(_l,Qt)}}return Qt}function bf(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function yf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(S,U,$){const G=b.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),b.get(S.texture).__webglTexture=U,b.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:$,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const $=b.get(S);$.__webglFramebuffer=U,$.__useDefaultFramebuffer=U===void 0};const Sf=L.createFramebuffer();this.setRenderTarget=function(S,U=0,$=0){z=S,N=U,F=$;let G=null,V=!1,me=!1;if(S){const ge=b.get(S);if(ge.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(L.FRAMEBUFFER,ge.__webglFramebuffer),I.copy(S.viewport),O.copy(S.scissor),ee=S.scissorTest,Pe.viewport(I),Pe.scissor(O),Pe.setScissorTest(ee),j=-1;return}else if(ge.__webglFramebuffer===void 0)k.setupRenderTarget(S);else if(ge.__hasExternalTextures)k.rebindTextures(S,b.get(S.texture).__webglTexture,b.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ve=S.depthTexture;if(ge.__boundDepthTexture!==Ve){if(Ve!==null&&b.has(Ve)&&(S.width!==Ve.image.width||S.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(S)}}const Ne=S.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(me=!0);const Ie=b.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?G=Ie[U][$]:G=Ie[U],V=!0):S.samples>0&&k.useMultisampledRTT(S)===!1?G=b.get(S).__webglMultisampledFramebuffer:Array.isArray(Ie)?G=Ie[$]:G=Ie,I.copy(S.viewport),O.copy(S.scissor),ee=S.scissorTest}else I.copy(X).multiplyScalar(fe).floor(),O.copy(re).multiplyScalar(fe).floor(),ee=se;if($!==0&&(G=Sf),Pe.bindFramebuffer(L.FRAMEBUFFER,G)&&Pe.drawBuffers(S,G),Pe.viewport(I),Pe.scissor(O),Pe.setScissorTest(ee),V){const ge=b.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,$)}else if(me){const ge=U;for(let Ne=0;Ne<S.textures.length;Ne++){const Ie=b.get(S.textures[Ne]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ne,Ie.__webglTexture,$,ge)}}else if(S!==null&&$!==0){const ge=b.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ge.__webglTexture,$)}j=-1},this.readRenderTargetPixels=function(S,U,$,G,V,me,be,ge=0){if(!(S&&S.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=b.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0&&(Ne=Ne[be]),Ne){Pe.bindFramebuffer(L.FRAMEBUFFER,Ne);try{const Ie=S.textures[ge],Ve=Ie.format,qe=Ie.type;if(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ge),!ht.textureFormatReadable(Ve)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(qe)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-G&&$>=0&&$<=S.height-V&&L.readPixels(U,$,G,V,ue.convert(Ve),ue.convert(qe),me)}finally{const Ie=z!==null?b.get(z).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(S,U,$,G,V,me,be,ge=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=b.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0&&(Ne=Ne[be]),Ne)if(U>=0&&U<=S.width-G&&$>=0&&$<=S.height-V){Pe.bindFramebuffer(L.FRAMEBUFFER,Ne);const Ie=S.textures[ge],Ve=Ie.format,qe=Ie.type;if(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ge),!ht.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ke),L.bufferData(L.PIXEL_PACK_BUFFER,me.byteLength,L.STREAM_READ),L.readPixels(U,$,G,V,ue.convert(Ve),ue.convert(qe),0);const ot=z!==null?b.get(z).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,ot);const _t=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Px(L,_t,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ke),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,me),L.deleteBuffer(ke),L.deleteSync(_t),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,$=0){const G=Math.pow(2,-$),V=Math.floor(S.image.width*G),me=Math.floor(S.image.height*G),be=U!==null?U.x:0,ge=U!==null?U.y:0;k.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,$,0,0,be,ge,V,me),Pe.unbindTexture()};const Mf=L.createFramebuffer(),Ef=L.createFramebuffer();this.copyTextureToTexture=function(S,U,$=null,G=null,V=0,me=0){let be,ge,Ne,Ie,Ve,qe,ke,ot,_t;const gt=S.isCompressedTexture?S.mipmaps[me]:S.image;if($!==null)be=$.max.x-$.min.x,ge=$.max.y-$.min.y,Ne=$.isBox3?$.max.z-$.min.z:1,Ie=$.min.x,Ve=$.min.y,qe=$.isBox3?$.min.z:0;else{const Rt=Math.pow(2,-V);be=Math.floor(gt.width*Rt),ge=Math.floor(gt.height*Rt),S.isDataArrayTexture?Ne=gt.depth:S.isData3DTexture?Ne=Math.floor(gt.depth*Rt):Ne=1,Ie=0,Ve=0,qe=0}G!==null?(ke=G.x,ot=G.y,_t=G.z):(ke=0,ot=0,_t=0);const lt=ue.convert(U.format),Nt=ue.convert(U.type);let Le;U.isData3DTexture?(k.setTexture3D(U,0),Le=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(k.setTexture2DArray(U,0),Le=L.TEXTURE_2D_ARRAY):(k.setTexture2D(U,0),Le=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Ht=L.getParameter(L.UNPACK_ROW_LENGTH),Qe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Qt=L.getParameter(L.UNPACK_SKIP_PIXELS),cn=L.getParameter(L.UNPACK_SKIP_ROWS),Qn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,gt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ie),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ve),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qe);const vi=S.isDataArrayTexture||S.isData3DTexture,ft=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const Rt=b.get(S),Un=b.get(U),Tt=b.get(Rt.__renderTarget),Fn=b.get(Un.__renderTarget);Pe.bindFramebuffer(L.READ_FRAMEBUFFER,Tt.__webglFramebuffer),Pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let bi=0;bi<Ne;bi++)vi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,b.get(S).__webglTexture,V,qe+bi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,b.get(U).__webglTexture,me,_t+bi)),L.blitFramebuffer(Ie,Ve,be,ge,ke,ot,be,ge,L.DEPTH_BUFFER_BIT,L.NEAREST);Pe.bindFramebuffer(L.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||b.has(S)){const Rt=b.get(S),Un=b.get(U);Pe.bindFramebuffer(L.READ_FRAMEBUFFER,Mf),Pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ef);for(let Tt=0;Tt<Ne;Tt++)vi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.__webglTexture,V,qe+Tt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Rt.__webglTexture,V),ft?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Un.__webglTexture,me,_t+Tt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Un.__webglTexture,me),V!==0?L.blitFramebuffer(Ie,Ve,be,ge,ke,ot,be,ge,L.COLOR_BUFFER_BIT,L.NEAREST):ft?L.copyTexSubImage3D(Le,me,ke,ot,_t+Tt,Ie,Ve,be,ge):L.copyTexSubImage2D(Le,me,ke,ot,Ie,Ve,be,ge);Pe.bindFramebuffer(L.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ft?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Le,me,ke,ot,_t,be,ge,Ne,lt,Nt,gt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Le,me,ke,ot,_t,be,ge,Ne,lt,gt.data):L.texSubImage3D(Le,me,ke,ot,_t,be,ge,Ne,lt,Nt,gt):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,me,ke,ot,be,ge,lt,Nt,gt.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,me,ke,ot,gt.width,gt.height,lt,gt.data):L.texSubImage2D(L.TEXTURE_2D,me,ke,ot,be,ge,lt,Nt,gt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ht),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Qt),L.pixelStorei(L.UNPACK_SKIP_ROWS,cn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Qn),me===0&&U.generateMipmaps&&L.generateMipmap(Le),Pe.unbindTexture()},this.initRenderTarget=function(S){b.get(S).__webglFramebuffer===void 0&&k.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?k.setTextureCube(S,0):S.isData3DTexture?k.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?k.setTexture2DArray(S,0):k.setTexture2D(S,0),Pe.unbindTexture()},this.resetState=function(){N=0,F=0,z=null,Pe.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}function gf({className:n,...e}){const{theme:t}=Hi(),i=P.useRef(null),r=P.useRef(null);return P.useEffect(()=>{if(!i.current)return;const s=150,a=40,o=60,d=new qx;d.fog=new cl(16777215,2e3,1e4);const c=new Zt(60,window.innerWidth/window.innerHeight,1,1e4);c.position.set(0,355,1220);const u=new a1({alpha:!0,antialias:!0});u.setPixelRatio(window.devicePixelRatio),u.setSize(window.innerWidth,window.innerHeight),u.setClearColor(d.fog.color,0),i.current.appendChild(u.domElement);const h=[],f=[],g=new ln;for(let E=0;E<a;E++)for(let A=0;A<o;A++){const T=E*s-a*s/2,C=0,v=A*s-o*s/2;h.push(T,C,v),t==="dark"?f.push(200,200,200):f.push(0,0,0)}g.setAttribute("position",new an(h,3)),g.setAttribute("color",new an(f,3));const p=new rf({size:8,vertexColors:!0,transparent:!0,opacity:.8,sizeAttenuation:!0}),_=new Uc(g,p);d.add(_);let m=0,x=0;const y=()=>{x=requestAnimationFrame(y);const E=g.attributes.position,A=E.array;let T=0;for(let v=0;v<a;v++)for(let M=0;M<o;M++){const H=T*3;A[H+1]=Math.sin((v+m)*.3)*50+Math.sin((M+m)*.5)*50,T++}E.needsUpdate=!0,p.uniforms,u.render(d,c),m+=.03},w=()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",w),y(),r.current={scene:d,camera:c,renderer:u,particles:[_],animationId:x,count:m},()=>{window.removeEventListener("resize",w),r.current&&(cancelAnimationFrame(r.current.animationId),r.current.scene.traverse(E=>{E instanceof Uc&&(E.geometry.dispose(),Array.isArray(E.material)?E.material.forEach(A=>A.dispose()):E.material.dispose())}),r.current.renderer.dispose(),i.current&&r.current.renderer.domElement&&i.current.removeChild(r.current.renderer.domElement))}},[t]),l.jsx("div",{ref:i,className:it("pointer-events-none fixed inset-0 -z-10",n),...e})}function o1({onGetStarted:n}){const e=Af(),t=async(i,r)=>{r.offset.y<-100||r.velocity.y<-500?(await e.start({y:"-100vh",opacity:0,transition:{duration:.4,ease:"easeInOut"}}),n()):e.start({y:0,transition:{type:"spring",bounce:.4,duration:.6}})};return l.jsxs(pe.div,{animate:e,drag:"y",dragConstraints:{top:0,bottom:0},dragElastic:{top:.6,bottom:.1},onDragEnd:t,className:"relative z-50 h-[100dvh] w-full overflow-hidden bg-white dark:bg-slate-950 text-slate-900 dark:text-white flex flex-col touch-none cursor-grab active:cursor-grabbing font-sans transition-colors duration-300",children:[l.jsx(gf,{className:"absolute inset-0 z-0 pointer-events-none"}),l.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-start flex-1 w-full max-w-4xl px-4 pt-[22vh] mx-auto text-center select-none",children:[l.jsx("div",{"aria-hidden":"true",className:it("pointer-events-none absolute top-[30%] left-1/2 size-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full","bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_50%)]","blur-[100px]")}),l.jsx("h1",{className:"relative z-20 mb-6 font-sans text-6xl font-extrabold tracking-tight text-transparent drop-shadow-sm md:text-8xl bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 transition-colors",children:"DataLens"}),l.jsx("p",{className:"max-w-2xl mx-auto mb-12 text-lg font-medium tracking-wide md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed transition-colors",children:"Unlock the power of multimodal AI to turn your raw data into compelling stories and interactive insights."}),l.jsxs("button",{onClick:async()=>{await e.start({y:"-100vh",opacity:0,transition:{duration:.4,ease:"easeInOut"}}),n()},className:"group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[1.1rem] font-medium text-white transition-all duration-300 bg-emerald-600 rounded-full hover:bg-emerald-500 hover:scale-105 active:scale-95 z-20 shadow-none border border-transparent",children:[l.jsx("span",{children:"Get Started"}),l.jsx(fd,{className:"w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"}),l.jsx("div",{className:"absolute inset-0 rounded-full bg-white/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]})]}),l.jsxs("div",{className:"absolute inset-x-0 bottom-10 flex flex-col items-center gap-1.5 text-slate-500 dark:text-slate-400 animate-pulse pointer-events-none select-none z-10 transition-colors",children:[l.jsx("span",{className:"text-xs font-bold tracking-[0.2em] uppercase",children:"Swipe Up"}),l.jsx(Zf,{className:"w-6 h-6",strokeWidth:2})]})]})}function l1(){const{loginWithGoogle:n,loginWithEmail:e,registerWithEmail:t,continueAsGuest:i,isLoading:r,error:s,clearError:a}=Kn(),[o,d]=P.useState("google"),[c,u]=P.useState("login"),[h,f]=P.useState(""),[g,p]=P.useState(""),[_,m]=P.useState(""),[x,y]=P.useState(!1),[w,E]=P.useState(""),A=w||s,T=async M=>{if(M.credential){a(),E("");try{await n(M.credential)}catch{}}},C=async M=>{if(M.preventDefault(),E(""),a(),c==="register"){if(!h.trim()){E("Please enter your name.");return}if(_.length<6){E("Password must be at least 6 characters.");return}try{await t(g.trim(),h.trim(),_)}catch{}}else try{await e(g.trim(),_)}catch{}},v=M=>{u(M),E(""),a(),m("")};return l.jsxs(pe.div,{initial:{opacity:0},animate:{opacity:1},className:"relative h-[100dvh] w-full overflow-hidden bg-white dark:bg-slate-950 text-slate-900 dark:text-white flex flex-col font-sans transition-colors duration-300",children:[l.jsx(gf,{className:"absolute inset-0 z-0 pointer-events-none"}),l.jsx("div",{"aria-hidden":"true",className:it("pointer-events-none absolute top-1/2 left-1/2 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full","bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),transparent_60%)]","blur-[80px]")}),l.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center flex-1 w-full max-w-md px-6 mx-auto gap-7",children:[l.jsxs("div",{className:"text-center",children:[l.jsx("h1",{className:"text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 mb-2",children:"DataLens"}),l.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400",children:"Turn raw data into compelling AI-powered stories."})]}),l.jsxs("div",{className:"w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden",children:[l.jsx("div",{className:"flex border-b border-slate-100 dark:border-slate-800",children:["google","email"].map(M=>l.jsx("button",{onClick:()=>{d(M),E(""),a()},className:it("flex-1 py-3 text-sm font-semibold transition-colors",o===M?"text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-500":"text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"),children:M==="google"?"Google":"Email"},M))}),l.jsxs("div",{className:"p-7",children:[l.jsx(mt,{children:A&&l.jsxs(pe.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"mb-4 flex items-start gap-2 px-3 py-2.5 rounded-lg bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm",children:[l.jsx(md,{size:15,className:"mt-0.5 flex-shrink-0"}),l.jsx("span",{children:A})]})}),l.jsxs(mt,{mode:"wait",children:[o==="google"&&l.jsxs(pe.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},exit:{opacity:0,x:-10},className:"flex flex-col items-center gap-4",children:[l.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400 text-center",children:"Sign in securely with your Google account."}),l.jsx(Vf,{onSuccess:T,onError:()=>E("Google sign-in failed. Please try again."),theme:"outline",size:"large",shape:"pill",text:"signin_with"})]},"google"),o==="email"&&l.jsxs(pe.div,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},children:[l.jsx("div",{className:"flex gap-1 p-1 mb-5 bg-slate-100 dark:bg-slate-800/60 rounded-xl",children:["login","register"].map(M=>l.jsx("button",{onClick:()=>v(M),className:it("flex-1 py-1.5 text-sm font-medium rounded-lg transition-all",c===M?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm":"text-slate-500 dark:text-slate-400"),children:M==="login"?"Sign In":"Create Account"},M))}),l.jsxs("form",{onSubmit:C,className:"flex flex-col gap-3",children:[l.jsx(mt,{children:c==="register"&&l.jsx(pe.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:l.jsx(Pa,{icon:l.jsx(Ed,{size:15}),type:"text",placeholder:"Full name",value:h,onChange:f,required:!0})})}),l.jsx(Pa,{icon:l.jsx(bd,{size:15}),type:"email",placeholder:"Email address",value:g,onChange:p,required:!0}),l.jsxs("div",{className:"relative",children:[l.jsx(Pa,{icon:l.jsx(ch,{size:15}),type:x?"text":"password",placeholder:"Password",value:_,onChange:m,required:!0}),l.jsx("button",{type:"button",onClick:()=>y(M=>!M),className:"absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300",children:x?l.jsx(nh,{size:15}):l.jsx(ih,{size:15})})]}),l.jsx("button",{type:"submit",disabled:r,className:"mt-1 flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 text-white font-semibold text-sm transition-colors",children:r?l.jsx(ps,{size:16,className:"animate-spin"}):c==="login"?"Sign In":"Create Account"})]})]},"email")]}),l.jsxs("div",{className:"flex items-center gap-3 my-5",children:[l.jsx("div",{className:"flex-1 h-px bg-slate-100 dark:bg-slate-800"}),l.jsx("span",{className:"text-xs text-slate-400",children:"or"}),l.jsx("div",{className:"flex-1 h-px bg-slate-100 dark:bg-slate-800"})]}),l.jsx("button",{onClick:i,className:"w-full py-2.5 text-sm font-medium text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors",children:"Continue as Guest"}),l.jsx("p",{className:"mt-2 text-xs text-slate-400 dark:text-slate-500 text-center",children:"Guest sessions are temporary and not saved across visits."})]})]})]})]})}function Pa({icon:n,type:e,placeholder:t,value:i,onChange:r,required:s}){return l.jsxs("div",{className:"flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus-within:border-emerald-500/60 transition-colors",children:[l.jsx("span",{className:"text-slate-400 flex-shrink-0",children:n}),l.jsx("input",{type:e,placeholder:t,value:i,onChange:a=>r(a.target.value),required:s,className:"flex-1 bg-transparent text-sm text-slate-900 dark:text-white outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"})]})}function c1(){const{theme:n}=Hi(),{user:e,isGuest:t}=Kn(),[i,r]=P.useState(!1);return mr.useEffect(()=>{n==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[n]),!e&&!t?l.jsx(l1,{}):i?l.jsxs("div",{className:"flex flex-col h-screen overflow-hidden transition-colors duration-300 bg-slate-50 dark:bg-[#020617]",children:[l.jsx(Yh,{}),l.jsx(Yg,{})]}):l.jsx(o1,{onGetStarted:()=>r(!0)})}const xf=document.getElementById("root");if(!xf)throw new Error('Root element not found. Ensure index.html has <div id="root"></div>');const d1="844382502061-0414tjcsv2h3u5augjjmgurc1kn6jp97.apps.googleusercontent.com";La.createRoot(xf).render(l.jsx(mr.StrictMode,{children:l.jsx(Of,{clientId:d1,children:l.jsx(c1,{})})}));
//# sourceMappingURL=index-X2FhTewt.js.map
