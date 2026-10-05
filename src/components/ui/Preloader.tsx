"use client";
import { useEffect } from "react";

export function ScrollLock() {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;
    const originalWidth = document.body.style.width;
    const scrollY = window.scrollY;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${scrollY}px`;

    const preventTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    document.addEventListener("touchmove", preventTouchMove, { passive: false });

    return () => {
      document.body.style.overflow = originalOverflow || "";
      document.body.style.position = originalPosition || "";
      document.body.style.width = originalWidth || "";
      document.body.style.top = "";
      window.scrollTo(0, scrollY);
      document.removeEventListener("touchmove", preventTouchMove);
    };
  }, []);

  return null;
}