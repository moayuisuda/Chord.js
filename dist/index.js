!function(e){function t(t){for(var n,r,l=t[0],c=t[1],u=0,a=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&a.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(i&&i(t);a.length;)a.shift()()}var n={},o={0:0};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var l=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=l);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=function(e){return r.p+"chunks/"+({}[e]||e)+".min.js"}(e);var i=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(a);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+l+")",i.name="ChunkLoadError",i.type=r,i.request=l,n[1](i)}o[e]=void 0}};var a=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var i=c;r(r.s=4)}([function(e,t,n){"use strict";let o={0:["C"],1:["C#","Db"],2:["D"],3:["D#","Bb"],4:["E"],5:["F"],6:["F#","Gb"],7:["G"],8:["G#","Ab"],9:["A"],10:["A#","Bb"],11:["B"]},r={C:0,"C#":1,Db:1,D:2,"D#":3,Eb:3,E:4,Fb:4,"E#":5,F:5,"F#":6,Gb:6,G:7,"G#":8,Ab:8,A:9,"A#":10,Bb:10,B:11},l={"#2":3,b3:3,"#4":6,b5:6,"#4":8,b6:8,"#6":10,b7:10,"#8":13,b9:13,"#9":13,b10:13,"#11":18,b12:18,"#12":20,b13:20,"#13":22,b14:22,2:2,3:4,4:5,5:7,6:9,7:11,8:12,9:14,10:16,11:17,12:19,13:21,14:23,15:24},c=new Map([["m7",[3,7,10]],["m9",[3,7,10,14]],["m11",[3,7,10,14,17]],["M7",[4,7,11]],["M9",[4,7,11,14]],["M11",[4,7,11,14,17]],["aug",[4,8]],["dim",[3,6]],["sus2",[2,7]],["sus4",[5,7]],["7",[4,7,10]],["9",[4,7,10,14]],["11",[3,7,11,14,17]],["m",[3,7]],["",[4,7]]]),u={ionian:[2,2,1,2,2,2,1],major:[2,2,1,2,2,2,1],dorian:[2,1,2,2,2,1,2],phrygian:[1,2,2,2,1,2,2],lydian:[2,2,2,1,2,2,1],mixolydian:[2,2,1,2,2,1,2],aeolian:[2,1,2,2,1,2,2],minor:[2,1,2,2,1,2,2],locrian:[1,2,2,1,2,2,2]};function i(e){let t=e.match(/[A-G](#|b)?/);if(t)return t[0];throw`[Rad] Can't resolve the root note for "${e}"`}function a(e){let t=null;for(let[n]of c){let o=new RegExp(`^[A-G](#|b)?(${n}\\d{0,2})`);if(t=e.match(o))return t[2]}throw`[Rad] Can't find a chord type matched "${e}"`}function s(e){let t,n=[],o=/add((#|b)?\d{1,2})/g;for(;t=o.exec(e);)n.push(t[1]);return n}function f(e){let t,n=[],o=/omit((#|b)?\d{1,2})/g;for(;t=o.exec(e);)n.push(t[1]);return n}function d(e){let t=e.match(/\/([A-G](#|b)?)/);if(t)return t[1]}function p(e){return"#"==e?0:1}function h(e,t,n){if(n){let o=e[0],r=noteToInterval(e[1]),l=noteToInterval(t);if(r=l)return;r>l?e.splice(0,1,t+n):e.splice(0,1,t+(n-1)),e.push(i(o)+(Number(o.match(/\d/)[0])+1))}else e.unshift(t)}function m(e){if(!(e instanceof Object))return e;let t="[object Object]"===Object.prototype.toString.call(e)?{}:[];for(let n in e)t[n]=e instanceof Object?m(e[n]):e[n];return t}function b(e,t){let n,o=[e];for(let r of t)n=e+r,o.push(n);return o}function y(e,t,n){let o,r,l,c=[],u=p(n);for(let n of e){for(o=t;n>=12;)n-=12,o++;l=(r=C(n))[u]?r[u]:r[0],c.push(l+o)}return c}function v(e,t){let n,o,r=[],l=p(t);for(let t of e){for(;t>=12;)t-=12;o=(n=C(t))[l]?n[l]:n[0],r.push(o)}return r}function g(e){let t=[];for(let n=0;n<e.length;n++)n?t.push(t[n-1]+e[n]):t.push(e[n]);return t}function S([e,t,n],o){let r,l=p(o);r=[t-e,n-e].join("-");let u=function(e){let t={};for(let[n,o]of e.entries())t[o.join("-")]=n;return t}(c)[r];for(;e>=12;)e-=12;return C(e)[l]+u}function j(e){let t=r[e];if("[object Undefined]"!==Object.prototype.toString.call(t))return t;throw`[Rad] Can't convert "${e}" into interval `}function w(e){let t=u[e];if(t)return m(t);throw`[Rad] Can't find a scale matched "${e}"`}function C(e){return o[e]}function O(e){let t=l[e];if(t)return t;throw`[Rad] Can't find a interval matched "${e}", the max degree is 15`}function _({root:e,type:t,add:n,omit:o,on:r},l,u="#"){let i=[],a=function(e){return m(c.get(e))}(t),s=j(e);n.map(e=>{a.push(O(e))}),a.sort((e,t)=>e-t);for(let e=0;e<o.length;e++)for(let t=0;t<a.length;t++)O(o[e])==a[t]&&a.splice(t,1);let f=b(s,a);return i=l?y(f,l,u):v(f,u),r&&h(i,r,l),i}function q(e,t,n){let o="[object Object]"===Object.prototype.toString.call(e)?_(e,t,n):_({root:i(r=e),type:a(r),add:s(r),omit:f(r),on:d(r)},t,n);var r;return console.log(o),o}function P(e,t,n){return function({root:e,type:t},n=4,o="#"){let r=b(j(e),g(w(t)));return n?y(r,n,o):v(r,o)}(e,t,n)}function x(e){return function({root:e,type:t},n="#"){let o=[],r=[],l=b(j(e),g(w(t)));r=r.concat(l);for(let e=1;e<5;e++)r.push(l[e]+12);for(let e=0;e<l.length-1;e++)o.push(S([r[e],r[e+2],r[e+4]],n));return o}(e)}n.d(t,"a",(function(){return q})),n.d(t,"b",(function(){return P})),n.d(t,"c",(function(){return x}))},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3);var o=n(0);(function(){let e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!0;for(let o=0;o<t.length;o++)if(e.indexOf(t[o])>0){n=!1;break}return n})()||alert("Use me with PC to get more fun!"),function(){let e=document.querySelector(".wave--one"),t=document.querySelector(".wave--two");e.style.animationDuration=Math.ceil(360/70)+"s",t.style.animationDuration=Math.ceil(360/70)+"s"}(),function(){let e=document.querySelector(".chord_name"),t=document.querySelector(".chord_octave"),n=document.querySelector(".chord_signType");e.value="Cm7",t.value=4,n.value="#",document.querySelector(".chord_btn").addEventListener("click",(function(r){let l,c=e.value,u=t.value,i=n.value;try{l=Object(o.a)(c,u,i)}catch(r){return void console.log(r)}let a=document.querySelector(".chord_result");if(l){for(;a.childNodes[0];)a.removeChild(a.childNodes[0]);for(let e of l){let t=e,n=document.createElement("span");n.className="result_item",n.innerHTML=t,a.appendChild(n)}}}))}(),function(){let e=document.querySelector(".scale_root"),t=document.querySelector(".scale_type"),n=document.querySelector(".scale_octave"),r=document.querySelector(".scale_signType");e.value="C",t.selectedIndex=0,n.value=4,r.value="#",document.querySelector(".scale_btn").addEventListener("click",(function(l){let c,u=e.value,i=t.options[t.selectedIndex].value,a=n.value,s=r.value;try{c=Object(o.b)({root:u,type:i},a,s)}catch(l){return void console.log(l)}let f=document.querySelector(".scale_result");if(c){for(;f.childNodes[0];)f.removeChild(f.childNodes[0]);for(let e of c){let t=e,n=document.createElement("span");n.className="result_item",n.innerHTML=t,f.appendChild(n)}}}))}(),function(){document.querySelector(".scaleChords_btn").addEventListener("click",(function(n){let r,l=e.value,c=t.options[t.selectedIndex].value;try{r=Object(o.c)({root:l,type:c})}catch(n){return void console.log(n)}console.log("result",r);let u=document.querySelector(".scaleChords_result");if(r){for(;u.childNodes[0];)u.removeChild(u.childNodes[0]);for(let e of r){let t=e,n=document.createElement("span");n.className="result_item",n.innerHTML=t,u.appendChild(n)}}}));let e=document.querySelector(".scaleChords_root"),t=document.querySelector(".scaleChords_type");e.value="C"}(),function(){let e=document.querySelector("#progression");new IntersectionObserver(e=>{for(let t of e)console.log(t),t.isIntersecting&&Promise.all([n.e(1),n.e(2)]).then(n.bind(null,11)).then(e=>{e.instance.$mount(t.target);let n=document.querySelector("#progression");n.offsetTop,n.style.opacity=1,n.style.transform="translate(0)"})},{threshold:.5}).observe(e)}()}]);
//# sourceMappingURL=index.js.map