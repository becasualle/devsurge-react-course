import React from 'react';

function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export default function Toolbar() {
  return (
    <div>
      <AlertButton message="Проигрывается!">Проигрывай фильм</AlertButton>
      <AlertButton message="Загружается!">Загрузи изображение</AlertButton>
    </div>
  );
}
