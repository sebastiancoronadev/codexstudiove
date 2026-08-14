import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function MouseLight() {
  const [color, setColor] = useState({ primary: '255, 0, 127', secondary: '255, 0, 0', opacity: 1 });

  const cursorX = useSpring(0, { stiffness: 300, damping: 25 });
  const cursorY = useSpring(0, { stiffness: 300, damping: 25 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX - 400); // 400 is half of width 800
      cursorY.set(e.clientY - 400); // 400 is half of height 800

      // Check section under mouse
      const element = document.elementFromPoint(e.clientX, e.clientY);
      const section = element?.closest('section');
      const footer = element?.closest('footer');
      
      if (footer) {
        setColor(prev => ({ ...prev, opacity: 0 }));
      } else if (section && section.id) {
        if (section.id === 'discord') {
          setColor({ primary: '88, 101, 242', secondary: '71, 82, 196', opacity: 1 }); // #5865F2 Discord
        } else if (section.id === 'minecraft') {
          setColor({ primary: '76, 175, 80', secondary: '69, 160, 73', opacity: 1 }); // #4CAF50 Minecraft
        } else if (section.id === 'video') {
          setColor({ primary: '255, 0, 0', secondary: '255, 0, 0', opacity: 1 }); // Video
        } else if (section.id === 'services') {
          setColor({ primary: '255, 0, 127', secondary: '255, 107, 0', opacity: 1 }); // Services
        } else {
          setColor({ primary: '255, 0, 127', secondary: '255, 0, 0', opacity: 1 }); // Default Hero/CTA
        }
      } else {
        setColor({ primary: '255, 0, 127', secondary: '255, 0, 0', opacity: 1 });
      }
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        pointerEvents: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: 800,
        height: 800,
        background: `radial-gradient(circle, rgba(${color.primary}, 0.12) 0%, rgba(${color.secondary}, 0.05) 30%, transparent 60%)`,
        opacity: color.opacity,
        zIndex: 0,
        mixBlendMode: 'screen',
        transition: 'background 0.8s ease-in-out, opacity 0.8s ease-in-out'
      }}
    />
  );
}
