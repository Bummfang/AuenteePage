// BackgroundSlider.js
import { useState, useEffect } from 'react';


const images = [
  'url(/images/startsite/StartseiteZwei.webp)',
];

const BackgroundSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Alle 5 Sekunden wechseln

    return () => clearInterval(intervalId); // Aufräumen
  }, []);

  return (
    <div
      className="h-screen bg-cover bg-center transition-all duration-500 ease-in-out"
      style={{ backgroundImage: images[currentImage] }}
    >
      <div
  className="h-screen bg-cover bg-center transition-all duration-500 ease-in-out relative"
  style={{ backgroundImage: images[currentImage] }}
>
  {/* Verlauf */}
  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white-contentWhite via-transparent to-transparent"></div>
</div>

    </div>

  )
};

export default BackgroundSlider;
