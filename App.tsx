import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryNav from './components/CategoryNav';
import ProductSection from './components/ProductSection';
import BrandLogos from './components/BrandLogos';
import StoriesSection from './components/StoriesSection';
import Footer from './components/Footer';
import { Product } from './types';

// Real Data from Clomaná HTML
const newArrivals: Product[] = [
  {
    id: 'p1',
    name: 'CMFRT Luxury Soft Long Pyjama Set - Frankie',
    price: '£50.00',
    originalPrice: '£65.00',
    image: 'https://clomana.com/cdn/shop/files/45.jpg?v=1763463384&width=600',
    badge: 'New'
  },
  {
    id: 'p2',
    name: 'CMFRT Petite Luxury Soft Long Pyjama Set - Frankie',
    price: '£50.00',
    originalPrice: '£65.00',
    image: 'https://clomana.com/cdn/shop/files/46.jpg?v=1763463424&width=600',
    badge: 'Petite'
  },
  {
    id: 'p3',
    name: 'CMFRT Luxury Soft Long Pyjama Set - Rowen',
    price: '£50.00',
    originalPrice: '£65.00',
    image: 'https://clomana.com/cdn/shop/files/38_e7b2f37b-aa5a-4b5e-8434-83a901f1659d.jpg?v=1765275593&width=600',
    badge: 'New'
  },
  {
    id: 'p4',
    name: 'Christmas Box - Gold',
    price: '£150.00',
    image: 'https://clomana.com/cdn/shop/files/1_b5a9a66b-9a18-4a8d-af5b-a3ca0f541c51.jpg?v=1763988958&width=600',
    badge: 'Limited'
  }
];

const offerProducts: Product[] = [
  {
    id: 'o1',
    name: 'Marshmallow Sponge Cracker Trio - Red Velvet',
    price: '£15.00',
    originalPrice: '£36.00',
    image: 'https://clomana.com/cdn/shop/files/Product_Pages_a714fecc-1ef9-45dd-84e0-20a914128563.jpg?v=1765275315&width=600',
    badge: 'Sold Out'
  },
  {
    id: 'o2',
    name: 'Marshmallow Original Duo Bauble',
    price: '£18.00',
    image: 'https://clomana.com/cdn/shop/files/Product_Pages_3.jpg?v=1765275465&width=600',
  },
  {
    id: 'o3',
    name: 'Mystery Marshmallow Sponge',
    price: '£7.50',
    originalPrice: '£12.95',
    image: 'https://clomana.com/cdn/shop/files/12_76c0daf8-50de-442b-9a37-3441b0b67980.jpg?v=1763745367&width=600',
    badge: 'Sale'
  },
  {
    id: 'o4',
    name: 'Mystery Brush & Sponge Cleanser',
    price: '£13.50',
    originalPrice: '£18.00',
    image: 'https://clomana.com/cdn/shop/files/15_d2afae43-c281-4b99-ae1d-d960812b4de5.jpg?v=1763745391&width=600',
    badge: 'Best Value'
  }
];

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-clomana-text bg-clomana-bg selection:bg-clomana-accent selection:text-white">
      <Header />
      <main>
        <Hero />
        <CategoryNav />
        <ProductSection title="New Arrivals" products={newArrivals} />
        
        {/* Don't Miss These Offers - Oriflame Style Banner/Section */}
        <section className="bg-white py-16">
           <div className="max-w-[1400px] mx-auto px-4">
             <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden mb-12">
                <img 
                  src="https://clomana.com/cdn/shop/files/CC2A0160.webp?v=1764352759&width=1600" 
                  alt="Exclusive Offers" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-center text-white text-center p-6">
                    <span className="text-sm font-bold uppercase tracking-widest mb-2">Limited Time</span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">Don't Miss These Offers</h2>
                    <button className="bg-white text-black px-8 py-3 uppercase text-xs font-bold hover:bg-gray-100 transition-colors">
                        Shop Offers
                    </button>
                </div>
             </div>
             <ProductSection title="" products={offerProducts} />
           </div>
        </section>

        <BrandLogos />
        <StoriesSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;