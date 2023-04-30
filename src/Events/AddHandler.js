import React from 'react';

export default function AddHandler() {
  function handleClick() {
    alert('вы нажали на кнопку');
  }
  return <button onClick={handleClick}>Нажми меня</button>;
  // Правильные способы:
  //
  // return <button onClick={handleClick}>Нажми меня</button>;
  //
  // return (
  //   <button
  //     onClick={function handleClick() {
  //       alert('вы нажали на кнопку');
  //     }}
  //   >
  //     Нажми меня
  //   </button>
  // );
  //
  // return (
  //   <button onClick={() => alert('вы нажали на кнопку')}>Нажми меня</button>
  // );

  // Неправильные способы:
  //
  // return <button onClick={handleClick()}>Нажми меня</button>;
  //
  // return <button onClick={alert('вы нажали на кнопку')}>Нажми меня</button>;
}
