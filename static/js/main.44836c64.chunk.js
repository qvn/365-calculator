(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(4),i=n.n(s),o=(n(16),n(2)),l=n(5),c=n(6),u=n(9),p=n(7),h=n(1),m=n(10),f=(n(17),function(e){return r.a.createElement("ul",{className:"list-group"},e.items.map((function(e,t){return r.a.createElement("li",{className:"list-group-item",key:t},e)})))}),d=n(8),b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={expression:"//[*][!!][r9r]\n11r9r22*hh*33!!44",results:[],expressions:[]},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState({expression:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Object(d.a)(this.state.expression);this.setState({expressions:[].concat(Object(o.a)(this.state.expressions),[this.state.expression+" = "+t]),expression:String(t),results:[].concat(Object(o.a)(this.state.results),[t])})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("form",null,r.a.createElement("span",{className:"font-weight-bolder"},"Calculator"),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Expression","aria-label":"Expression",value:this.state.expression,onChange:this.handleChange}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.handleSubmit},r.a.createElement("span",null,"=")))))),this.state.expressions.length>0&&r.a.createElement("span",{className:"font-weight-bolder"},"History"),r.a.createElement(f,{items:this.state.expressions}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s}));var a=n(2);function r(e){var t=String(e).match(/(?<=^\/\/)(.)(?=\n)/),n=String(e).match(/(?<=\[)(.*?)(?=\])/g);return t||n}function s(e){var t,n=[],s=r(e.substring(0,e.indexOf("\n"))+"\n"),i=s?[].concat(Object(a.a)(s),["\n"]):["\n"],o=!0,l=!1,c=void 0;try{for(var u,p=i[Symbol.iterator]();!(o=(u=p.next()).done);o=!0){var h=u.value;e=e.replace(new RegExp(RegExp.escape(h),"g"),",")}}catch(x){l=!0,c=x}finally{try{o||null==p.return||p.return()}finally{if(l)throw c}}var m=!0,f=!1,d=void 0;try{for(var b,g=e.split(",")[Symbol.iterator]();!(m=(b=g.next()).done);m=!0){var v=b.value;switch(!0){case isNaN(Number(v)):case Number(v)>1e3:n.push(0);break;default:n.push(Number(v))}}}catch(x){f=!0,d=x}finally{try{m||null==g.return||g.return()}finally{if(f)throw d}}if((t=n.filter((function(e){return e<0}))).length>0)throw new Error("Negative numbers found in input: "+String(t)+". Negatives are not allowed.");return n.reduce((function(e,t){return e+t}),0)}RegExp.escape=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},e.exports={calculate:s,getDelimiter:r}}).call(this,n(18)(e))}},[[11,1,2]]]);
//# sourceMappingURL=main.44836c64.chunk.js.map