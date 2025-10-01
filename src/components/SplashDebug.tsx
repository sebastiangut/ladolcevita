import React from 'react';

const SplashDebug: React.FC = () => {
  const images = [
    '/images/splash/01-cine-removebg-preview.png',
    '/images/splash/02-mananca-removebg-preview.png',
    '/images/splash/03-bine-removebg-preview.png',
    '/images/splash/04-traieste-removebg-preview.png',
    '/images/splash/05-bine-removebg-preview.png',
    '/images/splash/07-ladolcevita-removebg-preview.png',
  ];

  const handleImageLoad = (src: string) => {
    console.log(`✅ Image loaded successfully: ${src}`);
  };

  const handleImageError = (src: string) => {
    console.error(`❌ Failed to load image: ${src}`);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Splash Screen Image Debug</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="border p-2">
            <p className="text-sm mb-2">{src}</p>
            <img
              src={src}
              alt={`Test ${index + 1}`}
              className="w-full h-32 object-contain border"
              onLoad={() => handleImageLoad(src)}
              onError={() => handleImageError(src)}
            />
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Check browser console for loading status of each image
      </p>
    </div>
  );
};

export default SplashDebug;