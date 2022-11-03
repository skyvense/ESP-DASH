"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[3881],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),d=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(a),b=n,m=s["".concat(u,".").concat(b)]||s[b]||c[b]||l;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},2654:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const l={title:"Button Card",sidebar_label:"Button",sidebar_position:5},o=void 0,i={unversionedId:"cards/button",id:"version-v3.x.x/cards/button",title:"Button Card",description:"Preview:",source:"@site/versioned_docs/version-v3.x.x/cards/button.md",sourceDirName:"cards",slug:"/cards/button",permalink:"/cards/button",draft:!1,tags:[],version:"v3.x.x",sidebarPosition:5,frontMatter:{title:"Button Card",sidebar_label:"Button",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Progress",permalink:"/cards/progress"},next:{title:"Status",permalink:"/cards/status"}},u={},d=[{value:"Preview:",id:"preview",level:4},{value:"Type:",id:"type",level:4},{value:"Valid Data Types:",id:"valid-data-types",level:4},{value:"Initializer:",id:"initializer",level:4},{value:"Callback:",id:"callback",level:4},{value:"Updaters:",id:"updaters",level:4}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"preview"},"Preview:"),(0,n.kt)("img",{src:"/img//toggle-button-inactive.png",width:"280px",alt:"Button Card Preview"}),(0,n.kt)("br",null),(0,n.kt)("img",{src:"/img//toggle-button-active.png",width:"280px",alt:"Button Card Preview"}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"Button card adds a interactive toggle button to your dashboard. This provides you with a simple ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," input from your dashboard."),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"type"},"Type:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"BUTTON_CARD")),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"valid-data-types"},"Valid Data Types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool"))),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"initializer"},"Initializer:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'/* \n  Button Card\n  Valid Arguments: (ESPDash dashboard, Card Type, const char* name)\n*/\nCard card1(&dashboard, BUTTON_CARD, "Test Button");\n')),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"callback"},"Callback:"),(0,n.kt)("p",null,"Button card requires a callback function which will be executed when we receive a input from our dashboard. In this example, we will use the ",(0,n.kt)("inlineCode",{parentName:"p"},"attachCallback")," function and provide a lambda function with a boolean argument."),(0,n.kt)("p",null,"In the case of button card, the value sent by your dashboard will be opposite of your current value. For Example: If your button is set to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),", then clicking that button on dashboard will trigger this callback with ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," You need to call the ",(0,n.kt)("inlineCode",{parentName:"p"},"update")," function and ",(0,n.kt)("inlineCode",{parentName:"p"},"sendUpdates")," immediately once you receive the value in callback. Otherwise user input will not be registered on dashboard."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'/*\n  We provide our attachCallback with a lambda function to handle incomming data\n  `value` is the boolean sent from your dashboard\n*/\ncard1.attachCallback([&](bool value){\n  Serial.println("[Card1] Button Callback Triggered: "+String((value)?"true":"false"));\n  card1.update(value);\n  dashboard.sendUpdates();\n});\n')),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"updaters"},"Updaters:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"card1.update(true);\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"card1.update(false);\n")),(0,n.kt)("br",null),(0,n.kt)("br",null))}c.isMDXComponent=!0}}]);