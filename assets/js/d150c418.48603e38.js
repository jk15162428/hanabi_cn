/*! For license information please see d150c418.48603e38.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[2541,7406,4126,1398,9799,2582,6427,4711,174,3077,7044,7081,9321,8890,6259,6843,9302,7450,5905,6813,9331,3722,7027,1369,2043],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=c(n),m=a,d=h["".concat(s,".").concat(m)]||h[m]||g[m]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7462),a=n(7294),i=n(2389),l=n(5773),o=n(6010),s="tabItem_LplD";function c(e){var t,n,i,c=e.lazy,u=e.block,g=e.defaultValue,h=e.values,m=e.groupId,d=e.className,p=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:p.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===g?g:null!=(t=null!=g?g:null==(n=p.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=p[0])?void 0:i.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,l.UB)(),x=v.tabGroupChoices,w=v.setTabGroupChoices,E=(0,a.useState)(y),k=E[0],q=E[1],N=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=x[m];null!=P&&P!==k&&b.some((function(e){return e.value===P}))&&q(P)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),r=b[n].value;r!==k&&(O(t),q(r),null!=m&&w(m,r))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.currentTarget)+1;n=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},d)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:function(e){return N.push(e)},onKeyDown:_,onFocus:C,onClick:C},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":k===t})}),null!=n?n:t)}))),c?(0,a.cloneElement)(p.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}function u(e){var t=(0,i.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},6679:function(e){e.exports={mainSidebar:["about","rules",{"\u521d\u5b66\u8005\u6307\u5357":["beginner","beginner/card-layout",{"\u5f85\u5f03\u724c\uff08The Chop\uff09":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - \u6253\u51fa\u63d0\u793a\uff08Play Clues\uff09":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - \u4fdd\u7559\u63d0\u793a\uff08Save Clues\uff09":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"\u63d0\u793a\u89e3\u8bfb":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - \u70b9\u4f18\u539f\u5219\uff08Good Touch Principle\uff09":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - \u4fdd\u7559\u539f\u5219\uff08Save Principle\uff09":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - \u6700\u5c0f\u63d0\u793a\u4ef7\u503c\u539f\u5219\uff08Minimum Clue Value Principle\uff09":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"\u5f00\u5c40":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"\u4e00\u822c\u7b56\u7565\uff08General Strategy\uff09":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"\u7279\u6b8a\u64cd\u4f5c\uff08Special Moves\uff09":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"\u521d\u7ea7\u7b56\u7565":["level-3"]}]}},1961:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7855),a=n(7294),i=n(5774),l=n(6679),o=l.mainSidebar.find((function(e){return e["\u521d\u5b66\u8005\u6307\u5357"]}))["\u521d\u5b66\u8005\u6307\u5357"],s=[];!function e(t,n){for(var a,i=(0,r.Z)(n);!(a=i()).done;){var l=a.value;"string"==typeof l?t.push(l):e(t,Object.values(l)[0])}}(s,o),"beginner"===s[0]&&s.shift();var c=s.length;function u(e){var t=e.id,n=s.findIndex((function(e){return"beginner/"+t===e}));if(-1===n)throw new Error("page id not found in sidebar");var r=Math.round((n+1)/c*100);return(0,a.useEffect)((function(){var e=document.querySelector("ul.table-of-contents");e&&(e.style.paddingTop="6em")})),a.createElement("div",{id:"percent"},a.createElement(i.Ip,{value:r,text:r+"%"}))}},714:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return M},default:function(){return W},frontMatter:function(){return A},metadata:function(){return H},toc:function(){return V}});var r,a,i,l,o,s,c,u,g,h,m,d,p,b,f,y,v,x,w,E,k,q,N,O=n(7462),P=n(3366),C=n(7294),_=n(3905),T=n(1961),j=n(9877),R=n(8215),S=["title","titleId"];function B(){return B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var D=function(e){var t=e.title,n=e.titleId,O=I(e,S);return C.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 944 375",width:944,className:"example","aria-labelledby":n},O),t?C.createElement("title",{id:n},t):null,r||(r=C.createElement("defs",null,C.createElement("filter",{x:0,y:0,width:1,height:1,id:"other-general-strategy-question-5_yml__a"},C.createElement("feFlood",{floodColor:"#0ff"})))),a||(a=C.createElement("image",{height:100,width:70,xlinkHref:"/hanabi_cn/img/pieces/cards/red5.svg"})),i||(i=C.createElement("image",{height:100,width:70,x:78,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow0.svg"})),l||(l=C.createElement("image",{height:100,width:70,x:156,xlinkHref:"/hanabi_cn/img/pieces/cards/green2.svg"})),o||(o=C.createElement("image",{height:100,width:70,x:234,xlinkHref:"/hanabi_cn/img/pieces/cards/blue4.svg"})),s||(s=C.createElement("image",{height:100,width:70,x:312,xlinkHref:"/hanabi_cn/img/pieces/cards/purple1.svg"})),C.createElement("svg",B({height:100,width:90,x:464,className:"example","aria-labelledby":n},O),t?C.createElement("title",{id:n},t):null,C.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice"),c||(c=C.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#other-general-strategy-question-5_yml__a)",x:"0%",y:"50%"},"Clue Giver")),u||(u=C.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),C.createElement("svg",B({height:100,width:70,x:554,className:"example","aria-labelledby":n},O),t?C.createElement("title",{id:n},t):null,g||(g=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",B({height:100,width:70,x:632,className:"example","aria-labelledby":n},O),t?C.createElement("title",{id:n},t):null,h||(h=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",B({height:100,width:70,x:710,className:"example","aria-labelledby":n},O),t?C.createElement("title",{id:n},t):null,m||(m=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",B({height:100,width:70,x:788,className:"example","aria-labelledby":n},O),t?C.createElement("title",{id:n},t):null,d||(d=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",B({height:100,width:70,x:866,className:"example","aria-labelledby":n},O),t?C.createElement("title",{id:n},t):null,p||(p=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",B({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":n},O),t?C.createElement("title",{id:n},t):null,C.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Bob")),b||(b=C.createElement("image",{height:100,width:70,x:554,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow5.svg",y:125})),f||(f=C.createElement("image",{height:100,width:70,x:632,xlinkHref:"/hanabi_cn/img/pieces/cards/blue4.svg",y:125})),y||(y=C.createElement("image",{height:100,width:70,x:710,xlinkHref:"/hanabi_cn/img/pieces/cards/green3.svg",y:125})),v||(v=C.createElement("image",{height:100,width:70,x:788,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow3.svg",y:125})),x||(x=C.createElement("image",{height:100,width:70,x:866,xlinkHref:"/hanabi_cn/img/pieces/cards/red1.svg",y:125})),C.createElement("svg",B({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":n},O),t?C.createElement("title",{id:n},t):null,C.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Cathy")),C.createElement("svg",B({height:100,width:70,x:554,y:250,className:"example","aria-labelledby":n},O),t?C.createElement("title",{id:n},t):null,w||(w=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",B({height:100,width:70,x:632,y:250,className:"example","aria-labelledby":n},O),t?C.createElement("title",{id:n},t):null,E||(E=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",B({height:100,width:70,x:710,y:250,className:"example","aria-labelledby":n},O),t?C.createElement("title",{id:n},t):null,k||(k=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",B({height:100,width:70,x:788,y:250,className:"example","aria-labelledby":n},O),t?C.createElement("title",{id:n},t):null,q||(q=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",B({height:100,width:70,x:866,y:250,className:"example","aria-labelledby":n},O),t?C.createElement("title",{id:n},t):null,N||(N=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))))},Z=["components"],A={id:"other-general-strategy-question-5",title:"\u5176\u4ed6\u7b56\u7565\uff08\u98985\uff09"},M=void 0,H={unversionedId:"beginner/other-general-strategy-question-5",id:"beginner/other-general-strategy-question-5",title:"\u5176\u4ed6\u7b56\u7565\uff08\u98985\uff09",description:"<Tabs",source:"@site/docs/beginner/other-general-strategy-question-5.md",sourceDirName:"beginner",slug:"/beginner/other-general-strategy-question-5",permalink:"/hanabi_cn/docs/beginner/other-general-strategy-question-5",editUrl:"https://github.com/jk15162428/hanabi_cn/edit/master/docs/beginner/other-general-strategy-question-5.md",tags:[],version:"current",frontMatter:{id:"other-general-strategy-question-5",title:"\u5176\u4ed6\u7b56\u7565\uff08\u98985\uff09"},sidebar:"mainSidebar",previous:{title:"\u5176\u4ed6\u7b56\u7565\uff08\u98984\uff09",permalink:"/hanabi_cn/docs/beginner/other-general-strategy-question-4"},next:{title:"\u7279\u6b8a\u64cd\u4f5c",permalink:"/hanabi_cn/docs/beginner/special-moves"}},V=[],G={toc:V};function W(e){var t=e.components,n=(0,P.Z)(e,Z);return(0,_.kt)("wrapper",(0,O.Z)({},G,n,{components:t,mdxType:"MDXLayout"}),(0,_.kt)(T.Z,{id:"other-general-strategy-question-4",mdxType:"BeginnersGuideProgress"}),(0,_.kt)(j.Z,{defaultValue:"question",values:[{label:"\u95ee\u9898",value:"question"},{label:"\u9898\u89e3",value:"solution"}],mdxType:"Tabs"},(0,_.kt)(R.Z,{value:"question",mdxType:"TabItem"},(0,_.kt)("ul",null,(0,_.kt)("li",{parentName:"ul"},"Enumerate all of the legal clues that Alice can give."),(0,_.kt)("li",{parentName:"ul"},"Of these possibilities, what clue should Alice give?"))),(0,_.kt)(R.Z,{value:"solution",mdxType:"TabItem"},(0,_.kt)("ul",null,(0,_.kt)("li",{parentName:"ul"},"Alice can clue green to Bob as a ",(0,_.kt)("em",{parentName:"li"},"Play Clue")," on the green 3.",(0,_.kt)("ul",{parentName:"li"},(0,_.kt)("li",{parentName:"ul"},'This would "get" one card.'))),(0,_.kt)("li",{parentName:"ul"},"Alice can clue number 3 to Bob as a ",(0,_.kt)("em",{parentName:"li"},"Play Clue")," on the green 3.",(0,_.kt)("ul",{parentName:"li"},(0,_.kt)("li",{parentName:"ul"},'This would "get" two cards. (Bob would play the green 3 and hold on to the yellow 3 for later.)'))),(0,_.kt)("li",{parentName:"ul"},'Alice knows that normally, color clues are preferred to number clues. But that\'s only when the color clue and the number clue are more or less "the same". Here, it is much better to get two cards than to get one card, so Alice should clue number 3.')))),(0,_.kt)(D,{mdxType:"OtherGeneralStrategyQuestion5"}))}W.isMDXComponent=!0},5774:function(e,t,n){"use strict";n.d(t,{Ip:function(){return s}});var r=n(7294),a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},a(e,t)};function i(e){var t=e.className,n=e.counterClockwise,a=e.dashRatio,i=e.pathRadius,s=e.strokeWidth,c=e.style;return(0,r.createElement)("path",{className:t,style:Object.assign({},c,o({pathRadius:i,dashRatio:a,counterClockwise:n})),d:l({pathRadius:i,counterClockwise:n}),strokeWidth:s,fillOpacity:0})}function l(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function o(e){var t=e.counterClockwise,n=e.dashRatio,r=e.pathRadius,a=2*Math.PI*r,i=(1-n)*a;return{strokeDasharray:a+"px "+a+"px",strokeDashoffset:(t?-i:i)+"px"}}var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,n),r)-n)/(r-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,a=e.classes,l=e.counterClockwise,o=e.styles,s=e.strokeWidth,c=e.text,u=this.getPathRadius(),g=this.getPathRatio();return(0,r.createElement)("svg",{className:a.root+" "+n,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:a.background,style:o.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(i,{className:a.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:s,style:o.trail}),(0,r.createElement)(i,{className:a.path,counterClockwise:l,dashRatio:g*t,pathRadius:u,strokeWidth:s,style:o.path}),c?(0,r.createElement)("text",{className:a.text,style:o.text,x:50,y:50},c):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component)}}]);