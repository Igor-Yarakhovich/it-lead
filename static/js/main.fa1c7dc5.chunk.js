(this["webpackJsonpit-lead"]=this["webpackJsonpit-lead"]||[]).push([[0],{33:function(e,t,a){},34:function(e,t,a){},4:function(e,t,a){e.exports={container:"table_container__19uPB",mathParams:"table_mathParams__3lP3L",value:"table_value__1_Dqv"}},60:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),i=a.n(r),u=(a(33),a(3)),d=a(28),s=(a(34),a(4)),o=a.n(s),l=a(1),j=function(e){return Object(l.jsxs)("div",{className:o.a.container,children:[Object(l.jsx)("div",{className:o.a.mathParams,children:"Mean"}),Object(l.jsx)("div",{className:o.a.value,children:e.arithmeticMean}),Object(l.jsx)("div",{className:o.a.mathParams,children:"Median"}),Object(l.jsx)("div",{className:o.a.value,children:e.median}),Object(l.jsx)("div",{className:o.a.mathParams,children:"StdDev"}),Object(l.jsx)("div",{className:o.a.value,children:e.stdDev}),Object(l.jsx)("div",{className:o.a.mathParams,children:"Mode"}),Object(l.jsx)("div",{className:o.a.value,children:e.mode})]})},m=a(26),b=a(7),f=a.n(b),h=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],r=a[1],i="".concat(f.a.button," ").concat(f.a.default);return Object(l.jsxs)("div",{className:f.a.field,children:[Object(l.jsx)("input",{type:"number",value:c,onChange:function(e){r(e.currentTarget.value)},className:f.a.InputClassName}),Object(l.jsx)("button",{className:i,onClick:function(){e.onChange(+c),r("")},disabled:""===c,children:"Click"})]})},O=a(5),v=a(27),N=a(15),_=a.n(N),x={data:[],arithmeticMean:null,median:null,stdDev:null,mode:null},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ARITHMETIC_MEAN":return Object(u.a)(Object(u.a)({},e),{},{arithmeticMean:(e.data.reduce((function(e,t){return e+t}),0)/e.data.length).toFixed(6)});case"MEDIAN":return Object(u.a)(Object(u.a)({},e),{},{median:e.data.slice().sort((function(e,t){return e-t}))[Math.floor(e.data.length/2)].toFixed(6)});case"STANDARD DEVIATION":var a=Object(u.a)({},e),n=a.data.reduce((function(e,t){return e+t}),0)/a.data.length;return a.stdDev=Math.sqrt(a.data.reduce((function(e,t){return e.concat(Math.pow(t-n,2))}),[]).reduce((function(e,t){return e+t}),0)/(a.data.length-1)).toFixed(6),a;case"MODE":var c,r=Object(u.a)({},e);return r.mode=null===(c=r.data.reduce((function(e,t){var a=t in e.numMap?++e.numMap[t]:e.numMap[t]=1;return a>e.modeFreq&&a>1&&(e.modeFreq=a,e.mode=t),e}),{mode:null,modeFreq:0,numMap:{}}).mode)||void 0===c?void 0:c.toPrecision(8),r;case"ADD_VALUE":return Object(u.a)(Object(u.a)({},e),{},{data:[].concat(Object(v.a)(e.data),[t.value])});case"SET_DATA":return Object(u.a)(Object(u.a)({},e),{},{data:t.data});default:return e}},g=function(e){return{type:"ARITHMETIC_MEAN",reducerName:e}},M=function(e){return{type:"MEDIAN",reducerName:e}},D=function(e){return{type:"STANDARD DEVIATION",reducerName:e}},A=function(e){return{type:"MODE",reducerName:e}},E=function(e,t){return{type:"ADD_VALUE",value:e,reducerName:t}},C=function(e,t){return{type:"SET_DATA",data:e,reducerName:t}},I=function(e){_.a.get("data-1234.json").then((function(t){e(C(t.data.data,P))})).catch((function(e){console.log(e)}))},T=function(e){_.a.get("data-4321.json").then((function(t){e(C(t.data.data,y))})).catch((function(e){console.log(e)}))},P="1234",y="4321";var F=function(){var e=Object(O.c)((function(e){return e.mathValue1234})),t=e.arithmeticMean,a=e.median,c=e.stdDev,r=e.mode,i=e.data,s=Object(O.c)((function(e){return e.mathValue4321})),o=s.data,m=Object(d.a)(s,["data"]),b=Object(O.b)();return Object(n.useEffect)((function(){b(I),b(T)}),[b]),Object(n.useEffect)((function(){i.length>0&&(b(g(P)),b(M(P)),b(D(P)),b(A(P)))}),[b,i]),Object(n.useEffect)((function(){o.length>0&&(b(g(y)),b(M(y)),b(D(y)),b(A(y)))}),[b,o]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{className:"Heading",children:"IT-Lead React Challenge"}),Object(l.jsxs)("div",{className:"Container",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{arithmeticMean:t,median:a,stdDev:c,mode:r}),Object(l.jsx)(h,{onChange:function(e){b(E(e,P))}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(j,Object(u.a)({},m)),Object(l.jsx)(h,{onChange:function(e){b(E(e,y))}})]})]})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,61)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},V=a(12),w=a(25);function k(e,t){return function(a,n){return n.reducerName===t||void 0===a?e(a,n):a}}var L=Object(V.b)({mathValue1234:k(p,P),mathValue4321:k(p,y)}),q=Object(V.c)(L,Object(V.a)(w.a));window.store=q,i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(O.a,{store:q,children:Object(l.jsx)(F,{})})}),document.getElementById("root")),S()},7:function(e,t,a){e.exports={field:"field_field__1jePS",InputClassName:"field_InputClassName__3ZZAa",default:"field_default__12who",button:"field_button__3Mfso",blink:"field_blink__2_Vy1"}}},[[60,1,2]]]);
//# sourceMappingURL=main.fa1c7dc5.chunk.js.map