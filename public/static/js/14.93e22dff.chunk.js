(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{160:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(170),o=t(167),c=t(695),m=t(696),l=t(697),s=t(698),d=t(397),u=t(353),f=t(235);var g=function(e){var n=e.request,t=e.btn,a=e.category,i=e.values,o=i.name,c=i.newName,m=i.confirmName,l=e.errors,s=e.touched,g=e.handleChange,x=e.isValid,p=e.setFieldTouched,b=function(e,n){n.persist(),g(n),p(e,!0,!1)};return r.a.createElement(f.a,{container:!0,component:"form",spacing:1,onSubmit:function(e){e.preventDefault(),n({name:o,newName:c,confirmName:m})}},"add"===a?r.a.createElement(f.a,{component:d.a,item:!0,xs:12,id:"name",name:"name",label:"Name",onChange:b.bind(null,"name"),value:o,helperText:s.name?l.name:"",error:s.name&&Boolean(l.name)}):"delete"===a?r.a.createElement(f.a,{component:d.a,item:!0,xs:12,id:"confirmName",name:"confirmName",label:"Confirm Name",onChange:b.bind(null,"confirmName"),value:m,helperText:s.confirmName?l.confirmName:"",error:s.confirmName&&Boolean(l.confirmName)}):"rename"===a?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{component:d.a,item:!0,xs:12,id:"newName",name:"newName",label:"New Name",onChange:b.bind(null,"newName"),value:c,helperText:s.newName?l.newName:"",error:s.newName&&Boolean(l.newName)}),r.a.createElement(f.a,{component:d.a,item:!0,xs:12,id:"confirmName",name:"confirmName",label:"Confirm Name",onChange:b.bind(null,"confirmName"),value:m,helperText:s.confirmName?l.confirmName:"",error:s.confirmName&&Boolean(l.confirmName)})):null,r.a.createElement(f.a,{item:!0,xs:12,component:u.a,type:"submit",disabled:!x,size:"large"},t))},x=o.object({name:o.string().required("enter name").matches(/^[a-zA-Z0-9_]+$/,{message:"input letters, numbers, and underscore only",excludeEmptyString:!0}).min(1,"name too short").max(50,"name too long")}),p=o.object({name:o.string(),confirmName:o.string().required("re-enter name").matches(/^[a-z0-9_]*$/i,{message:"input letters, numbers, and underscore only",excludeEmptyString:!0}).oneOf([o.ref("name")],"Confirm Name does not match")}),b=o.object({name:o.string(),confirmName:o.string().required("re-enter name").oneOf([o.ref("name")],"Confirm Name does not match"),newName:o.string().required("enter new name").matches(/^[a-zA-Z0-9_]+$/,{message:"input letters, numbers, and underscore only",excludeEmptyString:!0}).min(1,"new name too short").max(50,"new name too long")}),v={name:""},w=function(e){return{name:e,confirmName:""}},h=function(e){return{name:e,confirmName:"",newName:""}};n.a=function(e){var n=e.title,t=e.content,a=e.targetName,o=e.category,d=e.dialogProps;return r.a.createElement(c.a,d,r.a.createElement(m.a,{id:"dialog-title"},n),r.a.createElement(l.a,null,"add"===o||"delete"===o||"rename"===o?r.a.createElement(r.a.Fragment,null,"delete"===o?r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,t),r.a.createElement(s.a,null,"Please type in the name of the target to confirm")):null,r.a.createElement(i.a,{validationSchema:"add"===o?x:"rename"===o?b:"delete"===o?p:{},initialValues:"add"===o?v:"rename"===o?h(a):"delete"===o?w(a):{},render:function(n){return r.a.createElement(g,Object.assign({},e,n))}})):"notification"===o?r.a.createElement(s.a,null,t):null))}},235:function(e,n,t){"use strict";var a=t(15),r=t(6),i=t(0),o=t.n(i),c=(t(5),t(45)),m=t(138),l=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=parseFloat(e);return"".concat(t/n).concat(String(e).replace(String(t),"")||"px")}var u=o.a.forwardRef(function(e,n){var t=e.alignContent,i=void 0===t?"stretch":t,m=e.alignItems,l=void 0===m?"stretch":m,s=e.classes,d=e.className,u=e.component,f=void 0===u?"div":u,g=e.container,x=void 0!==g&&g,p=e.direction,b=void 0===p?"row":p,v=e.item,w=void 0!==v&&v,h=e.justify,N=void 0===h?"flex-start":h,y=e.lg,j=void 0!==y&&y,E=e.md,C=void 0!==E&&E,S=e.sm,O=void 0!==S&&S,z=e.spacing,W=void 0===z?0:z,B=e.wrap,F=void 0===B?"wrap":B,I=e.xl,M=void 0!==I&&I,k=e.xs,q=void 0!==k&&k,P=e.zeroMinWidth,T=void 0!==P&&P,D=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),G=Object(c.a)(s.root,d,x&&[s.container,0!==W&&s["spacing-xs-".concat(String(W))]],w&&s.item,T&&s.zeroMinWidth,"row"!==b&&s["direction-xs-".concat(String(b))],"wrap"!==F&&s["wrap-xs-".concat(String(F))],"stretch"!==l&&s["align-items-xs-".concat(String(l))],"stretch"!==i&&s["align-content-xs-".concat(String(i))],"flex-start"!==N&&s["justify-xs-".concat(String(N))],!1!==q&&s["grid-xs-".concat(String(q))],!1!==O&&s["grid-sm-".concat(String(O))],!1!==C&&s["grid-md-".concat(String(C))],!1!==j&&s["grid-lg-".concat(String(j))],!1!==M&&s["grid-xl-".concat(String(M))]);return o.a.createElement(f,Object(r.a)({className:G,ref:n},D))});var f=Object(m.a)(function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,n){var t={};return l.forEach(function(a){var r=e.spacing(a);0!==r&&(t["spacing-".concat(n,"-").concat(a)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})}),t}(e,"xs"),{},e.breakpoints.keys.reduce(function(n,t){return function(e,n,t){var a={};s.forEach(function(e){var n="grid-".concat(t,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[n]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[n]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[n]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===t?Object(r.a)(e,a):e[n.breakpoints.up(t)]=a}(n,e,t),n},{}))},{name:"MuiGrid"})(u);n.a=f},701:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(22),o=t(33),c=t(18),m=t(160),l=Object(a.lazy)(function(){return Promise.all([t.e(3),t.e(17)]).then(t.bind(null,634))}),s=Object(a.lazy)(function(){return Promise.all([t.e(3),t.e(18)]).then(t.bind(null,641))});n.default=function(e){var n=Object(o.c)(),t=Object(o.d)(function(e){return e.notification});return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{category:"notification",title:t.title,content:t.content,dialogProps:{open:""!==t.title&&""!==t.content,onClose:function(){return n(Object(c.d)())}}}),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/:project/:entity/add",component:l}),r.a.createElement(i.b,{path:"/:project/:entity/:document",component:s})))}}}]);
//# sourceMappingURL=14.93e22dff.chunk.js.map