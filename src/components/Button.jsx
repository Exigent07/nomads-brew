"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import SplitText from "@/utils/SplitText";

export default function Button({
  className = "",
  text = "Button",
  type = "",
  textClass = "",
  backgroundColor = "#000",
  textColor = "#fff",
  duration = 0.5,
  staggerDelay = 0.05,
}) {
  const buttonRef = useRef(null);
  const overlayRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.set(overlayRef.current, {
        scaleY: 0,
        transformOrigin: "top",
      });
    }, buttonRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    const ctx = gsap.context(() => {
      gsap.to(overlayRef.current, {
        scaleY: 1,
        duration: duration,
        ease: "power2.inOut",
      });

      gsap.to(".split-text-char", {
        color: textColor,
        fontFamily: "Playfair Display",
        duration: duration * 0.8,
        stagger: staggerDelay,
        ease: "power2.out",
      });
    }, buttonRef);

    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    const ctx = gsap.context(() => {
      gsap.to(overlayRef.current, {
        scaleY: 0,
        duration: duration,
        ease: "power2.inOut",
      });

      gsap.to(".split-text-char", {
        color: backgroundColor,
        fontFamily: "Lato",
        duration: duration * 0.8,
        stagger: staggerDelay,
        ease: "power2.out",
      });
    }, buttonRef);

    setIsHovered(false);
  };

  return (
    <button
      ref={buttonRef}
      type={type}
      className={`relative overflow-hidden border-2 border-black min-w-[300px] py-2 [clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%)] ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={overlayRef}
        className="absolute inset-0 w-full h-full"
        style={{ backgroundColor }}
      />

      <div className="relative">
        <SplitText
          text={text}
          wrapperClass={textClass}
          charStyle={{
            color: isHovered ? textColor : backgroundColor,
            transition: `color ${duration}s ease`,
          }}
        />
      </div>
    </button>
  );
}