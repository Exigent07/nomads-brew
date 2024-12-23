import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import MugIcon from "../../public/mug.svg";
import Logo from "./Logo";
import { useGSAP } from "@gsap/react";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import SplitText from "@/utils/SplitText";

export default function Nav({
  style = {},
  className = "",
  smallIconClass = "h-4 w-4",
  mediumIconClass = "md:h-8 md:w-8",
  largeIconClass = "lg:h-12 lg:w-12",
  iconSizeClass = "h-6 w-6",
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const mugRef = useRef(null);
  const liRefs = useRef([]);
  const iconRef = useRef(null);
  const navMenuRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  function navigate(path) {
    router.push(path);
  }

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const icon = iconRef.current;
      const mug = mugRef.current;

      const handleHover = () => {
        if (!menuOpen && !isSmallScreen) {
          gsap.timeline()
            .to(mug, {
              y: "-12.5px",
              duration: 0.5,
              ease: "power2.out",
            }, "<");
        }
      };

      const handleLeave = () => {
        if (!menuOpen && !isSmallScreen) {
          gsap.timeline()
            .to(mug, {
              y: "0px",
              duration: 0.5,
              ease: "power2.in",
            }, "<");
        }
      };

      icon.addEventListener("mouseenter", handleHover);
      icon.addEventListener("mouseleave", handleLeave);

      return () => {
        icon.removeEventListener("mouseenter", handleHover);
        icon.removeEventListener("mouseleave", handleLeave);
      };
    }, iconRef.current);
  }, [menuOpen, isSmallScreen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    const timeline = gsap.timeline();

    if (!menuOpen) {
      timeline.to(navMenuRef.current, {
        x: "0%",
        duration: 0.5,
        ease: "power2.out",
      });

      if (!isSmallScreen) {
        timeline.to(iconRef.current, {
          y: "750%",
          x: "-500%",
          scale: 6,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    } else {
      timeline.to(navMenuRef.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power2.in",
      });

      if (!isSmallScreen) {
        timeline.to(
          iconRef.current,
          {
            y: "0%",
            x: "0%",
            scale: 1,
            duration: 0.5,
            ease: "power2.in",
          },
          "<"
        );
      }
    }
  };

  return (
    <>
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
          className={`relative items-center justify-center cursor-pointer mx-2 mt-2 ${iconSizeClass} ${smallIconClass} ${mediumIconClass} ${largeIconClass} ${menuOpen && "hidden lg:flex"}`}
          ref={iconRef}
          onClick={toggleMenu}
        >
          <MugIcon ref={mugRef} id="mugIcon" className="fill-foreground" />
          <div
            className={`absolute -bottom-1/4 md:right-[10%] w-8 h-8 md:w-8 md:h-8 lg:w-12 lg:h-12 right-[7.5%] mix-blend-difference flex justify-center items-center bg-foreground rounded-full opacity-90 pointer-events-none z-[99] ${className}`}
            style={{
              transform: "rotateX(60deg)",
            }}
          >
            <div className="w-3/4 h-3/4 border-2 bg-background border-background rounded-full"></div>
          </div>
        </div>
      </nav>

      <div
        ref={navMenuRef}
        className={`fixed flex items-center justify-around md:justify-start top-0 left-0 w-full h-full bg-background z-40 transform -translate-x-full transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-1/2 left-16 md:left-24 text-background bg-textColor rounded-full p-2 text-2xl hover:scale-125 transition-all"
          onClick={toggleMenu}
        >
          <IoMdClose />
        </button>
        <ul className="flex flex-col font-logo items-start cursor-pointer pl-[20%] space-y-6 text-textColor">
          {["Home", "Story", "Contact", "Menu"].map((item, index) => (
            <li
              key={item}
              ref={(el) => (liRefs.current[index] = el)}
              onMouseEnter={() => {
                const ctx = gsap.context(() => {
                  gsap.to(liRefs.current[index].querySelectorAll(".split-text-char"), {
                    fontFamily: "Playfair Display",
                    duration: 1,
                    stagger: 0.1,
                    ease: "power1.out",
                  });
                }, liRefs.current[index]);
              }}
              onMouseLeave={() => {
                const ctx = gsap.context(() => {
                  gsap.to(liRefs.current[index].querySelectorAll(".split-text-char"), {
                    fontFamily: "Anton",
                    duration: 1,
                    stagger: 0.1,
                    ease: "power1.out",
                  });
                }, liRefs.current[index]);
              }}
              onClick={() => navigate(`/${item.toLowerCase() !== "home" ? item.toLowerCase() : ""}`)}
            >
              <SplitText
                text={item}
                smallClass="sm:text-5xl text-5xl"
                largeClass="lg:text-8xl"
                mediumClass="md:text-8xl"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
