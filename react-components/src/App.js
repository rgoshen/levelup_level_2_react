import './App.css';

// components
import BasicToggle from './components/toggle/BasicToggle';

function App() {
  return (
    <div className='App'>
      <div className='toggle'>
        <BasicToggle>
          {({ isToggled, onToggle }) => (
            <div>
              {isToggled && <p>Show me</p>}
              <button onClick={onToggle}>Show / Hide</button>
            </div>
          )}
        </BasicToggle>
      </div>
    </div>
  );
}

export default App;
