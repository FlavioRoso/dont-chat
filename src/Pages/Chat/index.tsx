import React, {useState,useContext,useEffect} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

import { 
  Container, 
  Messages, 
  Message, 
  MessageText, 
  Name,
  FormName,
  Center

} from './styles';

import ChatInput from '~/components/ChatInput';
import {ChatContext}  from '~/Context/ChatContext';
import ChatSocket  from '~/Services/ChatSocket';


interface MessageType{
  name : string;
  date: string;
  message : string;
}


function Chat({match}) {

  const [chatConfig,setChatConfig] = useContext(ChatContext);

  const [nameInput, setNameInput] = useState("");
  const [formName,setFormName] = useState(false);
  const [messages,setMessages] = useState([] as Array<MessageType>);

   useEffect(()=>{
    
    /*
    
    ChatSocket.joinChatRoom(match.params.room);
    ChatSocket.recieveMessage((data: any) => {

      console.log(data);
      
    })
    */
   if(!chatConfig.name)
   {
      setFormName(true);
   }
   else
   {
     ChatSocket.joinChatRoom(match.params.room);
     ChatSocket.recieveMessage((data: any) => {


        messages.push(data);
        setMessages([...messages]);
       
     })
   }
    
    
  },[chatConfig]);


 
  function addNameContext(){

    console.log(nameInput);
    setFormName(false);
    chatConfig.name = nameInput;
    chatConfig.room = match.params.room;
    setChatConfig({...chatConfig})

  }
  function formatTime(time){

    let data = new Date(time);
    let horas = data.getHours();
    let minutos = data.getMinutes();

    return horas + ":" + ('0' + minutos).slice(-2);

  }
  function handlerNewMesage(message: string)
  {
    ChatSocket.sendMessage(message,chatConfig.name,chatConfig.room);
      console.log(`sending to ${match.params.room} : `,message);
  }


  return(
      <>
      <FormName active={formName} onSubmit ={(e)=> {
              e.preventDefault();
              addNameContext();
            }}>
              <Center>
                  <p>Digite um nome para se <br /> conectar ao chat</p>
                  <div className="form-input">
                    <input type="text" onChange={(e) => setNameInput(e.target.value)} autoFocus={true} />
                    <button type="submit"><FontAwesomeIcon icon={faCaretRight} /> </button>
                  </div>
                </Center>
            </FormName> 
     
      <Container>
        
        <Messages >
          {
            messages.map((row,key) =>
            
                <Message key={key} className={row.name == chatConfig.name ? "sender" : "false"} date={() => formatTime(row.date)}>
                    <Name >{row.name}</Name>
                    <MessageText>{row.message}</MessageText>
                </Message>
            
            )
          }
          <ChatInput onSendMessage={(message) => handlerNewMesage(message)} />
        </Messages>
         
      </Container>
      </>
  );
}

export default Chat;