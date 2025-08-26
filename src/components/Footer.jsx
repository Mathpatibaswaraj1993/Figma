import React from "react";
import { Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          <h2 className="text-lg font-semibold">Startup 3</h2>
          <div className="flex items-center gap-6 text-sm mt-4 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:text-blue-400">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-blue-500">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-red-500">
              G+
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-300">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:underline">
              Tour
            </a>
            <a href="#" className="hover:underline">
              Features
            </a>
            <a href="#" className="hover:underline">
              Pricing Plans
            </a>
            <a href="#" className="hover:underline">
              Our Works
            </a>
            <a href="#" className="hover:underline">
              Brands
            </a>
            <a href="#" className="hover:underline">
              Contacts
            </a>
          </div>
          <p>© 2017 Designmodo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
