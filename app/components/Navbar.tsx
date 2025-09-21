// components/Navbar.tsx
"use client";

export default function Navbar() {
  return (
    <nav className="w-full bg-transparent top-0 left-0  fixed z-999">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 ">
        {/* Left section */}
        <div className="flex items-center w-full justify-between text-sm">
          {/* US Based (hidden on mobile) */}
          <div className="hidden md:block">
            <div className="block font-medium text-[clamp(16px,1.2vw,20px)]">SA Based</div>
            <p className="text-gray-400 font-medium">Working globally</p>
            
          </div>

          {/* Building at Hightouch (always visible) */}
          <div>
            <div className="block font-medium text-[clamp(16px,1.2vw,20px)]">Building at</div>
            <p className="text-gray-400 font-medium">Strictwrld</p>
          </div>

          {/* Freelance availability (hidden on mobile) */}
          <div className="hidden md:block">
           <div className="block font-medium text-[clamp(16px,1.2vw,20px)]">Freelance Available</div>
            <p className="text-gray-400 font-medium">September 2025</p>
          </div>

<div>
  <a href="mailto:bashh0409@gmail.com subject=Communication about your service">
    <button className="bg-black text-white px-5 py-4 rounded-full text-sm font-medium hover:bg-gray-900">
      Get in touch
    </button>
  </a>
</div>

        </div>

        {/* Button */}

      </div>
    </nav>
  );
}
