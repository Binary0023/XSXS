import React from 'react';
import { Product } from '../types';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative flex flex-col">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100 rounded-sm">
        {product.badge && (
          <span className="absolute top-2 left-2 z-10 bg-white/90 backdrop-blur text-[10px] uppercase tracking-wider font-semibold px-2 py-1">
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button className="w-full bg-white text-clomana-dark py-3 text-xs uppercase font-bold tracking-widest hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2 shadow-lg">
            <ShoppingBag size={14} /> Quick Add
          </button>
        </div>
      </div>
      <div className="mt-4 flex flex-col text-center">
        <h3 className="text-sm font-medium text-clomana-text group-hover:text-black transition-colors">
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
        <div className="mt-1 flex justify-center items-center gap-2 text-sm text-gray-900">
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-xs">{product.originalPrice}</span>
          )}
          <span className="font-semibold">{product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;