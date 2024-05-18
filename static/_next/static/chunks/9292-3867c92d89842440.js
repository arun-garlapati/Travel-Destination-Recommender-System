"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9292],{59292:function(e,t,r){r.d(t,{D:function(){return f},o:function(){return b}});var n=r(13428),l=r(2265),o=r(33449),u=r(34625),i=r(89158),a=r(78136),s=r(13840);function c(e){return void 0!==e.normalize?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}function f(e={}){let{ignoreAccents:t=!0,ignoreCase:r=!0,limit:n,matchFrom:l="any",stringify:o,trim:u=!1}=e;return(e,{inputValue:i,getOptionLabel:a})=>{let s=u?i.trim():i;r&&(s=s.toLowerCase()),t&&(s=c(s));let f=s?e.filter(e=>{let n=(o||a)(e);return r&&(n=n.toLowerCase()),t&&(n=c(n)),"start"===l?0===n.indexOf(s):n.indexOf(s)>-1}):e;return"number"==typeof n?f.slice(0,n):f}}function d(e,t){for(let r=0;r<e.length;r+=1)if(t(e[r]))return r;return -1}let p=f(),g=e=>{var t;return null!==e.current&&(null==(t=e.current.parentElement)?void 0:t.contains(document.activeElement))};function b(e){let{unstable_isActiveElementInListbox:t=g,unstable_classNamePrefix:r="Mui",autoComplete:c=!1,autoHighlight:f=!1,autoSelect:b=!1,blurOnSelect:h=!1,clearOnBlur:v=!e.freeSolo,clearOnEscape:x=!1,componentName:k="useAutocomplete",defaultValue:m=e.multiple?[]:null,disableClearable:y=!1,disableCloseOnSelect:D=!1,disabled:w,disabledItemsFocusable:S=!1,disableListWrap:A=!1,filterOptions:$=p,filterSelectedOptions:C=!1,freeSolo:O=!1,getOptionDisabled:T,getOptionLabel:P=e=>{var t;return null!=(t=e.label)?t:e},groupBy:E,handleHomeEndKeys:L=!e.freeSolo,id:Z,includeInputInList:R=!1,inputValue:I,isOptionEqualToValue:M=(e,t)=>e===t,multiple:H=!1,onChange:q,onClose:N,onHighlightChange:V,onInputChange:K,onOpen:_,open:z,openOnFocus:F=!1,options:B,readOnly:U=!1,selectOnFocus:j=!e.freeSolo,value:G}=e,J=(0,o.Z)(Z),Q=P;Q=e=>{let t=P(e);return"string"!=typeof t?String(t):t};let W=l.useRef(!1),X=l.useRef(!0),Y=l.useRef(null),ee=l.useRef(null),[et,er]=l.useState(null),[en,el]=l.useState(-1),eo=f?0:-1,eu=l.useRef(eo),[ei,ea]=(0,u.Z)({controlled:G,default:m,name:k}),[es,ec]=(0,u.Z)({controlled:I,default:"",name:k,state:"inputValue"}),[ef,ed]=l.useState(!1),ep=l.useCallback((e,t)=>{let r;let n=H?ei.length<t.length:null!==t;if(n||v){if(H)r="";else if(null==t)r="";else{let e=Q(t);r="string"==typeof e?e:""}es!==r&&(ec(r),K&&K(e,r,"reset"))}},[Q,es,H,K,ec,v,ei]),[eg,eb]=(0,u.Z)({controlled:z,default:!1,name:k,state:"open"}),[eh,ev]=l.useState(!0),ex=!H&&null!=ei&&es===Q(ei),ek=eg&&!U,em=ek?$(B.filter(e=>!(C&&(H?ei:[ei]).some(t=>null!==t&&M(e,t)))),{inputValue:ex&&eh?"":es,getOptionLabel:Q}):[],ey=(0,i.Z)({filteredOptions:em,value:ei,inputValue:es});l.useEffect(()=>{let e=ei!==ey.value;(!ef||e)&&(!O||e)&&ep(null,ei)},[ei,ep,ef,ey.value,O]);let eD=eg&&em.length>0&&!U,ew=(0,a.Z)(e=>{-1===e?Y.current.focus():et.querySelector(`[data-tag-index="${e}"]`).focus()});l.useEffect(()=>{H&&en>ei.length-1&&(el(-1),ew(-1))},[ei,H,en,ew]);let eS=(0,a.Z)(({event:e,index:t,reason:n="auto"})=>{if(eu.current=t,-1===t?Y.current.removeAttribute("aria-activedescendant"):Y.current.setAttribute("aria-activedescendant",`${J}-option-${t}`),V&&V(e,-1===t?null:em[t],n),!ee.current)return;let l=ee.current.querySelector(`[role="option"].${r}-focused`);l&&(l.classList.remove(`${r}-focused`),l.classList.remove(`${r}-focusVisible`));let o=ee.current;if("listbox"!==ee.current.getAttribute("role")&&(o=ee.current.parentElement.querySelector('[role="listbox"]')),!o)return;if(-1===t){o.scrollTop=0;return}let u=ee.current.querySelector(`[data-option-index="${t}"]`);if(u&&(u.classList.add(`${r}-focused`),"keyboard"===n&&u.classList.add(`${r}-focusVisible`),o.scrollHeight>o.clientHeight&&"mouse"!==n&&"touch"!==n)){let e=o.clientHeight+o.scrollTop,t=u.offsetTop+u.offsetHeight;t>e?o.scrollTop=t-o.clientHeight:u.offsetTop-u.offsetHeight*(E?1.3:0)<o.scrollTop&&(o.scrollTop=u.offsetTop-u.offsetHeight*(E?1.3:0))}}),eA=(0,a.Z)(({event:e,diff:t,direction:r="next",reason:n="auto"})=>{if(!ek)return;let l=function(e,t){if(!ee.current||e<0||e>=em.length)return -1;let r=e;for(;;){let n=ee.current.querySelector(`[data-option-index="${r}"]`),l=!S&&(!n||n.disabled||"true"===n.getAttribute("aria-disabled"));if(n&&n.hasAttribute("tabindex")&&!l)return r;if((r="next"===t?(r+1)%em.length:(r-1+em.length)%em.length)===e)return -1}}((()=>{let e=em.length-1;if("reset"===t)return eo;if("start"===t)return 0;if("end"===t)return e;let r=eu.current+t;return r<0?-1===r&&R?-1:A&&-1!==eu.current||Math.abs(t)>1?0:e:r>e?r===e+1&&R?-1:A||Math.abs(t)>1?e:0:r})(),r);if(eS({index:l,reason:n,event:e}),c&&"reset"!==t){if(-1===l)Y.current.value=es;else{let e=Q(em[l]);Y.current.value=e;let t=e.toLowerCase().indexOf(es.toLowerCase());0===t&&es.length>0&&Y.current.setSelectionRange(es.length,e.length)}}}),e$=()=>{if(-1!==eu.current&&ey.filteredOptions&&ey.filteredOptions.length!==em.length&&ey.inputValue===es&&(H?ei.length===ey.value.length&&ey.value.every((e,t)=>Q(ei[t])===Q(e)):((e,t)=>{let r=e?Q(e):"",n=t?Q(t):"";return r===n})(ey.value,ei))){let e=ey.filteredOptions[eu.current];if(e){let t=em.some(t=>Q(t)===Q(e));if(t)return!0}}return!1},eC=l.useCallback(()=>{if(!ek||e$())return;let e=H?ei[0]:ei;if(0===em.length||null==e){eA({diff:"reset"});return}if(ee.current){if(null!=e){let t=em[eu.current];if(H&&t&&-1!==d(ei,e=>M(t,e)))return;let r=d(em,t=>M(t,e));-1===r?eA({diff:"reset"}):eS({index:r});return}if(eu.current>=em.length-1){eS({index:em.length-1});return}eS({index:eu.current})}},[em.length,!H&&ei,C,eA,eS,ek,es,H]),eO=(0,a.Z)(e=>{(0,s.Z)(ee,e),e&&eC()});l.useEffect(()=>{eC()},[eC]);let eT=e=>{!eg&&(eb(!0),ev(!0),_&&_(e))},eP=(e,t)=>{eg&&(eb(!1),N&&N(e,t))},eE=(e,t,r,n)=>{if(H){if(ei.length===t.length&&ei.every((e,r)=>e===t[r]))return}else if(ei===t)return;q&&q(e,t,r,n),ea(t)},eL=l.useRef(!1),eZ=(e,t,r="selectOption",n="options")=>{let l=r,o=t;if(H){o=Array.isArray(ei)?ei.slice():[];let e=d(o,e=>M(t,e));-1===e?o.push(t):"freeSolo"!==n&&(o.splice(e,1),l="removeOption")}ep(e,o),eE(e,o,l,{option:t}),D||e&&(e.ctrlKey||e.metaKey)||eP(e,l),(!0===h||"touch"===h&&eL.current||"mouse"===h&&!eL.current)&&Y.current.blur()},eR=(e,t)=>{if(!H)return;""===es&&eP(e,"toggleInput");let r=en;-1===en?""===es&&"previous"===t&&(r=ei.length-1):((r+="next"===t?1:-1)<0&&(r=0),r===ei.length&&(r=-1)),el(r=function(e,t){if(-1===e)return -1;let r=e;for(;;){if("next"===t&&r===ei.length||"previous"===t&&-1===r)return -1;let e=et.querySelector(`[data-tag-index="${r}"]`);if(e&&e.hasAttribute("tabindex")&&!e.disabled&&"true"!==e.getAttribute("aria-disabled"))return r;r+="next"===t?1:-1}}(r,t)),ew(r)},eI=e=>{W.current=!0,ec(""),K&&K(e,"","clear"),eE(e,H?[]:null,"clear")},eM=e=>t=>{if(e.onKeyDown&&e.onKeyDown(t),!t.defaultMuiPrevented&&(-1!==en&&-1===["ArrowLeft","ArrowRight"].indexOf(t.key)&&(el(-1),ew(-1)),229!==t.which))switch(t.key){case"Home":ek&&L&&(t.preventDefault(),eA({diff:"start",direction:"next",reason:"keyboard",event:t}));break;case"End":ek&&L&&(t.preventDefault(),eA({diff:"end",direction:"previous",reason:"keyboard",event:t}));break;case"PageUp":t.preventDefault(),eA({diff:-5,direction:"previous",reason:"keyboard",event:t}),eT(t);break;case"PageDown":t.preventDefault(),eA({diff:5,direction:"next",reason:"keyboard",event:t}),eT(t);break;case"ArrowDown":t.preventDefault(),eA({diff:1,direction:"next",reason:"keyboard",event:t}),eT(t);break;case"ArrowUp":t.preventDefault(),eA({diff:-1,direction:"previous",reason:"keyboard",event:t}),eT(t);break;case"ArrowLeft":eR(t,"previous");break;case"ArrowRight":eR(t,"next");break;case"Enter":if(-1!==eu.current&&ek){let e=em[eu.current],r=!!T&&T(e);if(t.preventDefault(),r)return;eZ(t,e,"selectOption"),c&&Y.current.setSelectionRange(Y.current.value.length,Y.current.value.length)}else O&&""!==es&&!1===ex&&(H&&t.preventDefault(),eZ(t,es,"createOption","freeSolo"));break;case"Escape":ek?(t.preventDefault(),t.stopPropagation(),eP(t,"escape")):x&&(""!==es||H&&ei.length>0)&&(t.preventDefault(),t.stopPropagation(),eI(t));break;case"Backspace":if(H&&!U&&""===es&&ei.length>0){let e=-1===en?ei.length-1:en,r=ei.slice();r.splice(e,1),eE(t,r,"removeOption",{option:ei[e]})}break;case"Delete":if(H&&!U&&""===es&&ei.length>0&&-1!==en){let e=ei.slice();e.splice(en,1),eE(t,e,"removeOption",{option:ei[en]})}}},eH=e=>{ed(!0),F&&!W.current&&eT(e)},eq=e=>{if(t(ee)){Y.current.focus();return}ed(!1),X.current=!0,W.current=!1,b&&-1!==eu.current&&ek?eZ(e,em[eu.current],"blur"):b&&O&&""!==es?eZ(e,es,"blur","freeSolo"):v&&ep(e,ei),eP(e,"blur")},eN=e=>{let t=e.target.value;es!==t&&(ec(t),ev(!1),K&&K(e,t,"input")),""===t?y||H||eE(e,null,"clear"):eT(e)},eV=e=>{let t=Number(e.currentTarget.getAttribute("data-option-index"));eu.current!==t&&eS({event:e,index:t,reason:"mouse"})},eK=e=>{eS({event:e,index:Number(e.currentTarget.getAttribute("data-option-index")),reason:"touch"}),eL.current=!0},e_=e=>{let t=Number(e.currentTarget.getAttribute("data-option-index"));eZ(e,em[t],"selectOption"),eL.current=!1},ez=e=>t=>{let r=ei.slice();r.splice(e,1),eE(t,r,"removeOption",{option:ei[e]})},eF=e=>{eg?eP(e,"toggleInput"):eT(e)},eB=e=>{e.currentTarget.contains(e.target)&&e.target.getAttribute("id")!==J&&e.preventDefault()},eU=e=>{e.currentTarget.contains(e.target)&&(Y.current.focus(),j&&X.current&&Y.current.selectionEnd-Y.current.selectionStart==0&&Y.current.select(),X.current=!1)},ej=e=>{w||""!==es&&eg||eF(e)},eG=O&&es.length>0;eG=eG||(H?ei.length>0:null!==ei);let eJ=em;return E&&(eJ=em.reduce((e,t,r)=>{let n=E(t);return e.length>0&&e[e.length-1].group===n?e[e.length-1].options.push(t):e.push({key:r,index:r,group:n,options:[t]}),e},[])),w&&ef&&eq(),{getRootProps:(e={})=>(0,n.Z)({"aria-owns":eD?`${J}-listbox`:null},e,{onKeyDown:eM(e),onMouseDown:eB,onClick:eU}),getInputLabelProps:()=>({id:`${J}-label`,htmlFor:J}),getInputProps:()=>({id:J,value:es,onBlur:eq,onFocus:eH,onChange:eN,onMouseDown:ej,"aria-activedescendant":ek?"":null,"aria-autocomplete":c?"both":"list","aria-controls":eD?`${J}-listbox`:void 0,"aria-expanded":eD,autoComplete:"off",ref:Y,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:w}),getClearProps:()=>({tabIndex:-1,type:"button",onClick:eI}),getPopupIndicatorProps:()=>({tabIndex:-1,type:"button",onClick:eF}),getTagProps:({index:e})=>(0,n.Z)({key:e,"data-tag-index":e,tabIndex:-1},!U&&{onDelete:ez(e)}),getListboxProps:()=>({role:"listbox",id:`${J}-listbox`,"aria-labelledby":`${J}-label`,ref:eO,onMouseDown:e=>{e.preventDefault()}}),getOptionProps:({index:e,option:t})=>{let r=(H?ei:[ei]).some(e=>null!=e&&M(t,e)),n=!!T&&T(t);return{key:Q(t),tabIndex:-1,role:"option",id:`${J}-option-${e}`,onMouseMove:eV,onClick:e_,onTouchStart:eK,"data-option-index":e,"aria-disabled":n,"aria-selected":r}},id:J,inputValue:es,value:ei,dirty:eG,expanded:ek&&et,popupOpen:ek,focused:ef||-1!==en,anchorEl:et,setAnchorEl:er,focusedTag:en,groupedOptions:eJ}}},89158:function(e,t,r){var n=r(2265);t.Z=e=>{let t=n.useRef({});return n.useEffect(()=>{t.current=e}),t.current}}}]);