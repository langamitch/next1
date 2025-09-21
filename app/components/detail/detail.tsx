import Image from "next/image";

export default function WorkSection() {
  return (
    <section className="w-full min-h-[100vh] flex flex-col items-start justify-start bg-white px-1 md:px-8 py-10">


      <div className="grid bg-black min-h-[100vh] p-4 rounded-2xl  gap-6 mt-10 w-full">
        <div className="p-0 mt-10 md:pl-20 lg:pl-40">
        <h3 className="text-white text-sm font-medium ">SERVICES</h3>
       <p className="mt-4 text-white tracking-tighter text-2xl md:text-4xl  font-semibold">Constantly adapting to each brief and focused on impact, my approach covers design, development, and brand strategy. I bridge vision with execution to deliver clarity and distinction in every project.</p>
        </div>


    <div className="w-full bg-[#161616] p-2 rounded-lg mt-10 md:p-4">
      <div className="flex flex-col md:flex-row w-full gap-6 items-start ">
        
        {/* Column 1 - Number */}
        <div className="w-full md:w-1/12 text-white text-sm font-semibold">
          01
        </div>

        {/* Column 2 - Heading */}
        <div className="w-full text-xl font-semibold md:w-3/12 text-4xl font-bold text-white leading-tight">
          Brand Strategy
        </div>

        {/* Column 3 - Description + Tags */}
        <div className="w-full md:w-4/12 flex flex-col gap-4">
          <p className="text-sm font-medium  text-white leading-relaxed md:text-md">
            Helping others uncover their brand's purpose and uniqueness – and the
            game plan to deliver it to win their customers' devotion.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {[
              "RESEARCH & INSIGHTS",
              "BRAND STRATEGY",
              "COMPETITIVE STUDY",
              "VOICE & TONE",
              "NAMING & COPYWRITING",
              "WORKSHOPS",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-[#262626] text-white text-xs rounded-md font-medium font-doto"
                style={{ fontFamily: 'var(--font-doto), sans-serif' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Column 4 - Optimized Image */}
        <div className="w-full md:w-4/12">
          <img
            src="https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Brand strategy illustration"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-auto"
          
          />
        </div>
      </div>
      <div className="flex flex-col mt-10 md:flex-row w-full gap-6  items-start ">
        
        {/* Column 1 - Number */}
        <div className="w-full md:w-1/12 text-white text-sm font-semibold">
          02
        </div>

        {/* Column 2 - Heading */}
        <div className="w-full text-xl font-semibold md:w-3/12  text-4xl font-bold text-white leading-tight">
          Digital Design
        </div>

        {/* Column 3 - Description + Tags */}
        <div className="w-full md:w-4/12 flex flex-col gap-4">
          <p className="text-sm font-medium  text-white leading-relaxed md:text-md">
            Designing engaging digital experiences that combine brand strategy and creativity with UX insights to deliver functionality and ease of use
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {[
              "IDENTITY DESIGN",
              "WIREFRAMING",
              "UI",
              "UX",
              "WEB DESIGN",
              "PRODUCT DESIGN",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-[#262626] text-white text-xs rounded-md font-medium font-doto"
                style={{ fontFamily: 'var(--font-doto), sans-serif' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Column 4 - Optimized Image */}
        <div className="w-full md:w-4/12">
          <img
            src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dWklMjBkZXNpZ258ZW58MHwwfDB8fHwy"
            alt="Brand strategy illustration"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-auto"
          
          />
        </div>
      </div>
    </div>
  

      </div>


    </section>
  );
}
