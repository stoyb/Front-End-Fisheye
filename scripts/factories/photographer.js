import { mediaLikesResults }  from "../pages/photographer.js"

export function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;
   
    const picture = `assets/photographers/${portrait}`;
    
    function getUserCardDOM() {
        const anchor = document.createElement('a');
        anchor.setAttribute("href", "photographer.html?id=" + id);
        anchor.setAttribute("aria-label", name);
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute('alt', name);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const place = document.createElement('p');
        place.classList.add("card__subtitle1");
        place.textContent = city + ", " + country;
        const slogan = document.createElement('p');
        slogan.classList.add("card__subtitle2");
        slogan.textContent = tagline;
        const dailyRate = document.createElement('p');
        dailyRate.classList.add("card__subtitle3");
        dailyRate.textContent = price + "€/jour";
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(place);
        article.appendChild(slogan);
        article.appendChild(dailyRate);
        anchor.appendChild(article);
        return (anchor);
    }
    function getIdentityData() {
        const blocIdentity = document.createElement('div');
        blocIdentity.classList.add('bloc-identity');
        const namePhotographer = document.createElement('h1');
        namePhotographer.textContent = name;
        const placePhotographer = document.createElement('p');
        placePhotographer.textContent = city + ', ' + country;
        placePhotographer.classList.add('place-photographer')
        const taglinePhotographer = document.createElement('p');
        taglinePhotographer.textContent = tagline;
        taglinePhotographer.classList.add('tagline-photographer');
        blocIdentity.appendChild(namePhotographer);
        blocIdentity.appendChild(placePhotographer);
        blocIdentity.appendChild(taglinePhotographer);
        return (blocIdentity);
    }
     function getImg() {
        const blocImg = document.createElement('div');
        blocImg.classList.add('bloc-img');
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute('alt', name);
        blocImg.appendChild(img);
        return(blocImg)
     }
    return { name, id, picture, city, country, tagline, price, portrait, getUserCardDOM, getIdentityData, getImg }
}

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
        img.setAttribute('alt', "picture");
        const mediaLegend = document.createElement('div');
        mediaLegend.classList.add('media-legend');
        const imgTitle = document.createElement('p');
        imgTitle.classList.add('media-legend__title');
        imgTitle.textContent = title; 
        const iconHeart = document.createElement('i');
        iconHeart.classList.add("fa", "fa-heart");
        const imgLikes = document.createElement('p');
        imgLikes.classList.add('media-legend__likes');
        imgLikes.textContent = likes + " ";
        const iconContainer = document.createElement('span');
        iconContainer.appendChild(iconHeart);
        imgLikes.appendChild(iconContainer);
        mediaLegend.appendChild(imgTitle);
        mediaLegend.appendChild(imgLikes);
        blocPhoto.appendChild(img);
        blocPhoto.appendChild(mediaLegend);
        return (blocPhoto)
    }
    function getMediaVideo() {
        const videoItem = document.createElement('video');
        blocVideo.classList.add('bloc-video');
        videoItem.setAttribute('src', videoPlayer);
        videoItem.setAttribute('alt', "video");
        videoItem.setAttribute('controls', '');
        const mediaLegend = document.createElement('div');
        mediaLegend.classList.add('media-legend');
        const videoTitle = document.createElement('p');
        videoTitle.classList.add('media-legend__title');
        videoTitle.textContent = title; 
        const iconHeart = document.createElement('i');
        iconHeart.classList.add("fa", "fa-heart");
        const videoLikes = document.createElement('p');
        videoLikes.classList.add('media-legend__likes');
        videoLikes.textContent = likes + " ";
        const iconContainer = document.createElement('span');
        iconContainer.appendChild(iconHeart);
        videoLikes.appendChild(iconContainer);
        mediaLegend.appendChild(videoTitle);
        mediaLegend.appendChild(videoLikes);
        blocVideo.appendChild(videoItem);
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
        blocLikes.textContent = mediaLikesResults + " ";
        const blocLikesPrice = document.createElement('p');
        blocLikesPrice.textContent = 300 + "€/jour";
        const iconContainer = document.createElement('span');
        iconContainer.appendChild(iconHeart);
        blocLikes.appendChild(iconContainer);
        blocEncart.appendChild(blocLikes);
        blocEncart.appendChild(blocLikesPrice);
        return (blocEncart)
    }
    return { id, photographerId, title, image, video, likes, date, price, getMediaImg, getMediaVideo, encartLikes }
}