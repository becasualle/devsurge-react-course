export default function Signup() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert('Отправка!');
      }}
    >
      <input />
      <button>Отправить</button>
    </form>
  );
}
