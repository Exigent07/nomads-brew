"use client";

import { useRef } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MouseFollow from "@/components/MouseFollow";

export default function Menu() {
  const mainRef = useRef(null);

  const menuItems = [
    {
      category: "Coffee",
      items: [
        { name: "Espresso", description: "Strong and rich coffee shot.", price: "₹150" },
        { name: "Cappuccino", description: "Espresso with steamed milk and foam.", price: "₹200" },
        { name: "Latte", description: "Espresso with steamed milk and a light foam.", price: "₹220" },
        { name: "Americano", description: "Espresso diluted with hot water.", price: "₹180" },
        { name: "Mocha", description: "A chocolate flavored espresso drink.", price: "₹250" },
      ],
    },
    {
      category: "Tea",
      items: [
        { name: "Masala Chai", description: "Spicy and flavorful Indian tea.", price: "₹120" },
        { name: "Green Tea", description: "Refreshing and healthy green tea.", price: "₹150" },
        { name: "Herbal Tea", description: "Caffeine-free, soothing herbal infusion.", price: "₹180" },
        { name: "Iced Tea", description: "Chilled tea with a hint of lemon.", price: "₹160" },
      ],
    },
    {
      category: "Snacks",
      items: [
        { name: "Croissant", description: "Flaky and buttery French pastry.", price: "₹100" },
        { name: "Muffin", description: "Soft and sweet, with chocolate chunks.", price: "₹120" },
        { name: "Brownie", description: "Rich chocolate brownie with a fudgy center.", price: "₹140" },
        { name: "Bagel", description: "Toasted bagel with cream cheese.", price: "₹120" },
        { name: "Scone", description: "Buttery and lightly sweetened scone, served with jam.", price: "₹130" },
      ],
    },
    {
      category: "Smoothies & Juices",
      items: [
        { name: "Berry Smoothie", description: "A blend of fresh berries and yogurt.", price: "₹250" },
        { name: "Tropical Juice", description: "A refreshing mix of mango, pineapple, and orange.", price: "₹220" },
        { name: "Green Smoothie", description: "A healthy mix of spinach, kale, and banana.", price: "₹230" },
        { name: "Carrot Orange Juice", description: "Freshly squeezed carrots and orange juice.", price: "₹200" },
      ],
    },
    {
      category: "Bakery",
      items: [
        { name: "Chocolate Cake", description: "Decadent cake with a rich chocolate flavor.", price: "₹180" },
        { name: "Carrot Cake", description: "A moist cake made with fresh carrots.", price: "₹160" },
        { name: "Cheese Bread", description: "Soft bread stuffed with creamy cheese.", price: "₹150" },
        { name: "Apple Pie", description: "Classic apple pie with a flaky crust.", price: "₹170" },
      ],
    },
  ];

  return (
    <>
      <MouseFollow className="hidden lg:flex" />
      <main
        ref={mainRef}
        className="relative flex flex-col items-center justify-center min-h-screen w-screen bg-background"
      >
        <Nav
          smallIconClass="h-6 w-6 !mx-[0.125rem] !mt-[0.125rem]"
          mediumIconClass="md:h-8 md:w-8"
          largeIconClass="lg:h-12 lg:w-12"
          iconSizeClass="h-8 w-8"
        />

        <header className="flex flex-col items-center justify-center w-full py-10">
          <h1 className="text-textColor font-heading text-3xl md:text-5xl lg:text-6xl text-center">
            Our Menu
          </h1>
          <p className="text-textColor text-sm md:text-md lg:text-lg max-w-3xl text-center mt-4 font-body">
            Explore our carefully crafted selection of beverages and snacks, made to delight every taste.
          </p>
        </header>

        <section className="mt-10 w-screen px-6 lg:px-20">
          {menuItems.map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-primary font-heading text-2xl md:text-3xl lg:text-4xl mb-6">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-start bg-secondary p-6 rounded-md shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-textColor font-body text-xl md:text-2xl lg:text-3xl font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-textColor font-body text-sm md:text-md lg:text-lg mt-2">{item.description}</p>
                    <span className="text-primary font-bold text-lg md:text-xl lg:text-2xl mt-4">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <Footer />
      </main>
    </>
  );
}
