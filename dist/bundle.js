(()=>{"use strict";var e={208:(e,t,i)=>{i.d(t,{A:()=>r});var n=i(601),a=i.n(n),u=i(314),s=i.n(u)()(a());s.push([e.id,"body {\n  padding: 20px;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-template-rows: auto;\n  align-items: center;\n  column-gap: 5px;\n}\n\n.text {\n  align-self: center;\n  justify-self: center;\n}\n\np {\n  padding: 0;\n  margin: 0;\n}\n\n.image {\n  align-self: start;\n  justify-self: center;\n}\n\nimg {\n  max-width: 100%;\n  max-height: 100%;\n}",""]);const r=s},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",n=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),n&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),n&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,n,a,u){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(s[o]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);n&&s[c[0]]||(void 0!==u&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=u),i&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=i):c[2]=i),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),t.push(c))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function i(e){for(var i=-1,n=0;n<t.length;n++)if(t[n].identifier===e){i=n;break}return i}function n(e,n){for(var u={},s=[],r=0;r<e.length;r++){var o=e[r],l=n.base?o[0]+n.base:o[0],c=u[l]||0,m="".concat(l," ").concat(c);u[l]=c+1;var d=i(m),p={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var v=a(p,n);n.byIndex=r,t.splice(r,0,{identifier:m,updater:v,references:1})}s.push(m)}return s}function a(e,t){var i=t.domAPI(t);return i.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;i.update(e=t)}else i.remove()}}e.exports=function(e,a){var u=n(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<u.length;s++){var r=i(u[s]);t[r].references--}for(var o=n(e,a),l=0;l<u.length;l++){var c=i(u[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}u=o}}},659:e=>{var t={};e.exports=function(e,i){var n=function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,i)=>{e.exports=function(e){var t=i.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(i){!function(e,t,i){var n="";i.supports&&(n+="@supports (".concat(i.supports,") {")),i.media&&(n+="@media ".concat(i.media," {"));var a=void 0!==i.layer;a&&(n+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),n+=i.css,a&&(n+="}"),i.media&&(n+="}"),i.supports&&(n+="}");var u=i.sourceMap;u&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(u))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,i)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function i(n){var a=t[n];if(void 0!==a)return a.exports;var u=t[n]={id:n,exports:{}};return e[n](u,u.exports,i),u.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var a=n.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=n[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),i.nc=void 0,(()=>{var e=i(72),t=i.n(e),n=i(825),a=i.n(n),u=i(659),s=i.n(u),r=i(56),o=i.n(r),l=i(540),c=i.n(l),m=i(113),d=i.n(m),p=i(208),v={};v.styleTagTransform=d(),v.setAttributes=o(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=c(),t()(p.A,v),p.A&&p.A.locals&&p.A.locals;const f=i.p+"b08bf90f3563aa5effd3.jpg",g=document.querySelector("#content"),h=document.querySelector("#home"),b=document.querySelector("#about"),q=document.querySelector("#menu");function y(){const e=document.createElement("div"),t=document.createElement("div");t.classList.add("container");const i=document.createElement("div");i.classList.add("text");const n=document.createElement("h1");n.innerHTML="Home",e.append(n);const a=document.createElement("p");a.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et convallis lectus. Nulla pellentesque erat vitae justo hendrerit fermentum. Nunc quis hendrerit tortor. Sed in arcu ultricies, volutpat enim maximus, fermentum mauris. Ut quis tortor nisi. Nulla facilisi. Donec dolor dolor, faucibus nec tincidunt id, hendrerit in sem. Mauris eget mi placerat risus molestie aliquam. Pellentesque tempor massa nunc. Nulla lorem est, pellentesque vitae luctus id, auctor eget libero. Mauris nibh neque, elementum a diam quis, posuere vehicula odio. Sed a aliquet nulla. Vivamus leo lacus, auctor sed tortor vitae, feugiat sodales mi. Duis ac convallis nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat ipsum at odio tempor maximus ac eu enim. Cras lobortis, ex at aliquam aliquet, massa lorem semper ligula, id maximus est nulla sit amet massa. Morbi eget tellus non tellus pulvinar congue eu in augue. Integer nec dui arcu. Pellentesque sodales purus sollicitudin ligula maximus aliquet. Sed at sem enim. Quisque orci nisl, efficitur condimentum neque non, gravida auctor nisi. Ut eget tincidunt diam. Maecenas sed condimentum libero. Duis in volutpat sem, ut convallis est. Vestibulum ac ultricies nisl, ut mattis odio. In efficitur bibendum luctus. Quisque sollicitudin hendrerit dolor sed cursus. Vivamus non diam at tellus dignissim pretium. Vestibulum vel tincidunt ex. Aliquam maximus leo eget lacinia convallis. Nulla facilisi. Proin ultricies interdum tempus. Nunc et ligula laoreet, facilisis ipsum ut, commodo mauris. In ipsum sapien, laoreet quis facilisis ac, lobortis sit amet libero. Nulla vitae sollicitudin eros, vel molestie ante. Cras sit amet dui urna. Fusce pretium viverra urna, sit amet tincidunt orci accumsan ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam ac metus eget lorem volutpat laoreet. Mauris mattis leo vel dui malesuada aliquam. Sed commodo dignissim lectus, ac luctus ex hendrerit eu. Donec eu sapien id augue gravida auctor. Nunc eu odio posuere, viverra leo a, accumsan tellus. Nunc interdum urna in felis porttitor, vitae interdum elit sollicitudin. Integer semper viverra est ut vestibulum. Cras eu vestibulum justo. Donec vel commodo nisi, in tincidunt felis. Donec eget tortor rhoncus, sagittis nisl id, viverra tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque turpis felis, molestie eget sem ac, consectetur blandit elit. Proin suscipit eget nunc consectetur euismod.",i.append(a),t.append(i);const u=document.createElement("div");u.classList.add("image");const s=new Image;return s.src=f,u.append(s),t.append(u),e.append(t),e}h.addEventListener("click",(()=>{g.removeChild(g.lastChild),g.append(y())})),q.addEventListener("click",(()=>{g.removeChild(g.lastChild),g.append(function(){const e=document.createElement("div"),t=document.createElement("h1");t.innerHTML="Menu",e.append(t);const i=document.createElement("ul");return["Pizza","Burger","Butter","Rolls","Ribs","BBQ"].forEach((e=>{const t=document.createElement("li");t.innerHTML=e,i.append(t)})),e.append(i),e}())})),b.addEventListener("click",(()=>{g.removeChild(g.lastChild),g.append(function(){const e=document.createElement("div"),t=document.createElement("h1");t.innerHTML="About",e.append(t);const i=document.createElement("p");return i.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et convallis lectus. Nulla pellentesque erat vitae justo hendrerit fermentum. Nunc quis hendrerit tortor. Sed in arcu ultricies, volutpat enim maximus, fermentum mauris. Ut quis tortor nisi. Nulla facilisi. Donec dolor dolor, faucibus nec tincidunt id, hendrerit in sem. Mauris eget mi placerat risus molestie aliquam. Pellentesque tempor massa nunc. Nulla lorem est, pellentesque vitae luctus id, auctor eget libero. Mauris nibh neque, elementum a diam quis, posuere vehicula odio. Sed a aliquet nulla. Vivamus leo lacus, auctor sed tortor vitae, feugiat sodales mi. Duis ac convallis nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat ipsum at odio tempor maximus ac eu enim. Cras lobortis, ex at aliquam aliquet, massa lorem semper ligula, id maximus est nulla sit amet massa. Morbi eget tellus non tellus pulvinar congue eu in augue. Integer nec dui arcu. Pellentesque sodales purus sollicitudin ligula maximus aliquet. Sed at sem enim. Quisque orci nisl, efficitur condimentum neque non, gravida auctor nisi. Ut eget tincidunt diam. Maecenas sed condimentum libero. Duis in volutpat sem, ut convallis est. Vestibulum ac ultricies nisl, ut mattis odio. In efficitur bibendum luctus. Quisque sollicitudin hendrerit dolor sed cursus. Vivamus non diam at tellus dignissim pretium. Vestibulum vel tincidunt ex. Aliquam maximus leo eget lacinia convallis. Nulla facilisi. Proin ultricies interdum tempus. Nunc et ligula laoreet, facilisis ipsum ut, commodo mauris. In ipsum sapien, laoreet quis facilisis ac, lobortis sit amet libero. Nulla vitae sollicitudin eros, vel molestie ante. Cras sit amet dui urna. Fusce pretium viverra urna, sit amet tincidunt orci accumsan ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam ac metus eget lorem volutpat laoreet. Mauris mattis leo vel dui malesuada aliquam. Sed commodo dignissim lectus, ac luctus ex hendrerit eu. Donec eu sapien id augue gravida auctor. Nunc eu odio posuere, viverra leo a, accumsan tellus. Nunc interdum urna in felis porttitor, vitae interdum elit sollicitudin. Integer semper viverra est ut vestibulum. Cras eu vestibulum justo. Donec vel commodo nisi, in tincidunt felis. Donec eget tortor rhoncus, sagittis nisl id, viverra tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque turpis felis, molestie eget sem ac, consectetur blandit elit. Proin suscipit eget nunc consectetur euismod.",e.append(i),e}())})),g.append(y())})()})();