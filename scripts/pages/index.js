    async function getPhotographers() {
        const response = await fetch("../data/photographers.json"); 
        const dataAPI =  await response.json();
        return dataAPI
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function displayDataPhotographer(photographer) {
        const photographersSection = document.querySelector(".photograph_header");
        const photographerModel = photoFactory(photographer);
        const userCardDOM = photographerModel.getIdentityData();
        photographersSection.appendChild(userCardDOM);
    };


    async function init() {   
        const { photographers } = await getPhotographers();
        displayData(photographers);
        displayDataPhotographer(photographers);
    };
    
    init();
    
