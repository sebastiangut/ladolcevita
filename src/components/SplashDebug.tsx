import React from 'react';

// Import images directly from assets
import cineImage from '../assets/splash/01-cine-removebg-preview.png';
import manancaImage from '../assets/splash/02-mananca-removebg-preview.png';
import bine1Image from '../assets/splash/03-bine-removebg-preview.png';
import traiesteImage from '../assets/splash/04-traieste-removebg-preview.png';
import bine2Image from '../assets/splash/05-bine-removebg-preview.png';
import logoImage from '../assets/splash/07-ladolcevita-removebg-preview.png';

const SplashDebug: React.FC = () => {
  // Test both approaches
  const publicImages = [
    { src: '/images/splash/01-cine-removebg-preview.png', name: 'CINE (public)' },
    { src: '/images/splash/02-mananca-removebg-preview.png', name: 'MĂNÂNCĂ (public)' },
    { src: '/images/splash/03-bine-removebg-preview.png', name: 'BINE-1 (public)' },
    { src: '/images/splash/04-traieste-removebg-preview.png', name: 'TRĂIEȘTE (public)' },
    { src: '/images/splash/05-bine-removebg-preview.png', name: 'BINE-2 (public)' },
    { src: '/images/splash/07-ladolcevita-removebg-preview.png', name: 'LOGO (public)' },
  ];
  
  const importedImages = [
    { src: cineImage, name: 'CINE (imported)' },
    { src: manancaImage, name: 'MĂNÂNCĂ (imported)' },
    { src: bine1Image, name: 'BINE-1 (imported)' },
    { src: traiesteImage, name: 'TRĂIEȘTE (imported)' },
    { src: bine2Image, name: 'BINE-2 (imported)' },
    { src: logoImage, name: 'LOGO (imported)' },
  ];
  
  const allImages = [...publicImages, ...importedImages];

  const handleImageLoad = (name: string, src: string) => {
    console.log(`✅ Image loaded successfully: ${name} from ${src}`);
  };

  const handleImageError = (name: string, src: string) => {
    console.error(`❌ Failed to load image: ${name} from ${src}`);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Splash Screen Image Debug</h2>
      <p className="mb-4 text-sm text-gray-600">
        Testing both public paths and imported images. Check console for results.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {allImages.map((image, index) => (
          <div key={index} className="border p-2">
            <p className="text-xs mb-2 font-semibold">{image.name}</p>
            <p className="text-xs mb-2 text-gray-500 break-all">{image.src}</p>
            <img
              src={image.src}
              alt={image.name}
              className="w-full h-24 object-contain border"
              onLoad={() => handleImageLoad(image.name, image.src)}
              onError={() => handleImageError(image.name, image.src)}
            />
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Imported images should work reliably. If public path images fail but imported ones work, we'll use the imported approach.
      </p>
    </div>
  );
};

export default SplashDebug;