import { useRef, useEffect } from "react";

const LAYERS = [
  { count: 150, speed: 0.05, sizeMin: 0.8, sizeMax: 1.4, opacityMin: 0.2, opacityMax: 0.5, parallax: 0.01 },
  { count: 100, speed: 0.12, sizeMin: 1.2, sizeMax: 2.2, opacityMin: 0.35, opacityMax: 0.7, parallax: 0.025 },
  { count: 55, speed: 0.22, sizeMin: 1.8, sizeMax: 3.2, opacityMin: 0.55, opacityMax: 0.9, parallax: 0.05 },
  { count: 24, speed: 0.38, sizeMin: 2.8, sizeMax: 4.5, opacityMin: 0.75, opacityMax: 1.0, parallax: 0.1 },
];

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function createStars(width, height) {
  const stars = [];
  for (const layer of LAYERS) {
    for (let i = 0; i < layer.count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: rand(layer.sizeMin, layer.sizeMax),
        baseOpacity: rand(layer.opacityMin, layer.opacityMax),
        speed: layer.speed,
        parallax: layer.parallax,
        // random drift direction
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        // twinkle phase offset
        twinkleOffset: Math.random() * Math.PI * 2,
        twinkleSpeed: rand(0.3, 1.2),
      });
    }
  }
  return stars;
}

export default function StarBackground() {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const smoothMouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const sizeRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // --- Resize handling ---
    function resize(w, h) {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = { w, h };
      starsRef.current = createStars(w, h);
    }

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          resize(width, height);
        }
      }
    });

    // Observe the canvas's parent (the viewport)
    ro.observe(document.documentElement);

    // Initial size
    resize(window.innerWidth, window.innerHeight);

    // --- Mouse tracking ---
    function onMouseMove(e) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    }
    window.addEventListener("mousemove", onMouseMove);

    // --- Animation loop ---
    let time = 0;
    const LERP = 0.05;
    const MAX_PARALLAX = 28;

    function animate() {
      time += 0.016; // ~60fps delta
      const { w, h } = sizeRef.current;
      if (w === 0 || h === 0) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      // Smooth mouse tracking
      smoothMouseRef.current.x += (mouseRef.current.x - smoothMouseRef.current.x) * LERP;
      smoothMouseRef.current.y += (mouseRef.current.y - smoothMouseRef.current.y) * LERP;

      // Mouse offset from center, normalized to [-1, 1]
      const mx = (smoothMouseRef.current.x - w / 2) / (w / 2);
      const my = (smoothMouseRef.current.y - h / 2) / (h / 2);

      // Clear with background color
      ctx.fillStyle = "#121212";
      ctx.fillRect(0, 0, w, h);

      // Draw stars
      const stars = starsRef.current;
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Drift
        s.x += s.dx * s.speed;
        s.y += s.dy * s.speed;

        // Wrap around edges
        if (s.x < -5) s.x = w + 5;
        if (s.x > w + 5) s.x = -5;
        if (s.y < -5) s.y = h + 5;
        if (s.y > h + 5) s.y = -5;

        // Parallax offset
        const px = mx * MAX_PARALLAX * s.parallax;
        const py = my * MAX_PARALLAX * s.parallax;

        // Twinkle
        const twinkle = Math.sin(time * s.twinkleSpeed + s.twinkleOffset);
        const opacity = s.baseOpacity * (0.75 + 0.35 * twinkle);

        // Draw
        const drawX = s.x + px;
        const drawY = s.y + py;

        const safeOpacity = Math.max(0, Math.min(1, opacity));

        ctx.beginPath();
        ctx.arc(drawX, drawY, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${safeOpacity})`;
        ctx.shadowColor = `rgba(255,255,255,${Math.min(0.9, safeOpacity)})`;
        ctx.shadowBlur = s.size * 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    // --- Cleanup ---
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
}
