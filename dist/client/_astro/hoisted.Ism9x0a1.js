import"./hoisted.CvN_TNCx.js";const i=document.querySelectorAll('[data-lightbox="true"]'),e=document.querySelector(".app-lightbox"),s=e.querySelector(".portal");for(const t of i)t.addEventListener("click",()=>{s.innerHTML=t.innerHTML,setTimeout(()=>{const o=s.querySelectorAll("img")[0],c=o.naturalWidth/o.naturalHeight;o.sizes=`${window.innerHeight*c}px`},352),e.classList.add("is-active"),document.documentElement.classList.add("scrollIsLocked")});e.addEventListener("click",()=>{e.classList.remove("is-active"),document.documentElement.classList.remove("scrollIsLocked")});document.addEventListener("keydown",t=>{t.key==="Escape"&&(e.classList.remove("is-active"),document.documentElement.classList.remove("scrollIsLocked"))});