(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{158:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(168),o=t(163),c=t(694),s=t(695),m=t(696),l=t(697),u=t(396),d=t(352),f=t(235);var g=function(e){var n=e.request,t=e.btn,a=e.category,i=e.values,o=i.name,c=i.newName,s=i.confirmName,m=e.errors,l=e.touched,g=e.handleChange,p=e.isValid,x=e.setFieldTouched,b=function(e,n){n.persist(),g(n),x(e,!0,!1)};return r.a.createElement(f.a,{container:!0,component:"form",spacing:1,onSubmit:function(e){e.preventDefault(),n({name:o,newName:c,confirmName:s})}},"add"===a?r.a.createElement(f.a,{component:u.a,item:!0,xs:12,id:"name",name:"name",label:"Name",onChange:b.bind(null,"name"),value:o,helperText:l.name?m.name:"",error:l.name&&Boolean(m.name)}):"delete"===a?r.a.createElement(f.a,{component:u.a,item:!0,xs:12,id:"confirmName",name:"confirmName",label:"Confirm Name",onChange:b.bind(null,"confirmName"),value:s,helperText:l.confirmName?m.confirmName:"",error:l.confirmName&&Boolean(m.confirmName)}):"rename"===a?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{component:u.a,item:!0,xs:12,id:"newName",name:"newName",label:"New Name",onChange:b.bind(null,"newName"),value:c,helperText:l.newName?m.newName:"",error:l.newName&&Boolean(m.newName)}),r.a.createElement(f.a,{component:u.a,item:!0,xs:12,id:"confirmName",name:"confirmName",label:"Confirm Name",onChange:b.bind(null,"confirmName"),value:s,helperText:l.confirmName?m.confirmName:"",error:l.confirmName&&Boolean(m.confirmName)})):null,r.a.createElement(f.a,{item:!0,xs:12,component:d.a,type:"submit",disabled:!p,size:"large"},t))},p=o.object({name:o.string().required("enter name").matches(/^[a-zA-Z0-9_]+$/,{message:"input letters, numbers, and underscore only",excludeEmptyString:!0}).min(1,"name too short").max(50,"name too long")}),x=o.object({name:o.string(),confirmName:o.string().required("re-enter name").matches(/^[a-z0-9_]*$/i,{message:"input letters, numbers, and underscore only",excludeEmptyString:!0}).oneOf([o.ref("name")],"Confirm Name does not match")}),b=o.object({name:o.string(),confirmName:o.string().required("re-enter name").oneOf([o.ref("name")],"Confirm Name does not match"),newName:o.string().required("enter new name").matches(/^[a-zA-Z0-9_]+$/,{message:"input letters, numbers, and underscore only",excludeEmptyString:!0}).min(1,"new name too short").max(50,"new name too long")}),v={name:""},w=function(e){return{name:e,confirmName:""}},h=function(e){return{name:e,confirmName:"",newName:""}};n.a=function(e){var n=e.title,t=e.content,a=e.targetName,o=e.category,u=e.dialogProps;return r.a.createElement(c.a,u,r.a.createElement(s.a,{id:"dialog-title"},n),r.a.createElement(m.a,null,"add"===o||"delete"===o||"rename"===o?r.a.createElement(r.a.Fragment,null,"delete"===o?r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,t),r.a.createElement(l.a,null,"Please type in the name of the target to confirm")):null,r.a.createElement(i.a,{validationSchema:"add"===o?p:"rename"===o?b:"delete"===o?x:{},initialValues:"add"===o?v:"rename"===o?h(a):"delete"===o?w(a):{},render:function(n){return r.a.createElement(g,Object.assign({},e,n))}})):"notification"===o?r.a.createElement(l.a,null,t):null))}},205:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(690),o=t(702);n.a=function(e){return r.a.createElement(o.a,Object.assign({minHeight:"100vh",component:i.a,maxWidth:"xl"},e),e.children)}},235:function(e,n,t){"use strict";var a=t(16),r=t(6),i=t(0),o=t.n(i),c=(t(5),t(45)),s=t(138),m=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=parseFloat(e);return"".concat(t/n).concat(String(e).replace(String(t),"")||"px")}var d=o.a.forwardRef(function(e,n){var t=e.alignContent,i=void 0===t?"stretch":t,s=e.alignItems,m=void 0===s?"stretch":s,l=e.classes,u=e.className,d=e.component,f=void 0===d?"div":d,g=e.container,p=void 0!==g&&g,x=e.direction,b=void 0===x?"row":x,v=e.item,w=void 0!==v&&v,h=e.justify,N=void 0===h?"flex-start":h,E=e.lg,y=void 0!==E&&E,j=e.md,C=void 0!==j&&j,S=e.sm,O=void 0!==S&&S,z=e.spacing,W=void 0===z?0:z,k=e.wrap,B=void 0===k?"wrap":k,q=e.xl,T=void 0!==q&&q,I=e.xs,F=void 0!==I&&I,M=e.zeroMinWidth,$=void 0!==M&&M,D=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),A=Object(c.a)(l.root,u,p&&[l.container,0!==W&&l["spacing-xs-".concat(String(W))]],w&&l.item,$&&l.zeroMinWidth,"row"!==b&&l["direction-xs-".concat(String(b))],"wrap"!==B&&l["wrap-xs-".concat(String(B))],"stretch"!==m&&l["align-items-xs-".concat(String(m))],"stretch"!==i&&l["align-content-xs-".concat(String(i))],"flex-start"!==N&&l["justify-xs-".concat(String(N))],!1!==F&&l["grid-xs-".concat(String(F))],!1!==O&&l["grid-sm-".concat(String(O))],!1!==C&&l["grid-md-".concat(String(C))],!1!==y&&l["grid-lg-".concat(String(y))],!1!==T&&l["grid-xl-".concat(String(T))]);return o.a.createElement(f,Object(r.a)({className:A,ref:n},D))});var f=Object(s.a)(function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,n){var t={};return m.forEach(function(a){var r=e.spacing(a);0!==r&&(t["spacing-".concat(n,"-").concat(a)]={margin:"-".concat(u(r,2)),width:"calc(100% + ".concat(u(r),")"),"& > $item":{padding:u(r,2)}})}),t}(e,"xs"),{},e.breakpoints.keys.reduce(function(n,t){return function(e,n,t){var a={};l.forEach(function(e){var n="grid-".concat(t,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[n]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[n]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[n]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===t?Object(r.a)(e,a):e[n.breakpoints.up(t)]=a}(n,e,t),n},{}))},{name:"MuiGrid"})(d);n.a=f},279:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(235),o=t(161),c=t.n(o),s=t(168),m=t(205),l=c()(function(e){return{root:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:e.palette.background.dark.dark}}});n.a=function(e){var n=l();return r.a.createElement(m.a,null,r.a.createElement(i.a,{container:!0,alignItems:"center",justify:"center",className:n.root},r.a.createElement(s.a,e)))}},281:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(235),o=t(352);n.a=function(e){return r.a.createElement(i.a,Object.assign({item:!0,component:o.a},e),e.children)}},691:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(22),o=t(396),c=t(235),s=t(297),m=t(161),l=t.n(m),u=t(33),d=t(163),f=t(279),g=t(60),p=t(18),x=t(281),b=t(158),v=l()(function(e){return{root:{padding:e.spacing(2.5),"& > div":{marginTop:e.spacing(1),marginBottom:e.spacing(1)}},btn:{backgroundColor:e.palette.primary}}}),w=r.a.forwardRef(function(e,n){return r.a.createElement(s.a,Object.assign({component:"form"},e,{innerRef:n}))});function h(e){var n=v(),t=Object(u.c)(),a=Object(u.d)(function(e){return e.notification}),s=Object(u.d)(function(e){return e.authStatus}),m=e.values,l=m.username,d=m.password,f=e.errors,h=e.touched,N=e.handleChange,E=e.isValid,y=e.setFieldTouched,j=function(e,n){n.persist(),N(n),y(e,!0,!1)};return s===g.g?r.a.createElement(i.a,{to:"/signup"}):s===g.d||s===g.j?r.a.createElement(i.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{category:"notification",title:a.title,content:a.content,dialogProps:{open:""!==a.title&&""!==a.content,onClose:function(){return t(Object(p.d)())}}}),r.a.createElement(c.a,{component:w,container:!0,item:!0,xs:8,sm:6,className:n.root,elevation:3,onSubmit:function(e){e.preventDefault(),t(Object(g.a)(l,d))}},r.a.createElement(c.a,{item:!0,xs:12,component:o.a,required:!0,id:"username",name:"username",label:"Username",onChange:j.bind(null,"username"),value:l,variant:"outlined",margin:"dense",helperText:h.username?f.username:"",error:h.username&&Boolean(f.username)}),r.a.createElement(c.a,{item:!0,xs:12,component:o.a,required:!0,id:"password",name:"password",label:"Password",type:"password",onChange:j.bind(null,"password"),value:d,variant:"outlined",margin:"dense",helperText:h.password?f.password:"",error:h.password&&Boolean(f.password)}),r.a.createElement(x.a,{type:"submit",disabled:!E,xs:12,color:"secondary",variant:"contained"},"Sign In")))}var N=d.object({username:d.string().required("enter username").matches(/^[a-zA-Z0-9]*$/,{message:"input letters and numbers only",excludeEmptyString:!0}),password:d.string().required("enter password").matches(/^[a-zA-Z0-9]*$/,{message:"input letters and numbers only",excludeEmptyString:!0})}),E={username:"Username12345",password:""};n.default=function(){return r.a.createElement(f.a,{validationSchema:N,initialValues:E,render:function(e){return r.a.createElement(h,e)}})}}}]);
//# sourceMappingURL=10.3d587718.chunk.js.map