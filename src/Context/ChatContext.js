import react,{useState} from 'react';


const defaultSettings = {
    name : "",
    rooms : []
}




export const ChatContext = react.createContext();


export function ChatProvider ({children}) {



    const [chatContext,setChatContext] = useState(defaultSettings);

    return (
        <ChatContext.Provider value={[chatContext,setChatContext]} >
              {children}
        </ChatContext.Provider>
    )


}