import { forwardRef, useRef } from 'react';

const MyInput = forwardRef((props, myRef) => {
  return <input {...props} ref={myRef} />;
});

export function FormForwardingRef() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
