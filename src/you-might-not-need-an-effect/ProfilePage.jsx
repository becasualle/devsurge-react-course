// Resetting all state when a prop changes
import { useState, useEffect } from 'react';

export function ProfilePage({ userId }) {
  return <Profile userId={userId} key={userId} />;
}

function Profile({ userId }) {
  // ✅ Это и любое другое состояние ниже сбросится автоматически при изменении значения атрибута `key` при вызове

  const [comment, setComment] = useState('');
  // ...
}
