import { useRef } from 'react';

export function Container() {
  const lostContainer = useRef(null);
  function handleFind() {
    lostContainer.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div
      style={{
        height: '200vh',
        backgroundColor: '#e7e5e4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}
    >
      <button onClick={handleFind} style={{ alignSelf: 'flex-start' }}>
        Find child
      </button>
      <div style={{ backgroundColor: '#6ee7b7' }} ref={lostContainer}>
        I'm lost child
      </div>
    </div>
  );
}
