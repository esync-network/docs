"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[262],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,f=c["".concat(l,".").concat(h)]||c[h]||d[h]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="Quick-Setup",s={unversionedId:"validators/quick_setup",id:"validators/quick_setup",title:"Quick-Setup",description:"The following contains a quick walkthrough of the installation of a Validator Node. The general process applies for all node types, you just have to use the respecive docker-compose file for your node type.",source:"@site/docs/validators/quick_setup.md",sourceDirName:"validators",slug:"/validators/quick_setup",permalink:"/validators/quick_setup",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"validators",previous:{title:"Validators",permalink:"/validators/"},next:{title:"Node Setup",permalink:"/validators/node_setup"}},l={},p=[{value:"Preparation (Updates &amp; Docker)",id:"preparation-updates--docker",level:2},{value:"Node Setup",id:"node-setup",level:2},{value:"Setup with script",id:"setup-with-script",level:2},{value:"Installation and execution",id:"installation-and-execution",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-setup"},"Quick-Setup"),(0,a.kt)("p",null,"The following contains a quick walkthrough of the installation of a ",(0,a.kt)("strong",{parentName:"p"},"Validator")," Node. The general process applies for all node types, you just have to use the respecive docker-compose file for your node type."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Please ensure you meet all ",(0,a.kt)("a",{parentName:"p",href:"/validators/node_setup#prerequisites"},"prerequisites")," for running a node!")),(0,a.kt)("h2",{id:"preparation-updates--docker"},"Preparation (Updates & Docker)"),(0,a.kt)("p",null,"Please install docker as described at ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"https://docs.docker.com/engine/install/"),". For\nUbuntu, you can also simply use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update && sudo apt install docker docker-compose\nsudo usermod -aG docker $USER\n")),(0,a.kt)("h2",{id:"node-setup"},"Node Setup"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"datadir='/var/lib/eCredits/'\n")),(0,a.kt)("h2",{id:"setup-with-script"},"Setup with script"),(0,a.kt)("p",null,"The SCE provides a ready made setup and management script for validators. This script can be donwloaded ",(0,a.kt)("a",{parentName:"p",href:"https://dl.ecredits.com/scripts/ecredits.sh"},"here")," and will work in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/esync/mainnet")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/esync/testnet")," folders. So please make sure they are not yet used and the disk they are on has sufficient space to hold the chain. Ideally the chain is on a separate partition than your root folder."),(0,a.kt)("h3",{id:"installation-and-execution"},"Installation and execution"),(0,a.kt)("p",null,"To install the script, just download it to your ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/")," directory and apply execution permission to it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'sudo wget "https://dl.ecredits.com/scripts/ecredits.sh" -O /usr/local/bin/esync\nsudo chmod ugo+x /usr/local/bin/esync\n')),(0,a.kt)("p",null,"Now, when you launch the script with the ",(0,a.kt)("inlineCode",{parentName:"p"},"esync")," command, it will lead you through the initial setup of your node."),(0,a.kt)("p",null,"If you wish to setup a testnet node, just start it with ",(0,a.kt)("inlineCode",{parentName:"p"},"esync testnet")," everytime you want to work with your testnet node. Please be aware, that the testnet node will operate on different ports on your host than the standard ones defined above. You'll need to update your firewall rules accordingly."))}d.isMDXComponent=!0}}]);