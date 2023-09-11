import { useState } from 'react';
import { initialTravelPlanFlat } from './places.js';

// 1. Группируйте связанные состояния
export function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div
      onPointerMove={(e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}

// 2. Устраняйте противоречия в состоянии
export function FeedbackForm() {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('typing'); // 'sending', 'sent'

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    await sendMessage(text);
    setStatus('sent');
  }

  const isSending = status === 'sending';
  const isSent = status === 'sent';

  if (isSent) {
    return <h1>Спасибо за обратную связь!</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Насколько вам понравился отдых в Клубе Любителей Ватрушек?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button disabled={isSending} type="submit">
        Send
      </button>
      {isSending && <p>Отправка...</p>}
    </form>
  );
}

// Имитируем отправку сообщения
function sendMessage(text) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

// 3. Избавляйтесь от избыточных состояний
export function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <h2>Зарегистрируйтесь</h2>
      <label>
        Имя: <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Фамилия: <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        Оформим билет на: <b>{fullName}</b>
      </p>
    </>
  );
}

// 4. Убедитесь, что состояние не дублируется
const initialItems = [
  { title: 'крендель', id: 0 },
  { title: 'йогурт', id: 1 },
  { title: 'батончик гранолы', id: 2 },
];

export function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  const selectedItem = items.find((item) => item.id === selectedId);

  function handleItemChange(id, e) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: e.target.value,
          };
        } else {
          return item;
        }
      }),
    );
  }

  return (
    <>
      <h2>Какой ваш любимый перекус в походе?</h2>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={(e) => {
                handleItemChange(item.id, e);
              }}
            />{' '}
            <button
              onClick={() => {
                setSelectedId(item.id);
              }}
            >
              Выберите
            </button>
          </li>
        ))}
      </ul>
      <p>Вы выбрали {selectedItem.title}.</p>
    </>
  );
}

// 5. Избегайте глубокой вложенности состояния
export function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlanFlat);

  function handleComplete(parentId, childId) {
    const parent = plan[parentId];
    // Create a new version of the parent place
    // that doesn't include this child ID.
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };
    // Update the root state object...
    setPlan({
      ...plan,
      // ...so that it has the updated parent.
      [parentId]: nextParent,
    });
  }

  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <>
      <h2>Places to visit</h2>
      <ol style={{ padding: '0' }}>
        {planetIds.map((id) => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
}

function PlaceTree({ id, parentId, placesById, onComplete }) {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}
    >
      <span style={{ minWidth: '80px' }}>{place.title} </span>
      <button
        onClick={() => {
          onComplete(parentId, id);
        }}
      >
        Complete
      </button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
}
