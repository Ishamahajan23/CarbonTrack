// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref , set , remove , get } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs7C1tOB7Y814qhg3302ZvPJnIblzW7-c",
  authDomain: "carbontrack-f2b62.firebaseapp.com",
  databaseURL: "https://carbontrack-f2b62-default-rtdb.firebaseio.com",
  projectId: "carbontrack-f2b62",
  storageBucket: "carbontrack-f2b62.firebasestorage.app",
  messagingSenderId: "369664952586",
  appId: "1:369664952586:web:c5346cf93111bc225452f3",
  measurementId: "G-4DTCPYY2L7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getDatabase(app);

export const saveBookmark = (date, avg, index)=>{
    return set(ref (db, `bookmarks/${date}`), {avg,index})
}
export const deleteBookmark = (date)=>{
    return remove(ref(db, `bookmarks/${date}`));
}

export const saveBookmarkWithIndex = (date, avg, index) => {
    return set(ref(db, `bookmarks/${date}`), { avg, index });
};

export const getBookmarks = async ()=>{
    const snapshot= await get(ref(db, 'bookmarks/'));
    return snapshot.exists() ? snapshot.val() : {};

}

