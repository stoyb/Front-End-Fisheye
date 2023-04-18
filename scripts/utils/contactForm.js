const buttonOpen = document.querySelector('.contact_button');
const buttonClose = document.querySelector('.close-modal');
const closeWithShadow = document.querySelector('#contact_modal');
const bodyModal = document.querySelector(".modal");
const formModal = document.getElementById("form-modal");
const sendButton = document.forms["reserve"]["submit"];

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
function noClickModal(e) {
    e.stopPropagation()
}
function myFunction(e) {
  e.preventDefault(); 
  const formData = new FormData(e.target); 
  console.log(Object.fromEntries(formData)); 
  }

buttonOpen.addEventListener('click', displayModal);
buttonClose.addEventListener('click', closeModal);
closeWithShadow.addEventListener('click', closeModal);
bodyModal.addEventListener('click', noClickModal);
formModal.addEventListener('submit', myFunction);
sendButton.addEventListener('click', closeModal);