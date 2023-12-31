import { useRef } from 'react';

// Чистый код рендеринга
export function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    console.log(inputRef);
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
