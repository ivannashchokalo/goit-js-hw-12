import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import { clearGallery, createGallery, hideLoader, hideLoadMoreButton, showLoader, showLoadMoreButton } from "./js/render-functions";

export const refs = {
    form: document.querySelector('.form'),
    galleryList: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
    showMoreBtn: document.querySelector('.show-more'),
};

export const perPage = 15;
let totalPages = 0;
let page = 1;
let query = '';

refs.form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    query = formData.get('search-text').trim();

    page = 1;
    hideLoadMoreButton();
    showLoader();
    clearGallery();

    try {
        const data = await getImagesByQuery(query, page);

        const totalHits = data.totalHits;
        totalPages = Math.ceil(totalHits / perPage);
   
        if (data.hits.length === 0) {
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
            });
            hideLoader();
            refs.form.reset();
            return;
        }
        createGallery(data.hits);

    } catch(error) {
        console.error(error)
    } finally {
        showLoadMoreButton();
        hideLoader(); 
        refs.form.reset();
  }
});

refs.showMoreBtn.addEventListener('click', async e => {
    page += 1;

    if (page > totalPages) {
        iziToast.info({
            message: `We're sorry, but you've reached the end of search results`,
        })
        hideLoadMoreButton();
        return;
    }

    try {
        const data = await getImagesByQuery(query, page);

        const totalHits = data.totalHits;
        totalPages = Math.ceil(totalHits / perPage);
   
        if (data.hits.length === 0) {
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
            });
            hideLoader();
            refs.form.reset();
            return;
        }
        createGallery(data.hits);

        const firstCard = refs.galleryList.querySelector('li');
        const cardRect = firstCard.getBoundingClientRect();
        console.log(cardRect);
        
        window.scrollBy({
            top: cardRect.height,
            behavior: 'smooth',
        })

    } catch(error) {
        console.error(error)
    }

})