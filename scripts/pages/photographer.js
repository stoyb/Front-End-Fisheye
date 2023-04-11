//Mettre le code JavaScript lié à la page photographer.html

function getParamsId() {
    const urlSearchParams =  new URL(document.location).searchParams;
    const idURL = urlSearchParams.get("id");
    return idURL
}
async function getPhotographerById(id) {
    const photographers = await getPhotographers();
    for(i = 0; i < photographers.length; i++) {
      if (id == photographers[i].id) {
       return photographers[i]
       }
     }
}
async function getArray() {
   return await getPhotographerById(getParamsId());
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

async function photoFactory(data) {
    const { name, city, country, tagline } = data;
    const array = await getArray();
    function getIdentityData() {
        const blocIdentity = document.createElement('div');
        const namePhotographer = document.createElement('h1');
        namePhotographer.textContent = array.name;
        const placePhotographer = document.createElement('p');
        placePhotographer.textContent = array.city + ', ' + array.country;
        const taglinePhotographer = document.createElement('p');
        taglinePhotographer.textContent = array.tagline;
        blocIdentity.appendChild(namePhotographer);
        blocIdentity.appendChild(placePhotographer);
        blocIdentity.appendChild(taglinePhotographer);
        return (blocIdentity);
    }
    return { name, city, country, tagline, getIdentityData }
}