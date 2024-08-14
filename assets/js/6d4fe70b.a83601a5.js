"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[442],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,y=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Validators",s={unversionedId:"validators/index",id:"validators/index",title:"Validators",description:"In the eSync Network, validators serve a critical role in ensuring the security, consensus, and integrity of the network.",source:"@site/docs/validators/index.md",sourceDirName:"validators",slug:"/validators/",permalink:"/validators/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"validators",next:{title:"Quick-Setup",permalink:"/validators/quick_setup"}},c={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"validators"},"Validators"),(0,a.kt)("p",null,"In the eSync Network, validators serve a critical role in ensuring the security, consensus, and integrity of the network. "),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Please be aware, that running a node requires at least basic knowledge of the Linux operating system and docker!")),(0,a.kt)("p",null,"Here are the key purposes of validators in the eSync Network:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Transaction Validation"),": Validators verify the validity of individual transactions within the eSync Network. They check if transactions meet the predefined rules and requirements, such as proper formatting, valid digital signatures, and accurate data. This validation process helps maintain the integrity of the blockchain by preventing the inclusion of fraudulent or invalid transactions.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Block Verification"),": Validators are responsible for verifying the integrity of blocks before they are added to the eSync Network. They ensure that the transactions within a block are valid, consistent with the consensus rules, and properly linked to the previous blocks. By verifying blocks, validators contribute to the overall security and accuracy of the blockchain ledger.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Consensus Participation"),": Validators actively participate in the consensus mechanism of the eSync Network. They contribute to the agreement on the order of transactions and the selection of the next block to be added to the blockchain. The consensus mechanism in eCredits is proof of authority(PoA).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Network Security"),": Validators play a vital role in maintaining the security of the eSync Network network. By validating transactions and verifying blocks, they contribute to the prevention of various security threats, including double-spending attacks and unauthorized modifications of the blockchain data. Validators help ensure the overall security and trustworthiness of the eSync Network.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Block Creation"),": In the eSync Network, validators have the responsibility to propose and create new blocks. This involves gathering valid transactions, constructing new blocks, and adding them to the blockchain.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Governance and Consensus Rule Changes"),": Validators in the eSync Network also participate in governance and decision-making processes. They  have the ability to vote on proposed protocol upgrades, changes in network parameters, or modifications to the consensus rules. Validators contribute to shaping the future development and evolution of the eSync Network by participating in these decision-making processes."))),(0,a.kt)("p",null,"In order to become a validator and become part of the eCredits community, you need to first setup your ",(0,a.kt)("a",{parentName:"p",href:"/validators/node_setup"},"own validator hardware"),"."))}u.isMDXComponent=!0}}]);