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

  const instance = basicLightbox.create(
    `<div class="modal"><img src = ${ev.target.dataset.source} alt width = 1280px height = 720px /></div> `
  );
  console.log(instance);
  instance.show();
  galleryEl.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      instance.close();
    }
  });
};

galleryEl.addEventListener("click", openImg);

// const instance = basicLightbox.create(`
// `);

// <h1>Dynamic Content</h1>
// <p>You can set the content of the lightbox with JS.</p>
