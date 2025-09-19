// components/Hero.tsx
"use client";

export default function Hero() {
  return (
    <section className="w-full h-[80vh] flex flex-col items-center justify-center bg-white">
<div className="w-full grid grid-cols-3 items-center  left-0 px-6 py-4 bg-white z-50">

  <p className="text-left">A</p>

 
  <p className="text-center">GOOD</p>


  <p className="text-right">DESIGNER</p>
</div>

      <h1 className="text-6xl md:text-10xl font-extrabold text-center text-gray-900">
        Building the Future with Strictwrld
      </h1>
    </section>
  );
}
