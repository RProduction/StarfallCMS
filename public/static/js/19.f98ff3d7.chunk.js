(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{228:function(e,n,t){"use strict";var a=t(0),o=t.n(a),c=t(699),i=t(298),r=t.n(i);t(299),t(300),t(301);n.a=function(e){var n=e.data,t=e.onChange,a=e.onValidation,i=e.readonly,s=e.minLines,u=e.fontSize;return o.a.createElement(c.a,{item:!0,container:!0,xs:12},o.a.createElement(r.a,{placeholder:"",mode:"json",theme:"github",name:"json-editor",onChange:t,onValidate:a,width:"100%",minLines:s,maxLines:1/0,fontSize:u,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:n,enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!1,showLineNumbers:!0,tabSize:4,wrapEnabled:!0,readOnly:i,editorProps:{$blockScrolling:1/0}}))}},648:function(e,n,t){"use strict";t.r(n);var a=t(15),o=t.n(a),c=t(26),i=t(64),r=t(0),s=t.n(r),u=t(23),l=t(699),d=t(361),m=t(163),b=t.n(m),p=t(35),f=t(27),h=t(19),g=t(268),j=t(228),O=b()(function(e){return{root:{"& > *":{marginTop:e.spacing(.5),marginBottom:e.spacing(.5)}}}});n.default=function(e){var n=O(),t=Object(p.c)(),a=e.match.params.document,m=Object(p.d)(function(e){return Object(g.a)(e,a)}),b=Object(r.useState)("{}"),w=Object(i.a)(b,2),v=w[0],S=w[1],E=Object(r.useState)(!1),y=Object(i.a)(E,2),L=y[0],k=y[1];return Object(r.useEffect)(function(){if(m){var e=JSON.stringify(m.data,null,4);S(e),console.log(e)}},[m]),m?s.a.createElement(l.a,{container:!0,className:n.root,direction:"column"},s.a.createElement(j.a,{readonly:!1,minLines:20,fontSize:22,data:v,onChange:function(e){return S(e)},onValidation:function(e){return k(0===e.length)}}),s.a.createElement(l.a,{item:!0,component:d.a,xs:12,color:"secondary",variant:"contained",disabled:!L,onClick:Object(c.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.b.post("document/".concat(a,"/modify"),{data:JSON.parse(v)});case 3:t(Object(h.j)("Edit Document","Succeed editing document")),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t(Object(h.j)("Edit Document","Failed editing document, ".concat(e.t0)));case 9:case"end":return e.stop()}},e,null,[[0,6]])}))},"Modify")):s.a.createElement(u.a,{to:"/"})}}}]);
//# sourceMappingURL=19.f98ff3d7.chunk.js.map