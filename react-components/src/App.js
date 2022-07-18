import './App.css';

// components
import BasicToggle from './components/toggle/BasicToggle';

function App() {
  return (
    <div className='App'>
      <BasicToggle>
        {({ isToggled, onToggle }) => (
          <>
            {isToggled && <p>Show me</p>}
            <button onClick={onToggle}>Show / Hide</button>
          </>
        )}
      </BasicToggle>
    </div>
  );
}

export default App;
