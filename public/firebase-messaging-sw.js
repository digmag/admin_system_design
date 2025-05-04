importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-app-sw.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging-swн.js');

const firebaseConfig = {
  apiKey: "AIzaSyB39Kh7Dekbv59Uu4n1r0lKJtphgbFqJEg",
  authDomain: "bankapplication-25fc2.firebaseapp.com",
  projectId: "bankapplication-25fc2",
  storageBucket: "bankapplication-25fc2.firebasestorage.app",
  messagingSenderId: "64328326974",
  appId: "1:64328326974:web:441c39fbe8b49b2642d66f"
};
console.log("123")

// Инициализация Firebase в сервисном воркере
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

console.log(messaging);

// Запрос разрешения на уведомления
Notification.requestPermission().then((permission) => {
  if (permission === 'granted') {
    console.log('Разрешение на уведомления получено');

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/firebase-messaging-sw.js')
        .then((registration) => {
          console.log('Service Worker зарегистрирован:', registration);

          messaging.getToken({
            vapidKey: 'BLvP1aVrZJjtryd21EZY2WAarCn0SAAO0rnEnJZZyFz__GoBIWBVoSwrEOF3XV5aAoM6Lz4QHW_w7_7UDD4svxs',
            serviceWorkerRegistration: registration,
          }).then((currentToken) => {
            if (currentToken) {
              console.log('FCM токен:', currentToken);
            } else {
              console.warn('Не удалось получить токен.');
            }
          }).catch((err) => {
            console.error('Ошибка получения токена:', err);
          });

        }).catch((err) => {
          console.error('Ошибка регистрации Service Worker:', err);
        });
    }
  } else {
    console.warn('Пользователь не дал разрешение на уведомления');
  }
});

// Ловим входящие сообщения при открытом приложении
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Фоновое сообщение получено:', payload);
});
