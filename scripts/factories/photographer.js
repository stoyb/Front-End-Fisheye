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
        const namePhotographer = document.createElement('h1');
        namePhotographer.textContent = name;
        const placePhotographer = document.createElement('p');
        placePhotographer.textContent = city + ', ' + country;
        const taglinePhotographer = document.createElement('p');
        taglinePhotographer.textContent = tagline;
        blocIdentity.appendChild(namePhotographer);
        blocIdentity.appendChild(placePhotographer);
        blocIdentity.appendChild(taglinePhotographer);
        return (blocIdentity);
    }
    return { name, id, picture, city, country, tagline, price, portrait, getUserCardDOM, getIdentityData }
}