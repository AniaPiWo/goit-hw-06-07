import { galleryItems } from "./gallery-items.js";
const gallery = document.getElementById("gallery");

function createGalleryItem(item) {
  return `
    <div class="gallery__item">
      <a class="gallery__link">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}">
      </a>
    </div>
  `;
}

function openLightbox(item) {
  const lightbox = basicLightbox.create(`
    <img width="1400" height="900" src="${item.original}" alt="${item.description}">
  `);

  lightbox.show();

  const closeLightbox = () => {
    lightbox.close();
    document.removeEventListener("keyup", handleKeyUp);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Escape") {
      closeLightbox();
    }
  };

  document.addEventListener("keyup", handleKeyUp);
  lightbox.element().addEventListener("click", closeLightbox);
}

galleryItems.forEach((item) => {
  const galleryItemHTML = createGalleryItem(item);
  gallery.insertAdjacentHTML("beforeend", galleryItemHTML);
});

const galleryImages = document.querySelectorAll(".gallery__image");
galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => openLightbox(galleryItems[index]));
});

/* alternative solution not recommended due to performance issues (can be used in small projects)
function createGalleryItem(item) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = item.preview;
  img.alt = item.description;
  img.dataset.source = item.original;

  img.onclick = () => {
    const lightbox = basicLightbox.create(`
      <img width="1400" height="900" src="${item.original}" alt="${item.description}">
    `);

    lightbox.show();

    const closeLightbox = () => {
      lightbox.close();
      document.removeEventListener("keyup", handleKeyUp);
    };

    const handleKeyUp = (e) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };

    document.addEventListener("keyup", handleKeyUp);
    lightbox.element().addEventListener("click", closeLightbox);
  };

  galleryItem.appendChild(link);
  link.appendChild(img);
  return galleryItem;
}

const galleryElements = galleryItems.map(createGalleryItem);
gallery.append(...galleryElements);*/
