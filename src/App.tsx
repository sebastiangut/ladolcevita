import { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Menu from './components/Menu';
import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const handleSplashComplete = () => {
    setShowMenu(true);
  };

  return (
    <div className="App">
      {!showMenu ? (
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
