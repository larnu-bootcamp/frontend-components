/* Initialize Firebase */
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore, collection, getDocs, doc, getDoc, query, where, setDoc, DocumentData } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";


/* Firebase Keys */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_APIKEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTHDOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PROJECTID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_REACT_APP_APPID,
  measurementId: import.meta.env.VITE_REACT_APP_MEASUREMENTID,
};



/* Export Firebase functions to be used in the project */
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

/* This function check if the user exists in db by uid */
export async function userExist(uid: string) {
  /* Check if user exists in the database */
  const docRef = doc(db, "users", uid);
  /* Get the document */
  const res = await getDoc(docRef);
  console.log(res);
  /* Return true if the document exists */
  return res.exists();
}

/* Async function to check if user exists in the database */
export async function existsUsername(username: unknown) {
  /*Create a empty array to store the usernames */
  const users: DocumentData[] = [];
  /* Obtains all the data of the users collection frome the db */
  const docsRef = collection(db, 'users');
  /* Query the data from the db comparing where the username == username*/
  const q = query(docsRef, where('username', '==', username));
  /* Get the data from the query */
  const querySnapshot = await getDocs(q);
  /* Push the data to the array */
  querySnapshot.forEach(doc => {
    users.push(doc.data());
  });
  /* Return true if the array is not empty */
  return users.length > 0 ? users[0].uid : null;
}

/* Function that allows to create a new user in the database */
export async function registerNewUser(user: { uid: any; displayName?: string | null; username?: string; processCompleted?: boolean; }) {
  try {
    /* set the collection and the user in the db */
    const collectionRef = collection(db, 'users');
    /* set the data in for the database */
    const docRef = doc(collectionRef, user.uid);
    /* use the setDoc function to set the data in the db */
    await setDoc(docRef, user);
  } catch (error) { }
}
/* Function that allows to delete a user in the database */
export async function updateUser(user: { uid?: any; }) {
  try {
    /* set the collection and the user in the db */
    const collectionRef = collection(db, 'users');
    /* set the data in for the database */
    const docRef = doc(collectionRef, user.uid);
    /* use the setDoc function to set the data in the db */
    await setDoc(docRef, user);
  } catch (error) { }
}

/* Function that gets the user data from the database */
export async function getUserInfo(uid: string) {
  try {
    /* set the collection and the user in the db */
    const docRef = doc(db, 'users', uid);
    /* get the data from the db */
    const document = await getDoc(docRef);
    /* return the data */
    return document.data();
  } catch (error) { }
}

/* Function that allows to logout the user */
export async function logout() {
  await auth.signOut();
  
}


