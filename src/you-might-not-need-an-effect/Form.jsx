import { useEffect, useState } from 'react';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // ✅ Хорошо: Эта логика должна запускаться в ответ на показ компонента
  useEffect(() => {
    // eslint-disable-next-line
    post('/analytics/event', { eventName: 'visit_form' });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line
    post('/api/register', { firstName, lastName });
  }
  // ...
}
