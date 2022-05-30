import { io } from "socket.io-client";
import * as firebase from 'firebase/app'
import { getFirestore, collection, addDoc, query, where, onSnapshot, Timestamp } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCar5uTamnnCgrGruXh9b-vO9RJTQG6s0o",
    authDomain: "dontchat-53bcd.firebaseapp.com",
    projectId: "dontchat-53bcd",
    storageBucket: "dontchat-53bcd.appspot.com",
    messagingSenderId: "452263067258",
    appId: "1:452263067258:web:79ad96c6667d3d04af05c3",
    measurementId: "G-SV125DMRZ8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


//const ENDPOINT = "http://chat.flavioroso.com.br";
const chatRef = collection(getFirestore(app), "chat");

let chatRoom = "";




function joinChatRoom(room: string) {
    chatRoom = room;
}

function sendMessage(message: string, name: string, room: string): void {
    addDoc(chatRef, {
        name: name,
        message: message,
        room: room,
        date: Date.now()
    });
}


function recieveMessage(callback: CallableFunction): void {
    const q = query(chatRef, where("room", "==", chatRoom));
    onSnapshot(q, (querySnapshot) => {
        const messages: any[] = [];
        querySnapshot.forEach((doc) => {
            messages.push(doc.data());
        });
        callback(messages);
    });

}

export default {
    joinChatRoom,
    sendMessage,
    recieveMessage
}


