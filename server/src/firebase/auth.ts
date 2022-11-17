import { firebaseApp } from './firebase';
import { getAuth } from 'firebase/auth';

export const auth = getAuth(firebaseApp);
