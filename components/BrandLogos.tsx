import React from 'react';

const BrandLogos: React.FC = () => {
  const logos = [
    { name: "Sephora", src: "https://clomana.com/cdn/shop/files/1280px-Sephora_logo_svg.png?v=1718899042&width=280" },
    { name: "ASOS", src: "https://clomana.com/cdn/shop/files/Asos-logo.png?v=1736179561&width=280" },
    { name: "Boots", src: "https://clomana.com/cdn/shop/files/boots_logo_icon_247440.webp?v=1736179605&width=280" },
    { name: "TikTok Shop", src: "https://clomana.com/cdn/shop/files/tiktok_shop-logo_brandlogos.net_5ewfz.png?v=1736179638&width=280" },
    { name: "Debenhams", src: "https://clomana.com/cdn/shop/files/DEBENHAMS_LOGO_2023__1.png?v=1753699919&width=280" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 text-center">
        <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-gray-400 mb-10">
          Also Available At
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {logos.map((logo, index) => (
            <div key={index} className="w-24 md:w-32 flex items-center justify-center hover:scale-105 transition-transform duration-300">
               <img src={logo.src} alt={logo.name} className="max-h-6 md:max-h-8 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;