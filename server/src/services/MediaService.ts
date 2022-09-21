import { addDoc, collection, getDocs, DocumentData } from 'firebase/firestore';
import db from '../db/firestore.js';

type InfoType = {
  owner: String;
  synopsis: String;
  title: String;
  type: String;
};

export async function createMedia(info: InfoType) {
  await addDoc(collection(db, 'media'), info);
}

export async function getAllMedia() {
  const querySnapshot = await getDocs(collection(db, 'media'));
  const allMedia: DocumentData[] = [];
  querySnapshot.forEach((doc) => {
    const docData = doc.data();
    allMedia.push({ id: doc.id, ...docData });
  });
  return allMedia;
}
