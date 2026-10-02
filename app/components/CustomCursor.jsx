"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    setEnabled(media.matches);

    const move = (event) => setPosition({ x: event.clientX, y: event.clientY });
    const enter = (event) => {
      if (event.target.closest("a, button, [data-cursor]")) setActive(true);
    };
    const leave = () => setActive(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      className={`cursor-ring pointer-events-none fixed z-[120] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-150 md:block ${active ? "scale-150 border-[var(--accent)] bg-[var(--accent)]/10" : "border-[var(--foreground)]/40"}`}
      style={{ left: position.x, top: position.y }}
    />
  );
}