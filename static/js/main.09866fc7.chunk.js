(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),o=n(5),i=n.n(o),r=(n(16),n.p,n(1)),s={color:"white",backgroundColor:"blue",width:"100%",height:"1000px",display:"flex",justifyContent:"center",alignItems:"center"};var l=function(e){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{style:s,children:["Background dos ",e.name]})})},d=n(6),h=n(7),u=n(10),j=n(9),p=n(3),m=n(11),b=n(0),g=n(8);Object(g.ScrollMagicPluginGsap)(p,m.a,b.c);var v={color:"white",backgroundColor:"red",width:"100%",height:"100vh"},f={opacity:"0",top:"40vh",height:"100vh",position:"absolute",fontSize:"4vw",left:"0",right:"0"},O={zIndex:"3",top:0,left:"20vh",position:"absolute"},x=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=new b.c({onUpdate:"updatePercentage"}),t=new p.Controller;e.to(".c-animacao-1",.5,{opacity:"1"},.5),e.to(".c-animacao-2",.8,{left:"80%",top:"100vh"},.1).to(".c-animacao-2",.1,{opacity:"0"},.8),e.to(".c-animacao-2",.2,{zIndex:"4"},.8);new p.Scene({triggerElement:".c-animacao",triggerHook:"onLeave",duration:"300%"}).setPin(".c-animacao").setTween(e).addTo(t)}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"c-animacao",style:v,children:[Object(r.jsx)("div",{className:"c-animacao-1",style:f,children:"Aparecendo no centro"}),Object(r.jsx)("div",{className:"c-animacao-2",style:O,children:"Movimento Diagonal"}),Object(r.jsx)("div",{className:"c-animacao-3",children:"Est\xe1tico"})]})}}]),n}(c.a.Component),y=(n(18),{backgroundColor:"red",margin:"0",padding:"0",minHeight:"0",display:"block"});var w=function(){return Object(r.jsx)("div",{className:"App",style:y,children:Object(r.jsxs)("header",{className:"App-header",style:y,children:[Object(r.jsx)(l,{name:"scrolls antes do scroll animado"}),Object(r.jsx)(x,{}),Object(r.jsx)(l,{name:"scrolls depois do scroll animado"})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(w,{})}),document.getElementById("root")),k()}},[[19,1,2]]]);
//# sourceMappingURL=main.09866fc7.chunk.js.map