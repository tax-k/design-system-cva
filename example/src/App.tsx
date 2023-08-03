import logo from './logo.svg';

import { Components as Tui } from 'design-system-cva';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Tui.Button />
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;