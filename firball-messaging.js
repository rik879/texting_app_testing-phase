import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhLGsKbWPgX_PuL9Z6SUL4wtIPVZSAl8U",
  authDomain: "compressorapp.firebaseapp.com",
  projectId: "compressorapp",
  storageBucket: "compressorapp.firebasestorage.app",
  messagingSenderId: "68592919429",
  appId: "1:68592919429:web:7c9d0308cafd06032f1aec",
  measurementId: "G-BPJ9K0P761"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function sendMessage(to, from, text) {
  push(ref(db, "messages"), { to, from, text });
}

export function checkInbox(user, callback) {
  onValue(ref(db, "messages"), snapshot => {
    const all = snapshot.val();
    const inbox = Object.values(all || {}).filter(msg => msg.to === user);
    callback(inbox);
  });
}
