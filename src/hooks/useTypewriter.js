import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 50, startDelay = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout;
    
    // Reset
    setDisplayText('');
    setIsComplete(false);
    
    const startTyping = () => {
      setIsTyping(true);
      let i = 0;
      
      const typeChar = () => {
        if (i < text.length) {
          setDisplayText(text.substring(0, i + 1));
          i++;
          timeout = setTimeout(typeChar, speed);
        } else {
          setIsTyping(false);
          setIsComplete(true);
        }
      };
      
      typeChar();
    };

    timeout = setTimeout(startTyping, startDelay);

    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayText, isTyping, isComplete };
};

export default useTypewriter;
