/*! For license information please see 36b2de33.864231e8.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[207,7239,4908,9151,6481,3978,4345,9583,6643,3286,8786,8157,627,17,9005,8111],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=o(n),g=i,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||r;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,l[1]=s;for(var o=2;o<r;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(7294),i=n(6010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var a=n(3117),i=n(7294),r=n(6010),l=n(2466),s=n(6775),c=n(1980),o=n(7392),u=n(12);function p(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}function d(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[l,s]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,o]=m({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),b=(()=>{const e=c??p;return g({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),o(e),h(e)}),[o,h,r]),tabValues:r}}var b=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:s,selectValue:c,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=o[n].value;a!==s&&(p(t),c(a))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},o.map((e=>{let{value:t,label:n,attributes:l}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:g,onClick:d},l,{className:(0,r.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function x(e){const t=h(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},i.createElement(v,(0,a.Z)({},e,t)),i.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return i.createElement(x,(0,a.Z)({key:String(t)},e))}},6679:e=>{e.exports={mainSidebar:["about",{"\u521d\u5b66\u8005\u6307\u5357":["beginner","beginner/card-layout",{"The Chop\uff08\u5f03\u724c\u4f4d\uff09":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues\uff08\u6253\u51fa\u63d0\u793a\uff09":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues\uff08\u4fdd\u7559\u63d0\u793a\uff09":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation\uff08\u63d0\u793a\u89e3\u8bfb\uff09":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle\uff08\u70b9\u4f18\u539f\u5219\uff09":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle\uff08\u4fdd\u7559\u539f\u5219\uff09":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle\uff08\u6700\u5c0f\u63d0\u793a\u4ef7\u503c\u539f\u5219\uff09":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game\uff08\u5f00\u5c40\uff09":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"General Strategy\uff08\u4e00\u822c\u7b56\u7565\uff09":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves\uff08\u7279\u6b8a\u64cd\u4f5c\uff09":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"\u57fa\u7840\u7b56\u7565":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23","level-24","level-25"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/funnels","variant-specific/gray","variant-specific/light-pink","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/no-positive-clues","variant-specific/null-fives","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/odds-and-evens","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white"]},{"Challenge Questions":["challenge-questions","challenge-questions/level-2","challenge-questions/level-8"]},"convention-attribution"]}},1961:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(7294),i=n(5774),r=n(6679);const l=r.mainSidebar.find((e=>e["\u521d\u5b66\u8005\u6307\u5357"]))["\u521d\u5b66\u8005\u6307\u5357"],s=[];!function e(t,n){for(const a of n)"string"==typeof a?t.push(a):e(t,Object.values(a)[0])}(s,l),"beginner"===s[0]&&s.shift();const c=s.length;function o(e){let{id:t}=e;const n=s.findIndex((e=>`beginner/${t}`===e));if(-1===n)throw new Error("page id not found in sidebar");const r=Math.round((n+1)/c*100);return(0,a.useEffect)((()=>{const e=document.querySelector("ul.table-of-contents");e&&(e.style.paddingTop="6em")})),a.createElement("div",{id:"percent"},a.createElement(i.Ip,{value:r,text:`${r}%`}))}},4724:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>M,default:()=>z,frontMatter:()=>Z,metadata:()=>H,toc:()=>L});var a,i,r,l,s,c,o,u,p,d,g,m,h,b,f,v,y,x,w,E,k,q,N,C,P,_,O,T=n(3117),S=n(7294),j=n(3905),I=n(1961),V=n(4866),R=n(5162);function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},B.apply(this,arguments)}const D=e=>{let{title:t,titleId:n,...T}=e;return S.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 944 375",width:944,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,a||(a=S.createElement("defs",null,S.createElement("filter",{x:0,y:0,width:1,height:1,id:"2-save-question-1_yml__a"},S.createElement("feFlood",{floodColor:"#0ff"})))),i||(i=S.createElement("image",{height:100,width:70,xlinkHref:"/hanabi_cn/img/pieces/cards/red3.svg"})),r||(r=S.createElement("image",{height:100,width:70,x:78,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow0.svg"})),l||(l=S.createElement("image",{height:100,width:70,x:156,xlinkHref:"/hanabi_cn/img/pieces/cards/green0.svg"})),s||(s=S.createElement("image",{height:100,width:70,x:234,xlinkHref:"/hanabi_cn/img/pieces/cards/blue1.svg"})),c||(c=S.createElement("image",{height:100,width:70,x:312,xlinkHref:"/hanabi_cn/img/pieces/cards/purple2.svg"})),S.createElement("svg",B({height:100,width:90,x:464,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,S.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice"),o||(o=S.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#2-save-question-1_yml__a)",x:"0%",y:"50%"},"Clue Giver")),u||(u=S.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),S.createElement("svg",B({height:100,width:70,x:554,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,p||(p=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",B({height:100,width:70,x:632,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,d||(d=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",B({height:100,width:70,x:710,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,g||(g=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",B({height:100,width:70,x:788,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,m||(m=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",B({height:100,width:70,x:866,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,h||(h=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",B({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,S.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Bob")),S.createElement("svg",B({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,b||(b=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",B({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,f||(f=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",B({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,v||(v=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),y||(y=S.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:122})),S.createElement("svg",B({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,x||(x=S.createElement("image",{height:100,width:70,xlinkHref:"/hanabi_cn/img/pieces/cards/2.svg"}))),w||(w=S.createElement("image",{height:70,width:50,x:798,xlinkHref:"/hanabi_cn/img/pieces/arrow.svg",y:85})),E||(E=S.createElement("circle",{cx:823,cy:110,r:15,stroke:"#fff",strokeWidth:2})),S.createElement("svg",B({height:16,width:16,x:815,y:102,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,S.createElement("text",{dominantBaseline:"central",fill:"#fff",style:{fontSize:"1.4em"},textAnchor:"middle",x:"50%",y:"50%"},"2")),S.createElement("svg",B({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,k||(k=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",B({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,S.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Cathy")),q||(q=S.createElement("image",{height:100,width:70,x:554,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow5.svg",y:250})),N||(N=S.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:629,y:247})),C||(C=S.createElement("image",{height:100,width:70,x:632,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow1.svg",y:250})),P||(P=S.createElement("image",{height:100,width:70,x:710,xlinkHref:"/hanabi_cn/img/pieces/cards/red3.svg",y:250})),_||(_=S.createElement("image",{height:100,width:70,x:788,xlinkHref:"/hanabi_cn/img/pieces/cards/red2.svg",y:250})),O||(O=S.createElement("image",{height:100,width:70,x:866,xlinkHref:"/hanabi_cn/img/pieces/cards/blue2.svg",y:250})))},Z={id:"2-save-question-1",title:"\u75592\uff08\u4e60\u98981\uff09"},M=void 0,H={unversionedId:"beginner/2-save-question-1",id:"beginner/2-save-question-1",title:"\u75592\uff08\u4e60\u98981\uff09",description:"<Tabs",source:"@site/docs/beginner/2-save-question-1.mdx",sourceDirName:"beginner",slug:"/beginner/2-save-question-1",permalink:"/hanabi_cn/docs/beginner/2-save-question-1",draft:!1,editUrl:"https://github.com/jk15162428/hanabi_cn/edit/master/docs/beginner/2-save-question-1.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"2-save-question-1",title:"\u75592\uff08\u4e60\u98981\uff09"},sidebar:"mainSidebar",previous:{title:"The 2 Save\uff08\u75592\uff09",permalink:"/hanabi_cn/docs/beginner/2-save"},next:{title:"The 2 Save (Question 2)",permalink:"/hanabi_cn/docs/beginner/2-save-question-2"}},A={},L=[],W={toc:L},$="wrapper";function z(e){let{components:t,...n}=e;return(0,j.kt)($,(0,T.Z)({},W,n,{components:t,mdxType:"MDXLayout"}),(0,j.kt)(I.Z,{id:"2-save-question-1",mdxType:"BeginnersGuideProgress"}),(0,j.kt)(V.Z,{defaultValue:"question",values:[{label:"\u95ee\u9898",value:"question"},{label:"\u9898\u89e3",value:"solution"}],mdxType:"Tabs"},(0,j.kt)(R.Z,{value:"question",mdxType:"TabItem"},(0,j.kt)("ul",null,(0,j.kt)("li",{parentName:"ul"},"Alice \u5411 Bob \u63d0\u793a\u4e86\u6570\u5b57 2\uff0c\u70b9\u5230\u4e86\u4ed6\u7684 4 \u53f7\u69fd\u4f4d\u3002"),(0,j.kt)("li",{parentName:"ul"},"\u5728 Bob \u7684\u89c6\u89d2\u4e2d\uff0c\u8fd9\u662f\u4e00\u4e2a\u300cPlay Clue\u300d\u8fd8\u662f\u4e00\u4e2a\u300cSave Clue\u300d\uff1f"),(0,j.kt)("li",{parentName:"ul"},"Bob \u5e94\u8be5\u5728\u5361\u4e0a\u505a\u4ec0\u4e48\u7b14\u8bb0\uff1f"))),(0,j.kt)(R.Z,{value:"solution",mdxType:"TabItem"},(0,j.kt)("ul",null,(0,j.kt)("li",{parentName:"ul"},"\u8fd9\u80af\u5b9a\u4e0d\u662f\u4e00\u4e2a\u300cSave Clue\u300d\uff0c\u56e0\u4e3a\u63d0\u793a\u5e76\u6ca1\u6709\u70b9\u5230 Bob \u7684 chop \u4f4d\u3002\u56e0\u6b64\uff0c\u8fd9\u80af\u5b9a\u662f\u4e00\u4e2a\u300cPlay Clue\u300d\u3002"),(0,j.kt)("li",{parentName:"ul"},"Bob \u5728\u8fd9\u5f20\u724c\u4e0a\u5199\u4e0b\u53ef\u80fd\u7684\u6240\u6709\u60c5\u5f62\uff1a",(0,j.kt)("ul",{parentName:"li"},(0,j.kt)("li",{parentName:"ul"},"\u84dd 2\uff08\u76f4\u63a5\u53ef\u4ee5\u6253\u51fa\u7684\u724c\uff09"),(0,j.kt)("li",{parentName:"ul"},"\u9ec4 2\uff08\u662f\u4e00\u4e2a\u63a5\u4e0a Cathy \u624b\u4e2d\u9ec4 1 \u7684\u300cDelayed Play Clue\u300d\uff09")))))),(0,j.kt)(D,{mdxType:"TwoSaveQuestion1"}))}z.isMDXComponent=!0},5774:(e,t,n)=>{"use strict";n.d(t,{Ip:()=>u});var a=n(7294),i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},i(e,t)};var r=50,l=50;function s(e){var t=e.className,n=e.counterClockwise,i=e.dashRatio,r=e.pathRadius,l=e.strokeWidth,s=e.style;return(0,a.createElement)("path",{className:t,style:Object.assign({},s,o({pathRadius:r,dashRatio:i,counterClockwise:n})),d:c({pathRadius:r,counterClockwise:n}),strokeWidth:l,fillOpacity:0})}function c(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M "+r+","+l+"\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function o(e){var t=e.counterClockwise,n=e.dashRatio,a=e.pathRadius,i=2*Math.PI*a,r=(1-n)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(t?-r:r)+"px"}}var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,a=e.maxValue;return(Math.min(Math.max(t,n),a)-n)/(a-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,i=e.classes,c=e.counterClockwise,o=e.styles,u=e.strokeWidth,p=e.text,d=this.getPathRadius(),g=this.getPathRatio();return(0,a.createElement)("svg",{className:i.root+" "+n,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,a.createElement)("circle",{className:i.background,style:o.background,cx:r,cy:l,r:50}):null,(0,a.createElement)(s,{className:i.trail,counterClockwise:c,dashRatio:t,pathRadius:d,strokeWidth:u,style:o.trail}),(0,a.createElement)(s,{className:i.path,counterClockwise:c,dashRatio:g*t,pathRadius:d,strokeWidth:u,style:o.path}),p?(0,a.createElement)("text",{className:i.text,style:o.text,x:r,y:l},p):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(a.Component)}}]);