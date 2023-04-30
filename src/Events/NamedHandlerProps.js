export default function ToolbarWithMovieAndImageBtns() {
  return (
    <Toolbar
      onPlayMovie={() => alert('Проигрывается!')}
      onUploadImage={() => alert('Загружается!')}
    />
  );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>Проигрывай фильм</Button>
      <Button onClick={onUploadImage}>Загрузи изображение</Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
