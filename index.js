import{a as w,S as b,i as l}from"./assets/vendor-CEPt6wsP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const M="https://pixabay.com/api/",S="53372962-e1472c27af09e15e68765cdc2";async function m(s,t){return(await w.get(M,{params:{key:S,q:s,page:t,per_page:f,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const q=new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function y(s){const t=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:n,comments:g,downloads:L})=>`
        <li>
              <a href="${i}"
                ><img src="${o}" alt="${e}" />
                <ul>
                  <li>
                    <h3>Likes</h3>
                    <p>${r}</p>
                  </li>
                  <li>
                    <h3>Views</h3>
                    <p>${n}</p>
                  </li>
                  <li>
                    <h3>comments</h3>
                    <p>${g}</p>
                  </li>
                  <li>
                    <h3>downloads</h3>
                    <p>${L}</p>
                  </li></ul
              ></a>
            </li>`).join("");a.galleryList.insertAdjacentHTML("beforeend",t),q.refresh()}function B(){a.galleryList.innerHTML=""}function v(){a.loader.classList.remove("loader-hidden")}function d(){a.loader.classList.add("loader-hidden")}function P(){a.showMoreBtn.classList.remove("btn-hidden")}function p(){a.showMoreBtn.classList.add("btn-hidden")}const a={form:document.querySelector(".form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),showMoreBtn:document.querySelector(".show-more")},f=15;let u=0,c=1,h="";a.form.addEventListener("submit",async s=>{s.preventDefault(),h=new FormData(s.target).get("search-text").trim(),c=1,p(),v(),B();try{const o=await m(h,c),i=o.totalHits;if(u=Math.ceil(i/f),o.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),d(),a.form.reset();return}y(o.hits)}catch(o){console.error(o)}finally{P(),d(),a.form.reset()}});a.showMoreBtn.addEventListener("click",async s=>{if(c+=1,c>u){l.info({message:"We're sorry, but you've reached the end of search results"}),p();return}try{const t=await m(h,c),o=t.totalHits;if(u=Math.ceil(o/f),t.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),d(),a.form.reset();return}y(t.hits);const e=a.galleryList.querySelector("li").getBoundingClientRect();console.log(e),window.scrollBy({top:e.height*2,behavior:"smooth"})}catch(t){console.error(t)}});
//# sourceMappingURL=index.js.map
