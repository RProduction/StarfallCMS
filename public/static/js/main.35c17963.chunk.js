(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{21:function(t,n,e){"use strict";function r(t){return{type:"SWITCH_SIDEBAR",status:t}}function a(t,n){return{type:"SHOW_NOTIFICATION_DIALOG",title:t,content:n}}function c(){return{type:"HIDE_NOTIFICATION_DIALOG"}}e.d(n,"m",function(){return r}),e.d(n,"k",function(){return a}),e.d(n,"d",function(){return c}),e.d(n,"a",function(){return u}),e.d(n,"b",function(){return o}),e.d(n,"f",function(){return i}),e.d(n,"e",function(){return f}),e.d(n,"h",function(){return d}),e.d(n,"i",function(){return l}),e.d(n,"l",function(){return s}),e.d(n,"j",function(){return p}),e.d(n,"c",function(){return E}),e.d(n,"g",function(){return O});var u="ADD_DIALOG",o="DELETE_DIALOG",i="RENAME_DIALOG",f="IMG_DIALOG";function d(){return{type:"SHOW_ADD_DIALOG"}}function l(){return{type:"SHOW_DELETE_DIALOG"}}function s(){return{type:"SHOW_RENAME_DIALOG"}}function p(){return{type:"SHOW_IMG_DIALOG"}}function E(){return{type:"HIDE_DIALOG"}}function O(t){return{type:"SET_TARGET",data:t}}},23:function(t,n,e){"use strict";var r=e(62),a=e.n(r);n.a=a.a.create({baseURL:"/",responseType:"json",headers:{"Content-Type":"application/json"},withCredentials:!0})},43:function(t,n,e){"use strict";e.d(n,"f",function(){return o}),e.d(n,"g",function(){return i}),e.d(n,"d",function(){return f}),e.d(n,"h",function(){return d}),e.d(n,"e",function(){return l}),e.d(n,"a",function(){return s}),e.d(n,"c",function(){return p}),e.d(n,"b",function(){return E});var r=e(13),a=e.n(r),c=e(22),u=e(23),o=0,i=-1,f=1,d=2,l=function(){return function(){var t=Object(c.a)(a.a.mark(function t(n){var e,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("user/status");case 3:e=t.sent,r=e.data,n({type:"SET_AUTHORIZATION_STATUS",status:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(n){return t.apply(this,arguments)}}()},s=function(t,n){return function(){var e=Object(c.a)(a.a.mark(function e(r){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post("user/signin",{username:t,password:n});case 3:r(l()),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t){return e.apply(this,arguments)}}()},p=function(t,n){return function(){var e=Object(c.a)(a.a.mark(function e(r){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post("user",{username:t,password:n});case 3:r(l()),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t){return e.apply(this,arguments)}}()},E=function(){return function(){var t=Object(c.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.post("user/signout");case 3:n(l()),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}},t,null,[[0,6]])}));return function(n){return t.apply(this,arguments)}}()}},73:function(t,n,e){t.exports=e(99)},99:function(t,n,e){"use strict";e.r(n);var r=e(45),a=e(0),c=e.n(a),u=e(27),o=e.n(u),i=e(35),f=e(18),d=e(109),l=e(26),s=e(43),p=Object(a.lazy)(function(){return Promise.all([e.e(2),e.e(6),e.e(7)]).then(e.bind(null,677))}),E=Object(a.lazy)(function(){return Promise.all([e.e(0),e.e(2),e.e(12)]).then(e.bind(null,665))}),O=Object(a.lazy)(function(){return Promise.all([e.e(0),e.e(2),e.e(13)]).then(e.bind(null,666))});var v=function(){var t=Object(l.c)();return Object(a.useEffect)(function(){t(Object(s.e)())},[]),c.a.createElement(a.Suspense,{fallback:c.a.createElement("div",null)},c.a.createElement(d.a,null),c.a.createElement(f.d,null,c.a.createElement(f.b,{path:"/signin",component:E}),c.a.createElement(f.b,{path:"/signup",component:O}),c.a.createElement(f.b,{path:"/",component:p})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=e(19);function b(t,n){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1?arguments[1]:void 0;return n.hasOwnProperty(r.type)?n[r.type](e,r):e}}var T=b(-1,{SET_AUTHORIZATION_STATUS:function(t,n){return n.status}}),m=e(2);var _=b(null,{SET_PROJECT_POPOVER:function(t,n){return n.anchor}}),y=b({},{ADD_PROJECTS:function(t,n){return Object(m.a)(t,function(t){var e=n.projects,r=!0,a=!1,c=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done);r=!0){var i=u.value;t[i.id]={id:i.id,name:i.name,img:i.img,created:i.created,updated:i.updated,publicKey:i.publicKey}}}catch(f){a=!0,c=f}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}})},DELETE_PROJECT:function(t,n){return Object(m.a)(t,function(t){delete t[n.id]})},RENAME_PROJECT:function(t,n){return Object(m.a)(t,function(t){var e=n.id,r=n.name,a=n.updated;t[e].name=r,t[e].updated=a})},IMG_PROJECT:function(t,n){return Object(m.a)(t,function(t){var e=n.id,r=n.img,a=n.updated;t[e].img=r,t[e].updated=a})}}),A=b({},{ADD_ENTITIES:function(t,n){return Object(m.a)(t,function(t){var e=n.entities,r=!0,a=!1,c=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done);r=!0){var i=u.value;t[i.id]={id:i.id,projectId:i.projectId,name:i.name,created:i.created,updated:i.updated,schema:i.schema}}}catch(f){a=!0,c=f}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}})},DELETE_ENTITIES:function(t,n){return Object(m.a)(t,function(t){var e=n.entities,r=!0,a=!1,c=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done);r=!0)delete t[u.value]}catch(i){a=!0,c=i}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}})},RENAME_ENTITY:function(t,n){return Object(m.a)(t,function(t){var e=n.id,r=n.name,a=n.updated;t[e].name=r,t[e].updated=a})},SET_ENTITY_SCHEMA:function(t,n){return Object(m.a)(t,function(t){var e=n.id,r=n.schema,a=n.updated;t[e].schema=r,t[e].updated=a})}}),I=b({},{ADD_DOCUMENTS:function(t,n){return Object(m.a)(t,function(t){var e=n.documents,r=!0,a=!1,c=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done);r=!0){var i=u.value;t[i.id]=i}}catch(f){a=!0,c=f}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}})},DELETE_DOCUMENTS:function(t,n){return Object(m.a)(t,function(t){var e=n.documents,r=!0,a=!1,c=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done);r=!0)delete t[u.value]}catch(i){a=!0,c=i}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}})},MODIFY_DOCUMENT:function(t,n){return Object(m.a)(t,function(t){var e=n.id,r=n.updated,a=n.data;t[e].updated=r,t[e].data=a})}}),D=b({data:{},type:{}},{GENERATE_FIELD:function(t,n){return Object(m.a)(t,function(t){var e=n.data,r=n.fieldType;t.data=e,t.type=r})},ADD_FIELD:function(t,n){return Object(m.a)(t,function(t){var e=n.keys,r=n.fieldType,a=t.type;e.forEach(function(t,n){n+1<e.length?a=a[t]:a[t]="object"===r?{}:"array"===r?["integer"]:r})})},SET_FIELD:function(t,n){return Object(m.a)(t,function(t){var e=n.keys,r=n.value,a=t.data,c=t.type;e.forEach(function(t,n){n+1<e.length?(c.constructor===Object?c=c[t]:c.constructor===Array&&(c=c[0]),a[t]||c.constructor!==Object?a[t]||c.constructor!==Array||(a[t]=[]):a[t]={},a=a[t]):a[t]=r})})},DELETE_FIELD:function(t,n){return Object(m.a)(t,function(t){var e=n.keys,r=t.type;e.forEach(function(t,n){n+1<e.length?r=r[t]:delete r[t]})})}});var j=b({},{INIT_STORAGE:function(t,n){return Object(m.a)(t,function(t){var e=n.id,r=n.data;t[e]=r})},UPLOAD_STORAGE:function(t,n){return Object(m.a)(t,function(t){var e=n.id,r=n.path,a=n.files;t[e]||(t[e]={});var c=t[e];r.split("/").forEach(function(t){c=c[t]}),a.forEach(function(t){return c[t.name]={name:t.name,size:t.size,created:t.created,modified:t.modified}})})},FOLDER_STORAGE:function(t,n){return Object(m.a)(t,function(t){var e=n.id,r=n.path;t[e]||(t[e]={});var a=t[e],c=r.split("/");c.forEach(function(t,n){n+1<c.length?a=a[t]:a[t]={}})})},MOVE_STORAGE:function(t,n){return Object(m.a)(t,function(t){var e=n.id,r=n.path,a=n.targets,c=t[e];r.split("/").forEach(function(t){c=c[t]}),a.forEach(function(n){var r=t[e],a=n.split("/");a.forEach(function(t,n){n+1<a.length?r=r[t]:(c[t]=r[t],delete r[t])})})})},RENAME_STORAGE:function(t,n){return Object(m.a)(t,function(t){var e=n.id,r=n.path,a=n.name,c=n.new_name,u=t[e];r.split("/").forEach(function(t){u=u[t]}),u[c]=u[a],delete u[a]})},DELETE_STORAGE:function(t,n){return Object(m.a)(t,function(t){var e=n.id;n.paths.forEach(function(n){var r=t[e],a=n.split("/");a.forEach(function(t,n){n+1<a.length?r=r[t]:delete r[t]})})})}}),S=b("",{INIT_STORAGE_PATH:function(t,n){var e=n.id;return"".concat(e)},FORWARD_STORAGE_PATH:function(t,n){var e=n.next;return"".concat(t,"/").concat(e)},BACKWARD_STORAGE_PATH:function(t,n){var e=t.split("/"),r="";return e.forEach(function(t,n){0===n?r=t:n+1<e.length&&(r+="/".concat(t))}),r}}),g=e(40),G=e(21);var L=b(!1,{SWITCH_SIDEBAR:function(t,n){return n.status}}),w=b({},{SET_TARGET:function(t,n){return Object(m.a)(t,function(t){var e=n.data;Object.entries(e).forEach(function(n){var e=Object(g.a)(n,2),r=e[0],a=e[1];return t[r]=a})})}}),R=b(null,{SHOW_ADD_DIALOG:function(t,n){return G.a},SHOW_DELETE_DIALOG:function(t,n){return G.b},SHOW_RENAME_DIALOG:function(t,n){return G.f},SHOW_IMG_DIALOG:function(t,n){return G.e},HIDE_DIALOG:function(t,n){return null}}),N=b({title:"",content:""},{SHOW_NOTIFICATION_DIALOG:function(t,n){return Object(m.a)(t,function(t){var e=n.title,r=n.content;t.title=e,t.content=r})},HIDE_NOTIFICATION_DIALOG:function(t,n){return Object(m.a)(t,function(t){t.title="",t.content=""})}}),k=Object(h.c)({authStatus:T,projects:y,entities:A,documents:I,currentDocument:D,storage:j,storagePath:S,dialog:R,notification:N,target:w,sidebar:L,projectPopover:_}),H=e(64),x=e(65),C=e(110),P=Object(h.e)(k,Object(h.a)(H.a)),M=Object(x.a)({sidebar:{width:300,flexShrink:0},sidebarPaper:{width:300},responsive:{},hide:{display:"none"},palette:{primary:{main:"#a6e0ed"},secondary:{main:"#56db96"},error:{main:"#c91448"},background:{dark:{light:"#555954",main:"#444743",dark:"#2c2e2c"},light:{light:"#f5f5f5",main:"#ededed",dark:"#e6e6e6"}},tonalOffset:.2,contrastThreshold:3}});M.responsive=Object(r.a)({},M.breakpoints.up("md"),{marginLeft:300,width:"calc(100% - ".concat(300,"px)")}),o.a.render(c.a.createElement(C.a,{theme:M},c.a.createElement(l.a,{store:P},c.a.createElement(i.a,null,c.a.createElement(v,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[73,4,5]]]);
//# sourceMappingURL=main.35c17963.chunk.js.map