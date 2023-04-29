//Mettre le code JavaScript lié à la page photographer.html
import { photographerFactory } from "../factories/photographer.js";
import { mediaFactory } from "../factories/media.js";
let listItem = []; 

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

async function getMediaArraysById(id) {
    const media = await getMediaArray();
    media.forEach((item) => {
        if (item.photographerId == id) {
            listItem.push(item)
        }
    })
    return listItem
}

async function addMediaLikes(media){
    let addLikes = 0;  
    media.forEach((item) => {
            addLikes += item.likes;
    });
    return addLikes
}

async function getPriceFromArray(photographer) {
    if (!photographer) {
        return 0;
    }
    let getPrice = 0; 
        if (photographer.price) {
            getPrice += photographer.price;
        }
    return getPrice 
}

export let priceArray = await getPriceFromArray( await getPhotographerById(getParamsId()));
  

async function getPhotographers() {
      const response = await fetch("../data/photographers.json"); 
      const dataAPI =  await response.json();
      return dataAPI.photographers
    }

async function getMediaArray() {
    const response = await fetch("../data/photographers.json"); 
    const dataAPI =  await response.json();
    return dataAPI.media
}
    
async function displayDataPhotographer(photographer) {
    const photographersSection = document.querySelector(".photograph-header");
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getIdentityData();
    photographersSection.appendChild(userCardDOM);
};

async function displayNamePhotographer(photographer) {
    const photographersSection = document.querySelector("#header-modal__title");
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getNameForForm();
    photographersSection.appendChild(userCardDOM);
};
    
async function displayImgPhotographer(photographer) {
        const photographersSection = document.querySelector(".photograph-header");
        const photographerModel = photographerFactory(photographer);
        const userImg = photographerModel.getImg();
        photographersSection.appendChild(userImg);
};

    // Fonction qui analyse  chaque objet de chaque liste de photographes pour trouver les items images(photographers.image) et les items videos(photographers.video). S'il y a une image dans l'objet, il affiche une image dans photographer.html, pareillement pour les videos
    function openLightbox() {
        const lightboxContainer = document.querySelector('#lightbox'); 
        lightboxContainer.style.display = "block";
        console.log(lightboxContainer);   
      }

      // Additionner les likes 
      export let mediaLikesResults = await addMediaLikes(await getMediaArraysById(getParamsId()));


      async function displayMediaLikes(photographers) {
        const bloc = document.querySelector("#main-photographer");
        const mediaModel = mediaFactory(photographers);
        const userMedia = mediaModel.encartLikes();
        bloc.appendChild(userMedia);
    };

    async function displayMediaItem(photographers) {
        const photographersSection = document.querySelector("#main-photographer");
        const bloc = document.createElement('div');
        bloc.classList.add("contain-media");
        photographersSection.appendChild(bloc);
        photographers.forEach((media) => {
            let userMedia;
            let userMediaTitleLegend;
            let userMediaLikesLegend
            let mediaLikesNumber = media.likes;
            let everClicked = false;
            const blocMedia = document.createElement('div');
            blocMedia.classList.add('bloc-media');
            bloc.appendChild(blocMedia);
            if (media.image) {
                const mediaLegend = document.createElement('div');
                mediaLegend.classList.add('media-legend');
                const mediaModel = mediaFactory(media);
                userMedia = mediaModel.getMediaImg();
                userMediaTitleLegend = mediaModel.getMediaTitle();
                userMediaLikesLegend = mediaModel.getMediaLikes();
                mediaLegend.appendChild(userMediaTitleLegend);
                mediaLegend.appendChild(userMediaLikesLegend);
                blocMedia.appendChild(userMedia);
                blocMedia.appendChild(mediaLegend);
            }
            if (media.video) {
                const mediaLegend = document.createElement('div');
                mediaLegend.classList.add('media-legend');
                const mediaModel = mediaFactory(media);
                userMedia = mediaModel.getMediaVideo();
                userMediaTitleLegend = mediaModel.getMediaTitle();
                userMediaLikesLegend = mediaModel.getMediaLikes();
                mediaLegend.appendChild(userMediaTitleLegend);
                mediaLegend.appendChild(userMediaLikesLegend);
                blocMedia.appendChild(userMedia);
                blocMedia.appendChild(mediaLegend);
            }
            userMediaLikesLegend.addEventListener('click', function() {
                if (!everClicked) {
                everClicked = true
                let mediaLikesPlus = mediaLikesNumber + 1;
                mediaLikesResults = mediaLikesResults + 1;
                console.log(mediaLikesResults);
                const iconContainer = document.createElement('span');
                const iconHeart = document.createElement('i');
                iconHeart.classList.add("fa", "fa-heart");
                iconHeart.setAttribute("aria-label", "likes");
                userMediaLikesLegend.textContent = mediaLikesPlus + " ";
                iconContainer.appendChild(iconHeart);
                userMediaLikesLegend.appendChild(iconContainer);
                displayMediaLikes(mediaLikesResults);

                } 
            });
            userMedia.addEventListener('click', openLightbox);
    
        });
    };
    
    
    
    
    async function displayMediaLightbox(photographers) {
        const bloc = document.querySelector(".carousel");
        const mediaModel = mediaFactory(photographers);
        const userMedia = mediaModel.getMediaLightbox();
        bloc.appendChild(userMedia);
    };

    
   
   async function init() {  

       const idPhotographer  = getParamsId(); 
       const photographer = await getPhotographerById(idPhotographer);
       const media = listItem;
       const mediaLikes = await addMediaLikes(media);
       displayDataPhotographer(photographer);
       displayImgPhotographer(photographer);
       displayNamePhotographer(photographer);
       displayMediaItem(media);
       displayMediaLikes(mediaLikes);
       displayMediaLightbox(media);
    };
    
    init();

    

    