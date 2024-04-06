// Caching expensive calculations

import { useState, useEffect, useMemo } from 'react';

export const TodoContainer = () => {
  const [todos, setTodos] = useState([
    'Пресс качат',
    'Т) Бегит',
    'Турник',
    'Анжуманя',
  ]);

  const filter = (el) => el.toLowerCase().startsWith('т'); // Uncaught TypeError: el.startsWith is not a function

  const addTodo = (todo) => setTodos([...todos, todo]);

  return <TodoList todos={todos} filter={filter} onSubmit={addTodo} />;
};

export const TodoList = ({ todos, filter, onSubmit }) => {
  const [newTodo, setNewTodo] = useState('');

  const visibleTodos = getFilteredTodos(todos, filter);

  function handleSubmit(e) {
    e.preventDefault();
    setNewTodo('');
    onSubmit(newTodo);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          id="todo"
          value={newTodo}
          onInput={(e) => setNewTodo(e.target.value)}
        />
      </form>

      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

function getFilteredTodos(todos, filter) {
  return todos.filter(filter);
}
