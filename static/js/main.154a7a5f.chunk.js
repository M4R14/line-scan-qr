(this["webpackJsonpline-scan-qr"]=this["webpackJsonpline-scan-qr"]||[]).push([[0],{10:function(n,e,t){},11:function(n,e,t){},12:function(n,e,t){"use strict";t.r(e);var c=t(0),s=t(2),o=t.n(s),i=t(4),a=t.n(i),d=(t(10),t.p,t(11),t(1)),r=t.n(d);r.a.init({liffId:"1655180874-rpzb2gR5"});var l=function(){console.log("sendAlertIfNotInClient")},u=function(){r.a.isInClient()?r.a.scanCode&&r.a.scanCode().then((function(n){var e=JSON.stringify(n);document.getElementById("scanQrField").textContent=e,console.log("toggleQrCodeReader")})).catch((function(n){document.getElementById("scanQrField").textContent="scanCode failed!"})):l()},f=function(){r.a.isInClient()?r.a.sendMessages([{type:"text",text:"You've successfully sent a message! Hooray!"}]).then((function(){window.alert("Message sent")})).catch((function(n){window.alert("Error sending message: "+n)})):l()};var g=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("button",{onClick:u,children:"Scan QR Code"}),Object(c.jsx)("div",{id:"scanQrField"}),Object(c.jsx)("button",{onClick:f,children:"send Message Button"})]})},C=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(e){var t=e.getCLS,c=e.getFID,s=e.getFCP,o=e.getLCP,i=e.getTTFB;t(n),c(n),s(n),o(n),i(n)}))};a.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),C()}},[[12,1,2]]]);
//# sourceMappingURL=main.154a7a5f.chunk.js.map