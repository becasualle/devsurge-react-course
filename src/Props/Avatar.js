import { getImageUrl } from './utils';

export default function Avatar({ person, size = 100 }) {
  return (
    <img
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
      style={{ borderRadius: '50%' }}
    />
  );
}
