import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('ul.gallery');

const itemToHtml = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>` );
galleryEl.insertAdjacentHTML("afterbegin", itemToHtml.join());

galleryEl.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();
    if (evt.target.tagName !== "IMG") return;
    const largeLink = evt.target.dataset.source;
    const gallery = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250
     });
    gallery.on('show.simplelightbox', function () {
    });            

}

