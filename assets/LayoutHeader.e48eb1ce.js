import{k as H,h as b,c as p,l as Q,r as w,m as Re,o as F,n as M,p as Qe,q as ne,g as z,t as V,i as U,u as B,v as X,w as k,x as We,y as Ve,z as ot,A as Oe,B as re,C as lt,D as Ae,E as at,G as it,H as N,I,a as rt,J as st,K as ut,L as ct,M as De,O as pe,Q as be,R as dt,S as xe,U as ft,V as vt,W as se,X as mt,Y as ht,Z as ue,_ as gt,$ as pt,a0 as bt,a1 as xt,a2 as Lt,a3 as yt,a4 as qt,a5 as wt,a6 as Le,a7 as St,a8 as kt,a9 as Ct,aa as _t,ab as Fe,ac as $t,ad as Tt,ae as Ht,af as ye,ag as Et,ah as D,ai as qe,F as zt,aj as Pt,ak as oe,al as W,am as we,an as Bt,ao as Mt,ap as le,aq as Rt,d as Qt,ar as Wt,as as Se,f as P,at as A}from"./index.b3f3d284.js";import{u as ke}from"./vue-i18n.runtime.78f294b7.js";var Vt=H({name:"QSpace",setup(){const e=b("div",{class:"q-space"});return()=>e}}),Ot=H({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:l}){const o=p(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>b("div",{class:o.value,role:"toolbar"},Q(l.default))}});function At(){const e=w(!Re.value);return e.value===!1&&F(()=>{e.value=!0}),{isHydrated:e}}const Ie=typeof ResizeObserver!="undefined",Ce=Ie===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ae=H({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:l}){let o=null,n,t={width:-1,height:-1};function r(u){u===!0||e.debounce===0||e.debounce==="0"?i():o===null&&(o=setTimeout(i,e.debounce))}function i(){if(o!==null&&(clearTimeout(o),o=null),n){const{offsetWidth:u,offsetHeight:s}=n;(u!==t.width||s!==t.height)&&(t={width:u,height:s},l("resize",t))}}const{proxy:c}=z();if(c.trigger=r,Ie===!0){let u;const s=d=>{n=c.$el.parentNode,n?(u=new ResizeObserver(r),u.observe(n),i()):d!==!0&&ne(()=>{s(!0)})};return F(()=>{s()}),M(()=>{o!==null&&clearTimeout(o),u!==void 0&&(u.disconnect!==void 0?u.disconnect():n&&u.unobserve(n))}),Qe}else{let d=function(){o!==null&&(clearTimeout(o),o=null),s!==void 0&&(s.removeEventListener!==void 0&&s.removeEventListener("resize",r,V.passive),s=void 0)},f=function(){d(),n&&n.contentDocument&&(s=n.contentDocument.defaultView,s.addEventListener("resize",r,V.passive),i())};const{isHydrated:u}=At();let s;return F(()=>{ne(()=>{n=c.$el,n&&f()})}),M(d),()=>{if(u.value===!0)return b("object",{class:"q--avoid-card-border",style:Ce.style,tabindex:-1,type:"text/html",data:Ce.url,"aria-hidden":"true",onLoad:f})}}}}),Dt=H({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:o}){const{proxy:{$q:n}}=z(),t=U(X,B);if(t===B)return console.error("QHeader needs to be child of QLayout"),B;const r=w(parseInt(e.heightHint,10)),i=w(!0),c=p(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||n.platform.is.ios&&t.isContainer.value===!0),u=p(()=>{if(e.modelValue!==!0)return 0;if(c.value===!0)return i.value===!0?r.value:0;const h=r.value-t.scroll.value.position;return h>0?h:0}),s=p(()=>e.modelValue!==!0||c.value===!0&&i.value!==!0),d=p(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),f=p(()=>"q-header q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),L=p(()=>{const h=t.rows.value.top,m={};return h[0]==="l"&&t.left.space===!0&&(m[n.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),h[2]==="r"&&t.right.space===!0&&(m[n.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),m});function a(h,m){t.update("header",h,m)}function v(h,m){h.value!==m&&(h.value=m)}function q({height:h}){v(r,h),a("size",h)}function C(h){d.value===!0&&v(i,!0),o("focusin",h)}k(()=>e.modelValue,h=>{a("space",h),v(i,!0),t.animate()}),k(u,h=>{a("offset",h)}),k(()=>e.reveal,h=>{h===!1&&v(i,e.modelValue)}),k(i,h=>{t.animate(),o("reveal",h)}),k(t.scroll,h=>{e.reveal===!0&&v(i,h.direction==="up"||h.position<=e.revealOffset||h.position-h.inflectionPoint<100)});const _={};return t.instances.header=_,e.modelValue===!0&&a("size",r.value),a("space",e.modelValue),a("offset",u.value),M(()=>{t.instances.header===_&&(t.instances.header=void 0,a("size",0),a("offset",0),a("space",!1))}),()=>{const h=We(l.default,[]);return e.elevated===!0&&h.push(b("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),h.push(b(ae,{debounce:0,onResize:q})),b("header",{class:f.value,style:L.value,onFocusin:C},h)}}}),Ft=H({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:o}}=z(),n=U(X,B);if(n===B)return console.error("QPageContainer needs to be child of QLayout"),B;Ve(ot,!0);const t=p(()=>{const r={};return n.header.space===!0&&(r.paddingTop=`${n.header.size}px`),n.right.space===!0&&(r[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(r.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(r[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),r});return()=>b("div",{class:"q-page-container",style:t.value},Q(l.default))}});const _e={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function It(){const{props:e,proxy:{$q:l}}=z(),o=U(X,B);if(o===B)return console.error("QPageSticky needs to be child of QLayout"),B;const n=p(()=>{const f=e.position;return{top:f.indexOf("top")!==-1,right:f.indexOf("right")!==-1,bottom:f.indexOf("bottom")!==-1,left:f.indexOf("left")!==-1,vertical:f==="top"||f==="bottom",horizontal:f==="left"||f==="right"}}),t=p(()=>o.header.offset),r=p(()=>o.right.offset),i=p(()=>o.footer.offset),c=p(()=>o.left.offset),u=p(()=>{let f=0,L=0;const a=n.value,v=l.lang.rtl===!0?-1:1;a.top===!0&&t.value!==0?L=`${t.value}px`:a.bottom===!0&&i.value!==0&&(L=`${-i.value}px`),a.left===!0&&c.value!==0?f=`${v*c.value}px`:a.right===!0&&r.value!==0&&(f=`${-v*r.value}px`);const q={transform:`translate(${f}, ${L})`};return e.offset&&(q.margin=`${e.offset[1]}px ${e.offset[0]}px`),a.vertical===!0?(c.value!==0&&(q[l.lang.rtl===!0?"right":"left"]=`${c.value}px`),r.value!==0&&(q[l.lang.rtl===!0?"left":"right"]=`${r.value}px`)):a.horizontal===!0&&(t.value!==0&&(q.top=`${t.value}px`),i.value!==0&&(q.bottom=`${i.value}px`)),q}),s=p(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function d(f){const L=Q(f.default);return b("div",{class:s.value,style:u.value},e.expand===!0?L:[b("div",L)])}return{$layout:o,getStickyContent:d}}var Nt=H({name:"QPageScroller",props:{..._e,scrollOffset:{type:Number,default:1e3},reverse:Boolean,duration:{type:Number,default:300},offset:{..._e.offset,default:()=>[18,18]}},emits:["click"],setup(e,{slots:l,emit:o}){const{proxy:{$q:n}}=z(),{$layout:t,getStickyContent:r}=It(),i=w(null);let c;const u=p(()=>t.height.value-(t.isContainer.value===!0?t.containerHeight.value:n.screen.height));function s(){return e.reverse===!0?u.value-t.scroll.value.position>e.scrollOffset:t.scroll.value.position>e.scrollOffset}const d=w(s());function f(){const C=s();d.value!==C&&(d.value=C)}function L(){e.reverse===!0?c===void 0&&(c=k(u,f)):a()}k(t.scroll,f),k(()=>e.reverse,L);function a(){c!==void 0&&(c(),c=void 0)}function v(C){const _=re(t.isContainer.value===!0?i.value:t.rootRef.value);lt(_,e.reverse===!0?t.height.value:0,e.duration),o("click",C)}function q(){return d.value===!0?b("div",{ref:i,class:"q-page-scroller",onClick:v},r(l)):null}return L(),M(a),()=>b(Oe,{name:"q-transition--fade"},q)}});const{passive:$e}=V,Kt=["both","horizontal","vertical"];var jt=H({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Kt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:Ae},emits:["scroll"],setup(e,{emit:l}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,t,r;k(()=>e.scrollTarget,()=>{u(),c()});function i(){n!==null&&n();const f=Math.max(0,at(t)),L=it(t),a={top:f-o.position.top,left:L-o.position.left};if(e.axis==="vertical"&&a.top===0||e.axis==="horizontal"&&a.left===0)return;const v=Math.abs(a.top)>=Math.abs(a.left)?a.top<0?"up":"down":a.left<0?"left":"right";o.position={top:f,left:L},o.directionChanged=o.direction!==v,o.delta=a,o.directionChanged===!0&&(o.direction=v,o.inflectionPoint=o.position),l("scroll",{...o})}function c(){t=re(r,e.scrollTarget),t.addEventListener("scroll",s,$e),s(!0)}function u(){t!==void 0&&(t.removeEventListener("scroll",s,$e),t=void 0)}function s(f){if(f===!0||e.debounce===0||e.debounce==="0")i();else if(n===null){const[L,a]=e.debounce?[setTimeout(i,e.debounce),clearTimeout]:[requestAnimationFrame(i),cancelAnimationFrame];n=()=>{a(L),n=null}}}const{proxy:d}=z();return k(()=>d.$q.lang.rtl,i),F(()=>{r=d.$el.parentNode,c()}),M(()=>{n!==null&&n(),u()}),Object.assign(d,{trigger:s,getPosition:()=>o}),Qe}}),Ut=H({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:o}){const{proxy:{$q:n}}=z(),t=w(null),r=w(n.screen.height),i=w(e.container===!0?0:n.screen.width),c=w({position:0,direction:"down",inflectionPoint:0}),u=w(0),s=w(Re.value===!0?0:N()),d=p(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),f=p(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),L=p(()=>s.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),a=p(()=>s.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function v(g){if(e.container===!0||document.qScrollPrevented!==!0){const y={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};c.value=y,e.onScroll!==void 0&&o("scroll",y)}}function q(g){const{height:y,width:$}=g;let S=!1;r.value!==y&&(S=!0,r.value=y,e.onScrollHeight!==void 0&&o("scrollHeight",y),_()),i.value!==$&&(S=!0,i.value=$),S===!0&&e.onResize!==void 0&&o("resize",g)}function C({height:g}){u.value!==g&&(u.value=g,_())}function _(){if(e.container===!0){const g=r.value>u.value?N():0;s.value!==g&&(s.value=g)}}let h=null;const m={instances:{},view:p(()=>e.view),isContainer:p(()=>e.container),rootRef:t,height:r,containerHeight:u,scrollbarWidth:s,totalWidth:p(()=>i.value+s.value),rows:p(()=>{const g=e.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:I({size:0,offset:0,space:!1}),right:I({size:300,offset:0,space:!1}),footer:I({size:0,offset:0,space:!1}),left:I({size:300,offset:0,space:!1}),scroll:c,animate(){h!==null?clearTimeout(h):document.body.classList.add("q-body--layout-animate"),h=setTimeout(()=>{h=null,document.body.classList.remove("q-body--layout-animate")},155)},update(g,y,$){m[g][y]=$}};if(Ve(X,m),N()>0){let $=function(){g=null,y.classList.remove("hide-scrollbar")},S=function(){if(g===null){if(y.scrollHeight>n.screen.height)return;y.classList.add("hide-scrollbar")}else clearTimeout(g);g=setTimeout($,300)},T=function(E){g!==null&&E==="remove"&&(clearTimeout(g),$()),window[`${E}EventListener`]("resize",S)},g=null;const y=document.body;k(()=>e.container!==!0?"add":"remove",T),e.container!==!0&&T("add"),rt(()=>{T("remove")})}return()=>{const g=st(l.default,[b(jt,{onScroll:v}),b(ae,{onResize:q})]),y=b("div",{class:d.value,style:f.value,ref:e.container===!0?void 0:t,tabindex:-1},g);return e.container===!0?b("div",{class:"q-layout-container overflow-hidden",ref:t},[b(ae,{onResize:C}),b("div",{class:"absolute-full",style:L.value},[b("div",{class:"scroll",style:a.value},[y])])]):y}}});function Xt(){return U(ut)}const Yt="M8.21 12L6.88 12.89V11.11L8.21 12M11.47 9.82V7.34L7.31 10.12L9.16 11.36L11.47 9.82M16.7 10.12L12.53 7.34V9.82L14.84 11.36L16.7 10.12M7.31 13.88L11.47 16.66V14.18L9.16 12.64L7.31 13.88M12.53 14.18V16.66L16.7 13.88L14.84 12.64L12.53 14.18M12 10.74L10.12 12L12 13.26L13.88 12L12 10.74M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12M18.18 10.12C18.18 10.09 18.18 10.07 18.18 10.05L18.17 10L18.17 10L18.16 9.95C18.15 9.94 18.15 9.93 18.14 9.91L18.13 9.89L18.11 9.85L18.1 9.83L18.08 9.8L18.06 9.77L18.03 9.74L18 9.72L18 9.7L17.96 9.68L17.95 9.67L12.3 5.91C12.12 5.79 11.89 5.79 11.71 5.91L6.05 9.67L6.05 9.68L6 9.7C6 9.71 6 9.72 6 9.72L5.97 9.74L5.94 9.77L5.93 9.8L5.9 9.83L5.89 9.85L5.87 9.89L5.86 9.91L5.84 9.95L5.84 10L5.83 10L5.82 10.05C5.82 10.07 5.82 10.09 5.82 10.12V13.88C5.82 13.91 5.82 13.93 5.82 13.95L5.83 14L5.84 14L5.84 14.05C5.85 14.06 5.85 14.07 5.86 14.09L5.87 14.11L5.89 14.15L5.9 14.17L5.92 14.2L5.94 14.23C5.95 14.24 5.96 14.25 5.97 14.26L6 14.28L6 14.3L6.04 14.32L6.05 14.33L11.71 18.1C11.79 18.16 11.9 18.18 12 18.18C12.1 18.18 12.21 18.15 12.3 18.1L17.95 14.33L17.96 14.32L18 14.3L18 14.28L18.03 14.26L18.06 14.23L18.08 14.2L18.1 14.17L18.11 14.15L18.13 14.11L18.14 14.09L18.16 14.05L18.16 14L18.17 14L18.18 13.95C18.18 13.93 18.18 13.91 18.18 13.88V10.12M17.12 12.89V11.11L15.79 12L17.12 12.89Z",Zt="M7,10L12,15L17,10H7Z",Gt="M10,17L15,12L10,7V17Z",Jt={name:"Servi\xE7os",mq:750,children:[{header:"Servi\xE7os"},{name:"Identidade Visual",path:"/"},{name:"Marketing Digital",children:[{header:"Marketing Digital"},{name:"Item 1",path:"/"},{name:"Item 2",path:"/"},{name:"Item 3",path:"/"}]},{name:"Desenvolvimento de Sites",path:"/"}]},Ne=[{name:"In\xEDcio",mq:600,path:"/"},{name:"Loja",mq:600,path:"/"},Jt,{name:"Sobre a Nairo",mq:600,path:"/"}],en=[{icon:Yt,children:[...Ne]}];function tn(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ct.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const nn={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},on={...nn,contextMenu:Boolean};function ln({showing:e,avoidEmit:l,configureAnchorEl:o}){const{props:n,proxy:t,emit:r}=z(),i=w(null);let c=null;function u(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const s={};o===void 0&&(Object.assign(s,{hide(a){t.hide(a)},toggle(a){t.toggle(a),a.qAnchorHandled=!0},toggleKey(a){De(a,13)===!0&&s.toggle(a)},contextClick(a){t.hide(a),pe(a),ne(()=>{t.show(a),a.qAnchorHandled=!0})},prevent:pe,mobileTouch(a){if(s.mobileCleanup(a),u(a)!==!0)return;t.hide(a),i.value.classList.add("non-selectable");const v=a.target;be(s,"anchor",[[v,"touchmove","mobileCleanup","passive"],[v,"touchend","mobileCleanup","passive"],[v,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),c=setTimeout(()=>{c=null,t.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),c!==null&&(clearTimeout(c),c=null),e.value===!0&&a!==void 0&&tn()}}),o=function(a=n.contextMenu){if(n.noParentEvent===!0||i.value===null)return;let v;a===!0?t.$q.platform.is.mobile===!0?v=[[i.value,"touchstart","mobileTouch","passive"]]:v=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:v=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],be(s,"anchor",v)});function d(){dt(s,"anchor")}function f(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;o()}function L(){if(n.target===!1||n.target===""||t.$el.parentNode===null)i.value=null;else if(n.target===!0)f(t.$el.parentNode);else{let a=n.target;if(typeof n.target=="string")try{a=document.querySelector(n.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,o()):(i.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return k(()=>n.contextMenu,a=>{i.value!==null&&(d(),o(a))}),k(()=>n.target,()=>{i.value!==null&&d(),L()}),k(()=>n.noParentEvent,a=>{i.value!==null&&(a===!0?d():o())}),F(()=>{L(),l!==!0&&n.modelValue===!0&&i.value===null&&r("update:modelValue",!1)}),M(()=>{c!==null&&clearTimeout(c),d()}),{anchorEl:i,canShow:u,anchorEvents:s}}function an(e,l){const o=w(null);let n;function t(c,u){const s=`${u!==void 0?"add":"remove"}EventListener`,d=u!==void 0?u:n;c!==window&&c[s]("scroll",d,V.passive),window[s]("scroll",d,V.passive),n=u}function r(){o.value!==null&&(t(o.value),o.value=null)}const i=k(()=>e.noParentEvent,()=>{o.value!==null&&(r(),l())});return M(i),{localScrollTarget:o,unconfigureScrollTarget:r,changeScrollEvent:t}}const{notPassiveCapture:K}=V,R=[];function j(e){const l=e.target;if(l===void 0||l.nodeType===8||l.classList.contains("no-pointer-events")===!0)return;let o=xe.length-1;for(;o>=0;){const n=xe[o].$;if(n.type.name==="QTooltip"){o--;continue}if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;o--}for(let n=R.length-1;n>=0;n--){const t=R[n];if((t.anchorEl.value===null||t.anchorEl.value.contains(l)===!1)&&(l===document.body||t.innerRef.value!==null&&t.innerRef.value.contains(l)===!1))e.qClickOutside=!0,t.onClickOutside(e);else return}}function rn(e){R.push(e),R.length===1&&(document.addEventListener("mousedown",j,K),document.addEventListener("touchstart",j,K))}function Te(e){const l=R.findIndex(o=>o===e);l!==-1&&(R.splice(l,1),R.length===0&&(document.removeEventListener("mousedown",j,K),document.removeEventListener("touchstart",j,K)))}let He,Ee;function ze(e){const l=e.split(" ");return l.length!==2?!1:["top","center","bottom"].includes(l[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(l[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function sn(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const ie={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{ie[`${e}#ltr`]=e,ie[`${e}#rtl`]=e});function Pe(e,l){const o=e.split(" ");return{vertical:o[0],horizontal:ie[`${o[1]}#${l===!0?"rtl":"ltr"}`]}}function un(e,l){let{top:o,left:n,right:t,bottom:r,width:i,height:c}=e.getBoundingClientRect();return l!==void 0&&(o-=l[1],n-=l[0],r+=l[1],t+=l[0],i+=l[0],c+=l[1]),{top:o,bottom:r,height:c,left:n,right:t,width:i,middle:n+(t-n)/2,center:o+(r-o)/2}}function cn(e,l,o){let{top:n,left:t}=e.getBoundingClientRect();return n+=l.top,t+=l.left,o!==void 0&&(n+=o[1],t+=o[0]),{top:n,bottom:n+1,height:1,left:t,right:t+1,width:1,middle:t,center:n}}function dn(e,l){return{top:0,center:l/2,bottom:l,left:0,middle:e/2,right:e}}function Be(e,l,o,n){return{top:e[o.vertical]-l[n.vertical],left:e[o.horizontal]-l[n.horizontal]}}function Ke(e,l=0){if(e.targetEl===null||e.anchorEl===null||l>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Ke(e,l+1)},10);return}const{targetEl:o,offset:n,anchorEl:t,anchorOrigin:r,selfOrigin:i,absoluteOffset:c,fit:u,cover:s,maxHeight:d,maxWidth:f}=e;if(ft.is.ios===!0&&window.visualViewport!==void 0){const $=document.body.style,{offsetLeft:S,offsetTop:T}=window.visualViewport;S!==He&&($.setProperty("--q-pe-left",S+"px"),He=S),T!==Ee&&($.setProperty("--q-pe-top",T+"px"),Ee=T)}const{scrollLeft:L,scrollTop:a}=o,v=c===void 0?un(t,s===!0?[0,0]:n):cn(t,c,n);Object.assign(o.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:f,maxHeight:d,visibility:"visible"});const{offsetWidth:q,offsetHeight:C}=o,{elWidth:_,elHeight:h}=u===!0||s===!0?{elWidth:Math.max(v.width,q),elHeight:s===!0?Math.max(v.height,C):C}:{elWidth:q,elHeight:C};let m={maxWidth:f,maxHeight:d};(u===!0||s===!0)&&(m.minWidth=v.width+"px",s===!0&&(m.minHeight=v.height+"px")),Object.assign(o.style,m);const g=dn(_,h);let y=Be(v,g,r,i);if(c===void 0||n===void 0)ee(y,v,g,r,i);else{const{top:$,left:S}=y;ee(y,v,g,r,i);let T=!1;if(y.top!==$){T=!0;const E=2*n[1];v.center=v.top-=E,v.bottom-=E+2}if(y.left!==S){T=!0;const E=2*n[0];v.middle=v.left-=E,v.right-=E+2}T===!0&&(y=Be(v,g,r,i),ee(y,v,g,r,i))}m={top:y.top+"px",left:y.left+"px"},y.maxHeight!==void 0&&(m.maxHeight=y.maxHeight+"px",v.height>y.maxHeight&&(m.minHeight=m.maxHeight)),y.maxWidth!==void 0&&(m.maxWidth=y.maxWidth+"px",v.width>y.maxWidth&&(m.minWidth=m.maxWidth)),Object.assign(o.style,m),o.scrollTop!==a&&(o.scrollTop=a),o.scrollLeft!==L&&(o.scrollLeft=L)}function ee(e,l,o,n,t){const r=o.bottom,i=o.right,c=N(),u=window.innerHeight-c,s=document.body.clientWidth;if(e.top<0||e.top+r>u)if(t.vertical==="center")e.top=l[n.vertical]>u/2?Math.max(0,u-r):0,e.maxHeight=Math.min(r,u);else if(l[n.vertical]>u/2){const d=Math.min(u,n.vertical==="center"?l.center:n.vertical===t.vertical?l.bottom:l.top);e.maxHeight=Math.min(r,d),e.top=Math.max(0,d-r)}else e.top=Math.max(0,n.vertical==="center"?l.center:n.vertical===t.vertical?l.top:l.bottom),e.maxHeight=Math.min(r,u-e.top);if(e.left<0||e.left+i>s)if(e.maxWidth=Math.min(i,s),t.horizontal==="middle")e.left=l[n.horizontal]>s/2?Math.max(0,s-i):0;else if(l[n.horizontal]>s/2){const d=Math.min(s,n.horizontal==="middle"?l.middle:n.horizontal===t.horizontal?l.right:l.left);e.maxWidth=Math.min(i,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?l.middle:n.horizontal===t.horizontal?l.left:l.right),e.maxWidth=Math.min(i,s-e.left)}var Me=H({name:"QMenu",inheritAttrs:!1,props:{...on,...vt,...se,...mt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:ze},self:{type:String,validator:ze},offset:{type:Array,validator:sn},scrollTarget:Ae,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...ht,"click","escapeKey"],setup(e,{slots:l,emit:o,attrs:n}){let t=null,r,i,c;const u=z(),{proxy:s}=u,{$q:d}=s,f=w(null),L=w(!1),a=p(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),v=ue(e,d),{registerTick:q,removeTick:C}=gt(),{registerTimeout:_}=pt(),{transitionProps:h,transitionStyle:m}=bt(e),{localScrollTarget:g,changeScrollEvent:y,unconfigureScrollTarget:$}=an(e,he),{anchorEl:S,canShow:T}=ln({showing:L}),{hide:E}=xt({showing:L,canShow:T,handleShow:Ze,handleHide:Ge,hideOnRouteChange:a,processOnMount:!0}),{showPortal:ce,hidePortal:de,renderPortal:je}=Lt(u,f,et,"menu"),Y={anchorEl:S,innerRef:f,onClickOutside(x){if(e.persistent!==!0&&L.value===!0)return E(x),(x.type==="touchstart"||x.target.classList.contains("q-dialog__backdrop"))&&Fe(x),!0}},fe=p(()=>Pe(e.anchor||(e.cover===!0?"center middle":"bottom start"),d.lang.rtl)),Ue=p(()=>e.cover===!0?fe.value:Pe(e.self||"top start",d.lang.rtl)),Xe=p(()=>(e.square===!0?" q-menu--square":"")+(v.value===!0?" q-menu--dark q-dark":"")),Ye=p(()=>e.autoClose===!0?{onClick:Je}:{}),ve=p(()=>L.value===!0&&e.persistent!==!0);k(ve,x=>{x===!0?(kt(G),rn(Y)):(Le(G),Te(Y))});function Z(){Ct(()=>{let x=f.value;x&&x.contains(document.activeElement)!==!0&&(x=x.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||x.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||x.querySelector("[autofocus], [data-autofocus]")||x,x.focus({preventScroll:!0}))})}function Ze(x){if(t=e.noRefocus===!1?document.activeElement:null,yt(ge),ce(),he(),r=void 0,x!==void 0&&(e.touchPosition||e.contextMenu)){const J=qt(x);if(J.left!==void 0){const{top:tt,left:nt}=S.value.getBoundingClientRect();r={left:J.left-nt,top:J.top-tt}}}i===void 0&&(i=k(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,O)),e.noFocus!==!0&&document.activeElement.blur(),q(()=>{O(),e.noFocus!==!0&&Z()}),_(()=>{d.platform.is.ios===!0&&(c=e.autoClose,f.value.click()),O(),ce(!0),o("show",x)},e.transitionDuration)}function Ge(x){C(),de(),me(!0),t!==null&&(x===void 0||x.qClickOutside!==!0)&&(((x&&x.type.indexOf("key")===0?t.closest('[tabindex]:not([tabindex^="-"])'):void 0)||t).focus(),t=null),_(()=>{de(!0),o("hide",x)},e.transitionDuration)}function me(x){r=void 0,i!==void 0&&(i(),i=void 0),(x===!0||L.value===!0)&&(wt(ge),$(),Te(Y),Le(G)),x!==!0&&(t=null)}function he(){(S.value!==null||e.scrollTarget!==void 0)&&(g.value=re(S.value,e.scrollTarget),y(g.value,O))}function Je(x){c!==!0?(St(s,x),o("click",x)):c=!1}function ge(x){ve.value===!0&&e.noFocus!==!0&&_t(f.value,x.target)!==!0&&Z()}function G(x){o("escapeKey"),E(x)}function O(){Ke({targetEl:f.value,offset:e.offset,anchorEl:S.value,anchorOrigin:fe.value,selfOrigin:Ue.value,absoluteOffset:r,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function et(){return b(Oe,h.value,()=>L.value===!0?b("div",{role:"menu",...n,ref:f,tabindex:-1,class:["q-menu q-position-engine scroll"+Xe.value,n.class],style:[n.style,m.value],...Ye.value},Q(l.default)):null)}return M(me),Object.assign(s,{focus:Z,updatePosition:O}),je}});const fn=["ul","ol"];var vn=H({name:"QList",props:{...se,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:l}){const o=z(),n=ue(e,o.proxy.$q),t=p(()=>fn.includes(e.tag)?null:"list"),r=p(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(n.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>b(e.tag,{class:r.value,role:t.value},Q(l.default))}}),mn=H({name:"QItem",props:{...se,...$t,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:l,emit:o}){const{proxy:{$q:n}}=z(),t=ue(e,n),{hasLink:r,linkAttrs:i,linkClass:c,linkTag:u,navigateOnClick:s}=Tt(),d=w(null),f=w(null),L=p(()=>e.clickable===!0||r.value===!0||e.tag==="label"),a=p(()=>e.disable!==!0&&L.value===!0),v=p(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(r.value===!0&&e.active===null?c.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),q=p(()=>{if(e.insetLevel===void 0)return null;const m=n.lang.rtl===!0?"Right":"Left";return{["padding"+m]:16+e.insetLevel*56+"px"}});function C(m){a.value===!0&&(f.value!==null&&(m.qKeyEvent!==!0&&document.activeElement===d.value?f.value.focus():document.activeElement===f.value&&d.value.focus()),s(m))}function _(m){if(a.value===!0&&De(m,[13,32])===!0){Fe(m),m.qKeyEvent=!0;const g=new MouseEvent("click",m);g.qKeyEvent=!0,d.value.dispatchEvent(g)}o("keyup",m)}function h(){const m=We(l.default,[]);return a.value===!0&&m.unshift(b("div",{class:"q-focus-helper",tabindex:-1,ref:f})),m}return()=>{const m={ref:d,class:v.value,style:q.value,role:"listitem",onClick:C,onKeyup:_};return a.value===!0?(m.tabindex=e.tabindex||"0",Object.assign(m,i.value)):L.value===!0&&(m["aria-disabled"]="true"),b(u.value,m,h())}}}),te=H({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:l}){const o=p(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>b("div",{class:o.value},Q(l.default))}}),hn=H({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:l}){const o=p(()=>parseInt(e.lines,10)),n=p(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),t=p(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>b("div",{style:t.value,class:n.value},Q(l.default))}});const gn=[0,4];var pn={props:{elements:Array,mqPrefix:String},setup(e){function l(n){return b(vn,{dense:!0,padding:!0},()=>n.map(t=>t.header!==void 0?b(hn,{header:!0},()=>t.header):t.separator===!0?b(Ht,{spaced:!0}):b(mn,{class:`${e.mqPrefix}-${t.mq||"none"}`,clickable:!0,to:t.path,href:t.external?t.path:void 0,target:t.external?"_blank":void 0},()=>{const r=[];return t.icon!==void 0&&r.push(b(te,{side:!0},()=>b(ye,{name:t.icon}))),r.push(b(te,{class:"text-no-wrap"},()=>t.name)),t.children!==void 0&&r.push(b(te,{side:!0,class:"doc-header-menu__arrow"},()=>b(ye,{name:Gt})),b(Me,{anchor:"top right",self:"top left",class:"doc-header-menu doc-technical",cover:Et.lt.sm},()=>l(t.children))),r})))}function o(){return l(e.elements)}return()=>b(Me,{fit:!0,class:"doc-header-menu doc-technical",offset:gn},o)}};const bn={class:"row no-wrap items-center"},xn={__name:"DocHeaderTextLinks",props:{menu:Array,mqPrefix:String,navClass:String},setup(e){const l=e;return(o,n)=>(D(),qe("div",bn,[(D(!0),qe(zt,null,Pt(l.menu,(t,r)=>(D(),oe(le,{key:r,flat:"",class:Mt(["header-btn doc-header-text-links__item",`${l.mqPrefix}-${t.mq||"none"} ${l.navClass}`]),padding:t.children?"8px 8px 8px 16px":"8px 12px",label:t.name,"no-wrap":"",icon:t.icon?"menu":void 0,"icon-right":t.children?we(Zt):void 0,to:t.path,href:t.external?t.path:void 0,target:t.external?"_blank":void 0},{default:W(()=>[t.children?(D(),oe(we(pn),{key:0,elements:t.children,"mq-prefix":l.mqPrefix},null,8,["elements","mq-prefix"])):Bt("",!0)]),_:2},1032,["class","padding","label","icon","icon-right","to","href","target"]))),128))]))}};const Ln=Qt({name:"LayoutHeader",components:{DocHeaderTextLinks:xn},setup(){const e=Wt(),l=w(!1);ke();const{locale:o}=ke({useScope:"global"});return Xt(),localStorage.getItem("locale")&&(o.value=localStorage.getItem("locale")),{router:e,leftDrawerOpen:l,toggleLeftDrawer(){l.value=!l.value},setLocale(n){localStorage.setItem("locale",n),e.go()},locale:o,localeOptions:[{value:"en-US",label:"EN",url:"/img/usa.png"},{value:"pt-BR",label:"PT",url:"/img/brasil.png"}],modal:w(!1),secondaryToolbarLinks:Ne,moreLinks:en}}}),yn={class:"doc-header__links col row items-center no-wrap"},qn={class:"row items-center q-pl-md"};function wn(e,l,o,n,t,r){const i=Se("doc-header-text-links"),c=Se("router-view");return D(),oe(Ut,{view:"hHh lpR fFf"},{default:W(()=>[P(Dt,{class:"header-vidro"},{default:W(()=>[P(Ot,{class:"bar-menu"},{default:W(()=>[l[1]||(l[1]=A("a",{href:"/",class:"btn-logo"},[A("img",{class:"logo-menu",src:"/img/logo.png"})],-1)),P(Vt),A("div",null,[A("div",yn,[P(i,{menu:e.secondaryToolbarLinks,"nav-class":"text-size-14 letter-spacing-100","mq-prefix":"gt"},null,8,["menu"]),P(i,{menu:e.moreLinks,"nav-class":"text-size-14 letter-spacing-100 lt-1000","mq-prefix":"lt"},null,8,["menu"]),A("div",qn,[P(le,{color:"primary",label:"Contato",onClick:l[0]||(l[0]=u=>e.modal=!0)})])])])]),_:1})]),_:1}),P(Ft,null,{default:W(()=>[P(c)]),_:1}),P(Nt,{position:"bottom-right",offset:[20,20]},{default:W(()=>[P(le,{icon:"arrow_upward",round:"",color:"primary"})]),_:1})]),_:1})}var Cn=Rt(Ln,[["render",wn]]);export{Cn as default};