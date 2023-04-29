import { mediaLikesResults }  from "../pages/photographer.js"
import { priceArray } from "../pages/photographer.js"

export function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    
    const picture = `assets/images/sample/${photographerId}/${image}`;
    const videoPlayer = `assets/images/sample/${photographerId}/${video}`;
    const blocPhoto = document.createElement('div');
    const blocVideo = document.createElement('div');

    function getMediaImg() {
        const img = document.createElement('img');
        blocPhoto.classList.add('bloc-image');
        img.setAttribute('src', picture);
        img.setAttribute('alt', title + ", closeup view");
        img.classList.add('bloc-image__img');
        blocPhoto.appendChild(img);
        return (blocPhoto)
    }
    function getMediaVideo() {
        const videoItem = document.createElement('video');
        blocVideo.classList.add('bloc-video');
        videoItem.setAttribute('src', videoPlayer);
        videoItem.setAttribute("aria-label", title + ", closeup view");
        videoItem.setAttribute('controls', '');
        videoItem.classList.add('bloc-video__video');
        blocVideo.appendChild(videoItem);
        return (blocVideo)
    }
    function getMediaTitle() {
        const mediaLegendTitle = document.createElement('p');
        mediaLegendTitle.classList.add('media-legend__title');
        mediaLegendTitle.textContent = title;
        return (mediaLegendTitle)
    }

    function getMediaLikes() {
        const iconContainer = document.createElement('span');
        const iconHeart = document.createElement('i');
        iconHeart.classList.add("fa", "fa-heart");
        iconHeart.setAttribute("aria-label", "likes");
        const mediaLegendLikes = document.createElement('p');
        mediaLegendLikes.classList.add('media-legend__likes');
        mediaLegendLikes.textContent = likes + " ";
        iconContainer.appendChild(iconHeart);
        mediaLegendLikes.appendChild(iconContainer);
        return (mediaLegendLikes)
    }

    function encartLikes() {
        const blocEncart = document.createElement('div');
        blocEncart.classList.add('bloc-encart');
        const blocLikes = document.createElement('div');
        blocLikes.classList.add('bloc-likes');
        const iconHeart = document.createElement('i');
        iconHeart.classList.add("fa", "fa-heart");
        iconHeart.setAttribute("aria-label", "likes");
        blocLikes.textContent = mediaLikesResults + " ";
        const blocLikesPrice = document.createElement('p');
        blocLikesPrice.textContent = priceArray + "€/jour";
        const iconContainer = document.createElement('span');
        iconContainer.appendChild(iconHeart);
        blocLikes.appendChild(iconContainer);
        blocEncart.appendChild(blocLikes);
        blocEncart.appendChild(blocLikesPrice);
        return (blocEncart)
    }

    function getMediaLightbox() {
        const modalLightbox = document.createElement('div');
        const imgLightbox = document.createElement('img');
        imgLightbox.setAttribute('src', picture);
        const titleLightbox = document.createElement('p');
        titleLightbox.textContent = title;
        modalLightbox.appendChild(imgLightbox);
        modalLightbox.appendChild(titleLightbox);
        return (modalLightbox)
    }
    return { id, photographerId, title, image, video, likes, date, price, getMediaImg, getMediaVideo, getMediaTitle, getMediaLikes, encartLikes, getMediaLightbox }
}