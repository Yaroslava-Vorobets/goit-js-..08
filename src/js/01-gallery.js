// Add imports above this line
import { galleryItems } from './gallery-items';
// Додатковий імпорт стилів// 
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


// Change code below this line
const galleryContainer = document.querySelector('.gallery')
const galleryMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItems(galleryItems) { 
    return galleryItems.map(({ preview, original, description }) => {
        return` <div class="gallery">
                    <a class="gallery__item" href="${original}"">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>
                </div> `;
           
    })
        .join('');  
}
const lightbox = new SimpleLightbox('.gallery a', {
'captionsData' :"alt" , 
'captionPosition': "bottom",
'captionDelay': 250,
});

