import { people } from '../data';
import { getImageUrl } from '../utils';

export default function Filter() {
  const chemists = people.filter((person) => person.profession === 'chemist');
  const listItems = chemists.map((person, index) => (
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
        className="avatar--100"
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}
