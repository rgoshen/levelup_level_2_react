import './App.css';

// components
import BasicToggle from './components/toggle/BasicToggle';
import ReactPortal from './components/portal/ReactPortal';

function App() {
  return (
    <div className='App'>
      <div className='toggle'>
        <BasicToggle>
          {({ isToggled, onToggle }) => (
            <>
              {isToggled && <p>Show me</p>}
              <button onClick={onToggle}>Show / Hide</button>
              {isToggled && (
                <ReactPortal>Hello, I am in the Portal</ReactPortal>
              )}
            </>
          )}
        </BasicToggle>
      </div>
    </div>
  );
}

export default App;
