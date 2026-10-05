"use client";
import { useState, useEffect, useRef } from "react";

export function useTypewriter(
  text: string,
  speed: number = 80,
  startDelay: number = 800,
  onComplete?: () => void
) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let i = 0;
    let intervalId: ReturnType<typeof setInterval>;

    const startTimeout = setTimeout(() => {
      intervalId = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(intervalId);
          setIsComplete(true);
          if (onCompleteRef.current) {
            setTimeout(() => onCompleteRef.current?.(), 600);
          }
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startTimeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayText, isComplete };
}