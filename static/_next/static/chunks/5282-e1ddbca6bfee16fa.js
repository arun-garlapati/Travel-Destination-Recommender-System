"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5282],{92505:function(e,t,l){l(15231),l(470);var n=l(31162);t.Z=(0,n.$)("ccd0d66610e4ed27321ce8fe41215c6e8f553fd4")},4927:function(e,t,l){l.d(t,{H:function(){return a},N:function(){return r}}),l(15231),l(470);var n=l(31162),a=(0,n.$)("8e861bd4edecf53f9ce2ab999404a5825198952c"),r=(0,n.$)("7e4ee2a2f8f14a70e78a960ac7116c95247888e1")},55370:function(e,t,l){l.d(t,{E:function(){return a},T:function(){return r}}),l(15231),l(470);var n=l(31162),a=(0,n.$)("22fa0f60ca6d732e1ee54e301469cf835674a633"),r=(0,n.$)("0faa308bfeb8d8c89c79084fee37af358687656d")},37373:function(e,t,l){l.r(t),l.d(t,{default:function(){return a}});var n=l(57437);function a(e){let{error:t}=e;return console.log({error:t}),(0,n.jsx)("div",{className:"mt-2 flex w-full flex-col items-start justify-center",children:(0,n.jsxs)("div",{className:"mt-2 flex flex-col items-start gap-2 rounded-md border border-solid border-gray-200 bg-gray-50 p-2",children:[(0,n.jsx)("h2",{className:"text-lg font-medium",children:"Ups!"}),(0,n.jsx)("p",{className:"line-clamp-2 text-start text-sm text-gray-700",children:"Something went wrong while trying to get hotels. But don't worry, you can build your trip without them."}),(0,n.jsx)("p",{className:"max-h-[3rem] w-full overflow-y-auto rounded-md border border-solid border-gray-300 p-2 text-start text-xs text-gray-700",children:null==t?void 0:t.message})]})})}},4541:function(e,t,l){l.r(t),l.d(t,{default:function(){return i}});var n=l(57437),a=l(21677),r=l(2265),s=l(13784);function i(){let{setLoadingHotels:e}=(0,s.t)(),t=(0,r.useRef)(!1);return(0,r.useEffect)(()=>{let l=setTimeout(()=>{e(!0),t.current=!0},300);return()=>{clearTimeout(l),t.current&&(e(!1),t.current=!1)}},[]),(0,n.jsx)("div",{className:"mt-10 grid max-h-full grid-cols-1 gap-3 overflow-y-auto pb-10 sm:grid-cols-2 sm:gap-8",children:[...Array(6)].map((e,t)=>(0,n.jsxs)("div",{className:"flex gap-3 sm:flex-col sm:gap-0",children:[(0,n.jsx)("div",{className:"w-[12rem] sm:w-full",children:(0,n.jsx)(a.Z,{variant:"rounded",animation:"wave",width:"100%",height:180},t)}),(0,n.jsxs)("div",{className:"mt-0 flex w-full flex-col sm:mt-2",children:[(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)(a.Z,{variant:"text",animation:"wave",width:"90%",height:40},t),(0,n.jsx)(a.Z,{variant:"text",animation:"wave",width:"80%",height:30},t)]}),(0,n.jsx)("div",{className:"mt-[4rem] sm:hidden",children:(0,n.jsx)(a.Z,{variant:"text",animation:"wave",width:"50%",height:50},t)})]})]}))})}},21043:function(e,t,l){l.r(t),l.d(t,{default:function(){return h}});var n=l(57437),a=l(16691),r=l.n(a),s=l(61396),i=l.n(s),o=l(24033),c=l(68937),d=l(90948);function u(e){let{hotel:t,selectHotel:l,hotelSelected:a,origin:r}=e;return(0,n.jsx)("button",{onClick:e=>{l(e,t),(0,d.qT)(r,t,(null==a?void 0:a.id)!==(null==t?void 0:t.id))},className:"ml-auto flex h-fit items-center gap-1 whitespace-nowrap rounded-md px-2 py-1 text-xs text-white transition-all disabled:cursor-not-allowed md:px-3 md:py-1.5 md:text-sm ".concat((null==a?void 0:a.id)===t.id?"bg-green-400 hover:bg-green-600":"bg-black enabled:hover:bg-gray-800"),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.default,{icon:"ep:select",className:"text-xs"}),(null==a?void 0:a.id)===t.id?"Selected":"Select hotel"]})})}let m={Guesthouse:"material-symbols:house-siding",Hotel:"material-symbols:hotel",Motel:"material-symbols:hotel",Hostel:"material-symbols:house-siding",Apartment:"material-symbols:apartment",Vacation_rentals:"fontisto:holiday-village"};var x=l(13784),f=l(45586);function h(e){let{hotels:t,origin:l}=e,a=(0,o.useSearchParams)(),s=a.get("loading"),{selectedHotel:c,setSelectedHotel:m}=(0,x.t)(),f=(e,t)=>{e.preventDefault(),e.stopPropagation(),m(t,0)};return(0,n.jsx)("div",{className:"grid grid-cols-1 gap-3 pb-10 sm:grid-cols-2",children:t.map((e,t)=>(0,n.jsxs)(i(),{href:e.url,target:"_blank",rel:"noreferrer",className:"relative flex cursor-pointer flex-row gap-3 rounded-lg border border-solid border-gray-300 p-2 transition-all hover:border-gray-400 hover:shadow-md sm:flex-col sm:gap-2 ".concat(s&&t>1?"hidden":""),onClick:t=>{(0,d.cD)(l,e),t.stopPropagation()},children:[(0,n.jsxs)("div",{className:"relative z-[0] h-full w-full max-w-[7rem] sm:max-w-none",children:[(0,n.jsx)(r(),{src:e.image,alt:e.name,width:800,height:800,className:"h-[8rem] w-full max-w-[7rem] rounded-md bg-black object-cover sm:max-w-none"}),(0,n.jsx)(p,{hotel:e,className:"absolute left-2 top-2 z-[1] hidden h-fit rounded-md bg-white/80 p-0.5 px-1.5 sm:flex"}),(0,n.jsx)(g,{hotel:e,className:"absolute bottom-2 right-2 hidden rounded-md bg-white/80 px-2 sm:flex"})]}),(0,n.jsxs)("div",{className:"mt-0 flex h-[8rem] w-full flex-col justify-between sm:h-auto",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"line-clamp-1 text-start text-base md:text-xl",children:e.name}),(0,n.jsx)("p",{className:"mt-0.5 line-clamp-1 text-start text-xs text-gray-500 md:-mt-1 md:text-sm",children:e.address}),(0,n.jsx)(p,{hotel:e,className:"relative top-1 sm:hidden"})]}),(0,n.jsxs)("div",{className:"flex w-full items-end justify-between sm:mt-3",children:[(0,n.jsx)(g,{hotel:e,className:"sm:hidden"}),(0,n.jsxs)("div",{className:"flex w-full flex-col items-end justify-between gap-1 sm:flex-row ",children:[(0,n.jsx)(v,{hotel:e}),(0,n.jsx)(u,{hotel:e,selectHotel:f,hotelSelected:c[0],origin:l})]})]})]})]},e.id))})}let p=e=>{let{hotel:t}=e;return(null==t?void 0:t.type)&&(0,n.jsx)("div",{...e,children:(0,n.jsx)("div",{className:"flex items-center gap-1 md:flex-col md:items-start md:gap-0",children:(0,n.jsxs)("p",{className:"line-clamp-1 flex items-center gap-0.5 text-sm md:gap-1 md:text-base",children:[m[null==t?void 0:t.type]?(0,n.jsx)(c.default,{icon:m[null==t?void 0:t.type],className:"mb-0.5 text-lg text-gray-500"}):(0,n.jsx)(c.default,{icon:"mingcute:hotel-fill",className:"mb-0.5 text-lg text-gray-500"}),(0,n.jsx)("span",{className:"font-medium text-gray-800",children:null==t?void 0:t.type})]})})})},g=e=>{let{hotel:t}=e;return(0,n.jsx)("div",{...e,children:(0,n.jsxs)("div",{className:"mt-1 flex items-center justify-start gap-1",children:[(0,n.jsxs)("span",{className:"text-base font-bold md:text-xl",children:["$",t.price]}),(0,n.jsx)("span",{className:"text-xs sm:text-sm md:text-base",children:"/night"})]})})},v=e=>{var t;let{hotel:l}=e;return(null==l?void 0:l.review_total)>0&&(0,n.jsxs)("div",{className:"flex w-fit flex-row items-center justify-between gap-2",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"whitespace-nowrap text-xs md:my-0 md:text-end md:text-base",children:(0,f.Z)(l.review_score)}),(0,n.jsxs)("p",{className:"line-clamp-1 whitespace-nowrap text-end text-[10px] font-medium text-gray-500 md:text-xs",children:[null==l?void 0:l.review_total," reviews"]})]}),(0,n.jsx)("span",{className:"mb-1 rounded-md bg-accent-green p-0.5 px-1 text-sm text-white md:mb-0 md:text-lg md:font-semibold",children:null==l?void 0:null===(t=l.review_score)||void 0===t?void 0:t.toFixed(1)})]})}},17631:function(e,t,l){l.r(t),l.d(t,{default:function(){return m}});var n=l(57437),a=l(85263),r=l(16691),s=l.n(r),i=l(2265),o=l(65320);let c=["Customizing your adventure list...","Routing to bypass traffic...","Finding top local eats...","Adding final itinerary touches..."];function d(e){let[t,l]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=setInterval(()=>{l(e=>e+1>=c.length?e:e+1)},5e3);return()=>clearInterval(e)},[]),(0,n.jsx)(o.E.p,{animate:{opacity:[0,1,1],x:[-20,0,0],scale:[.9,1.1,1],color:["#000","#bc81fd","#000","#bc81fd","#000"]},transition:{duration:.4},...e,children:c[t]},t)}var u=l(13784);function m(e){let{from:t,className:l,classNameImage:r,classNameMessages:i}=e,{buildingTrip:o,successCreation:c}=(0,u.t)();return o===t&&(0,n.jsx)("div",{className:l||"absolute left-0 top-0 z-[40] grid h-full w-full place-items-center overflow-hidden rounded-lg bg-white/90 p-10 backdrop-blur-sm",children:(0,n.jsx)("div",{children:c?(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-xl sm:text-2xl md:text-3xl",children:"Here we go... \uD83C\uDF89"}),(0,n.jsx)(s(),{src:"/trippy/trippy-glasses.webp",alt:"Trippy Glasses",width:600,height:600,className:"mx-auto mt-2 h-auto w-[7rem] object-cover"})]}):(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)(d,{className:null!=i?i:"text-xl sm:text-2xl md:text-3xl"}),(0,n.jsx)(a.y1,{src:"/lotties/paperPlane.lottie",autoplay:!0,loop:!0,className:null!=r?r:"mx-auto object-cover mt-[-2rem] h-[13rem] w-[15rem]"})]})})})}},64532:function(e,t,l){l.r(t),l.d(t,{default:function(){return f}});var n=l(57437),a=l(72759),r=l(80504),s=l(24033),i=l(2265),o=l(4927),c=l(55370),d=l(68937),u=l(68099),m=l(34373),x=l(1944);function f(e){var t;let{generateId:l}=e,f=(0,s.useSearchParams)(),h=(0,s.useRouter)(),{deleteSearchParam:p}=(0,u.Z)(),g=f.get("destinationNoSights"),[v,y]=(0,i.useState)(!1),j=(0,x.X)([null===(t=JSON.parse(null!=g?g:"{}"))||void 0===t?void 0:t.name]),b=()=>{y(!0),(0,o.H)().then(e=>{(0,c.T)(e,JSON.parse(null!=g?g:"{}")).then(t=>{p("destinationNoSights"),localStorage.setItem("temporalId",e),h.replace("/trips/".concat(t.id))})}).finally(()=>y(!1))};return(0,n.jsx)(m.Z,{open:!!g,closeModal:()=>{v||p("destinationNoSights")},children:(0,n.jsxs)("div",{className:"max-w-screen-md rounded-lg bg-white p-5 md:p-9",children:[(0,n.jsx)("div",{className:"bg-white",children:(0,n.jsxs)("div",{className:"sm:flex sm:items-start",children:[(0,n.jsx)("div",{className:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",children:(0,n.jsx)(r.G,{icon:a.ik8,className:"text-red-500"})}),(0,n.jsxs)("div",{className:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left",children:[(0,n.jsxs)("h3",{className:"text-center text-2xl font-[400] md:text-start",children:["Oops! ",(0,n.jsx)("span",{className:"hidden md:inline-block",children:"\uD83D\uDE41"})]}),(0,n.jsx)("div",{className:"mt-2",children:(0,n.jsxs)("p",{className:"text-base text-gray-500 md:text-lg",children:["We don't have enough information on"," ",(0,n.jsx)("span",{className:"font-medium text-gray-600",children:j})," for our AI to generate an itinerary. Would you still like to proceed with creating your trip to"," ",(0,n.jsx)("span",{className:"font-medium text-gray-600",children:j}),"?"]})})]})]})}),(0,n.jsxs)("div",{className:"gap-2 px-4 py-3 pt-6 sm:ml-4 sm:flex sm:px-6",children:[(0,n.jsx)("button",{onClick:()=>{if(l)b();else{var e;y(!0),(0,c.T)(null!==(e=localStorage.getItem("temporalId"))&&void 0!==e?e:"",JSON.parse(null!=g?g:"{}")).then(e=>{p("destinationNoSights"),h.replace("/trips/".concat(e.id))}).finally(()=>y(!1))}},disabled:v,className:"hover:bg-primary2 inline-flex w-full justify-center rounded-full bg-accent-green px-4 py-2 text-white shadow-sm enabled:hover:bg-accent-green-2 disabled:bg-gray-300 disabled:text-gray-600 sm:ml-3 sm:w-auto md:py-1.5",children:v?(0,n.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,n.jsx)(d.default,{icon:"line-md:loading-twotone-loop",className:"mb-0.5 text-lg"}),"Creating your trip..."]}):(0,n.jsx)("span",{children:"Continue"})})," ",(0,n.jsx)("button",{onClick:()=>{p("destinationNoSights")},disabled:v,className:"mt-3 inline-flex w-full justify-center rounded-full bg-white px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 enabled:hover:bg-gray-50 disabled:bg-gray-100 sm:mt-0 sm:w-auto md:py-1.5",children:"Cancel"})]})]})})}},22579:function(e,t,l){l.r(t),l.d(t,{default:function(){return i}});var n=l(57437),a=l(24033),r=l(2265),s=l(86222);function i(e){let{nameEvent:t}=e,l=(0,a.usePathname)(),i=(0,r.useRef)(!1);return(0,r.useEffect)(()=>{let e=setTimeout(()=>{(0,s.rR)(t),i.current=!0},300);return()=>{clearTimeout(e),i.current&&((0,s.Br)(t),i.current=!1)}},[l]),(0,n.jsx)(n.Fragment,{})}},14924:function(e,t,l){l.d(t,{Z:function(){return o}});var n=l(57437),a=l(59292),r=l(2265),s=l(68937),i=l(82447);function o(e){let{initialCity:t,className:l,classNameContainer:o,classNameOptions:c="absolute z-50 mt-2 w-full rounded-md border border-solid border-gray-300 bg-white py-2",onChange:d,onSelectPlace:u,disabled:m=!1,autoFocus:x=!1,required:f=!0,placeholder:h="Select a city",showSuggestions:p=!1,showWarningSights:g=!1}=e,[v,y]=(0,r.useState)(null),[j,b]=(0,r.useState)(!1),{results:w,loading:N,open:T,setOpen:S,autocompleteSearch:C,setAutocompleteSearch:H,zeroPlacesFound:R}=(0,i.o)("search-destinations",!1,p);(0,r.useEffect)(()=>{t&&y(t)},[t]);let{getRootProps:k,getInputProps:F,getListboxProps:P,getOptionProps:_,groupedOptions:D}=(0,a.o)({id:"use-autocomplete-demo",options:w,getOptionLabel:e=>null==e?void 0:e.name,open:T,defaultValue:t,value:t,onChange:(e,t)=>{t&&(y(t),u&&(u(t),b(!1)))},onOpen:()=>{S(!0),b(!1)},clearOnBlur:!1,onClose:(e,t)=>{S(!1),v||"blur"!==t||b(!0)},onInputChange:(e,t)=>{H(t),0===t.length&&y(null),d&&d(e,t)},autoHighlight:!0}),I=e=>{let t=RegExp(C,"gi");return e.replace(t,e=>'<span class="text-accent-red-2">'.concat(e,"</span>"))};return(0,n.jsxs)("div",{...k(),className:"relative ".concat(o),children:[(0,n.jsx)("input",{className:"".concat(l," data-hj-allow outline-none ").concat(j?"!border-red-200":""),...F(),defaultValue:"Departure city",placeholder:h,disabled:m,required:f,autoFocus:x,onKeyDown:e=>{"Enter"===e.key&&((null==w?void 0:w.length)===0||N&&C.length>=3)&&(e.stopPropagation(),e.preventDefault())},"data-hj-allow":!0}),N&&!v&&T&&(0,n.jsx)("p",{className:"px-4 ".concat(c),children:(0,n.jsx)("span",{className:"text-sm",children:C.length<4?"Type at least 4 characters":"Loading..."})}),D.length>0?(0,n.jsx)("ul",{className:c,...P(),children:D.map((e,t)=>{let l=e.name.split(", "),a=l[0];return(0,n.jsxs)("li",{className:"flex cursor-pointer items-center justify-between px-4 py-2 text-start",..._({option:e,index:t}),children:[(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:I(a)}}),(0,n.jsx)("span",{className:"text-xs text-gray-600",children:l.slice(1).join(", ")})]}),0===e.sights_count&&g&&(0,n.jsx)("div",{className:"w-fit",children:(0,n.jsxs)("p",{className:"w-fit rounded-md bg-[#fff1d1] px-1 py-0.5 text-xs",children:[(0,n.jsx)(s.default,{icon:"ph:warning",className:"mr-1 inline-flex text-sm"}),"no enough information"]})})]},null==e?void 0:e.name)})}):((null==R?void 0:R.noResults)||j&&!v)&&!N?(0,n.jsx)("div",{className:"px-4 ".concat(c," !bg-gray-100 text-sm text-gray-700"),children:(0,n.jsx)("p",{children:"Please select a valid destination"})}):null]})}},21271:function(e,t,l){l.r(t),l.d(t,{default:function(){return c}});var n=l(57437),a=l(24033),r=l(2521),s=l(13784),i=l(13786),o=l(90948);function c(e){let{tripId:t,temporalId:l,origin:c}=e,{setSuccessCreation:d,setBuildingTrip:u,setSelectedHotel:m,selectedHotel:x}=(0,s.t)(),f=(0,a.useRouter)(),h=(0,a.usePathname)(),p=h.includes("/trips"),g=p?"trips":"landing";return(0,r.Z)(()=>{u(g),(0,i.Z)(t,l,null).then(e=>{d(!0),(0,o.M6)(c,e,x),localStorage.setItem("temporalId",l),setTimeout(()=>{f.replace("/trips/".concat(e.id))},1500)}).finally(()=>m(null))},[]),(0,n.jsx)("div",{className:"sm:h-[18rem]"})}},2521:function(e,t,l){l.d(t,{Z:function(){return a}});var n=l(2265);function a(e,t){let l=(0,n.useRef)(!1);(0,n.useEffect)(()=>{if(!l.current)return l.current=!0,e()},t)}},68099:function(e,t,l){l.d(t,{Z:function(){return a}});var n=l(24033);function a(){let e=(0,n.useRouter)(),t=(0,n.usePathname)(),l=(0,n.useSearchParams)();return{updateSearchParams:function(){for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];console.log({params:a});let s=new URLSearchParams(l);a.forEach(e=>{let{query:t,value:l}=e;s.set(t,l)}),e.replace("".concat(t,"?").concat(s.toString()))},deleteSearchParam:function(){for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];let s=new URLSearchParams(l);a.forEach(e=>s.delete(e)),e.replace("".concat(t,"?").concat(s.toString()))}}}},34373:function(e,t,l){var n=l(57437),a=l(72759),r=l(80504),s=l(16856),i=l(84914),o=l(2265);t.Z=e=>{let{open:t,closeModal:l,options:c={bg:"bg-[#000000c7]",blur:"backdrop-blur-sm",fullWidth:!1},showCloseButton:d=!0,children:u}=e,m=(0,o.useRef)(null);return(0,n.jsx)(s.u.Root,{show:t,as:o.Fragment,children:(0,n.jsxs)(i.V,{as:"div",className:"relative z-[100] w-full rounded-xl",initialFocus:m,onClose:l,onClick:e=>{e.stopPropagation(),e.preventDefault()},children:[(0,n.jsx)(s.u.Child,{as:o.Fragment,enter:"ease-out duration-100",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,n.jsx)("div",{className:"fixed inset-0 bg-opacity-50 transition-opacity ".concat(null==c?void 0:c.bg," ").concat((null==c?void 0:c.blur)?"backdrop-blur-sm backdrop-filter":"")})}),(0,n.jsxs)("div",{className:"fixed inset-0 z-[100] overflow-y-auto",children:[d&&(0,n.jsx)("button",{onClick:l,className:"text-tp-text absolute right-4 top-4 z-[100] flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200",children:(0,n.jsx)(r.G,{icon:a.g82})}),(0,n.jsx)("div",{className:"relative z-[100] flex min-h-full items-center justify-center p-1 text-center md:p-4",children:(0,n.jsx)(s.u.Child,{as:o.Fragment,enter:"ease-out duration-100",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,n.jsx)(i.V.Panel,{className:c.fullWidth?"w-full":"",children:u})})})]})]})})}},23749:function(e,t,l){l.d(t,{g:function(){return c}});var n=l(57437),a=l(72759),r=l(80504),s=l(16856),i=l(84914),o=l(2265);let c=e=>{let{open:t,className:l,children:c,closeModal:d,showCloseButton:u,classNameContainer:m}=e,x=(0,o.useRef)(null);return(0,n.jsx)(s.u.Root,{show:t,as:o.Fragment,children:(0,n.jsxs)(i.V,{as:"div",className:"relative z-[100] w-full rounded-xl",initialFocus:x,onClose:d,onClick:e=>{e.stopPropagation(),e.preventDefault()},children:[(0,n.jsx)(s.u.Child,{as:o.Fragment,enter:"ease-out duration-100",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,n.jsx)("div",{className:"fixed inset-0 bg-[#0000003b] bg-opacity-50 transition-opacity"})}),(0,n.jsxs)("div",{className:"fixed inset-0 z-[96] overflow-y-auto",children:[u&&(0,n.jsx)("button",{onClick:d,className:"text-tp-text absolute right-4 top-4 z-[100] flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200",children:(0,n.jsx)(r.G,{icon:a.g82})}),(0,n.jsx)("div",{className:"relative z-[100] ".concat(m),children:(0,n.jsx)(s.u.Child,{as:o.Fragment,enter:"ease-out duration-100",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,n.jsx)(i.V.Panel,{className:l,children:c})})})]})]})})}},13784:function(e,t,l){l.d(t,{t:function(){return a}});var n=l(94660);let a=(0,n.Ue)(e=>({buildingTrip:"idle",creatingTrip:!1,loadingHotels:!1,selectedHotel:[null],successCreation:!1,setBuildingTrip:t=>{e({buildingTrip:t})},setCreatingTrip:t=>{e({creatingTrip:t})},setSuccessCreation:t=>{e({successCreation:t})},setLoadingHotels:t=>{e({loadingHotels:t})},setSelectedHotel:(t,l)=>{e(e=>{var n;if((null===(n=e.selectedHotel[l])||void 0===n?void 0:n.id)===(null==t?void 0:t.id)){let t=[...e.selectedHotel];return t[l]=null,{selectedHotel:t}}{let n=[...e.selectedHotel];return n[l]=t,{selectedHotel:n}}})},reset:()=>{e({buildingTrip:"idle",creatingTrip:!1,loadingHotels:!1,selectedHotel:[null],successCreation:!1})}}))},13786:function(e,t,l){l.d(t,{Z:function(){return r}}),l(15231),l(470);var n=(0,l(31162).$)("523e9ac53e93e00e8837ba295831dcdcc96056af"),a=l(92505);async function r(e,t,l){try{return l.forEach((l,n)=>{l&&(0,a.Z)({hotelId:l.id,hotelName:l.name,tripId:e.id,destinationIdx:n,temporalId:t})}),await n(e.id,t)}catch(e){throw Error(e)}}},8672:function(e,t,l){l.d(t,{$d:function(){return c},D6:function(){return a},Ex:function(){return r},GG:function(){return i},R9:function(){return o},TP:function(){return d},eK:function(){return s}});var n=l(5265);let a=()=>(0,n.aS)("trip-detail-affiliate-banners",!1),r=()=>!1,s=()=>!0,i=()=>!1,o=()=>!1,c=()=>!1,d=()=>1},90948:function(e,t,l){l.d(t,{DL:function(){return s},LR:function(){return o},M6:function(){return m},Sw:function(){return x},_L:function(){return c},cD:function(){return u},fw:function(){return i},qT:function(){return d},wr:function(){return a}});var n,a,r=l(86222);(n=a||(a={})).LANDING_TRIP="Landing",n.TRIPS_TRIP="Trips";let s=e=>{(0,r.t7)("".concat(e," Autocomplete Started Typing"))},i=(e,t)=>{(0,r.t7)("".concat(t," Autocomplete Selected Destination"),null,[null],null,{destinationName:e.name})},o=e=>{(0,r.t7)("Landing Destination Finder Create Trip Button",null,[null],null,{destinationName:e.name})},c=(e,t)=>{(0,r.t7)("".concat(e," Trip Created Modal Dismissed"),null,[null],null,{"City Name":t})},d=(e,t,l)=>{(0,r.t7)("".concat(e," Trip Created Modal ").concat(l?"Selected":"Deselected"," Hotel"),null,[null],null,{"Hotel Name":t.name,"Hotel Review Score":t.review_score,"Hotel Review Total":t.review_total})},u=(e,t)=>{(0,r.t7)("".concat(e," Trip Created Modal Hotel Clicked"),null,[null],null,{"Hotel Name":t.name,"Hotel Review Score":t.review_score,"Hotel Review Total":t.review_total})},m=(e,t,l)=>{let n={"Hotel Name":null==l?void 0:l.name,"Hotel Review Score":null==l?void 0:l.review_score,"Hotel Review Total":null==l?void 0:l.review_total};(0,r.t7)("".concat(e," Trip Created Modal Built Itinerary"),t.id,(0,r.iv)(t),0,l?n:{})},x=e=>{(0,r.t7)("New Trip Autocomplete ".concat(e?"Expanded":"Closed"))}},1944:function(e,t,l){l.d(t,{X:function(){return n}});let n=e=>{let t=e.filter(e=>!!e).map(e=>{var t;return"string"==typeof e?e.split(",")[0]:null==e?void 0:null===(t=e.destination_str)||void 0===t?void 0:t.split(",")[0]});return(null==t?void 0:t.length)===1?t[0]:(null==t?void 0:t.length)===2?"".concat(t[0]," and ").concat(t[1]):"".concat(null==t?void 0:t.slice(0,-1).join(", ")," and ").concat(null==t?void 0:t.slice(-1)[0])}},45586:function(e,t,l){l.d(t,{Z:function(){return n}});function n(e){if(e<1||e>10)return"";if(e>=9)return"Wonderful";if(e>=8)return"Very good";if(e>=7)return"Good";if(e>=6)return"Okay";if(e>=5)return"Regular";if(e>=4)return"Low score";else if(e>=3)return"Very low score";else if(e>=2)return"Bad score";else return"Bad score"}}}]);