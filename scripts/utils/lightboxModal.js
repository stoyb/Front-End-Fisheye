const closeModalButton = document.querySelector('.close-lightbox');
const lightboxContainer = document.querySelector('#lightbox'); 
const bodyLightbox = document.querySelector('.lightbox__modal')
const bodyWrapper = document.querySelector('.wrapper');

// Navigates inside the modal with Tab 
function navigateModal(event) {
    if (event.key === 'Tab' || event.keyCode === 9) {
      if (event.shiftKey) {
        if (document.activeElement === closeButton) {
          event.preventDefault();
          sendButton.focus();
        }
      } else {
        if (document.activeElement === sendButton) {
          event.preventDefault();
          closeButton.focus();
        }
      }
    }
  }
  
  // Closes the modal with Escape
  function closeModalEscape(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
      modal.style.display = 'none';
      sendButton.focus();
    }
  }
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