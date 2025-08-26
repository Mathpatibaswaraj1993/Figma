import React from "react";

const Featured = ({ icon, title, description }) => {
  return (
    <div className="p-6 border border-white rounded-lg bg-transparent">
      {/* SVG icon */}
      <img src={icon} alt="" className="h-10 w-10 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Featured;
