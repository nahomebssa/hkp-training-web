(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{33:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(2),r=c.n(a),s=c(21),i=c.n(s),o=c(7),j=c(4),l=c(1),d=c(13),b="(prefers-color-scheme: dark)",h={dark:"dark",light:"light"},u=Object(a.createContext)(),O=function(e){var t=Object.assign({},e),c=window.matchMedia(b),r=Object(a.useState)(c.matches?h.dark:h.light),s=Object(d.a)(r,2),i=s[0],o=s[1];c.addEventListener("change",(function(e){var t=e.matches;return o(t?h.dark:h.light)}));return Object(n.jsx)(u.Provider,Object(l.a)(Object(l.a)({},t),{},{value:{Theme:h,setThemeColor:o,not:function(e){return e===h.dark?h.light:e===h.light?h.dark:e},dark:i===h.dark,isDark:function(){return i===h.dark},light:i===h.light}}))},m=function(){return Object(a.useContext)(u)},x=c(6),f=function(e){var t=Object.assign({},e);return Object(n.jsx)("div",Object(l.a)({},t))},p=function(e){var t=e.children,c=Object(x.a)(e,["children"]);return Object(n.jsx)("h1",Object(l.a)(Object(l.a)({},c),{},{children:t}))},v=function(e){var t=e.children,c=Object(x.a)(e,["children"]);return Object(n.jsx)("h4",Object(l.a)(Object(l.a)({},c),{},{children:t}))},g=function(e){var t=Object.assign({},e);return Object(n.jsx)("p",Object(l.a)({},t))},k=function(e){var t=Object.assign({},e);return Object(n.jsx)("section",Object(l.a)({},t))};function N(e){var t=e.as,c=e.className,a=void 0===c?"":c,r=Object(x.a)(e,["as","className"]),s=[a,m().dark?"text-light":"text-dark"].join(" ").trim();return t?Object(n.jsx)(t,Object(l.a)({className:s},r)):Object(n.jsx)("span",Object(l.a)({className:s},r))}var w=function(){for(var e=arguments.length,t=new Array(e),c=0;c<e;c++)t[c]=arguments[c];return t.join(" ").trim()};function y(e){var t=e.as,c=void 0===t?k:t,a=e.className,s=void 0===a?"":a,i=e.title,o=e.subtitle,j=e.centerStage,l=e.mini,d=void 0===l||l,b=m().dark,h="shadow-sm ".concat(b?"bg-dark":"bg-light"," ").concat(s).trim(),u=j?"d-flex flex-column align-items-center justify-content-center":"",O=d&&!j?"p-5":"vh-100",x=d&&!j?r.a.Fragment:f;return Object(n.jsx)(c,{className:h,children:Object(n.jsx)("div",{className:w("container",u,O),children:Object(n.jsxs)(x,{children:[Object(n.jsx)(N,{as:p,children:i}),Object(n.jsx)(N,{as:g,children:o})]})})})}function C(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(y,{title:"Welcome.",subtitle:"Hi! My name is Nahom Ebssa, and I am a computer science student at George Mason University.",centerStage:!0})})}function S(){var e=m(),t=e.dark,c=(e.themeColor,e.setThemeColor),a=e.not,r=t?"dark":"light",s=t?"bg-dark":"bg-light";return Object(n.jsx)("nav",{id:"navbar",className:"navbar navbar-".concat(r," ").concat(s," fixed-top"),children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(N,{as:o.b,className:"navbar-brand",to:"/",children:"Nahom Ebssa"}),Object(n.jsxs)("ul",{className:"nav nav-pills",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)("div",{class:"form-check form-switch",children:[Object(n.jsx)("input",{class:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",value:t,onChange:function(){c(a(r)),document.body.classList.toggle("bg-dark")}}),Object(n.jsx)("label",{class:"form-check-label",for:"flexSwitchCheckDefault",children:t?"\ud83c\udf1b":"\ud83d\udd06"})]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(N,{as:o.b,className:"nav-link",to:"/about",children:"About"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(N,{as:o.b,className:"nav-link",to:"/work",children:"Work"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(N,{as:o.b,className:"nav-link",to:"/contact",children:"Contact"})})]})]})})}function E(e){var t=Object.assign({},e);return Object(n.jsx)("div",Object(l.a)({style:{paddingTop:"56px"}},t))}function I(e){var t=e.id,c=e.title,a=e.component,r=e.children,s=e.fullWidth,i=(e.container,{className:[!s&&"container"].join(" ").trim()});return Object(n.jsx)("div",Object(l.a)(Object(l.a)({as:k},i),{},{children:Object(n.jsxs)("div",{className:"p-5",children:[t&&c&&Object(n.jsx)(N,{as:v,id:t,children:c}),a?Object(n.jsx)(a,{}):r]})}))}function M(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(N,{as:g,children:"Hello! My name is Nahom Ebssa, and I am a senior at George Mason University studying computer science. I have taken courses such as Systems Programming, Networking, Databases, Artificial Intelligence, and Algorithms Analysis. Over the course of my career, I have also participated in a couple of projects. I was in a group where we aimed to design and build a mobile-first web app that enables students of different majors to seek out help from other experienced mentors in the field."})})}function A(){return Object(n.jsxs)(E,{children:[Object(n.jsx)(y,{title:"About.",subtitle:"Hi! My name is Nahom Ebssa, and I am a computer science student at George Mason University."}),Object(n.jsx)(I,{id:"about",component:M})]})}var P=c(34);function T(e){var t=e.as,c=void 0===t?f:t,a=e.className,r=Object(x.a)(e,["as","className"]);m().dark;return Object(n.jsx)(c,Object(l.a)(Object(l.a)({},r),{},{className:[a,""].join(" ").trim()}))}var F=function(e){var t=e.href,c=e.headerIcon,a=e.header,r=e.title,s=e.description,i=e.children,j={href:t,className:"text-decoration-none hover-text-decoration-underline"};return Object(n.jsxs)(T,{as:P.a,className:"shadow-sm",children:[a&&Object(n.jsx)(T,{as:P.a.Header,className:"px-3",children:Object(n.jsxs)(N,Object(l.a)(Object(l.a)({as:o.b},j),{},{children:[c&&Object(n.jsx)("img",{className:"me-2",src:c.src,alt:c.alt}),a]}))}),i,r&&Object(n.jsx)(P.a.Title,{className:"px-3 pt-3",children:Object(n.jsx)(N,Object(l.a)(Object(l.a)({as:o.b},j),{},{children:r}))}),s&&Object(n.jsx)(N,{as:P.a.Text,className:"px-3 pb-3",children:s})]})};function L(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1];Object(a.useEffect)((function(){fetch("https://api.github.com/users/nahomebssa/repos").catch((function(e){console.error(e)})).then((function(e){return e.json()})).then((function(e){setTimeout((function(){r(e)}),0)}))}),[r,c]);var s=m().dark,i=c.length<1,o=Object(n.jsx)("p",{children:Object(n.jsx)("i",{children:"Loading..."})}),j=c.map((function(e,t){var c=e.full_name,a=e.name,r=e.description,s=e.html_url;return Object(n.jsx)("div",{className:"col",children:Object(n.jsx)(F,{href:s,headerIcon:{src:"https://github.com/favicon.ico",alt:"github faivcon"},header:c,title:a,description:r})})}));return i?o:Object(n.jsxs)("div",{className:"row row-cols-1 row-cols-md-2 g-4",children:[j,[{id:"XVOzRG",title:"Material Design App (animated)"},{id:"jWwbLQ",title:"File Explorer"},{id:"EEgPQP",title:"Onboarding"},{id:"ZOpLRp",title:"Search animation"},{id:"VmjrZK",title:"Pure CSS Modal"}].map((function(e,t){var c=e.id,a=Object(x.a)(e,["id"]);return Object(n.jsx)("div",{className:"px-2",children:Object(n.jsx)(F,Object(l.a)(Object(l.a)(Object(l.a)({href:"https://codepen.io/enahom99/full/".concat(c),headerIcon:{src:"https://codepen.io/favicon.ico"}},e.id?{header:"enahom99/".concat(e.id)}:{}),a),{},{children:Object(n.jsx)(D.Pen,Object(l.a)({height:512,slug:c,theme:s?"dark":"light"},a))}))})}))]})}var D={Pen:function(e){var t=e.slug,c=e.title,a=e.height,r=e.theme;return Object(n.jsxs)("iframe",{height:a||"265",style:{width:"100%"},scrolling:"no",title:c,src:"https://codepen.io/enahom99/embed/".concat(t,"?height=").concat(a||"265","&theme-id=").concat(r,"&default-tab=result&zoom=0.5"),frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true",children:["See the Pen ",Object(n.jsx)("a",{href:"https://codepen.io/enahom99/pen/".concat(t),children:c})," by Nahom Ebssa (",Object(n.jsx)("a",{href:"https://codepen.io/enahom99",children:"@enahom99"}),") on ",Object(n.jsx)("a",{href:"https://codepen.io",children:"CodePen"}),"."]})}};function H(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(L,{})})}function W(){return Object(n.jsxs)(E,{children:[Object(n.jsx)(y,{title:"Work.",subtitle:"Here's some work..."}),Object(n.jsx)(I,{id:"work",component:H})]})}var G=c(35);function z(){var e=m().dark?"bg-dark border-secondary":"";return Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(n.jsx)("div",{className:"input-group my-2",children:Object(n.jsx)("input",{className:["form-control p-3",e].join(" ").trim(),placeholder:"Email Address"})}),Object(n.jsx)("div",{className:"input-group my-2",children:Object(n.jsx)("input",{className:["form-control p-3",e].join(" ").trim(),placeholder:"Title"})}),Object(n.jsx)("div",{className:"input-group my-2",children:Object(n.jsx)("textarea",{className:["form-control p-3",e].join(" ").trim(),placeholder:"Message"})}),Object(n.jsx)(G.a,{type:"submit",children:"Submit"})]})}function U(){return Object(n.jsxs)(E,{children:[Object(n.jsx)(y,{title:"Contact.",subtitle:"Let's keep in touch!"}),Object(n.jsx)(I,{id:"contact",title:"Contact Form",component:z})]})}function J(e){var t=Object.assign({},e);return Object(n.jsx)("main",Object(l.a)({},t))}var Q=Object(a.createContext)(),R=function(e){var t=Object.assign({},e),c=Object(a.useState)(0),r=Object(d.a)(c,2),s=r[0],i=r[1];document.body.addEventListener("scroll",(function(){return i(window.scrollY)}));var o={scroll:s};return Object(n.jsx)(Q.Provider,Object(l.a)(Object(l.a)({},t),{},{value:o}))};function V(e){var t=e.children,c=a.Fragment;return Object(n.jsx)(R,{children:Object(n.jsx)(O,{children:Object(n.jsxs)(c,{children:[Object(n.jsx)(S,{}),Object(n.jsx)(J,{children:t}),!1]})})})}function Z(){return Object(n.jsx)(o.a,{basename:"hkp-training-web",children:Object(n.jsx)(V,{children:Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{path:"/about",component:A}),Object(n.jsx)(j.a,{path:"/work",component:W}),Object(n.jsx)(j.a,{path:"/contact",component:U}),Object(n.jsx)(j.a,{exact:!0,path:"/",component:C}),Object(n.jsx)(j.a,{component:function(){return Object(n.jsx)("div",{className:"container d-flex justify-content-center m-5 p-5 shadow-sm",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Are you lost?"}),Object(n.jsx)("p",{children:"Try one of these pages:"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/about",children:"About"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/work",children:"Work"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/contact",children:"Contact"})})]})]})})}})]})})})}i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(Z,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.fa41cf3f.chunk.js.map