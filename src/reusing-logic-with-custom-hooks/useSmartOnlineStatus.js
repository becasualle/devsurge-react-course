import { useSyncExternalStore } from 'react';

function subscribe(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

export function useOnlineStatus() {
  // Хук, позволяющий подписаться на внешнее хранилище: https://react.dev/reference/react/useSyncExternalStore
  return useSyncExternalStore(
    subscribe,
    () => navigator.onLine, // Как получить значение на клиенте
    () => true, // Как получить значение на сервере
  );
}
