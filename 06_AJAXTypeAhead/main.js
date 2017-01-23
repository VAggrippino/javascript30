const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
  .then(response => response.json())
  .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const matchString = (place.city.match(regex) || place.state.match(regex))[0];

    const cityName = place.city.replace(regex, `<span class="hl">${matchString}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${matchString}</span>`);

    const population = numberWithCommas(place.population);
    const listItem = `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${population}</span>
      </li>
    `;
    return listItem;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('keyup', displayMatches);
