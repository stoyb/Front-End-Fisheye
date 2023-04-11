function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;
   
    const picture = `assets/photographers/${portrait}`;
    
    
    function getUserCardDOM() {
        const anchor = document.createElement('a');
        anchor.setAttribute("href", "photographer.html?id=" + id);
        const article = document.createElement( 'article' );
        article.setAttribute("id", id);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute('alt', 'Image de ' + name);
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
    return { name, id, picture, city, country, tagline, price, portrait, getUserCardDOM }
}