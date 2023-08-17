"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[519],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?i.createElement(y,l(l({ref:t},p),{},{components:r})):i.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<a;u++)l[u]=r[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5951:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=r(7462),n=(r(7294),r(3905));const a={sidebar_position:2},l="Bug Bounty Program",o={unversionedId:"security/bug_bounty",id:"security/bug_bounty",title:"Bug Bounty Program",description:"We take security very seriously at eCredits and The People's SCE, and we understand that a strong security posture requires constant effort and vigilance. To help ensure the security of our platform, we are launching a public bug bounty program, inviting security researchers and enthusiasts to report any security vulnerabilities they may find in our systems.",source:"@site/docs/security/bug_bounty.md",sourceDirName:"security",slug:"/security/bug_bounty",permalink:"/security/bug_bounty",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"security",previous:{title:"Security Overview",permalink:"/security/"},next:{title:"Security and Audit Reports",permalink:"/security/security_audits"}},s={},u=[{value:"Responsible Disclosure",id:"responsible-disclosure",level:2},{value:"Eligibility",id:"eligibility",level:2},{value:"Scope",id:"scope",level:2},{value:"Rules",id:"rules",level:2},{value:"Rewards",id:"rewards",level:2},{value:"Reporting a Vulnerability",id:"reporting-a-vulnerability",level:2},{value:"Legal",id:"legal",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bug-bounty-program"},"Bug Bounty Program"),(0,n.kt)("p",null,"We take security very seriously at eCredits and The People's SCE, and we understand that a strong security posture requires constant effort and vigilance. To help ensure the security of our platform, we are launching a public bug bounty program, inviting security researchers and enthusiasts to report any security vulnerabilities they may find in our systems."),(0,n.kt)("h2",{id:"responsible-disclosure"},"Responsible Disclosure"),(0,n.kt)("p",null,"Our tech team has up to three months to implement a fix based on the severity of the report. Please allow for this process to fully complete before you publicly disclose the vulnerability."),(0,n.kt)("h2",{id:"eligibility"},"Eligibility"),(0,n.kt)("p",null,"Our bug bounty program is open to anyone interested in helping us improve the security of our platform. This includes security researchers, developers, and enthusiasts.\nHowever, the following individuals and groups are not eligible to participate in our bug bounty program:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Employees and contractors of The People's SCE"),(0,n.kt)("li",{parentName:"ul"},"Anyone who has previously breached our terms of service or engaged in malicious activity on our platform")),(0,n.kt)("h2",{id:"scope"},"Scope"),(0,n.kt)("p",null,"The following domains and services are included in the scope of our bug bounty program:"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Application"),(0,n.kt)("th",null,"Link"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"eWallet App for smartphones"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://link.ecredits.com/app/install"},"https://link.ecredits.com/app/install"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Web Portal"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://portal.ecredits.com/"},"https://portal.ecredits.com/"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Cashier App"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://cashier.ecredits.com/"},"https://cashier.ecredits.com/"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Auth Service"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://shop.ecredits.com/"},"https://shop.ecredits.com/"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"APIs"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://api.ecredits.com/"},"https://api.ecredits.com/")," ",(0,n.kt)("br",null),"https://*.api.ecredits.com")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"RPC Endpoints"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://rpc.ecredits.com"},"https://rpc.ecredits.com"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples of in-scope vulnerabilities"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cross-site scripting (XSS)"),(0,n.kt)("li",{parentName:"ul"},"Cross-site request forgery (CSRF)"),(0,n.kt)("li",{parentName:"ul"},"Server-side request forgery (SSRF)"),(0,n.kt)("li",{parentName:"ul"},"Remote code execution (RCE)"),(0,n.kt)("li",{parentName:"ul"},"SQL injection (SQLi)"),(0,n.kt)("li",{parentName:"ul"},"Authentication or authorization vulnerabilities"),(0,n.kt)("li",{parentName:"ul"},"Privilege escalation"),(0,n.kt)("li",{parentName:"ul"},"Insecure direct object references"),(0,n.kt)("li",{parentName:"ul"},"Information disclosure"),(0,n.kt)("li",{parentName:"ul"},"Denial-of-service (DoS) attacks")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Out-of-scope vulnerabilities:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Any bug that does not pose a substantial or demonstrable security risk"),(0,n.kt)("li",{parentName:"ul"},"Automated vulnerability scanners or tools"),(0,n.kt)("li",{parentName:"ul"},"Any vulnerability in a dependent component that is already discovered (e.g. a vulnerability in log4j)"),(0,n.kt)("li",{parentName:"ul"},"Clickjacking, open redirects, or lack of security headers"),(0,n.kt)("li",{parentName:"ul"},"Denial of service (DOS)"),(0,n.kt)("li",{parentName:"ul"},"Social engineering attacks (e.g. phishing)"),(0,n.kt)("li",{parentName:"ul"},"Physical exploits of our servers or network"),(0,n.kt)("li",{parentName:"ul"},"Local network-based exploits such as DNS poisoning or ARP spoofing")),(0,n.kt)("h2",{id:"rules"},"Rules"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For employees and service providers, participation in the bug bounty program must not interfere with job responsibilities and should be conducted outside of work hours."),(0,n.kt)("li",{parentName:"ul"},"Any involvement you have with an in-scope domain that could create a conflict of interest renders that domain out-of-scope for you."),(0,n.kt)("li",{parentName:"ul"},"Do not publicly disclose any vulnerabilities without explicit written permission from The People's SCE."),(0,n.kt)("li",{parentName:"ul"},"Do not perform any tests that will disrupt services or impair others' ability to use them."),(0,n.kt)("li",{parentName:"ul"},"Do not use automated scanners."),(0,n.kt)("li",{parentName:"ul"},"To be eligible for bounty, all testing must be performed within the scope described above. Out-of-scope submissions will be accepted and acted upon, but are not eligible for bounty."),(0,n.kt)("li",{parentName:"ul"},"If you become aware of a vulnerability involving an out-of-scope domain, it is still appropriate to report the vulnerability via this program.")),(0,n.kt)("h2",{id:"rewards"},"Rewards"),(0,n.kt)("p",null,"We will reward the following amounts for qualifying security vulnerabilities based on their severity:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Severity"),(0,n.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Critical")),(0,n.kt)("td",{parentName:"tr",align:null},"500\u20ac - 2500\u20ac in eCredits")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"High")),(0,n.kt)("td",{parentName:"tr",align:null},"100\u20ac - 500\u20ac in eCredits")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Medium")),(0,n.kt)("td",{parentName:"tr",align:null},"20\u20ac - 100\u20ac in eCredits")))),(0,n.kt)("h2",{id:"reporting-a-vulnerability"},"Reporting a Vulnerability"),(0,n.kt)("p",null,"To report a vulnerability, please send an email to ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@ecredits.com"},"support@ecredits.com")," with the following information:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A detailed description of the vulnerability and how to reproduce it"),(0,n.kt)("li",{parentName:"ul"},"The potential impact of the vulnerability"),(0,n.kt)("li",{parentName:"ul"},"Steps to mitigate the vulnerability"),(0,n.kt)("li",{parentName:"ul"},"Any relevant screenshots or proof-of-concept code"),(0,n.kt)("li",{parentName:"ul"},"Your name (or handle) and contact information (email address or social media handle)"),(0,n.kt)("li",{parentName:"ul"},"Please do not publicly disclose the vulnerability until we've had a chance to investigate and address it.")),(0,n.kt)("h2",{id:"legal"},"Legal"),(0,n.kt)("p",null,"We will not take legal action against security researchers who report security vulnerabilities in accordance with this bug bounty program.\nHowever, we do require that you do not engage in any malicious activity or exploit any vulnerabilities beyond what is necessary to demonstrate the existence of the vulnerability.\nWe reserve the right to update or terminate this bug bounty program at any time."))}d.isMDXComponent=!0}}]);