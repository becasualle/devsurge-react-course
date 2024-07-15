import { useEffect, useState } from 'react';

export function ChatRoom({ options }) {
  const [message, setMessage] = useState([]);

  const { roomId, serverUrl } = options;

  useEffect(() => {
    const connection = createConnection({ roomId, serverUrl });
    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  <>
    <input value={message} onChange={(e) => setMessage(e.target.value)} />
  </>;
}

function createConnection({ serverUrl, roomId }) {
  return {
    connect() {
      console.log(`connected to: ${roomId}`);
    },
    disconnect() {
      console.log(`disconnect from: ${roomId}`);
    },
    on(event, callback) {
      callback('my message');
    },
  };
}
