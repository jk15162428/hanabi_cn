/*! For license information please see 68850a1d.e1f5e767.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[2323,7406,4126,1398,9799,2582,6427,4711,174,3077,7044,7081,9321,8890,6259,6843,9302,7450,5905,6813,9331,3722,7027,1369,2043],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,d=m["".concat(s,".").concat(p)]||m[p]||g[p]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7462),a=n(7294),i=n(2389),l=n(5773),o=n(6010),s="tabItem_LplD";function c(e){var t,n,i,c=e.lazy,u=e.block,g=e.defaultValue,m=e.values,p=e.groupId,d=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===g?g:null!=(t=null!=g?g:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=h[0])?void 0:i.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,l.UB)(),x=v.tabGroupChoices,w=v.setTabGroupChoices,E=(0,a.useState)(y),k=E[0],q=E[1],O=[],N=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var _=x[p];null!=_&&_!==k&&b.some((function(e){return e.value===_}))&&q(_)}var P=function(e){var t=e.currentTarget,n=O.indexOf(t),r=b[n].value;r!==k&&(N(t),q(r),null!=p&&w(p,r))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},d)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:function(e){return O.push(e)},onKeyDown:T,onFocus:P,onClick:P},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":k===t})}),null!=n?n:t)}))),c?(0,a.cloneElement)(h.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}function u(e){var t=(0,i.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},6679:function(e){e.exports={mainSidebar:["about","rules",{"\u521d\u5b66\u8005\u6307\u5357":["beginner","beginner/card-layout",{"The Chop\uff08\u5f03\u724c\u4f4d\uff09":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues\uff08\u6253\u51fa\u63d0\u793a\uff09":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues\uff08\u4fdd\u7559\u63d0\u793a\uff09":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"\u63d0\u793a\u89e3\u8bfb":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle\uff08\u70b9\u4f18\u539f\u5219\uff09":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle\uff08\u4fdd\u7559\u539f\u5219\uff09":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle\uff08\u6700\u5c0f\u63d0\u793a\u4ef7\u503c\u539f\u5219\uff09":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game\uff08\u5f00\u5c40\uff09":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"\u4e00\u822c\u7b56\u7565":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"\u7279\u6b8a\u64cd\u4f5c":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"\u57fa\u7840\u7b56\u7565":["level-1","level-2","level-3","level-4"]}]}},1961:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7855),a=n(7294),i=n(5774),l=n(6679),o=l.mainSidebar.find((function(e){return e["\u521d\u5b66\u8005\u6307\u5357"]}))["\u521d\u5b66\u8005\u6307\u5357"],s=[];!function e(t,n){for(var a,i=(0,r.Z)(n);!(a=i()).done;){var l=a.value;"string"==typeof l?t.push(l):e(t,Object.values(l)[0])}}(s,o),"beginner"===s[0]&&s.shift();var c=s.length;function u(e){var t=e.id,n=s.findIndex((function(e){return"beginner/"+t===e}));if(-1===n)throw new Error("page id not found in sidebar");var r=Math.round((n+1)/c*100);return(0,a.useEffect)((function(){var e=document.querySelector("ul.table-of-contents");e&&(e.style.paddingTop="6em")})),a.createElement("div",{id:"percent"},a.createElement(i.Ip,{value:r,text:r+"%"}))}},1866:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return A},default:function(){return F},frontMatter:function(){return V},metadata:function(){return W},toc:function(){return z}});var r,a,i,l,o,s,c,u,g,m,p,d,h,b,f,y,v,x,w,E,k,q,O,N,_,P,T=n(7462),C=n(3366),j=n(7294),R=n(3905),S=n(1961),I=n(9877),D=n(8215),H=["title","titleId"];function Z(){return Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z.apply(this,arguments)}function B(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var G=function(e){var t=e.title,n=e.titleId,T=B(e,H);return j.createElement("svg",Z({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:500,viewBox:"0 0 866 500",width:866,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,r||(r=j.createElement("defs",null,j.createElement("filter",{x:0,y:0,width:1,height:1,id:"early-game-question-3_yml__a"},j.createElement("feFlood",{floodColor:"#0ff"})))),a||(a=j.createElement("image",{height:100,width:70,xlinkHref:"/hanabi_cn/img/pieces/cards/red1.svg"})),i||(i=j.createElement("image",{height:100,width:70,x:78,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow0.svg"})),l||(l=j.createElement("image",{height:100,width:70,x:156,xlinkHref:"/hanabi_cn/img/pieces/cards/green1.svg"})),o||(o=j.createElement("image",{height:100,width:70,x:234,xlinkHref:"/hanabi_cn/img/pieces/cards/blue0.svg"})),s||(s=j.createElement("image",{height:100,width:70,x:312,xlinkHref:"/hanabi_cn/img/pieces/cards/purple1.svg"})),j.createElement("svg",Z({height:100,width:90,x:464,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,j.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice"),c||(c=j.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#early-game-question-3_yml__a)",x:"0%",y:"50%"},"Clue Giver")),u||(u=j.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),j.createElement("svg",Z({height:100,width:70,x:554,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,g||(g=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",Z({height:100,width:70,x:632,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,m||(m=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",Z({height:100,width:70,x:710,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,p||(p=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",Z({height:100,width:70,x:788,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,d||(d=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",Z({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,j.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Bob")),h||(h=j.createElement("image",{height:100,width:70,x:554,xlinkHref:"/hanabi_cn/img/pieces/cards/purple4.svg",y:125})),b||(b=j.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:629,y:122})),f||(f=j.createElement("image",{height:100,width:70,x:632,xlinkHref:"/hanabi_cn/img/pieces/cards/red2.svg",y:125})),y||(y=j.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:707,y:122})),v||(v=j.createElement("image",{height:100,width:70,x:710,xlinkHref:"/hanabi_cn/img/pieces/cards/red3.svg",y:125})),x||(x=j.createElement("image",{height:100,width:70,x:788,xlinkHref:"/hanabi_cn/img/pieces/cards/purple1.svg",y:125})),j.createElement("svg",Z({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,j.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Cathy")),w||(w=j.createElement("image",{height:100,width:70,x:554,xlinkHref:"/hanabi_cn/img/pieces/cards/green1.svg",y:250})),E||(E=j.createElement("image",{height:100,width:70,x:632,xlinkHref:"/hanabi_cn/img/pieces/cards/purple2.svg",y:250})),k||(k=j.createElement("image",{height:100,width:70,x:710,xlinkHref:"/hanabi_cn/img/pieces/cards/red2.svg",y:250})),q||(q=j.createElement("image",{height:100,width:70,x:788,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow4.svg",y:250})),j.createElement("svg",Z({height:100,width:90,x:464,y:375,className:"example","aria-labelledby":n},T),t?j.createElement("title",{id:n},t):null,j.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Donald")),O||(O=j.createElement("image",{height:100,width:70,x:554,xlinkHref:"/hanabi_cn/img/pieces/cards/green4.svg",y:375})),N||(N=j.createElement("image",{height:100,width:70,x:632,xlinkHref:"/hanabi_cn/img/pieces/cards/red1.svg",y:375})),_||(_=j.createElement("image",{height:100,width:70,x:710,xlinkHref:"/hanabi_cn/img/pieces/cards/green5.svg",y:375})),P||(P=j.createElement("image",{height:100,width:70,x:788,xlinkHref:"/hanabi_cn/img/pieces/cards/blue4.svg",y:375})))},M=["components"],V={id:"early-game-question-3",title:"The Early Game\uff08\u4e60\u98983\uff09"},A=void 0,W={unversionedId:"beginner/early-game-question-3",id:"beginner/early-game-question-3",title:"The Early Game\uff08\u4e60\u98983\uff09",description:"<Tabs",source:"@site/docs/beginner/early-game-question-3.md",sourceDirName:"beginner",slug:"/beginner/early-game-question-3",permalink:"/hanabi_cn/docs/beginner/early-game-question-3",editUrl:"https://github.com/jk15162428/hanabi_cn/edit/master/docs/beginner/early-game-question-3.md",tags:[],version:"current",frontMatter:{id:"early-game-question-3",title:"The Early Game\uff08\u4e60\u98983\uff09"},sidebar:"mainSidebar",previous:{title:"The Early Game\uff08\u4e60\u98982\uff09",permalink:"/hanabi_cn/docs/beginner/early-game-question-2"},next:{title:"\u5176\u4ed6\u7b56\u7565",permalink:"/hanabi_cn/docs/beginner/other-general-strategy"}},z=[],X={toc:z};function F(e){var t=e.components,n=(0,C.Z)(e,M);return(0,R.kt)("wrapper",(0,T.Z)({},X,n,{components:t,mdxType:"MDXLayout"}),(0,R.kt)(S.Z,{id:"early-game-question-3",mdxType:"BeginnersGuideProgress"}),(0,R.kt)(I.Z,{defaultValue:"question",values:[{label:"\u95ee\u9898",value:"question"},{label:"\u9898\u89e3",value:"solution"}],mdxType:"Tabs"},(0,R.kt)(D.Z,{value:"question",mdxType:"TabItem"},(0,R.kt)("ul",null,(0,R.kt)("li",{parentName:"ul"},"It is currently the ",(0,R.kt)("em",{parentName:"li"},"Early Game"),". There is 1 clue token left."),(0,R.kt)("li",{parentName:"ul"},"What action should Alice perform?"))),(0,R.kt)(D.Z,{value:"solution",mdxType:"TabItem"},(0,R.kt)("ul",null,(0,R.kt)("li",{parentName:"ul"},"The ",(0,R.kt)("strong",{parentName:"li"},"only")," legal action that Alice can perform is to clue purple to Cathy as a ",(0,R.kt)("em",{parentName:"li"},"Play Clue")," on the purple 2.",(0,R.kt)("ul",{parentName:"li"},(0,R.kt)("li",{parentName:"ul"},"Alice cannot clue number 2 to Cathy, since that would touch red 2 and would violate ",(0,R.kt)("em",{parentName:"li"},"Good Touch Principle"),".")))))),(0,R.kt)(G,{mdxType:"EarlyGameQuestion3"}))}F.isMDXComponent=!0},5774:function(e,t,n){"use strict";n.d(t,{Ip:function(){return s}});var r=n(7294),a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},a(e,t)};function i(e){var t=e.className,n=e.counterClockwise,a=e.dashRatio,i=e.pathRadius,s=e.strokeWidth,c=e.style;return(0,r.createElement)("path",{className:t,style:Object.assign({},c,o({pathRadius:i,dashRatio:a,counterClockwise:n})),d:l({pathRadius:i,counterClockwise:n}),strokeWidth:s,fillOpacity:0})}function l(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function o(e){var t=e.counterClockwise,n=e.dashRatio,r=e.pathRadius,a=2*Math.PI*r,i=(1-n)*a;return{strokeDasharray:a+"px "+a+"px",strokeDashoffset:(t?-i:i)+"px"}}var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,n),r)-n)/(r-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,a=e.classes,l=e.counterClockwise,o=e.styles,s=e.strokeWidth,c=e.text,u=this.getPathRadius(),g=this.getPathRatio();return(0,r.createElement)("svg",{className:a.root+" "+n,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:a.background,style:o.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(i,{className:a.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:s,style:o.trail}),(0,r.createElement)(i,{className:a.path,counterClockwise:l,dashRatio:g*t,pathRadius:u,strokeWidth:s,style:o.path}),c?(0,r.createElement)("text",{className:a.text,style:o.text,x:50,y:50},c):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component)}}]);