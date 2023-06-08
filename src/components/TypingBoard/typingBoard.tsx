import React, { useEffect, useState } from "react";
import './typingBoard.css';

const TypingBoard = ({ text, flickering, timeMs=100 }: { text: string,  flickering?: boolean, timeMs?: number  }) => {

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let tempDisplay = '';
    const typingInterval = setInterval(() => {
      if (tempDisplay.length < text.length) {
        tempDisplay += text[tempDisplay.length];
        setDisplayText(tempDisplay);
      } else {
        clearInterval(typingInterval);
      }
    }, timeMs);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text]);

  return <span className={ flickering ? 'flickering' : ''}>{displayText}</span>; 
};

export default TypingBoard;
