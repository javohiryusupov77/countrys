import { showSpinner } from "../utils.js";
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    showSpinner(true, document.getElementById("countries-container"));
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('countries-container');
            data.forEach(country => {
                const countryDiv = document.createElement('div');
                countryDiv.classList.add('country');

                const flagImg = document.createElement('img');
                flagImg.src = country.flags.svg;
                flagImg.alt = `${country.name.common} flag`;

                const countryName = document.createElement('h1');
                countryName.textContent = country.name.common;

                const capitalInfo = document.createElement('h3');
                capitalInfo.textContent = `Capital: ${country.capital ? country.capital[0] : 'N/A'}`;

                const mapLink = document.createElement('a');
                mapLink.href = country.maps.googleMaps;
                mapLink.textContent = 'View Map';
                mapLink.target = '_blank';

                const populationInfo = document.createElement('p');
                populationInfo.textContent = `Population: ${country.population.toLocaleString()}`;

                countryDiv.append(flagImg);
                countryDiv.append(countryName);
                countryDiv.append(capitalInfo);
                countryDiv.append(mapLink);
                countryDiv.append(populationInfo);

                container.append(countryDiv);
                
            });
            showSpinner(false, document.getElementById("countries-container"));
        })
});
let atTop = true;
function toggleScroll() {
    if (atTop) {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        })
        document.getElementById('scrollButton').textContent = 'Scroll to Top';
    } else {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        document.getElementById('scrollButton').textContent = 'Scroll to Bottom';
    }
    atTop = !atTop;
}
const botton = document.getElementById("scrollButton");
botton.onclick = toggleScroll;

