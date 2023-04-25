//Mettre le code JavaScript lié à la page photographer.html
import { photographerFactory } from "../factories/photographer.js";
import { mediaFactory } from "../factories/media.js";

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
    const filteredArrays = media.filter(item => item.photographerId == id);
    return filteredArrays;
  }

  async function getMediaFromArray(media) {
    const getMediaItem = [];  
    media.forEach((item) => {
        if (item.image || item.video) {
            getMediaItem.push(item);
        }
    });
    return getMediaItem
  }

  
  async function addALike(media){
      const getLikesItem = [];  
      media.forEach((item) => {
          if (item.likes) {
              getLikesItem.push(item.likes);
            }
        });
        
        return getLikesItem
    }

// console.log(await addALike(await getMediaFromArray(await getMediaArraysById(getParamsId()))));

  async function addMediaLikes(media){
    let addLikes = 0;  
    media.forEach((item) => {
        if (item.likes) {
            addLikes += item.likes;
        }
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
    async function displayMediaItem(photographers) {
        const photographersSection = document.querySelector("#main-photographer");
        const bloc = document.createElement('div');
        bloc.classList.add("contain-media");
        photographersSection.appendChild(bloc);
        photographers.forEach((media) => {
            if(media.image){
            const mediaModel = mediaFactory(media);
            const userMedia = mediaModel.getMediaImg();
            let mediaLikes = media.likes;
            console.log(mediaLikes + 1);
            userMedia.addEventListener('click', function() {
                mediaLikes + 1;
                })
            bloc.appendChild(userMedia);
            }
            if(media.video) {
            const mediaModel = mediaFactory(media);
            const userMedia = mediaModel.getMediaVideo();
            bloc.appendChild(userMedia);
        }

        
        
    
    });
    };

    async function displayMediaLikes(photographers) {
        const bloc = document.querySelector("#main-photographer");
        const mediaModel = mediaFactory(photographers);
        const userMedia = mediaModel.encartLikes();
        bloc.appendChild(userMedia);
    };

    async function displayMediaLightbox(photographers) {
        const bloc = document.querySelector(".carousel");
        const mediaModel = mediaFactory(photographers);
        const userMedia = mediaModel.getMediaLightbox();
        bloc.appendChild(userMedia);
    };

    // Additionner les likes 
    export const mediaLikesResults = await addMediaLikes(await getMediaArraysById(getParamsId()));
    
   
   async function init() {  

       const idPhotographer  = getParamsId(); 
       const photographer = await getPhotographerById(idPhotographer);
       const media = await getMediaArraysById(idPhotographer);
       const mediaFromArray = await getMediaFromArray(media);
       const  mediaLikes = await addMediaLikes(media);
       displayDataPhotographer(photographer);
       displayImgPhotographer(photographer);
       displayNamePhotographer(photographer)
       displayMediaItem(mediaFromArray);
       displayMediaLikes(mediaLikes);
       displayMediaLightbox(mediaFromArray);
    };
    
    init();

    