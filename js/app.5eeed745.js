(function(t){function e(e){for(var r,o,c=e[0],s=e[1],u=e[2],f=0,d=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3131:function(t,e,n){},4207:function(t,e,n){"use strict";var r=n("3131"),i=n.n(r);i.a},4326:function(t,e,n){t.exports="https://vincentx.github.io/8x-flow/img/8x-flow-logo.785a7e0f.png"},4868:function(t,e,n){"use strict";var r=n("b804"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"model-editor"}},[n("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"navbar-brand"},[n("a",{staticClass:"navbar-item"},[n("img",{attrs:{src:t.logo,height:"28"}})]),t._m(0)]),n("div",{staticClass:"navbar-menu"},[n("div",{staticClass:"navbar-end"},[n("div",{staticClass:"navbar-item"},[n("div",{staticClass:"buttons"},[n("a",{staticClass:"button",attrs:{id:"download-script"},on:{click:t.downloadScript}},[t._v(" Save Script ")]),n("a",{staticClass:"button",attrs:{id:"download-graph"},on:{click:t.downloadGraph}},[t._v(" Save Graph ")])])])])])]),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-one-third has-background-dark"},[n("script-editor",{model:{value:t.yaml,callback:function(e){t.yaml=e},expression:"yaml"}})],1),n("div",{staticClass:"column is-two-thirds has-background-white-ter"},[n("model-viewer",{ref:"viewer",attrs:{graph:t.graph}})],1)])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])}],o=(n("92c6"),n("4326")),c=n.n(o),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"script-editor"},[n("textarea",{ref:"textarea",staticClass:"script"})])},u=[],l=n("56b3"),f=n.n(l),d=(n("ced0"),n("8822"),n("a7be"),n("fade"),n("0dd0"),n("a4d3"),n("e01a"),n("d28b"),n("99af"),n("4de4"),n("4160"),n("caad"),n("c975"),n("a15b"),n("d81d"),n("13d5"),n("b0c0"),n("b64b"),n("d3b7"),n("ac1f"),n("25f0"),n("2532"),n("3ca3"),n("466d"),n("1276"),n("159b"),n("ddb0"),n("e9eb")),p=n.n(d),m={attr:{data:function(t){return y(t,"data")},timestamp:function(t){return y(t,"timestamp")}}};function h(t){function e(e){return function(n,r,i){return t.model({id:n,desc:r||"",archetype:e,attributes:i||[]})}}function n(e){return function(n,r){t.rel({source:n.id,target:r.id,type:e})}}return{model:{rfp:e("rfp"),proposal:e("proposal"),contract:e("contract"),evidence:e("evidence"),agreement:e("agreement"),party:e("party"),place:e("place"),thing:e("thing"),role:function(t,n){return e("role")(t,n||"",[])},domain:function(t,n){return e("domain")(t,n||"",[])},system:function(t,n){return e("system")(t,n||"",[])},details:e("details"),fulfillmentRequest:e("fulfillment"),fulfillmentConfirmation:function(t,n,r){return e(n?"variform":"fulfillment")(t,"",r)},participant:function(t){return e("participant")(t,"",[])}},rel:{details:n("has-details"),fulfillment:n("fulfillment"),confirmation:n("confirmation"),participant:n("participant"),plays:n("plays"),relates:n("relates"),evidence:n("as-evidence")},result:t.result}}function y(t,e){return{name:t,type:e}}var v={message:{malformed:function(t,e){return"".concat(t.id," has malformed ").concat(e," declaration")},required:function(t,e){return"".concat(t.id," must have ").concat(e," declaration")},roleRequired:function(t){return"".concat(t.id," can only play as roles")},mismatchArchetype:function(t,e){return"".concat(t.id," can not be redefined as '").concat(e.archetype,"'")}}};function g(t){return g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function b(t){return"string"===typeof t||t instanceof String}function w(t){return"object"===g(t)&&!Array.isArray(t)}function x(t,e){return t?b(t)?{id:e,description:t}:(t.id=e,t):{id:e}}var k=/[ ]*,[ ]*/,j={required:{timestamp:function(t){return q(C(t),v.message.required(t,"key_timestamps"))(t.key_timestamps)}},name:function(t){return z(A,"")(t.name)},desc:function(t){return z(A,"")(t.desc)},timestamp:function(t){return z(C(t),[])(t.key_timestamps)},data:function(t){return z(E($(m.attr.data,v.message.malformed(t,"key_data"))),[])(t.key_data)},variform:function(t){return z(S,!1)(t.variform)},details:function(t,e){return O(t.details,_(e,t,"details",w))},fulfillment:function(t,e){return O(t.fulfillment,_(e,t,"fulfillment",w))},participants:function(t,e){return O(t.participants,_(e,t,"participants",(function(t){return!0})))},plays:function(t,e){return O(t.plays,_(e,t,"plays",(function(t){return!0})))},relates:function(t,e){return O(t.relates,_(e,t,"relates",(function(t){return!0})))},evidences:function(t,e){return O(t.evidences,_(e,t,"evidences",(function(t){return!0})))},role:{is:function(t){return t.match(/^_+.+/)},name:function(t){return t.split(/^_+/)[1]}}};function _(t,e,n,r){return function(i){if(b(i))return t(e,{id:i});if(1===Object.keys(i).length){var a=Object.keys(i)[0];if(!r(i[a]))throw v.message.malformed(e,n);return t(e,x(i[a],a))}throw v.message.malformed(e,n)}}function O(t,e){return z(E(P(e)),[])(t)}function C(t){return function(e){return E($(m.attr.timestamp,v.message.malformed(t,"key_timestamps")))(e)}}function S(t){return"boolean"===typeof t?t:["y","yes","ok","sure"].includes(A(t).toLowerCase())}function A(t){return t.toString()}function q(t,e){return function(n){if(!n)throw e;return t(n)}}function z(t,e){return function(n){return n?t(n):e}}function E(t){return function(e){return t(b(e)?e.split(k):e)}}function $(t,e){return function(n){if(!Array.isArray(n))throw e;return n.map(t)}}function P(t){function e(t){return Object.keys(t).map((function(e){var n={};return n[e]=t[e],n}))}return function(n){return(Array.isArray(n)?n:e(n)).forEach(t)}}function M(){var t={models:[],relationships:[]},e=[["system","role"],["domain","role"],["contract","evidence"],["agreement","evidence"],["proposal","evidence"],["rfp","evidence"],["fulfillment","evidence"],["variform","evidence"],["details","evidence"],["contract","participant"],["agreement","participant"],["proposal","participant"],["rfp","participant"],["fulfillment","participant"],["variform","participant"],["evidence","participant"],["details","participant"],["system","participant"],["domain","participant"],["role","participant"],["party","participant"],["place","participant"],["thing","participant"]],n={};function r(t,n){function r(){function e(t){return t?t.length:0}t.attributes||(t.attributes=[]),n.attributes&&(t.attributes=t.attributes.concat(n.attributes)),e(t.desc)<e(n.desc)&&(t.desc=n.desc)}function i(){if(n.archetype&&n.archetype!==t.archetype){var r=e.filter((function(e){return e.includes(t.archetype)&&e.includes(n.archetype)}));if(0===r.length)throw v.message.mismatchArchetype(t,n);var i=r[0].indexOf(t.archetype),a=r[0].indexOf(n.archetype);i>a&&(t.archetype=n.archetype)}}return r(),i(),t}return{result:t,model:function(e){return n[e.id]?r(n[e.id],e):(t.models.push(e),n[e.id]=e,e)},rel:function(e){return t.relationships.push(e)}}}function T(t){var e=p.a.load(t),n=h(M());return Array.isArray(e)?e.forEach((function(t){return R(n,t)})):R(n,e),n.result}function R(t,e){e&&(["contract","rfp","proposal","evidence","agreement"].filter((function(t){return e[t]})).forEach((function(n){return B(t,x(e,e[n]),t.model[n])})),["party","place","thing"].filter((function(t){return e[t]})).forEach((function(n){return H(t,x(e,e[n]),t.model[n])})),["role","domain","system"].filter((function(t){return e[t]})).forEach((function(n){return L(t,x(e,e[n]),t.model[n])})),e["contract"]&&V(t,x(e,e.contract)),e["agreement"]&&V(t,x(e,e.agreement)))}function B(t,e,n){n(e.id,j.desc(e),Q(j.required.timestamp(e),j.data(e))),G(t,e)}function G(t,e){j.details(e,J(t)),j.plays(e,I(t)),j.participants(e,F(t)),j.evidences(e,D(t))}function H(t,e,n){n(e.id,j.desc(e),j.data(e)),j.relates(e,N(t)),j.plays(e,I(t))}function L(t,e,n){n(e.id,j.desc(e)),j.relates(e,N(t))}function V(t,e){j.fulfillment(e,K(t))}function J(t){return function(e,n){t.rel.details(e,t.model.details(n.id,j.desc(n),Q(j.timestamp(n),j.data(n)))),j.participants(n,F(t)),j.evidences(n,D(t))}}function F(t){return function(e,n){var r=j.role.is(n.id)?t.model.role(j.role.name(n.id)):t.model.participant(n.id);t.rel.participant(e,r)}}function I(t){return function(e,n){if(!j.role.is(n.id))throw v.message.roleRequired(e);t.rel.plays(e,t.model.role(j.role.name(n.id)))}}function N(t){return function(e,n){j.role.is(n.id)?t.rel.relates(e,t.model.role(j.role.name(n.id))):t.rel.relates(e,t.model.participant(n.id))}}function D(t){return function(e,n){t.rel.evidence(e,t.model.evidence(n.id))}}function K(t){function e(t,e){return t.split(k).concat(e).join(" ")}function n(t,e){if(!t)return e;var n=j.name(t);return n||e}function r(t){return t?Q(j.timestamp(t),j.data(t)):[]}function i(t,e,n){n&&G(t,x(n,e.id))}return function(a,o){var c=t.model.fulfillmentRequest(n(o.request,e(o.id,"Request")),j.desc(o),r(o.request)),s=t.model.fulfillmentConfirmation(n(o.confirm,e(o.id,"Confirmation")),!!o.confirm&&j.variform(o.confirm),r(o.confirm));i(t,c,o.request),i(t,s,o.confirm),t.rel.fulfillment(a,c),t.rel.confirmation(c,s)}}function Q(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce((function(t,e){return t.concat(e)}))}function U(t,e,n){var r=[];try{T(t)}catch(a){var i=n&&n.getCursor()?n.getCursor().line:0;r.push({from:f.a.Pos(i,0),to:f.a.Pos(i,0),message:a})}return r}f.a.registerHelper("lint","yaml",U);var W={name:"script-editor",data:function(){return{script:""}},props:["yaml"],mounted:function(){var t=this;this.editor=f.a.fromTextArea(this.$refs.textarea,{mode:"text/yaml",theme:"panda-syntax",lineNumbers:!0,line:!0,tabSize:2,gutters:["CodeMirror-lint-markers"],lint:!0}),this.editor.setValue(this.yaml||this.script),this.editor.on("change",(function(e){t.script=e.getValue(),t.editor.performLint(),t.$emit("input",t.script)}))}},X=W,Y=(n("4207"),n("2877")),Z=Object(Y["a"])(X,s,u,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"container",staticClass:"model-viewer"})},nt=[],rt=(n("cb29"),n("e9ec")),it=n.n(rt),at=n("dab9"),ot=n("90f7");function ct(t){return it()({models:{defaults:{shape:{width:400,height:300,corner_radius:10,scale:.2},archetype:{color:"white",family:'"Arial Black", sans-serif',size:25},name:{color:"white",family:"Impact, sans-serif",size:40},attributes:{color:"white",family:'"Helvetica", sans-serif',size:25},fill:"rgb(229, 59, 112)"},party:{fill:"rgb(103, 157, 52)"},place:{fill:"rgb(103, 157, 52)"},thing:{fill:"rgb(103, 157, 52)"},participant:{fill:"rgb(103, 157, 52)"},domain:{fill:"rgb(254, 180, 63)"},system:{fill:"rgb(254, 180, 63)"},role:{fill:"rgb(254, 180, 63)"},variform:{fill:"rgb(254, 180, 63)"}},relationships:{defaults:{color:"rgb(229, 59, 112)",width:2,opacity:.8,dash:""},participant:{color:"rgb(254, 180, 63)",width:1.5,opacity:.6},plays:{color:"rgb(153, 153, 153)",width:1,opacity:.6,dash:"10,10"},relates:{color:"rgb(103, 157, 52)",width:1,opacity:.6}},view:{width:1e3,height:1e3}},t||{})}function st(t,e,n){return t.selectAll("g.model").data(e).join("g").each(ut(n)).attr("class",(function(t){return"model ".concat(t.archetype)})).attr("id",(function(t){return t.id}))}function ut(t){return function(e){var n=pt(e,t);dt(this,e,n),lt(this,e,n)}}function lt(t,e,n){(new ot["a"]).data(ft(e,n)).width(n.shape.width).height(n.shape.height).fontResize((function(t){return t.resize})).fontColor((function(t){return t.font.color})).fontSize((function(t){return t.font.size})).fontFamily((function(t){return t.font.family})).verticalAlign("middle").textAnchor("middle").y((function(t,e){return(e-1)*n.shape.height/3})).select(t).render()}function ft(t,e){return[{text:["<",t.archetype,">"].join(" "),resize:!1,font:e.archetype},{text:t.id,resize:!0,font:e.name},{text:t.attributes.map((function(t){return t.name})).join(" "),resize:!1,font:e.attributes}]}function dt(t,e,n){Object(at["a"])(t).append("rect").attr("class","background").attr("x",0).attr("y",0).attr("width",n.shape.width).attr("height",n.shape.height).attr("rx",n.shape.corner_radius).attr("ry",n.shape.corner_radius).attr("fill",n.fill)}function pt(t,e){return it()({},e.models.defaults,e.models[t.archetype]||{})}function mt(t,e,n){return t.append("g").selectAll("line").data(e).join("line").attr("stroke",(function(t){return ht(t,n).color})).attr("stroke-width",(function(t){return ht(t,n).width})).attr("stroke-opacity",(function(t){return ht(t,n).opacity})).attr("stroke-dasharray",(function(t){return ht(t,n).dash}))}function ht(t,e){return it()({},e.relationships.defaults,e.relationships[t.type]||{})}function yt(t,e,n){var r=ct(n),i=t.append("svg").attr("viewBox",[0,0,r.view.width,r.view.height]).attr("xmlns","http://www.w3.org/2000/svg").attr("xmlns:xlink","http://www.w3.org/1999/xlink"),a=i.append("g"),o=mt(a,e.relationships,r),c=st(a,e.models,r);return{svg:i,group:a,nodes:c,links:o,options:r,tick:function(){o.attr("x1",(function(t){return t.source.x})).attr("y1",(function(t){return t.source.y})).attr("x2",(function(t){return t.target.x})).attr("y2",(function(t){return t.target.y})),c.attr("transform",(function(t){var e=it()({},r.models.defaults,r.models[t.archetype]||{}),n=e.shape.width/2*e.shape.scale,i=e.shape.height/2*e.shape.scale;return"translate(".concat(t.x-n,", ").concat(t.y-i,") scale(").concat(e.shape.scale,", ").concat(e.shape.scale,")")}))},remove:function(){i.remove()}}}function vt(t,e){var n=yt(t,e.data,e.options);return e.view(n),n}var gt=n("00a5"),bt=n("0a4a"),wt=n("d934"),xt=n("009f"),kt=n("0165");function jt(t){return Object(xt["a"])().on("start",(function(e){kt["c"].active||t.alphaTarget(.3).restart(),e.fx=e.x,e.fy=e.y})).on("drag",(function(t){t.fx=kt["c"].x,t.fy=kt["c"].y})).on("end",(function(e){kt["c"].active||t.alphaTarget(0),e.fx=null,e.fy=null}))}function _t(t){return function(){return t.group.attr("transform",kt["c"].transform)}}var Ot={name:"model-viewer",props:["graph"],data:function(){return{bom:{models:[],relationships:[]}}},mounted:function(){this.render(this.graph||this.bom)},watch:{graph:function(t){this.chart.remove(),this.render(t)}},methods:{render:function(t){this.chart=vt(Object(gt["a"])(this.$refs.container),{data:t,view:function(t){var e=Object(bt["d"])(t.nodes.data()).force("link",Object(bt["b"])(t.links.data()).id((function(t){return t.id})).distance(90)).force("charge",Object(bt["c"])().strength(-300)).force("center",Object(bt["a"])(t.options.view.width/2,t.options.view.height/2)).on("tick",t.tick);t.nodes.call(jt(e)),t.svg.call(Object(wt["a"])().extent([[0,0],[t.options.view.width,t.options.view.height]]).scaleExtent([.025,2.5]).on("zoom",_t(t)))}})}}},Ct=Ot,St=(n("c993"),Object(Y["a"])(Ct,et,nt,!1,null,null,null)),At=St.exports,qt=n("21a6"),zt={name:"model-editor",components:{ModelViewer:At,ScriptEditor:tt},data:function(){return{logo:c.a,yaml:"",stop:!0,cached_graph:{models:[],relationships:[]}}},computed:{graph:function(){try{this.cached_graph=T(this.yaml)}catch(t){}return this.cached_graph}},methods:{downloadScript:function(){Object(qt["saveAs"])(new Blob([this.yaml],{type:"text/plain;charset=utf-8"}),"models.yaml")},downloadGraph:function(){var t='<?xml version="1.0" standalone="no"?>\r\n'.concat(this.$refs.viewer.$el.querySelector("svg").outerHTML);Object(qt["saveAs"])(new Blob([t],{type:"image/svg+xml;charset=utf-8"}),"models.svg")}}},Et=zt,$t=(n("4868"),Object(Y["a"])(Et,i,a,!1,null,null,null)),Pt=$t.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(Pt)}}).$mount("#app")},"7e9e":function(t,e,n){},b804:function(t,e,n){},c993:function(t,e,n){"use strict";var r=n("7e9e"),i=n.n(r);i.a}});
//# sourceMappingURL=app.5eeed745.js.map