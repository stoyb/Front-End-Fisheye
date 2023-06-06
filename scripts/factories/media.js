import { pricePhotographer }  from "../pages/photographer.js"
import { mediaLikesResults } from "../pages/photographer.js"

export function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    
    const picture = `assets/images/sample/${photographerId}/${image}`;
    const videoPlayer = `assets/images/sample/${photographerId}/${video}`;
    const blocPhoto = document.createElement('button');
    const blocPhotoLightbox = document.createElement('div');
    const blocVideo = document.createElement('button');
    const blocVideoLightbox = document.createElement('div');

    function getMediaImg() {
        const photoItem = document.createElement('img');
        blocPhoto.classList.add('bloc-image');
        photoItem.setAttribute('src', picture);
        photoItem.setAttribute('aria-label', title + ", closeup view");
        photoItem.classList.add('bloc-image__img');
        blocPhoto.appendChild(photoItem);
        return (blocPhoto)
    }

    function getMediaImgLightbox() {
        const photoItem = document.createElement('img');
        blocPhotoLightbox.classList.add('bloc-image');
        photoItem.setAttribute('src', picture);
        photoItem.setAttribute('alt', title);
        photoItem.classList.add('bloc-image__img');
        blocPhotoLightbox.appendChild(photoItem);
        return (blocPhotoLightbox)
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
    function getMediaVideoLightbox() {
        const videoItem = document.createElement('video');
        blocVideoLightbox.classList.add('bloc-video');
        videoItem.setAttribute('src', videoPlayer);
        videoItem.setAttribute("aria-label", title);
        videoItem.setAttribute('controls', '');
        videoItem.classList.add('bloc-video__video');
        blocVideoLightbox.appendChild(videoItem);
        return (blocVideoLightbox)
    }
    function getMediaTitle() {
        const mediaLegendTitle = document.createElement('p');
        mediaLegendTitle.classList.add('media-legend__title');
        mediaLegendTitle.textContent = title;
        return (mediaLegendTitle)
    }

    function getMediaLikes() {
        const iconContainer = document.createElement('span');
        const iconHeart = document.createElement('em');
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
        const iconHeart = document.createElement('em');
        iconHeart.classList.add("fa", "fa-heart");
        iconHeart.setAttribute("aria-label", "likes");
        blocLikes.textContent = mediaLikesResults + " ";
        const blocLikesPrice = document.createElement('p');
        blocLikesPrice.textContent = pricePhotographer + "€/jour";
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
    return { id, photographerId, title, image, video, likes, date, price, getMediaImg, getMediaImgLightbox, getMediaVideo, getMediaVideoLightbox, getMediaTitle, getMediaLikes, encartLikes, getMediaLightbox }
}