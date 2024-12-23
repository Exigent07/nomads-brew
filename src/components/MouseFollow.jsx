"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function MouseFollow({
    className = "",
    offset = {
      x: 25,
      y: 25,
    }
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseRef = useRef(null);


  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const animateMouse = () => {
    if (mouseRef.current) {
      gsap.to(mouseRef.current, {
        x: mousePosition.x - offset.x,
        y: mousePosition.y - offset.y,
        duration: 0.1,
        ease: "power2.out",
      });
    }
  };

  const updateMousePosition = () => {
    window.addEventListener("mousemove", handleMouseMove);
  };

  useGSAP(() => {
    updateMousePosition();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  animateMouse();

  return (
    <div
      ref={mouseRef}
      className={`fixed mix-blend-difference flex justify-center items-center bg-foreground rounded-full w-12 h-12 opacity-90 pointer-events-none z-[99] ${className}`}
    >
        <div className="w-3/4 h-3/4 border-2 border-background rounded-full"></div>
    </div>
  );
}
