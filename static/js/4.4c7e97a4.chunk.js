(this["webpackJsonpproject-reckoning"]=this["webpackJsonpproject-reckoning"]||[]).push([[4],{275:function(e,t,n){"use strict";n.r(t);var a=n(159),r=n(176),c=n(15),o=n(5),u=n(0),l=n.n(u),i=n(134),s=n(98),m=n(277),f=n(276),p=n(6),b=n(13),g=n(21),d=n(177);function h(){var e=Object(o.a)(["\n  position: inherit !important;\n  margin-right: auto;\n  margin-left: 2rem;\n"]);return h=function(){return e},e}function v(){var e=Object(o.a)(["\n  align-self: flex-end;\n  margin: 0rem 2rem 1rem 1rem !important;\n  width: 8rem;\n  background-color: #288bea !important;\n  color: #ffffff !important;\n"]);return v=function(){return e},e}function j(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n\n  canvas {\n    max-height: 40rem !important;\n    max-width: 40rem !important;\n  }\n"]);return j=function(){return e},e}function O(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n"]);return O=function(){return e},e}function y(){var e=Object(o.a)(["\n  margin-bottom: 1rem !important;\n"]);return y=function(){return e},e}function C(){var e=Object(o.a)(["\n  margin: 3rem 2rem 0rem 2rem;\n"]);return C=function(){return e},e}function E(){var e=Object(o.a)(["\n  display: flex;\n  flex: 1 0;\n  flex-direction: column;\n  justify-content: space-between;\n"]);return E=function(){return e},e}var S=p.a.div(E()),k=p.a.div(C()),x=Object(p.a)(i.a)(y()),D=p.a.div(O()),w=p.a.div(j()),R=Object(p.a)(s.a)(v()),I=Object(p.a)(m.a)(h());t.default=Object(b.f)((function(e){var t=Object(u.useState)({companyName:"",occupancyRule:"",currentRules:"",successMessage:"",reservationClearOut:"00:00"}),n=Object(c.a)(t,2),o=n[0],i=n[1],s=JSON.parse(localStorage.getItem("checkInHistory")).slice(0,7).reverse(),m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],p=Object(u.useState)(!1),b=Object(c.a)(p,2),h=b[0],v=b[1],j=s.map((function(e){return e.positiveCount+e.negativeCount})),O=Object(u.useState)(!0),y=Object(c.a)(O,2),C=y[0],E=y[1],L={labels:s.map((function(e){return"".concat(m[new Date(e.Date).getDay()]," ").concat(new Date(e.Date).getMonth(),"/").concat(new Date(e.Date).getDate())})),datasets:[{label:"Attendance",fill:!1,lineTension:.5,backgroundColor:"#288bea",borderColor:"#288bea",borderWidth:3,data:j}]};Object(u.useEffect)((function(){Object(g.b)().then((function(e){return e.json()})).then((function(e){i(e)})).catch((function(e){console.log(e)}))}),[]);var M=function(e){i(Object(r.a)({},o,Object(a.a)({},e.target.getAttribute("name"),e.target.value)))};return l.a.createElement(S,null,l.a.createElement(k,null,l.a.createElement("form",null,l.a.createElement(x,{InputLabelProps:{shrink:!0},fullWidth:!0,type:"text",placeholder:"e.g. Headstorm",name:"companyName",value:o.companyName,onChange:function(e){return M(e)},label:"Company Name"}),l.a.createElement(x,{InputLabelProps:{shrink:!0},type:"number",name:"occupancyRule",placeholder:"e.g. 25",onChange:function(e){return M(e)},value:o.occupancyRule,fullWidth:!0,label:"Occupancy Rule"}),l.a.createElement(x,{InputLabelProps:{shrink:!0},type:"text",name:"currentRules",placeholder:"e.g. Rule 1, Rule 2, ...",onChange:function(e){return M(e)},value:o.currentRules,fullWidth:!0,label:"Current Rules"}),l.a.createElement(x,{InputLabelProps:{shrink:!0},type:"text",fullWidth:!0,placeholder:"e.g. Have a good day!",onChange:function(e){return M(e)},name:"successMessage",value:o.successMessage,label:"Success Message"}),l.a.createElement(x,{InputLabelProps:{shrink:!0},type:"time",fullWidth:!0,onChange:function(e){return function(e){var t=new Date,n=t.getFullYear(),c=("0"+(t.getMonth()+1)).slice(-2),u=t.getDate(),l=new Date("".concat(n,"-").concat(c,"-").concat(u,"T").concat(e.target.value)).toUTCString();i(Object(r.a)({},o,Object(a.a)({},e.target.getAttribute("name"),l)))}(e)},label:"Reservation Clear Out Time",name:"reservationClearOut",value:new Date(o.reservationClearOut).toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!1})}))),l.a.createElement(w,null,l.a.createElement(d.a,{data:L,options:{title:{display:!0,text:"Attendance for The Last Seven Days",fontSize:20},legend:{display:!1}}})),l.a.createElement(D,null,l.a.createElement(I,{autoHideDuration:3e3,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:h,onClose:function(e,t){"clickaway"!==t&&v(!1)}},C?l.a.createElement(f.a,{severity:"success"},"Saved"):l.a.createElement(f.a,{severity:"error"},"Error saving")),l.a.createElement(R,{size:"large",variant:"contained",onClick:function(){return Object(g.d)(o).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.log(e),E(!1)})),void v(!0)}},"Save")))}))}}]);
//# sourceMappingURL=4.4c7e97a4.chunk.js.map