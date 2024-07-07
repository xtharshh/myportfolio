import React, { useState, useEffect } from "react";
import tickSound from "./assets/typewrite.mp3";

const TypingEffect = () => {
  const [index, setIndex] = useState(0);
  const text = "Harsh Kumar";

  useEffect(() => {
    if (index < text.length) {
      setTimeout(() => {
        new Audio(tickSound).play();
        setIndex((prevIndex) => prevIndex + 1);
      }, 11); // The timeout should match the step interval of your typing effect
    }
  }, [index]);

  return (
    <div className="typing-effect" style={{ width: `${index}ch` }}>
      {text.slice(0, index)}
    </div>
  );
};

export default TypingEffect;
