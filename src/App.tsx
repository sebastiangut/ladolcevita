import { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import SplashDebug from './components/SplashDebug';
import Menu from './components/Menu';
import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showDebug, setShowDebug] = useState(false);

  const handleSplashComplete = () => {
    setShowMenu(true);
  };

  return (
    <div className="App">
      {/* Debug toggle button */}
      <button 
        onClick={() => setShowDebug(!showDebug)}
        className="fixed top-4 right-4 z-50 bg-blue-500 text-white px-4 py-2 rounded text-sm"
      >
        {showDebug ? 'Hide Debug' : 'Show Debug'}
      </button>
      
      {showDebug ? (
        <SplashDebug />
      ) : !showMenu ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <div className="animate-menuReveal">
          <Menu />
        </div>
      )}
    </div>
  );
}

export default App;
