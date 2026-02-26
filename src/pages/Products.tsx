import { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SlidersHorizontal, Grid3X3, LayoutGrid, Search, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/products/ProductCard';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSheet } from '@/components/cart/CartSheet';
import { categories } from '@/data/products';
import { cn } from '@/lib/utils';
import { useProductStore } from '@/store/productStore';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

const priceRanges = [
  { min: 0, max: 50, label: 'Under $50' },
  { min: 50, max: 100, label: '$50 - $100' },
  { min: 100, max: 150, label: '$100 - $150' },
  { min: 150, max: Infinity, label: '$150+' },
];

const Products = () => {
  const { products, isLoading, fetchProducts } = useProductStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const [view, setView] = useState<'grid' | 'large'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const activeCategory = searchParams.get('category') || 'all';
  const activeSort = searchParams.get('sort') || 'featured';
  const activePriceRange = searchParams.get('price');

  const filteredProducts = useMemo(() => {
    let result = activeCategory === 'all'
      ? products
      : products.filter(p => p.category === activeCategory);

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Price filter
    if (activePriceRange) {
      const [min, max] = activePriceRange.split('-').map(Number);
      result = result.filter((product) => product.price >= min && product.price <= (max || Infinity));
    }

    // Sort
    switch (activeSort) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result = [...result].sort((a, b) => (b.tags.includes('new') ? 1 : 0) - (a.tags.includes('new') ? 1 : 0));
        break;
      default:
        result = [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [activeCategory, activeSort, activePriceRange, searchQuery]);

  const setCategory = (category: string) => {
    setSearchParams((prev) => {
      if (category === 'all') {
        prev.delete('category');
      } else {
        prev.set('category', category);
      }
      return prev;
    });
  };

  const setSort = (sort: string) => {
    setSearchParams((prev) => {
      prev.set('sort', sort);
      return prev;
    });
  };

  const setPriceRange = (range: string | null) => {
    setSearchParams((prev) => {
      if (range) {
        prev.set('price', range);
      } else {
        prev.delete('price');
      }
      return prev;
    });
  };

  const clearFilters = () => {
    setSearchParams({});
    setSearchQuery('');
  };

  const hasActiveFilters = activeCategory !== 'all' || activePriceRange || searchQuery;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CartSheet />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary py-12 md:py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <span className="text-sm font-medium text-primary uppercase tracking-widest">Collection</span>
              <h1 className="mt-2">Shop All Products</h1>
              <p className="text-lg text-muted-foreground mt-4">
                Explore our complete range of sustainable clothing and accessories.
                Every piece is crafted with care for you and the planet.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters & Products */}
        <section className="container py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-8">
                {/* Search */}
                <div>
                  <h4 className="font-semibold mb-4">Search</h4>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h4 className="font-semibold mb-4">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setCategory(category.id)}
                        className={cn(
                          'flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm transition-colors',
                          activeCategory === category.id
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-secondary'
                        )}
                      >
                        <span>{category.icon}</span>
                        <span>{category.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="font-semibold mb-4">Price</h4>
                  <div className="space-y-2">
                    {priceRanges.map((range) => {
                      const rangeValue = `${range.min}-${range.max === Infinity ? '' : range.max}`;
                      return (
                        <button
                          key={range.label}
                          onClick={() =>
                            setPriceRange(activePriceRange === rangeValue ? null : rangeValue)
                          }
                          className={cn(
                            'flex items-center w-full px-3 py-2 rounded-lg text-sm transition-colors',
                            activePriceRange === rangeValue
                              ? 'bg-primary text-primary-foreground'
                              : 'hover:bg-secondary'
                          )}
                        >
                          {range.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {hasActiveFilters && (
                  <Button variant="outline" className="w-full" onClick={clearFilters}>
                    <X className="w-4 h-4 mr-2" />
                    Clear Filters
                  </Button>
                )}
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="lg:hidden"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {filteredProducts.length} products
                  </span>
                  {hasActiveFilters && (
                    <Button variant="ghost" size="sm" onClick={clearFilters} className="lg:hidden">
                      <X className="w-4 h-4 mr-1" />
                      Clear
                    </Button>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <select
                    value={activeSort}
                    onChange={(e) => setSort(e.target.value)}
                    className="h-9 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  {/* View Toggle */}
                  <div className="hidden sm:flex items-center border border-input rounded-lg overflow-hidden">
                    <button
                      onClick={() => setView('grid')}
                      className={cn(
                        'p-2 transition-colors',
                        view === 'grid' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'
                      )}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setView('large')}
                      className={cn(
                        'p-2 transition-colors',
                        view === 'large' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'
                      )}
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Filters */}
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="lg:hidden mb-6 p-4 rounded-xl bg-secondary"
                >
                  <div className="space-y-4">
                    {/* Mobile Search */}
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>

                    {/* Mobile Categories */}
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Badge
                          key={category.id}
                          variant={activeCategory === category.id ? 'default' : 'secondary'}
                          className="cursor-pointer"
                          onClick={() => setCategory(category.id)}
                        >
                          {category.icon} {category.name}
                        </Badge>
                      ))}
                    </div>

                    {/* Mobile Price */}
                    <div className="flex flex-wrap gap-2">
                      {priceRanges.map((range) => {
                        const rangeValue = `${range.min}-${range.max === Infinity ? '' : range.max}`;
                        return (
                          <Badge
                            key={range.label}
                            variant={activePriceRange === rangeValue ? 'default' : 'secondary'}
                            className="cursor-pointer"
                            onClick={() =>
                              setPriceRange(activePriceRange === rangeValue ? null : rangeValue)
                            }
                          >
                            {range.label}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Product Grid */}
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
                  <p className="text-muted-foreground animate-pulse">Loading amazing products...</p>
                </div>
              ) : filteredProducts.length > 0 ? (
                <div
                  className={cn(
                    'grid gap-6',
                    view === 'grid'
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                      : 'grid-cols-1 sm:grid-cols-2'
                  )}
                >
                  {filteredProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <Search className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters or search query
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
