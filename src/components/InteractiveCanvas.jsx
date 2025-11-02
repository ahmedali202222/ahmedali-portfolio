import React, { useRef, useEffect } from 'react';

// Lightweight interactive particle playground for the hero
// - Follows cursor with a trail
// - Click to burst
// - Respects prefers-reduced-motion
export default function InteractiveCanvas() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null, down: false });
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      spawn(3); // gentle trail
    };

    const onDown = () => {
      mouseRef.current.down = true;
      burst(20);
    };
    const onUp = () => (mouseRef.current.down = false);

    // Listen on window so it works even if canvas has pointer-events: none
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('resize', onResize);

    function spawn(count = 1) {
      if (prefersReduced) return;
      const { x, y } = mouseRef.current;
      if (x == null || y == null) return;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.2 + 0.4;
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          size: Math.random() * 2 + 1.2,
          hue: 185 + Math.random() * 30, // cyan/teal range
        });
      }
    }

    function burst(n) {
      if (prefersReduced) return;
      const { x, y } = mouseRef.current;
      if (x == null || y == null) return;
      for (let i = 0; i < n; i++) {
        const angle = (i / n) * Math.PI * 2;
        const speed = 2 + Math.random() * 1.5;
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          size: Math.random() * 2 + 1.5,
          hue: 185 + Math.random() * 30,
        });
      }
    }

    function step() {
      ctx.clearRect(0, 0, width, height);
      // slight vignette for depth
      const grd = ctx.createRadialGradient(width/2, height/2, Math.min(width,height)/3, width/2, height/2, Math.min(width,height)/1.2);
      grd.addColorStop(0, 'rgba(255,255,255,0.00)');
      grd.addColorStop(1, 'rgba(0,0,0,0.10)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, width, height);

      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.02; // gravity
        p.life -= 0.015; // fade out
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 85%, 60%, ${Math.max(p.life, 0)})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      // connect close particles for a subtle web effect
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const a = particlesRef.current[i];
          const b = particlesRef.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 1000) {
            ctx.strokeStyle = `hsla(185, 85%, 60%, ${0.08 * (1 - d2 / 1000)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      // prune
      particlesRef.current = particlesRef.current.filter((p) => p.life > 0 && p.y < height + 20 && p.x > -20 && p.x < width + 20);

      animRef.current = requestAnimationFrame(step);
    }

    animRef.current = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="interactive-canvas"
      aria-hidden="true"
    />
  );
}


