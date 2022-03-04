import { useState, useEffect } from 'react';

function getWindowDimensionRatio() {
  const windowRatio = window.width/window.height;
  return windowRatio;
}

export default function useWindowDimensions() {
  const [windowDimensionRatio, setWindowDimensionRatio] = useState(getWindowDimensionRatio());

  useEffect(() => {
    function handleResize() {
      setWindowDimensionRatio(getWindowDimensionRatio());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensionRatio;
}