export default function List() {
  const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist',
  ];
  const listItems = people.map((person) => <li>{person}</li>);
  return <ul>{listItems}</ul>;
}
