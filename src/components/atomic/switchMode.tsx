import { useState, useEffect } from 'react';

const SwitchMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  return (
    <div
      className="relative w-16 h-6 my-1 mx-auto"
      onClick={toggleMode}
    >
      <button
        className={`w-8 h-8 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 transition-all duration-200 ${
          isDarkMode ? 'right-0 bg-[url("/src/assets/svg/sunIcon.svg")]' : 'left-0 bg-[url("/src/assets/svg/moonIcon.svg")] z-10'
        }`}
        style={{
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
          animation: isDarkMode ? 'slide-in 0.2s forwards' : 'slide-back 0.2s',
        }}
      ></button>
      <span className="block w-16 h-6 bg-[#ffffff0d] dark:bg-[#00000005] border border-solid border-[#ffffff80] dark:border-[#00000080] backdrop-blur-sm rounded-full"></span>
    </div> 
  );
};

export default SwitchMode;
