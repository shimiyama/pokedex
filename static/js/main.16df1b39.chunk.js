(this.webpackJsonphelloworld=this.webpackJsonphelloworld||[]).push([[0],{56:function(e,n,t){},63:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),d=t(8),o=t.n(d),c=(t(56),t(21)),m=t(6),r=t(89),s=t(92),l=t(94),j=t(93),b=t(95),p=t(29),u=t(96),h=t(3);function O(){return Math.round(20*Math.random())-10}function x(){var e=50+O(),n=50+O();return{top:"".concat(e,"%"),left:"".concat(n,"%"),transform:"translate(-".concat(e,"%, -").concat(n,"%)")}}var f=Object(r.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function g(e){var n=f(),t=i.a.useState(x),a=Object(p.a)(t,1)[0],d=i.a.useState(!1),o=Object(p.a)(d,2),c=o[0],m=o[1],r=Object(h.jsxs)("div",{style:a,className:n.paper,children:[Object(h.jsx)("h2",{id:"simple-modal-title",children:"Text in a modal"}),Object(h.jsxs)("p",{id:"simple-modal-description",children:["Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",e.name]}),Object(h.jsx)("img",{src:"".concat("/pokedex","/pokemon.json-master/pokemon_dot/")+e.id+".png",alt:"Logo"}),Object(h.jsx)("h1",{children:e.name})]});return Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{type:"button",onClick:function(){m(!0)},children:e.name}),Object(h.jsx)(u.a,{open:c,onClose:function(){m(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:r})]})}var v=t(28),k=t(38),y=t(4),w=t(98),C=t(97),S=Object(r.a)({list:{width:250},fullList:{width:"auto"}});function L(e){var n=S(),t=i.a.useState({top:!1,left:!1,bottom:!1,right:!1}),a=Object(p.a)(t,2),d=a[0],o=a[1],c=function(e,n){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&o(Object(k.a)(Object(k.a)({},d),{},Object(v.a)({},e,n)))}},m=function(t){return Object(h.jsxs)("div",{className:Object(y.a)(n.list,Object(v.a)({},n.fullList,"top"===t||"bottom"===t)),role:"presentation",onClick:c(t,!1),onKeyDown:c(t,!1),children:[Object(h.jsx)("h1",{children:e.name}),Object(h.jsx)("img",{src:"".concat("/pokedex","/pokemon.json-master/pokemon_dot/")+e.id+".png",alt:"Logo"})]})};return Object(h.jsx)("div",{children:["bottom"].map((function(e){return Object(h.jsxs)(i.a.Fragment,{children:[Object(h.jsx)(C.a,{onClick:c(e,!0),children:e}),Object(h.jsx)(w.a,{anchor:e,open:d[e],onClose:c(e,!1),children:m(e)})]},e)}))})}var F=Object(r.a)({root:{width:170,height:240},media:{width:100,height:100},divStyle:{width:1700,display:"flex",flexWrap:"wrap"}});function N(){var e=F(),n=T.map((function(n){return Object(h.jsxs)(s.a,{className:e.root,children:[Object(h.jsx)(j.a,{className:e.media,a:!0,image:"".concat("/pokedex","/pokemon.json-master/sprites/")+("000"+n.id).slice(-3)+"MS.png",title:"Contemplative Reptile"}),Object(h.jsxs)(l.a,{children:[Object(h.jsx)(b.a,{gutterBottom:!0,variant:"body2",component:"h6",children:Object(h.jsx)(c.b,{to:"/pokemon/"+n.id,children:n.name})}),Object(h.jsx)(g,{id:n.id,name:n.name}),Object(h.jsx)(L,{id:n.id,name:n.name})]})]},n.id)}));return Object(h.jsx)("div",{className:e.divStyle,children:n})}var T=[{id:1,name:"\u30d5\u30b7\u30ae\u30c0\u30cd"},{id:2,name:"\u30d5\u30b7\u30ae\u30bd\u30a6"},{id:3,name:"\u30d5\u30b7\u30ae\u30d0\u30ca"},{id:4,name:"\u30d2\u30c8\u30ab\u30b2"},{id:5,name:"\u30ea\u30b6\u30fc\u30c9"},{id:6,name:"\u30ea\u30b6\u30fc\u30c9\u30f3"},{id:7,name:"\u30bc\u30cb\u30ac\u30e1"},{id:8,name:"\u30ab\u30e1\u30fc\u30eb"},{id:9,name:"\u30ab\u30e1\u30c3\u30af\u30b9"},{id:10,name:"\u30ad\u30e3\u30bf\u30d4\u30fc"},{id:11,name:"\u30c8\u30e9\u30f3\u30bb\u30eb"},{id:12,name:"\u30d0\u30bf\u30d5\u30ea\u30fc"},{id:13,name:"\u30d3\u30fc\u30c9\u30eb"},{id:14,name:"\u30b7\u30df\u30ba"},{id:15,name:"\u30b9\u30d4\u30a2\u30fc"},{id:16,name:"\u30dd\u30c3\u30dd"},{id:17,name:"\u30d4\u30b8\u30e7\u30f3"},{id:18,name:"\u30d4\u30b8\u30e7\u30c3\u30c8"},{id:19,name:"\u30b3\u30e9\u30c3\u30bf"},{id:20,name:"\u30e9\u30c3\u30bf"},{id:21,name:"\u30aa\u30cb\u30b9\u30ba\u30e1"},{id:22,name:"\u30aa\u30cb\u30c9\u30ea\u30eb"},{id:23,name:"\u30a2\u30fc\u30dc"},{id:24,name:"\u30a2\u30fc\u30dc\u30c3\u30af"},{id:25,name:"\u30d4\u30ab\u30c1\u30e5\u30a6"},{id:26,name:"\u30e9\u30a4\u30c1\u30e5\u30a6"},{id:27,name:"\u30b5\u30f3\u30c9"},{id:28,name:"\u30b5\u30f3\u30c9\u30d1\u30f3"},{id:29,name:"\u30cb\u30c9\u30e9\u30f3\u96cc"},{id:30,name:"\u30cb\u30c9\u30ea\u30fc\u30ca"}],M=t(44),B=t(45),D=t(47),I=t(46),P=function(e){Object(D.a)(t,e);var n=Object(I.a)(t);function t(){return Object(M.a)(this,t),n.apply(this,arguments)}return Object(B.a)(t,[{key:"render",value:function(){var e=this.props.match.params,n=parseInt(e.id,10),t=_.filter((function(e){return e.id===n}))[0];return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:"".concat("/pokedex","/pokemon.json-master/pokemon_dot/")+t.id+".png",alt:"Logo"}),Object(h.jsx)("h1",{children:t.name}),Object(h.jsx)("div",{children:Object(h.jsx)(c.b,{to:"/",children:"TOP"})})]})}}]),t}(i.a.Component),_=[{id:1,name:"\u30d5\u30b7\u30ae\u30c0\u30cd"},{id:2,name:"\u30d5\u30b7\u30ae\u30bd\u30a6"},{id:3,name:"\u30d5\u30b7\u30ae\u30d0\u30ca"},{id:4,name:"\u30d2\u30c8\u30ab\u30b2"},{id:5,name:"\u30ea\u30b6\u30fc\u30c9"},{id:6,name:"\u30ea\u30b6\u30fc\u30c9\u30f3"},{id:7,name:"\u30bc\u30cb\u30ac\u30e1"},{id:8,name:"\u30ab\u30e1\u30fc\u30eb"},{id:9,name:"\u30ab\u30e1\u30c3\u30af\u30b9"},{id:10,name:"\u30ad\u30e3\u30bf\u30d4\u30fc"},{id:11,name:"\u30c8\u30e9\u30f3\u30bb\u30eb"},{id:12,name:"\u30d0\u30bf\u30d5\u30ea\u30fc"},{id:13,name:"\u30d3\u30fc\u30c9\u30eb"},{id:14,name:"\u30b7\u30df\u30ba"},{id:15,name:"\u30b9\u30d4\u30a2\u30fc"},{id:16,name:"\u30dd\u30c3\u30dd"},{id:17,name:"\u30d4\u30b8\u30e7\u30f3"},{id:18,name:"\u30d4\u30b8\u30e7\u30c3\u30c8"},{id:19,name:"\u30b3\u30e9\u30c3\u30bf"},{id:20,name:"\u30e9\u30c3\u30bf"},{id:21,name:"\u30aa\u30cb\u30b9\u30ba\u30e1"},{id:22,name:"\u30aa\u30cb\u30c9\u30ea\u30eb"},{id:23,name:"\u30a2\u30fc\u30dc"},{id:24,name:"\u30a2\u30fc\u30dc\u30c3\u30af"},{id:25,name:"\u30d4\u30ab\u30c1\u30e5\u30a6"},{id:26,name:"\u30e9\u30a4\u30c1\u30e5\u30a6"},{id:27,name:"\u30b5\u30f3\u30c9"},{id:28,name:"\u30b5\u30f3\u30c9\u30d1\u30f3"},{id:29,name:"\u30cb\u30c9\u30e9\u30f3\u96cc"},{id:30,name:"\u30cb\u30c9\u30ea\u30fc\u30ca"}];var J=function(){return Object(h.jsxs)(c.a,{children:[Object(h.jsx)(m.a,{component:N}),Object(h.jsx)(m.a,{path:"/pokemon/:id",component:P})]})},E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,100)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,d=n.getLCP,o=n.getTTFB;t(e),a(e),i(e),d(e),o(e)}))};o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(J,{})}),document.getElementById("root")),E()}},[[63,1,2]]]);
//# sourceMappingURL=main.16df1b39.chunk.js.map