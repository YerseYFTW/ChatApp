import React from 'react'; //, { useEffect, useState }
import './stylesChatApp.css';
import "./styles.css";

const APIdocs: React.FC = () =>{
    return (
        <div className='form-container12'>
            <pre style={{fontSize:'20px'}}><b>Official Documentation</b></pre><br/>

            <pre> API call template:<br/>
<b>https://cfcc.chickenkiller.com:5000/predict?coin={'[CRYPTO_CURRENCY_COIN]'}&time={'[TIME_FOR_PREDICTION]'}`</b><br/><br/>
            
            <br/>API Inputs from Front-End are the following:<br/>
• Coin - the crypto currency selected from the dropdown;<br/>
• Timestamp - the time, in miliseconds, for which you get the prediction.<br/><br/><br/>

Then, the API calls the "Extractor" script,<br/>
that will extract the price history of a<br/>
coin in a given time span, delimited by<br/>
train start and train end. This price history<br/>
is extracted through Coincap API, a free api.<br/><br/><br/>

After that, the price history and the timestamp<br/>
will be given to the AI to calculate a price<br/>
prediction for the given timestamp, along with<br/>
a specific accuracy.<br/><br/><br/>

These values are given back to the API and put<br/>
under 2 fields that basically call function and<br/>
make all this cycle possible.<br/><br/><br/>

Finally, the API gives the result back to the<br/>
Front-End, as a response to its request.</pre>

        </div>
    );// sa genereze 
};

export default APIdocs;