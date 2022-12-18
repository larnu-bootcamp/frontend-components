// Service Worker creation

importScripts("https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js")


/* Firebase Keys */
const firebaseConfig = {
  apiKey: 'AIzaSyCP0CIbfvR48T9i-gMkB41rj_Gw8x18GqU',
  authDomain: 'usera-77c6e.firebaseapp.com',
  projectId: 'usera-77c6e',
  storageBucket: 'usera-77c6e.appspot.com',
  messagingSenderId: '931714051539',
  appId: '1:931714051539:web:403c485cf75b311d74d326',
  measurementId: 'G-M64EG8E4DW',
};

/* Export Firebase functions to be used in the project */
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage (payload =>{
  console.log("Recibiste un mensaje miestras estabas ausente");

  // Previous to show notifications
  const notificationTitle = payload.notification.title;
  const notificationsOptions = {
    body: payload.notification.body,
    icon: "./larnu.png"
  }
  return self.resgistration.showNotification(
    notificationTitle,
    notificationsOptions
  )
})