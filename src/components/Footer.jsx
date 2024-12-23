"use client";

import Logo from "@/components/Logo";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" border-t border-primary bg-background w-full text-textColor py-10">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start">
          <Logo
              text="Nmads Brew"
              hoverAnimation={{
                fill: "#B29055",
                duration: 0.5,
              }}
              className="text-foreground mix-blend-difference"
              smallTextClass="text-2xl"
              mediumTextClass="md:text-2xl"
              largeTextClass="lg:text-3xl"
              smallIconClass="h-4 w-4 !mx-[0.125rem] !mt-[0.125rem]"
              mediumIconClass="md:h-6 md:w-6"
              largeIconClass="lg:h-8 lg:w-8"
              iconSizeClass="h-6 w-6"
          />
          <p className="mt-2 text-sm sm:text-md text-center md:text-left">
            Caffeine dreams and steamy realities — brewed just for you.
          </p>
        </div>

        <div className="mt-6 md:mt-0 flex flex-col justify-center items-center md:items-start">
          <h4 className="font-heading text-xl md:text-2xl mb-3">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-md sm:text-lg">
            <li><a href="/" className="hover:text-primary transition">Home</a></li>
            <li><a href="/story" className="hover:text-primary transition">Our Story</a></li>
            <li><a href="/menu" className="hover:text-primary transition">Menu</a></li>
            <li><a href="/contact" className="hover:text-primary transition">Contact Us</a></li>
          </ul>
        </div>

        <div className="mt-6 md:mt-0 flex flex-col items-center md:items-start">
          <h4 className="font-heading text-xl md:text-2xl mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-primary pt-4 text-center">
        <p className="text-sm sm:text-md">
          &copy; {currentYear} Nomads' Brew. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
