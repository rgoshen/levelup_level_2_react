import { useState } from 'react';
import './App.css';

// components
import BasicToggleButton from './components/toggle/BasicToggleButton';

function App() {
  return (
    <div className='App'>
      <div className='toggle'>
        <BasicToggleButton>
          <h1>Hello World!!!</h1>
        </BasicToggleButton>
      </div>
    </div>
  );
}

export default App;
