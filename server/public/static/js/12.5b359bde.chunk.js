(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{134:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(181),o=a(157);t.a=function(e){return c.a.createElement(r.a,Object.assign({item:!0,component:o.a},e),e.children)}},137:function(e,t,a){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"a",function(){return n})},158:function(e,t,a){"use strict";var n=a(137),c=a(0),r=a.n(c),o=a(21),i=a(123),l=a(131),u=a(181),s=a(277),m=a(364),b=a(362),y=a(279),f=a(357);t.a=function(e){var t=e.keys,a=e.category,j=e.arrayKeys,d=e.arrayValues,O=Object(o.c)(),g=Object(c.useMemo)(l.d,[]),h=Object(o.d)(function(e){return g(e,t)});return r.a.createElement(u.a,{container:!0,item:!0,xs:12,alignItems:"center"},r.a.createElement(u.a,{item:!0,component:s.a,xs:4},t[t.length-1]),"boolean"===a?r.a.createElement(m.a,{checked:h,onChange:function(e){return O(Object(i.h)(t,e.target.checked))},value:t[t.length-1],inputProps:{"aria-label":"primary checkbox"}}):null,"integer"===a||"float"===a?r.a.createElement(u.a,{item:!0,component:b.a,xs:!0,value:h,step:"float"===a?"any":1,type:"number",onChange:function(e){return O(Object(i.h)(t,e.target.value))}}):null,"string"===a?r.a.createElement(u.a,{item:!0,component:b.a,xs:!0,value:h,multiline:!0,onChange:function(e){return O(Object(i.h)(t,e.target.value))}}):null,j&&d?r.a.createElement(y.a,{color:"inherit","aria-label":"Delete ".concat(t[t.length-1]),onClick:function(){var e=Object(n.a)(d);e.splice(t[t.length-1],1),O(Object(i.h)(j,e))},edge:"end"},r.a.createElement(f.a,null)):null)}},191:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(115);t.a=Object(r.a)(c.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},192:function(e,t,a){"use strict";var n=a(137),c=a(0),r=a.n(c),o=a(21),i=a(63),l=a(181),u=a(277),s=a(279),m=a(357),b=a(123),y=a(131),f=a(158),j=a(193),d=Object(i.a)(function(e){return{root:{marginLeft:e.spacing(3)}}});t.a=function e(t){var a=d(),i=t.keys,O=t.arrayValues,g=t.arrayKeys,h=Object(o.c)(),p=Object(c.useMemo)(y.b,[]),v=Object(o.d)(function(e){return p(e,i)});return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{container:!0,item:!0,xs:12,alignItems:"center"},r.a.createElement(l.a,{item:!0,component:u.a,xs:!0},i[i.length-1]),g&&O?r.a.createElement(s.a,{color:"inherit","aria-label":"Delete ".concat(i[i.length-1]),onClick:function(){var e=Object(n.a)(O);e.splice(i[i.length-1],1),h(Object(b.h)(g,e))},edge:"end"},r.a.createElement(m.a,null)):null),r.a.createElement(l.a,{container:!0,item:!0,xs:12,direction:"column",className:a.root},v.map(function(t){var a=t.key,c=t.type,o=[].concat(Object(n.a)(i),[a]);return"object"===c?r.a.createElement(e,{key:a,keys:o}):"array"===c?r.a.createElement(j.a,{key:a,keys:o}):r.a.createElement(f.a,{key:a,keys:o,category:c})})))}},193:function(e,t,a){"use strict";var n=a(137),c=a(0),r=a.n(c),o=a(21),i=a(63),l=a(181),u=a(277),s=a(279),m=a(191),b=a(357),y=a(123),f=a(131),j=a(158),d=a(192),O=Object(i.a)(function(e){return{root:{marginLeft:e.spacing(3)}}});t.a=function e(t){var a=O(),i=t.keys,g=t.arrayValues,h=t.arrayKeys,p=Object(o.c)(),v=Object(c.useMemo)(f.b,[]),E=Object(o.d)(function(e){return v(e,i)}),k=Object(c.useMemo)(f.d,[]),x=Object(o.d)(function(e){return k(e,i)});return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{container:!0,item:!0,xs:12,alignItems:"center"},r.a.createElement(l.a,{item:!0,component:u.a,xs:!0},i[i.length-1]),r.a.createElement(s.a,{color:"inherit","aria-label":"Add new field",onClick:function(){var e=E.type,t=[];"integer"===e?t=[].concat(Object(n.a)(x),[0]):"float"===e?t=[].concat(Object(n.a)(x),[0]):"string"===e?t=[].concat(Object(n.a)(x),[""]):"boolean"===e?t=[].concat(Object(n.a)(x),[!1]):"object"===e?t=[].concat(Object(n.a)(x),[{}]):"array"==e&&(t=[].concat(Object(n.a)(x),[[]])),p(Object(y.h)(i,t))},edge:"end"},r.a.createElement(m.a,null)),h&&g?r.a.createElement(s.a,{color:"inherit","aria-label":"Delete ".concat(i[i.length-1]),onClick:function(){var e=Object(n.a)(g);e.splice(i[i.length-1],1),p(Object(y.h)(h,e))},edge:"end"},r.a.createElement(b.a,null)):null),r.a.createElement(l.a,{container:!0,item:!0,className:a.root,xs:12},x.map(function(t,a){var c=E.type,o=[].concat(Object(n.a)(i),[a]);return"object"===c?r.a.createElement(d.a,{key:a,keys:o,arrayKeys:i,arrayValues:x}):"array"===c?r.a.createElement(e,{key:a,keys:o,arrayKeys:i,arrayValues:x}):r.a.createElement(j.a,{key:a,keys:o,category:c,arrayKeys:i,arrayValues:x})})))}},227:function(e,t,a){"use strict";a.d(t,"b",function(){return c}),a.d(t,"a",function(){return r});var n=a(25),c=["integer","float","string","boolean","object","array"],r=function e(t,a){Object.entries(t).forEach(function(c){var r=Object(n.a)(c,2),o=r[0],i=r[1];"integer"===i?a[o]=0:"float"===i?a[o]=0:"string"===i?a[o]="":"boolean"===i?a[o]=!1:i.constructor===Object?(a[o]={},e(t[o],a[o])):i.constructor===Array&&(a[o]=[])})}},357:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(115);t.a=Object(r.a)(c.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},613:function(e,t,a){"use strict";a.r(t);var n=a(35),c=a.n(n),r=a(40),o=a(25),i=a(0),l=a.n(i),u=a(21),s=a(63),m=a(181),b=a(134),y=a(22),f=a(131),j=a(123),d=a(192),O=a(193),g=a(158),h=a(150),p=a(41),v=a(227),E=Object(s.a)(function(e){return{root:{"& > *":{marginTop:e.spacing(.5),marginBottom:e.spacing(.5)}}}});t.default=function(e){var t=E(),a=Object(u.c)(),n=e.match.params.entity,s=Object(i.useMemo)(h.c,[]),k=Object(u.d)(function(e){return s(e,n)}),x=Object(i.useMemo)(f.b,[]),w=Object(u.d)(function(e){return x(e)}),A=Object(u.d)(f.a),M=Object(i.useState)(!1),V=Object(o.a)(M,2),C=V[0],D=V[1];return Object(i.useEffect)(function(){if(k){var e={};Object(v.a)(k.schema,e),a(Object(j.f)(k.schema,e)),D(!0)}},[k]),C?l.a.createElement(m.a,{container:!0,className:t.root,direction:"column"},l.a.createElement(m.a,{container:!0,item:!0,direction:"column",xs:12,sm:6,md:8,lg:6},w.map(function(e){var t=e.key,a=e.type,n=[t];return"object"===a?l.a.createElement(d.a,{key:t,keys:n}):"array"===a?l.a.createElement(O.a,{key:t,keys:n}):l.a.createElement(g.a,{key:t,keys:n,category:a})})),l.a.createElement(b.a,{color:"secondary",variant:"contained",xs:12,onClick:Object(r.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("document/".concat(k.id),{data:A});case 3:a(Object(y.k)("Add Document","Succeed adding new document")),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a(Object(y.k)("Add Document","Failed adding new document, ".concat(e.t0)));case 9:case"end":return e.stop()}},e,null,[[0,6]])}))},"Add")):null}}}]);
//# sourceMappingURL=12.5b359bde.chunk.js.map