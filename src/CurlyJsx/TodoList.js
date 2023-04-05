export function TodoListTitle() {
  const name = 'Марка';
  return <h1>Список задач {name}</h1>;
}

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat('ru-RU', { weekday: 'long' }).format(date);
}

export function TodoListDay() {
  return <h2>Сегодня {formatDate(today)}</h2>;
}

export default function TodoList() {
  return (
    <>
      <TodoListTitle />
      <TodoListDay />
      <ul
        style={{
          backgroundColor: 'lightgrey',
          color: 'grey',
          width: 'fit-content',
          padding: '1rem',
          paddingLeft: '2rem',
        }}
      >
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </>
  );
}
