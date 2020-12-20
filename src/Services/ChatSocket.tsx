import { io } from "socket.io-client";
import axios from "axios";
const ENDPOINT = "http://localhost:8000";

//const ENDPOINT = "http://chat.flavioroso.com.br";

const socket = io(ENDPOINT);


socket.on("connect", (connection : any) =>{

    console.log("Connected with success");
})


socket.on('connect_error', function(){
  console.log('Connection Failed');
});

 function joinChatRoom (room : string){

    socket.emit("join_room",room);

}

 function sendMessage  (message : string, name : string, room : string ) : void {


    axios.post(ENDPOINT+'/sendmessage', {
        name: name,
        message: message,
        room: room
      })
     

} 


 function recieveMessage (callback : CallableFunction)   : void  {
     
    socket.on("newmessage", (data :any) => callback(data));
}


export default  {
    joinChatRoom,
    sendMessage,
    recieveMessage
}


