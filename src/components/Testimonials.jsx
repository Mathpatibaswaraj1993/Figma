import React from "react";

const testimonials = [
  {
    name: "RAYHAN CURRAN",
    text: "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "KAYLEY FRAME",
    text: "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "GENE WHITFIELD",
    text: "The most important part of the Startup Framework is the samples",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "ALLAN KIM",
    text: "I’ve built my website with Startup just in one day, and it was ready-to-go.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-indigo-900 text-white py-16 px-6">
      <div className="max-w-3xl mx-auto max-h-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Happy Clients
        </h2>

        {/* Grid layout */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-indigo-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-start space-x-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <p className="text-sm">{item.text}</p>
              </div>
              <p className="mt-4 text-xs font-semibold tracking-wide text-gray-300">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
