"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[125],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1240:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:1},o="Security Overview",s={unversionedId:"security/index",id:"security/index",title:"Security Overview",description:"eCredits is a Layer-1 EVM (Ethereum Virtual Machine)-compatible blockchain platform designed to facilitate the development and execution of decentralized applications (DApps) and smart contracts. This document explores the key security features that make eCredits a robust and secure blockchain platform.",source:"@site/docs/security/index.md",sourceDirName:"security",slug:"/security/",permalink:"/security/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"security",next:{title:"Bug Bounty Program",permalink:"/security/bug_bounty"}},c={},l=[{value:"Immutable and Transparent Transactions",id:"immutable-and-transparent-transactions",level:2},{value:"Decentralized Consensus Mechanism",id:"decentralized-consensus-mechanism",level:2},{value:"Smart Contract Security",id:"smart-contract-security",level:2},{value:"Gas Fees",id:"gas-fees",level:2},{value:"On-Chain Governance and Upgradability",id:"on-chain-governance-and-upgradability",level:2},{value:"Cryptographic Security",id:"cryptographic-security",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"security-overview"},"Security Overview"),(0,n.kt)("p",null,"eCredits is a Layer-1 EVM (Ethereum Virtual Machine)-compatible blockchain platform designed to facilitate the development and execution of decentralized applications (DApps) and smart contracts. This document explores the key security features that make eCredits a robust and secure blockchain platform."),(0,n.kt)("h2",{id:"immutable-and-transparent-transactions"},"Immutable and Transparent Transactions"),(0,n.kt)("p",null,"Like Ethereum and other EVM-compatible blockchains, eCredits provides immutable and transparent transaction records. Once a transaction is validated and recorded on a block, it can't be altered or removed. This immutability ensures a high degree of transparency and accountability, as anyone can audit the transactions and verify their accuracy."),(0,n.kt)("p",null,"All transactions can be queried by running a node or by using the public block explorer which is available at ",(0,n.kt)("a",{parentName:"p",href:"https://explorer.ecredits.com"},"https://explorer.ecredits.com"),". "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.scorechain.com/"},"Scorechain")," is a compliance solution for crypto asset regulation and is used by several exchanges and other organizations that integrated eCredits to comply with crypto regulation or anti-money laundering rules."),(0,n.kt)("h2",{id:"decentralized-consensus-mechanism"},"Decentralized Consensus Mechanism"),(0,n.kt)("p",null,"eCredits employs a decentralized consensus mechanism, which distributes control across multiple network participants rather than a single central authority. This architecture prevents any single entity from controlling the network, thereby enhancing its security. The specific consensus mechanism used by eCredits may vary, but it's typically designed to be resilient against common attack vectors."),(0,n.kt)("h2",{id:"smart-contract-security"},"Smart Contract Security"),(0,n.kt)("p",null,"Smart contracts on eCredits, written in high-level languages like Solidity, can handle valuable digital assets and are immutable once deployed. As such, they are potential targets for malicious actors. However, eCredits employs several strategies to ensure their security:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Smart Contract Audits"),": Before deployment, smart contracts can undergo rigorous audits conducted by specialized firms. These audits scrutinize the contract's codebase, architecture, and design patterns to identify and mitigate potential vulnerabilities.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Formal Verification"),": This involves mathematically proving the correctness of a smart contract with respect to a specified set of properties. Formal verification can catch subtle, hard-to-find errors, providing an extra layer of assurance.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Standardized, Open-Source Smart Contracts"),": Developers are encouraged to use well-vetted, open-source smart contract libraries, such as OpenZeppelin. These libraries have been extensively audited and tested, reducing the likelihood of introducing new vulnerabilities when creating contracts."))),(0,n.kt)("p",null,"There are several tools available to do a security analysis of your smart contracts. You can find these in the ",(0,n.kt)("a",{parentName:"p",href:"/security/smart_contract_analysis_tools"},"Smart Contract Analysis Tools")," section."),(0,n.kt)("h2",{id:"gas-fees"},"Gas Fees"),(0,n.kt)("p",null,"To protect against spam and potential Denial of Service (DoS) attacks, eCredits imposes gas fees for each operation performed on the blockchain. By associating a cost with every operation, eCredits discourages malicious actors from overwhelming the network with transactions."),(0,n.kt)("h2",{id:"on-chain-governance-and-upgradability"},"On-Chain Governance and Upgradability"),(0,n.kt)("p",null,"eCredits incorporates on-chain governance and smart contract upgradability, enabling the network to adapt over time. These features allow the community to propose, vote on, and implement changes to the protocol, effectively addressing new threats and vulnerabilities as they arise."),(0,n.kt)("h2",{id:"cryptographic-security"},"Cryptographic Security"),(0,n.kt)("p",null,"eCredits, like other EVM-compatible chains, uses cryptographic algorithms to secure data. Transactions are digitally signed using a private key, and only the corresponding public key can confirm the signature's authenticity. This level of cryptography ensures the identity of transaction parties and the integrity of the data being transacted."))}d.isMDXComponent=!0}}]);