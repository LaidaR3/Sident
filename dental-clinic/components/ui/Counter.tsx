"use client";

import { useEffect, useState } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
}

export default function Counter({ end, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    const duration = 1200;
    const startTime = performance.now();
    

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * end);

      setCount(value);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}