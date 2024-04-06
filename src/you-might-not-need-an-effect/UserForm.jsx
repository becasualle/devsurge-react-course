// Updating state based on props or state
import { useState, useEffect } from 'react';

/**
 * Когда значение может быть расчитано из существующих пропсов или состояния, не кладите это в состояние.
 * Вместо этого, расчитайте значение в процессе рендеринга.
 */

export const UserForm = () => {
  const [firstName, setFirstName] = useState('Алексей');
  const [lastName, setLastName] = useState('Кавайный');

  const [text, setText] = useState('');

  // ✅ Хорошо: расчитывается в процессе рендеринга
  const fullName = firstName + ' ' + lastName;

  console.log('Rendered');

  return <p>{fullName}</p>;
};
