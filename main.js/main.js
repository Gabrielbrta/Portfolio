(()=>{"use strict";var e,t,n,c,o;document.documentElement.className=" js",e=".nome-home",t=document.querySelector(e).innerHTML.split(""),(n=document.querySelector(e)).innerText="",t.forEach((function(e,t){setTimeout((function(){n.innerHTML+=e}),150*t)})),function(){var e,t,n=document.querySelectorAll("[data-anime]");if(n.length){var c=function(){n.forEach((function(e){e.getBoundingClientRect().top<.8*window.innerHeight?e.classList.add("active"):e.classList.remove("active")}))};c(),window.addEventListener("scroll",(e=c,200,function(){for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];t&&clearTimeout(t),t=setTimeout((function(){e.apply(void 0,c),t=null}),200)}))}}(),c=document.querySelectorAll('[data-tech="icon"]'),o=document.querySelectorAll('[data-tech="description"]'),c.length&&o.length&&c.forEach((function(e,t){e.addEventListener("click",(function(){o.forEach((function(e){e.classList.remove("active")})),o[t].classList.add("active")}))})),function(){var e=document.querySelector(".btn-fechar"),t=document.querySelector(".btn-menu"),n=document.querySelector(".menu-mobile"),c=document.querySelectorAll(".mobile-links li"),o=document.querySelectorAll("section[id]");if(o.length&&c.length){var i=function(e){e.preventDefault(),n.classList.toggle("active")};["touchstart","click"].forEach((function(n){t.addEventListener(n,i),e.addEventListener(n,i)})),c.forEach((function(e,t){return e.addEventListener("click",(function(e){i(e),function(e){o[e].scrollIntoView({block:"start",behavior:"smooth"})}(t)}))}))}}()})();