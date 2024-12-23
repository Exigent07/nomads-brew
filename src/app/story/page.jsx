"use client";

import { useRef } from "react";
import Logo from "@/components/Logo";
import Nav from "@/components/Nav";
import BlenderIcon from "../../../public/blender.svg";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Story() {
  const mainRef = useRef(null);

  return (
    <>
      <main
        ref={mainRef}
        className="relative flex flex-col pt-[10%] sm:pt-[10%] md:pt-[5%] items-center justify-center min-h-screen w-screen bg-background"
      >
        <Nav 
          smallIconClass="h-6 w-6 !mx-[0.125rem] !mt-[0.125rem]"
          mediumIconClass="md:h-8 md:w-8"
          largeIconClass="lg:h-12 lg:w-12"
          iconSizeClass="h-8 w-8"
        />

        <header className="flex flex-col items-center justify-center w-full py-10">
          <h1 className="text-textColor font-heading text-3xl md:text-5xl lg:text-6xl text-center">
            Our Story
          </h1>
          <p className="text-textColor text-sm md:text-md lg:text-lg max-w-3xl text-center mt-4 font-body">
            Discover the journey behind every sip of Nomads' Brew.
          </p>
        </header>

        <section className="mt-[5%] w-screen flex flex-col items-center px-6 lg:px-20">
          <div id="quote" className="flex items-center gap-2 text-textColor text-lg sm:text-lg md:text-2xl lg:text-3xl font-heading justify-center flex-col">
            <h3>Caffeine dreams and steamy realities.</h3>
            <h3>Here's to a day well brewed!</h3>
            <h3 className="font-bold">— Nomads' Brew</h3>
          </div>

          <div id="bean-container" className="flex items-center justify-center my-10">
            <BlenderIcon className="h-16 w-16" />
          </div>

          <p className="text-textColor text-sm sm:text-md md:text-lg lg:text-xl max-w-5xl text-center font-body">
            At Nomads Brew, our passion for coffee began with a simple idea: to bring the world's best brews to your cup. From the hills of Ethiopia to the vibrant markets of Guatemala, we traveled the world, learning from farmers and discovering unique flavors. Our mission is to share these stories and experiences through every cup, so you can enjoy not just great coffee, but a taste of the journey.
          </p>

          <p className="text-textColor text-sm sm:text-md md:text-lg lg:text-xl max-w-5xl text-center font-body mt-6">
            It all started with a love for adventure and a desire to connect with cultures through their coffee traditions. Over the years, we've built relationships with farmers, embraced sustainability, and celebrated the art of crafting the perfect cup. Each blend we create carries the essence of the places we've visited, the people we've met, and the moments we've cherished.
          </p>

          <p className="text-textColor text-sm sm:text-md md:text-lg lg:text-xl max-w-5xl text-center font-body mt-6">
            Join us as we continue to explore the world, one brew at a time. Whether it's a quiet morning ritual, a midday recharge, or an evening indulgence, let Nomads' Brew be part of your journey.
          </p>
        </section>

        <section className="mt-20 w-full flex flex-col items-center bg-secondary py-16">
          <h2 className="text-textColor font-heading text-2xl md:text-4xl lg:text-5xl mb-10">
            A Glimpse Into Our Journey
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="h-48 w-64 md:h-64 md:w-96 lg:h-80 lg:w-[500px] overflow-hidden rounded-md shadow-md">
              <img
                src="/story-ethiopia.jpeg"
                alt="Ethiopia Coffee Fields"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-48 w-64 md:h-64 md:w-96 lg:h-80 lg:w-[500px] overflow-hidden rounded-md shadow-md">
              <img
                src="/story-guatemala.jpeg"
                alt="Guatemala Coffee Markets"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-48 w-64 md:h-64 md:w-96 lg:h-80 lg:w-[500px] overflow-hidden rounded-md shadow-md">
              <img
                src="/story-blend.jpeg"
                alt="Coffee Blends"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mt-20 mb-10 w-screen flex flex-col items-center px-6 lg:px-20">
          <h2 className="text-textColor font-heading text-2xl md:text-4xl lg:text-5xl mb-4">
            Ready to Taste the Adventure?
          </h2>
          <p className="text-textColor text-sm sm:text-md md:text-lg lg:text-xl max-w-3xl text-center font-body mb-6">
            Explore our range of handcrafted blends and experience the world of coffee like never before.
          </p>
          <Button text="View Our Menu" path="/menu" />
        </section>

        <Footer />
      </main>
    </>
  );
}
