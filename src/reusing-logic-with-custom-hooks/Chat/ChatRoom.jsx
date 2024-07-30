import { useState, useEffect } from 'react';
import { useChatRoom } from './useChatRoom';

export function ChatRoom({ roomId }) {
  // Every time your ChatRoom component re-renders, it passes the latest roomId and serverUrl to your Hook.
  // This is why your Effect re-connects to the chat whenever their values are different after a re-render.
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');
  useChatRoom({ serverUrl, roomId });

  return (
    <>
      <label>
        Server URL:
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}
