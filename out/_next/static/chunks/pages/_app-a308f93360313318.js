(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5656)}])},5656:function(t,e,n){"use strict";n.r(e);var r=n(5893),o=(n(7294),n(9008)),i=(n(355),n(1163)),c=n(3282);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){a(t,e,n[e])}))}return t}e.default=function(t){var e=t.Component,n=t.pageProps;return i.default.events.on("routeChangeComplete",(function(t){(0,c.ZP)("hit",t)})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"MyTop - \u043d\u0430\u0448 \u043b\u0443\u0447\u0448\u0438\u0439 \u0442\u043e\u043f"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://mc.yandex.ru"}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",rel:"stylesheet"}),(0,r.jsx)("meta",{property:"og:locale",content:"ru_RU"})]}),(0,r.jsx)(c.OR,{accounts:[],options:{webvisor:!0,defer:!0},version:"2"}),(0,r.jsx)(e,u({},n))]})}},355:function(){},9008:function(t,e,n){t.exports=n(5443)},1163:function(t,e,n){t.exports=n(387)},2541:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.YMInitializer=void 0;var r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==s(t)&&"function"!==typeof t)return{default:t};var e=u();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=r?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n(7294)),o=a(n(5697)),i=a(n(7343)),c=n(3746);function a(t){return t&&t.__esModule?t:{default:t}}function u(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return u=function(){return t},t}function s(t){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return!e||"object"!==s(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h=function(t){function e(){return f(this,e),p(this,d(e).apply(this,arguments))}var n,o,a;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(e,t),n=e,(o=[{key:"componentDidMount",value:function(){(0,i.default)(this.props.accounts,this.props.options,this.props.version);var t=document.createElement("script"),e=this.props.attrs;t.type="text/javascript",t.async=!0,t.src=(0,c.scriptPath)(this.props.version),Object.keys(e).map((function(n){t.__proto__.hasOwnProperty(n)&&t.setAttribute(n,e[n])})),this.insertPoint.insertBefore(t,null)}},{key:"render",value:function(){var t=this;return r.default.createElement(this.props.containerElement,{ref:function(e){t.insertPoint=e}},this.props.children)}}])&&l(n.prototype,o),a&&l(n,a),e}(r.Component);e.YMInitializer=h,h.displayName="YMInitializer",h.propTypes={accounts:o.default.arrayOf(o.default.number).isRequired,containerElement:o.default.string,options:o.default.object,attrs:o.default.object,version:o.default.oneOf(["1","2"])},h.defaultProps={containerElement:"div",options:{},attrs:{},version:"1"}},3746:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.callbackQueueName=function(t){if("1"===t)return"yandex_metrika_callbacks";if("2"===t)return"yandex_metrika_callbacks2";n()},e.scriptPath=function(t){if("1"===t)return"https://mc.yandex.ru/metrika/watch.js";if("2"===t)return"https://mc.yandex.ru/metrika/tag.js";n()},e.trackerConstructorName=function(t){if("1"===t)return"Metrika";if("2"===t)return"Metrika2";n()},e.trackerInstanceName=function(t){return"yaCounter".concat(t)},e.trackerVersionName=function(t){return"yaCounterVersion".concat(t)},e.accountListName=void 0;function n(){throw new Error("invalid Ya.Metrika version")}e.accountListName="yandex_metrika_accounts"},3282:function(t,e,n){"use strict";Object.defineProperty(e,"OR",{enumerable:!0,get:function(){return o.YMInitializer}}),e.ZP=void 0;var r=n(3746),o=n(2541);function i(t,e){try{for(var n,o=arguments.length,i=new Array(o>2?o-2:0),c=2;c<o;c++)i[c-2]=arguments[c];(n=window[(0,r.trackerInstanceName)(t)])[e].apply(n,i)}catch(a){console.warn(a)}}function c(){return"undefined"!==typeof window?window[r.accountListName]:[]}function a(t){return function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];t.forEach((function(t){var e=window[(0,r.trackerVersionName)(t)],o=window[(0,r.callbackQueueName)(e)];o?o.push((function(){return i.apply(void 0,[t].concat(n))})):i.apply(void 0,[t].concat(n))}))}}function u(t){return a(c().filter(t))}var s=function(){return a(c()).apply(void 0,arguments)};e.ZP=s},7343:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"1",o=(0,r.callbackQueueName)(n);window[r.accountListName]=window[r.accountListName]||[],window[r.accountListName]=window[r.accountListName].concat(t),window[o]=window[o]||[],window[o].push((function(){t.forEach((function(t){var o={id:t};try{window[(0,r.trackerInstanceName)(t)]=new(Ya[(0,r.trackerConstructorName)(n)])(Object.assign(o,e))}catch(i){console.warn(i)}}))})),t.forEach((function(t){window[(0,r.trackerVersionName)(t)]=n}))};var r=n(3746)}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],(function(){return e(6363),e(387)}));var n=t.O();_N_E=n}]);