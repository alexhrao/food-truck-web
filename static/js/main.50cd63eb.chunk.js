(this["webpackJsonpfood-truck-web"]=this["webpackJsonpfood-truck-web"]||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),i=(n(16),n(9)),s=n(5),u=n(6),l=n(8),p=n(7),m=n(10),f=n(1),v=n.n(f),d=n(2),h=(n(18),function(){var e=Object(d.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://food-truck-spy.appspot.com/api/views").then((function(e){return e.json()})).then((function(e){return e.map((function(e){return{location:e.id,locationName:e.display}}))})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),w=function(){var e=Object(d.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://food-truck-spy.appspot.com/api/views/".concat(t)).then((function(e){return e.json()})).then((function(e){return{src:void 0===e.data?"":"data:image/png;base64,".concat(e.data),time:new Date(e.time)}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={views:[]},h().then((function(e){return e.map((function(e,t){return Object(i.a)({},e,{poller:function(){w(e.location).then((function(e){var a=n.state.views;""===e.src?a[t].snap=void 0:a[t].snap=e,n.setState({views:a})}))}})}))})).then((function(e){e.forEach((function(e){e.poller(),window.setInterval(e.poller,15e3)})),n.setState({views:e})})),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.views.map((function(e){if(void 0===e.snap)return r.a.createElement("div",{key:e.location,className:"view-container"},r.a.createElement("h2",null,e.locationName),r.a.createElement("p",null,r.a.createElement("em",null,"Loading")));var t=void 0===e.snap?r.a.createElement("p",null,"Loading"):r.a.createElement("img",{src:e.snap.src,alt:"View of ".concat(e.snap.time)});return r.a.createElement("div",{key:e.location,className:"view-container"},r.a.createElement("h2",null,e.locationName),t,r.a.createElement("p",null,r.a.createElement("em",null,"Last Updated: ",e.snap.time.toString())))}));return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"viewers"},e))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.50cd63eb.chunk.js.map