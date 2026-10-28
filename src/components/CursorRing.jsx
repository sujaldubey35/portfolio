import { useEffect, useState } from "react";

export default function CursorRing() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest(".interactive") ||
        target.closest('[role="button"]')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer trailing ring */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full transition-transform duration-150 ease-out will-change-transform"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${
            isHovered ? 1.6 : 1
          })`,
          width: "32px",
          height: "32px",
          border: isHovered
            ? "1.5px solid rgba(20, 184, 166, 0.9)"
            : "1px solid rgba(20, 184, 166, 0.4)",
          backgroundColor: isHovered
            ? "rgba(20, 184, 166, 0.12)"
            : "transparent",
          boxShadow: isHovered
            ? "0 0 15px rgba(20, 184, 166, 0.3)"
            : "none",
        }}
        aria-hidden="true"
      />
      {/* Center pinpoint */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full transition-transform duration-75 ease-out will-change-transform"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          width: "4px",
          height: "4px",
          backgroundColor: "#14b8a6",
          boxShadow: "0 0 6px rgba(20, 184, 166, 0.9)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
