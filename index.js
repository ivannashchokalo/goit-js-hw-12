import{a as S,S as P,i}from"./assets/vendor-CEPt6wsP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const q="https://pixabay.com/api/",M="53372962-e1472c27af09e15e68765cdc2";async function g(n,t){return(await S.get(q,{params:{key:M,q:n,page:t,per_page:m,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const v=new P(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function y(n){const t=n.map(({webformatURL:o,largeImageURL:s,tags:e,likes:r,views:c,comments:w,downloads:b})=>`
        <li>
              <a href="${s}"
                ><img src="${o}" alt="${e}" />
                <ul>
                  <li>
                    <h3>Likes</h3>
                    <p>${r}</p>
                  </li>
                  <li>
                    <h3>Views</h3>
                    <p>${c}</p>
                  </li>
                  <li>
                    <h3>comments</h3>
                    <p>${w}</p>
                  </li>
                  <li>
                    <h3>downloads</h3>
                    <p>${b}</p>
                  </li></ul
              ></a>
            </li>`).join("");a.galleryList.insertAdjacentHTML("beforeend",t),v.refresh()}function B(){a.galleryList.innerHTML=""}function p(){a.loader.classList.remove("loader-hidden")}function f(){a.loader.classList.add("loader-hidden")}function L(){a.showMoreBtn.classList.remove("btn-hidden")}function d(){a.showMoreBtn.classList.add("btn-hidden")}const a={form:document.querySelector(".form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),showMoreBtn:document.querySelector(".show-more")},m=15;let u=0,l=1,h="";a.form.addEventListener("submit",async n=>{if(n.preventDefault(),h=new FormData(n.target).get("search-text").trim(),!h){i.warning({message:"Please enter a search query before submitting!"});return}l=1,d(),p(),B();try{const o=await g(h,l),s=o.totalHits;if(u=Math.ceil(s/m),o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(o.hits),l<u&&L()}catch(o){console.error(o),i.error({message:"Something went wrong. Please try again later."})}finally{f()}});a.showMoreBtn.addEventListener("click",async n=>{if(l+=1,l>u){i.info({message:"We're sorry, but you've reached the end of search results"}),d();return}p(),d();try{const t=await g(h,l),o=t.totalHits;if(u=Math.ceil(o/m),t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"}),f(),a.form.reset();return}y(t.hits);const s=a.galleryList.querySelector("li");if(s){const e=s.getBoundingClientRect();window.scrollBy({top:e.height*2,behavior:"smooth"})}l<u?L():(d(),i.info({message:"You've reached the end of search results."}))}catch(t){console.error(t),i.error({message:"Something went wrong. Please try again later."})}finally{f()}});
//# sourceMappingURL=index.js.map
