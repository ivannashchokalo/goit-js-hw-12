import{a as b,S as M,i as l}from"./assets/vendor-CEPt6wsP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const P="https://pixabay.com/api/",q="53372962-e1472c27af09e15e68765cdc2";async function g(i,t){return(await b.get(P,{params:{key:q,q:i,page:t,per_page:m,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const v=new M(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function y(i){const t=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:r,views:c,comments:w,downloads:S})=>`
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
                    <p>${S}</p>
                  </li></ul
              ></a>
            </li>`).join("");a.galleryList.insertAdjacentHTML("beforeend",t),v.refresh()}function B(){a.galleryList.innerHTML=""}function p(){a.loader.classList.remove("loader-hidden")}function h(){a.loader.classList.add("loader-hidden")}function L(){a.showMoreBtn.classList.remove("btn-hidden")}function u(){a.showMoreBtn.classList.add("btn-hidden")}const a={form:document.querySelector(".form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),showMoreBtn:document.querySelector(".show-more")},m=15;let d=0,n=1,f="";a.form.addEventListener("submit",async i=>{i.preventDefault(),f=new FormData(i.target).get("search-text").trim(),n=1,u(),p(),B();try{const o=await g(f,n),s=o.totalHits;if(d=Math.ceil(s/m),o.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(o.hits),n<d&&L()}catch(o){console.error(o),l.error({message:"Something went wrong. Please try again later."})}finally{h()}});a.showMoreBtn.addEventListener("click",async i=>{if(n+=1,n>d){l.info({message:"We're sorry, but you've reached the end of search results"}),u();return}p(),u();try{const t=await g(f,n),o=t.totalHits;if(d=Math.ceil(o/m),t.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),h(),a.form.reset();return}y(t.hits);const s=a.galleryList.querySelector("li");if(s){const e=s.getBoundingClientRect();window.scrollBy({top:e.height*2,behavior:"smooth"})}n<d?L():(u(),l.info({message:"You've reached the end of search results."}))}catch(t){console.error(t),l.error({message:"Something went wrong. Please try again later."})}finally{h()}});
//# sourceMappingURL=index.js.map
