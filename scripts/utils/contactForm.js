const openButton = document.querySelector('.contact_button');
const closeButtonIcon = document.querySelector('.close-modal');
const closeButton = document.querySelector(".close-modal-button");
const modalContainer = document.getElementById("contact_modal");
const bodyModal = document.querySelector(".contact_modal__modal");
const formModal = document.getElementById("form-modal");
const sendButton = document.forms["reserve"]["submit"];
const bodyWrapper = document.querySelector('.wrapper');


function displayModal() {
  modalContainer.style.display = "block";
  modalContainer.setAttribute('aria-hidden', 'false');
  bodyWrapper.setAttribute('aria-hidden', 'true');
  closeButton.focus();
}

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

function closeModal() {
  modalContainer.style.display = "none";
  modalContainer.setAttribute('aria-hidden', 'true');
  bodyWrapper.setAttribute('aria-hidden', 'false');
  openButton.focus();
}

function noClickModal(e) {
    e.stopPropagation()
}
// Logs the contact form's container inside the console
function logResults(e) {
  e.preventDefault(); 
  const formData = new FormData(e.target); 
  console.log(Object.fromEntries(formData)); 
}

openButton.addEventListener('click', displayModal);
closeButton.addEventListener('click', closeModal);
modalContainer.addEventListener('click', closeModal);
bodyModal.addEventListener('click', noClickModal);
formModal.addEventListener('submit', logResults);
sendButton.addEventListener('click', closeModal);
bodyModal.addEventListener('keydown', navigateModal);
closeButton.addEventListener('click', closeModalEscape);
bodyModal.addEventListener('keydown', closeModalEscape);







