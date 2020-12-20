import React, {useState,useEffect, EventHandler} from 'react';

import { Container, Input, Button } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function ChatInput( {onSendMessage} :any) {

  const [message,setMessage] = useState("");


  function submitMessage(e){

    e.preventDefault();
    console.log(message);
    onSendMessage(message)

    setMessage("");

  }

  
  return(
    <Container onSubmit={(e)=> submitMessage(e)}>
        <Input  onChange={(e: any) => setMessage(e.target.value)} value={message} />
        <Button type="submit" > <FontAwesomeIcon icon={faPaperPlane} /> </Button>
    </Container>
  );
}

export default ChatInput;