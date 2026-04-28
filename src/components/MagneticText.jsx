"use client";

import { useEffect, useRef } from "react";

export default function MagneticText({ as: Tag = "p", className = "", children }) {
  const ref = useRef(null);

  useEffect(() => {
    const letters = ref.current.querySelectorAll("span");

    const handleMove = (e) => {
      letters.forEach((letter) => {
        const rect = letter.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);
        const max = 120;

        if (dist < max) {
          const force = (max - dist) / max;
          letter.style.transform = `translate(${dx * force * 0.12}px, ${dy * force * 0.12}px)`;
        } else {
          letter.style.transform = "translate(0,0)";
        }
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <Tag ref={ref} className={`magnetic ${className}`}>
      {children.split("").map((c, i) => (
        <span key={i}>{c === " " ? "\u00A0" : c}</span>
      ))}
    </Tag>
  );
}