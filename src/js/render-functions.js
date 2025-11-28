import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"; 
import { comment, list } from "postcss";
import { refs } from "../main";



const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});

export function createGallery(images){
    const markup = images.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {
        return `
        <li>
              <a href="${largeImageURL}"
                ><img src="${webformatURL}" alt="${tags}" />
                <ul>
                  <li>
                    <h3>Likes</h3>
                    <p>${likes}</p>
                  </li>
                  <li>
                    <h3>Views</h3>
                    <p>${views}</p>
                  </li>
                  <li>
                    <h3>comments</h3>
                    <p>${comments}</p>
                  </li>
                  <li>
                    <h3>downloads</h3>
                    <p>${downloads}</p>
                  </li></ul
              ></a>
            </li>`
    }).join('')

    refs.galleryList.insertAdjacentHTML('beforeend', markup);

    lightbox.refresh();
}

export function clearGallery() {
    refs.galleryList.innerHTML = '';
}

export function showLoader() {
    refs.loader.classList.remove('loader-hidden');
}

export function hideLoader() {
    refs.loader.classList.add('loader-hidden');
}

export function showLoadMoreButton(){
    refs.showMoreBtn.classList.remove('btn-hidden');
}

export function hideLoadMoreButton(){
   refs.showMoreBtn.classList.add('btn-hidden'); 
}