export function getImageUrl(person, size = 's') {
  return 'https://i.imgur.com/' + person.imageId + size + '.jpg';
}

export function getPluralForm(number, one, two, many) {
  let num = Math.abs(number);
  num %= 100;
  if (num >= 5 && num <= 20) {
    return many;
  }
  num %= 10;
  if (num === 1) {
    return one;
  }
  if (num >= 2 && num <= 4) {
    return two;
  }
  return many;
}
