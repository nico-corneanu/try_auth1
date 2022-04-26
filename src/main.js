import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA9gOVMFI-Q9cdxhlbNH13mtLMONuMf_Hs",
  authDomain: "messenger-project-9c971.firebaseapp.com",
  projectId: "messenger-project-9c971",
  storageBucket: "messenger-project-9c971.appspot.com",
  messagingSenderId: "197887723",
  appId: "1:197887723:web:cc0308cac4ad85d611e0ae",
  measurementId: "G-8KD544K9NE"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
