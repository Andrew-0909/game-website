// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnhkIev7tSDkyzBg5DNRcy47kqNnnYtFo",
  authDomain: "gamebox-a5f91.firebaseapp.com",
  projectId: "gamebox-a5f91",
  storageBucket: "gamebox-a5f91.firebasestorage.app",
  messagingSenderId: "639795452693",
  appId: "1:639795452693:web:420edd77e6627cbbae271c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function submitComment(gameId, rating, text, user){
    await addDoc(collection(db, "comments"), {
        gameId, 
        rating,
        text,
        user,
        date: new Date().toISOString()
    });
    alert("Comment saved!");
}
async function loadComments(gameId){
    const querySnapshot = await getDocs(collection(db, "comments"));
    querySnapshot.forEach((doc)=>{
        const data = doc.data();
        if(data.gameId === gameId){
            console.log(data.user, data.rating, data.text);
        }
    });
}