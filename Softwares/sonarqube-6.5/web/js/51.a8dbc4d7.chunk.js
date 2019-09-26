webpackJsonp([51],{1805:function(e,t,a){"use strict";function n(e){return o.a.createElement("section",{className:"oauth-providers"},o.a.createElement("ul",null,e.identityProviders.map(function(t){return o.a.createElement("li",{key:t.key},o.a.createElement("a",{href:window.baseUrl+"/sessions/init/"+t.key,style:{backgroundColor:t.backgroundColor},title:e.formatLabel(t.name)},o.a.createElement("img",{alt:t.name,width:"20",height:"20",src:window.baseUrl+t.iconPath}),o.a.createElement("span",null,e.formatLabel(t.name))))})))}t.a=n;var l=a(0),o=a.n(l),r=a(2);n.defaultProps={formatLabel:function(e){return a.i(r.translateWithParameters)("login.login_with_x",e)}}},1888:function(e,t,a){"use strict";function n(){return o.a.createElement("svg",{viewBox:"0 0 26 26",width:"26",height:"26"},o.a.createElement("path",{style:{fill:"currentcolor"},d:"M23.737 15.91l-2.298-2.297a.797.797 0 0 0-.542-.232h-2.18v-1.588l2.722-2.723a.773.773 0 0 0 .233-.542V4.243a.777.777 0 0 0-.775-.775.777.777 0 0 0-.774.775v3.962l-1.407 1.407v-.633a.777.777 0 0 0-.774-.774h-.517a4.51 4.51 0 0 0-2.852-3.446l2.698-2.698a.787.787 0 0 0 0-1.097.787.787 0 0 0-1.098 0L12.985 4.14 9.823.99a.787.787 0 0 0-1.097 0 .787.787 0 0 0 0 1.097l2.672 2.672a4.51 4.51 0 0 0-2.853 3.446H7.99a.777.777 0 0 0-.774.774v.633L5.81 8.192v-3.95a.777.777 0 0 0-.774-.774.777.777 0 0 0-.775.775v4.272c0 .206.078.4.233.542l2.723 2.723v1.6H5.035c-.207 0-.4.078-.542.233L2.195 15.91a.787.787 0 0 0 0 1.098.764.764 0 0 0 .542.232c.194 0 .4-.078.542-.232l2.078-2.078h1.86v.761l-2.789 3.64a.783.783 0 0 0-.155.477v4.505c0 .426.349.774.775.774a.777.777 0 0 0 .774-.774v-4.247l1.433-1.884a5.77 5.77 0 0 0 2.788 4.298l.077.039c.84.49 1.82.761 2.853.761a5.825 5.825 0 0 0 2.865-.761c.013-.013.039-.013.051-.026a5.75 5.75 0 0 0 2.801-4.31l1.446 1.883v4.247c0 .426.348.774.774.774a.777.777 0 0 0 .775-.774v-4.505a.811.811 0 0 0-.155-.477l-2.788-3.64v-.761H20.6l2.078 2.078a.764.764 0 0 0 .542.232c.193 0 .4-.078.542-.232a.787.787 0 0 0-.026-1.098zm-10.752-9.9c1.369 0 2.517.93 2.853 2.182h-5.705a2.954 2.954 0 0 1 2.852-2.181zm-4.22 11.527V9.754h3.433v9.254l-1.82 1.82a4.172 4.172 0 0 1-1.613-3.291zm3.046 4.04l1.149-1.15 1.148 1.15a4.188 4.188 0 0 1-1.148.167c-.388 0-.775-.064-1.15-.167zm5.356-4.04c0 1.342-.632 2.53-1.6 3.304l-1.82-1.82V9.754h3.433v7.783h-.013z"}))}t.a=n;var l=a(0),o=a.n(l)},1889:function(e,t,a){"use strict";function n(){return o.a.createElement("svg",{viewBox:"0 0 26 26",width:"26",height:"26"},o.a.createElement("path",{style:{fill:"currentcolor"},d:"M19.957 5.099a10.455 10.455 0 0 0-7.424-3.077c-1.42 0-2.792.278-4.087.825a10.426 10.426 0 0 0-3.338 2.249 10.462 10.462 0 0 0-3.076 7.427c0 1.418.279 2.791.826 4.087a10.497 10.497 0 0 0 2.25 3.338 10.426 10.426 0 0 0 3.338 2.25c1.295.546 2.67.825 4.086.825 1.419 0 2.791-.279 4.087-.826a10.426 10.426 0 0 0 3.338-2.249 10.465 10.465 0 0 0 3.075-7.425c0-1.417-.278-2.793-.823-4.086a10.396 10.396 0 0 0-2.252-3.338zm.393 10.725a8.436 8.436 0 0 1-1.818 2.695 8.452 8.452 0 0 1-5.996 2.486 8.442 8.442 0 0 1-5.997-2.486 8.455 8.455 0 0 1-2.486-5.996 8.43 8.43 0 0 1 2.486-5.995 8.452 8.452 0 0 1 5.996-2.486 8.445 8.445 0 0 1 5.997 2.486 8.452 8.452 0 0 1 2.485 5.995 8.35 8.35 0 0 1-.667 3.3zm-7.794 4.202h-.037a7.767 7.767 0 0 1-3.426-.835.317.317 0 0 1-.13-.44l2.25-3.923a.32.32 0 0 1 .403-.132c.284.119.595.189.92.189.326 0 .639-.067.92-.19a.32.32 0 0 1 .404.133l2.255 3.922c.09.157.03.36-.133.441a7.896 7.896 0 0 1-3.426.835zm-1.58-7.457c0-.003 0-.009-.003-.013a1.56 1.56 0 0 1 2.337-1.35c.468.269.781.77.781 1.35v.013a1.557 1.557 0 0 1-3.115 0zm-1.068.015H5.384a.318.318 0 0 1-.32-.334c.03-.614.19-1.992.981-3.391l.008-.016.007-.016a7.806 7.806 0 0 1 2.428-2.554.317.317 0 0 1 .448.106l2.282 3.903a.316.316 0 0 1-.082.414 2.371 2.371 0 0 0-.914 1.605.325.325 0 0 1-.314.283zm9.776-.007h-4.526a.32.32 0 0 1-.316-.282 2.371 2.371 0 0 0-.913-1.604.322.322 0 0 1-.082-.414l2.284-3.904a.317.317 0 0 1 .449-.106 7.787 7.787 0 0 1 2.426 2.554l.016.033a7.74 7.74 0 0 1 .98 3.387.319.319 0 0 1-.318.336z"}))}t.a=n;var l=a(0),o=a.n(l)},1890:function(e,t,a){"use strict";function n(){return o.a.createElement("svg",{viewBox:"0 0 26 26",width:"26",height:"26"},o.a.createElement("path",{style:{fill:"currentcolor"},d:"M7.688 9.224V5.818c0-2.622 2.16-4.756 4.813-4.756 2.654 0 4.802 2.134 4.813 4.756v.931c0 .5-.413.909-.919.909a.916.916 0 0 1-.919-.909v-.93c0-1.624-1.332-2.94-2.975-2.94s-2.975 1.316-2.975 2.94v3.405h7.892c1.401 0 2.539 1.124 2.539 2.509v9.706c0 1.442-1.195 2.623-2.654 2.623H7.688c-1.46 0-2.654-1.18-2.654-2.623v-9.706c0-1.385 1.137-2.509 2.539-2.509h.115zm9.615 13.033a.814.814 0 0 0 .816-.806v-9.718a.692.692 0 0 0-.701-.692H7.573c-.39 0-.7.306-.7.692v9.718c0 .442.367.806.815.806h9.615zm-4.802-8.98c-1.045 0-1.907.84-1.907 1.884 0 .704.402 1.329.988 1.647v2.304c0 .5.414.908.92.908a.916.916 0 0 0 .918-.908v-2.316c.586-.318.988-.942.988-1.646a1.904 1.904 0 0 0-1.907-1.873zM22.99 8.804l-1.7-.681c-.47-.182-1.01.034-1.194.5a.904.904 0 0 0 .505 1.18l1.712.681c.115.046.23.068.344.068a.908.908 0 0 0 .85-.567.91.91 0 0 0-.517-1.18zm-2.837-1.703a.939.939 0 0 0 1.206.488l1.689-.715a.9.9 0 0 0 .482-1.192c-.195-.465-.735-.67-1.206-.477l-1.689.716a.876.876 0 0 0-.482 1.18zm-1.068-1.124c-.471-.181-.69-.715-.506-1.192l.69-1.68c.183-.465.723-.681 1.194-.5.471.182.69.716.506 1.181l-.69 1.692a.908.908 0 0 1-.85.567.932.932 0 0 1-.344-.068z"}))}t.a=n;var l=a(0),o=a.n(l)},1915:function(e,t,a){"use strict";function n(e){var t=e.customText;return o.a.createElement("div",{id:"about-page",className:"about-page sqcom-about-page"},o.a.createElement("div",{className:"sqcom-about-page-entry"},o.a.createElement("div",{className:"about-page-container"},o.a.createElement("div",{className:"sqcom-about-page-intro"},h,!e.currentUser.isLoggedIn&&v),o.a.createElement("div",{className:"sqcom-about-page-instance"},o.a.createElement(r.a,{count:e.projectsCount,loading:e.loading}),o.a.createElement(c.a,{bugs:e.bugs,codeSmells:e.codeSmells,loading:e.loading,vulnerabilities:e.vulnerabilities})))),o.a.createElement(s.a,{appState:e.appState}),o.a.createElement("div",{className:"about-page-container"},null!=t&&t.value&&o.a.createElement("div",{className:"about-page-section",dangerouslySetInnerHTML:{__html:t.value}}),E,y,o.a.createElement("div",{className:"flex-columns"},x,o.a.createElement("div",{className:"flex-column flex-column-half about-page-group-boxes"},o.a.createElement(f.a,{appState:e.appState}))),N))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var l=a(0),o=a.n(l),r=a(1884),c=a(1922),s=a(1920),i=a(1882),u=a(1919),m=a(1885),p=a(1883),f=a(1887),d=a(1886),g=a(1923),b=a(2307),h=(a.n(b),o.a.createElement("h1",{className:"big-spacer-bottom"},"Continuous Code Quality",o.a.createElement("br",null),"as a Service")),v=o.a.createElement(g.a,null),E=o.a.createElement(u.a,null),y=o.a.createElement("div",{className:"flex-columns"},o.a.createElement("div",{className:"flex-column flex-column-half about-page-group-boxes"},o.a.createElement(i.a,null)),o.a.createElement("div",{className:"flex-column flex-column-half about-page-group-boxes"},o.a.createElement(p.a,null))),x=o.a.createElement("div",{className:"flex-column flex-column-half about-page-group-boxes"},o.a.createElement(m.a,null)),N=o.a.createElement(d.a,null)},1919:function(e,t,a){"use strict";function n(){return o.a.createElement("div",{className:"boxed-group about-quality-model sqcom-about-quality-model"},o.a.createElement("h2",null,a.i(r.translate)("about_page.quality_model")),o.a.createElement("div",{className:"boxed-group-inner clearfix"},o.a.createElement("div",{className:"flex-columns"},o.a.createElement("div",{className:"flex-column flex-column-third"},u,o.a.createElement("p",{className:"about-page-text overflow-hidden"},o.a.createElement("strong",null,a.i(r.translate)("issue.type.BUG.plural"))," ",a.i(r.translate)("about_page.quality_model.bugs"))),o.a.createElement("div",{className:"flex-column flex-column-third"},m,o.a.createElement("p",{className:"about-page-text overflow-hidden"},o.a.createElement("strong",null,a.i(r.translate)("issue.type.VULNERABILITY.plural"))," ",a.i(r.translate)("about_page.quality_model.vulnerabilities"))),o.a.createElement("div",{className:"flex-column flex-column-third"},p,o.a.createElement("p",{className:"about-page-text overflow-hidden"},o.a.createElement("strong",null,a.i(r.translate)("issue.type.CODE_SMELL.plural"))," ",a.i(r.translate)("about_page.quality_model.code_smells"))))))}t.a=n;var l=a(0),o=a.n(l),r=a(2),c=a(1888),s=a(1890),i=a(1889),u=o.a.createElement("div",{className:"pull-left little-spacer-right"},o.a.createElement(c.a,null)),m=o.a.createElement("div",{className:"pull-left little-spacer-right"},o.a.createElement(s.a,null)),p=o.a.createElement("div",{className:"pull-left little-spacer-right"},o.a.createElement(i.a,null))},1920:function(e,t,a){"use strict";function n(e){var t=e.appState.defaultOrganization;return o.a.createElement("div",{className:"sqcom-about-rules"},o.a.createElement("div",{className:"about-page-container"},o.a.createElement(r.Link,{to:a.i(c.c)(null,t),className:"sqcom-about-rules-link"},"+3,000 rules",o.a.createElement("span",{className:"spacer-left"},o.a.createElement("svg",{width:"15",height:"36",viewBox:"0 0 15 36"},o.a.createElement("g",{transform:"matrix(1,0,0,1,-267,-362)"},o.a.createElement("path",{d:"M268,363L281,380L269,397",style:{fill:"none",stroke:"#c1d9ea",strokeWidth:1}}))))),o.a.createElement(r.Link,{to:a.i(c.c)({languages:"js"},t),className:"sqcom-about-rules-link"},"JavaScript"),o.a.createElement(r.Link,{to:a.i(c.c)({languages:"java"},t),className:"sqcom-about-rules-link"},"Java"),o.a.createElement(r.Link,{to:a.i(c.c)({languages:"c,cpp"},t),className:"sqcom-about-rules-link"},"C/C++"),o.a.createElement(r.Link,{to:a.i(c.c)({languages:"cs"},t),className:"sqcom-about-rules-link"},"C#"),o.a.createElement(r.Link,{to:a.i(c.c)(null,t),className:"button"},"And More")))}t.a=n;var l=a(0),o=a.n(l),r=a(9),c=a(48)},1922:function(e,t,a){"use strict";function n(e){var t=e.bugs,n=e.codeSmells,l=e.loading,u=e.vulnerabilities;return o.a.createElement("div",{className:"about-page-projects"},l&&f,!l&&o.a.createElement("table",{className:"about-page-issue-types"},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{className:"about-page-issue-type-number"},o.a.createElement(r.Link,{to:a.i(i.m)({resolved:"false",types:"BUG",s:"CREATION_DATE"}),className:"about-page-issue-type-link"},a.i(c.formatMeasure)(t,"SHORT_INT"))),o.a.createElement("td",null,d,a.i(s.translate)("issue.type.BUG.plural"))),o.a.createElement("tr",null,o.a.createElement("td",{className:"about-page-issue-type-number"},o.a.createElement(r.Link,{to:a.i(i.m)({resolved:"false",types:"VULNERABILITY",s:"CREATION_DATE"}),className:"about-page-issue-type-link"},a.i(c.formatMeasure)(u,"SHORT_INT"))),o.a.createElement("td",null,g,a.i(s.translate)("issue.type.VULNERABILITY.plural"))),o.a.createElement("tr",null,o.a.createElement("td",{className:"about-page-issue-type-number"},o.a.createElement(r.Link,{to:a.i(i.m)({resolved:"false",types:"CODE_SMELL",s:"CREATION_DATE"}),className:"about-page-issue-type-link"},a.i(c.formatMeasure)(n,"SHORT_INT"))),o.a.createElement("td",null,b,a.i(s.translate)("issue.type.CODE_SMELL.plural"))))))}t.a=n;var l=a(0),o=a.n(l),r=a(9),c=a(24),s=a(2),i=a(48),u=a(1888),m=a(1890),p=a(1889),f=o.a.createElement("i",{className:"spinner"}),d=o.a.createElement("span",{className:"little-spacer-right"},o.a.createElement(u.a,null)),g=o.a.createElement("span",{className:"little-spacer-right"},o.a.createElement(m.a,null)),b=o.a.createElement("span",{className:"little-spacer-right"},o.a.createElement(p.a,null))},1923:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=a(0),c=a.n(r),s=a(1805),i=a(166),u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),m=function(e){function t(){var e,o,r,c;n(this,t);for(var s=arguments.length,u=Array(s),m=0;m<s;m++)u[m]=arguments[m];return o=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state={identityProviders:[],loading:!0},r.fetchIdentityProviders=function(){r.setState({loading:!0}),a.i(i.c)().then(function(e){var t=e.identityProviders;r.mounted&&r.setState({identityProviders:t,loading:!1})})},r.formatLabel=function(e){return"Start with "+e},c=o,l(r,c)}return o(t,e),u(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.fetchIdentityProviders()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return this.state.loading?null:c.a.createElement("div",{className:"sqcom-get-started"},c.a.createElement(s.a,{formatLabel:this.formatLabel,identityProviders:this.state.identityProviders}))}}]),t}(c.a.PureComponent);t.a=m},2253:function(e,t,a){t=e.exports=a(36)(void 0),t.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700);",""]),t.push([e.i,".sqcom-about-page {\n  font-family: 'Roboto', sans-serif;\n  font-size: 15px !important;\n  font-weight: 300;\n}\n\n.sqcom-about-page-entry {\n  padding-top: 65px;\n  padding-bottom: 65px;\n  background-color: #4b9fd5;\n}\n\n.sqcom-about-page-entry a {\n  color: #4b9fd5;\n}\n\n.sqcom-about-page-entry .about-page-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.sqcom-about-page-intro {\n}\n\n.sqcom-about-page-intro > h1 {\n  line-height: 44px;\n  color: #fff;\n  font-size: 36px;\n  font-weight: 300;\n}\n\n.sonarcloud-about-github-button {\n  display: inline-block;\n  height: 44px;\n  line-height: 46px;\n  padding-left: 20px;\n  padding-right: 20px;\n  border: none;\n  border-radius: 3px;\n  background-color: #444;\n  color: #fff !important;\n  font-size: 15px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n.sonarcloud-about-github-button:hover,\n.sonarcloud-about-github-button:focus {\n  background-color: #333;\n}\n\n.sonarcloud-about-github-button img {\n  margin-top: 12px;\n  margin-right: 10px;\n}\n\n.sqcom-about-page-instance {\n  display: flex;\n  align-items: stretch;\n}\n\n.sqcom-about-page-instance .about-page-projects {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 190px;\n  min-height: 105px;\n  margin-left: 15px;\n  padding: 25px;\n  background-color: #fff;\n  color: #686868;\n  font-size: 18px;\n  font-weight: 300;\n}\n\n.sqcom-about-page-instance .about-page-projects-link {\n  font-weight: 400;\n}\n\n.sqcom-about-page-instance .about-page-issue-types > li + li {\n  margin-top: 20px;\n}\n\n.sqcom-about-rules {\n  margin-bottom: 45px;\n  background-color: #4193c8;\n}\n\n.sqcom-about-rules .about-page-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.sqcom-about-rules .button {\n  height: 33px;\n  line-height: 30px;\n  padding-left: 15px;\n  padding-right: 15px;\n  border-color: #fff;\n  border-radius: 3px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.sqcom-about-rules .button:hover {\n  background-color: #fff;\n  color: #4b9fd5;\n}\n\n.sqcom-about-rules-link {\n  line-height: 36px;\n  padding: 24px 40px;\n  border: none;\n  color: #c1d9ea;\n  font-size: 20px;\n}\n\n.sqcom-about-rules-link:first-child {\n  margin-left: -40px;\n}\n\n.sqcom-about-rules-link:hover {\n  background-color: #3988bc;\n  color: #fff;\n}\n\n.sqcom-about-rules-link:hover path {\n  fill: #fff;\n}\n\n.sqcom-about-quality-model svg {\n  transform: translateY(-3px) !important;\n}\n\n.sqcom-get-started .oauth-providers > ul {\n  width: 380px;\n  justify-content: space-between;\n  font-size: 14px;\n  margin-bottom: -30px;\n}\n",""])},2307:function(e,t,a){var n=a(2253);"string"==typeof n&&(n=[[e.i,n,""]]);var l={};l.transform=void 0;a(37)(n,l);n.locals&&(e.exports=n.locals)}});
//# sourceMappingURL=51.a8dbc4d7.chunk.js.map