//Mettre le code JavaScript lié à la page photographer.html
import { photographerFactory } from "../factories/photographer.js";

function getParamsId() {
    const urlSearchParams =  new URL(document.location).searchParams;
    const idURL = urlSearchParams.get("id");
    return idURL
}
async function getPhotographerById(id) {
    const photographers = await getPhotographers();
    for(let i = 0; i < photographers.length; i++) {
      if (id == photographers[i].id) {
       return photographers[i]
       }
     }
}

async function getPhotographers() {
    const response = await fetch("../data/photographers.json"); 
    const dataAPI =  await response.json();
    // [
		// {
		// 	"name": "Mimi Keel",
		// 	"id": 243,
		// 	"city": "London",
		// 	"country": "UK",
		// 	"tagline": "Voir le beau dans le quotidien",
		// 	"price": 400,
		// 	"portrait": "MimiKeel.jpg"
		// },
		// {
		// 	"name": "Ellie-Rose Wilkens",
		// 	"id": 930,
		// 	"city": "Paris",
		// 	"country": "France",
		// 	"tagline": "Capturer des compositions complexes",
		// 	"price": 250,
		// 	"portrait": "EllieRoseWilkens.jpg"
		// },
    return dataAPI.photographers
}

async function displayDataPhotographer(photographer) {
    const photographersSection = document.querySelector(".photograph-header");
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getIdentityData();
    photographersSection.appendChild(userCardDOM);
  };

  async function init() {   
    const idPhotographer  = getParamsId();
    const photographer = await getPhotographerById(idPhotographer);
    displayDataPhotographer(photographer);
};

init();

