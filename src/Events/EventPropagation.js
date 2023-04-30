function ButtonWithotPropagation({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default function ToolbarPropagation() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert('Вы нажали на тулбар!');
      }}
    >
      <ButtonWithotPropagation onClick={() => alert('Проигрывается!')}>
        Проигрывай фильм
      </ButtonWithotPropagation>
      <ButtonWithotPropagation onClick={() => alert('Загружается!')}>
        Загрузи изображение
      </ButtonWithotPropagation>
    </div>
  );
}
