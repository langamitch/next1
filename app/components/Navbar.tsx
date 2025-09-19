// components/Navbar.tsx
"use client";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
        {/* Left section */}
        <div className="flex items-center gap-10 text-sm">
          {/* US Based (hidden on mobile) */}
          <div className="hidden md:block">
            <p className="font-large">SA Based</p>
            <p className="text-gray-400">Working globally</p>
          </div>

          {/* Building at Hightouch (always visible) */}
          <div>
            <p className="font-large">Building at</p>
            <p className="text-gray-400">Strictwrld</p>
          </div>

          {/* Freelance availability (hidden on mobile) */}
          <div className="hidden md:block">
            <p className="font-large">Freelance availability</p>
            <p className="text-gray-400">September 2025</p>
          </div>
        </div>

        {/* Button */}
        <button className="bg-black text-white px-5 py-4 rounded-full text-sm font-medium hover:bg-gray-900">
          Get in touch
        </button>
      </div>
    </nav>
  );
}
