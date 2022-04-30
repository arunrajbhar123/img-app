(()=>{"use strict";var r={400:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,"* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.logo {\r\n    position: absolute;\r\n    font-size: 30px;\r\n    text-transform: uppercase;\r\n}\r\n\r\nnav {\r\n    padding: 20px;\r\n    width: 100%;\r\n    box-shadow: 1px 1px 11px 1px rgb(220, 217, 217);\r\n    font-size: 27px;\r\n    font-weight: bolder;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\n::placeholder {\r\n    font-size: 17px;\r\n    /* color: rgb(193, 186, 186); */\r\n    animation: change 2s linear infinite;\r\n}\r\n\r\n@keyframes change {\r\n    0% {\r\n        color: red;\r\n    }\r\n    15% {\r\n        color: rgb(202, 195, 195);\r\n    }\r\n    25% {\r\n        color: rgb(21, 1, 1);\r\n    }\r\n    50% {\r\n        color: rgb(100, 217, 61);\r\n    }\r\n    75% {\r\n        color: rgb(13, 79, 107);\r\n    }\r\n    100% {\r\n        color: rgb(213, 23, 184);\r\n    }\r\n}\r\n\r\nul {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    margin-right: 25px;\r\n}\r\n\r\nli {\r\n    margin-left: 35px;\r\n    list-style-type: none;\r\n}\r\n\r\ninput {\r\n    width: 550px;\r\n    height: 35px;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    padding-left: 5px;\r\n    border: none;\r\n    box-shadow: 1px 1px 11px -1px rgb(220, 217, 217);\r\n}\r\n\r\n.search-result {\r\n    height: 300px;\r\n    width: 550px;\r\n    background: red;\r\n    padding-left: 5px;\r\n    font-weight: 500;\r\n    font-size: 22px;\r\n    overflow: hidden;\r\n    position: absolute;\r\n}\r\n\r\n.search-result p {\r\n    cursor: pointer;\r\n}\r\n\r\n.search-result p:hover {\r\n    color: rgb(103, 180, 189)\r\n}\r\n\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    grid-gap: 15px;\r\n    padding-top: 35px;\r\n    padding-bottom: 35px;\r\n}\r\n\r\n.container div {\r\n    width: 350px;\r\n    height: 250px;\r\n    margin: auto;\r\n    overflow: hidden;\r\n    border-radius: 5px;\r\n}\r\n\r\n.container div img {\r\n    width: 100%;\r\n    cursor: pointer;\r\n    background-size: cover;\r\n}\r\n\r\n.container div:hover {\r\n    box-shadow: 1px 1px 21px 1px rgb(124, 120, 120);\r\n}\r\n\r\n#cato {\r\n    padding-top: 28px;\r\n    padding-left: 12px;\r\n    margin: 12px;\r\n}\r\n\r\n#cato a {\r\n    background: rgb(61, 59, 59);\r\n    padding: 12px;\r\n    font-size: 22px;\r\n    margin-left: 12px;\r\n    color: #fff;\r\n    border-radius: 5px;\r\n}",""]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<r.length;p++){var l=[].concat(r[p]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],p=t.base?s[0]+t.base:s[0],l=a[p]||0,d="".concat(p," ").concat(l);a[p]=l+1;var u=e(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var h=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=t(r,o),p=0;p<a.length;p++){var l=e(a[p]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return r[t](a,a.exports,e),a.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r=e(379),n=e.n(r),t=e(795),o=e.n(t),a=e(569),i=e.n(a),c=e(565),s=e.n(c),p=e(216),l=e.n(p),d=e(589),u=e.n(d),f=e(400),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;let v=async(r,n)=>{try{const e=await fetch(`https://api.unsplash.com//search/photos?per_page=40&query=${n}&client_id=${r}`);return await e.json()}catch(r){console.log(r)}},g=(r,n)=>{console.log(r),r.forEach((({urls:{regular:r}})=>{let e=document.createElement("div"),t=document.createElement("img");t.src=r,e.append(t),n.append(e)}))};const x="CrvtbUbzHzBd29vfQnk4aO0sG--8Wv2XrA2cy82iPlY";document.querySelector("nav").innerHTML='\n  <div class="logo">Rendering</div>\n  <ul>\n\n      <li>\n          <input type="text" id="query" placeholder="Search ................">  \n          </div>\n      </li>\n  </ul>';var m=document.querySelector("#cato").children;function y(){v(x,this.id).then((r=>{var n=document.querySelector(".container");n.innerHTML=null,g(r.results,n)}))}for(let r of m)r.addEventListener("click",y);document.querySelector("#query").addEventListener("keydown",(function(r){if("Enter"===r.key){let r=document.querySelector("#query").value;v(x,r).then((r=>{var n=document.querySelector(".container");n.innerHTML=null,g(r.results,n)}))}}))})()})();