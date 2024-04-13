import React from 'react'; //, { useEffect, useState }
import ChatAppTextBox from './ChatAppTextBox';
import ChatAppTextReader from './ChatAppTextReader';
import './stylesChatApp.css';
import "./styles.css";

const ChatAppFinal: React.FC = () =>{
    return (
        <div>
            
            <ChatAppTextBox/>
            <ChatAppTextReader/>
            
        </div>
    );
};

export default ChatAppFinal;