import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; // Импортируем useState для хранения состояния компонента
import { claimAirdrop } from './Airdrop';

function App() {
  const [address, setAddress] = useState('');

  async function handleClaim() {
    const result = await claimAirdrop(address);
    alert(result);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Enter your Ethereum address to claim the airdrop:
        </p>
        <input type="text" value={address} onChange={event => setAddress(event.target.value)} />
        <button onClick={handleClaim}>Claim Airdrop</button>
      </header>
    </div>
  );
}

export default App;
