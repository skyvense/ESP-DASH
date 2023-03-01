"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[5719],{3905:(t,e,a)=>{a.d(e,{Zo:()=>h,kt:()=>f});var r=a(7294);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,s=function(t,e){if(null==t)return{};var a,r,s={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(s[a]=t[a]);return s}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}var l=r.createContext({}),c=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},h=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,s=t.mdxType,n=t.originalType,l=t.parentName,h=i(t,["components","mdxType","originalType","parentName"]),p=c(a),d=s,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||n;return a?r.createElement(f,o(o({ref:e},h),{},{components:a})):r.createElement(f,o({ref:e},h))}));function f(t,e){var a=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var n=a.length,o=new Array(n);o[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[p]="string"==typeof t?t:s,o[1]=i;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7574:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=a(7462),s=(a(7294),a(3905));const n={title:"Concept of DASH",sidebar_label:"Concept",sidebar_position:2},o=void 0,i={unversionedId:"concept",id:"concept",title:"Concept of DASH",description:"In this article, we are going to look at how the internals of ESP-DASH are stacked up, as well as understand the how everything works with eachother inside the library.",source:"@site/docs/concept.md",sourceDirName:".",slug:"/concept",permalink:"/next/concept",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Concept of DASH",sidebar_label:"Concept",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/next/"},next:{title:"Installation",permalink:"/next/installation"}},l={},c=[{value:"1. Networking Class (ESPDash.h)",id:"1-networking-class-espdashh",level:4},{value:"2. Card Class (Card.h)",id:"2-card-class-cardh",level:4},{value:"3. Chart Class (Chart.h)",id:"3-chart-class-charth",level:4},{value:"4. Statistic Class (Statistic.h)",id:"4-statistic-class-statistich",level:4},{value:"5. Tab Class (Tab.h) ( Pro )",id:"5-tab-class-tabh--pro-",level:4}],h={toc:c},p="wrapper";function u(t){let{components:e,...a}=t;return(0,s.kt)(p,(0,r.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In this article, we are going to look at how the internals of ESP-DASH are stacked up, as well as understand the how everything works with eachother inside the library."),(0,s.kt)("i",null,"Note: If you looking to get started with ESP-DASH quickly, you can skip this article."),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("img",{src:"/img/v4/concept.svg",alt:"Concept Diagram",width:"800px"}),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("p",null,"DASH contains the following classes which you will use in your application:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("b",null,"Networking Class")," (ESPDash.h)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("b",null,"Card Class")," (Card.h)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("b",null,"Chart Class")," (Chart.h)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("b",null,"Statistic Class")," (Statistic.h)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("b",null,"Tab Class")," (Tab.h) ( Pro Version Only )")),(0,s.kt)("p",null,"The whole idea of ESP-DASH is to make a complete dashboard by using data classes ( as shown in figure above ). The data classes connect with ESP-DASH main class using pointers which handles all the networking and relays realtime updates to the open dashboards."),(0,s.kt)("p",null,"Let's understand the purpose of each class:"),(0,s.kt)("h4",{id:"1-networking-class-espdashh"},"1. Networking Class (ESPDash.h)"),(0,s.kt)("p",null,'The networking class handles all the networking stuff including serving the DASH webpage from program memory of the microcontroller and also to maintain the WebSocket connection with every connected client. Apart from networking, with the release of V4, you can now also configure the webpage according to your application. This includes changing page title, logo etc. ( Go to "Extra Features" to know more ).'),(0,s.kt)("h4",{id:"2-card-class-cardh"},"2. Card Class (Card.h)"),(0,s.kt)("p",null,"The card class is a data storage class in ESP-DASH which is used to create various types of cards on the dashboard. The only purpose of this class is to store the data + configuration in stack or heap depending on your use case and to keep track of the changes in data for realtime updates."),(0,s.kt)("h4",{id:"3-chart-class-charth"},"3. Chart Class (Chart.h)"),(0,s.kt)("p",null,'The chart class is an data storage class which is used to store the X & Y axis arrays to create various types of charts on the dashboard. This class is a bit different from "card" class as to keep the memory footprint low, it doesn\'t stores the data in the class itself. Instead it smartly stores the pointer to arrays so that data can be read on demand without actually copying all the array in the memory.'),(0,s.kt)("small",null,(0,s.kt)("i",null,"Note: If you are migrating from V3, Please look at the migration guide to know more.")),(0,s.kt)("h4",{id:"4-statistic-class-statistich"},"4. Statistic Class (Statistic.h)"),(0,s.kt)("p",null,"The statistic class is used to create custom user defined statistics which will be displayed in the statistics page. Statistics in ESP-DASH's sense are simple key-value pairs which you can send to dashboard to report small but useful data."),(0,s.kt)("h4",{id:"5-tab-class-tabh--pro-"},"5. Tab Class (Tab.h) ( Pro )"),(0,s.kt)("p",null,"The tab class in ",(0,s.kt)("a",{href:"https://espdash.pro/",target:"_blank"},"DASH Pro"),' is also an data class which is used to create multiple pages. Therefore, you are now not limited to the "Overview" page and can create multiple pages to host different cards & charts.'))}u.isMDXComponent=!0}}]);