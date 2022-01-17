import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

const createGalleryItemEl = ({ preview, original, description } = {}) => {
  return `<a class="gallery__link" href=${original} >
     <img
       class = "gallery__image"
       src = ${preview}
       data-source = ${original}
       alt = ${description}
     />
   </a>`;
};

const getGalleryItemEl = galleryItems.map((el) => {
  return createGalleryItemEl(el);
});
console.log(getGalleryItemEl.join(""));
galleryEl.insertAdjacentHTML("afterBegin", getGalleryItemEl.join(""));

console.log(galleryItems);

const openImg = function (ev) {
  ev.preventDefault();
  console.log(ev.target.dataset.source);
  const image = ev.target;

  var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
};

galleryEl.addEventListener("click", openImg);
