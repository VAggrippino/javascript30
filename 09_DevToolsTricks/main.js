const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

const p = document.querySelector('p');
p.addEventListener('click', makeGreen);

// Regular
console.log('hello');

// Interpolated
console.log('Hello, I am the %s.', '💩');

// Styled
console.log('%c I am some great text.', 'font-size: 2em; background: blue; color: yellow;');

// warning!
console.warn('Oh NOOOO!');

// Error :|
console.error('Awww!');

// Info
console.info('Developers eat 3 - 4 people per year.');

// Testing
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Vince');
console.count('Vince');
console.count('Vince');
console.count('V1nce');
console.count('Vince');
console.count('Vince');

// timing
console.time('fetching data took');
const endpoint = 'https://api.github.com/users/vaggrippino';

fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.timeEnd('fetching data took');
  });

console.table(dogs);
