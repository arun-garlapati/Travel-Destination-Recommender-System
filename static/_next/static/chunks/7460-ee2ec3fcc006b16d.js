"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7460],{85859:function(t,e,n){n.d(e,{Ry:function(){return f}});var r=new WeakMap,o=new WeakMap,i={},u=0,l=function(t){return t&&(t.host||l(t.parentNode))},c=function(t,e,n,c){var f=(Array.isArray(t)?t:[t]).map(function(t){if(e.contains(t))return t;var n=l(t);return n&&e.contains(n)?n:(console.error("aria-hidden",t,"in not contained inside",e,". Doing nothing"),null)}).filter(function(t){return!!t});i[n]||(i[n]=new WeakMap);var a=i[n],s=[],p=new Set,d=new Set(f),h=function(t){!t||p.has(t)||(p.add(t),h(t.parentNode))};f.forEach(h);var y=function(t){!t||d.has(t)||Array.prototype.forEach.call(t.children,function(t){if(p.has(t))y(t);else{var e=t.getAttribute(c),i=null!==e&&"false"!==e,u=(r.get(t)||0)+1,l=(a.get(t)||0)+1;r.set(t,u),a.set(t,l),s.push(t),1===u&&i&&o.set(t,!0),1===l&&t.setAttribute(n,"true"),i||t.setAttribute(c,"true")}})};return y(e),p.clear(),u++,function(){s.forEach(function(t){var e=r.get(t)-1,i=a.get(t)-1;r.set(t,e),a.set(t,i),e||(o.has(t)||t.removeAttribute(c),o.delete(t)),i||t.removeAttribute(n)}),--u||(r=new WeakMap,r=new WeakMap,o=new WeakMap,i={})}},f=function(t,e,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(t)?t:[t]),o=e||("undefined"==typeof document?null:(Array.isArray(t)?t[0]:t).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),c(r,o,n,"aria-hidden")):function(){return null}}},49473:function(t,e,n){n.d(e,{Cp:function(){return p},Qo:function(){return h},RR:function(){return f},US:function(){return u},X5:function(){return c},cv:function(){return m},dp:function(){return w},dr:function(){return v},oo:function(){return i},uY:function(){return g},x7:function(){return l}});var r=n(9082);function o(t,e,n){let o,{reference:i,floating:u}=t,l=(0,r.Qq)(e),c=(0,r.Wh)(e),f=(0,r.I4)(c),a=(0,r.k3)(e),s="y"===l,p=i.x+i.width/2-u.width/2,d=i.y+i.height/2-u.height/2,h=i[f]/2-u[f]/2;switch(a){case"top":o={x:p,y:i.y-u.height};break;case"bottom":o={x:p,y:i.y+i.height};break;case"right":o={x:i.x+i.width,y:d};break;case"left":o={x:i.x-u.width,y:d};break;default:o={x:i.x,y:i.y}}switch((0,r.hp)(e)){case"start":o[c]-=h*(n&&s?-1:1);break;case"end":o[c]+=h*(n&&s?-1:1)}return o}let i=async(t,e,n)=>{let{placement:r="bottom",strategy:i="absolute",middleware:u=[],platform:l}=n,c=u.filter(Boolean),f=await (null==l.isRTL?void 0:l.isRTL(e)),a=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:s,y:p}=o(a,r,f),d=r,h={},y=0;for(let n=0;n<c.length;n++){let{name:u,fn:m}=c[n],{x:g,y:v,data:w,reset:b}=await m({x:s,y:p,initialPlacement:r,placement:d,strategy:i,middlewareData:h,rects:a,platform:l,elements:{reference:t,floating:e}});if(s=null!=g?g:s,p=null!=v?v:p,h={...h,[u]:{...h[u],...w}},b&&y<=50){y++,"object"==typeof b&&(b.placement&&(d=b.placement),b.rects&&(a=!0===b.rects?await l.getElementRects({reference:t,floating:e,strategy:i}):b.rects),{x:s,y:p}=o(a,d,f)),n=-1;continue}}return{x:s,y:p,placement:d,strategy:i,middlewareData:h}};async function u(t,e){var n;void 0===e&&(e={});let{x:o,y:i,platform:u,rects:l,elements:c,strategy:f}=t,{boundary:a="clippingAncestors",rootBoundary:s="viewport",elementContext:p="floating",altBoundary:d=!1,padding:h=0}=(0,r.ku)(e,t),y=(0,r.yd)(h),m=c[d?"floating"===p?"reference":"floating":p],g=(0,r.JB)(await u.getClippingRect({element:null==(n=await (null==u.isElement?void 0:u.isElement(m)))||n?m:m.contextElement||await (null==u.getDocumentElement?void 0:u.getDocumentElement(c.floating)),boundary:a,rootBoundary:s,strategy:f})),v="floating"===p?{...l.floating,x:o,y:i}:l.reference,w=await (null==u.getOffsetParent?void 0:u.getOffsetParent(c.floating)),b=await (null==u.isElement?void 0:u.isElement(w))&&await (null==u.getScale?void 0:u.getScale(w))||{x:1,y:1},x=(0,r.JB)(u.convertOffsetParentRelativeRectToViewportRelativeRect?await u.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:w,strategy:f}):v);return{top:(g.top-x.top+y.top)/b.y,bottom:(x.bottom-g.bottom+y.bottom)/b.y,left:(g.left-x.left+y.left)/b.x,right:(x.right-g.right+y.right)/b.x}}let l=t=>({name:"arrow",options:t,async fn(e){let{x:n,y:o,placement:i,rects:u,platform:l,elements:c,middlewareData:f}=e,{element:a,padding:s=0}=(0,r.ku)(t,e)||{};if(null==a)return{};let p=(0,r.yd)(s),d={x:n,y:o},h=(0,r.Wh)(i),y=(0,r.I4)(h),m=await l.getDimensions(a),g="y"===h,v=g?"clientHeight":"clientWidth",w=u.reference[y]+u.reference[h]-d[h]-u.floating[y],b=d[h]-u.reference[h],x=await (null==l.getOffsetParent?void 0:l.getOffsetParent(a)),_=x?x[v]:0;_&&await (null==l.isElement?void 0:l.isElement(x))||(_=c.floating[v]||u.floating[y]);let k=_/2-m[y]/2-1,R=(0,r.VV)(p[g?"top":"left"],k),O=(0,r.VV)(p[g?"bottom":"right"],k),E=_-m[y]-O,T=_/2-m[y]/2+(w/2-b/2),A=(0,r.uZ)(R,T,E),P=!f.arrow&&null!=(0,r.hp)(i)&&T!=A&&u.reference[y]/2-(T<R?R:O)-m[y]/2<0,S=P?T<R?T-R:T-E:0;return{[h]:d[h]+S,data:{[h]:A,centerOffset:T-A-S,...P&&{alignmentOffset:S}},reset:P}}}),c=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;let{rects:l,middlewareData:c,placement:f,platform:a,elements:s}=e,{crossAxis:p=!1,alignment:d,allowedPlacements:h=r.Ct,autoAlignment:y=!0,...m}=(0,r.ku)(t,e),g=void 0!==d||h===r.Ct?function(t,e,n){let o=t?[...n.filter(e=>(0,r.hp)(e)===t),...n.filter(e=>(0,r.hp)(e)!==t)]:n.filter(t=>(0,r.k3)(t)===t);return o.filter(n=>!t||(0,r.hp)(n)===t||!!e&&(0,r.Go)(n)!==n)}(d||null,y,h):h,v=await u(e,m),w=(null==(n=c.autoPlacement)?void 0:n.index)||0,b=g[w];if(null==b)return{};let x=(0,r.i8)(b,l,await (null==a.isRTL?void 0:a.isRTL(s.floating)));if(f!==b)return{reset:{placement:g[0]}};let _=[v[(0,r.k3)(b)],v[x[0]],v[x[1]]],k=[...(null==(o=c.autoPlacement)?void 0:o.overflows)||[],{placement:b,overflows:_}],R=g[w+1];if(R)return{data:{index:w+1,overflows:k},reset:{placement:R}};let O=k.map(t=>{let e=(0,r.hp)(t.placement);return[t.placement,e&&p?t.overflows.slice(0,2).reduce((t,e)=>t+e,0):t.overflows[0],t.overflows]}).sort((t,e)=>t[1]-e[1]),E=O.filter(t=>t[2].slice(0,(0,r.hp)(t[0])?2:3).every(t=>t<=0)),T=(null==(i=E[0])?void 0:i[0])||O[0][0];return T!==f?{data:{index:w+1,overflows:k},reset:{placement:T}}:{}}}},f=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,o,i,l,c;let{placement:f,middlewareData:a,rects:s,initialPlacement:p,platform:d,elements:h}=e,{mainAxis:y=!0,crossAxis:m=!0,fallbackPlacements:g,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:b=!0,...x}=(0,r.ku)(t,e);if(null!=(n=a.arrow)&&n.alignmentOffset)return{};let _=(0,r.k3)(f),k=(0,r.k3)(p)===p,R=await (null==d.isRTL?void 0:d.isRTL(h.floating)),O=g||(k||!b?[(0,r.pw)(p)]:(0,r.gy)(p));g||"none"===w||O.push(...(0,r.KX)(p,b,w,R));let E=[p,...O],T=await u(e,x),A=[],P=(null==(o=a.flip)?void 0:o.overflows)||[];if(y&&A.push(T[_]),m){let t=(0,r.i8)(f,s,R);A.push(T[t[0]],T[t[1]])}if(P=[...P,{placement:f,overflows:A}],!A.every(t=>t<=0)){let t=((null==(i=a.flip)?void 0:i.index)||0)+1,e=E[t];if(e)return{data:{index:t,overflows:P},reset:{placement:e}};let n=null==(l=P.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:l.placement;if(!n)switch(v){case"bestFit":{let t=null==(c=P.map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:c[0];t&&(n=t);break}case"initialPlacement":n=p}if(f!==n)return{reset:{placement:n}}}return{}}}};function a(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function s(t){return r.mA.some(e=>t[e]>=0)}let p=function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){let{rects:n}=e,{strategy:o="referenceHidden",...i}=(0,r.ku)(t,e);switch(o){case"referenceHidden":{let t=await u(e,{...i,elementContext:"reference"}),r=a(t,n.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:s(r)}}}case"escaped":{let t=await u(e,{...i,altBoundary:!0}),r=a(t,n.floating);return{data:{escapedOffsets:r,escaped:s(r)}}}default:return{}}}}};function d(t){let e=(0,r.VV)(...t.map(t=>t.left)),n=(0,r.VV)(...t.map(t=>t.top)),o=(0,r.Fp)(...t.map(t=>t.right)),i=(0,r.Fp)(...t.map(t=>t.bottom));return{x:e,y:n,width:o-e,height:i-n}}let h=function(t){return void 0===t&&(t={}),{name:"inline",options:t,async fn(e){let{placement:n,elements:o,rects:i,platform:u,strategy:l}=e,{padding:c=2,x:f,y:a}=(0,r.ku)(t,e),s=Array.from(await (null==u.getClientRects?void 0:u.getClientRects(o.reference))||[]),p=function(t){let e=t.slice().sort((t,e)=>t.y-e.y),n=[],o=null;for(let t=0;t<e.length;t++){let r=e[t];!o||r.y-o.y>o.height/2?n.push([r]):n[n.length-1].push(r),o=r}return n.map(t=>(0,r.JB)(d(t)))}(s),h=(0,r.JB)(d(s)),y=(0,r.yd)(c),m=await u.getElementRects({reference:{getBoundingClientRect:function(){if(2===p.length&&p[0].left>p[1].right&&null!=f&&null!=a)return p.find(t=>f>t.left-y.left&&f<t.right+y.right&&a>t.top-y.top&&a<t.bottom+y.bottom)||h;if(p.length>=2){if("y"===(0,r.Qq)(n)){let t=p[0],e=p[p.length-1],o="top"===(0,r.k3)(n),i=t.top,u=e.bottom,l=o?t.left:e.left,c=o?t.right:e.right;return{top:i,bottom:u,left:l,right:c,width:c-l,height:u-i,x:l,y:i}}let t="left"===(0,r.k3)(n),e=(0,r.Fp)(...p.map(t=>t.right)),o=(0,r.VV)(...p.map(t=>t.left)),i=p.filter(n=>t?n.left===o:n.right===e),u=i[0].top,l=i[i.length-1].bottom;return{top:u,bottom:l,left:o,right:e,width:e-o,height:l-u,x:o,y:u}}return h}},floating:o.floating,strategy:l});return i.reference.x!==m.reference.x||i.reference.y!==m.reference.y||i.reference.width!==m.reference.width||i.reference.height!==m.reference.height?{reset:{rects:m}}:{}}}};async function y(t,e){let{placement:n,platform:o,elements:i}=t,u=await (null==o.isRTL?void 0:o.isRTL(i.floating)),l=(0,r.k3)(n),c=(0,r.hp)(n),f="y"===(0,r.Qq)(n),a=["left","top"].includes(l)?-1:1,s=u&&f?-1:1,p=(0,r.ku)(e,t),{mainAxis:d,crossAxis:h,alignmentAxis:y}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return c&&"number"==typeof y&&(h="end"===c?-1*y:y),f?{x:h*s,y:d*a}:{x:d*a,y:h*s}}let m=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){let{x:n,y:r}=e,o=await y(e,t);return{x:n+o.x,y:r+o.y,data:o}}}},g=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){let{x:n,y:o,placement:i}=e,{mainAxis:l=!0,crossAxis:c=!1,limiter:f={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...a}=(0,r.ku)(t,e),s={x:n,y:o},p=await u(e,a),d=(0,r.Qq)((0,r.k3)(i)),h=(0,r.Rn)(d),y=s[h],m=s[d];if(l){let t="y"===h?"top":"left",e="y"===h?"bottom":"right",n=y+p[t],o=y-p[e];y=(0,r.uZ)(n,y,o)}if(c){let t="y"===d?"top":"left",e="y"===d?"bottom":"right",n=m+p[t],o=m-p[e];m=(0,r.uZ)(n,m,o)}let g=f.fn({...e,[h]:y,[d]:m});return{...g,data:{x:g.x-n,y:g.y-o}}}}},v=function(t){return void 0===t&&(t={}),{options:t,fn(e){let{x:n,y:o,placement:i,rects:u,middlewareData:l}=e,{offset:c=0,mainAxis:f=!0,crossAxis:a=!0}=(0,r.ku)(t,e),s={x:n,y:o},p=(0,r.Qq)(i),d=(0,r.Rn)(p),h=s[d],y=s[p],m=(0,r.ku)(c,e),g="number"==typeof m?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(f){let t="y"===d?"height":"width",e=u.reference[d]-u.floating[t]+g.mainAxis,n=u.reference[d]+u.reference[t]-g.mainAxis;h<e?h=e:h>n&&(h=n)}if(a){var v,w;let t="y"===d?"width":"height",e=["top","left"].includes((0,r.k3)(i)),n=u.reference[p]-u.floating[t]+(e&&(null==(v=l.offset)?void 0:v[p])||0)+(e?0:g.crossAxis),o=u.reference[p]+u.reference[t]+(e?0:(null==(w=l.offset)?void 0:w[p])||0)-(e?g.crossAxis:0);y<n?y=n:y>o&&(y=o)}return{[d]:h,[p]:y}}}},w=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){let n,o;let{placement:i,rects:l,platform:c,elements:f}=e,{apply:a=()=>{},...s}=(0,r.ku)(t,e),p=await u(e,s),d=(0,r.k3)(i),h=(0,r.hp)(i),y="y"===(0,r.Qq)(i),{width:m,height:g}=l.floating;"top"===d||"bottom"===d?(n=d,o=h===(await (null==c.isRTL?void 0:c.isRTL(f.floating))?"start":"end")?"left":"right"):(o=d,n="end"===h?"top":"bottom");let v=g-p[n],w=m-p[o],b=!e.middlewareData.shift,x=v,_=w;if(y){let t=m-p.left-p.right;_=h||b?(0,r.VV)(w,t):t}else{let t=g-p.top-p.bottom;x=h||b?(0,r.VV)(v,t):t}if(b&&!h){let t=(0,r.Fp)(p.left,0),e=(0,r.Fp)(p.right,0),n=(0,r.Fp)(p.top,0),o=(0,r.Fp)(p.bottom,0);y?_=m-2*(0!==t||0!==e?t+e:(0,r.Fp)(p.left,p.right)):x=g-2*(0!==n||0!==o?n+o:(0,r.Fp)(p.top,p.bottom))}await a({...e,availableWidth:_,availableHeight:x});let k=await c.getDimensions(f.floating);return m!==k.width||g!==k.height?{reset:{rects:!0}}:{}}}}},29401:function(t,e,n){n.d(e,{Jv:function(){return g},Me:function(){return v},oo:function(){return w}});var r=n(9082),o=n(49473),i=n(96025);function u(t){let e=(0,i.Dx)(t),n=parseFloat(e.width)||0,o=parseFloat(e.height)||0,u=(0,i.Re)(t),l=u?t.offsetWidth:n,c=u?t.offsetHeight:o,f=(0,r.NM)(n)!==l||(0,r.NM)(o)!==c;return f&&(n=l,o=c),{width:n,height:o,$:f}}function l(t){return(0,i.kK)(t)?t:t.contextElement}function c(t){let e=l(t);if(!(0,i.Re)(e))return(0,r.ze)(1);let n=e.getBoundingClientRect(),{width:o,height:c,$:f}=u(e),a=(f?(0,r.NM)(n.width):n.width)/o,s=(f?(0,r.NM)(n.height):n.height)/c;return a&&Number.isFinite(a)||(a=1),s&&Number.isFinite(s)||(s=1),{x:a,y:s}}let f=(0,r.ze)(0);function a(t){let e=(0,i.Jj)(t);return(0,i.Pf)()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:f}function s(t,e,n,o){var u;void 0===e&&(e=!1),void 0===n&&(n=!1);let f=t.getBoundingClientRect(),s=l(t),p=(0,r.ze)(1);e&&(o?(0,i.kK)(o)&&(p=c(o)):p=c(t));let d=(void 0===(u=n)&&(u=!1),o&&(!u||o===(0,i.Jj)(s))&&u)?a(s):(0,r.ze)(0),h=(f.left+d.x)/p.x,y=(f.top+d.y)/p.y,m=f.width/p.x,g=f.height/p.y;if(s){let t=(0,i.Jj)(s),e=o&&(0,i.kK)(o)?(0,i.Jj)(o):o,n=t.frameElement;for(;n&&o&&e!==t;){let t=c(n),e=n.getBoundingClientRect(),r=(0,i.Dx)(n),o=e.left+(n.clientLeft+parseFloat(r.paddingLeft))*t.x,u=e.top+(n.clientTop+parseFloat(r.paddingTop))*t.y;h*=t.x,y*=t.y,m*=t.x,g*=t.y,h+=o,y+=u,n=(0,i.Jj)(n).frameElement}}return(0,r.JB)({width:m,height:g,x:h,y})}function p(t){return s((0,i.tF)(t)).left+(0,i.Lw)(t).scrollLeft}function d(t,e,n){let o;if("viewport"===e)o=function(t,e){let n=(0,i.Jj)(t),r=(0,i.tF)(t),o=n.visualViewport,u=r.clientWidth,l=r.clientHeight,c=0,f=0;if(o){u=o.width,l=o.height;let t=(0,i.Pf)();(!t||t&&"fixed"===e)&&(c=o.offsetLeft,f=o.offsetTop)}return{width:u,height:l,x:c,y:f}}(t,n);else if("document"===e)o=function(t){let e=(0,i.tF)(t),n=(0,i.Lw)(t),o=t.ownerDocument.body,u=(0,r.Fp)(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),l=(0,r.Fp)(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight),c=-n.scrollLeft+p(t),f=-n.scrollTop;return"rtl"===(0,i.Dx)(o).direction&&(c+=(0,r.Fp)(e.clientWidth,o.clientWidth)-u),{width:u,height:l,x:c,y:f}}((0,i.tF)(t));else if((0,i.kK)(e))o=function(t,e){let n=s(t,!0,"fixed"===e),o=n.top+t.clientTop,u=n.left+t.clientLeft,l=(0,i.Re)(t)?c(t):(0,r.ze)(1),f=t.clientWidth*l.x,a=t.clientHeight*l.y,p=u*l.x,d=o*l.y;return{width:f,height:a,x:p,y:d}}(e,n);else{let n=a(t);o={...e,x:e.x-n.x,y:e.y-n.y}}return(0,r.JB)(o)}function h(t,e){return(0,i.Re)(t)&&"fixed"!==(0,i.Dx)(t).position?e?e(t):t.offsetParent:null}function y(t,e){let n=(0,i.Jj)(t);if(!(0,i.Re)(t))return n;let r=h(t,e);for(;r&&(0,i.Ze)(r)&&"static"===(0,i.Dx)(r).position;)r=h(r,e);return r&&("html"===(0,i.wk)(r)||"body"===(0,i.wk)(r)&&"static"===(0,i.Dx)(r).position&&!(0,i.hT)(r))?n:r||(0,i.gQ)(t)||n}let m=async function(t){let{reference:e,floating:n,strategy:o}=t,u=this.getOffsetParent||y,l=this.getDimensions;return{reference:function(t,e,n){let o=(0,i.Re)(e),u=(0,i.tF)(e),l="fixed"===n,c=s(t,!0,l,e),f={scrollLeft:0,scrollTop:0},a=(0,r.ze)(0);if(o||!o&&!l){if(("body"!==(0,i.wk)(e)||(0,i.ao)(u))&&(f=(0,i.Lw)(e)),o){let t=s(e,!0,l,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else u&&(a.x=p(u))}return{x:c.left+f.scrollLeft-a.x,y:c.top+f.scrollTop-a.y,width:c.width,height:c.height}}(e,await u(n),o),floating:{x:0,y:0,...await l(n)}}},g={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t,u=(0,i.Re)(n),l=(0,i.tF)(n);if(n===l)return e;let f={scrollLeft:0,scrollTop:0},a=(0,r.ze)(1),p=(0,r.ze)(0);if((u||!u&&"fixed"!==o)&&(("body"!==(0,i.wk)(n)||(0,i.ao)(l))&&(f=(0,i.Lw)(n)),(0,i.Re)(n))){let t=s(n);a=c(n),p.x=t.x+n.clientLeft,p.y=t.y+n.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-f.scrollLeft*a.x+p.x,y:e.y*a.y-f.scrollTop*a.y+p.y}},getDocumentElement:i.tF,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:u}=t,l="clippingAncestors"===n?function(t,e){let n=e.get(t);if(n)return n;let r=(0,i.Kx)(t,[],!1).filter(t=>(0,i.kK)(t)&&"body"!==(0,i.wk)(t)),o=null,u="fixed"===(0,i.Dx)(t).position,l=u?(0,i.Ow)(t):t;for(;(0,i.kK)(l)&&!(0,i.Py)(l);){let e=(0,i.Dx)(l),n=(0,i.hT)(l);n||"fixed"!==e.position||(o=null);let c=u?!n&&!o:!n&&"static"===e.position&&!!o&&["absolute","fixed"].includes(o.position)||(0,i.ao)(l)&&!n&&function t(e,n){let r=(0,i.Ow)(e);return!(r===n||!(0,i.kK)(r)||(0,i.Py)(r))&&("fixed"===(0,i.Dx)(r).position||t(r,n))}(t,l);c?r=r.filter(t=>t!==l):o=e,l=(0,i.Ow)(l)}return e.set(t,r),r}(e,this._c):[].concat(n),c=[...l,o],f=c[0],a=c.reduce((t,n)=>{let o=d(e,n,u);return t.top=(0,r.Fp)(o.top,t.top),t.right=(0,r.VV)(o.right,t.right),t.bottom=(0,r.VV)(o.bottom,t.bottom),t.left=(0,r.Fp)(o.left,t.left),t},d(e,f,u));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:y,getElementRects:m,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){return u(t)},getScale:c,isElement:i.kK,isRTL:function(t){return"rtl"===(0,i.Dx)(t).direction}};function v(t,e,n,o){let u;void 0===o&&(o={});let{ancestorScroll:c=!0,ancestorResize:f=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:p="function"==typeof IntersectionObserver,animationFrame:d=!1}=o,h=l(t),y=c||f?[...h?(0,i.Kx)(h):[],...(0,i.Kx)(e)]:[];y.forEach(t=>{c&&t.addEventListener("scroll",n,{passive:!0}),f&&t.addEventListener("resize",n)});let m=h&&p?function(t,e){let n,o=null,u=(0,i.tF)(t);function l(){clearTimeout(n),o&&o.disconnect(),o=null}return!function i(c,f){void 0===c&&(c=!1),void 0===f&&(f=1),l();let{left:a,top:s,width:p,height:d}=t.getBoundingClientRect();if(c||e(),!p||!d)return;let h=(0,r.GW)(s),y=(0,r.GW)(u.clientWidth-(a+p)),m=(0,r.GW)(u.clientHeight-(s+d)),g=(0,r.GW)(a),v={rootMargin:-h+"px "+-y+"px "+-m+"px "+-g+"px",threshold:(0,r.Fp)(0,(0,r.VV)(1,f))||1},w=!0;function b(t){let e=t[0].intersectionRatio;if(e!==f){if(!w)return i();e?i(!1,e):n=setTimeout(()=>{i(!1,1e-7)},100)}w=!1}try{o=new IntersectionObserver(b,{...v,root:u.ownerDocument})}catch(t){o=new IntersectionObserver(b,v)}o.observe(t)}(!0),l}(h,n):null,g=-1,v=null;a&&(v=new ResizeObserver(t=>{let[r]=t;r&&r.target===h&&v&&(v.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{v&&v.observe(e)})),n()}),h&&!d&&v.observe(h),v.observe(e));let w=d?s(t):null;return d&&function e(){let r=s(t);w&&(r.x!==w.x||r.y!==w.y||r.width!==w.width||r.height!==w.height)&&n(),w=r,u=requestAnimationFrame(e)}(),n(),()=>{y.forEach(t=>{c&&t.removeEventListener("scroll",n),f&&t.removeEventListener("resize",n)}),m&&m(),v&&v.disconnect(),v=null,d&&cancelAnimationFrame(u)}}let w=(t,e,n)=>{let r=new Map,i={platform:g,...n},u={...i.platform,_c:r};return(0,o.oo)(t,e,{...i,platform:u})}},9082:function(t,e,n){n.d(e,{Ct:function(){return o},Fp:function(){return u},GW:function(){return c},Go:function(){return _},I4:function(){return g},JB:function(){return E},KX:function(){return k},NM:function(){return l},Qq:function(){return v},Rn:function(){return m},VV:function(){return i},Wh:function(){return w},gy:function(){return x},hp:function(){return y},i8:function(){return b},k3:function(){return h},ku:function(){return d},mA:function(){return r},pw:function(){return R},uZ:function(){return p},yd:function(){return O},ze:function(){return f}});let r=["top","right","bottom","left"],o=r.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]),i=Math.min,u=Math.max,l=Math.round,c=Math.floor,f=t=>({x:t,y:t}),a={left:"right",right:"left",bottom:"top",top:"bottom"},s={start:"end",end:"start"};function p(t,e,n){return u(t,i(e,n))}function d(t,e){return"function"==typeof t?t(e):t}function h(t){return t.split("-")[0]}function y(t){return t.split("-")[1]}function m(t){return"x"===t?"y":"x"}function g(t){return"y"===t?"height":"width"}function v(t){return["top","bottom"].includes(h(t))?"y":"x"}function w(t){return m(v(t))}function b(t,e,n){void 0===n&&(n=!1);let r=y(t),o=w(t),i=g(o),u="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return e.reference[i]>e.floating[i]&&(u=R(u)),[u,R(u)]}function x(t){let e=R(t);return[_(t),e,_(e)]}function _(t){return t.replace(/start|end/g,t=>s[t])}function k(t,e,n,r){let o=y(t),i=function(t,e,n){let r=["left","right"],o=["right","left"];switch(t){case"top":case"bottom":if(n)return e?o:r;return e?r:o;case"left":case"right":return e?["top","bottom"]:["bottom","top"];default:return[]}}(h(t),"start"===n,r);return o&&(i=i.map(t=>t+"-"+o),e&&(i=i.concat(i.map(_)))),i}function R(t){return t.replace(/left|right|bottom|top/g,t=>a[t])}function O(t){return"number"!=typeof t?{top:0,right:0,bottom:0,left:0,...t}:{top:t,right:t,bottom:t,left:t}}function E(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}},96025:function(t,e,n){function r(t){return u(t)?(t.nodeName||"").toLowerCase():"#document"}function o(t){var e;return(null==t?void 0:null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function i(t){var e;return null==(e=(u(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function u(t){return t instanceof Node||t instanceof o(t).Node}function l(t){return t instanceof Element||t instanceof o(t).Element}function c(t){return t instanceof HTMLElement||t instanceof o(t).HTMLElement}function f(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof o(t).ShadowRoot)}function a(t){let{overflow:e,overflowX:n,overflowY:r,display:o}=m(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(o)}function s(t){return["table","td","th"].includes(r(t))}function p(t){let e=h(),n=m(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(t=>(n.willChange||"").includes(t))||["paint","layout","strict","content"].some(t=>(n.contain||"").includes(t))}function d(t){let e=v(t);for(;c(e)&&!y(e);){if(p(e))return e;e=v(e)}return null}function h(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function y(t){return["html","body","#document"].includes(r(t))}function m(t){return o(t).getComputedStyle(t)}function g(t){return l(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function v(t){if("html"===r(t))return t;let e=t.assignedSlot||t.parentNode||f(t)&&t.host||i(t);return f(e)?e.host:e}n.d(e,{Dx:function(){return m},Jj:function(){return o},Kx:function(){return function t(e,n,r){var i;void 0===n&&(n=[]),void 0===r&&(r=!0);let u=function t(e){let n=v(e);return y(n)?e.ownerDocument?e.ownerDocument.body:e.body:c(n)&&a(n)?n:t(n)}(e),l=u===(null==(i=e.ownerDocument)?void 0:i.body),f=o(u);return l?n.concat(f,f.visualViewport||[],a(u)?u:[],f.frameElement&&r?t(f.frameElement):[]):n.concat(u,t(u,[],r))}},Lw:function(){return g},Ow:function(){return v},Pf:function(){return h},Py:function(){return y},Re:function(){return c},Ze:function(){return s},ao:function(){return a},gQ:function(){return d},hT:function(){return p},kK:function(){return l},tF:function(){return i},wk:function(){return r}})},50044:function(t,e,n){n.r(e),n.d(e,{__addDisposableResource:function(){return D},__assign:function(){return i},__asyncDelegator:function(){return O},__asyncGenerator:function(){return R},__asyncValues:function(){return E},__await:function(){return k},__awaiter:function(){return h},__classPrivateFieldGet:function(){return j},__classPrivateFieldIn:function(){return L},__classPrivateFieldSet:function(){return F},__createBinding:function(){return m},__decorate:function(){return l},__disposeResources:function(){return C},__esDecorate:function(){return f},__exportStar:function(){return g},__extends:function(){return o},__generator:function(){return y},__importDefault:function(){return S},__importStar:function(){return P},__makeTemplateObject:function(){return T},__metadata:function(){return d},__param:function(){return c},__propKey:function(){return s},__read:function(){return w},__rest:function(){return u},__runInitializers:function(){return a},__setFunctionName:function(){return p},__spread:function(){return b},__spreadArray:function(){return _},__spreadArrays:function(){return x},__values:function(){return v}});var r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function o(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var i=function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function u(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>e.indexOf(r)&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)0>e.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n}function l(t,e,n,r){var o,i=arguments.length,u=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(u=(i<3?o(u):i>3?o(e,n,u):o(e,n))||u);return i>3&&u&&Object.defineProperty(e,n,u),u}function c(t,e){return function(n,r){e(n,r,t)}}function f(t,e,n,r,o,i){function u(t){if(void 0!==t&&"function"!=typeof t)throw TypeError("Function expected");return t}for(var l,c=r.kind,f="getter"===c?"get":"setter"===c?"set":"value",a=!e&&t?r.static?t:t.prototype:null,s=e||(a?Object.getOwnPropertyDescriptor(a,r.name):{}),p=!1,d=n.length-1;d>=0;d--){var h={};for(var y in r)h[y]="access"===y?{}:r[y];for(var y in r.access)h.access[y]=r.access[y];h.addInitializer=function(t){if(p)throw TypeError("Cannot add initializers after decoration has completed");i.push(u(t||null))};var m=(0,n[d])("accessor"===c?{get:s.get,set:s.set}:s[f],h);if("accessor"===c){if(void 0===m)continue;if(null===m||"object"!=typeof m)throw TypeError("Object expected");(l=u(m.get))&&(s.get=l),(l=u(m.set))&&(s.set=l),(l=u(m.init))&&o.unshift(l)}else(l=u(m))&&("field"===c?o.unshift(l):s[f]=l)}a&&Object.defineProperty(a,r.name,s),p=!0}function a(t,e,n){for(var r=arguments.length>2,o=0;o<e.length;o++)n=r?e[o].call(t,n):e[o].call(t);return r?n:void 0}function s(t){return"symbol"==typeof t?t:"".concat(t)}function p(t,e,n){return"symbol"==typeof e&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:n?"".concat(n," ",e):e})}function d(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function h(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function l(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):((e=t.value)instanceof n?e:new n(function(t){t(e)})).then(u,l)}c((r=r.apply(t,e||[])).next())})}function y(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(c){return function(l){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(u=0)),u;)try{if(n=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return u.label++,{value:l[1],done:!1};case 5:u.label++,r=l[1],l=[0];continue;case 7:l=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===l[0]||2===l[0])){u=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){u.label=l[1];break}if(6===l[0]&&u.label<o[1]){u.label=o[1],o=l;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(l);break}o[2]&&u.ops.pop(),u.trys.pop();continue}l=e.call(t,u)}catch(t){l=[6,t],r=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}var m=Object.create?function(t,e,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(e,n);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,o)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]};function g(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||m(e,t,n)}function v(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function w(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),u=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u}function b(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(w(arguments[e]));return t}function x(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),o=0,e=0;e<n;e++)for(var i=arguments[e],u=0,l=i.length;u<l;u++,o++)r[o]=i[u];return r}function _(t,e,n){if(n||2==arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}function k(t){return this instanceof k?(this.v=t,this):new k(t)}function R(t,e,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),i=[];return r={},u("next"),u("throw"),u("return"),r[Symbol.asyncIterator]=function(){return this},r;function u(t){o[t]&&(r[t]=function(e){return new Promise(function(n,r){i.push([t,e,n,r])>1||l(t,e)})})}function l(t,e){try{var n;(n=o[t](e)).value instanceof k?Promise.resolve(n.value.v).then(c,f):a(i[0][2],n)}catch(t){a(i[0][3],t)}}function c(t){l("next",t)}function f(t){l("throw",t)}function a(t,e){t(e),i.shift(),i.length&&l(i[0][0],i[0][1])}}function O(t){var e,n;return e={},r("next"),r("throw",function(t){throw t}),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,o){e[r]=t[r]?function(e){return(n=!n)?{value:k(t[r](e)),done:!1}:o?o(e):e}:o}}function E(t){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=v(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise(function(r,o){!function(t,e,n,r){Promise.resolve(r).then(function(e){t({value:e,done:n})},e)}(r,o,(e=t[n](e)).done,e.value)})}}}function T(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}var A=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e};function P(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&m(e,t,n);return A(e,t),e}function S(t){return t&&t.__esModule?t:{default:t}}function j(t,e,n,r){if("a"===n&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!r:!e.has(t))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(t):r?r.value:e.get(t)}function F(t,e,n,r,o){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!o)throw TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!o:!e.has(t))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(t,n):o?o.value=n:e.set(t,n),n}function L(t,e){if(null===e||"object"!=typeof e&&"function"!=typeof e)throw TypeError("Cannot use 'in' operator on non-object");return"function"==typeof t?e===t:t.has(e)}function D(t,e,n){if(null!=e){var r;if("object"!=typeof e&&"function"!=typeof e)throw TypeError("Object expected.");if(n){if(!Symbol.asyncDispose)throw TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(void 0===r){if(!Symbol.dispose)throw TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose]}if("function"!=typeof r)throw TypeError("Object not disposable.");t.stack.push({value:e,dispose:r,async:n})}else n&&t.stack.push({async:!0});return e}var V="function"==typeof SuppressedError?SuppressedError:function(t,e,n){var r=Error(n);return r.name="SuppressedError",r.error=t,r.suppressed=e,r};function C(t){function e(e){t.error=t.hasError?new V(e,t.error,"An error was suppressed during disposal."):e,t.hasError=!0}return function n(){for(;t.stack.length;){var r=t.stack.pop();try{var o=r.dispose&&r.dispose.call(r.value);if(r.async)return Promise.resolve(o).then(n,function(t){return e(t),n()})}catch(t){e(t)}}if(t.hasError)throw t.error}()}e.default={__extends:o,__assign:i,__rest:u,__decorate:l,__param:c,__metadata:d,__awaiter:h,__generator:y,__createBinding:m,__exportStar:g,__values:v,__read:w,__spread:b,__spreadArrays:x,__spreadArray:_,__await:k,__asyncGenerator:R,__asyncDelegator:O,__asyncValues:E,__makeTemplateObject:T,__importStar:P,__importDefault:S,__classPrivateFieldGet:j,__classPrivateFieldSet:F,__classPrivateFieldIn:L,__addDisposableResource:D,__disposeResources:C}}}]);