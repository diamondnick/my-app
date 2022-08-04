import logo from './logo.svg';
import './App.css';
import KeyResolver from 'key-did-resolver'
import { EthereumAuthProvider, SelfID } from '@self.id/web'




async function App() {


 
// The following assumes there is an injected `window.ethereum` provider
const addresses = await window.ethereum.request({
  method: 'eth_requestAccounts',
})

// The following configuration assumes your local node is connected to the Clay testnet
const self = await SelfID.authenticate({
  authProvider: new EthereumAuthProvider(window.ethereum, addresses[0]),
  ceramic: 'local',
  connectNetwork: 'testnet-clay',
})

  await self.set('basicProfile', { name: 'Alice' })

  return (
    <Dog></Dog>
  
  );
}

function Dog() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
