import { useRef, useState } from 'react';

export function CounterAlert() {
  let ref = useRef(0); // {current: 0}
  const [count, setCount] = useState(0);
  let val = 0;
  console.log('rendered');

  function handleClick() {
    ref.current = ref.current + 1;
    val++;
    alert('Вы кликнули ' + ref.current + ' раз!');
    // alert('Вы кликнули ' + val + ' раз!');
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p>Вы кликнули {count} раз!</p>
    </div>
  );
}
