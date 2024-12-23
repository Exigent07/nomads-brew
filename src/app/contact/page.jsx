"use client";

import { useState, useRef } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill out all fields.");
      return;
    }

    setFormStatus("Sending your message...");
    
    setTimeout(() => {
      setFormStatus("Thank you for your message! We'll get back to you shortly.");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <>
      <main className="relative flex flex-col items-center pt-[10%] sm:pt-[10%] md:pt-[5%] justify-center min-h-screen w-screen bg-background">
        <Nav
          smallIconClass="h-6 w-6 !mx-[0.125rem] !mt-[0.125rem]"
          mediumIconClass="md:h-8 md:w-8"
          largeIconClass="lg:h-12 lg:w-12"
          iconSizeClass="h-8 w-8"
        />

        <header className="flex flex-col items-center justify-center w-full py-10">
          <h1 className="text-textColor font-heading text-3xl md:text-5xl lg:text-6xl text-center">
            Contact Us
          </h1>
          <p className="text-textColor text-sm md:text-md lg:text-lg max-w-3xl text-center mt-4 font-body">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </header>

        <section className="w-full max-w-2xl px-6 lg:px-20 py-10">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col space-y-6 bg-white p-8 rounded-lg shadow-md"
          >
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-textColor font-body text-lg">
                Name
              </label>
              <input
                type="text"
                id="name"
                autoComplete="off"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 p-3"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-textColor font-body text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                autoComplete="off"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 p-3"
                placeholder="Your Email Address"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-textColor font-body text-lg">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 p-3 h-40 resize-none"
                placeholder="Your Message"
                required
              />
            </div>

            {formStatus && (
              <div
                className={`${
                  formStatus.includes("Thank") ? "text-green-500" : "text-red-500"
                } text-center mt-4`}
              >
                {formStatus}
              </div>
            )}

            <button
              type="submit"
              className="bg-white text-textColor border-primary border-2 text-lg font-bold py-3 px-8 shadow-md hover:bg-textColor hover:text-white transition"
            >
              Send Message
            </button>
          </form>
        </section>

        <Footer />
      </main>
    </>
  );
}
