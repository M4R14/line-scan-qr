(this["webpackJsonpline-scan-qr"]=this["webpackJsonpline-scan-qr"]||[]).push([[0],{31:function(e,n,t){},32:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var c=t(6),a=t(0),i=t.n(a),o=t(11),r=t.n(o),s=(t(31),t(18)),d=(t(32),t(53)),l=t(56),u=t(55),f=t(10),g=t.n(f);g.a.init({liffId:"1655180874-rpzb2gR5"});var j=function(){console.log("sendAlertIfNotInClient")};Object(d.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var b=function(){var e=Object(a.useState)(""),n=Object(s.a)(e,2),t=n[0],i=n[1],o=Object(a.useState)(0),r=Object(s.a)(o,2),d=r[0],f=r[1],b=function(){g.a.isInClient()?g.a.scanCode&&g.a.scanCode().then((function(e){var n=JSON.stringify(e);i(e.value),document.getElementById("scanQrField").textContent=n,console.log("toggleQrCodeReader"),f(1)})).catch((function(e){i(""),document.getElementById("scanQrField").textContent="scanCode failed!"})):j()};return 0==d&&b(),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{id:"scanQrField"}),Object(c.jsx)(l.a,{variant:"contained",onClick:b,children:"Scan QR Code"}),Object(c.jsx)(u.a,{variant:"h4",gutterBottom:!0,children:t}),t&&Object(c.jsx)(l.a,{variant:"contained",color:"primary",onClick:function(){return e=t,void(g.a.isInClient()?g.a.sendMessages([{type:"text",text:e}]).then((function(){g.a.closeWindow()})).catch((function(e){window.alert("Error sending message: "+e)})):j());var e},children:"Primary"})]})},h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,58)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),c(e),a(e),i(e),o(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),h()}},[[37,1,2]]]);
//# sourceMappingURL=main.f8e7f1a2.chunk.js.map