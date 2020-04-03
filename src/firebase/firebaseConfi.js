import * as firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDJ_ekIKwp_RiUoy6LL6C1IKOG29OAVy0k",
    authDomain: "weatherapp-4040e.firebaseapp.com",
    databaseURL: "https://weatherapp-4040e.firebaseio.com",
    projectId: "weatherapp-4040e",
    storageBucket: "weatherapp-4040e.appspot.com",
    messagingSenderId: "180990636775",
    appId: "1:180990636775:web:9c12cb0a73b462a970a842"
  };

  export default firebase.initializeApp(firebaseConfig);