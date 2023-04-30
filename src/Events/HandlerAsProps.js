function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Проигрывается фильм под названием "${movieName}"`);
  }

  return <Button onClick={handlePlayClick}>Проигрывай "{movieName}"</Button>;
}

function UploadButton() {
  return (
    <Button onClick={() => alert('Загрузка изображения')}>
      Загрузи изображение
    </Button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Побег из Шоушенка" />
      <UploadButton />
    </div>
  );
}
