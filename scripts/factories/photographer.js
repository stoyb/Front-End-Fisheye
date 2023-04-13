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
        blocPhoto.appendChild(img);
        return (blocPhoto)
    }
    function getMediaVideo() {
        const videoItem = document.createElement('video');
        blocVideo.classList.add('bloc-video')
        videoItem.setAttribute('src', videoPlayer);
        videoItem.setAttribute('alt', "video");
        videoItem.setAttribute('controls', '');
        blocVideo.appendChild(videoItem);
        return (blocVideo)
    }
    return { id, photographerId, title, image, video, likes, date, price, getMediaImg, getMediaVideo }
}