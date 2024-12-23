"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "@/utils/SplitText";
import MugIcon from "../../public/mug.svg";
import Logo from "./Logo";

export default function Nav({
  style = {},
  className = "",
  smallIconClass = "h-4 w-4",
  mediumIconClass = "md:h-8 md:w-8",
  largeIconClass = "lg:h-12 lg:w-12",
  iconSizeClass = "h-6 w-6",
}) {
  const iconRef = useRef(null);

  useGSAP(() => {}, []);

  return (
    <nav
      id="nav"
      className={`flex w-full top-[5%] mix-blend-difference fixed z-50 items-center justify-between px-[5%] bg-transparent font-logo ${className}`}
      style={{
        ...style,
      }}
    >
      <Logo
        text="Nmads Brew"
        hoverAnimation={{
          fill: "#B29055",
          duration: 0.5,
        }}
        smallTextClass="text-2xl"
        mediumTextClass="md:text-2xl"
        largeTextClass="lg:text-3xl"
        smallIconClass="h-4 w-4 !mx-[0.125rem] !mt-[0.125rem]"
        mediumIconClass="md:h-6 md:w-6"
        largeIconClass="lg:h-8 lg:w-8"
        iconSizeClass="h-6 w-6"
      />

      <div
        className={`flex items-center justify-center cursor-pointer mx-2 mt-2 ${iconSizeClass} ${smallIconClass} ${mediumIconClass} ${largeIconClass}`}
        ref={iconRef}
      >
        <MugIcon id="mugIcon" className="fill-foreground" />
      </div>
    </nav>
  );
}
