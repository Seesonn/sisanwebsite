import React, { useEffect, useRef } from 'react';

const Snowfall = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const snowflakes = [];

    const createSnowflake = () => ({
      x: Math.random() * canvas.width,
      y: 0,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.5,
      opacity: Math.random() * 0.5 + 0.3,
    });

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initSnowflakes = () => {
      const flakeCount = Math.floor(canvas.width / 10);
      for (let i = 0; i < flakeCount; i++) {
        snowflakes.push(createSnowflake());
      }
    };

    const drawSnowflakes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#ffffff';
      snowflakes.forEach((flake) => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.globalAlpha = flake.opacity;
        ctx.fill();
      });
    };

    const updateSnowflakes = () => {
      snowflakes.forEach((flake) => {
        flake.y += flake.speed;
        if (flake.y > canvas.height) {
          Object.assign(flake, createSnowflake());
        }
      });
    };

    const animate = () => {
      drawSnowflakes();
      updateSnowflakes();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initSnowflakes();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      snowflakes.length = 0;
      initSnowflakes();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" />;
};

export default Snowfall;


