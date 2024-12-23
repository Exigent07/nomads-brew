"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "@/utils/SplitText";
import LogoIcon from "../../public/logo.svg";
import { useRouter } from "next/navigation";

export default function Logo({
  text = "Exigent",
  loading = false,
  animation = { 
    rotate: "360deg",
    repeat: -1,
    duration: 2,
    ease: "power4.inOut" 
  },
  hoverAnimation = {
    fill: "var(--accent)",
    duration: 1,
    ease: "power2.out",
  },
  smallTextClass = "text-xs",
  mediumTextClass = "md:text-lg",
  largeTextClass = "lg:text-4xl",
  smallIconClass = "h-4 w-4",
  mediumIconClass = "md:h-8 md:w-8",
  largeIconClass = "lg:h-12 lg:w-12",
  letterSpacing = "0.5px",
  style = {},
  className = "",
  iconSizeClass = "h-6 w-6",
}) {
  const iconRef = useRef(null);
  const router = useRouter();

  useGSAP(() => {
    if (loading) {
      gsap.to(iconRef.current, {
        ...animation
      });
    }
  }, [loading, animation]);

  const handleMouseEnter = () => {
    if (!loading) {
      gsap.to(iconRef.current.querySelector("svg"), {
        fill: hoverAnimation.fill,
        duration: hoverAnimation.duration,
        ease: hoverAnimation.ease,
      });
    }
  };

  const handleMouseLeave = () => {
    if (!loading) {
      gsap.to(iconRef.current.querySelector("svg"), {
        fill: "#CCCCCC",
        duration: hoverAnimation.duration,
        ease: hoverAnimation.ease,
      });
    }  
  };

  return (
    <div
      id="logo"
      className={`flex items-center justify-center font-logo select-none ${className} ${loading ? 'cursor-wait' : 'cursor-pointer'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => router.push("/")}
      style={{
        letterSpacing,
        ...style,
      }}
    >
      <SplitText
        text={text.charAt(0) || "N"}
        smallClass={smallTextClass}
        mediumClass={mediumTextClass}
        largeClass={largeTextClass}
        wrapperClass="flex items-center"
      />

      <div
        className={`flex items-center justify-center mx-2 mt-2 ${iconSizeClass} ${smallIconClass} ${mediumIconClass} ${largeIconClass}`}
        ref={iconRef}
      >
        <LogoIcon id="logoIcon" className="fill-foreground scale-[1.75]" />
      </div>

      <SplitText
        text={text.slice(1) || "mads Brew"}
        smallClass={smallTextClass}
        mediumClass={mediumTextClass}
        largeClass={largeTextClass}
        wrapperClass="flex items-center"
      />
    </div>
  );
}
