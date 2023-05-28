import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('ul.gallery');

const itemToHtml = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>` );
galleryEl.insertAdjacentHTML("afterbegin", itemToHtml.join(""));

galleryEl.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();
    if (evt.target.tagName !== "IMG") return;

    const largeLink = evt.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${largeLink}" width="800" height="600">
`)
    instance.show()
    document.addEventListener("keydown", event => {
        if (event.key==="Escape") instance.close()
    })
}
