/*! For license information please see fcf308c4.18c9a373.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[277,7239,4908,9151,6481,3978,4345,9583,6643,3286,8786,8157,627,17,9005,8111],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),o=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=o(n),g=r,h=p["".concat(c,".").concat(g)]||p[g]||d[g]||a;return n?i.createElement(h,l(l({ref:t},u),{},{components:n})):i.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<a;o++)l[o]=n[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var i=n(7294),r=n(6010);const a={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return i.createElement("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var i=n(3117),r=n(7294),a=n(6010),l=n(2466),s=n(6775),c=n(1980),o=n(7392),u=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:r}}=e;return{value:t,label:n,attributes:i,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:a}))),[c,o]=h({queryString:n,groupId:i}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,u.Nk)(n);return[i,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),b=(()=>{const e=c??p;return g({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),o(e),m(e)}),[o,m,a]),tabValues:a}}var b=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:s,selectValue:c,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),i=o[n].value;i!==s&&(p(t),c(i))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},o.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,i.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:g,onClick:d},l,{className:(0,a.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i}))))}function x(e){const t=m(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",f.tabList)},r.createElement(v,(0,i.Z)({},e,t)),r.createElement(y,(0,i.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(x,(0,i.Z)({key:String(t)},e))}},6679:e=>{e.exports={mainSidebar:["about",{"\u521d\u5b66\u8005\u6307\u5357":["beginner","beginner/card-layout",{"The Chop\uff08\u5f03\u724c\u4f4d\uff09":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues\uff08\u6253\u51fa\u63d0\u793a\uff09":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues\uff08\u4fdd\u7559\u63d0\u793a\uff09":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation\uff08\u63d0\u793a\u89e3\u8bfb\uff09":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle\uff08\u70b9\u4f18\u539f\u5219\uff09":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle\uff08\u4fdd\u7559\u539f\u5219\uff09":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle\uff08\u6700\u5c0f\u63d0\u793a\u4ef7\u503c\u539f\u5219\uff09":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game\uff08\u5f00\u5c40\uff09":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"General Strategy\uff08\u4e00\u822c\u7b56\u7565\uff09":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves\uff08\u7279\u6b8a\u64cd\u4f5c\uff09":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"\u57fa\u7840\u7b56\u7565":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23","level-24","level-25"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/funnels","variant-specific/gray","variant-specific/light-pink","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/no-positive-clues","variant-specific/null-fives","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/odds-and-evens","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white"]},{"Challenge Questions":["challenge-questions","challenge-questions/level-2","challenge-questions/level-8"]},"convention-attribution"]}},1961:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(7294),r=n(5774),a=n(6679);const l=a.mainSidebar.find((e=>e["\u521d\u5b66\u8005\u6307\u5357"]))["\u521d\u5b66\u8005\u6307\u5357"],s=[];!function e(t,n){for(const i of n)"string"==typeof i?t.push(i):e(t,Object.values(i)[0])}(s,l),"beginner"===s[0]&&s.shift();const c=s.length;function o(e){let{id:t}=e;const n=s.findIndex((e=>`beginner/${t}`===e));if(-1===n)throw new Error("page id not found in sidebar");const a=Math.round((n+1)/c*100);return(0,i.useEffect)((()=>{const e=document.querySelector("ul.table-of-contents");e&&(e.style.paddingTop="6em")})),i.createElement("div",{id:"percent"},i.createElement(r.Ip,{value:a,text:`${a}%`}))}},407:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>D,contentTitle:()=>R,default:()=>M,frontMatter:()=>V,metadata:()=>Z,toc:()=>B});var i,r,a,l,s,c,o,u,p,d,g,h,m,b,f,v,y,x,w,E,k,q,P,N=n(3117),T=n(7294),C=n(3905),O=n(1961),_=n(4866),I=n(5162);function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},j.apply(this,arguments)}const S=e=>{let{title:t,titleId:n,...N}=e;return T.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 944 375",width:944,className:"example","aria-labelledby":n},N),t?T.createElement("title",{id:n},t):null,i||(i=T.createElement("defs",null,T.createElement("filter",{x:0,y:0,width:1,height:1,id:"good-touch-principle-question-1_yml__a"},T.createElement("feFlood",{floodColor:"#0ff"})))),r||(r=T.createElement("image",{height:100,width:70,xlinkHref:"/hanabi_cn/img/pieces/cards/red1.svg"})),a||(a=T.createElement("image",{height:100,width:70,x:78,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow4.svg"})),l||(l=T.createElement("image",{height:100,width:70,x:156,xlinkHref:"/hanabi_cn/img/pieces/cards/green5.svg"})),s||(s=T.createElement("image",{height:100,width:70,x:234,xlinkHref:"/hanabi_cn/img/pieces/cards/blue2.svg"})),c||(c=T.createElement("image",{height:100,width:70,x:312,xlinkHref:"/hanabi_cn/img/pieces/cards/purple1.svg"})),T.createElement("svg",j({height:100,width:90,x:464,className:"example","aria-labelledby":n},N),t?T.createElement("title",{id:n},t):null,T.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice"),o||(o=T.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#good-touch-principle-question-1_yml__a)",x:"0%",y:"50%"},"Clue Giver")),u||(u=T.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),T.createElement("svg",j({height:100,width:70,x:554,className:"example","aria-labelledby":n},N),t?T.createElement("title",{id:n},t):null,p||(p=T.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),T.createElement("svg",j({height:100,width:70,x:632,className:"example","aria-labelledby":n},N),t?T.createElement("title",{id:n},t):null,d||(d=T.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),T.createElement("svg",j({height:100,width:70,x:710,className:"example","aria-labelledby":n},N),t?T.createElement("title",{id:n},t):null,g||(g=T.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),T.createElement("svg",j({height:100,width:70,x:788,className:"example","aria-labelledby":n},N),t?T.createElement("title",{id:n},t):null,h||(h=T.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),T.createElement("svg",j({height:100,width:70,x:866,className:"example","aria-labelledby":n},N),t?T.createElement("title",{id:n},t):null,m||(m=T.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),T.createElement("svg",j({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":n},N),t?T.createElement("title",{id:n},t):null,T.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Bob")),b||(b=T.createElement("image",{height:100,width:70,x:554,xlinkHref:"/hanabi_cn/img/pieces/cards/purple1.svg",y:125})),f||(f=T.createElement("image",{height:100,width:70,x:632,xlinkHref:"/hanabi_cn/img/pieces/cards/red3.svg",y:125})),v||(v=T.createElement("image",{height:100,width:70,x:710,xlinkHref:"/hanabi_cn/img/pieces/cards/green1.svg",y:125})),y||(y=T.createElement("image",{height:100,width:70,x:788,xlinkHref:"/hanabi_cn/img/pieces/cards/blue2.svg",y:125})),x||(x=T.createElement("image",{height:100,width:70,x:866,xlinkHref:"/hanabi_cn/img/pieces/cards/blue3.svg",y:125})),T.createElement("svg",j({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":n},N),t?T.createElement("title",{id:n},t):null,T.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Cathy")),T.createElement("svg",j({height:100,width:70,x:554,y:250,className:"example","aria-labelledby":n},N),t?T.createElement("title",{id:n},t):null,w||(w=T.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),T.createElement("svg",j({height:100,width:70,x:632,y:250,className:"example","aria-labelledby":n},N),t?T.createElement("title",{id:n},t):null,E||(E=T.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),T.createElement("svg",j({height:100,width:70,x:710,y:250,className:"example","aria-labelledby":n},N),t?T.createElement("title",{id:n},t):null,k||(k=T.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),T.createElement("svg",j({height:100,width:70,x:788,y:250,className:"example","aria-labelledby":n},N),t?T.createElement("title",{id:n},t):null,q||(q=T.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),T.createElement("svg",j({height:100,width:70,x:866,y:250,className:"example","aria-labelledby":n},N),t?T.createElement("title",{id:n},t):null,P||(P=T.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))))},V={id:"good-touch-principle-question-1",title:"Good Touch Principle (Question 1)"},R=void 0,Z={unversionedId:"beginner/good-touch-principle-question-1",id:"beginner/good-touch-principle-question-1",title:"Good Touch Principle (Question 1)",description:"<Tabs",source:"@site/docs/beginner/good-touch-principle-question-1.mdx",sourceDirName:"beginner",slug:"/beginner/good-touch-principle-question-1",permalink:"/hanabi_cn/docs/beginner/good-touch-principle-question-1",draft:!1,editUrl:"https://github.com/jk15162428/hanabi_cn/edit/master/docs/beginner/good-touch-principle-question-1.mdx",tags:[],version:"current",frontMatter:{id:"good-touch-principle-question-1",title:"Good Touch Principle (Question 1)"},sidebar:"mainSidebar",previous:{title:"Good Touch Principle (GTP)",permalink:"/hanabi_cn/docs/beginner/good-touch-principle"},next:{title:"Good Touch Principle (Question 2)",permalink:"/hanabi_cn/docs/beginner/good-touch-principle-question-2"}},D={},B=[],A={toc:B},G="wrapper";function M(e){let{components:t,...n}=e;return(0,C.kt)(G,(0,N.Z)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,C.kt)(O.Z,{id:"good-touch-principle-question-1",mdxType:"BeginnersGuideProgress"}),(0,C.kt)(_.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,C.kt)(I.Z,{value:"question",mdxType:"TabItem"},(0,C.kt)("ul",null,(0,C.kt)("li",{parentName:"ul"},"What action should Alice perform?"))),(0,C.kt)(I.Z,{value:"solution",mdxType:"TabItem"},(0,C.kt)("ul",null,(0,C.kt)("li",{parentName:"ul"},"Alice needs to give a ",(0,C.kt)("em",{parentName:"li"},"Play Clue")," to Bob's blue 3 before it is discarded."),(0,C.kt)("li",{parentName:"ul"},"If Alice clues blue, then it would focus the blue 3, but the blue 2 would be duplicated (because it is already played on the stacks)."),(0,C.kt)("li",{parentName:"ul"},"If Alice clues number 3, then it would focus the blue 3, but it would also touch the red 3. The red 3 is useful to the team in the future, so this is a good thing."),(0,C.kt)("li",{parentName:"ul"},"Thus, Alice should clue number 3 to Bob.")))),(0,C.kt)(S,{mdxType:"GoodTouchPrincipleQuestion1"}))}M.isMDXComponent=!0},5774:(e,t,n)=>{"use strict";n.d(t,{Ip:()=>u});var i=n(7294),r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)};var a=50,l=50;function s(e){var t=e.className,n=e.counterClockwise,r=e.dashRatio,a=e.pathRadius,l=e.strokeWidth,s=e.style;return(0,i.createElement)("path",{className:t,style:Object.assign({},s,o({pathRadius:a,dashRatio:r,counterClockwise:n})),d:c({pathRadius:a,counterClockwise:n}),strokeWidth:l,fillOpacity:0})}function c(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M "+a+","+l+"\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function o(e){var t=e.counterClockwise,n=e.dashRatio,i=e.pathRadius,r=2*Math.PI*i,a=(1-n)*r;return{strokeDasharray:r+"px "+r+"px",strokeDashoffset:(t?-a:a)+"px"}}var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,i=e.maxValue;return(Math.min(Math.max(t,n),i)-n)/(i-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,r=e.classes,c=e.counterClockwise,o=e.styles,u=e.strokeWidth,p=e.text,d=this.getPathRadius(),g=this.getPathRatio();return(0,i.createElement)("svg",{className:r.root+" "+n,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,i.createElement)("circle",{className:r.background,style:o.background,cx:a,cy:l,r:50}):null,(0,i.createElement)(s,{className:r.trail,counterClockwise:c,dashRatio:t,pathRadius:d,strokeWidth:u,style:o.trail}),(0,i.createElement)(s,{className:r.path,counterClockwise:c,dashRatio:g*t,pathRadius:d,strokeWidth:u,style:o.path}),p?(0,i.createElement)("text",{className:r.text,style:o.text,x:a,y:l},p):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(i.Component)}}]);