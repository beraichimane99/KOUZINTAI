import { getApp, getApps, initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-qLuiZNbd5pyRrrZ4Q5wx83stMjqX0wI",
  authDomain: "elite-project-773b9.firebaseapp.com",
  projectId: "elite-project-773b9",
  storageBucket: "elite-project-773b9.appspot.com",
  messagingSenderId: "694096892711",
  appId: "1:694096892711:web:079700a647f84643e9cf02",
  measurementId: "G-H07573JNRG"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
