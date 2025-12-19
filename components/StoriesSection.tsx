import React from 'react';

const stories = [
  {
    title: "Our Story",
    desc: "Premium makeup brand created in the Lake District by makeup artist, Chloe Walsh. Famous for the Marshmallow Sponge.",
    img: "https://clomana.com/cdn/shop/files/Founder_Selects_ca5d4537-c691-41f0-8874-347c5b5d2571.jpg?v=1765275550&width=800" 
  },
  {
    title: "The Marshmallow Sponge",
    desc: "Discover why our sponges went viral and became a staple in makeup bags worldwide.",
    img: "https://clomana.com/cdn/shop/files/12_76c0daf8-50de-442b-9a37-3441b0b67980.jpg?v=1763745367&width=800"
  },
  {
    title: "CMFRT Collection",
    desc: "Luxury soft loungewear designed for ultimate relaxation without compromising on style.",
    img: "https://clomana.com/cdn/shop/files/45.jpg?v=1763463384&width=800"
  }
];

const StoriesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-clomana-dark">Stories</h2>
            <p className="text-gray-500 mt-2 font-light">Read, watch and be inspired</p>
          </div>
          <a href="#" className="text-sm font-bold border-b border-black pb-0.5 hover:opacity-60 transition-opacity">Discover More</a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="overflow-hidden aspect-[4/3] mb-6">
                <img 
                  src={story.img} 
                  alt={story.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-clomana-accent transition-colors">{story.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{story.desc}</p>
              <span className="text-xs font-bold uppercase tracking-widest border-b border-gray-300 pb-1 group-hover:border-clomana-accent transition-all">Read Story</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;