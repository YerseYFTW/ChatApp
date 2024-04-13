import React from 'react'; //, { useEffect, useState }
import './stylesChatApp.css';
import "./styles.css";

const ChatAppTextReader: React.FC = () =>{
    return (
        <div id='txtbox1'>
            <button id="btn_send">SEND</button>
            <button id='btn_dwnld'>Download Discussion</button>
            <button id="btn_upload">Upload Discussion</button>
        </div>
    );// sa genereze 
};

export default ChatAppTextReader;