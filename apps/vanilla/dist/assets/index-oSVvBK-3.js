(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function c(n){let o=0;const r=i=>{o=i,n.innerHTML=`count is ${o}`};n.addEventListener("click",()=>r(o+1)),r(0)}const l="/javascript.svg",a="/vite.svg",d={init:()=>{window.addEventListener("DOMContentLoaded",()=>{document.querySelector("#app").innerHTML=`
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="${a}" class="logo" alt="Vite logo" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
            <img src="${l}" class="logo vanilla" alt="JavaScript logo" />
          </a>
          <h1>Hello Vite!</h1>
          <div class="card">
            <button id="counter" type="button"></button>
          </div>
          <p class="read-the-docs">
            Click on the Vite logo to learn more
          </p>
        </div>
      `,c(document.querySelector("#counter"))})}};d.init();
