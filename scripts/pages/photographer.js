//Mettre le code JavaScript lié à la page photographer.html
import { photographerFactory } from "../factories/photographer.js";
import { mediaFactory } from "../factories/photographer.js";

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

  async function getImageFromArray(media) {
    const getImage = [];  
    media.forEach((item) => {
        if (item.image) {
            getImage.push(item);
        }
    });
    return getImage
  }

  async function getVideoFromArray(media) {
    const getVideo = [];  
    media.forEach((item) => {
        if (item.video) {
            getVideo.push(item);
        }
    });
    return getVideo
  }

  async function addMediaLikes(media){
    let addLikes = 0;  
    media.forEach((item) => {
        if (item.likes) {
            addLikes += item.likes;
        }
    });
    
    return addLikes
}

  
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
    
    async function displayImgPhotographer(photographer) {
        const photographersSection = document.querySelector(".photograph-header");
        const photographerModel = photographerFactory(photographer);
        const userImg = photographerModel.getImg();
        photographersSection.appendChild(userImg);
    };
    
    async function displayMediaImg(photographers) {
        const photographersSection = document.querySelector("#main");
        const bloc = document.createElement('div');
        bloc.classList.add("contain-media");
        photographersSection.appendChild(bloc);
        photographers.forEach((media) => {
            const mediaModel = mediaFactory(media);
            const userMedia = mediaModel.getMediaImg();
            bloc.appendChild(userMedia);
           
        });
    };
    async function displayMediaVideo(photographers) {
        const bloc = document.querySelector(".contain-media");
        photographers.forEach((media) => {
            const mediaModel = mediaFactory(media);
            const userMedia = mediaModel.getMediaVideo();
            bloc.appendChild(userMedia);
           
        });
    };

    async function displayMediaLikes(photographers) {
        const bloc = document.querySelector("#main");
        const mediaModel = mediaFactory(photographers);
        const userMedia = mediaModel.encartLikes();
        bloc.appendChild(userMedia);
    };

    export const mediaLikesResults = await addMediaLikes(await getMediaArraysById(getParamsId()));
   // Additionner les likes 
    
   
   async function init() {  

       const idPhotographer  = getParamsId(); 
       const photographer = await getPhotographerById(idPhotographer);
       const media = await getMediaArraysById(idPhotographer);
       const imageFromArray = await getImageFromArray(media);
       const videoFromArray = await getVideoFromArray(media);
       const  mediaLikes = await addMediaLikes(media);
       displayDataPhotographer(photographer);
       displayImgPhotographer(photographer);
       displayMediaImg(imageFromArray);
       displayMediaVideo(videoFromArray);
       displayMediaLikes(mediaLikes);
    };
    
    init();

    