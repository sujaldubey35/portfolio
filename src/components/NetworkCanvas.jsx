import { useEffect, useRef } from "react";

export default function NetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Packet simulation
    const packets = [];
    const maxPackets = 18;
    const gridSize = 64;

    class Packet {
      constructor() {
        this.reset();
      }

      reset() {
        // Start on grid
        this.x = Math.floor((Math.random() * width) / gridSize) * gridSize;
        this.y = Math.floor((Math.random() * height) / gridSize) * gridSize;
        this.speed = Math.random() * 1.2 + 0.6;
        this.direction = Math.random() > 0.5 ? "h" : "v";
        this.sign = Math.random() > 0.5 ? 1 : -1;
        this.length = Math.floor(Math.random() * 20) + 15;
        this.life = Math.floor(Math.random() * 250) + 150;
        this.age = 0;
        this.color = Math.random() > 0.25 ? "#14b8a6" : "#2dd4bf";
      }

      update() {
        if (this.direction === "h") {
          this.x += this.speed * this.sign;
        } else {
          this.y += this.speed * this.sign;
        }

        this.age++;
        if (
          this.age > this.life ||
          this.x < 0 ||
          this.x > width ||
          this.y < 0 ||
          this.y > height
        ) {
          this.reset();
        }
      }

      draw(context) {
        const alpha = Math.sin((this.age / this.life) * Math.PI) * 0.45;
        if (alpha <= 0) return;

        context.beginPath();
        if (this.direction === "h") {
          context.moveTo(this.x - this.length * this.sign, this.y);
          context.lineTo(this.x, this.y);
        } else {
          context.moveTo(this.x, this.y - this.length * this.sign);
          context.lineTo(this.x, this.y);
        }

        context.strokeStyle = `rgba(20, 184, 166, ${alpha})`;
        context.lineWidth = 1;
        context.stroke();

        // Glowing packet head
        context.fillStyle = `rgba(45, 212, 191, ${alpha * 1.5})`;
        context.fillRect(this.x - 1, this.y - 1, 2, 2);
      }
    }

    for (let i = 0; i < maxPackets; i++) {
      packets.push(new Packet());
    }

    // Grid dots cache
    const drawGrid = () => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.02)";
      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          ctx.fillRect(x, y, 1, 1);
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint coordinate dots
      drawGrid();

      // Update & draw packets
      for (let i = 0; i < packets.length; i++) {
        packets[i].update();
        packets[i].draw(ctx);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
}
