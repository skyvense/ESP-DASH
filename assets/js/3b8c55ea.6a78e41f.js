"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[3217],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(h,l(l({ref:t},p),{},{components:r})):n.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9803:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={title:"Installation",sidebar_label:"Installation",sidebar_position:3},l=void 0,o={unversionedId:"installation",id:"installation",title:"Installation",description:"ESP-DASH depends on the following open-source libraries/boards. Make sure to install them before you install ESP-DASH.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/next/installation",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Installation",sidebar_label:"Installation",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Concept",permalink:"/next/concept"},next:{title:"Getting Started",permalink:"/next/getting-started"}},s={},u=[{value:"For ESP8266:",id:"for-esp8266",level:5},{value:"For ESP32:",id:"for-esp32",level:5},{value:"Installing ESP-DASH",id:"installing-esp-dash",level:3},{value:"1. Directly Through Arduino IDE - Library Manager",id:"1-directly-through-arduino-ide---library-manager",level:4},{value:"2. Manual Install",id:"2-manual-install",level:4},{value:"For Windows:",id:"for-windows",level:5},{value:"For Linux:",id:"for-linux",level:5},{value:"3. Import through Arduino IDE",id:"3-import-through-arduino-ide",level:4}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ESP-DASH depends on the following open-source libraries/boards. Make sure to install them before you install ESP-DASH."),(0,a.kt)("h5",{id:"for-esp8266"},"For ESP8266:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/esp8266/Arduino"},"ESP8266 Arduino Core")," - ",(0,a.kt)("strong",{parentName:"li"},"(latest)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/me-no-dev/ESPAsyncTCP"},"ESPAsyncTCP")," - ",(0,a.kt)("strong",{parentName:"li"},"v1.2.0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/me-no-dev/ESPAsyncWebServer"},"ESPAsyncWebServer")," - ",(0,a.kt)("strong",{parentName:"li"},"v1.2.3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/bblanchon/ArduinoJson"},"ArduinoJson")," - ",(0,a.kt)("strong",{parentName:"li"},"v6.17.0"))),(0,a.kt)("h5",{id:"for-esp32"},"For ESP32:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/espressif/arduino-esp32"},"ESP32 Arduino Core")," - ",(0,a.kt)("strong",{parentName:"li"},"(latest)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/me-no-dev/AsyncTCP"},"AsyncTCP")," - ",(0,a.kt)("strong",{parentName:"li"},"v1.0.3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/me-no-dev/ESPAsyncWebServer"},"ESPAsyncWebServer")," - ",(0,a.kt)("strong",{parentName:"li"},"v1.2.3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/bblanchon/ArduinoJson"},"ArduinoJson")," - ",(0,a.kt)("strong",{parentName:"li"},"v6.17.0"))),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"installing-esp-dash"},"Installing ESP-DASH"),(0,a.kt)("h4",{id:"1-directly-through-arduino-ide---library-manager"},"1. Directly Through Arduino IDE - Library Manager"),(0,a.kt)("p",null,'Go to Sketch > Include Library > Library Manager > Search for "ESP-DASH" > Install'),(0,a.kt)("h4",{id:"2-manual-install"},"2. Manual Install"),(0,a.kt)("h5",{id:"for-windows"},"For Windows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ayushsharma82/ESP-DASH/archive/master.zip"},"Repository")),(0,a.kt)("li",{parentName:"ul"},"Extract the .zip in ",(0,a.kt)("inlineCode",{parentName:"li"},'Documents > Arduino > Libraries > {Place "ESP-DASH" folder Here}'))),(0,a.kt)("h5",{id:"for-linux"},"For Linux:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ayushsharma82/ESP-DASH/archive/master.zip"},"Repository")," "),(0,a.kt)("li",{parentName:"ul"},"Extract the .zip in ",(0,a.kt)("inlineCode",{parentName:"li"},'Sketchbook > Libraries > {Place "ESP-DASH" folder Here}'))),(0,a.kt)("h4",{id:"3-import-through-arduino-ide"},"3. Import through Arduino IDE"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ayushsharma82/ESP-DASH/archive/master.zip"},"Repository")),(0,a.kt)("li",{parentName:"ul"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Sketch > Include Library > Add .zip Library > Select the Downloaded .zip File."))))}d.isMDXComponent=!0}}]);