import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <button
        style={{
          cursor: 'pointer',
          backgroundColor: '#7c3aed',
          border: 'none',
          color: 'white',
          padding: '0.5rem',
          borderRadius: '0.2rem',
        }}
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
          alert(number);
          setTimeout(() => alert(number), 1500);
        }}
      >
        +3
      </button>
      <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>{number}</span>
    </>
  );
}
