import React, { useEffect, useRef } from 'react';

const OptimizedCursorGlow = ({ className = "" }) => {
  const glowRef = useRef(null);
  
  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth interpolation
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;

      glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate3d(-50%, -50%, 0)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div 
      ref={glowRef}
      className={`fixed top-0 left-0 w-[400px] h-[400px] bg-primary/15 rounded-full pointer-events-none z-[999] mix-blend-screen blur-[80px] opacity-100 will-change-transform ${className}`}
    />
  );
};

export default React.memo(OptimizedCursorGlow);
