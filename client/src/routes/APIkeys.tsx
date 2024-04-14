import { useState } from 'react';
import './stylesChatApp.css';
import './styles.css';

const APIkeys = () => {
  const [apiKey, setApiKey] = useState(''); // State to hold the generated API key

  function generateRandomToken(length = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let token = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      token += characters.charAt(randomIndex);
    }
    
    return token;
  }

  const callRandomToken = () => {
    const token = generateRandomToken();
    setApiKey(token); // Update state with the generated API key
  };

  return (
    <div className='form-container1'>
      <button id="centeredd1" onClick={callRandomToken}>Generate new API Key</button>
      <p>{apiKey ? 'New API Key: '+apiKey : 'No Key was generated'}</p> {/* Display the generated API key here */}
    </div>
  );
};

export default APIkeys;
