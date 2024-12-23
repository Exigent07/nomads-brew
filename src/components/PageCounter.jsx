"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function PageCounter({
  currentPage = 0,
  totalPages = 0,
  className = "",
  numberClass = "text-xl font-bold",
  slashClass = "text-xl opacity-90",
  duration = 1,
}) {
  const counterRef = useRef(null);
  const currentNumberRef = useRef(null);

  useGSAP(() => {
    gsap.to(currentNumberRef.current, {
      innerText: currentPage - 1,
      duration: duration,
      snap: { innerText: 1 },
      ease: "power2.inOut",
    });
  }, [currentPage]);

  return (
    <div ref={counterRef} className={`fixed right-[5%] bottom-[5%] text-foreground mix-blend-difference font-logo flex items-end ${className}`}>
      <span ref={currentNumberRef} className={numberClass}>
        0
      </span>
      <span className={slashClass}>/</span>
      <span className={numberClass}>{totalPages - 1}</span>
    </div>
  );
}