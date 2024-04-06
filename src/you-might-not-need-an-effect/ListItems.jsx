// Adjusting some state when a prop changes
import { useState, useEffect } from 'react';

export const ListItems = () => {
  const [items, setItems] = useState(['арбуз', 'дынька', 'бананчик']);
  const [newItem, setNewItem] = useState('');
  return (
    <div>
      <form
        onSubmit={(e) => (e.preventDefault(), setItems([...items, newItem]))}
      >
        <input
          type="text"
          value={newItem}
          onInput={(e) => setNewItem(e.target.value)}
        />
      </form>
      <List items={items} />
    </div>
  );
};

function List({ items }) {
  const [selectedId, setSelectedId] = useState(null);

  const selection = items.find((item) => item.id === selectedId) ?? null;

  return <div>some JSX</div>;
}
