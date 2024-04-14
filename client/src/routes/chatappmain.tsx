import React from 'react'; //, { useEffect, useState }
//import APIkeys from './APIkeys';
import { useNavigate } from 'react-router-dom';
//import ChatAppTextReader from './ChatAppTextReader';
import './stylesChatApp.css';
import "./styles.css";

const ChatAppFinal: React.FC = () =>{
    const navigate = useNavigate();

    function tothekeys(){
        navigate("/apikeys");
    }
    function tothedocs(){
        navigate("/apidocs");
    }
    return (
        <div className="form-container1">
            
            <button id="centeredd11" onClick={tothekeys}>API Keys</button>
            <button id="centeredd1" onClick={tothedocs}>API Documentation</button>
            
        </div>
    );
};
//<ChatAppTextBox/>
//<ChatAppTextReader/>

export default ChatAppFinal;