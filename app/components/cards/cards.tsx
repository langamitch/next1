
export default function WorkSection() {
  return (
    <section className="w-full min-h-[100vh] flex flex-col items-start justify-start bg-white px-1 md:px-8 py-10">
     <div className="w-full flex flex-row justify-between px-1 ">
        <h2 className="text-6xl md:text-[10rem] font-extrabold text-gray-900 ">
        WORK
      </h2>
      <h2 className="text-6xl md:text-[10rem] font-extrabold text-gray-900 ">
        '25
      </h2></div> 

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full">
        {/* Card 1 */}
        <div className="bg-black rounded-xl p-3 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1739879353789-41554220f9c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Jazmin Wong Portfolio"
            className="w-full h-64 md:min-h-[70vh] object-cover rounded-lg"
          />
          <div className="p-6 text-white">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">FREE GAZA PALESTINE</h3>
              <span className="text-sm font-semibold">DONATION APP</span>
            </div>
<div className="overflow-hidden whitespace-nowrap">
  <p className="inline-block text-sm text-gray-300 animate-marquee">
    AWS, VERCEL, STRIPE, VOICE & TONE, UI, UX, NEXT.JS, TAILWIND CSS, AWS, VERCEL, STRIPE, VOICE & TONE, UI, UX, NEXT.JS, TAILWIND CSS
  </p>
</div>


          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-black rounded-xl p-3 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1657961961539-dc254ab942b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Jazmin Wong Portfolio"
            className="w-full h-64 md:min-h-[70vh] object-cover rounded-lg"
          />
          <div className="p-6 text-white">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">911</h3>
              <span className="text-sm font-semibold">GT3RS RACE </span>
            </div>
            <p className="text-sm text-gray-300">
              AWS, VERCEL, ART DIRECTION, VOICE &amp; TONE, UI, UX, NEXT.JS,
              TAILWIND CSS
            </p>
          </div>
        </div>
        {/* Card  */}
        <div className="bg-black rounded-xl p-3 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1704574999803-e00c1ec3ec4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Jazmin Wong Portfolio"
            className="w-full h-64 md:min-h-[70vh] object-cover rounded-lg"
          />
          <div className="p-6 text-white">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">CITYCAPE</h3>
              <span className="text-sm font-semibold">PHOTOGRAPHER STUDIO</span>
            </div>
            <p className="text-sm text-gray-300">
              AWS, VERCEL, ART DIRECTION, VOICE &amp; TONE, UI, UX, NEXT.JS,
              TAILWIND CSS
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-black rounded-xl p-3 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1736670216705-e8b009f8efa9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Jazmin Wong Portfolio"
            className="w-full h-64 md:min-h-[70vh] object-cover rounded-lg"
          />
          <div className="p-6 text-white">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">THE GREEN MASROOM HOUSE</h3>
              <span className="text-sm font-semibold">HOUSE CONCEPT DESIGN</span>
            </div>
            <p className="text-sm text-gray-300">
              AWS, VERCEL, ART DIRECTION, VOICE &amp; TONE, UI, UX, NEXT.JS,
              TAILWIND CSS
            </p>
          </div>
        </div>



      </div>
    </section>
  );
}
