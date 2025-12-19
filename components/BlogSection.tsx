import React from 'react';
import { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of the Perfect Base',
    subtitle: 'Why the Marshmallow Sponge changed the game',
    image: 'https://clomana.com/cdn/shop/files/38_e7b2f37b-aa5a-4b5e-8434-83a901f1659d.jpg?v=1765275593&width=800',
    link: '#'
  },
  {
    id: '2',
    title: 'Cozy Season Essentials',
    subtitle: 'Discover the new Tartan Pyjama collection',
    image: 'https://clomana.com/cdn/shop/files/45.jpg?v=1763463384&width=800',
    link: '#'
  },
  {
    id: '3',
    title: 'Holiday Gifting Guide',
    subtitle: 'Curated boxes for everyone on your list',
    image: 'https://clomana.com/cdn/shop/files/Product_Pages_a714fecc-1ef9-45dd-84e0-20a914128563.jpg?v=1765275315&width=800',
    link: '#'
  }
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-medium text-clomana-dark mb-2">Stories</h2>
          <p className="text-gray-500 font-light text-lg">Read, watch and be inspired</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="overflow-hidden mb-6 aspect-[4/5] md:aspect-[3/4] relative">
                 <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>
              <div className="text-center md:text-left px-2">
                <h3 className="font-heading text-xl font-medium mb-2 group-hover:text-clomana-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 font-light mb-4">{post.subtitle}</p>
                <a href={post.link} className="inline-block text-sm uppercase tracking-widest font-semibold border-b border-gray-300 pb-1 group-hover:border-black transition-all">
                  Read Article
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;