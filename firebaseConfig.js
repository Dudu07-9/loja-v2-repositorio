import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importante para o banco de dados

const firebaseConfig = {
  apiKey: "AIzaSyAbCW27NZLekySZpYiqddXghEFpd908_uo",
  authDomain: "infodudu.firebaseapp.com",
  projectId: "infodudu",
  storageBucket: "infodudu.firebasestorage.app",
  messagingSenderId: "584248722880",
  appId: "1:584248722880:web:178d08c02b15b671343425",
  measurementId: "G-9KKDJS3FJF"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta o 'db' para você usar em outras partes do código (como criar produtos)
export const db = getFirestore(app);