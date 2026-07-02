import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getDatabase,
    ref,
    set,
    onValue
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyACgrtVxhrD_ix9TKheuGFt1lYzSdJkkdA",
    authDomain: "xena-fa569.firebaseapp.com",
    databaseURL: "https://xena-fa569-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "xena-fa569",
    storageBucket: "xena-fa569.firebasestorage.app",
    messagingSenderId: "427193281577",
    appId: "1:427193281577:web:bd653d3f8b8cf6edaec038"
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


editor.addEventListener("input", async () => {
    try {
        await set(noteRef, editor.value);
        status.textContent = "Сохранено ✔";
    } catch (e) {
        console.error(e);
        status.textContent = "Ошибка сохранения ❌";
    }
});
