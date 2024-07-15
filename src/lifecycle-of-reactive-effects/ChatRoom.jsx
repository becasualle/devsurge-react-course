import { useEffect, useState } from 'react';

export function Chat() {
  const rooms = ['общий', 'путешествия', 'музыка'];
  const [roomId, setRoomId] = useState('общий');
  const [show, setShow] = useState(false);

  return (
    <>
      <label>
        Выберите команту чата:{' '}
        <select
          name="roomId"
          id="roomId"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        >
          {rooms.map((room) => (
            <option value={room} key={room}>
              {room}
            </option>
          ))}
        </select>
      </label>

      <button onClick={() => setShow(!show)} style={{ marginLeft: '8px' }}>
        {show ? 'Закрыть чат' : 'Открыть чат'}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}

function ChatRoom({ roomId }) {
  useEffect(() => {
    logVisit(roomId);
  }, [roomId]);

  // 2. Затем стартует синхронизация эффекта
  useEffect(() => {
    const serverUrl = `https://localhost:1234/${roomId}`;

    // Старт/начало синхронизации
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    // Стоп/конец синхронизации. Произойдет когда компонент анмаунтится или как только изменится значение зависимости
    return () => {
      connection.disconnect();
    };
  }, [roomId]);
  // ...
  return <h1>Добро пожаловать в чат "{roomId}"!</h1>; // 1. Сначала отображается UI
}

function createConnection(serverUrl, roomId) {
  return {
    connect() {
      console.log(`connected to: ${roomId}`);
    },
    disconnect() {
      console.log(`disconnect from: ${roomId}`);
    },
  };
}

function logVisit(roomId) {
  // отправляем данные в нашу систему аналитики
}
