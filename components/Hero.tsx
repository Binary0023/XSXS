import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <img 
        src="https://clomana.com/cdn/shop/files/1_95f90abc-7a5f-45f7-9c3f-3931a8246a00.jpg?v=1766136999" 
        alt="Clomana Christmas Collection" 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
        <h2 className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 font-medium drop-shadow-md font-sans">
          The Christmas Collection
        </h2>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold mb-8 drop-shadow-lg leading-tight">
          Unwrap Beauty
        </h1>
        <div className="flex gap-4">
          <button className="bg-white text-clomana-dark px-10 py-3 uppercase tracking-widest text-xs font-bold hover:bg-gray-100 transition-colors duration-300 min-w-[160px]">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;