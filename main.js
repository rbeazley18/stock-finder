(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(81),o=t.n(r),i=t(645),s=t.n(i),a=t(667),c=t.n(a),l=new URL(t(67),t.b),d=s()(o()),u=c()(l);d.push([e.id,"@font-face {\r\n    font-family: 'NunitoSans-Black';\r\n    src: url("+u+') format(\'ttf\');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n  }\r\n\r\n\r\n:root {\r\n    --main-bg-color: rgb(100, 99, 99);\r\n\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    \r\n}\r\n\r\n.container {\r\n    border: 5px solid black;\r\n    font-family: "NunitoSans-Black";\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    font-size: 80px;\r\n}\r\n\r\nbutton {\r\n    background-color: blueviolet;\r\n    color: white;\r\n    cursor: pointer;\r\n    border: none;\r\n    border-radius: 5px;\r\n    font-size: 18px;\r\n    align-items: start;\r\n    text-align: center\r\n}\r\n\r\n.searchButton {\r\n    position: relative;\r\n    margin-left: -4px;\r\n    border-top-left-radius: 0%;\r\n    border-bottom-left-radius: 0%;\r\n    width: 80px;\r\n    height: 46px;\r\n}\r\n\r\n\r\n\r\nbutton:hover {\r\n    background-color: white;\r\n    color: blueviolet;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-color: blueviolet;\r\n    \r\n}\r\n\r\n.searchBarForm {\r\n    text-align: center;\r\n    margin-top: 20px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    \r\n}\r\n\r\n.searchBar {\r\n    position: relative;\r\n    height: 40px;\r\n    font-size: 18px;\r\n    max-width: 600px;\r\n    width: 50%;\r\n    margin: 0;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-right: none;\r\n    border-radius: 5px 0 0 5px;\r\n} \r\n\r\n.searchBar:focus {\r\n    outline: none;\r\n}\r\n\r\n.stockValues {\r\n    display: none;\r\n    background-color: rgb(33, 43, 17);\r\n    width: fit-content;\r\n    border-radius: 10px;\r\n    text-align: left;\r\n    color: rgb(255, 255, 255);\r\n    padding: 20px;\r\n}\r\n\r\n.stockValues.show {\r\n    display: block;\r\n}\r\n\r\n.companyInfo {\r\n    display: none;\r\n    background-color: rgb(0, 0, 255);\r\n    font-size: 20px;\r\n    border-radius: 10px;\r\n    color: white;\r\n    padding: 20px;\r\n}\r\n\r\n.companyInfo.show {\r\n    display: block;\r\n}\r\n\r\n.timeframeButtons {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.lastRefreshed::before {\r\n    content: "Last Refreshed: ";\r\n}\r\n\r\n.high::before {\r\n    content: "High: ";\r\n}\r\n\r\n.low::before {\r\n    content: "Low: ";\r\n}\r\n\r\n.open::before {\r\n    content: "Open: ";\r\n}\r\n\r\n.close::before {\r\n    content: "Close: ";\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\n.exchange::before {\r\n    content: "Exchange: ";\r\n}\r\n\r\n.country::before {\r\n    content: "Country: ";\r\n}\r\n\r\n.sector::before {\r\n    content: "Sector: ";\r\n}\r\n\r\n.industry::before {\r\n    content: "Industry: ";\r\n}\r\n\r\n.peRatio::before {\r\n    content: "PE Ratio: ";\r\n}\r\n\r\n.dividendYield::before {\r\n    content: "Dividend Yield: ";\r\n}\r\n\r\n.fiftyTwoWeekHigh::before {\r\n    content: "52 Week High: ";\r\n}\r\n\r\n.fiftyTwoWeekLow::before {\r\n    content: "52 Week Low: ";\r\n}\r\n\r\n.earningsPerShare::before {\r\n    content: "EPS: ";\r\n}',""]);const f=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},s=[],a=0;a<e.length;a++){var c=e[a],l=r.base?c[0]+r.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var f=t(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var h=o(p,r);r.byIndex=a,n.splice(a,0,{identifier:u,updater:h,references:1})}s.push(u)}return s}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=t(i[s]);n[a].references--}for(var c=r(e,o),l=0;l<i.length;l++){var d=t(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},655:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},67:(e,n,t)=>{e.exports=t.p+"5bb7ef891454c53a6c38.ttf"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{function e(){return document.getElementById("search-bar").value}function n(){const e=document.querySelectorAll(".timeframeButtons");return e.forEach((e=>{e.style.color="black"})),e}const r=(e,n)=>{document.getElementById(e).style.color=n},o=(e,n,t)=>{const r=document.createElement(e);for(Object.key in n)r.setAttribute(Object.key,n[Object.key]);return r.textContent=t,r};function i(){const e=document.getElementById("stock-values");return e.classList.add("show"),e}function s(){const e=document.getElementById("stock-values");return e.classList.remove("show"),e.innerHTML="",e}function a(e){const n=document.getElementById("error-message");return n.textContent="No Data Found",n}function c(){const e=document.getElementById("error-message");return e.innerHTML="",e}function l(e){const n=e.substring(0,4);return`${e.substring(5,7)}/${e.substring(8,10)}/${n} ${e.substring(11,16)}`}async function d(){c(),s(),n(),r("intraday-btn","red");const t=e();console.log(t);try{const e=`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${t}&interval=5min&apikey=JCXH7RL2H20I2NAG`,n=await fetch(e,{mode:"cors"}),r=await n.json();console.log(r);const s=r["Meta Data"]["3. Last Refreshed"];console.log(s);const a=o("li",{id:"last-refreshed",class:"lastRefreshed"},l(s)),c=o("li",{id:"intraday-high",class:"high"},r["Time Series (5min)"][s]["2. high"]),d=o("li",{id:"intraday-low",class:"low"},r["Time Series (5min)"][s]["3. low"]),u=o("li",{id:"intraday-open",class:"open"},r["Time Series (5min)"][s]["1. open"]),f=o("li",{id:"intraday-close",class:"close"},r["Time Series (5min)"][s]["4. close"]);i().append(a,c,d,u,f)}catch(e){console.log(e),a()}}async function u(){c(),s(),n(),r("daily-btn","red");const t=e();console.log(t);try{const e=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${t}&apikey=JCXH7RL2H20I2NAG`,n=await fetch(e,{mode:"cors"}),r=await n.json();console.log(r);const s=r["Meta Data"]["3. Last Refreshed"].slice(0,10),a=o("li",{id:"last-refreshed",class:"lastRefreshed"},l(s)),c=o("li",{id:"daily-high",class:"high"},r["Time Series (Daily)"][s]["2. high"]),d=o("li",{id:"daily-low",class:"low"},r["Time Series (Daily)"][s]["3. low"]),u=o("li",{id:"daily-open",class:"open"},r["Time Series (Daily)"][s]["1. open"]),f=o("li",{id:"daily-close",class:"close"},r["Time Series (Daily)"][s]["4. close"]);i().append(a,c,d,u,f)}catch(e){s(),console.log(e),a()}}async function f(){c(),s(),n(),r("weekly-btn","red");const t=e();console.log(t);try{const e=await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${t}&apikey=JCXH7RL2H20I2NAG`,{mode:"cors"}),n=await e.json();console.log(n);const r=n["Meta Data"]["3. Last Refreshed"].slice(0,10),s=o("li",{id:"last-refreshed",class:"lastRefreshed"},l(r)),a=o("li",{id:"weekly-high",class:"high"},n["Weekly Time Series"][r]["2. high"]),c=o("li",{id:"weekly-low",class:"low"},n["Weekly Time Series"][r]["3. low"]),d=o("li",{id:"weekly-open",class:"open"},n["Weekly Time Series"][r]["1. open"]),u=o("li",{id:"weekly-close",class:"close"},n["Weekly Time Series"][r]["4. close"]);i().append(s,a,c,d,u)}catch(e){console.log(e),a()}}async function p(){c(),s(),n(),r("monthly-btn","red");const t=e();console.log(t);try{const e=await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${t}&apikey=JCXH7RL2H20I2NAG`,{mode:"cors"}),n=await e.json();console.log(n);const r=n["Meta Data"]["3. Last Refreshed"].slice(0,10),s=o("li",{id:"last-refreshed",class:"lastRefreshed"},l(r)),a=o("li",{id:"monthly-high",class:"high"},n["Monthly Time Series"][r]["2. high"]),c=o("li",{id:"monthly-low",class:"low"},n["Monthly Time Series"][r]["3. low"]),d=o("li",{id:"monthly-open",class:"open"},n["Monthly Time Series"][r]["1. open"]),u=o("li",{id:"monthly-close",class:"close"},n["Monthly Time Series"][r]["4. close"]);i().append(s,a,c,d,u)}catch(e){console.log(e),a()}}var h=t(379),y=t.n(h),m=t(795),g=t.n(m),b=t(569),w=t.n(b),v=t(565),k=t.n(v),x=t(216),E=t.n(x),S=t(655),T=t.n(S),I=t(426),L={};L.styleTagTransform=T(),L.setAttributes=k(),L.insert=w().bind(null,"head"),L.domAPI=g(),L.insertStyleElement=E(),y()(I.Z,L),I.Z&&I.Z.locals&&I.Z.locals,document.getElementById("submit-ticker").addEventListener("click",(function(){!function(){const e=document.getElementById("timeframe-buttons");e.innerHTML="";const n=o("button",{id:"intraday-btn",class:"timeframeButtons"},"Intraday");n.addEventListener("click",d);const t=o("button",{id:"daily-btn",class:"timeframeButtons"},"Daily");t.addEventListener("click",u);const r=o("button",{id:"weekly-btn",class:"timeframeButtons"},"Weekly");r.addEventListener("click",f);const i=o("button",{id:"monthly-btn",class:"timeframeButtons"},"Monthly");i.addEventListener("click",p),e.append(n,t,r,i)}(),u(),async function(){c(),function(){const e=document.getElementById("company-info");e.classList.remove("show"),e.innerHTML=""}();const n=e();try{const e=await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${n}&apikey=JCXH7RL2H20I2NAG`,{mode:"cors"}),t=await e.json();console.log(t);const r=o("li",{id:"symbol",class:"symbol"},t.Symbol),i=o("li",{id:"asset-type",class:"assetType"},t.AssetType),s=o("li",{id:"name",class:"name"},t.Name),a=o("li",{id:"description",class:"description"},t.Description),c=o("li",{id:"exchange",class:"exchange"},t.Exchange),l=o("li",{id:"country",class:"country"},t.Country),d=o("li",{id:"sector",class:"sector"},t.Sector),u=o("li",{id:"industry",class:"industry"},t.Industry),f=o("li",{id:"peRatio",class:"peRatio"},t.PERatio),p=o("li",{id:"dividend-yield",class:"dividendYield"},100*t.DividendYield+"%"),h=o("li",{id:"fifty-two-week-high",class:"fiftyTwoWeekHigh"},t["52WeekHigh"]),y=o("li",{id:"fifty-two-week-low",class:"fiftyTwoWeekLow"},t["52WeekLow"]),m=o("li",{id:"earnings-per-share",class:"earningsPerShare"},t.EPS);(function(){const e=document.getElementById("company-info");return e.classList.add("show"),e})().append(r,i,s,a,c,l,d,u,f,m,p,h,y)}catch(e){console.log(e),a()}}()}))})()})();