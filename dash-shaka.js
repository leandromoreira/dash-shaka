!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("Clappr"),require("shaka")):"function"==typeof define&&define.amd?define(["Clappr","shaka"],t):"object"==typeof exports?exports.DashShaka=t(require("Clappr"),require("shaka")):e.DashShaka=t(e.Clappr,e.shaka)}(this,function(e,t){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),i=function(e,t,r){for(var o=!0;o;){var n=e,a=t,u=r;i=p=l=void 0,o=!1,null===n&&(n=Function.prototype);var i=Object.getOwnPropertyDescriptor(n,a);if(void 0!==i){if("value"in i)return i.value;var l=i.get;return void 0===l?void 0:l.call(u)}var p=Object.getPrototypeOf(n);if(null===p)return void 0;e=p,t=a,r=u,o=!0}},l=r(1),p=o(l),f=r(2),c=o(f),s=function(e){function t(e){n(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.setup()}return a(t,e),u(t,[{key:"setup",value:function(){c["default"].polyfill.installAll(),this.player=new c["default"].player.Player(this.el),this.player.load(new c["default"].player.DashVideoSource(this.options.src))}}]),t}(p["default"]);t["default"]=s,s.canPlay=function(e,t){var r=e.split("?")[0].match(/.*\.(.*)$/)||[];return"mpd"===r[1]},e.exports=t["default"]},function(t,r){t.exports=e},function(e,r){e.exports=t}])});