(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{291:function(e,n,t){"use strict";var a=t(0),c=t.n(a),o=t(235),i=t(384),r=t.n(i);t(390),t(391),t(392);n.a=function(e){var n=e.data,t=e.onChange,a=e.onValidation;return c.a.createElement(o.a,{item:!0,container:!0,xs:12},c.a.createElement(r.a,{placeholder:"",mode:"json",theme:"github",name:"json-editor",onChange:t,onValidate:a,width:"100%",minLines:20,maxLines:1/0,fontSize:22,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:n,enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!1,showLineNumbers:!0,tabSize:4,editorProps:{$blockScrolling:1/0}}))}},634:function(e,n,t){"use strict";t.r(n);var a=t(13),c=t.n(a),o=t(25),i=t(58),r=t(0),u=t.n(r),s=t(22),d=t(235),l=t(352),m=t(161),p=t.n(m),b=t(26),h=t(33),g=t(18),j=t(203),w=t(291),f=p()(function(e){return{root:{"& > *":{marginTop:e.spacing(.5),marginBottom:e.spacing(.5)}}}});n.default=function(e){var n=f(),t=Object(h.c)(),a=e.match.params,m=a.project,p=a.entity,v=Object(r.useMemo)(j.c,[]),O=Object(h.d)(function(e){return v(e,m,p)}),S=Object(r.useState)("{}"),k=Object(i.a)(S,2),x=k[0],A=k[1],E=Object(r.useState)(!1),L=Object(i.a)(E,2),C=L[0],J=L[1];return O?u.a.createElement(d.a,{container:!0,className:n.root,direction:"column"},u.a.createElement(w.a,{data:x,onChange:function(e){return A(e)},onValidation:function(e){return J(0===e.length)}}),u.a.createElement(d.a,{item:!0,component:l.a,color:"secondary",variant:"contained",xs:12,disabled:!C,onClick:Object(o.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("document/".concat(O.id),{data:JSON.parse(x)});case 3:t(Object(g.j)("Add Document","Succeed adding new document")),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t(Object(g.j)("Add Document","Failed adding new document, ".concat(e.t0)));case 9:case"end":return e.stop()}},e,null,[[0,6]])}))},"Add")):u.a.createElement(s.a,{to:"/"})}}}]);
//# sourceMappingURL=18.7648e4a3.chunk.js.map