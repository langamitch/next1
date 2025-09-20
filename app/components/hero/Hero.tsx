// components/Hero.tsx
"use client";

export default function Hero() {
  return (
    <section className="w-full min-h-[100vh] flex flex-col items-center justify-center bg-white px-8">
<div className="w-full grid grid-cols-3 items-center pb-8 bg-white z-50">
  <p className="justify-self-start text-base sm:text-xl md:text-xl font-medium">A</p>
  <p className="justify-self-center text-base sm:text-xl md:text-xl font-medium">SERIOUSLY</p>
  <p className="justify-self-end text-base sm:text-xl md:text-xl  font-medium">GOOD</p>
</div>

      <h1 className="uppercase font-extrabold text-center text-gray-900 mt-6
        text-[65px] sm:text-6xl md:text-8xl lg:text-[130px] leading-tight md:leading-[1.1]">
        DESIGN ENGINEER
      </h1>
    </section>
  );
}
