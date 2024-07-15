import { useState, useEffect, useContext, createContext } from 'react';

export const ThemeContext = createContext('dark');

export function Form() {
  const [submitted, setSubmitted] = useState(false);
  const theme = useContext(ThemeContext);

  function handleSubmit() {
    post('/api/register');
    showNotification('Successfully registered!', theme);
  }

  // ...
}

function post(url) {}

function showNotification(text, theme = 'light') {}
