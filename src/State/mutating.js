// Primitive
const number = 0;
const word = '';
const isActive = true;
// Object
const hero = { name: 'Weaver', str: 16 };

const newHero = { ...hero };
newHero.name = 'Pudge';
newHero.str = 25;

console.log({ hero, newHero });

const newHeroSameStr = { ...hero, name: 'Drow Ranger' };
console.log(newHeroSameStr);
