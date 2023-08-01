"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[61],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:7},i="Log Messages",l={unversionedId:"validators/log_messages",id:"validators/log_messages",title:"Log Messages",description:"This section describes some of the log messages of the validator and what they mean:",source:"@site/docs/validators/log_messages.md",sourceDirName:"validators",slug:"/validators/log_messages",permalink:"/docs/validators/log_messages",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"validators",previous:{title:"Quick Command Reference",permalink:"/docs/validators/quick_reference"},next:{title:"FAQ",permalink:"/docs/validators/faq"}},s={},c=[],d={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"log-messages"},"Log Messages"),(0,r.kt)("p",null,"This section describes some of the log messages of the validator and what they mean:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Commit new sealing work"),": The validator assembled a new block and commits it to the network.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Imported new chain segment"),": New blocks were downloaded from the network and added to the blockchain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Unindexed transactions"),": The node maintains an index of transactions for faster access. This log message means that there are transactions which are not yet indexed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\ud83d\udd28 mined potential block"),": The validator potentially mined a block (potentially, because it must be accepted by all validators)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Deep froze chain segment"),": Ancient chain segments are moved out of the active database into immutable append-only files."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\ud83d\udd17 block reached canonical chain"),": The block is now on the canonical chain. There could be reorgs which results in temporary forks. The canonical chain is the fork that is accepted by all validators."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Self-blocking signing requested"),": A speciality in the consensus algorithm. Basically, all validators start to work on a block, but those who do currently not have the mining slot will add a small delay to it. If a node creates a block without a slot, it must miss the next slot and the delay will be extended and this message will popup."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'Block sealing failed err="signed recently, must wait for others"'),": The validator signed a block recently and now must wait for the other validators to seal blocks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Snapshot extension registration failed"),": Someone tried to connect to your node, but it failed (because of different configuration), which is fine.")))}p.isMDXComponent=!0}}]);