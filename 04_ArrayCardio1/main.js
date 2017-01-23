// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const parisBoulevards = [
  'Boulevard Auguste-Blanqui',
  'Boulevard Barbès',
  'Boulevard Beaumarchais',
  'Boulevard de l\'Amiral-Bruix',
  'Boulevard de Strasbourg',
  'Boulevard des Capucines',
  'Boulevard de la Chapelle',
  'Boulevard de Clichy',
  'Boulevard du Crime',
  'Boulevard Haussmann',
  'Boulevard de l\'Hôpital',
  'Boulevard des Italiens',
  'Boulevard de la Madeleine',
  'Boulevard de Magenta',
  'Boulevard Montmartre',
  'Boulevard du Montparnasse',
  'Boulevard Raspail',
  'Boulevard Richard-Lenoir',
  'Boulevard de Rochechouart',
  'Boulevard Saint-Germain',
  'Boulevard Saint-Michel',
  'Boulevard de Sébastopol',
  'Boulevard du Temple',
  'Boulevard Voltaire',
  'Boulevard de la Zone',
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const from1500s = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.log("Inventors who were born in the 1500's")
console.table(from1500s);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
inventors.sort((a, b) =>  (a.year > b.year ? 1 : -1));
console.table(inventors);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const inventorYears = inventors.reduce((years, inventor) => years + (inventor.passed - inventor.year), 0);

console.log(inventorYears);

// 5. Sort the inventors by years lived
const inventorsByLongevity = inventors.sort((a, b) => {
  return ((a.passed - a.year) > (b.passed - b.year) ? 1 : -1);
});

console.log("Inventors sorted by longevity");
console.table(inventorsByLongevity);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const deBoulevards = parisBoulevards.filter(boulevard => boulevard.match(/de/));
console.log('"de" boulevards in Paris');
console.log(deBoulevards);

// 7. sort Exercise
// Sort the people alphabetically by last name
people.sort();
console.log('Sorted People');
console.log(people);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce((counters, item) => {
  if (!counters[item]) counters[item] = 0;
  counters[item]++;
  return counters;
}, {});
console.log('transportation');
console.log(transportation);
