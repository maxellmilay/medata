import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: 'test-project-d8058.firebaseapp.com',
  projectId: 'test-project-d8058',
  storageBucket: 'test-project-d8058.appspot.com',
  messagingSenderId: '992292260492',
  appId: '1:992292260492:web:958c2ba1482daedfba89a9',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
