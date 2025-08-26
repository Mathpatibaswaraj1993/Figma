import React from "react";
import { Twitter, Facebook, Instagram, Dribbble, Github } from "lucide-react";

export default function TeamSection() {
  const team = [
    {
      name: "Leah Salomon",
      role: "UI Designer",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      socials: [<Twitter />, <Facebook />, <Dribbble />, <Instagram />],
    },
    {
      name: "Colin Timmons",
      role: "UX Designer",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      socials: [<Twitter />, <Dribbble />],
    },
    {
      name: "Miguel Osborne",
      role: "Front-end Developer",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      socials: [
        <Github />,
        <img
          src="https://cdn-icons-png.flaticon.com/512/2111/2111710.png"
          alt="Skype"
          className="w-4 h-4"
        />,
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
          alt="Medium"
          className="w-4 h-4"
        />,
      ],
    },
    {
      name: "Taylor Simon",
      role: "Product Manager",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      socials: [<Twitter />, <Instagram />],
    },
    {
      name: "Steven MacAlister",
      role: "Copyrighter",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      socials: [<Twitter />],
    },
  ];

  return (
    <section className="bg-indigo-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold">Startup Crew</h2>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            The most important part of the Startup Framework is the samples. The
            samples form a set of 25 usable pages you can use as is or you can
            add new blocks from UI Kit.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
          {team.map((member, idx) => (
            <div key={idx} className="text-center space-y-3">
              {/* Avatar */}
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
              />
              {/* Name & Role */}
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-300">{member.role}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-3 text-gray-300">
                {member.socials.map((icon, i) => (
                  <span key={i} className="hover:text-white cursor-pointer">
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
