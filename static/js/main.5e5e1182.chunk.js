(this["webpackJsonpline-scan-qr"]=this["webpackJsonpline-scan-qr"]||[]).push([[0],{28:function(n,e,t){},29:function(n,e,t){},34:function(n,e,t){"use strict";t.r(e);var c=t(6),i=t(0),a=t.n(i),o=t(11),r=t.n(o),s=(t(28),t(17)),l=(t(29),t(50)),d=t(49),u=t(10),j=t.n(u);j.a.init({liffId:"1655180874-rpzb2gR5"});var f=function(){console.log("sendAlertIfNotInClient")};var h=function(){var n=Object(i.useState)(""),e=Object(s.a)(n,2),t=e[0],a=e[1],o=Object(i.useState)(0),r=Object(s.a)(o,2),u=r[0],h=r[1],b=function(){j.a.isInClient()?j.a.scanCode&&j.a.scanCode().then((function(n){JSON.stringify(n);a(n.value),console.log("toggleQrCodeReader"),h(u+1)})).catch((function(n){a("")})):f()};return 0==u&&b(),Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("main",{children:[Object(c.jsx)("p",{children:u}),Object(c.jsx)(l.a,{variant:"contained",onClick:b,children:"Scan QR Code"}),Object(c.jsx)(d.a,{variant:"h4",gutterBottom:!0,children:t}),t&&Object(c.jsx)(l.a,{variant:"contained",color:"primary",onClick:function(){return n=t,void(j.a.isInClient()?j.a.sendMessages([{type:"text",text:n}]).then((function(){j.a.closeWindow()})).catch((function(n){window.alert("Error sending message: "+n)})):f());var n},children:"Primary"})]})})},b=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,51)).then((function(e){var t=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),c(n),i(n),a(n),o(n)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),b()}},[[34,1,2]]]);
//# sourceMappingURL=main.5e5e1182.chunk.js.map