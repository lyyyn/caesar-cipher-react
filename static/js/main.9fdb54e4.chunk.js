(this["webpackJsonpcaesar-cipher-react"]=this["webpackJsonpcaesar-cipher-react"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),l=(n(12),n(1)),s=n(2),u=n(4),i=n(3),h=(n(13),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("h1",null,"Caesar Cipher")}}]),n}(a.Component)),m=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).encodeMsg=function(e,t){return e.split("").map((function(e){return String.fromCharCode(e.charCodeAt(0)+t)})).join("")},a.handleChange=function(e){a.setState({encMessage:a.encodeMsg(e.target.value,8)}),console.log(a.encodeMsg(e.target.value,8))},a.state={encMessage:""},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"box enc"},r.a.createElement("h2",null,"ENCODE"),r.a.createElement("h4",null,"Message"),r.a.createElement("textarea",{rows:"8","aria-multiline":!0,autoFocus:!0,onKeyUp:function(t){return e.handleChange(t)}}),r.a.createElement("h4",null,"Encrypted Message"),r.a.createElement("p",null,this.state.encMessage,"\xa0"))}}]),n}(a.Component),d=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).decodeMsg=function(e,t){return e.split("").map((function(e){return String.fromCharCode(e.charCodeAt(0)-t)})).join("")},a.handleChange=function(e){a.setState({decMessage:a.decodeMsg(e.target.value,8)}),console.log(a.decodeMsg(e.target.value,8))},a.state={decMessage:""},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"box dec"},r.a.createElement("h2",null,"DECODE"),r.a.createElement("h4",null,"Message"),r.a.createElement("textarea",{rows:"8","aria-multiline":!0,autoFocus:!0,onKeyUp:function(t){return e.handleChange(t)}}),r.a.createElement("h4",null,"Decrypted Message"),r.a.createElement("p",null,this.state.decMessage,"\xa0"))}}]),n}(a.Component),g=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(h,null),r.a.createElement("div",{className:"code-boxes"},r.a.createElement(m,null),r.a.createElement(d,null)))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.9fdb54e4.chunk.js.map