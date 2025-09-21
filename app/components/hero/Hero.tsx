// components/Hero.tsx
"use client";

export default function Hero() {
  return (
<section className="w-full min-h-[100vh] relative flex flex-col items-center justify-center bg-white px-8 overflow-hidden">
  {/* Background Video */}
  <video
    className="absolute top-0 left-0 rounded w-full h-full object-cover z-0"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="https://www.pexels.com/download/video/15405843" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Content */}
  <div className="w-full grid grid-cols-3 items-center pb-8 bg-transparent z-50">
    <p className="justify-self-start text-base sm:text-xl md:text-xl font-medium text-white">A</p>
    <p className="justify-self-center text-base sm:text-xl md:text-xl font-medium text-white">SERIOUSLY</p>
    <p className="justify-self-end text-base sm:text-xl md:text-xl font-medium text-white">GOOD</p>
  </div>

  <h1 className="uppercase font-extrabold text-center text-white mt-6 z-10
        text-[65px] sm:text-6xl md:text-8xl lg:text-[130px] leading-tight md:leading-[1.1]">
    DESIGN ENGINEER
  </h1>
</section>

  );
}
