import React from "react";

export default function Showcase() {
  // const works = [
  //   {
  //     category: "UI KIT",
  //     title: "Mozart Project",
  //     img: "https://picsum.photos/id/1011/400/250", // replace with your own image
  //   },
  //   {
  //     category: "FRAMEWORK",
  //     title: "Startup Framework 2.0",
  //     img: "https://picsum.photos/id/1015/400/250",
  //   },
  //   {
  //     category: "PHOTOS",
  //     title: "From the Sky",
  //     img: "https://picsum.photos/id/1016/400/250",
  //   },
  //   {
  //     category: "PICTURES",
  //     title: "Air Forces",
  //     img: "https://picsum.photos/id/1018/400/250",
  //   },
  // ];

  return (
    <div className="bg-blue-900">
      <div
        className="min-h-screen flex items-center justify-center bg-blue-900 bg-cover bg-center px-4 ml-70   md:w-1/2 "
        style={{
          backgroundImage: "url('/showcase.jpg')",
        }} // replace with your own bg image
      ></div>
    </div>
  );
}
