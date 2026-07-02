import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getDatabase,
    ref,
    set,
    onValue
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";


const firebaseConfig = {

    apiKey: "ВАШ_API_KEY",

    authDomain: "ВАШ_ПРОЕКТ.firebaseapp.com",

    databaseURL: "https://ВАШ_ПРОЕКТ-default-rtdb.firebaseio.com",

    projectId: "ВАШ_ПРОЕКТ",

    storageBucket: "ВАШ_ПРОЕКТ.appspot.com",

    messagingSenderId: "...",

    appId: "..."
};


const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

const editor = document.getElementById("editor");

const status = document.getElementById("status");

const noteRef = ref(db,"sharedNote");

status.innerText="Подключено ✔";


onValue(noteRef,(snapshot)=>{

    const text=snapshot.val();

    if(text!==editor.value){

        editor.value=text||"";
    }

});


editor.addEventListener("input",()=>{

    set(noteRef,editor.value);

});