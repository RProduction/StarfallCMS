(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{210:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return l});var r=n(232),a=n(233),c=function(e){return e.entities},o=function(e){return Object.values(c(e))},i=function(){return Object(r.a)(o,function(e,t){return t},function(e,t){return e.filter(function(e){return e.projectId===t})})},u=function(){return Object(r.a)(o,function(e,t){return Object(a.b)()(e,t)},function(e,t){return t?{project:t,entities:e.filter(function(e){return e.projectId===t.id})}:null})},l=function(){return Object(r.a)(o,function(e,t,n){return Object(a.b)()(e,t)},function(e,t,n){return n},function(e,t,n){return t?e.find(function(e){return e.name===n&&e.projectId===t.id}):null})}},212:function(e,t,n){"use strict";n.d(t,"j",function(){return i}),n.d(t,"h",function(){return u}),n.d(t,"f",function(){return l}),n.d(t,"a",function(){return d}),n.d(t,"b",function(){return s}),n.d(t,"g",function(){return f}),n.d(t,"d",function(){return p}),n.d(t,"i",function(){return m}),n.d(t,"c",function(){return b}),n.d(t,"e",function(){return E});var r=n(15),a=n.n(r),c=n(26),o=n(27),i=function(e){return{type:"UPLOAD_STORAGE",files:e}},u=function(e,t,n){return{type:"RENAME_STORAGE",id:e,name:t,updated:n}},l=function(e,t,n){return{type:"PUBLIC_STORAGE",id:e,isPublic:t,updated:n}},d=function(e){return{type:"DELETE_STORAGE",ids:e}},s=function(e){return function(){var t=Object(c.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.b.get("storage/".concat(e));case 3:r=t.sent,n(i(r.data)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()};function f(e,t,n){return{type:"PUSH_FILE_UPLOAD",name:t,file:n,project:e}}function p(e,t,n){return{type:"INIT_FILE_UPLOAD",name:t,project:e}}function m(e,t,n){return{type:"SET_FILE_UPLOAD",name:t,progress:n,project:e}}function b(e,t){return{type:"FINISH_FILE_UPLOAD",name:t,project:e}}function E(e,t){return{type:"POP_FILE_UPLOAD",name:t,project:e}}},213:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(697),o=n(139);t.a=function(e){return a.a.createElement(o.a,Object.assign({minHeight:"100vh",component:c.a,maxWidth:"xl"},e),e.children)}},233:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return o});var r=n(232),a=function(e){return e.projects},c=function(e){return Object.values(a(e))},o=function(){return Object(r.a)(c,function(e,t){return t},function(e,t){return e.find(function(e){return e.name===t})})}},235:function(e,t,n){"use strict";n.d(t,"f",function(){return f}),n.d(t,"a",function(){return p}),n.d(t,"b",function(){return m}),n.d(t,"e",function(){return b}),n.d(t,"c",function(){return E}),n.d(t,"d",function(){return j});var r=n(15),a=n.n(r),c=n(26),o=n(319),i=n(267),u=n(212),l=n(210),d=n(27),s=n(320);function f(e){return{type:"SET_PROJECT_POPOVER",anchor:e}}var p=function(e){return{type:"ADD_PROJECTS",projects:e}},m=function(e){return function(){var t=Object(c.a)(a.a.mark(function t(n,r){var c,i;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:c=Object(l.a)(),i=c(r(),e),n(Object(o.b)(i.map(function(e){return e.id}))),n({type:"DELETE_PROJECT",id:e});case 4:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()},b=function(e,t,n,r){return{type:"RENAME_PROJECT",id:e,name:t,updated:n,publicKey:r}},E=function(e,t,n){return{type:"IMG_PROJECT",id:e,img:t,updated:n}},j=function(){return function(){var e=Object(c.a)(a.a.mark(function e(t){var n,r,c,l;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.b.get("project");case 3:n=e.sent,r=Object(s.b)(n.data),c=[],l=[],r.result.forEach(function(e){c.push({id:r.entities.projects[e].id,name:r.entities.projects[e].name,img:r.entities.projects[e].img_url,created:r.entities.projects[e].created_at,updated:r.entities.projects[e].updated_at,publicKey:r.entities.projects[e].public_key}),t(p(c)),r.entities.projects[e].entities.forEach(function(e){l.push({id:r.entities.entities[e].id,projectId:r.entities.entities[e].project_id,name:r.entities.entities[e].name,created:r.entities.entities[e].created_at,updated:r.entities.entities[e].updated_at})})}),t(Object(o.a)(l)),l.forEach(function(e){return t(Object(i.c)(e.id))}),c.forEach(function(e){return t(Object(u.b)(e.id))}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}},e,null,[[0,13]])}));return function(t){return e.apply(this,arguments)}}()}},267:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return l}),n.d(t,"d",function(){return d}),n.d(t,"c",function(){return s});var r=n(15),a=n.n(r),c=n(26),o=n(320),i=n(27),u=function(e){return{type:"ADD_DOCUMENTS",documents:e}},l=function(e){return{type:"DELETE_DOCUMENTS",documents:e}},d=function(e,t,n){return{type:"MODIFY_DOCUMENT",id:e,updated:t,data:n}},s=function(e){return function(){var t=Object(c.a)(a.a.mark(function t(n){var r,c,l;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.b.get("document/".concat(e));case 3:r=t.sent,c=Object(o.a)(r.data),l=[],c.result.forEach(function(e){l.push({id:c.entities.documents[e].id,entityId:c.entities.documents[e].entity_id,created:c.entities.documents[e].created_at,updated:c.entities.documents[e].updated_at,data:c.entities.documents[e].data})}),n({type:"SET_DOCUMENT_INIT",entityId:e}),n(u(l)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()}},268:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return l});var r=n(232),a=n(210),c=function(e){return e.documents},o=function(e,t){return c(e)[t]},i=function(e){return Object.values(c(e))},u=function(){return Object(r.a)(i,function(e,t){return t},function(e,t){return e.filter(function(e){return e.entityId===t})})},l=function(){return Object(r.a)(i,function(e,t,n){return Object(a.c)()(e,t,n)},function(e,t){return t?{entity:t,documents:e.filter(function(e){return e.entityId===t.id})}:null})}},319:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return d});var r=n(15),a=n.n(r),c=n(26),o=n(267),i=n(268),u=function(e){return{type:"ADD_ENTITIES",entities:e}},l=function(e){return function(){var t=Object(c.a)(a.a.mark(function t(n,r){var c,u;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:c=Object(i.b)(),u=[],e.forEach(function(e){c(r(),e).forEach(function(e){return u.push(e.id)})}),n(Object(o.b)(u)),n({type:"DELETE_ENTITIES",entities:e});case 5:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()},d=function(e,t,n){return{type:"RENAME_ENTITY",id:e,name:t,updated:n}}},320:function(e,t,n){"use strict";n.d(t,"b",function(){return d}),n.d(t,"a",function(){return s});var r=n(425),a=new r.b.Entity("documents",{},{idAttribute:"id"}),c=new r.b.Array(a),o=new r.b.Entity("entities",{documents:c},{idAttribute:"id"}),i=new r.b.Array(o),u=new r.b.Entity("projects",{entities:i},{idAttribute:"id"}),l=new r.b.Array(u);function d(e){return Object(r.a)(e,l)}function s(e){return Object(r.a)(e,c)}},711:function(e,t,n){"use strict";n.r(t);var r=n(229),a=n(0),c=n.n(a),o=n(23),i=n(163),u=n.n(i),l=n(35),d=n(314),s=n(689),f=n(308),p=n(309),m=n(403),b=n(139),E=n(420),j=n.n(E),O=n(419),g=n.n(O),h=n(418),y=n.n(h),v=n(25),_=n(19),w=n(65),x=n(64),k=n(48);var P=function(e){var t=e.location,n=Object(a.useState)({}),r=Object(x.a)(n,2),i=r[0],u=r[1];Object(a.useEffect)(function(){var e=(t.pathname.match(/\/./g)||[]).length;0===e?u({}):1===e?u(Object(o.f)(t.pathname,{path:"/:project",exact:!0}).params):2===e?u(Object(o.f)(t.pathname,{path:"/:project/:entity",exact:!0}).params):3===e&&u(Object(o.f)(t.pathname,{path:"/:project/:entity/:document",exact:!0}).params)},[t.pathname]);var l=i.project,d=i.entity,s=i.document;return c.a.createElement(c.a.Fragment,null,c.a.createElement(k.b,{to:"/"}," StarfallCMS "),l?c.a.createElement(c.a.Fragment,null,"/",c.a.createElement(k.b,{to:"/".concat(l)}," ",l," ")):null,d?c.a.createElement(c.a.Fragment,null,"/",c.a.createElement(k.b,{to:"/".concat(l,"/").concat(d)}," ",d," ")):null,s?c.a.createElement(c.a.Fragment,null,"/",c.a.createElement(k.b,{to:"/".concat(l,"/").concat(d,"/").concat(s)}," ",s," ")):null)},I=u()(function(e){return{root:Object(r.a)({backgroundColor:e.palette.primary.light},e.responsive),link:{"& a":{color:"black",paddingLeft:e.spacing(.35),paddingRight:e.spacing(.35),fontSize:"115%"},whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},hide:e.hide}});var T=function(e){var t=e.history,n=I(),r=Object(l.c)(),a=Object(l.d)(function(e){return e.sidebar}),o=Object(l.d)(function(e){return e.authStatus});return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{position:"fixed",className:n.root},c.a.createElement(f.a,null,c.a.createElement(m.a,{mdUp:!0},c.a.createElement(p.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){return r(Object(_.l)(!a))},edge:"start",className:Object(v.a)(a&&n.hide)},c.a.createElement(y.a,null))),c.a.createElement(b.a,{display:"flex",flexGrow:1,container:d.a,variant:"h6",align:"center",className:n.link},c.a.createElement(P,e)),o===w.d?c.a.createElement(p.a,{edge:"end","aria-label":"Account of current user","aria-haspopup":"true",color:"inherit",onClick:function(e){return t.push("/userlist")}},c.a.createElement(g.a,null)):null,c.a.createElement(p.a,{edge:"end","aria-label":"Log Off","aria-haspopup":"true",color:"inherit",onClick:function(e){return r(Object(w.b)())}},c.a.createElement(j.a,null)))))},N=u()(function(e){return{root:Object(r.a)({backgroundColor:"#292D2E"},e.responsive),text:{color:"white",fontSize:"125%",textAlign:"center",lineHeight:"50px"}}});var S=function(){var e=N();return c.a.createElement("footer",{className:e.root},c.a.createElement(d.a,{variant:"h3",className:e.text},"Copyright Starfall Production"))},A=n(719),C=n(696),D=n(423),L=n.n(D),F=n(424),R=n.n(F),U=n(692),M=n(690),z=n(315),G=n(714),J=n(691),H=n(421),K=n.n(H),B=n(422),Y=n.n(B),V=u()({root:{flexGrow:1}});var W=function(e){var t=V(),n=e.name,r=e.projectName;return c.a.createElement(c.a.Fragment,null,c.a.createElement(M.a,{divider:!0},c.a.createElement(G.a,{component:k.b,to:"/".concat(r,"/").concat(n),className:t.root},c.a.createElement(z.a,{primary:n}))))},q=n(210),Q=u()(function(e){return{root:{paddingLeft:e.spacing(1)},hide:{display:"none"},btn:{flexGrow:1}}});var X=function(e){var t=Q(),n=e.id,r=e.name,o=Object(a.useMemo)(q.a,[]),i=Object(l.d)(function(e){return o(e,n)}),u=Object(a.useState)(!1),d=Object(x.a)(u,2),s=d[0],f=d[1],m=Object(a.useState)(!1),b=Object(x.a)(m,2),E=b[0],j=b[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(M.a,{button:!0,divider:!0,onClick:function(){return f(!s)}},c.a.createElement(z.a,{primary:r}),s?c.a.createElement(K.a,null):c.a.createElement(Y.a,null)),c.a.createElement(J.a,{in:s,timeout:"auto",unmountOnExit:!0},c.a.createElement(U.a,{className:t.root,disablePadding:!0},c.a.createElement(M.a,{button:!0,component:k.b,to:"/".concat(r,"/storage"),divider:!0},c.a.createElement(z.a,{primary:"Storage"})),c.a.createElement(M.a,{divider:!0},c.a.createElement(G.a,{component:k.b,to:"/".concat(r),className:t.btn},c.a.createElement(z.a,{primary:"Entities"})),c.a.createElement(p.a,{color:"inherit","aria-label":"Expand ".concat(r," entities"),onClick:function(){return j(!E)},edge:"end",className:Object(v.a)(0===i.length&&t.hide)},E?c.a.createElement(K.a,null):c.a.createElement(Y.a,null))),i.length>0?c.a.createElement(J.a,{in:E,timeout:"auto",unmountOnExit:!0},c.a.createElement(U.a,{className:t.root,disablePadding:!0},i.map(function(e){return c.a.createElement(W,{key:e.id,name:e.name,projectName:r})}))):null)))},Z=n(233);var $=function(e){var t=Object(l.d)(Z.a);return c.a.createElement(U.a,null,c.a.createElement(M.a,{button:!0,component:k.b,to:"/",divider:!0},c.a.createElement(z.a,{primary:"Overview"})),t.map(function(e){return c.a.createElement(X,{id:e.id,name:e.name,key:e.id})}))},ee=u()(function(e){return{root:e.sidebar,paper:Object(r.a)({backgroundColor:e.palette.primary.main},e.sidebarPaper),direction:e.direction,btn:Object(r.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"})}});var te=function(e){var t=ee(),n=Object(l.c)(),r=Object(l.d)(function(e){return e.sidebar});return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{mdUp:!0},c.a.createElement(A.a,{className:t.root,variant:"temporary",anchor:"rtl"===t.direction?"right":"left",open:r,classes:{paper:t.paper},ModalProps:{keepMounted:!0}},c.a.createElement("div",{className:t.btn},c.a.createElement(p.a,{onClick:function(){return n(Object(_.l)(!r))}},"ltr"===t.direction?c.a.createElement(L.a,null):c.a.createElement(R.a,null))),c.a.createElement(C.a,null),c.a.createElement($,null))),c.a.createElement(m.a,{smDown:!0},c.a.createElement(A.a,{className:t.root,classes:{paper:t.paper},variant:"permanent",open:!0},c.a.createElement($,null))))},ne=n(71),re=n(235),ae=n(213),ce=n(426),oe=n.n(ce),ie=n(319),ue=n(267),le=n(212);var de=function(e){var t=Object(l.c)();return Object(a.useEffect)(function(){var e=oe()(null,{path:"starfall-cms-ws"});return e.on("open",function(){var n=e.subscribe("project"),r=e.subscribe("entity"),a=e.subscribe("document"),c=e.subscribe("storage");n.on("add",function(e){console.log("add project"),console.log(e),t(Object(re.a)([{id:e.id,name:e.name,img:e.img_url,created:e.created_at,updated:e.updated_at,publicKey:e.public_key}]))}),n.on("delete",function(e){console.log("delete project"),console.log(e),t(Object(re.b)(e.id))}),n.on("rename",function(e){console.log("rename project"),console.log(e),t(Object(re.e)(e.id,e.name,e.updated_at,e.public_key))}),n.on("img",function(e){console.log("change image of project"),console.log(e),t(Object(re.c)(e.id,e.img_url,e.updated_at))}),n.on("error",function(e){console.log(e)}),r.on("add",function(e){console.log("add entity"),console.log(e),t(Object(ie.a)([{id:e.id,projectId:e.project_id,name:e.name,created:e.created_at,updated:e.updated_at}]))}),r.on("delete",function(e){console.log("delete entity"),console.log(e),t(Object(ie.b)([e.id]))}),r.on("rename",function(e){console.log("rename entity"),console.log(e),t(Object(ie.c)(e.id,e.name,e.updated_at))}),r.on("error",function(e){console.log(e)}),a.on("add",function(e){console.log("add document"),console.log(e),t(Object(ue.a)([{id:e.id,entityId:e.entity_id,created:e.created_at,updated:e.updated_at,data:e.data}]))}),a.on("modify",function(e){console.log("modify document"),console.log(e),t(Object(ue.d)(e.id,e.updated_at,e.data))}),a.on("delete",function(e){console.log("delete documents"),console.log(e),t(Object(ue.b)(e.ids))}),c.on("upload",function(e){console.log("upload into storage"),console.log(e),t(Object(le.j)(e))}),c.on("rename",function(e){console.log("rename storage"),console.log(e),t(Object(le.h)(e.id,e.name,e.updated_at))}),c.on("public",function(e){console.log("toggle isPublic storage"),console.log(e),t(Object(le.f)(e.id,e.isPublic,e.updated_at))}),c.on("delete",function(e){console.log("delete storage"),console.log(e),t(Object(le.a)(e.ids))})}),e.on("close",function(){}),e.on("error",function(e){console.log(e)}),e.connect(),function(){e.close()}},[]),null},se=Object(a.lazy)(function(){return Promise.all([n.e(1),n.e(20)]).then(n.bind(null,712))}),fe=Object(a.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(11)]).then(n.bind(null,718))}),pe=Object(a.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(16)]).then(n.bind(null,707))}),me=Object(a.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(17)]).then(n.bind(null,708))}),be=Object(a.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(10)]).then(n.bind(null,710))}),Ee=Object(a.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(12)]).then(n.bind(null,716))}),je=u()(function(e){return{root:Object(r.a)({marginTop:65,paddingTop:15,paddingBottom:15,backgroundColor:e.palette.background.light.light,overflow:"auto"},e.responsive)}});t.default=function(e){var t=je(),n=Object(l.c)(),r=Object(l.d)(function(e){return e.authStatus});return Object(a.useEffect)(function(){n(Object(re.d)())},[]),r===w.g?c.a.createElement(o.a,{to:"/signup"}):r===w.i?c.a.createElement(o.a,{to:"/signin"}):c.a.createElement(c.a.Fragment,null,c.a.createElement(T,e),c.a.createElement(te,null),c.a.createElement(de,null),c.a.createElement(ae.a,{className:t.root},c.a.createElement(a.Suspense,{fallback:c.a.createElement(ne.a,null)},c.a.createElement(o.d,null,r===w.d?c.a.createElement(o.b,{path:"/userlist",component:Ee}):null,c.a.createElement(o.b,{path:"/:project/:entity/:document",component:me}),c.a.createElement(o.b,{path:"/:project/storage",component:be}),c.a.createElement(o.b,{path:"/:project/:entity",component:pe}),c.a.createElement(o.b,{path:"/:project",component:fe}),c.a.createElement(o.b,{path:"/",component:se})))),c.a.createElement(S,null))}}}]);
//# sourceMappingURL=9.2c1ab19e.chunk.js.map