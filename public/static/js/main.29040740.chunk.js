(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{133:function(t,n,e){"use strict";e.r(n);var r=e(64),a=e(0),u=e.n(a),i=e(34),c=e.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=e(46),d=e(31),l=e(33),f=e(85),s=e(89);function p(t,n){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1?arguments[1]:void 0;return n.hasOwnProperty(r.type)?n[r.type](e,r):e}}var O=p(-1,{SET_AUTHORIZATION_STATUS:function(t,n){return n.status}}),E=e(3);var v=p(null,{SET_PROJECT_POPOVER:function(t,n){return n.anchor}}),b=p({},{ADD_PROJECTS:function(t,n){return Object(E.a)(t,function(t){var e=n.projects,r=!0,a=!1,u=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var o=i.value;t[o.id]={id:o.id,name:o.name,img:o.img,created:o.created,updated:o.updated,publicKey:o.publicKey}}}catch(d){a=!0,u=d}finally{try{r||null==c.return||c.return()}finally{if(a)throw u}}})},DELETE_PROJECT:function(t,n){return Object(E.a)(t,function(t){delete t[n.id]})},RENAME_PROJECT:function(t,n){return Object(E.a)(t,function(t){var e=n.id,r=n.name,a=n.updated,u=n.publicKey;t[e].name=r,t[e].updated=a,t[e].publicKey=u})},IMG_PROJECT:function(t,n){return Object(E.a)(t,function(t){var e=n.id,r=n.img,a=n.updated;t[e].img=r,t[e].updated=a})}}),m=p({},{ADD_ENTITIES:function(t,n){return Object(E.a)(t,function(t){var e=n.entities,r=!0,a=!1,u=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var o=i.value;t[o.id]={id:o.id,projectId:o.projectId,name:o.name,created:o.created,updated:o.updated}}}catch(d){a=!0,u=d}finally{try{r||null==c.return||c.return()}finally{if(a)throw u}}})},DELETE_ENTITIES:function(t,n){return Object(E.a)(t,function(t){var e=n.entities,r=!0,a=!1,u=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done);r=!0)delete t[i.value]}catch(o){a=!0,u=o}finally{try{r||null==c.return||c.return()}finally{if(a)throw u}}})},RENAME_ENTITY:function(t,n){return Object(E.a)(t,function(t){var e=n.id,r=n.name,a=n.updated;t[e].name=r,t[e].updated=a})}}),y=p({},{ADD_DOCUMENTS:function(t,n){return Object(E.a)(t,function(t){var e=n.documents,r=!0,a=!1,u=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var o=i.value;t[o.id]=o}}catch(d){a=!0,u=d}finally{try{r||null==c.return||c.return()}finally{if(a)throw u}}})},DELETE_DOCUMENTS:function(t,n){return Object(E.a)(t,function(t){var e=n.documents,r=!0,a=!1,u=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done);r=!0)delete t[i.value]}catch(o){a=!0,u=o}finally{try{r||null==c.return||c.return()}finally{if(a)throw u}}})},MODIFY_DOCUMENT:function(t,n){return Object(E.a)(t,function(t){var e=n.id,r=n.updated,a=n.data;t[e].updated=r,t[e].data=a})}}),h=p({},{UPLOAD_STORAGE:function(t,n){return Object(E.a)(t,function(t){n.files.forEach(function(n){t[n.id]={id:n.id,project_id:n.project_id,name:n.name,size:n.size,isPublic:n.isPublic,created:n.created_at,modified:n.updated_at}})})},RENAME_STORAGE:function(t,n){return Object(E.a)(t,function(t){var e=n.id,r=n.name,a=n.updated;t[e].name=r,t[e].updated=a})},PUBLIC_STORAGE:function(t,n){return Object(E.a)(t,function(t){var e=n.id,r=n.isPublic,a=n.updated;t[e].isPublic=r,t[e].updated=a})},DELETE_STORAGE:function(t,n){return Object(E.a)(t,function(t){var e=n.ids,r=!0,a=!1,u=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done);r=!0)delete t[i.value]}catch(o){a=!0,u=o}finally{try{r||null==c.return||c.return()}finally{if(a)throw u}}})}}),_=e(58),I=e(18);var T=p(!1,{SWITCH_SIDEBAR:function(t,n){return n.status}}),A=p({},{SET_TARGET:function(t,n){return Object(E.a)(t,function(t){var e=n.data;Object.entries(e).forEach(function(n){var e=Object(_.a)(n,2),r=e[0],a=e[1];return t[r]=a})})}}),j=p(null,{SHOW_ADD_DIALOG:function(t,n){return I.a},SHOW_DELETE_DIALOG:function(t,n){return I.b},SHOW_RENAME_DIALOG:function(t,n){return I.f},SHOW_IMG_DIALOG:function(t,n){return I.e},HIDE_DIALOG:function(t,n){return null}}),D=p({title:"",content:""},{SHOW_NOTIFICATION_DIALOG:function(t,n){return Object(E.a)(t,function(t){var e=n.title,r=n.content;t.title=e,t.content=r})},HIDE_NOTIFICATION_DIALOG:function(t,n){return Object(E.a)(t,function(t){t.title="",t.content=""})}}),S=Object(s.a)({authStatus:O,projects:b,entities:m,documents:y,storage:h,dialog:j,notification:D,target:A,sidebar:T,projectPopover:v}),g=e(137),w=e(22),L=e(61),G=Object(a.lazy)(function(){return Promise.all([e.e(2),e.e(7),e.e(8)]).then(e.bind(null,705))}),R=Object(a.lazy)(function(){return Promise.all([e.e(0),e.e(2),e.e(9)]).then(e.bind(null,694))}),N=Object(a.lazy)(function(){return Promise.all([e.e(0),e.e(2),e.e(10)]).then(e.bind(null,699))});var x=function(){var t=Object(l.c)();return Object(a.useEffect)(function(){t(Object(L.e)())},[]),u.a.createElement(a.Suspense,{fallback:u.a.createElement("div",null)},u.a.createElement(g.a,null),u.a.createElement(w.d,null,u.a.createElement(w.b,{path:"/signin",component:R}),u.a.createElement(w.b,{path:"/signup",component:N}),u.a.createElement(w.b,{path:"/",component:G})))},k=e(79),P=e.n(k),C=e(88),H=e.n(C),M=Object(d.d)(S,Object(d.a)(f.a)),W=P()({sidebar:{width:300,flexShrink:0},sidebarPaper:{width:300},responsive:{},hide:{display:"none"},palette:{primary:{main:"#a6e0ed"},secondary:{main:"#56db96"},error:{main:"#c91448"},background:{dark:{light:"#555954",main:"#444743",dark:"#2c2e2c"},light:{light:"#f5f5f5",main:"#ededed",dark:"#e6e6e6"}},tonalOffset:.2,contrastThreshold:3}});W.responsive=Object(r.a)({},W.breakpoints.up("md"),{marginLeft:300,width:"calc(100% - ".concat(300,"px)")}),c.a.render(u.a.createElement(H.a,{theme:W},u.a.createElement(l.a,{store:M},u.a.createElement(o.a,null,u.a.createElement(x,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},18:function(t,n,e){"use strict";function r(t){return{type:"SWITCH_SIDEBAR",status:t}}function a(t,n){return{type:"SHOW_NOTIFICATION_DIALOG",title:t,content:n}}function u(){return{type:"HIDE_NOTIFICATION_DIALOG"}}e.d(n,"l",function(){return r}),e.d(n,"j",function(){return a}),e.d(n,"d",function(){return u}),e.d(n,"a",function(){return i}),e.d(n,"b",function(){return c}),e.d(n,"f",function(){return o}),e.d(n,"e",function(){return d}),e.d(n,"h",function(){return l}),e.d(n,"i",function(){return f}),e.d(n,"k",function(){return s}),e.d(n,"c",function(){return p}),e.d(n,"g",function(){return O});var i="ADD_DIALOG",c="DELETE_DIALOG",o="RENAME_DIALOG",d="IMG_DIALOG";function l(){return{type:"SHOW_ADD_DIALOG"}}function f(){return{type:"SHOW_DELETE_DIALOG"}}function s(){return{type:"SHOW_RENAME_DIALOG"}}function p(){return{type:"HIDE_DIALOG"}}function O(t){return{type:"SET_TARGET",data:t}}},27:function(t,n,e){"use strict";var r=e(86),a=e.n(r);n.a=a.a.create({baseURL:"/",responseType:"json",headers:{"Content-Type":"application/json"},withCredentials:!0})},61:function(t,n,e){"use strict";e.d(n,"f",function(){return o}),e.d(n,"g",function(){return d}),e.d(n,"d",function(){return l}),e.d(n,"h",function(){return f}),e.d(n,"e",function(){return s}),e.d(n,"a",function(){return p}),e.d(n,"c",function(){return O}),e.d(n,"b",function(){return E});var r=e(16),a=e.n(r),u=e(26),i=e(27),c=e(18),o=0,d=-1,l=1,f=2,s=function(){return function(){var t=Object(u.a)(a.a.mark(function t(n){var e,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("user/status");case 3:e=t.sent,r=e.data,n({type:"SET_AUTHORIZATION_STATUS",status:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(n){return t.apply(this,arguments)}}()},p=function(t,n){return function(){var e=Object(u.a)(a.a.mark(function e(r){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post("user/signin",{username:t,password:n});case 3:r(s()),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),r(Object(c.j)("Sign In","Fail to sign in")),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t){return e.apply(this,arguments)}}()},O=function(t,n){return function(){var e=Object(u.a)(a.a.mark(function e(r){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post("user",{username:t,password:n});case 3:r(s()),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),r(Object(c.j)("Sign Up","Fail to sign up")),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t){return e.apply(this,arguments)}}()},E=function(){return function(){var t=Object(u.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("user/signout");case 3:n(s()),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}},t,null,[[0,6]])}));return function(n){return t.apply(this,arguments)}}()}},92:function(t,n,e){t.exports=e(133)}},[[92,5,6]]]);
//# sourceMappingURL=main.29040740.chunk.js.map