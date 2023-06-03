//Mettre le code JavaScript lié à la page photographer.html
import { photographerFactory } from "../factories/photographer.js";
import { mediaFactory } from "../factories/media.js";

// Keep the list of items of a photographer 
let listItem = []; 

// Adds the id of a photographer
function getParamsId() {
    const urlSearchParams =  new URL(document.location).searchParams;
    const idURL = urlSearchParams.get("id");
    return idURL
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


const selectSort = document.querySelector('.select');
selectSort.addEventListener('change', (event) => {
    const selectedOption = event.target.value;
    switch (selectedOption) {
        case 'popular':
            bloc.innerHTML = '';
            listItem.sort((a, b) => b.likes - a.likes);
            displayMediaItem(listItem);
        break;
        case 'date':
            bloc.innerHTML = '';
            listItem.sort((a, b) => new Date(b.date) - new Date(a.date));
            displayMediaItem(listItem);
        break;
        case 'title':
            bloc.innerHTML = '';
            listItem.sort((a, b) => a.title.localeCompare(b.title));
            displayMediaItem(listItem);
        break;
    }
});

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


async function displayDataPhotographer(photographer) {
    const photographersSection = document.querySelector(".photograph-header");
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getIdentity();
    photographersSection.appendChild(userCardDOM);
}

async function displayNamePhotographer(photographer) {
    const photographersSection = document.querySelector("#header-modal__title");
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getFormName();
    const modalContainer = document.getElementById("contact_modal");
    modalContainer.setAttribute("aria-labelledby", "Contact me " + photographer.name);
    photographersSection.appendChild(userCardDOM);
}

async function displayImgPhotographer(photographer) {
    const photographersSection = document.querySelector(".photograph-header");
    const photographerModel = photographerFactory(photographer);
    const userImg = photographerModel.getImg();
    photographersSection.appendChild(userImg);
}


// Function that gathers all likes 
export let pricePhotographer = await getPriceFromArray(await getPhotographerById(getParamsId()));
export let mediaLikesResults = await addMediaLikes(await getMediaArraysById(getParamsId()));
async function displayMediaLikes(photographers) {
    const bloc = document.querySelector("#main-photographer");
    const mediaModel = mediaFactory(photographers);
    const userMedia = mediaModel.encartLikes();
    bloc.appendChild(userMedia);
}


const photographersSection = document.querySelector("#main-photographer");
const bloc = document.createElement('div');
bloc.classList.add("contain-media");

async function displayMediaItem(photographers) {
    photographersSection.appendChild(bloc);
    photographers.forEach((media, index) => {
        let userMedia;
        let userMediaTitleLegend;
        let userMediaLikesLegend
        let mediaLikesNumber = media.likes;
        let everClicked = false;
        const blocMedia = document.createElement('div');
        blocMedia.classList.add('bloc-media');
        blocMedia.setAttribute('data-index', index);
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
            bloc.appendChild(blocMedia);
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
            bloc.appendChild(blocMedia);
        }
        userMediaLikesLegend.addEventListener('click', function() {
            if (!everClicked) {
                everClicked = true
                let mediaLikesPlus = mediaLikesNumber + 1;
                let mediaLikesResults = mediaLikesResults;
                mediaLikesResults = mediaLikesResults + 1;
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
        userMedia.focus();
    });
    function openLightbox(event) {
        const lightboxContainer = document.querySelector('#lightbox'); 
        const bodyWrapper = document.querySelector('.wrapper');
        const carousel = document.querySelector('.carousel');
        const prevButton = document.querySelector('.arrow-left');
        const nextButton = document.querySelector('.arrow-right');
        lightboxContainer.style.display = "block";
        lightboxContainer.setAttribute('aria-hidden', 'false');
        bodyWrapper.setAttribute('aria-hidden', 'true');
        if(document.querySelector('.bloc-media__carousel')) {
            document.querySelector('.bloc-media__carousel').remove() ;
        }
        const blocMedia = document.createElement('div');
        blocMedia.classList.add('bloc-media__carousel');
        let currentIndex = event.currentTarget.parentNode.getAttribute('data-index');
        let itemMedia 
        let itemMediaTitle 
        // Shows the active media inside the lightbox
        function slideCarousel(){
            let blocMediaObject = listItem[currentIndex];
            if (blocMediaObject.image) {
                const mediaModel = mediaFactory(blocMediaObject);
                itemMedia = mediaModel.getMediaImgLightbox();
                itemMediaTitle = mediaModel.getMediaTitle();
                blocMedia.setAttribute("aria-label", blocMediaObject.title);
                blocMedia.appendChild(itemMedia);
                blocMedia.appendChild(itemMediaTitle);
            }
            if (blocMediaObject.video) {
                const mediaModel = mediaFactory(blocMediaObject);
                itemMedia = mediaModel.getMediaVideoLightbox();
                itemMediaTitle = mediaModel.getMediaTitle();
                blocMedia.setAttribute("aria-label", blocMediaObject.title);
                blocMedia.appendChild(itemMedia);
                blocMedia.appendChild(itemMediaTitle);
            } 
        }
        slideCarousel(); 
        carousel.appendChild(blocMedia);
        prevButton.addEventListener('click', () => {
            blocMedia.removeChild(itemMedia);
            blocMedia.removeChild(itemMediaTitle);
            currentIndex = currentIndex - 1;
            if (currentIndex < 0) {
                currentIndex = listItem.length - 1;
            } 
            slideCarousel();
        });
        nextButton.addEventListener('click', () => {
            blocMedia.removeChild(itemMedia);
            blocMedia.removeChild(itemMediaTitle);
            currentIndex = parseInt(currentIndex) + 1;
            if (currentIndex >= listItem.length) {
                currentIndex = 0; 
            } 
            slideCarousel();
        });
    } 
}

async function init() {  
    const idPhotographer  = getParamsId(); 
    const photographer = await getPhotographerById(idPhotographer);
    const media = listItem;
    const mediaPopular = listItem.sort((a, b) => b.likes - a.likes);
    const mediaLikes = await addMediaLikes(media);
    displayDataPhotographer(photographer);
    displayImgPhotographer(photographer);
    displayNamePhotographer(photographer);
    displayMediaItem(mediaPopular);
    displayMediaLikes(mediaLikes);
}
init();

    

    