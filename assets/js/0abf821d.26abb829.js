"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[59],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9161:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:3},i="Node Setup",l={unversionedId:"validators/node_setup",id:"validators/node_setup",title:"Node Setup",description:"This document describes all necessary steps to setup an eSync Network Validator Node to participate in the eSync Network network. The intended audience for this documentation are administrators, developers, and other interested people who wish to run a node.",source:"@site/docs/validators/node_setup.md",sourceDirName:"validators",slug:"/validators/node_setup",permalink:"/validators/node_setup",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"validators",previous:{title:"Quick-Setup",permalink:"/validators/quick_setup"},next:{title:"Branded Node Setup",permalink:"/validators/branded_nodes_setup"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:3},{value:"Connectivity Recommendations",id:"connectivity-recommendations",level:3},{value:"Required Software",id:"required-software",level:3},{value:"Firewall Settings",id:"firewall-settings",level:3},{value:"Setup",id:"setup",level:2},{value:"Preparing machine",id:"preparing-machine",level:3},{value:"Install Docker and Docker-compose",id:"install-docker-and-docker-compose",level:4},{value:"Configure Docker",id:"configure-docker",level:4},{value:"Secure Docker",id:"secure-docker",level:4},{value:"Create directory for chain data",id:"create-directory-for-chain-data",level:4},{value:"Create nodes list and genesis file",id:"create-nodes-list-and-genesis-file",level:4},{value:"Download the Docker image",id:"download-the-docker-image",level:4},{value:"Start the eCredits node",id:"start-the-ecredits-node",level:3},{value:"Start Validator Node",id:"start-validator-node",level:4},{value:"Connect to IPC endpoint to unlock account for signing and start mining:",id:"connect-to-ipc-endpoint-to-unlock-account-for-signing-and-start-mining",level:4},{value:"Apply as validator",id:"apply-as-validator",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"node-setup"},"Node Setup"),(0,r.kt)("p",null,"This document describes all necessary steps to setup an eSync Network Validator Node to participate in the eSync Network network. The intended audience for this documentation are administrators, developers, and other interested people who wish to run a node."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"You are solely responsible for your Validator Node. We do not provide any support for eSync Network Validator Nodes. This includes but is not limited to support for setting up, maintaining, or updating eSync Network Validator Nodes. It's your responsibility to take care of the node and it's security, keeping it up to date, and to participate in the community.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To setup and run an eSync Network node, a basic understanding of Linux, Docker, and Bash is\nrequired. The examples provided are based on Ubuntu Server 20.04 LTS. "),(0,r.kt)("h3",{id:"hardware-requirements"},"Hardware Requirements"),(0,r.kt)("p",null,"For Validator and Full Nodes, we suggest to choose a setup with the following properties:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Very fast and reliable SSDs"),": Please make sure that you are using a system which utilizes SSDs. You should also make sure that there are premium SSDs in use, and preferably NVMe."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"A large amount of RAM"),": 16GB RAM is the absolute minimum configuration, and we suggest 64GB for optimal performance, while 32GB is sufficient for a node at the time of writing. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fast and extensible storage"),": Minimum storage requirements are 1TB, and you should make sure that you can grow the space at a later time should you wish to run a full sync node. ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Minimum requirements"),":  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CPU"),": 4 cores / 8 threads, 2.8 GHz or faster, 64-bit"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RAM"),": 32 GB RAM"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"HDD"),": 1 TB NVMe SSD"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GPU"),": No strict requirements")),(0,r.kt)("p",null,"Example cloud virtual machines are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Cloud Provider"),(0,r.kt)("th",{parentName:"tr",align:null},"Virtual Machine Size"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Azure"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard_D8_v4 or Standard_D8s_v4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Amazon AWS"),(0,r.kt)("td",{parentName:"tr",align:null},"t3.2xlarge")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Google Cloud"),(0,r.kt)("td",{parentName:"tr",align:null},"e2-standard-8")))),(0,r.kt)("h3",{id:"connectivity-recommendations"},"Connectivity Recommendations"),(0,r.kt)("p",null,'The nodes should be connected through an "always on" internet connection (broadband and not LTE). We recommend\na dedicated network connection with at least 8 Mbit up/down.'),(0,r.kt)("h3",{id:"required-software"},"Required Software"),(0,r.kt)("p",null,"A Linux x86_64 machine with running Docker daemon and installed Docker-compose binaries. You can install\nDocker and Docker-compose as advised at ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"https://docs.docker.com/engine/install/")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"https://docs.docker.com/compose/install/"),"."),(0,r.kt)("p",null,"For Ubuntu, you can simply use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install docker docker-compose\n")),(0,r.kt)("h3",{id:"firewall-settings"},"Firewall Settings"),(0,r.kt)("p",null,"In case you use a firewall, please make sure to open the following ports:  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Incoming")," (Internet -> ECS node):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Discovery: 30303 TCP/UDP"),(0,r.kt)("li",{parentName:"ul"},"RPC (optional): 8545 TCP/UDP"),(0,r.kt)("li",{parentName:"ul"},"Metrics (optional): 6060 TCP/UDP")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Outgoing")," (ECS node -> Internet): "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GETH: 30303 TCP/UDP"),(0,r.kt)("li",{parentName:"ul"},"The following are in general needed for internet access/time synchronization:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DNS (optional): 53 TCP/UDP"),(0,r.kt)("li",{parentName:"ul"},"HTTP/HTTPS (optional): 80, 443 RCP"),(0,r.kt)("li",{parentName:"ul"},"NTP (optional): 123 TCP/UDP")))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"preparing-machine"},"Preparing machine"),(0,r.kt)("h4",{id:"install-docker-and-docker-compose"},"Install Docker and Docker-compose"),(0,r.kt)("p",null,"Please install Docker and Docker-compose as described at ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"https://docs.docker.com/engine/install/")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"https://docs.docker.com/compose/install/"),".",(0,r.kt)("br",{parentName:"p"}),"\n","For Ubuntu, you can simply use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt-get update && sudo apt install docker docker-compose\n")),(0,r.kt)("h4",{id:"configure-docker"},"Configure Docker"),(0,r.kt)("p",null,"Add user to Docker group."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sudo usermod -aG docker $USER")),(0,r.kt)("h4",{id:"secure-docker"},"Secure Docker"),(0,r.kt)("p",null,"We strongly recommend to not running the container without any additional hardening measures. To do so please review the respective ",(0,r.kt)("a",{parentName:"p",href:"https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html"},"OWASP Cheatsheet")," and apply appropriate measures."),(0,r.kt)("h4",{id:"create-directory-for-chain-data"},"Create directory for chain data"),(0,r.kt)("p",null,"Create a directory for storing the chain. This directory can be a subdirectory on the same physical OS device or (better) a volume on a separate disk. This directory will be used as working directory for the Geth process."),(0,r.kt)("p",null,"Store the directory path in a variable for later use. The recommended path is ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/eCredits"),", but feel free to use whatever fits best for you:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"datadir='/var/lib/eCredits/'\nmkdir -p $datadir/datadir/geth\n")),(0,r.kt)("h4",{id:"create-nodes-list-and-genesis-file"},"Create nodes list and genesis file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd $datadir\nwget https://docs.ecredits.com/files/node-setup/genesis.json\nwget https://docs.ecredits.com/files/node-setup/archive-node.docker-compose.yaml\nwget https://docs.ecredits.com/files/node-setup/full-node.docker-compose.yaml\nwget https://docs.ecredits.com/files/node-setup/light-node.docker-compose.yaml\nwget https://docs.ecredits.com/files/node-setup/validator.docker-compose.yaml\n")),(0,r.kt)("h4",{id:"download-the-docker-image"},"Download the Docker image"),(0,r.kt)("p",null,"The eCredits docker image can be found at: ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/ecredits/node"},"https://hub.docker.com/r/ecredits/node"),(0,r.kt)("br",{parentName:"p"}),"\n","You can pull the Docker image via:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker pull ecredits/node")),(0,r.kt)("h3",{id:"start-the-ecredits-node"},"Start the eCredits node"),(0,r.kt)("h4",{id:"start-validator-node"},"Start Validator Node"),(0,r.kt)("p",null,"A Validator Node validates transactions and will receive a reward for this work. The reward itself is automatically granted to the node's\npublic address. eCredits allows to configure a separate address to collect those fees. To use this feature, edit the validator.docker-compose.yaml (e.g. via ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo nano validator.docker-compose.yaml"),").\nUncomment ",(0,r.kt)("inlineCode",{parentName:"p"},"- ETHERBASE")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"environment:")," section as well as ",(0,r.kt)("inlineCode",{parentName:"p"},"--miner.etherbase 0xTODO0000ENTER000YOUR000ADDRESS000HERE000")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"entrypoint:"),"\nsection. Please replace ",(0,r.kt)("inlineCode",{parentName:"p"},"0xTODO0000ENTER000YOUR000ADDRESS000HERE000")," with your address. If you do not want to use this feature, remove the commented lines from the validator.docker-compose.yaml."),(0,r.kt)("p",null,"Run the following command to start the validator:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose -f validator.docker-compose.yaml up -d")),(0,r.kt)("p",null,"Check the status of the validator via:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker logs --tail 10 -f ecredits_ecs-validator_1")),(0,r.kt)("h4",{id:"connect-to-ipc-endpoint-to-unlock-account-for-signing-and-start-mining"},"Connect to IPC endpoint to unlock account for signing and start mining:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new or import an existing account for block signing"),(0,r.kt)("p",{parentName:"li"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://geth.ethereum.org/docs/interface/managing-your-accounts"},"https://geth.ethereum.org/docs/interface/managing-your-accounts")),(0,r.kt)("p",{parentName:"li"},"a. Create a new account"),(0,r.kt)("p",{parentName:"li"},"To create a new account run (you need to provide a password for account encryption): "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"docker exec -it ecredits_ecs-validator_1 geth account new")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Your new account is locked with a password. Please give a password. Do not forget this password.\nPassword:\nRepeat password:\n\nYour new key was generated\n\nPublic address of the key:   0x....\n")),(0,r.kt)("admonition",{parentName:"li",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Make sure you backup your keys regularly!")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},"It is important to backup the given password ",(0,r.kt)("strong",{parentName:"em"},"AND")," the ",(0,r.kt)("strong",{parentName:"em"},"keystore")," folder in the mapped ",(0,r.kt)("strong",{parentName:"em"},"datadir")," volume of the Docker-compose file as it contains the generated, encrypted key. Only the combination of both allows you to recover the validator key as the encrypted private key is stored there."))),(0,r.kt)("p",{parentName:"li"},"b. Import existing account"),(0,r.kt)("p",{parentName:"li"},"To import an account from e.g. private key you can use the command below:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"docker exec -it ecredits_ecs-validator_1 geth account import <PrivateKeyFile>")),(0,r.kt)("p",{parentName:"li"},"where ",(0,r.kt)("inlineCode",{parentName:"p"},"<PrivateKeyFile>")," is a text file containing the private key. Also, here you must provide a password for account encryption."),(0,r.kt)("p",{parentName:"li"},"The generated output looks like:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Your new account is locked with a password. Please give a password. Do not forget this password.\nPassphrase:\nRepeat passphrase:\nAddress: 0x...\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect to eCredits client IPC endpoint"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"docker exec -it ecredits_ecs-validator_1 geth attach"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following commands in order to start mining"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Unlock Account"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'personal.unlockAccount("<Address>", "<PW>", 0)')),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<Address>")," is the account address in ",(0,r.kt)("strong",{parentName:"p"},"0x")," format. The ",(0,r.kt)("inlineCode",{parentName:"p"},"<PW>")," is the password from previous step given during account creation/import."),(0,r.kt)("p",{parentName:"li"},"Example: ",(0,r.kt)("inlineCode",{parentName:"p"},'personal.unlockAccount("0x...", "mySecret", 0)'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start the mining with"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"miner.start()"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Validate that mining is working by checking the logs: "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"docker logs -f --tail=10 ecredits_ecs-validator_1")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Your validator can only participate in mining once the majority of the other validators have voted for your validator to become part of consensus.")),(0,r.kt)("h3",{id:"apply-as-validator"},"Apply as validator"),(0,r.kt)("p",null,"Each validator must be accepted by a majority of the existing validators. This\nmajority must be achieved either by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Validator Nodes: more than 50%"),(0,r.kt)("li",{parentName:"ul"},"Supervalidator Nodes: more than 75%")),(0,r.kt)("p",null,"If you are a member of the SCE or you bought a node at the ",(0,r.kt)("a",{parentName:"p",href:"https://shop.ecredits.com"},"eCredits Web Shop"),", you can apply via mail at ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@ecredits.com"},"support@ecredits.com"),". Please fill out the following information\nand send it to support:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"User ID (your email address in eCredits system): \nValidator address: \nElements username: \nValidator up and running: yes/no\nHardware requirements fulfilled: yes/no\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User ID: the email address you use in the eCredits system to login to the Web Portal or the eWallet."),(0,r.kt)("li",{parentName:"ul"},"Validator address: the address of your validator that you generated and will need to unlock your validator."),(0,r.kt)("li",{parentName:"ul"},"Element username including the server (e.g. @matrix.org): Element is a secure messenger. There is an eCredits space (",(0,r.kt)("a",{parentName:"li",href:"https://matrix.to/#/#ecredits:matrix.org"},"https://matrix.to/#/#ecredits:matrix.org"),") there with a private channel for validators which is used as a fast communication channel so that the users can help each other and updates are promoted and potential downtimes of validators are reduced as much as possible."),(0,r.kt)("li",{parentName:"ul"},"Validator up and running: It is important that the validator is already setup and running. Thus, we explicitly ask you if it is done."),(0,r.kt)("li",{parentName:"ul"},"Hardware requirements fulfilled: Please let us know if you fulfill the requirements.")),(0,r.kt)("p",null,"As alternative, you can communicate to other validators and convince them to accept your node as\na validator in the network."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"It is your responsibility to keep your node up to date. We will publish updates in the elements channel, and you will also see it in Docker hub. Please note that\nthe SCE or the community could decide to vote for the removal of a node if there are too many downtimes or the node is not regularly updated and maintained.")))}u.isMDXComponent=!0}}]);