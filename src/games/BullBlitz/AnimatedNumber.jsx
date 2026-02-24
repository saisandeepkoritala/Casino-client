import { useState,useEffect } from "react";

function AnimatedNumber({ value }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    let startValue = displayValue;
    const endValue = value;
    
    // If the jump is huge, we move faster; if small, we move slower
    const duration = 1000; // 1 second animation
    const frameRate = 30;
    const totalFrames = (duration / 1000) * frameRate;
    const increment = (endValue - startValue) / totalFrames;

    if (startValue === endValue) return;

    let currentFrame = 0;
    const timer = setInterval(() => {
      currentFrame++;
      startValue += increment;
      
      if (currentFrame >= totalFrames) {
        setDisplayValue(endValue);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(startValue));
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, [value]);

  return <span>${displayValue.toLocaleString()}</span>;
}

export default AnimatedNumber;