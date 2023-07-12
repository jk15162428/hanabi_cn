/*! For license information please see b1aed839.4696718c.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[9115,7239,4908,9151,6481,3978,4345,9583,6643,3286,8786,8157,627,17,9005,8111],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>u,kt:()=>h});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=i.createContext({}),o=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=o(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=o(a),m=n,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return a?i.createElement(h,l(l({ref:t},u),{},{components:a})):i.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var o=2;o<r;o++)l[o]=a[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var i=a(7294),n=a(6010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return i.createElement("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{"use strict";a.d(t,{Z:()=>w});var i=a(3117),n=a(7294),r=a(6010),l=a(2466),s=a(6775),c=a(1980),o=a(7392),u=a(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:i,default:n}}=e;return{value:t,label:a,attributes:i,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const i=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace({...i.location,search:t.toString()})}),[r,i])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:i}=e,r=d(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=a.find((e=>e.default))??a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[c,o]=h({queryString:a,groupId:i}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,u.Nk)(a);return[i,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:i}),b=(()=>{const e=c??p;return m({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),o(e),g(e)}),[o,g,r]),tabValues:r}}var b=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:s,selectValue:c,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),i=o[a].value;i!==s&&(p(t),c(i))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,i.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,r.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:i}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i}))))}function x(e){const t=g(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",v.tabList)},n.createElement(f,(0,i.Z)({},e,t)),n.createElement(y,(0,i.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return n.createElement(x,(0,i.Z)({key:String(t)},e))}},6679:e=>{e.exports={mainSidebar:["about",{"\u521d\u5b66\u8005\u6307\u5357":["beginner","beginner/card-layout",{"The Chop\uff08\u5f03\u724c\u4f4d\uff09":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues\uff08\u6253\u51fa\u63d0\u793a\uff09":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues\uff08\u4fdd\u7559\u63d0\u793a\uff09":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation\uff08\u63d0\u793a\u89e3\u8bfb\uff09":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle\uff08\u70b9\u4f18\u539f\u5219\uff09":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle\uff08\u4fdd\u7559\u539f\u5219\uff09":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle\uff08\u6700\u5c0f\u63d0\u793a\u4ef7\u503c\u539f\u5219\uff09":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game\uff08\u5f00\u5c40\uff09":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"General Strategy\uff08\u4e00\u822c\u7b56\u7565\uff09":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves\uff08\u7279\u6b8a\u64cd\u4f5c\uff09":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"\u57fa\u7840\u7b56\u7565":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23","level-24","level-25"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/funnels","variant-specific/gray","variant-specific/light-pink","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/no-positive-clues","variant-specific/null-fives","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/odds-and-evens","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white"]},{"Challenge Questions":["challenge-questions","challenge-questions/level-2","challenge-questions/level-8"]},"convention-attribution"]}},1961:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var i=a(7294),n=a(5774),r=a(6679);const l=r.mainSidebar.find((e=>e["\u521d\u5b66\u8005\u6307\u5357"]))["\u521d\u5b66\u8005\u6307\u5357"],s=[];!function e(t,a){for(const i of a)"string"==typeof i?t.push(i):e(t,Object.values(i)[0])}(s,l),"beginner"===s[0]&&s.shift();const c=s.length;function o(e){let{id:t}=e;const a=s.findIndex((e=>`beginner/${t}`===e));if(-1===a)throw new Error("page id not found in sidebar");const r=Math.round((a+1)/c*100);return(0,i.useEffect)((()=>{const e=document.querySelector("ul.table-of-contents");e&&(e.style.paddingTop="6em")})),i.createElement("div",{id:"percent"},i.createElement(n.Ip,{value:r,text:`${r}%`}))}},7730:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>M,contentTitle:()=>H,default:()=>$,frontMatter:()=>B,metadata:()=>A,toc:()=>W});var i,n,r,l,s,c,o,u,p,d,m,h,g,b,v,f,y,x,w,k,E,q,N,C,_,T,P,O=a(3117),S=a(7294),j=a(3905),I=a(1961),V=a(4866),R=a(5162);function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},Z.apply(this,arguments)}const D=e=>{let{title:t,titleId:a,...O}=e;return S.createElement("svg",Z({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 944 375",width:944,className:"example","aria-labelledby":a},O),t?S.createElement("title",{id:a},t):null,i||(i=S.createElement("defs",null,S.createElement("filter",{x:0,y:0,width:1,height:1,id:"critical-save-question-2_yml__a"},S.createElement("feFlood",{floodColor:"#0ff"})))),n||(n=S.createElement("image",{height:100,width:70,xlinkHref:"/hanabi_cn/img/pieces/cards/red4.svg"})),r||(r=S.createElement("image",{height:100,width:70,x:78,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow0.svg"})),l||(l=S.createElement("image",{height:100,width:70,x:156,xlinkHref:"/hanabi_cn/img/pieces/cards/green1.svg"})),s||(s=S.createElement("image",{height:100,width:70,x:234,xlinkHref:"/hanabi_cn/img/pieces/cards/blue2.svg"})),c||(c=S.createElement("image",{height:100,width:70,x:312,xlinkHref:"/hanabi_cn/img/pieces/cards/purple0.svg"})),S.createElement("svg",Z({height:100,width:90,x:464,className:"example","aria-labelledby":a},O),t?S.createElement("title",{id:a},t):null,S.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice"),o||(o=S.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#critical-save-question-2_yml__a)",x:"0%",y:"50%"},"Clue Giver")),u||(u=S.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),S.createElement("svg",Z({height:100,width:70,x:554,className:"example","aria-labelledby":a},O),t?S.createElement("title",{id:a},t):null,p||(p=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",Z({height:100,width:70,x:632,className:"example","aria-labelledby":a},O),t?S.createElement("title",{id:a},t):null,d||(d=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",Z({height:100,width:70,x:710,className:"example","aria-labelledby":a},O),t?S.createElement("title",{id:a},t):null,m||(m=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",Z({height:100,width:70,x:788,className:"example","aria-labelledby":a},O),t?S.createElement("title",{id:a},t):null,h||(h=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",Z({height:100,width:70,x:866,className:"example","aria-labelledby":a},O),t?S.createElement("title",{id:a},t):null,g||(g=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",Z({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":a},O),t?S.createElement("title",{id:a},t):null,S.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Bob")),S.createElement("svg",Z({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":a},O),t?S.createElement("title",{id:a},t):null,b||(b=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",Z({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":a},O),t?S.createElement("title",{id:a},t):null,v||(v=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",Z({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":a},O),t?S.createElement("title",{id:a},t):null,f||(f=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",Z({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":a},O),t?S.createElement("title",{id:a},t):null,y||(y=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",Z({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":a},O),t?S.createElement("title",{id:a},t):null,x||(x=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",Z({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":a},O),t?S.createElement("title",{id:a},t):null,S.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Cathy")),w||(w=S.createElement("image",{height:100,width:70,x:554,xlinkHref:"/hanabi_cn/img/pieces/cards/red1.svg",y:250})),k||(k=S.createElement("image",{height:100,width:70,x:632,xlinkHref:"/hanabi_cn/img/pieces/cards/red1.svg",y:250})),E||(E=S.createElement("image",{height:100,width:70,x:710,xlinkHref:"/hanabi_cn/img/pieces/cards/purple4.svg",y:250})),q||(q=S.createElement("image",{height:100,width:70,x:788,xlinkHref:"/hanabi_cn/img/pieces/cards/purple3.svg",y:250})),N||(N=S.createElement("image",{height:100,width:70,x:866,xlinkHref:"/hanabi_cn/img/pieces/cards/purple5.svg",y:250})),C||(C=S.createElement("image",{height:200,opacity:.2,width:200,x:91,xlinkHref:"/hanabi_cn/img/pieces/trashcan.png",y:120})),_||(_=S.createElement("image",{height:100,width:70,x:138.5,xlinkHref:"/hanabi_cn/img/pieces/cards/purple3.svg",y:153.333})),T||(T=S.createElement("image",{height:100,width:70,x:173.5,xlinkHref:"/hanabi_cn/img/pieces/cards/purple4.svg",y:186.667})),P||(P=S.createElement("rect",{fill:"none",height:200,rx:10,ry:10,stroke:"#006400",strokeWidth:2,width:200,x:91,y:120})))},B={id:"critical-save-question-2",title:"The Critical Save (Question 2)"},H=void 0,A={unversionedId:"beginner/critical-save-question-2",id:"beginner/critical-save-question-2",title:"The Critical Save (Question 2)",description:"<Tabs",source:"@site/docs/beginner/critical-save-question-2.mdx",sourceDirName:"beginner",slug:"/beginner/critical-save-question-2",permalink:"/hanabi_cn/docs/beginner/critical-save-question-2",draft:!1,editUrl:"https://github.com/jk15162428/hanabi_cn/edit/master/docs/beginner/critical-save-question-2.mdx",tags:[],version:"current",frontMatter:{id:"critical-save-question-2",title:"The Critical Save (Question 2)"},sidebar:"mainSidebar",previous:{title:"The Critical Save (Question 1)",permalink:"/hanabi_cn/docs/beginner/critical-save-question-1"},next:{title:"The Critical Save (Question 3)",permalink:"/hanabi_cn/docs/beginner/critical-save-question-3"}},M={},W=[],L={toc:W},Q="wrapper";function $(e){let{components:t,...a}=e;return(0,j.kt)(Q,(0,O.Z)({},L,a,{components:t,mdxType:"MDXLayout"}),(0,j.kt)(I.Z,{id:"critical-save-question-2",mdxType:"BeginnersGuideProgress"}),(0,j.kt)(V.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,j.kt)(R.Z,{value:"question",mdxType:"TabItem"},(0,j.kt)("ul",null,(0,j.kt)("li",{parentName:"ul"},"The team has 2 clue tokens left."),(0,j.kt)("li",{parentName:"ul"},"Cathy has three critical cards in a row."),(0,j.kt)("li",{parentName:"ul"},"What action should Alice perform?"))),(0,j.kt)(R.Z,{value:"solution",mdxType:"TabItem"},(0,j.kt)("ul",null,(0,j.kt)("li",{parentName:"ul"},'Alice might be tempted to clue purple to Cathy, which would "get" all three purple cards in one fell swoop.'),(0,j.kt)("li",{parentName:"ul"},"However, it would be illegal for Alice to do that because 5's must be saved with a ",(0,j.kt)("em",{parentName:"li"},"5 Save"),"."),(0,j.kt)("li",{parentName:"ul"},"Thus, Alice should clue number 5 to Cathy as a ",(0,j.kt)("em",{parentName:"li"},"5 Save"),"."),(0,j.kt)("li",{parentName:"ul"},"Next, Bob would clue purple to Cathy as a ",(0,j.kt)("em",{parentName:"li"},"Critical Save")," on the purple 3."),(0,j.kt)("li",{parentName:"ul"},"Cathy would write a ",(0,j.kt)("em",{parentName:"li"},"card note")," on her slot 4 card that contains the following identities:",(0,j.kt)("ul",{parentName:"li"},(0,j.kt)("li",{parentName:"ul"},"purple 1 (as a ",(0,j.kt)("em",{parentName:"li"},"Play Clue"),")"),(0,j.kt)("li",{parentName:"ul"},"purple 3 (as a ",(0,j.kt)("em",{parentName:"li"},"Critical Save"),")"),(0,j.kt)("li",{parentName:"ul"},"purple 4 (as a ",(0,j.kt)("em",{parentName:"li"},"Critical Save"),")")))))),(0,j.kt)(D,{mdxType:"CriticalSaveQuestion2"}))}$.isMDXComponent=!0},5774:(e,t,a)=>{"use strict";a.d(t,{Ip:()=>u});var i=a(7294),n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])},n(e,t)};var r=50,l=50;function s(e){var t=e.className,a=e.counterClockwise,n=e.dashRatio,r=e.pathRadius,l=e.strokeWidth,s=e.style;return(0,i.createElement)("path",{className:t,style:Object.assign({},s,o({pathRadius:r,dashRatio:n,counterClockwise:a})),d:c({pathRadius:r,counterClockwise:a}),strokeWidth:l,fillOpacity:0})}function c(e){var t=e.pathRadius,a=e.counterClockwise?1:0;return"\n      M "+r+","+l+"\n      m 0,-"+t+"\n      a "+t+","+t+" "+a+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+a+" 1 1 0,-"+2*t+"\n    "}function o(e){var t=e.counterClockwise,a=e.dashRatio,i=e.pathRadius,n=2*Math.PI*i,r=(1-a)*n;return{strokeDasharray:n+"px "+n+"px",strokeDashoffset:(t?-r:r)+"px"}}var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,a=e.minValue,i=e.maxValue;return(Math.min(Math.max(t,a),i)-a)/(i-a)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,a=e.className,n=e.classes,c=e.counterClockwise,o=e.styles,u=e.strokeWidth,p=e.text,d=this.getPathRadius(),m=this.getPathRatio();return(0,i.createElement)("svg",{className:n.root+" "+a,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,i.createElement)("circle",{className:n.background,style:o.background,cx:r,cy:l,r:50}):null,(0,i.createElement)(s,{className:n.trail,counterClockwise:c,dashRatio:t,pathRadius:d,strokeWidth:u,style:o.trail}),(0,i.createElement)(s,{className:n.path,counterClockwise:c,dashRatio:m*t,pathRadius:d,strokeWidth:u,style:o.path}),p?(0,i.createElement)("text",{className:n.text,style:o.text,x:r,y:l},p):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(i.Component)}}]);