/* Initialize Firebase */
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL, getBytes } from 'firebase/storage';
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, setDoc, deleteDoc } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";


/* Firebase Keys */
const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_APIKEY || "AIzaSyCP0CIbfvR48T9i-gMkB41rj_Gw8x18GqU",
  authDomain: import.meta.env.REACT_APP_AUTHDOMAIN || "usera-77c6e.firebaseapp.com",
  projectId: import.meta.env.REACT_APP_PROJECTID || "usera-77c6e",
  storageBucket: import.meta.env.REACT_APP_STORAGEBUCKET || "usera-77c6e.appspot.com",
  messagingSenderId: import.meta.env.REACT_APP_MESSAGINGSENDERID || "931714051539",
  appId: import.meta.env.REACT_APP_APPID || "1:931714051539:web:403c485cf75b311d74d326",
  measurementId: import.meta.env.REACT_APP_MEASUREMENTID || "UA-249469540-2",
};



/* Export Firebase functions to be used in the project */
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

/* This function check if the user exists in db by uid */
export async function userExist(uid) {
  /* Check if user exists in the database */
  const docRef = doc(db, "users", uid);
  /* Get the document */
  const res = await getDoc(docRef);
  console.log(res);
  /* Return true if the document exists */
  return res.exists();
}

/* Async function to check if user exists in the database */
export async function existsUsername(username) {
  /*Create a empty array to store the usernames */
  const users = [];
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
export async function registerNewUser(user) {
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
export async function updateUser(user) {
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
export async function getUserInfo(uid) {
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


