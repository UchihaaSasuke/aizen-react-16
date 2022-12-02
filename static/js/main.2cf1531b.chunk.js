(this["webpackJsonpaizen-react-16"]=this["webpackJsonpaizen-react-16"]||[]).push([[0],{27:function(e,n,t){e.exports=t(38)},32:function(e,n,t){},33:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(7),l=t.n(i),o=(t(32),t(17)),c=t(10),u=t(11),s=t(52),m=(t(33),r.a.createContext({})),d=t(2),f=t.n(d),p=(f.a.shape({id:f.a.string.isRequired,name:f.a.shape({english:f.a.string.isRequired,japanese:f.a.string.isRequired,chinese:f.a.string.isRequired,french:f.a.string.isRequired}),type:f.a.arrayOf(f.a.string.isRequired),base:f.a.shape({HP:f.a.number.isRequired,Attack:f.a.number.isRequired,Defense:f.a.number.isRequired,"Sp. Attack":f.a.number.isRequired,"Sp. Defense":f.a.number.isRequired,Speed:f.a.number.isRequired})}),function(){var e=Object(a.useContext)(m).selectedPokemon;return e?r.a.createElement("div",null,r.a.createElement("h2",null,e.name.english),r.a.createElement("table",null,r.a.createElement("tbody",null,Object.keys(e.base).map((function(n){return r.a.createElement("tr",{key:n},r.a.createElement("td",null,n),r.a.createElement("td",null,e.base[n]))}))))):null});function E(){var e=Object(c.a)(["\n  width: 100%;\n  padding: 0.2rem;\n  font-size: large;\n"]);return E=function(){return e},e}var g=u.a.input(E()),h=function(){var e=Object(a.useContext)(m),n=e.filter,t=e.filterSet;return r.a.createElement(g,{type:"text",value:n,onChange:function(e){return t(e.target.value)}})},v=t(53),b=function(e){var n=e.pokemon,t=e.onClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{key:n.id},r.a.createElement("td",null,n.name.english),r.a.createElement("td",null,n.type.join(", ")),r.a.createElement("td",null,r.a.createElement(v.a,{variant:"contained",color:"primary",onClick:function(){return t(n)}},"More Information"))))},k=function(){var e=Object(a.useContext)(m),n=e.pokemon,t=e.filter,i=e.selectedPokemonSet;return r.a.createElement("table",{width:"100%"},r.a.createElement("tbody",null,n.filter((function(e){return e.name.english.toLocaleLowerCase().includes(t.toLocaleLowerCase())})).slice(0,20).map((function(e){return r.a.createElement(b,{key:e.id,pokemon:e,onClick:function(e){return i(e)}})}))))};function j(){var e=Object(c.a)(["\n  display: grid;\n  grid-template-columns: 80% 20%;\n  grid-column-gap: 1rem;\n"]);return j=function(){return e},e}function w(){var e=Object(c.a)(["\n  margin: auto;\n  width: 800px;\n  padding-top: 1em;\n"]);return w=function(){return e},e}function y(){var e=Object(c.a)(["\n  text-align: center;\n"]);return y=function(){return e},e}var S=u.a.h1(y()),q=u.a.div(w()),O=u.a.div(j());var R=function(){var e=r.a.useState(""),n=Object(o.a)(e,2),t=n[0],a=n[1],i=r.a.useState(null),l=Object(o.a)(i,2),c=l[0],u=l[1],d=r.a.useState(null),f=Object(o.a)(d,2),E=f[0],g=f[1];return r.a.useEffect((function(){fetch(window.location.origin+"/aizen-react-16/pokemon.json").then((function(e){return e.json()})).then((function(e){return u(e)}))}),[]),c?r.a.createElement(m.Provider,{value:{filter:t,filterSet:a,pokemon:c,pokemonSet:u,selectedPokemon:E,selectedPokemonSet:g}},r.a.createElement(q,null,r.a.createElement(s.a,null),r.a.createElement(S,null,"Pokemon Search"),r.a.createElement(O,null,r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(k,null)),r.a.createElement(p,null)))):r.a.createElement("div",null,"Loading data")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.2cf1531b.chunk.js.map