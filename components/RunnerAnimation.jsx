"use client";  // Required for client-side interactivity

import { useRef, useEffect, useState } from 'react';

export default function RunnerAnimation() {
  const canvasRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef(null);
  const positionX = useRef(50);
  const phase = useRef(0);

  const drawRunner = (x, phaseValue) => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // Body
    ctx.beginPath();
    ctx.moveTo(x, 80);
    ctx.lineTo(x, 120);
    
    // Head
    ctx.arc(x, 70, 10, 0, Math.PI * 2);
    
    // Arms
    ctx.moveTo(x - 10, 90);
    ctx.lineTo(x + 10 + 10 * Math.sin(phaseValue), 90);
    
    // Legs
    ctx.moveTo(x, 120);
    ctx.lineTo(x - 15 - 10 * Math.sin(phaseValue), 150);
    ctx.moveTo(x, 120);
    ctx.lineTo(x + 15 + 10 * Math.sin(phaseValue), 150);
    
    ctx.stroke();
  };

  const animate = () => {
    if (!isAnimating) return;

    positionX.current = (positionX.current + 3) % (canvasRef.current.width + 50);
    phase.current += 0.25;
    
    drawRunner(positionX.current, phase.current);
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isAnimating) {
      animationRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isAnimating]);

  return (
    <div className="flex flex-col items-center gap-4">
      <canvas 
        ref={canvasRef} 
        width={600} 
        height={200} 
        className="border border-gray-200 rounded-lg"
      />
      <button
        onClick={() => setIsAnimating(!isAnimating)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        {isAnimating ? 'Stop' : 'Start'} Animation
      </button>
    </div>
  );
}