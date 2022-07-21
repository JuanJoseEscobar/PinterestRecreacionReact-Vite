 // Import the functions you need from the SDKs you need
 import { initializeApp, } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
 //import {getStorage, ref, getDownloadURL, getMetadata, listAll}  from "https://www.gstatic.com/firebasejs/9.9.0/firebase-storage.js";
 import * as fbDatabase from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";
 import * as fbstore from "https://www.gstatic.com/firebasejs/9.9.0/firebase-storage.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBntTRUCDoYhiqc7n5-24kx-P8MQ_fyYPY",
   authDomain: "reactpinterest-d9341.firebaseapp.com",
   projectId: "reactpinterest-d9341",
   storageBucket: "reactpinterest-d9341.appspot.com",
   messagingSenderId: "101889507287",
   appId: "1:101889507287:web:0a5592df7d067f7aac1592"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const firebaseStorage = {
    getStorage: fbstore.getStorage(app),
    refStorage: fbstore.ref,
    getDownloadURL: fbstore.getDownloadURL,
    getMetadata: fbstore.getMetadata,
    listAll: fbstore.listAll,

    getDatabase: fbDatabase.getDatabase(app),
    refDatabase: fbDatabase.ref,
}
console.log(fbDatabase);
console.log(fbstore);

 export default firebaseStorage;