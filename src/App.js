import React from 'react';
import { ChatProvider } from '~/Context/ChatContext';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './Pages/Home';
import Chat from './Pages/Chat';

import './css/styles.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ChatProvider>
      
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/:room" exact component={Chat} />
          </Switch>

        </ChatProvider>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
