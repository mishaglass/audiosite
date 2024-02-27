import { useState, useEffect } from 'react';

const useScreenwidth = () => {
  // had to use hooks to control the render of the header element
  const [screenWidth, setScreenWidth] = useState(window.screen.availWidth);

  useEffect(() => {
    const handledocumentResize = () => setScreenWidth(window.screen.availWidth);
    window.addEventListener('resize', handledocumentResize);
    return () => document.removeEventListener('resize', handledocumentResize);
  }, []);

  return screenWidth;
};

export default useScreenwidth;
