import { useEffect } from 'react';
import { ListItems } from './you-might-not-need-an-effect';

if (typeof window !== 'undefined') {
  // Проверяем, что приложение запускается в браузере.
  // ✅ Запускается только один раз при загрузке приложения
  checkAuthToken();
  loadDataFromLocalStorage();
}

export default function App() {
  // 🔴 Избегать: Эффекты с логикой, которая должна применяться только один раз. Проблема: в режиме разработки будет запускаться дважды. Любые компоненты должны быть устойчивы к перемонтированию — в том числе компнент App.
  // useEffect(() => {
  //   loadDataFromLocalStorage();
  //   checkAuthToken();
  // }, []);

  return (
    <>
      <ListItems />
    </>
  );
}

function loadDataFromLocalStorage() {
  console.log('loadDataFromLocalStorage');
}

function checkAuthToken() {
  console.log('checkAuthToken');
}
