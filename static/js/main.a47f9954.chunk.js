(this["webpackJsonpaizen-react-16"]=this["webpackJsonpaizen-react-16"]||[]).push([[0],{26:function(e,n,t){e.exports=t(37)},31:function(e,n,t){},32:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(7),o=t.n(l),c=(t(31),t(17)),i=t(14),u=t(15),m=t(53),d=t(52);t(32);function s(){var e=Object(i.a)(["\n  width: 100%;\n  padding: 0.2rem;\n  font-size: large;\n"]);return s=function(){return e},e}function f(){var e=Object(i.a)(["\n  display: grid;\n  grid-template-columns: 80% 20%;\n  grid-column-gap: 1rem;\n"]);return f=function(){return e},e}function E(){var e=Object(i.a)(["\n  margin: auto;\n  width: 800px;\n  padding-top: 1em;\n"]);return E=function(){return e},e}function h(){var e=Object(i.a)(["\n  text-align: center;\n"]);return h=function(){return e},e}var g=function(e){var n=e.pokemon,t=e.onClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{key:n.id},r.a.createElement("td",null,n.name.english),r.a.createElement("td",null,n.type.join(", ")),r.a.createElement("td",null,r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){return t(n)}},"More Information"))))},p=function(e){var n=e.name.english,t=e.base;return r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("table",null,r.a.createElement("tbody",null,Object.keys(t).map((function(e){return r.a.createElement("tr",{key:e},r.a.createElement("td",null,e),r.a.createElement("td",null,t[e]))})))))},v=u.a.h1(h()),b=u.a.div(E()),w=u.a.div(f()),k=u.a.input(s());var j=function(){var e=r.a.useState(""),n=Object(c.a)(e,2),t=n[0],a=n[1],l=r.a.useState(null),o=Object(c.a)(l,2),i=o[0],u=o[1],m=r.a.useState(null),s=Object(c.a)(m,2),f=s[0],E=s[1];return r.a.useEffect((function(){fetch(window.location.origin+"/aizen-react-16/pokemon.json").then((function(e){return e.json()})).then((function(e){return u(e)}))}),[]),i?r.a.createElement(b,null,r.a.createElement(d.a,null),r.a.createElement(v,null,"Pokemon Search"),r.a.createElement(w,null,r.a.createElement("div",null,r.a.createElement(k,{type:"text",value:t,onChange:function(e){return a(e.target.value)}}),r.a.createElement("table",{width:"100%"},r.a.createElement("tbody",null,i.filter((function(e){return e.name.english.toLocaleLowerCase().includes(t.toLocaleLowerCase())})).slice(0,20).map((function(e){return r.a.createElement(g,{pokemon:e,onClick:function(e){return E(e)}})}))))),f&&r.a.createElement(p,f))):r.a.createElement("div",null,"Loading data")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.a47f9954.chunk.js.map