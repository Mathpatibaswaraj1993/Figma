import React from "react";
import img1 from "../assets/P1.png";
import img2 from "../assets/p2.png";
import img3 from "../assets/p3.png";
import img4 from "../assets/p4.png";

function Showcase() {
  const images = [
    {
      src: img1,
      small: "UI KIT",
      title: "Mozart Project",
    },
    {
      src: img2,
      small: "FRAMEWORK",
      title: "Startup Framework 2.0",
    },
    {
      src: img3,
      small: "PHOTOS",
      title: "From the Sky",
    },
    {
      src: img4,
      small: "PICTURES",
      title: "Air Forces",
    },
  ];

  return (
    <div className="bg-blue-900">
      <div className="max-w-4xl mx-auto p-4 bg-blue-900">
        <span className="text-xl font-semibold mb-9 ml-0">Last Work</span>
        <span className="text-xl font-semibold mb-6  ml-160 text-right">
          View all Works
        </span>
        {/* Grid container: 2x2 layout with spacing */}
        <div className="grid grid-cols-2 gap-8">
          {images.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* ✅ Fixed smaller image size */}
              <div className="w-full h-40 relative overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={item.src}
                  alt={`image-${i}`}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 ease-out"
                />
              </div>
              {/* Small text */}
              <p className="mt-3 text-xs uppercase tracking-wide text-gray-100">
                {item.small}
              </p>
              {/* Large heading */}
              <h3 className="text-lg font-bold text-gray-50 text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Showcase;
