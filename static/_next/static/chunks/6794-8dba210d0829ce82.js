(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6794],{99538:function(e,t,r){"use strict";r.d(t,{F4:function(){return c},iv:function(){return s},xB:function(){return u}});var n=r(86375),o=r(2265),i=r(94645),a=r(7599),l=r(83188);r(56335),r(55487);var u=(0,n.w)(function(e,t){var r=e.styles,u=(0,l.O)([r],void 0,o.useContext(n.T));if(!n.i){for(var s,c=u.name,d=u.styles,f=u.next;void 0!==f;)c+=" "+f.name,d+=f.styles,f=f.next;var p=!0===t.compat,m=t.insert("",{name:c,styles:d},t.sheet,p);return p?null:o.createElement("style",((s={})["data-emotion"]=t.key+"-global "+c,s.dangerouslySetInnerHTML={__html:m},s.nonce=t.sheet.nonce,s))}var v=o.useRef();return(0,a.j)(function(){var e=t.key+"-global",r=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),n=!1,o=document.querySelector('style[data-emotion="'+e+" "+u.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==o&&(n=!0,o.setAttribute("data-emotion",e),r.hydrate([o])),v.current=[r,n],function(){r.flush()}},[t]),(0,a.j)(function(){var e=v.current,r=e[0];if(e[1]){e[1]=!1;return}if(void 0!==u.next&&(0,i.My)(t,u.next,!0),r.tags.length){var n=r.tags[r.tags.length-1].nextElementSibling;r.before=n,r.flush()}t.insert("",u,r,!1)},[t,u.name]),null});function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,l.O)(t)}var c=function(){var e=s.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},5551:function(e,t){"use strict";let r=()=>"undefined"!=typeof window,n=()=>!(!r()||!window.hj),o=(e,...t)=>{if(r()&&window.hj)return window.hj(e,...t);throw Error("Hotjar is not available, make sure init has been called.")},i=(e,t,r)=>{if(!((e,t,r)=>{try{let n=document.getElementById(t)||document.createElement("script");return n.id=t,n.nonce=r,n.innerText=e,n.crossOrigin="anonymous",document.head.appendChild(n),!0}catch(e){return!1}})(`(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:${e},hjsv:${t},hjdebug:${(null==r?void 0:r.debug)||!1}};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,"hotjar-init-script",null==r?void 0:r.nonce)||!n())throw Error("Failed to initialize Hotjar tracking script.")};t.Z={init:(e,t,r)=>{try{return i(e,t,r),!0}catch(e){return console.error("Error:",e),!1}},event:e=>{try{return o("event",e),!0}catch(e){return console.error("Error:",e),!1}},identify:(e,t)=>{try{return o("identify",e,t),!0}catch(e){return console.error("Error:",e),!1}},stateChange:e=>{try{return o("stateChange",e),!0}catch(e){return console.error("Error:",e),!1}},isReady:n}},20202:function(e,t,r){"use strict";r.d(t,{$:function(){return i}});var n=r(13428),o=r(43655);function i(e,t,r){return void 0===e||(0,o.X)(e)?t:(0,n.Z)({},t,{ownerState:(0,n.Z)({},t.ownerState,r)})}},55095:function(e,t,r){"use strict";function n(e,t=[]){if(void 0===e)return{};let r={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&"function"==typeof e[r]&&!t.includes(r)).forEach(t=>{r[t]=e[t]}),r}r.d(t,{_:function(){return n}})},43655:function(e,t,r){"use strict";function n(e){return"string"==typeof e}r.d(t,{X:function(){return n}})},27282:function(e,t,r){"use strict";r.d(t,{y:function(){return d}});var n=r(13428),o=r(20791),i=r(95137),a=r(20202),l=r(57042),u=r(55095);function s(e){if(void 0===e)return{};let t={};return Object.keys(e).filter(t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t])).forEach(r=>{t[r]=e[r]}),t}let c=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function d(e){var t;let{elementType:r,externalSlotProps:d,ownerState:f,skipResolvingSlotProps:p=!1}=e,m=(0,o.Z)(e,c),v=p?{}:"function"==typeof d?d(f,void 0):d,{props:h,internalRef:b}=function(e){let{getSlotProps:t,additionalProps:r,externalSlotProps:o,externalForwardedProps:i,className:a}=e;if(!t){let e=(0,l.Z)(null==r?void 0:r.className,a,null==i?void 0:i.className,null==o?void 0:o.className),t=(0,n.Z)({},null==r?void 0:r.style,null==i?void 0:i.style,null==o?void 0:o.style),u=(0,n.Z)({},r,i,o);return e.length>0&&(u.className=e),Object.keys(t).length>0&&(u.style=t),{props:u,internalRef:void 0}}let c=(0,u._)((0,n.Z)({},i,o)),d=s(o),f=s(i),p=t(c),m=(0,l.Z)(null==p?void 0:p.className,null==r?void 0:r.className,a,null==i?void 0:i.className,null==o?void 0:o.className),v=(0,n.Z)({},null==p?void 0:p.style,null==r?void 0:r.style,null==i?void 0:i.style,null==o?void 0:o.style),h=(0,n.Z)({},p,r,f,d);return m.length>0&&(h.className=m),Object.keys(v).length>0&&(h.style=v),{props:h,internalRef:p.ref}}((0,n.Z)({},m,{externalSlotProps:v})),y=(0,i.Z)(b,null==v?void 0:v.ref,null==(t=e.additionalProps)?void 0:t.ref),g=(0,a.$)(r,(0,n.Z)({},h,{ref:y}),f);return g}},54755:function(e,t,r){"use strict";var n=r(20791),o=r(13428),i=r(2265),a=r(57042),l=r(95600),u=r(99538),s=r(89975),c=r(28702),d=r(41101),f=r(35843),p=r(87927),m=r(12120),v=r(57437);let h=["className","color","value","valueBuffer","variant"],b=e=>e,y,g,E,w,R,C,S=(0,u.F4)(y||(y=b`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),P=(0,u.F4)(g||(g=b`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),T=(0,u.F4)(E||(E=b`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),Z=e=>{let{classes:t,variant:r,color:n}=e,o={root:["root",`color${(0,c.Z)(n)}`,r],dashed:["dashed",`dashedColor${(0,c.Z)(n)}`],bar1:["bar",`barColor${(0,c.Z)(n)}`,("indeterminate"===r||"query"===r)&&"bar1Indeterminate","determinate"===r&&"bar1Determinate","buffer"===r&&"bar1Buffer"],bar2:["bar","buffer"!==r&&`barColor${(0,c.Z)(n)}`,"buffer"===r&&`color${(0,c.Z)(n)}`,("indeterminate"===r||"query"===r)&&"bar2Indeterminate","buffer"===r&&"bar2Buffer"]};return(0,l.Z)(o,m.E,t)},x=(e,t)=>"inherit"===t?"currentColor":e.vars?e.vars.palette.LinearProgress[`${t}Bg`]:"light"===e.palette.mode?(0,s.$n)(e.palette[t].main,.62):(0,s._j)(e.palette[t].main,.5),k=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`color${(0,c.Z)(r.color)}`],t[r.variant]]}})(({ownerState:e,theme:t})=>(0,o.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:x(t,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"})),O=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.dashed,t[`dashedColor${(0,c.Z)(r.color)}`]]}})(({ownerState:e,theme:t})=>{let r=x(t,e.color);return(0,o.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:`radial-gradient(${r} 0%, ${r} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},(0,u.iv)(w||(w=b`
    animation: ${0} 3s infinite linear;
  `),T)),$=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.bar,t[`barColor${(0,c.Z)(r.color)}`],("indeterminate"===r.variant||"query"===r.variant)&&t.bar1Indeterminate,"determinate"===r.variant&&t.bar1Determinate,"buffer"===r.variant&&t.bar1Buffer]}})(({ownerState:e,theme:t})=>(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":(t.vars||t).palette[e.color].main},"determinate"===e.variant&&{transition:"transform .4s linear"},"buffer"===e.variant&&{zIndex:1,transition:"transform .4s linear"}),({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,u.iv)(R||(R=b`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),S)),j=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.bar,t[`barColor${(0,c.Z)(r.color)}`],("indeterminate"===r.variant||"query"===r.variant)&&t.bar2Indeterminate,"buffer"===r.variant&&t.bar2Buffer]}})(({ownerState:e,theme:t})=>(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":(t.vars||t).palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:x(t,e.color),transition:"transform .4s linear"}),({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,u.iv)(C||(C=b`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),P)),M=i.forwardRef(function(e,t){let r=(0,p.Z)({props:e,name:"MuiLinearProgress"}),{className:i,color:l="primary",value:u,valueBuffer:s,variant:c="indeterminate"}=r,f=(0,n.Z)(r,h),m=(0,o.Z)({},r,{color:l,variant:c}),b=Z(m),y=(0,d.Z)(),g={},E={bar1:{},bar2:{}};if(("determinate"===c||"buffer"===c)&&void 0!==u){g["aria-valuenow"]=Math.round(u),g["aria-valuemin"]=0,g["aria-valuemax"]=100;let e=u-100;"rtl"===y.direction&&(e=-e),E.bar1.transform=`translateX(${e}%)`}if("buffer"===c&&void 0!==s){let e=(s||0)-100;"rtl"===y.direction&&(e=-e),E.bar2.transform=`translateX(${e}%)`}return(0,v.jsxs)(k,(0,o.Z)({className:(0,a.Z)(b.root,i),ownerState:m,role:"progressbar"},g,{ref:t},f,{children:["buffer"===c?(0,v.jsx)(O,{className:b.dashed,ownerState:m}):null,(0,v.jsx)($,{className:b.bar1,ownerState:m,style:E.bar1}),"determinate"===c?null:(0,v.jsx)(j,{className:b.bar2,ownerState:m,style:E.bar2})]}))});t.Z=M},12120:function(e,t,r){"use strict";r.d(t,{E:function(){return i}});var n=r(26520),o=r(25702);function i(e){return(0,o.Z)("MuiLinearProgress",e)}let a=(0,n.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);t.Z=a},29844:function(e,t,r){"use strict";var n=r(13428),o=r(20791),i=r(47313),a=r(44809),l=r(2265),u=r(35843),s=r(87927),c=r(57437);let d=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],f=(0,u.ZP)(i.r,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),p=l.forwardRef(function(e,t){var r;let i=(0,a.Z)(),l=(0,s.Z)({props:e,name:"MuiPopper"}),{anchorEl:u,component:p,components:m,componentsProps:v,container:h,disablePortal:b,keepMounted:y,modifiers:g,open:E,placement:w,popperOptions:R,popperRef:C,transition:S,slots:P,slotProps:T}=l,Z=(0,o.Z)(l,d),x=null!=(r=null==P?void 0:P.root)?r:null==m?void 0:m.Root,k=(0,n.Z)({anchorEl:u,container:h,disablePortal:b,keepMounted:y,modifiers:g,open:E,placement:w,popperOptions:R,popperRef:C,transition:S},Z);return(0,c.jsx)(f,(0,n.Z)({as:p,direction:null==i?void 0:i.direction,slots:{root:x},slotProps:null!=T?T:v},k,{ref:t}))});t.Z=p},41101:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}}),r(2265);var n=r(95270),o=r(53794),i=r(53469);function a(){let e=(0,n.Z)(o.Z);return e[i.Z]||e}},62916:function(e,t,r){"use strict";var n=r(33449);t.Z=n.Z},96278:function(e,t,r){"use strict";function n(e){return e&&e.ownerDocument||document}r.d(t,{Z:function(){return n}})},13840:function(e,t,r){"use strict";function n(e,t){"function"==typeof e?e(t):e&&(e.current=t)}r.d(t,{Z:function(){return n}})},34625:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(2265);function o({controlled:e,default:t,name:r,state:o="value"}){let{current:i}=n.useRef(void 0!==e),[a,l]=n.useState(t),u=n.useCallback(e=>{i||l(e)},[]);return[i?e:a,u]}},1091:function(e,t,r){"use strict";var n=r(2265);let o="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;t.Z=o},78136:function(e,t,r){"use strict";var n=r(2265),o=r(1091);t.Z=function(e){let t=n.useRef(e);return(0,o.Z)(()=>{t.current=e}),n.useRef((...e)=>(0,t.current)(...e)).current}},95137:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(2265),o=r(13840);function i(...e){return n.useMemo(()=>e.every(e=>null==e)?null:t=>{e.forEach(e=>{(0,o.Z)(e,t)})},e)}},98495:function(e,t,r){"use strict";let n;r.d(t,{Z:function(){return d}});var o=r(2265);let i=!0,a=!1,l={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function u(e){e.metaKey||e.altKey||e.ctrlKey||(i=!0)}function s(){i=!1}function c(){"hidden"===this.visibilityState&&a&&(i=!0)}function d(){let e=o.useCallback(e=>{if(null!=e){var t;(t=e.ownerDocument).addEventListener("keydown",u,!0),t.addEventListener("mousedown",s,!0),t.addEventListener("pointerdown",s,!0),t.addEventListener("touchstart",s,!0),t.addEventListener("visibilitychange",c,!0)}},[]),t=o.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!function(e){let{target:t}=e;try{return t.matches(":focus-visible")}catch(e){}return i||function(e){let{type:t,tagName:r}=e;return"INPUT"===r&&!!l[t]&&!e.readOnly||"TEXTAREA"===r&&!e.readOnly||!!e.isContentEditable}(t)}(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(a=!0,window.clearTimeout(n),n=window.setTimeout(()=>{a=!1},100),t.current=!1,!0)},ref:e}}},55487:function(e,t,r){"use strict";var n=r(9176),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function u(e){return n.isMemo(e)?a:l[e.$$typeof]||o}l[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[n.Memo]=a;var s=Object.defineProperty,c=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(m){var o=p(r);o&&o!==m&&e(t,o,n)}var a=c(r);d&&(a=a.concat(d(r)));for(var l=u(t),v=u(r),h=0;h<a.length;++h){var b=a[h];if(!i[b]&&!(n&&n[b])&&!(v&&v[b])&&!(l&&l[b])){var y=f(r,b);try{s(t,b,y)}catch(e){}}}}return t}},61396:function(e,t,r){e.exports=r(68326)},8236:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,c=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,v=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,y=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,E=r?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case c:case d:case i:case l:case a:case p:return e;default:switch(e=e&&e.$$typeof){case s:case f:case h:case v:case u:return e;default:return t}}case o:return t}}}function R(e){return w(e)===d}t.AsyncMode=c,t.ConcurrentMode=d,t.ContextConsumer=s,t.ContextProvider=u,t.Element=n,t.ForwardRef=f,t.Fragment=i,t.Lazy=h,t.Memo=v,t.Portal=o,t.Profiler=l,t.StrictMode=a,t.Suspense=p,t.isAsyncMode=function(e){return R(e)||w(e)===c},t.isConcurrentMode=R,t.isContextConsumer=function(e){return w(e)===s},t.isContextProvider=function(e){return w(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===f},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===h},t.isMemo=function(e){return w(e)===v},t.isPortal=function(e){return w(e)===o},t.isProfiler=function(e){return w(e)===l},t.isStrictMode=function(e){return w(e)===a},t.isSuspense=function(e){return w(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===l||e===a||e===p||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===v||e.$$typeof===u||e.$$typeof===s||e.$$typeof===f||e.$$typeof===y||e.$$typeof===g||e.$$typeof===E||e.$$typeof===b)},t.typeOf=w},9176:function(e,t,r){"use strict";e.exports=r(8236)},16645:function(e,t,r){"use strict";r.d(t,{E:function(){return M}});var n,o,i=r(2265),a=r(11931),l=r(75606),u=r(60597),s=r(32600),c=r(93850),d=r(65410),f=r(83329),p=r(46618),m=r(12950);let v=(0,i.createContext)(null);function h(){let[e,t]=(0,i.useState)([]);return[e.length>0?e.join(" "):void 0,(0,i.useMemo)(()=>function(e){let r=(0,m.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let r=t.slice(),n=r.indexOf(e);return -1!==n&&r.splice(n,1),r}))),n=(0,i.useMemo)(()=>({register:r,slot:e.slot,name:e.name,props:e.props}),[r,e.slot,e.name,e.props]);return i.createElement(v.Provider,{value:n},e.children)},[t])]}let b=Object.assign((0,a.yV)(function(e,t){let r=(0,l.M)(),{id:n=`headlessui-label-${r}`,passive:o=!1,...u}=e,c=function e(){let t=(0,i.useContext)(v);if(null===t){let t=Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),d=(0,p.T)(t);(0,s.e)(()=>c.register(n),[n,c.register]);let f={ref:d,...c.props,id:n};return o&&("onClick"in f&&(delete f.htmlFor,delete f.onClick),"onClick"in u&&delete u.onClick),(0,a.sY)({ourProps:f,theirProps:u,slot:c.slot||{},defaultTag:"label",name:c.name||"Label"})}),{});var y=r(44523),g=r(50926),E=r(58227),w=r(28871),R=r(54851),C=r(10841),S=r(35863),P=r(61858),T=r(82769),Z=((n=Z||{})[n.RegisterOption=0]="RegisterOption",n[n.UnregisterOption=1]="UnregisterOption",n);let x={0(e,t){let r=[...e.options,{id:t.id,element:t.element,propsRef:t.propsRef}];return{...e,options:(0,d.z2)(r,e=>e.element.current)}},1(e,t){let r=e.options.slice(),n=e.options.findIndex(e=>e.id===t.id);return -1===n?e:(r.splice(n,1),{...e,options:r})}},k=(0,i.createContext)(null);k.displayName="RadioGroupDataContext";let O=(0,i.createContext)(null);function $(e,t){return(0,u.E)(t.type,x,e,t)}O.displayName="RadioGroupActionsContext";var j=((o=j||{})[o.Empty=1]="Empty",o[o.Active=2]="Active",o);let M=Object.assign((0,a.yV)(function(e,t){let r=(0,l.M)(),{id:n=`headlessui-radiogroup-${r}`,value:o,defaultValue:u,form:s,name:f,onChange:v,by:b=(e,t)=>e===t,disabled:S=!1,...P}=e,Z=(0,m.z)("string"==typeof b?(e,t)=>(null==e?void 0:e[b])===(null==t?void 0:t[b]):b),[x,j]=(0,i.useReducer)($,{options:[]}),M=x.options,[N,L]=h(),[F,A]=(0,y.f)(),z=(0,i.useRef)(null),D=(0,p.T)(z,t),[_,I]=(0,C.q)(o,v,u),B=(0,i.useMemo)(()=>M.find(e=>!e.propsRef.current.disabled),[M]),q=(0,i.useMemo)(()=>M.some(e=>Z(e.propsRef.current.value,_)),[M,_]),G=(0,m.z)(e=>{var t;if(S||Z(e,_))return!1;let r=null==(t=M.find(t=>Z(t.propsRef.current.value,e)))?void 0:t.propsRef.current;return(null==r||!r.disabled)&&(null==I||I(e),!0)});(0,g.B)({container:z.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let H=(0,m.z)(e=>{let t=z.current;if(!t)return;let r=(0,R.r)(t),n=M.filter(e=>!1===e.propsRef.current.disabled).map(e=>e.element.current);switch(e.key){case c.R.Enter:(0,w.g)(e.currentTarget);break;case c.R.ArrowLeft:case c.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,d.jA)(n,d.TO.Previous|d.TO.WrapAround)===d.fE.Success){let e=M.find(e=>e.element.current===(null==r?void 0:r.activeElement));e&&G(e.propsRef.current.value)}break;case c.R.ArrowRight:case c.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,d.jA)(n,d.TO.Next|d.TO.WrapAround)===d.fE.Success){let e=M.find(e=>e.element.current===(null==r?void 0:r.activeElement));e&&G(e.propsRef.current.value)}break;case c.R.Space:{e.preventDefault(),e.stopPropagation();let t=M.find(e=>e.element.current===(null==r?void 0:r.activeElement));t&&G(t.propsRef.current.value)}}}),V=(0,m.z)(e=>(j({type:0,...e}),()=>j({type:1,id:e.id}))),U=(0,i.useMemo)(()=>({value:_,firstOption:B,containsCheckedOption:q,disabled:S,compare:Z,...x}),[_,B,q,S,Z,x]),Y=(0,i.useMemo)(()=>({registerOption:V,change:G}),[V,G]),J=(0,i.useMemo)(()=>({value:_}),[_]),K=(0,i.useRef)(null),X=(0,T.G)();return(0,i.useEffect)(()=>{K.current&&void 0!==u&&X.addEventListener(K.current,"reset",()=>{G(u)})},[K,G]),i.createElement(A,{name:"RadioGroup.Description"},i.createElement(L,{name:"RadioGroup.Label"},i.createElement(O.Provider,{value:Y},i.createElement(k.Provider,{value:U},null!=f&&null!=_&&(0,w.t)({[f]:_}).map(([e,t],r)=>i.createElement(E._,{features:E.A.Hidden,ref:0===r?e=>{var t;K.current=null!=(t=null==e?void 0:e.closest("form"))?t:null}:void 0,...(0,a.oA)({key:e,as:"input",type:"radio",checked:null!=t,hidden:!0,readOnly:!0,form:s,name:e,value:t})})),(0,a.sY)({ourProps:{ref:D,id:n,role:"radiogroup","aria-labelledby":N,"aria-describedby":F,onKeyDown:H},theirProps:P,slot:J,defaultTag:"div",name:"RadioGroup"})))))}),{Option:(0,a.yV)(function(e,t){var r;let n=(0,l.M)(),{id:o=`headlessui-radiogroup-option-${n}`,value:u,disabled:c=!1,...d}=e,v=(0,i.useRef)(null),b=(0,p.T)(v,t),[g,E]=h(),[w,R]=(0,y.f)(),{addFlag:C,removeFlag:T,hasFlag:Z}=(0,f.V)(1),x=(0,P.E)({value:u,disabled:c}),$=function e(t){let r=(0,i.useContext)(k);if(null===r){let r=Error(`<${t} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return r}("RadioGroup.Option"),j=function e(t){let r=(0,i.useContext)(O);if(null===r){let r=Error(`<${t} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return r}("RadioGroup.Option");(0,s.e)(()=>j.registerOption({id:o,element:v,propsRef:x}),[o,j,v,e]);let M=(0,m.z)(e=>{var t;if((0,S.P)(e.currentTarget))return e.preventDefault();j.change(u)&&(C(2),null==(t=v.current)||t.focus())}),N=(0,m.z)(e=>{if((0,S.P)(e.currentTarget))return e.preventDefault();C(2)}),L=(0,m.z)(()=>T(2)),F=(null==(r=$.firstOption)?void 0:r.id)===o,A=$.disabled||c,z=$.compare($.value,u),D={ref:b,id:o,role:"radio","aria-checked":z?"true":"false","aria-labelledby":g,"aria-describedby":w,"aria-disabled":!!A||void 0,tabIndex:A?-1:z||!$.containsCheckedOption&&F?0:-1,onClick:A?void 0:M,onFocus:A?void 0:N,onBlur:A?void 0:L},_=(0,i.useMemo)(()=>({checked:z,disabled:A,active:Z(2)}),[z,A,Z]);return i.createElement(R,{name:"RadioGroup.Description"},i.createElement(E,{name:"RadioGroup.Label"},(0,a.sY)({ourProps:D,theirProps:d,slot:_,defaultTag:"div",name:"RadioGroup.Option"})))}),Label:b,Description:y.d})},16856:function(e,t,r){"use strict";r.d(t,{u:function(){return M}});var n,o=r(2265),i=r(11931),a=r(25306),l=r(60597),u=r(80634),s=r(32600),c=r(61858),d=r(48957),f=r(46618),p=r(85390);function m(e,...t){e&&t.length>0&&e.classList.add(...t)}function v(e,...t){e&&t.length>0&&e.classList.remove(...t)}var h=r(82769),b=r(12950),y=r(63960),g=r(83329);function E(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let w=(0,o.createContext)(null);w.displayName="TransitionContext";var R=((n=R||{}).Visible="visible",n.Hidden="hidden",n);let C=(0,o.createContext)(null);function S(e){return"children"in e?S(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function P(e,t){let r=(0,c.E)(e),n=(0,o.useRef)([]),a=(0,u.t)(),s=(0,h.G)(),d=(0,b.z)((e,t=i.l4.Hidden)=>{let o=n.current.findIndex(({el:t})=>t===e);-1!==o&&((0,l.E)(t,{[i.l4.Unmount](){n.current.splice(o,1)},[i.l4.Hidden](){n.current[o].state="hidden"}}),s.microTask(()=>{var e;!S(n)&&a.current&&(null==(e=r.current)||e.call(r))}))}),f=(0,b.z)(e=>{let t=n.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):n.current.push({el:e,state:"visible"}),()=>d(e,i.l4.Unmount)}),p=(0,o.useRef)([]),m=(0,o.useRef)(Promise.resolve()),v=(0,o.useRef)({enter:[],leave:[],idle:[]}),y=(0,b.z)((e,r,n)=>{p.current.splice(0),t&&(t.chains.current[r]=t.chains.current[r].filter(([t])=>t!==e)),null==t||t.chains.current[r].push([e,new Promise(e=>{p.current.push(e)})]),null==t||t.chains.current[r].push([e,new Promise(e=>{Promise.all(v.current[r].map(([e,t])=>t)).then(()=>e())})]),"enter"===r?m.current=m.current.then(()=>null==t?void 0:t.wait.current).then(()=>n(r)):n(r)}),g=(0,b.z)((e,t,r)=>{Promise.all(v.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=p.current.shift())||e()}).then(()=>r(t))});return(0,o.useMemo)(()=>({children:n,register:f,unregister:d,onStart:y,onStop:g,wait:m,chains:v}),[f,d,n,y,g,v,m])}function T(){}C.displayName="NestingContext";let Z=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function x(e){var t;let r={};for(let n of Z)r[n]=null!=(t=e[n])?t:T;return r}let k=i.AN.RenderStrategy,O=(0,i.yV)(function(e,t){let{show:r,appear:n=!1,unmount:l=!0,...u}=e,c=(0,o.useRef)(null),p=(0,f.T)(c,t);(0,d.H)();let m=(0,a.oJ)();if(void 0===r&&null!==m&&(r=(m&a.ZM.Open)===a.ZM.Open),![!0,!1].includes(r))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[v,h]=(0,o.useState)(r?"visible":"hidden"),y=P(()=>{h("hidden")}),[g,E]=(0,o.useState)(!0),R=(0,o.useRef)([r]);(0,s.e)(()=>{!1!==g&&R.current[R.current.length-1]!==r&&(R.current.push(r),E(!1))},[R,r]);let T=(0,o.useMemo)(()=>({show:r,appear:n,initial:g}),[r,n,g]);(0,o.useEffect)(()=>{if(r)h("visible");else if(S(y)){let e=c.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&h("hidden")}else h("hidden")},[r,y]);let Z={unmount:l},x=(0,b.z)(()=>{var t;g&&E(!1),null==(t=e.beforeEnter)||t.call(e)}),O=(0,b.z)(()=>{var t;g&&E(!1),null==(t=e.beforeLeave)||t.call(e)});return o.createElement(C.Provider,{value:y},o.createElement(w.Provider,{value:T},(0,i.sY)({ourProps:{...Z,as:o.Fragment,children:o.createElement($,{ref:p,...Z,...u,beforeEnter:x,beforeLeave:O})},theirProps:{},defaultTag:o.Fragment,features:k,visible:"visible"===v,name:"Transition"})))}),$=(0,i.yV)(function(e,t){var r,n,R;let T;let{beforeEnter:Z,afterEnter:O,beforeLeave:$,afterLeave:j,enter:M,enterFrom:N,enterTo:L,entered:F,leave:A,leaveFrom:z,leaveTo:D,..._}=e,I=(0,o.useRef)(null),B=(0,f.T)(I,t),q=null==(r=_.unmount)||r?i.l4.Unmount:i.l4.Hidden,{show:G,appear:H,initial:V}=function(){let e=(0,o.useContext)(w);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[U,Y]=(0,o.useState)(G?"visible":"hidden"),J=function(){let e=(0,o.useContext)(C);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:K,unregister:X}=J;(0,o.useEffect)(()=>K(I),[K,I]),(0,o.useEffect)(()=>{if(q===i.l4.Hidden&&I.current){if(G&&"visible"!==U){Y("visible");return}return(0,l.E)(U,{hidden:()=>X(I),visible:()=>K(I)})}},[U,I,K,X,G,q]);let W=(0,c.E)({base:E(_.className),enter:E(M),enterFrom:E(N),enterTo:E(L),entered:E(F),leave:E(A),leaveFrom:E(z),leaveTo:E(D)}),Q=(R={beforeEnter:Z,afterEnter:O,beforeLeave:$,afterLeave:j},T=(0,o.useRef)(x(R)),(0,o.useEffect)(()=>{T.current=x(R)},[R]),T),ee=(0,d.H)();(0,o.useEffect)(()=>{if(ee&&"visible"===U&&null===I.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[I,U,ee]);let et=H&&G&&V,er=ee&&(!V||H)?G?"enter":"leave":"idle",en=(0,g.V)(0),eo=(0,b.z)(e=>(0,l.E)(e,{enter:()=>{en.addFlag(a.ZM.Opening),Q.current.beforeEnter()},leave:()=>{en.addFlag(a.ZM.Closing),Q.current.beforeLeave()},idle:()=>{}})),ei=(0,b.z)(e=>(0,l.E)(e,{enter:()=>{en.removeFlag(a.ZM.Opening),Q.current.afterEnter()},leave:()=>{en.removeFlag(a.ZM.Closing),Q.current.afterLeave()},idle:()=>{}})),ea=P(()=>{Y("hidden"),X(I)},J);!function({immediate:e,container:t,direction:r,classes:n,onStart:o,onStop:i}){let a=(0,u.t)(),d=(0,h.G)(),f=(0,c.E)(r);(0,s.e)(()=>{e&&(f.current="enter")},[e]),(0,s.e)(()=>{let e=(0,p.k)();d.add(e.dispose);let r=t.current;if(r&&"idle"!==f.current&&a.current){var u,s,c;let t,a,d,h,b,y,g;return e.dispose(),o.current(f.current),e.add((u=n.current,s="enter"===f.current,c=()=>{e.dispose(),i.current(f.current)},a=s?"enter":"leave",d=(0,p.k)(),h=void 0!==c?(t={called:!1},(...e)=>{if(!t.called)return t.called=!0,c(...e)}):()=>{},"enter"===a&&(r.removeAttribute("hidden"),r.style.display=""),b=(0,l.E)(a,{enter:()=>u.enter,leave:()=>u.leave}),y=(0,l.E)(a,{enter:()=>u.enterTo,leave:()=>u.leaveTo}),g=(0,l.E)(a,{enter:()=>u.enterFrom,leave:()=>u.leaveFrom}),v(r,...u.base,...u.enter,...u.enterTo,...u.enterFrom,...u.leave,...u.leaveFrom,...u.leaveTo,...u.entered),m(r,...u.base,...b,...g),d.nextFrame(()=>{v(r,...u.base,...b,...g),m(r,...u.base,...b,...y),function(e,t){let r=(0,p.k)();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:o}=getComputedStyle(e),[i,a]=[n,o].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),l=i+a;if(0!==l){r.group(r=>{r.setTimeout(()=>{t(),r.dispose()},l),r.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&r.dispose()})});let n=r.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),n())})}else t();r.add(()=>t()),r.dispose}(r,()=>(v(r,...u.base,...b),m(r,...u.base,...u.entered),h()))}),d.dispose)),e.dispose}},[r])}({immediate:et,container:I,classes:W,direction:er,onStart:(0,c.E)(e=>{ea.onStart(I,e,eo)}),onStop:(0,c.E)(e=>{ea.onStop(I,e,ei),"leave"!==e||S(ea)||(Y("hidden"),X(I))})});let el=_;return et?el={...el,className:(0,y.A)(_.className,...W.current.enter,...W.current.enterFrom)}:(el.className=(0,y.A)(_.className,null==(n=I.current)?void 0:n.className),""===el.className&&delete el.className),o.createElement(C.Provider,{value:ea},o.createElement(a.up,{value:(0,l.E)(U,{visible:a.ZM.Open,hidden:a.ZM.Closed})|en.flags},(0,i.sY)({ourProps:{ref:B},theirProps:el,defaultTag:"div",features:k,visible:"visible"===U,name:"Transition.Child"})))}),j=(0,i.yV)(function(e,t){let r=null!==(0,o.useContext)(w),n=null!==(0,a.oJ)();return o.createElement(o.Fragment,null,!r&&n?o.createElement(O,{ref:t,...e}):o.createElement($,{ref:t,...e}))}),M=Object.assign(O,{Child:j,Root:O})},10841:function(e,t,r){"use strict";r.d(t,{q:function(){return i}});var n=r(2265),o=r(12950);function i(e,t,r){let[i,a]=(0,n.useState)(r),l=void 0!==e,u=(0,n.useRef)(l),s=(0,n.useRef)(!1),c=(0,n.useRef)(!1);return!l||u.current||s.current?l||!u.current||c.current||(c.current=!0,u.current=l,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(s.current=!0,u.current=l,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[l?e:i,(0,o.z)(e=>(l||a(e),null==t?void 0:t(e)))]}},90583:function(e,t,r){"use strict";r.d(t,{O:function(){return u}});var n=r(2265),o=r(65410),i=r(61858);function a(e,t,r){let o=(0,i.E)(t);(0,n.useEffect)(()=>{function t(e){o.current(e)}return document.addEventListener(e,t,r),()=>document.removeEventListener(e,t,r)},[e,r])}var l=r(27976);function u(e,t,r=!0){let i=(0,n.useRef)(!1);function u(r,n){if(!i.current||r.defaultPrevented)return;let a=n(r);if(null!==a&&a.getRootNode().contains(a)&&a.isConnected){for(let t of function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e)){if(null===t)continue;let e=t instanceof HTMLElement?t:t.current;if(null!=e&&e.contains(a)||r.composed&&r.composedPath().includes(e))return}return(0,o.sP)(a,o.tJ.Loose)||-1===a.tabIndex||r.preventDefault(),t(r,a)}}(0,n.useEffect)(()=>{requestAnimationFrame(()=>{i.current=r})},[r]);let s=(0,n.useRef)(null);a("pointerdown",e=>{var t,r;i.current&&(s.current=(null==(r=null==(t=e.composedPath)?void 0:t.call(e))?void 0:r[0])||e.target)},!0),a("mousedown",e=>{var t,r;i.current&&(s.current=(null==(r=null==(t=e.composedPath)?void 0:t.call(e))?void 0:r[0])||e.target)},!0),a("click",e=>{s.current&&(u(e,()=>s.current),s.current=null)},!0),a("touchend",e=>u(e,()=>e.target instanceof HTMLElement?e.target:null),!0),(0,l.s)("blur",e=>u(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}},50926:function(e,t,r){"use strict";r.d(t,{B:function(){return a}});var n=r(2265),o=r(32600),i=r(54851);function a({container:e,accept:t,walk:r,enabled:a=!0}){let l=(0,n.useRef)(t),u=(0,n.useRef)(r);(0,n.useEffect)(()=>{l.current=t,u.current=r},[t,r]),(0,o.e)(()=>{if(!e||!a)return;let t=(0,i.r)(e);if(!t)return;let r=l.current,n=u.current,o=Object.assign(e=>r(e),{acceptNode:r}),s=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,o,!1);for(;s.nextNode();)n(s.currentNode)},[e,a,l,u])}},27976:function(e,t,r){"use strict";r.d(t,{s:function(){return i}});var n=r(2265),o=r(61858);function i(e,t,r){let i=(0,o.E)(t);(0,n.useEffect)(()=>{function t(e){i.current(e)}return window.addEventListener(e,t,r),()=>window.removeEventListener(e,t,r)},[e,r])}},25306:function(e,t,r){"use strict";r.d(t,{ZM:function(){return a},oJ:function(){return l},up:function(){return u}});var n,o=r(2265);let i=(0,o.createContext)(null);i.displayName="OpenClosedContext";var a=((n=a||{})[n.Open=1]="Open",n[n.Closed=2]="Closed",n[n.Closing=4]="Closing",n[n.Opening=8]="Opening",n);function l(){return(0,o.useContext)(i)}function u({value:e,children:t}){return o.createElement(i.Provider,{value:e},t)}},28871:function(e,t,r){"use strict";function n(e,t){return e?e+"["+t+"]":t}function o(e){var t,r;let n=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(n){for(let t of n.elements)if(t!==e&&("INPUT"===t.tagName&&"submit"===t.type||"BUTTON"===t.tagName&&"submit"===t.type||"INPUT"===t.nodeName&&"image"===t.type)){t.click();return}null==(r=n.requestSubmit)||r.call(n)}}r.d(t,{g:function(){return o},t:function(){return function e(t={},r=null,o=[]){for(let[i,a]of Object.entries(t))!function t(r,o,i){if(Array.isArray(i))for(let[e,a]of i.entries())t(r,n(o,e.toString()),a);else i instanceof Date?r.push([o,i.toISOString()]):"boolean"==typeof i?r.push([o,i?"1":"0"]):"string"==typeof i?r.push([o,i]):"number"==typeof i?r.push([o,`${i}`]):null==i?r.push([o,""]):e(i,o,r)}(o,n(r,i),a);return o}}})}}]);