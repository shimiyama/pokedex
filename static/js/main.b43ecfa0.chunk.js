(this.webpackJsonphelloworld=this.webpackJsonphelloworld||[]).push([[0],{25:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var i=t(0),a=t.n(i),c=t(19),r=t.n(c),d=(t(25),t(11)),o=t(1),m=t(9),j=t(10),s=t(13),u=t(12),l=t(3),b=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(){return Object(m.a)(this,t),n.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){var e=p.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)(d.b,{to:"/pokemon/"+e.id,children:e.name})},e.id)}));return Object(l.jsx)("div",{children:Object(l.jsx)("ul",{children:e})})}}]),t}(a.a.Component),p=[{id:1,name:"\u30d5\u30b7\u30ae\u30c0\u30cd"},{id:2,name:"\u30d5\u30b7\u30ae\u30bd\u30a6"},{id:3,name:"\u30d5\u30b7\u30ae\u30d0\u30ca"},{id:4,name:"\u30d2\u30c8\u30ab\u30b2"},{id:5,name:"\u30ea\u30b6\u30fc\u30c9"},{id:6,name:"\u30ea\u30b6\u30fc\u30c9\u30f3"},{id:7,name:"\u30bc\u30cb\u30ac\u30e1"},{id:8,name:"\u30ab\u30e1\u30fc\u30eb"},{id:9,name:"\u30ab\u30e1\u30c3\u30af\u30b9"},{id:10,name:"\u30ad\u30e3\u30bf\u30d4\u30fc"},{id:11,name:"\u30c8\u30e9\u30f3\u30bb\u30eb"},{id:12,name:"\u30d0\u30bf\u30d5\u30ea\u30fc"}],h=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(){return Object(m.a)(this,t),n.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){var e=this.props.match.params,n=parseInt(e.id,10),t=O.filter((function(e){return e.id===n}))[0],i="public/pokemon.json-master/pokemon_dot/"+n+".png";return Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:i,alt:""}),Object(l.jsx)("h1",{children:t.name})]})}}]),t}(a.a.Component),O=[{id:1,name:"\u30d5\u30b7\u30ae\u30c0\u30cd"},{id:2,name:"\u30d5\u30b7\u30ae\u30bd\u30a6"},{id:3,name:"\u30d5\u30b7\u30ae\u30d0\u30ca"},{id:4,name:"\u30d2\u30c8\u30ab\u30b2"},{id:5,name:"\u30ea\u30b6\u30fc\u30c9"},{id:6,name:"\u30ea\u30b6\u30fc\u30c9\u30f3"},{id:7,name:"\u30bc\u30cb\u30ac\u30e1"},{id:8,name:"\u30ab\u30e1\u30fc\u30eb"},{id:9,name:"\u30ab\u30e1\u30c3\u30af\u30b9"},{id:10,name:"\u30ad\u30e3\u30bf\u30d4\u30fc"},{id:11,name:"\u30c8\u30e9\u30f3\u30bb\u30eb"},{id:12,name:"\u30d0\u30bf\u30d5\u30ea\u30fc"}];var f=function(){return Object(l.jsxs)(d.a,{children:[Object(l.jsx)(o.a,{component:b}),Object(l.jsx)(o.a,{path:"/pokemon/:id",component:h})]})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,33)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),i(e),a(e),c(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),x()}},[[32,1,2]]]);
//# sourceMappingURL=main.b43ecfa0.chunk.js.map