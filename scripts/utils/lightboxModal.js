const closeLightboxButton = document.querySelector('.close-lightbox-button');
const lightboxContainer = document.querySelector('#lightbox'); 
const bodyLightbox = document.querySelector('.lightbox__modal')
const bodyWrapper = document.querySelector('.wrapper');
const nextButton = document.querySelector('.arrow-right');
const logo = document.querySelector('.logo-fisheye');

// Navigates inside the modal with Tab 
function navigateModal(event) {
  if (event.key === 'Tab' || event.keyCode === 9) {
    if (event.shiftKey) {
      if (document.activeElement === closeLightboxButton) {
        event.preventDefault();
        nextButton.focus();
      }
    } else {
      if (document.activeElement === nextButton) {
        event.preventDefault();
        closeLightboxButton.focus();
      }
    }
  }
}
  
function closeModalLightbox() {
    lightboxContainer.style.display = "none";
    lightboxContainer.setAttribute('aria-hidden', 'true');
    bodyWrapper.setAttribute('aria-hidden', 'false');
    logo.focus();
}

function noClickModal(e) {
    e.stopPropagation()
}


lightboxContainer.addEventListener('keydown', navigateModal);
lightboxContainer.addEventListener('click', closeModalLightbox);
closeLightboxButton.addEventListener('click', closeModalLightbox);
bodyLightbox.addEventListener('click', noClickModal);
