(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{243:function(t,e,n){"use strict";var r=n(66);n.n(r).a},257:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(68);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=r.a.extend({props:{input:{type:Object,default:function(){}},value:{type:String,default:""}},computed:{listeners:function(){var t=this;return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},this.$listeners,{input:function(e){return t.$emit("input",e.target.value)}})},settings:function(){return window.$STATE.settings||{}}},methods:{getValue:function(t){if(t)return Object(i.a)({key:t,settings:this.settings})}}}),o=(n(243),n(10)),c=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-item"},[n("transition",{attrs:{appear:""}},[t.input.label?n("label",[t._v(t._s(t.input.label))]):t._e()]),t._v(" "),n("input",t._g(t._b({attrs:{type:t.input.type,placeholder:t.getValue(t.input.setting)||t.input.placeholder||t.input.label},domProps:{value:t.value}},"input",t.$attrs,!1),t.listeners))],1)}),[],!1,null,null,null);e.default=c.exports},66:function(t,e,n){}}]);