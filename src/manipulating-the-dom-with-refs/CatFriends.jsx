import { useRef } from 'react';
import './cats.css';

export function CatFriends() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  function handleScrollToCat(ref) {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  return (
    <>
      <nav>
        <button onClick={() => handleScrollToCat(firstCatRef)}>Эси</button>
        <button onClick={() => handleScrollToCat(secondCatRef)}>Максик</button>
        <button onClick={() => handleScrollToCat(thirdCatRef)}>Алиса</button>
      </nav>
      <div>
        <ul>
          <li>
            <img
              src="https://placekitten.com/g/200/200"
              alt="Эси"
              ref={firstCatRef}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/300/200"
              alt="Максик"
              ref={secondCatRef}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/400/200"
              alt="Алиса"
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
