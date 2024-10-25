import './App.css';
import Timer from './Timer.jsx';
import { useState, useEffect } from 'react';




function App() {
  const [typedText, setTypedText] = useState(''); // Holds the typed text
  const hiddenWord = 'davit'; // The hidden word

  // Effect to handle keypresses
  useEffect(() => {
    const handleKeyPress = (event) => {
      setTypedText((prevText) => prevText + event.key);
    };

    // Add event listener for keypress
    window.addEventListener('keypress', handleKeyPress);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  // Check if the typed text contains the hidden word
  const displayText = typedText.includes(hiddenWord) ? hiddenWord : '';

  return (
    <div className="App">
      <h1>Hidden Word</h1>

      {/* Timer component */}
      <Timer />

      {/* Hidden word display */}
      <div className="hidden-word">
        {displayText && <p>You found the hidden word: {displayText}</p>}
      </div>
    </div>
  );
}

export default App;
