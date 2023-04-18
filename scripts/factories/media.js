import { mediaLikesResults }  from "../pages/photographer.js"
import { priceArray } from "../pages/photographer.js"

export function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    
    const picture = `assets/images/sample/${photographerId}/${image}`;
    const videoPlayer = `assets/images/sample/${photographerId}/${video}`;
    const blocPhoto = document.createElement('div');
    const blocVideo = document.createElement('div');
    function getMediaImg() {
        const anchor = document.createElement('a');
        anchor.setAttribute("aria-label", title + ", closeup view");
        anchor.setAttribute("href", picture);
        const img = document.createElement('img');
        blocPhoto.classList.add('bloc-image');
        img.setAttribute('src', picture);
        img.setAttribute('alt', "picture");
        const mediaLegend = document.createElement('div');
        mediaLegend.classList.add('media-legend');
        const imgTitle = document.createElement('p');
        imgTitle.classList.add('media-legend__title');
        imgTitle.textContent = title; 
        const iconHeart = document.createElement('i');
        iconHeart.classList.add("fa", "fa-heart");
        iconHeart.setAttribute("aria-label", "likes");
        const imgLikes = document.createElement('p');
        imgLikes.classList.add('media-legend__likes');
        imgLikes.textContent = likes + " ";
        const iconContainer = document.createElement('span');
        iconContainer.appendChild(iconHeart);
        imgLikes.appendChild(iconContainer);
        mediaLegend.appendChild(imgTitle);
        mediaLegend.appendChild(imgLikes);
        anchor.appendChild(img);
        blocPhoto.appendChild(anchor);
        blocPhoto.appendChild(mediaLegend);
        return (blocPhoto)
    }
    function getMediaVideo() {
        const anchor = document.createElement('a');
        anchor.setAttribute("aria-label", title + ", closeup view");
        const videoItem = document.createElement('video');
        blocVideo.classList.add('bloc-video');
        videoItem.setAttribute('src', videoPlayer);
        videoItem.setAttribute('controls', '');
        const mediaLegend = document.createElement('div');
        mediaLegend.classList.add('media-legend');
        const videoTitle = document.createElement('p');
        videoTitle.classList.add('media-legend__title');
        videoTitle.textContent = title; 
        const iconHeart = document.createElement('i');
        iconHeart.classList.add("fa", "fa-heart");
        iconHeart.setAttribute("aria-label", "likes");
        const videoLikes = document.createElement('p');
        videoLikes.classList.add('media-legend__likes');
        videoLikes.textContent = likes + " ";
        const iconContainer = document.createElement('span');
        anchor.appendChild(videoItem);
        iconContainer.appendChild(iconHeart);
        videoLikes.appendChild(iconContainer);
        mediaLegend.appendChild(videoTitle);
        mediaLegend.appendChild(videoLikes);
        blocVideo.appendChild(anchor);
        blocVideo.appendChild(mediaLegend);
        return (blocVideo)
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
    return { id, photographerId, title, image, video, likes, date, price, getMediaImg, getMediaVideo, encartLikes }
}