import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBrY1fRaxThXYYfXiCNP0FRkvQXkInqxEg",
  authDomain: "vrvitorvilela.firebaseapp.com",
  projectId: "vrvitorvilela",
  storageBucket: "vrvitorvilela.appspot.com",
  messagingSenderId: "610792541375",
  appId: "1:610792541375:web:7a18eb48472c42a70cca0a",
  measurementId: "G-2R70SM0Z4K"
  };

  
const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);