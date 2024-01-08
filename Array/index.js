const superheroes = ["Catwoman", "Storm", "Jessica Jones"];

superheroes.push("mama stella");
superheroes.shift();
// => 4

superheroes;
// => ["Catwoman", "Storm", "Jessica Jones", "Wonder Woman"]

const cities = ["New York", "San Francisco"];

cities.unshift("kenya", "nairobi");
cities.pop();
// => 4

cities;