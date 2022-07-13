import logo from './logo.svg';
import name from './nick.png';

import './App.css';

function App() {
  return (
    <Dog></Dog>
  
  );
}

function Dog() {
  return (
    <div className="App">
      <header className="App-header">
        <img height={133} src={name} />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
