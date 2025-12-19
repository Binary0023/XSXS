import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  bgColor?: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, subtitle, products, bgColor = "bg-transparent" }) => {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-medium uppercase tracking-widest text-clomana-dark mb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-500 text-sm md:text-base font-light max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <a href="#" className="inline-block border border-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
             View All Products
           </a>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;