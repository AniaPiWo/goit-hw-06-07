import { galleryItems } from "./gallery-items.js";
const gallery = document.getElementById("gallery");

function createGalleryItem(item) {
  return `
    <a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}">
    </a>
  `;
}

const galleryElementsHTML = galleryItems.map(createGalleryItem).join("");
gallery.innerHTML = galleryElementsHTML;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt",
});

/* alternative solution not recommended due to performance issues (can be used in small projects)
function createGalleryItem(item) {
  const galleryItem = document.createElement("a");
  galleryItem.classList.add("gallery__item");
  galleryItem.href = item.original;

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = item.preview;
  img.alt = item.description;
  img.dataset.source = item.original;

  galleryItem.appendChild(img);
  return galleryItem;
}

const galleryElements = galleryItems.map(createGalleryItem);
gallery.append(...galleryElements);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt",
});
*/
