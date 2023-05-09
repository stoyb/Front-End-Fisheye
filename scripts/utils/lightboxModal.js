const closeModalButton = document.querySelector('.close-lightbox');
const lightboxContainer = document.querySelector('#lightbox'); 
const bodyLightbox = document.querySelector('.modal-lightbox')
const bodyWrapper = document.querySelector('.wrapper');

function closeModal() {
    lightboxContainer.style.display = "none";
    lightboxContainer.setAttribute('aria-hidden', 'true');
    bodyWrapper.setAttribute('aria-hidden', 'false');
    closeModalButton.focus();
}

function noClickModal(e) {
    e.stopPropagation()
}

closeModalButton.addEventListener('click', closeModal);
lightboxContainer.addEventListener('click', closeModal);
bodyLightbox.addEventListener('click', noClickModal);