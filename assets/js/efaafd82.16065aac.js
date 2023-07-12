/*! For license information please see efaafd82.16065aac.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[3381,7239,4908,9151,6481,3978,4345,9583,6643,3286,8786,8157,627,17,9005,8111],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),o=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=o(n),h=a,d=g["".concat(c,".").concat(h)]||g[h]||p[h]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[g]="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(3117),a=n(7294),i=n(6010),l=n(2466),s=n(6775),c=n(1980),o=n(7392),u=n(12);function g(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??g(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=p(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,o]=d({queryString:n,groupId:r}),[g,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),b=(()=>{const e=c??g;return h({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),o(e),m(e)}),[o,m,i]),tabValues:i}}var b=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:s,selectValue:c,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:g}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),r=o[n].value;r!==s&&(g(t),c(r))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},o.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:p},l,{className:(0,i.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function x(e){const t=m(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",f.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return a.createElement(x,(0,r.Z)({key:String(t)},e))}},6679:e=>{e.exports={mainSidebar:["about",{"\u521d\u5b66\u8005\u6307\u5357":["beginner","beginner/card-layout",{"The Chop\uff08\u5f03\u724c\u4f4d\uff09":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues\uff08\u6253\u51fa\u63d0\u793a\uff09":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues\uff08\u4fdd\u7559\u63d0\u793a\uff09":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation\uff08\u63d0\u793a\u89e3\u8bfb\uff09":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle\uff08\u70b9\u4f18\u539f\u5219\uff09":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle\uff08\u4fdd\u7559\u539f\u5219\uff09":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle\uff08\u6700\u5c0f\u63d0\u793a\u4ef7\u503c\u539f\u5219\uff09":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game\uff08\u5f00\u5c40\uff09":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"General Strategy\uff08\u4e00\u822c\u7b56\u7565\uff09":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves\uff08\u7279\u6b8a\u64cd\u4f5c\uff09":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"\u57fa\u7840\u7b56\u7565":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23","level-24","level-25"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/funnels","variant-specific/gray","variant-specific/light-pink","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/no-positive-clues","variant-specific/null-fives","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/odds-and-evens","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white"]},{"Challenge Questions":["challenge-questions","challenge-questions/level-2","challenge-questions/level-8"]},"convention-attribution"]}},1961:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(7294),a=n(5774),i=n(6679);const l=i.mainSidebar.find((e=>e["\u521d\u5b66\u8005\u6307\u5357"]))["\u521d\u5b66\u8005\u6307\u5357"],s=[];!function e(t,n){for(const r of n)"string"==typeof r?t.push(r):e(t,Object.values(r)[0])}(s,l),"beginner"===s[0]&&s.shift();const c=s.length;function o(e){let{id:t}=e;const n=s.findIndex((e=>`beginner/${t}`===e));if(-1===n)throw new Error("page id not found in sidebar");const i=Math.round((n+1)/c*100);return(0,r.useEffect)((()=>{const e=document.querySelector("ul.table-of-contents");e&&(e.style.paddingTop="6em")})),r.createElement("div",{id:"percent"},r.createElement(a.Ip,{value:i,text:`${i}%`}))}},8954:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>L,contentTitle:()=>M,default:()=>z,frontMatter:()=>A,metadata:()=>G,toc:()=>W});var r,a,i,l,s,c,o,u,g,p,h,d,m,b,f,v,y,x,w,k,E,q,_,O,C,N,P,S,T,j=n(3117),I=n(7294),V=n(3905),R=n(1961),H=n(4866),Z=n(5162);function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}const B=e=>{let{title:t,titleId:n,...j}=e;return I.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:378,viewBox:"0 -3 944 378",width:944,className:"example","aria-labelledby":n},j),t?I.createElement("title",{id:n},t):null,r||(r=I.createElement("defs",null,I.createElement("filter",{x:0,y:0,width:1,height:1,id:"other-general-strategy-question-1_yml__a"},I.createElement("feFlood",{floodColor:"#0ff"})))),a||(a=I.createElement("image",{height:100,width:70,xlinkHref:"/hanabi_cn/img/pieces/cards/red0.svg"})),i||(i=I.createElement("image",{height:100,width:70,x:78,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow1.svg"})),l||(l=I.createElement("image",{height:100,width:70,x:156,xlinkHref:"/hanabi_cn/img/pieces/cards/green0.svg"})),s||(s=I.createElement("image",{height:100,width:70,x:234,xlinkHref:"/hanabi_cn/img/pieces/cards/blue1.svg"})),c||(c=I.createElement("image",{height:100,width:70,x:312,xlinkHref:"/hanabi_cn/img/pieces/cards/purple3.svg"})),I.createElement("svg",D({height:100,width:90,x:464,className:"example","aria-labelledby":n},j),t?I.createElement("title",{id:n},t):null,I.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice"),o||(o=I.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#other-general-strategy-question-1_yml__a)",x:"0%",y:"50%"},"Clue Giver")),u||(u=I.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),g||(g=I.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:551,y:-3})),p||(p=I.createElement("image",{height:100,width:70,x:554,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow2.svg"})),I.createElement("svg",D({height:100,width:70,x:632,className:"example","aria-labelledby":n},j),t?I.createElement("title",{id:n},t):null,h||(h=I.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),I.createElement("svg",D({height:100,width:70,x:710,className:"example","aria-labelledby":n},j),t?I.createElement("title",{id:n},t):null,d||(d=I.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),I.createElement("svg",D({height:100,width:70,x:788,className:"example","aria-labelledby":n},j),t?I.createElement("title",{id:n},t):null,m||(m=I.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),I.createElement("svg",D({height:100,width:70,x:866,className:"example","aria-labelledby":n},j),t?I.createElement("title",{id:n},t):null,b||(b=I.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),I.createElement("svg",D({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":n},j),t?I.createElement("title",{id:n},t):null,I.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Bob")),f||(f=I.createElement("image",{height:100,width:70,x:554,xlinkHref:"/hanabi_cn/img/pieces/cards/purple2.svg",y:125})),v||(v=I.createElement("image",{height:100,width:70,x:632,xlinkHref:"/hanabi_cn/img/pieces/cards/blue1.svg",y:125})),y||(y=I.createElement("image",{height:100,width:70,x:710,xlinkHref:"/hanabi_cn/img/pieces/cards/red4.svg",y:125})),x||(x=I.createElement("image",{height:100,width:70,x:788,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow1.svg",y:125})),w||(w=I.createElement("image",{height:100,width:70,x:866,xlinkHref:"/hanabi_cn/img/pieces/cards/purple3.svg",y:125})),I.createElement("svg",D({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":n},j),t?I.createElement("title",{id:n},t):null,I.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Cathy")),k||(k=I.createElement("image",{height:100,width:70,x:554,xlinkHref:"/hanabi_cn/img/pieces/cards/red3.svg",y:250})),E||(E=I.createElement("image",{height:100,width:70,x:632,xlinkHref:"/hanabi_cn/img/pieces/cards/red3.svg",y:250})),q||(q=I.createElement("image",{height:100,width:70,x:710,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow1.svg",y:250})),_||(_=I.createElement("image",{height:100,width:70,x:788,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow5.svg",y:250})),O||(O=I.createElement("image",{height:100,width:70,x:866,xlinkHref:"/hanabi_cn/img/pieces/cards/blue5.svg",y:250})),C||(C=I.createElement("image",{height:200,opacity:.2,width:200,x:91,xlinkHref:"/hanabi_cn/img/pieces/trashcan.png",y:120})),N||(N=I.createElement("image",{height:100,width:70,x:121,xlinkHref:"/hanabi_cn/img/pieces/cards/green3.svg",y:136.667})),P||(P=I.createElement("image",{height:100,width:70,x:156,xlinkHref:"/hanabi_cn/img/pieces/cards/green4.svg",y:170})),S||(S=I.createElement("image",{height:100,width:70,x:191,xlinkHref:"/hanabi_cn/img/pieces/cards/purple4.svg",y:203.333})),T||(T=I.createElement("rect",{fill:"none",height:200,rx:10,ry:10,stroke:"#006400",strokeWidth:2,width:200,x:91,y:120})))},A={id:"other-general-strategy-question-1",title:"Other General Strategy (Question 1)"},M=void 0,G={unversionedId:"beginner/other-general-strategy-question-1",id:"beginner/other-general-strategy-question-1",title:"Other General Strategy (Question 1)",description:"<Tabs",source:"@site/docs/beginner/other-general-strategy-question-1.mdx",sourceDirName:"beginner",slug:"/beginner/other-general-strategy-question-1",permalink:"/hanabi_cn/docs/beginner/other-general-strategy-question-1",draft:!1,editUrl:"https://github.com/jk15162428/hanabi_cn/edit/master/docs/beginner/other-general-strategy-question-1.mdx",tags:[],version:"current",frontMatter:{id:"other-general-strategy-question-1",title:"Other General Strategy (Question 1)"},sidebar:"mainSidebar",previous:{title:"Other General Strategy",permalink:"/hanabi_cn/docs/beginner/other-general-strategy"},next:{title:"Other General Strategy (Question 2)",permalink:"/hanabi_cn/docs/beginner/other-general-strategy-question-2"}},L={},W=[],$={toc:W},Q="wrapper";function z(e){let{components:t,...n}=e;return(0,V.kt)(Q,(0,j.Z)({},$,n,{components:t,mdxType:"MDXLayout"}),(0,V.kt)(R.Z,{id:"other-general-strategy-question-1",mdxType:"BeginnersGuideProgress"}),(0,V.kt)(H.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,V.kt)(Z.Z,{value:"question",mdxType:"TabItem"},(0,V.kt)("ul",null,(0,V.kt)("li",{parentName:"ul"},"It is Alice's turn and she has a yellow 2 to play."),(0,V.kt)("li",{parentName:"ul"},"Cathy has a critical blue 5 on chop."),(0,V.kt)("li",{parentName:"ul"},"Should Alice play the yellow 2 or save Cathy's blue 5?"))),(0,V.kt)(Z.Z,{value:"solution",mdxType:"TabItem"},(0,V.kt)("ul",null,(0,V.kt)("li",{parentName:"ul"},"Alice has a playable card and Bob doesn't have anything to do."),(0,V.kt)("li",{parentName:"ul"},"Thus, it would be bad teamwork for Alice to save Cathy's blue 5."),(0,V.kt)("li",{parentName:"ul"},"Alice should play the yellow 2 and let Bob handle saving Cathy's blue 5.")))),(0,V.kt)(B,{mdxType:"OtherGeneralStrategyQuestion1"}))}z.isMDXComponent=!0},5774:(e,t,n)=>{"use strict";n.d(t,{Ip:()=>u});var r=n(7294),a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},a(e,t)};var i=50,l=50;function s(e){var t=e.className,n=e.counterClockwise,a=e.dashRatio,i=e.pathRadius,l=e.strokeWidth,s=e.style;return(0,r.createElement)("path",{className:t,style:Object.assign({},s,o({pathRadius:i,dashRatio:a,counterClockwise:n})),d:c({pathRadius:i,counterClockwise:n}),strokeWidth:l,fillOpacity:0})}function c(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M "+i+","+l+"\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function o(e){var t=e.counterClockwise,n=e.dashRatio,r=e.pathRadius,a=2*Math.PI*r,i=(1-n)*a;return{strokeDasharray:a+"px "+a+"px",strokeDashoffset:(t?-i:i)+"px"}}var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,n),r)-n)/(r-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,a=e.classes,c=e.counterClockwise,o=e.styles,u=e.strokeWidth,g=e.text,p=this.getPathRadius(),h=this.getPathRatio();return(0,r.createElement)("svg",{className:a.root+" "+n,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:a.background,style:o.background,cx:i,cy:l,r:50}):null,(0,r.createElement)(s,{className:a.trail,counterClockwise:c,dashRatio:t,pathRadius:p,strokeWidth:u,style:o.trail}),(0,r.createElement)(s,{className:a.path,counterClockwise:c,dashRatio:h*t,pathRadius:p,strokeWidth:u,style:o.path}),g?(0,r.createElement)("text",{className:a.text,style:o.text,x:i,y:l},g):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component)}}]);