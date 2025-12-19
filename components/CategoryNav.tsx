import React from 'react';

const categories = [
  { name: 'Christmas', href: '#' },
  { name: 'Stocking Fillers', href: '#' },
  { name: 'Mystery', href: '#' },
  { name: 'CMFRT', href: '#' },
  { name: 'Sponges', href: '#' },
  { name: 'Bundles', href: '#' },
];

const CategoryNav: React.FC = () => {
  return (
    <section className="py-12 border-b border-gray-200/60 bg-[#f7f5f4]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex justify-center flex-wrap gap-8 md:gap-12">
            {categories.map((cat, idx) => (
              <a 
                key={idx}
                href={cat.href} 
                className="group flex flex-col items-center gap-2 min-w-[100px]"
              >
                {/* Replaced filter buttons with simple text links as requested */}
                <div className="h-24 w-24 rounded-full bg-gray-200 overflow-hidden relative mb-2 shadow-sm group-hover:shadow-md transition-all">
                    {/* Placeholder colored circles or generic patterns since we don't have explicit category icons, 
                        using css gradients to simulate product textures found on site */}
                    <div className={`w-full h-full bg-gradient-to-br ${idx % 2 === 0 ? 'from-pink-100 to-rose-200' : 'from-gray-100 to-gray-300'} opacity-80 group-hover:scale-110 transition-transform duration-500`}></div>
                </div>
                <span className="font-heading text-xs md:text-sm font-semibold text-clomana-text uppercase tracking-wide group-hover:text-black transition-colors">
                  {cat.name}
                </span>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryNav;