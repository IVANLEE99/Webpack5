!function(){var e,t,n={456:function(e,t,n){"use strict";function r(e,t){return e+t}n.r(t),n.d(t,{sum:function(){return r}})}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return n[e](i,i.exports,o),i.exports}o.m=n,o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))},o.u=function(e){return"static/js/count.chunk.js"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="code-split3:",o.l=function(n,r,i,c){if(e[n])e[n].push(r);else{var u,a;if(void 0!==i)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==t+i){u=f;break}}u||(a=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.setAttribute("data-webpack",t+i),u.src=n),e[n]=[r];var d=function(t,r){u.onerror=u.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),a&&document.head.appendChild(u)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../../"}(),function(){var e={792:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=i);var c=o.p+o.u(t),u=new Error;o.l(c,(function(n){if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+c+")",u.name="ChunkLoadError",u.type=i,u.request=c,r[1](u)}}),"chunk-"+t,t)}};var t=function(t,n){var r,i,c=n[0],u=n[1],a=n[2],l=0;if(c.some((function(t){return 0!==e[t]}))){for(r in u)o.o(u,r)&&(o.m[r]=u[r]);a&&a(o)}for(t&&t(n);l<c.length;l++)i=c[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self.webpackChunkcode_split3=self.webpackChunkcode_split3||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),function(){const{sum:e}=o(456);console.log("main.js"),console.log(e(1,899)),document.getElementById("btn").onclick=function(e){o.e(20).then(o.bind(o,655)).then((e=>{console.log(e.default(3,99))})).catch((e=>{console.error(e)})),o.e(20).then(o.bind(o,657)).then((e=>{console.log(e.default(3,99))})).catch((e=>{console.error(e)}))}}()}();