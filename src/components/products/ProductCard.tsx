import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product, formatPrice } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: product.sizes[0],
    });
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <Link to={`/products/${product.id}`} className="group block mb-10">
        <div className="relative overflow-hidden rounded-[32px] bg-secondary aspect-[3/4] mb-6 shadow-soft group-hover:shadow-elevated transition-shadow duration-500">
          {/* Main Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-all duration-700",
              product.images.length > 1 ? "group-hover:opacity-0 group-hover:scale-105" : "group-hover:scale-110"
            )}
          />

          {/* Secondary Image on Hover */}
          {product.images.length > 1 && (
            <img
              src={product.images[1]}
              alt={`${product.name} alternate`}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100"
            />
          )}

          {/* Badges */}
          <div className="absolute top-5 left-5 flex flex-col gap-2 z-10">
            {discount && (
              <Badge className="bg-accent text-accent-foreground border-0 px-3 py-1 text-xs font-bold rounded-full">
                -{discount}%
              </Badge>
            )}
            {product.tags.includes('new') && (
              <Badge className="bg-primary text-primary-foreground border-0 px-3 py-1 text-xs font-bold rounded-full">
                New
              </Badge>
            )}
          </div>

          {/* Actions - Wishlist */}
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-primary z-10"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Heart className="w-5 h-5" />
          </button>

          {/* Bottom Bar - Quick Buy */}
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
            <Button
              variant="buy"
              className="w-full h-12 rounded-2xl shadow-lg shadow-black/20 font-bold"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Quick Add
            </Button>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-3 px-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold tracking-tight text-foreground/90 group-hover:text-primary transition-colors duration-300 truncate pr-4">
              {product.name}
            </h3>
            <div className="flex items-center gap-1 shrink-0">
              <Star className="w-3.5 h-3.5 fill-accent text-accent" />
              <span className="text-xs font-bold">{product.rating}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through opacity-60">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Color Swatches */}
            <div className="flex -space-x-1.5">
              {product.colors.slice(0, 3).map((color, i) => (
                <div
                  key={i}
                  className="w-5 h-5 rounded-full border-2 border-background shadow-sm"
                  style={{ backgroundColor: color }}
                />
              ))}
              {product.colors.length > 3 && (
                <div className="w-5 h-5 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-[8px] font-bold">
                  +{product.colors.length - 3}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1 overflow-hidden">
            {product.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-[0.1em] font-bold text-muted-foreground/60 bg-secondary/50 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
