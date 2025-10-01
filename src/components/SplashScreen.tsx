import { useState, useEffect, useRef } from 'react';

// Import images directly from assets
import cineImage from '../assets/splash/01-cine-removebg-preview.png';
import manancaImage from '../assets/splash/02-mananca-removebg-preview.png';
import bine1Image from '../assets/splash/03-bine-removebg-preview.png';
import traiesteImage from '../assets/splash/04-traieste-removebg-preview.png';
import bine2Image from '../assets/splash/05-bine-removebg-preview.png';
import logoImage from '../assets/splash/07-ladolcevita-removebg-preview.png';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showCine, setShowCine] = useState(false);
  const [showMananca, setShowMananca] = useState(false);
  const [showBine1, setShowBine1] = useState(false);
  const [showTraieste, setShowTraieste] = useState(false);
  const [showBine2, setShowBine2] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    const addTimer = (callback: () => void, delay: number) => {
      const timer = setTimeout(callback, delay);
      timersRef.current.push(timer);
      return timer;
    };

    // Phase 1: CINE MĂNÂNCĂ BINE (2 seconds total)
    addTimer(() => setShowCine(true), 200);
    addTimer(() => setShowMananca(true), 800);
    addTimer(() => setShowBine1(true), 1400);
    
    // Phase 2: TRĂIEȘTE BINE (1.5 seconds, starts at 2s)
    addTimer(() => {
      setCurrentPhase(1);
      setShowTraieste(true);
    }, 2000);
    addTimer(() => setShowBine2(true), 2750);
    
    // Phase 3: La Dolce Vita (2 seconds, starts at 3.5s)
    addTimer(() => {
      setCurrentPhase(2);
      setShowLogo(true);
    }, 3500);
    
    // Complete animation (total 5.5s)
    addTimer(onComplete, 5500);

    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, [onComplete]);

  const createStarfield = () => {
    const stars = [];
    for (let i = 0; i < 60; i++) {
      const size = Math.random() > 0.7 ? 'w-1 h-1' : 'w-0.5 h-0.5';
      const delay = Math.random() * 5;
      stars.push(
        <div
          key={i}
          className={`absolute ${size} bg-gray-300 rounded-full animate-starTwinkle`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.1,
            animationDelay: `${delay}s`
          }}
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle starfield background for white background */}
      <div className="absolute inset-0 opacity-40">
        {createStarfield()}
      </div>
      
      {/* Main content container with max-width for desktop */}
      <div className="relative z-10 w-full max-w-[600px] px-4">
        {/* Phase 1: CINE MĂNÂNCĂ BINE */}
        {currentPhase === 0 && (
          <div className="flex flex-col items-center justify-center space-y-8 min-h-[60vh]">
            <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-6 md:space-y-0 justify-center w-full">
              {showCine && (
                <img 
                  src={cineImage} 
                  alt="CINE"
                  className="animate-fadeInSmooth h-24 md:h-32 object-contain"
                />
              )}
              {showMananca && (
                <img 
                  src={manancaImage} 
                  alt="MĂNÂNCĂ"
                  className="animate-fadeInSmooth h-24 md:h-32 object-contain"
                />
              )}
              {showBine1 && (
                <img 
                  src={bine1Image} 
                  alt="BINE"
                  className="animate-fadeInSmooth h-24 md:h-32 object-contain"
                />
              )}
            </div>
          </div>
        )}
        
        {/* Phase 2: TRĂIEȘTE BINE */}
        {currentPhase === 1 && (
          <div className="flex flex-col items-center justify-center space-y-8 min-h-[60vh]">
            <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-6 md:space-y-0 justify-center w-full">
              {showTraieste && (
                <img 
                  src={traiesteImage} 
                  alt="TRĂIEȘTE"
                  className="animate-fadeInSmooth h-24 md:h-32 object-contain"
                />
              )}
              {showBine2 && (
                <img 
                  src={bine2Image} 
                  alt="BINE"
                  className="animate-fadeInSmooth h-24 md:h-32 object-contain"
                />
              )}
            </div>
          </div>
        )}
        
        {/* Phase 3: La Dolce Vita Logo - 30% smaller */}
        {currentPhase === 2 && (
          <div className="flex items-center justify-center min-h-[60vh]">
            {showLogo && (
              <img 
                src={logoImage} 
                alt="La Dolce Vita"
                className="animate-logoRevealSmooth h-28 md:h-32 object-contain"
                style={{ willChange: 'transform, opacity' }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;
