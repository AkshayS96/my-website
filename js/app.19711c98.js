(function(t){function e(e){for(var r,a,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4bde165c","chunk-bf3c3c54":"3c18e112"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1,"chunk-bf3c3c54":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"2ef1ad73","chunk-bf3c3c54":"f613719f"}[t]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"05d6":function(t,e,n){"use strict";var r=n("65d5"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",collapse:"",fixed:"",tile:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}},[n("v-icon",[t._v("mdi-magnify")])],1),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:t.changeTheme}},r),[n("v-icon",[t._v(" "+t._s(t.themeIcon)+" ")])],1)]}}])},[n("span",[t._v(t._s(t.currentTheme))])])],1),n("v-navigation-drawer",{attrs:{absolute:"",temporary:"",right:"",width:"30%"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("WebsiteSearch")],1),n("v-bottom-navigation",{attrs:{app:"",shift:""}},t._l(t.routers,(function(e){return n("v-tooltip",{key:e.id,attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(r){var a=r.on;return[n("v-btn",t._g({attrs:{to:e.link,target:e.target}},a),[n("span",[t._v(t._s(e.title))]),n("v-icon",[t._v(t._s(e.icon))])],1)]}}],null,!0)},[n("span",[t._v(t._s(e.title))])])})),1),n("v-content",[n("router-view")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",[n("v-text-field",{attrs:{outlined:"",label:"Search something about me","prepend-inner-icon":"mdi-magnify"}})],1)],1),n("v-row",[n("v-col",{attrs:{align:"center",justify:"center"}},[n("div",[t._v("Coming Soon")])])],1)],1)},c=[],s={},u=s,l=n("2877"),f=n("6544"),d=n.n(f),p=n("62ad"),v=n("a523"),m=n("0fd9"),h=n("8654"),b=Object(l["a"])(u,i,c,!1,null,null,null),g=b.exports;d()(b,{VCol:p["a"],VContainer:v["a"],VRow:m["a"],VTextField:h["a"]});var y=n("bc3a"),k=n("8a60"),w={name:"App",data:function(){return{themeIcon:"mdi-weather-sunny",themeIconColor:"yellow",buttonElevation:10,drawer:!1,routers:[{id:1,title:"Home",link:"/",icon:"mdi-home"},{id:2,title:"About",link:"/about",icon:"mdi-account-search"},{id:3,title:"Projects",link:"/projects",icon:"mdi-code-tags"}]}},methods:{changeTheme:function(){this.themeIcon=this.$vuetify.theme.dark?"mdi-weather-sunny":"mdi-weather-night",this.$vuetify.theme.dark=!this.$vuetify.theme.dark}},computed:{currentTheme:function(){return this.$vuetify.theme.dark?"Dark":"Light"}},mounted:function(){var t=this;k.bind("command+/",(function(){t.drawer=!t.drawer})),y({method:"get",url:"https://api.ipify.org?format=json"}).then((function(t){var e=JSON.stringify({text:"```"+JSON.stringify(t.data)+"```"});console.log(e),y({method:"post",url:"https://hooks.slack.com/services/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",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded"}})}))},components:{WebsiteSearch:g}},_=w,j=(n("05d6"),n("7496")),S=n("40dc"),V=n("5bc1"),T=n("b81c"),C=n("8336"),x=n("a75b"),O=n("132d"),A=n("f774"),E=n("3a2f"),N=Object(l["a"])(_,a,o,!1,null,"53575d40",null),P=N.exports;d()(N,{VApp:j["a"],VAppBar:S["a"],VAppBarNavIcon:V["a"],VBottomNavigation:T["a"],VBtn:C["a"],VContent:x["a"],VIcon:O["a"],VNavigationDrawer:A["a"],VTooltip:E["a"]});n("d3b7");var I=n("8c4f"),B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"home"},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{align:"center",justify:"center"}},[r("v-img",{staticClass:"image",attrs:{src:n("71f3"),"aspect-ratio":"1"}})],1)],1),r("v-row",[r("v-col",{attrs:{align:"center",justify:"center"}},[r("span",{staticClass:"nameTitle"},[t._v(" Hi, I'm "),r("h1",[t._v("Akshay Solanki")])]),r("span",[r("b",[t._v("Software Engineer")])])])],1),r("v-row",{attrs:{align:"center",justify:"center"}},t._l(t.icons,(function(e){return r("v-col",{key:e.id,attrs:{align:"center",justify:"center",cols:"1"}},[r("v-btn",{attrs:{icon:"",href:e.link,target:"_blank"}},[r("v-icon",[t._v(t._s(e.value))])],1)],1)})),1)],1)],1),r("v-spacer"),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{align:"center",justify:"center"}},[r("v-btn",{attrs:{outlined:"",href:t.resumeLink,target:"_blank"}},[t._v(" Résumé ")])],1)],1)],1)},L=[],$={name:"Home",data:function(){return{snackbar:!0,resumeLink:"https://drive.google.com/file/d/1oBZW3J6dmA5pTVMN7878Lgn6cgIdZftu/view?usp=sharing",icons:[{id:1,value:"mdi-linkedin",type:"linkiden",link:"https://www.linkedin.com/in/akshays96/"},{id:2,value:"mdi-github",type:"github",link:"https://github.com/AkshayS96"},{id:3,value:"mdi-stack-overflow",type:"stackoverflow",link:"https://stackoverflow.com/users/8142023/akshay-solanki?tab=profile"},{id:4,value:"mdi-gmail",type:"gmail",link:"mailto:asolanki786@gmail.com"},{id:5,value:"mdi-facebook",type:"facebook",link:"https://www.facebook.com/akshay.solanki.1428"}]}}},J=$,H=(n("e730"),n("adda")),D=n("2fa4"),M=Object(l["a"])(J,B,L,!1,null,"1b1eb618",null),W=M.exports;d()(M,{VBtn:C["a"],VCol:p["a"],VContainer:v["a"],VIcon:O["a"],VImg:H["a"],VRow:m["a"],VSpacer:D["a"]}),r["a"].use(I["a"]);var R=[{path:"/",name:"Home",component:W},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/projects",name:"Projects",component:function(){return n.e("chunk-bf3c3c54").then(n.bind(null,"acca"))}}],F=new I["a"]({mode:"history",base:"/",routes:R}),K=F,q=n("2f62");r["a"].use(q["a"]);var Z=new q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),G=n("f309");r["a"].use(G["a"]);var Q=new G["a"]({theme:{dark:!1}});r["a"].config.productionTip=!1,new r["a"]({router:K,store:Z,vuetify:Q,render:function(t){return t(P)}}).$mount("#app")},"65d5":function(t,e,n){},"71f3":function(t,e,n){t.exports=n.p+"img/my_image.b112ccd1.jpg"},"8b43":function(t,e,n){},e730:function(t,e,n){"use strict";var r=n("8b43"),a=n.n(r);a.a}});
//# sourceMappingURL=app.19711c98.js.map