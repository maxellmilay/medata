import { firebaseApp } from './firebase.js';
import { getAuth } from 'firebase/auth';

export const auth = getAuth(firebaseApp);
