import React from "react";
import pricingimg from "../assets/pricing .jpg"
export default function PricingSection() {
  return (
    <section
      className=" flex items-center justify-center text-center text-white bg-cover bg-center h-250 w-auto"
      style={{ backgroundImage: `url(${pricingimg})` }}
    >
      {/* Content goes here */}
      <div className="text-center text-white"></div>
    </section>
  );
}
