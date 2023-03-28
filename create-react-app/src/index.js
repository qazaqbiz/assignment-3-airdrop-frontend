import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { ethers } from 'ethers';

async function connectWeb3() {
  if (window.ethereum) {
    try {
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log('Connected to Web3:', await signer.getAddress());
    } catch (error) {
      console.error('Failed to connect to Web3:', error);
    }
  } else {
    console.error('No Web3 provider found');
  }
}

connectWeb3();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
