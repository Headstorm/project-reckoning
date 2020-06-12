(this.webpackJsonpawok=this.webpackJsonpawok||[]).push([[4],{293:function(e,t,n){"use strict";n.r(t);var a=n(76),r=n(75),c=n(14),o=n(7),u=n(0),l=n.n(u),i=n(156),s=n(295),m=n(110),f=n(296),b=n(297),p=n(146),v=n(66),g=n.n(v),O=n(294),d=n(8),h=n(15),j=n(17),y=n(196),C=n(5);function E(){var e=Object(o.a)(["\n  display: inline !important;\n"]);return E=function(){return e},e}function S(){var e=Object(o.a)(["\n  position: inherit !important;\n  margin-right: auto;\n  margin-left: 2rem;\n"]);return S=function(){return e},e}function w(){var e=Object(o.a)(["\n  align-self: flex-end;\n  margin: 0rem 2rem 1rem 1rem !important;\n  width: 8rem;\n  background-color: #288bea !important;\n  color: #ffffff !important;\n"]);return w=function(){return e},e}function x(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n\n  canvas {\n    max-height: 40rem !important;\n    max-width: 40rem !important;\n  }\n"]);return x=function(){return e},e}function D(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n"]);return D=function(){return e},e}function k(){var e=Object(o.a)(["\n  color: #1380e2 !important;\n"]);return k=function(){return e},e}function R(){var e=Object(o.a)(["\n  width: 45% !important;\n  margin-right: 1rem !important;\n"]);return R=function(){return e},e}function H(){var e=Object(o.a)(["\n  margin-bottom: 1rem !important;\n"]);return H=function(){return e},e}function I(){var e=Object(o.a)(["\n  margin: 3rem 2rem 0rem 2rem;\n"]);return I=function(){return e},e}function M(){var e=Object(o.a)(["\n  display: flex;\n  flex: 1 0;\n  flex-direction: column;\n  justify-content: space-between;\n"]);return M=function(){return e},e}var P=d.a.div(M()),L=d.a.div(I()),N=Object(d.a)(i.a)(H()),W=Object(d.a)(i.a)(R()),T=Object(d.a)(s.a)(k()),Y=d.a.div(D()),A=d.a.div(x()),z=Object(d.a)(m.a)(w()),J=Object(d.a)(f.a)(S()),_=Object(d.a)(b.a)(E()),B=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],F=function(e){return g()(new Date(e),"HH:mm").format("h a").split(" ")},K=function(e,t){var n=function(e,t){return g()("".concat(e," ").concat(t),"h a").format("HH:mm")}(e,t),a=g()(new Date).format("L"),r=g()("".concat(a," ").concat(n),"MM/DD/YYYY HH:mm").format();return g()(r).toDate().toISOString()};t.default=Object(h.f)((function(e){var t=Object(u.useState)({companyName:"",occupancyRule:"",currentRules:"",successMessage:"",reservationClearOut:"12"}),n=Object(c.a)(t,2),o=n[0],i=n[1],s=Object(u.useState)("am"),m=Object(c.a)(s,2),f=m[0],b=m[1],v=Object(u.useState)(!1),g=Object(c.a)(v,2),d=g[0],h=g[1],E=JSON.parse(localStorage.getItem(C.b.CHECK_IN_HISTORY)).slice(0,7).reverse(),S=Object(u.useState)(!1),w=Object(c.a)(S,2),x=w[0],D=w[1],k=E.map((function(e){return e.positiveCount+e.negativeCount})),R=Object(u.useState)(!0),H=Object(c.a)(R,2),I=H[0],M=H[1],q={labels:E.map((function(e){return"".concat(B[new Date(e.Date).getDay()]," ").concat(new Date(e.Date).getMonth(),"/").concat(new Date(e.Date).getDate())})),datasets:[{label:"Attendance",fill:!1,lineTension:.5,backgroundColor:"#288bea",borderColor:"#288bea",borderWidth:3,data:k}]};Object(u.useEffect)((function(){Object(j.c)().then((function(e){return e.json()})).then((function(e){i(Object(r.a)({},e,{reservationClearOut:F(e.reservationClearOut)[0]})),b(F(e.reservationClearOut)[1])})).catch((function(e){console.log(e)}))}),[]);var G=function(e){i(Object(r.a)({},o,Object(a.a)({},e.target.getAttribute("name"),e.target.value)))};return l.a.createElement(P,null,l.a.createElement(L,null,l.a.createElement("form",null,l.a.createElement(N,{InputLabelProps:{shrink:!0},fullWidth:!0,type:"text",placeholder:"e.g. Headstorm",name:"companyName",value:o.companyName,onChange:function(e){return G(e)},label:"Company Name"}),l.a.createElement(N,{InputLabelProps:{shrink:!0},type:"number",name:"occupancyRule",placeholder:"e.g. 25",onChange:function(e){return G(e)},value:o.occupancyRule,fullWidth:!0,label:"Occupancy Rule"}),l.a.createElement(N,{InputLabelProps:{shrink:!0},type:"text",name:"currentRules",placeholder:"e.g. Rule 1, Rule 2, ...",onChange:function(e){return G(e)},value:o.currentRules,fullWidth:!0,label:"Current Rules"}),l.a.createElement(N,{InputLabelProps:{shrink:!0},type:"text",fullWidth:!0,placeholder:"e.g. Have a good day!",onChange:function(e){return G(e)},name:"successMessage",value:o.successMessage,label:"Success Message"}),l.a.createElement(W,{type:"number",name:"reservationClearOut",label:"Reservation Reset",onChange:function(e){return G(e)},onBlur:function(e){return function(e){h(e.target.value<=1||e.target.value>=12)}(e)},error:d,helperText:!d||"must be 1-12",value:o.reservationClearOut,InputProps:{inputProps:{min:0,max:12}},InputLabelProps:{shrink:!0}}),l.a.createElement(_,{name:"amPm",row:!0,value:f,onChange:function(e){return function(e){b(e.target.value)}(e)}},l.a.createElement(p.a,{value:"am",control:l.a.createElement(T,null),label:"AM"}),l.a.createElement(p.a,{value:"pm",control:l.a.createElement(T,null),label:"PM"})))),l.a.createElement(A,null,l.a.createElement(y.a,{data:q,options:{title:{display:!0,text:"Attendance for Past Seven Days",fontSize:20},legend:{display:!1}}})),l.a.createElement(Y,null,l.a.createElement(J,{autoHideDuration:3e3,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:x,onClose:function(e,t){"clickaway"!==t&&D(!1)}},I?l.a.createElement(O.a,{severity:"success"},"Saved"):l.a.createElement(O.a,{severity:"error"},"Error saving")),l.a.createElement(z,{size:"large",variant:"contained",onClick:function(){return Object(j.f)(Object(r.a)({},o,{reservationClearOut:new Date(K(o.reservationClearOut,f))})).catch((function(e){console.log(e),M(!1)})),void D(!0)}},"Save")))}))}}]);
//# sourceMappingURL=4.5f417e02.chunk.js.map