(()=>{"use strict";!function(){let e=[];const t=document.querySelector("#locationList"),n=document.querySelector("#locationInput");function i(e,t){if(!e)return;t.innderHTML="";let n="";e.forEach((e=>{n+=`\n        <li class="search-form__list-item">${e}</li>\n        `})),t.innerHTML=n}n.addEventListener("input",(function(){var l,o;i((l=e,o=n.value,l.filter((e=>e.toLowerCase().includes(o.toLowerCase())))),t)})),n.addEventListener("focus",(function(){t.classList.add("show")})),t.addEventListener("click",(function(e){n.value=e.target.innerText,t.classList.remove("show")})),fetch("https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-cities-demographics&q=&rows=50").then((e=>e.json())).then((n=>{e=n.records.map((e=>e.fields.city+", "+e.fields.state)).sort(),i(e,t)}))}(),function(){const e=document.querySelector(".gallery"),t=[...document.querySelectorAll(".gallery__item")],n=document.querySelector("#galleryPrevious"),i=document.querySelector("#galleryNext");o();let l=function(e,t){let n=!1,i=null,l=null;return function t(){if(n)return i=arguments,void(l=this);e.apply(this,arguments),n=!0,setTimeout((function(){n=!1,i&&(t.apply(l,i),i=null,l=null)}),100)}}(o);function o(){t.forEach((e=>{let t=document.documentElement.clientWidth,n=e.getBoundingClientRect(),i=n.right<t/2-30,l=n.right<t/2-60-n.width;i&&!l?(e.classList.add("gallery__image--big"),e.classList.remove("gallery__image--small")):(e.classList.remove("gallery__image--big"),e.classList.add("gallery__image--small"))}))}e.addEventListener("scroll",l),n.addEventListener("click",(()=>{e.scrollBy({left:-150,top:0,behavior:"smooth"})})),i.addEventListener("click",(()=>{e.scrollBy({left:150,top:0,behavior:"smooth"})}))}(),function(){const e=document.querySelector("#scrollbar"),t=document.querySelector("#scrollbarThumb"),n=document.querySelector(".reviews"),i=document.querySelectorAll(".reviews__item"),l=i[i.length-1];let o=n.getBoundingClientRect(),r=l.getBoundingClientRect();const c=(e,n)=>()=>{let i=Math.floor(e.getBoundingClientRect().width/n.getBoundingClientRect().right*100)+"%";t.style.width=i,o=e.getBoundingClientRect()};function s(){let i=n.getBoundingClientRect(),c=l.getBoundingClientRect(),s=t.getBoundingClientRect(),d=e.getBoundingClientRect(),u=r.right-o.right,a=(c.right-i.width)/u;t.style.right=(d.width-s.width)*a+"px"}n.addEventListener("scroll",s),window.addEventListener("resize",c(n,l)),window.addEventListener("resize",s),c(n,l)(),s()}(),function(){const e=document.querySelector(".reviews"),t=document.querySelector("#reviewPrevious"),n=document.querySelector("#reviewNext");t.addEventListener("click",(()=>{e.scrollBy({left:-150,top:0,behavior:"smooth"})})),n.addEventListener("click",(()=>{e.scrollBy({left:150,top:0,behavior:"smooth"})}))}()})();