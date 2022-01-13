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

galleryEl.insertAdjacentElement("afterBegin", getGalleryItemEl.join(""));

console.log(galleryItems);
