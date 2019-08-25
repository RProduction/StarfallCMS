(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{134:function(e,a,n){"use strict";var r=n(0),t=n.n(r),o=n(181),s=n(157);a.a=function(e){return t.a.createElement(o.a,Object.assign({item:!0,component:s.a},e),e.children)}},180:function(e,a,n){"use strict";var r=n(0),t=n.n(r),o=n(681),s=n(666);a.a=function(e){return t.a.createElement(o.a,Object.assign({minHeight:"100vh",component:s.a,maxWidth:"xl"},e),e.children)}},237:function(e,a,n){"use strict";var r=n(0),t=n.n(r),o=n(180),s=n(63),i=n(181),c=n(159),u=Object(s.a)(function(e){return{root:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:e.palette.background.dark.dark}}});a.a=function(e){var a=u();return t.a.createElement(o.a,null,t.a.createElement(i.a,{container:!0,alignItems:"center",justify:"center",className:a.root},t.a.createElement(c.a,e)))}},668:function(e,a,n){"use strict";n.r(a);var r=n(35),t=n.n(r),o=n(40),s=n(25),i=n(0),c=n.n(i),u=n(237),m=n(17),d=n(63),l=n(274),p=n(181),f=n(362),w=n(236),b=n(21),g=n(18),h=n(41),v=n(151),E=n(134),x=["Manager","User"],y=["User"],j=["Creator"],O=Object(d.a)(function(e){return{root:{padding:e.spacing(2.5),"& > div":{marginTop:e.spacing(1),marginBottom:e.spacing(1)}},btn:{backgroundColor:e.palette.primary}}}),k=c.a.forwardRef(function(e,a){return c.a.createElement(l.a,Object.assign({component:"form"},e,{innerRef:a}))}),P=function(e){var a=O(),n=Object(b.d)(function(e){return e.authStatus}),r=Object(i.useState)([]),u=Object(s.a)(r,2),d=u[0],l=u[1],v=Object(i.useState)(""),P=Object(s.a)(v,2),S=P[0],C=P[1],q=Object(i.useState)(!1),T=Object(s.a)(q,2),U=T[0],B=T[1];Object(i.useEffect)(function(){switch(n){case g.b:l(x);break;case g.d:l(y);break;case g.c:l(j)}},[n]),Object(i.useEffect)(function(){d!==[]&&void 0!==d[0]&&C(d[0])},[d]);var A=e.values,z=A.username,J=A.password,N=A.confirmPassword,R=e.errors,V=e.touched,Z=e.handleChange,$=e.isValid,D=e.setFieldTouched,F=function(e,a){a.persist(),Z(a),D(e,!0,!1)};return U?c.a.createElement(m.a,{to:"/signin"}):c.a.createElement(p.a,{component:k,container:!0,item:!0,xs:8,sm:6,className:a.root,elevation:3,onSubmit:function(){var e=Object(o.a)(t.a.mark(function e(a){return t.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,h.a.post("user",{username:z,password:J,authority:S});case 4:B(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[1,7]])}));return function(a){return e.apply(this,arguments)}}()},c.a.createElement(p.a,{item:!0,xs:12,component:f.a,required:!0,id:"username",name:"username",label:"Username",onChange:F.bind(null,"username"),value:z,variant:"outlined",margin:"dense",helperText:V.username?R.username:"",error:V.username&&Boolean(R.username)}),c.a.createElement(p.a,{item:!0,xs:12,component:f.a,required:!0,id:"password",name:"password",label:"Password",type:"password",onChange:F.bind(null,"password"),value:J,variant:"outlined",margin:"dense",helperText:V.password?R.password:"",error:V.password&&Boolean(R.password)}),c.a.createElement(p.a,{item:!0,xs:12,component:f.a,required:!0,id:"confirmPassword",name:"confirmPassword",label:"Confirm Password",type:"password",onChange:F.bind(null,"confirmPassword"),value:N,variant:"outlined",margin:"dense",helperText:V.confirmPassword?R.confirmPassword:"",error:V.confirmPassword&&Boolean(R.confirmPassword)}),c.a.createElement(p.a,{item:!0,xs:12,component:f.a,required:!0,select:!0,id:"authority",label:"Authority",helperText:"Select your authority",margin:"dense",value:S,variant:"outlined",onChange:function(e){C(e.target.value)}},d.map(function(e){return c.a.createElement(w.a,{key:e,value:e},e)})),c.a.createElement(E.a,{type:"submit",disabled:!$,xs:12,variant:"contained",color:"secondary"},"Sign Up"))},S=v.object({username:v.string().required("enter username").matches(/^[a-zA-Z0-9]*$/,{message:"input letters and numbers only",excludeEmptyString:!0}).min(5,"username too short").max(30,"username too long"),password:v.string().required("enter password").matches(/^[a-zA-Z0-9]*$/,{message:"input letters and numbers only",excludeEmptyString:!0}).min(5,"password too short").max(30,"password too long"),confirmPassword:v.string().required("re-enter your password").oneOf([v.ref("password")],"password does not match")}),C={username:"Username12345",password:"",confirmPassword:""};a.default=function(){return c.a.createElement(u.a,{validationSchema:S,initialValues:C,render:function(e){return c.a.createElement(P,e)}})}}}]);
//# sourceMappingURL=17.ea1f941f.chunk.js.map