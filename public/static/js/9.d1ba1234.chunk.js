(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{165:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(175),c=n(170),i=n(696),l=n(697),m=n(698),u=n(699),d=n(400),s=n(358),p=n(241);var f=function(e){var t=e.request,n=e.btn,a=e.category,o=e.values,c=o.name,i=o.newName,l=o.confirmName,m=e.errors,u=e.touched,f=e.handleChange,b=e.isValid,g=e.setFieldTouched,h=function(e,t){t.persist(),f(t),g(e,!0,!1)};return r.a.createElement(p.a,{container:!0,component:"form",spacing:1,onSubmit:function(e){e.preventDefault(),t({name:c,newName:i,confirmName:l})}},"add"===a?r.a.createElement(p.a,{component:d.a,item:!0,xs:12,id:"name",name:"name",label:"Name",onChange:h.bind(null,"name"),value:c,helperText:u.name?m.name:"",error:u.name&&Boolean(m.name)}):"delete"===a?r.a.createElement(p.a,{component:d.a,item:!0,xs:12,id:"confirmName",name:"confirmName",label:"Confirm Name",onChange:h.bind(null,"confirmName"),value:l,helperText:u.confirmName?m.confirmName:"",error:u.confirmName&&Boolean(m.confirmName)}):"rename"===a?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{component:d.a,item:!0,xs:12,id:"newName",name:"newName",label:"New Name",onChange:h.bind(null,"newName"),value:i,helperText:u.newName?m.newName:"",error:u.newName&&Boolean(m.newName)}),r.a.createElement(p.a,{component:d.a,item:!0,xs:12,id:"confirmName",name:"confirmName",label:"Confirm Name",onChange:h.bind(null,"confirmName"),value:l,helperText:u.confirmName?m.confirmName:"",error:u.confirmName&&Boolean(m.confirmName)})):null,r.a.createElement(p.a,{item:!0,xs:12,component:s.a,type:"submit",disabled:!b,size:"large"},n))},b=c.object({name:c.string().required("enter name").matches(/^[a-zA-Z0-9_]+$/,{message:"input letters, numbers, and underscore only",excludeEmptyString:!0}).min(1,"name too short").max(50,"name too long")}),g=c.object({name:c.string(),confirmName:c.string().required("re-enter name").matches(/^[a-z0-9_]*$/i,{message:"input letters, numbers, and underscore only",excludeEmptyString:!0}).oneOf([c.ref("name")],"Confirm Name does not match")}),h=c.object({name:c.string(),confirmName:c.string().required("re-enter name").oneOf([c.ref("name")],"Confirm Name does not match"),newName:c.string().required("enter new name").matches(/^[a-zA-Z0-9_]+$/,{message:"input letters, numbers, and underscore only",excludeEmptyString:!0}).min(1,"new name too short").max(50,"new name too long")}),j={name:""},v=function(e){return{name:e,confirmName:""}},E=function(e){return{name:e,confirmName:"",newName:""}};t.a=function(e){var t=e.title,n=e.content,a=e.targetName,c=e.category,d=e.dialogProps;return r.a.createElement(i.a,d,r.a.createElement(l.a,{id:"dialog-title"},t),r.a.createElement(m.a,null,"add"===c||"delete"===c||"rename"===c?r.a.createElement(r.a.Fragment,null,"delete"===c?r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,n),r.a.createElement(u.a,null,"Please type in the name of the target to confirm")):null,r.a.createElement(o.a,{validationSchema:"add"===c?b:"rename"===c?h:"delete"===c?g:{},initialValues:"add"===c?j:"rename"===c?E(a):"delete"===c?v(a):{},render:function(t){return r.a.createElement(f,Object.assign({},e,t))}})):"notification"===c?r.a.createElement(u.a,null,n):null))}},192:function(e,t,n){"use strict";var a=n(147);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(149)).default)(r.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=o},205:function(e,t,n){"use strict";var a=n(147);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(149)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"})),"DeleteForever");t.default=o},221:function(e,t,n){"use strict";var a=n(147);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(149)).default)(r.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Create");t.default=o},289:function(e,t,n){"use strict";var a=n(12),r=n(3),o=n(0),c=n.n(o),i=(n(6),n(25)),l=n(61),m=n(685),u=c.a.forwardRef(function(e,t){var n,o=e.classes,l=e.className,u=e.component,d=void 0===u?"li":u,s=e.disableGutters,p=void 0!==s&&s,f=e.role,b=void 0===f?"menuitem":f,g=e.selected,h=e.tabIndex,j=Object(a.a)(e,["classes","className","component","disableGutters","role","selected","tabIndex"]);return e.disabled||(n=void 0!==h?h:-1),c.a.createElement(m.a,Object(r.a)({button:!0,role:b,tabIndex:n,component:d,selected:g,disableGutters:p,classes:{dense:o.dense},className:Object(i.a)(o.root,l,g&&o.selected,!p&&o.gutters),ref:t},j))});t.a=Object(l.a)(function(e){return{root:Object(r.a)({},e.typography.subtitle1,{minHeight:48,paddingTop:4,paddingBottom:4,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"}),gutters:{paddingLeft:16,paddingRight:16},selected:{},dense:{minHeight:"auto"}}},{name:"MuiMenuItem"})(u)},635:function(e,t,n){"use strict";var a=n(147);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(149)).default)(r.default.createElement("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}),"Image");t.default=o},707:function(e,t,n){"use strict";n.r(t);var a=n(15),r=n.n(a),o=n(26),c=n(0),i=n.n(c),l=n(12),m=n(3),u=(n(6),n(25)),d=n(61),s=n(708),p=n(62),f=i.a.forwardRef(function(e,t){var n=e.children,a=e.classes,r=e.className,o=e.color,c=void 0===o?"default":o,d=e.component,f=void 0===d?"button":d,b=e.disabled,g=void 0!==b&&b,h=e.disableFocusRipple,j=void 0!==h&&h,v=e.focusVisibleClassName,E=e.size,N=void 0===E?"large":E,O=e.variant,w=void 0===O?"round":O,x=Object(l.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return i.a.createElement(s.a,Object(m.a)({className:Object(u.a)(a.root,r,"round"!==w&&a.extended,"large"!==N&&a["size".concat(Object(p.a)(N))],g&&a.disabled,{primary:a.primary,secondary:a.secondary,inherit:a.colorInherit}[c]),component:f,disabled:g,focusRipple:!j,focusVisibleClassName:Object(u.a)(a.focusVisible,v),ref:t},x),i.a.createElement("span",{className:a.label},n))}),b=Object(d.a)(function(e){return{root:Object(m.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&$focusVisible":{boxShadow:e.shadows[6]},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}},{name:"MuiFab"})(f),g=n(139),h=n(192),j=n.n(h),v=n(35),E=n(27),N=n(19),O=n(205),w=n.n(O),x=n(221),y=n.n(x),C=n(635),k=n.n(C),P=n(229),F=n(310),z=n(299),I=n(289),M=n(225),R=i.a.forwardRef(function(e,t){var n=e.classes,a=e.className,r=Object(l.a)(e,["classes","className"]),o=i.a.useContext(M.a);return i.a.createElement("div",Object(m.a)({className:Object(u.a)(n.root,a,"flex-start"===o.alignItems&&n.alignItemsFlexStart),ref:t},r))}),S=Object(d.a)(function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}},{name:"MuiListItemIcon"})(R);function T(e){var t=e.IconComponent;return t?i.a.createElement(S,null,i.a.createElement(t,null)):null}var L=function(e){var t=e.menus;return i.a.createElement(z.a,e,t.map(function(e,t){var n=e.title?e.title:"",a=e.onClick?e.onClick:function(){};return i.a.createElement(I.a,{key:t,onClick:a},i.a.createElement(T,{IconComponent:e.icon}),i.a.createElement(F.a,null,n))}))},V=10485760,A=["image/jpg","image/jpeg","image/png"];var _=function(e){var t=Object(v.c)(),n=Object(v.d)(function(e){return e.target}),a=Object(v.d)(function(e){return e.projectPopover}),l=Object(c.useRef)(null);return i.a.createElement(i.a.Fragment,null,i.a.createElement(L,{id:a?"Project Menu":null,open:!!a,onClose:function(){return t(Object(P.f)(null))},anchorEl:a,menus:[{title:"Rename",icon:y.a,onClick:function(){t(Object(P.f)(null)),t(Object(N.k)())}},{title:"Change Image",icon:k.a,onClick:function(){t(Object(P.f)(null)),l.current.click()}},{title:"Delete",icon:w.a,onClick:function(){t(Object(P.f)(null)),t(Object(N.i)())}}]}),i.a.createElement("input",{name:"files",type:"file",style:{display:"none"},ref:l,onChange:function(){var e=Object(o.a)(r.a.mark(function e(a){var o,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!((o=l.current.files[0])&&o.size>=V)){e.next=7;break}return t(Object(N.j)("Change Project Image","File too large")),console.log("File too large"),e.abrupt("return");case 7:if(!o||A.includes(o.type)){e.next=13;break}return t(Object(N.j)("Change Project Image","Unsupported Format")),console.log("Unsupported Format"),e.abrupt("return");case 13:if(!(o&&!A.includes(o.type)&&o.size>=V)){e.next=19;break}return t(Object(N.j)("Change Project Image","Unsupported Format and File too large")),console.log("Unsupported Format and File too large"),e.abrupt("return");case 19:if(o){e.next=22;break}return console.log("Img not exist"),e.abrupt("return");case 22:return e.prev=22,(c=new FormData).append("img",o,o.name.split(/(\\|\/)/g).pop()),e.next=27,E.a.post("project/".concat(n.id,"/img"),c,{"Content-Type":"multipart/form-data"});case 27:t(Object(N.j)("Change Project Image","Succeed changing project image")),e.next=33;break;case 30:e.prev=30,e.t0=e.catch(22),t(Object(N.j)("Change Project Image","Fail changing project image, error: ".concat(e.t0)));case 33:case"end":return e.stop()}},e,null,[[22,30]])}));return function(t){return e.apply(this,arguments)}}()}))},D=n(165),H=i.a.forwardRef(function(e,t){return i.a.createElement(b,Object.assign({},e,{innerRef:t,color:"secondary"}))});t.default=function(e){var t=Object(v.c)(),n=Object(v.d)(function(e){return e.target}),a=Object(v.d)(function(e){return e.dialog}),c=Object(v.d)(function(e){return e.notification});return i.a.createElement(i.a.Fragment,null,i.a.createElement(D.a,{dialogProps:{open:a===N.a,onClose:function(){return t(Object(N.c)())}},category:"add",title:"Add New Project",btn:"Add New Project",request:function(){var e=Object(o.a)(r.a.mark(function e(n){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.name,e.prev=1,e.next=4,E.a.post("project",{name:a});case 4:t(Object(N.c)()),t(Object(N.j)("Add New Project ".concat(a),"Succeed adding new project ".concat(a))),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(Object(N.c)()),t(Object(N.j)("Add New Project ".concat(a),"Fail adding new project ".concat(a,", error: ").concat(e.t0)));case 12:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}()}),i.a.createElement(D.a,{dialogProps:{open:a===N.b,onClose:function(){return t(Object(N.c)())}},category:"delete",title:'PERMANENTLY DELETE "'.concat(n.name,'"'),btn:'PERMANENTLY DELETE "'.concat(n.name,'"'),content:'This action will PERMANENTLY DELETE "'.concat(n.name,'". Proceed with caution!'),targetName:n.name,request:function(){var e=Object(o.a)(r.a.mark(function e(a){var o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.name,e.prev=1,e.next=4,E.a.delete("project/".concat(n.id));case 4:t(Object(N.c)()),t(Object(N.j)("Delete Project ".concat(o),"Succeed deleting project ".concat(o))),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(Object(N.c)()),t(Object(N.j)("Delete Project ".concat(o),"Fail deleting project ".concat(o,", error: ").concat(e.t0)));case 12:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}()}),i.a.createElement(D.a,{dialogProps:{open:a===N.f,onClose:function(){return t(Object(N.c)())}},category:"rename",title:'Rename "'.concat(n.name,'"'),btn:'Rename "'.concat(n.name,'"'),targetName:n.name,request:function(){var e=Object(o.a)(r.a.mark(function e(a){var o,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.name,c=a.newName,e.prev=1,e.next=4,E.a.post("project/".concat(n.id,"/rename"),{name:c});case 4:t(Object(N.c)()),t(Object(N.j)("Rename Project ".concat(o),"Succeed renaming project ".concat(o," into ").concat(c))),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(Object(N.c)()),t(Object(N.j)("Rename Project ".concat(o),"Fail renaming project ".concat(o," into ").concat(c,", error: ").concat(e.t0)));case 12:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}()}),i.a.createElement(D.a,{category:"notification",title:c.title,content:c.content,dialogProps:{open:""!==c.title&&""!==c.content,onClose:function(){return t(Object(N.d)())}}}),i.a.createElement(_,null),i.a.createElement(g.a,{position:"fixed",bottom:30,right:30,zIndex:50},i.a.createElement(H,{onClick:function(){return t(Object(N.h)())}},i.a.createElement(j.a,null))))}}}]);
//# sourceMappingURL=9.d1ba1234.chunk.js.map