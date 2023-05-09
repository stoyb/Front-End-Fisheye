const buttonOpen = document.querySelector('.contact_button');
const buttonClose = document.querySelector('.close-modal');
const modalContainer = document.getElementById("contact_modal");
const bodyModal = document.querySelector(".modal");
const formModal = document.getElementById("form-modal");
const sendButton = document.forms["reserve"]["submit"];
const carrouselModal = document.querySelector('carousel');
const bodyWrapper = document.querySelector('.wrapper');



function displayModal() {
    
  modalContainer.style.display = "block";
  modalContainer.setAttribute('aria-hidden', 'false');
  bodyWrapper.setAttribute('aria-hidden', 'true');
  buttonOpen.focus();
}
function closeModal() {
   
  modalContainer.style.display = "none";
  modalContainer.setAttribute('aria-hidden', 'true');
  bodyWrapper.setAttribute('aria-hidden', 'false');
  buttonClose.focus();
}
function noClickModal(e) {
    e.stopPropagation()
}
function myFunction(e) {
  e.preventDefault(); 
  const formData = new FormData(e.target); 
  console.log(Object.fromEntries(formData)); 
  }

// Close modal when escape key is pressed
window.addEventListener("keydown", function (event) {

  if (modalContainer.setAttribute('aria-hidden', 'false') && event.key === 27 ) {
    
    closeModal();
  }
});


  

buttonOpen.addEventListener('click', displayModal);
buttonClose.addEventListener('click', closeModal);
modalContainer.addEventListener('click', closeModal);
bodyModal.addEventListener('click', noClickModal);
formModal.addEventListener('submit', myFunction);
sendButton.addEventListener('click', closeModal);







