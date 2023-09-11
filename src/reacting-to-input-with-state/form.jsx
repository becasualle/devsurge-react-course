import { useState } from 'react';

export default function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);

  const [status, setStatus] = useState('typing'); // 'typing', 'submitting', or 'success'

  if (status === 'success') {
    return <h1>Это правильный ответ!</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>Квиз по городам</h2>
      <p>В каком городе находится парк "Зарядье"?</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={answer.length === 0 || status === 'submitting'}>
          Отправить
        </button>
        {error !== null && status !== 'submitting' && (
          <p style={{ color: 'crimson' }}>{error.message}</p>
        )}
        {status === 'submitting' && <p>Загрузка...</p>}
      </form>
    </>
  );
}

function submitForm(answer) {
  // Имитируем HTTP-запрос
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'москва';
      if (shouldError) {
        reject(new Error('Хорошая попытка, но нет. Попробуйте еще!'));
      } else {
        resolve('Успех');
      }
    }, 1500);
  });
}
