"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Logo from "@/components/Logo";
import { useGSAP } from "@gsap/react";
import Nav from "@/components/Nav";
import MouseFollow from "@/components/MouseFollow";
import BeanIcon from "../../public/bean.svg";
import Button from "@/components/Button";
import PageCounter from "@/components/PageCounter";
import Footer from "@/components/Footer";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const loadingRef = useRef(null);
  const mainRef = useRef(null);
  const sectionsRef = useRef([]);

  const addToSectionsRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    let current = 0;
    sectionsRef.current.forEach((section, index) => {
      if (scrollPosition > section.offsetTop) {
        current = index + 1;
      }
    });
    setCurrentPage(current);
  };

  const imageHoverEnter = (e) => {
    const target = e.currentTarget.querySelector("img");
    gsap.to(target, {
      scale: 1.5,
      duration: 0.5,
      ease: "power2.out",
    });
  };
  
  const imageHoverLeave = (e) => {
    const target = e.currentTarget.querySelector("img");
    gsap.to(target, {
      scale: 1,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };
  

  useGSAP(() => {
    const onLoad = () => {
      const tl = gsap.timeline({ delay: 3 });

      tl.to(loadingRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          if (loadingRef.current) {
            loadingRef.current.style.display = "none";
          }
        },
      })
        .to(
          mainRef.current,
          {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.4"
        );
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <MouseFollow className="hidden lg:flex" />
      <div
        ref={loadingRef}
        id="loading"
        className="fixed h-screen w-screen bg-background flex justify-center items-center z-50"
      >
        <Logo
          text="Nmads Brew"
          hoverAnimation={{
            fill: "#B29055",
            duration: 0.5,
          }}
          loading={true}
          className="mix-blend-difference"
          smallTextClass="text-3xl"
          mediumTextClass="md:text-4xl"
          largeTextClass="lg:text-5xl"
          smallIconClass="h-5 w-5 !mx-[0.125rem] !mt-[0.125rem] sm:scale-[1]"
          mediumIconClass="md:h-10 md:w-10"
          largeIconClass="lg:h-12 lg:w-12"
          iconSizeClass="h-8 w-8"
        />
      </div>

      <main
        ref={mainRef}
        className="relative flex flex-col items-center justify-center min-h-screen w-screen bg-background opacity-0"
      >
        <Nav 
          smallIconClass="h-6 w-6 !mx-[0.125rem] !mt-[0.125rem]"
          mediumIconClass="md:h-8 md:w-8"
          largeIconClass="lg:h-12 lg:w-12"
          iconSizeClass="h-8 w-8"
        />
        <section ref={addToSectionsRef} id="landing-section" className="h-screen w-screen">          
          <video
            src="/coffee.mp4"
            className="absolute top-0 left-0 w-screen h-screen object-cover z-0"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </section>
        <section ref={addToSectionsRef} id="story-section" className="h-screen w-screen flex flex-col items-center justify-between">
          <div className="flex items-center justify-center py-4 border-b-[1px] w-screen lg:border-b-2 border-primary">
            <h3 className="font-body text-textColor h-[2rem] text-lg sm:text-lg md:text-xl">Get 30% off using the code <span className="font-black">NEWBREW.</span></h3>
          </div>
          <div id="quote" className="flex items-center gap-2 text-textColor text-lg sm:text-lg md:text-2xl lg:text-3xl font-heading justify-center flex-col">
            <h3>Caffeine dreams and steamy realities.</h3>
            <h3>Here's to a day well brewed!</h3>
            <h3 className="font-bold">— Nomads' Brew</h3>
          </div>
          <div id="bean-container" className="flex items-center justify-center">
            <BeanIcon className="h-16 w-16" />
          </div>
          <p className="text-textColor text-sm sm:text-md md:text-2xl lg:text-3xl max-w-[70%] text-center font-special">At Nomads Brew, our passion for coffee began with a simple idea: to bring the world's best brews to your cup. From the hills of Ethiopia to the vibrant markets of Guatemala, we traveled the world, learning from farmers and discovering unique flavors. Our mission is to share these stories and experiences through every cup, so you can enjoy not just great coffee, but a taste of the journey. Join us as we continue to explore the world, one brew at a time</p>
          <Button 
            className="mb-[5%]"
            backgroundColor="#333333"
            textColor="#FFF9F4"
            text="Full Story"
          />
        </section>
        <section ref={addToSectionsRef} id="story-section" className="h-screen w-screen flex flex-col items-center justify-around">
          <div className="flex w-full justify-evenly">
            <div 
              onMouseEnter={imageHoverEnter} 
              onMouseLeave={imageHoverLeave} 
              className="overflow-hidden border-2 border-primary flex items-center justify-center h-[150px] sm:h-[200px] md:h-[300px] lg:h-[450px]"
            >
              <img 
                className="h-[90%] w-[90%]" 
                src="/cappuccino.jpeg" 
                alt="Cappuccino" 
              />
            </div>
            <div 
              onMouseEnter={imageHoverEnter} 
              onMouseLeave={imageHoverLeave} 
              className="overflow-hidden border-2 border-primary flex items-center justify-center h-[150px] sm:h-[200px] md:h-[300px] lg:h-[450px]"
            >
              <img 
                className="h-[90%] w-[90%]" 
                src="/espresso.jpeg" 
                alt="Espresso" 
              />
            </div>
            <div 
              onMouseEnter={imageHoverEnter} 
              onMouseLeave={imageHoverLeave} 
              className="overflow-hidden border-2 border-primary flex items-center justify-center h-[150px] sm:h-[200px] md:h-[300px] lg:h-[450px]"
            >
              <img 
                className="h-[90%] w-[90%]" 
                src="/iced.jpeg" 
                alt="Iced" 
              />
            </div>
          </div>
          <p className="text-textColor text-md sm:text-lg md:text-2xl lg:text-3xl max-w-[70%] text-center font-special">We offer a wide variety of coffee blends—care to take a look?</p>
          <Button 
            backgroundColor="#333333"
            textColor="#FFF9F4"
            text="View Menu"
          />
        </section>
        <PageCounter currentPage={currentPage} totalPages={3} />
        <Footer />
      </main>
    </>
  );
}
