import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Truck, RefreshCw, Shield, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/products/ProductCard';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSheet } from '@/components/cart/CartSheet';
import { categories } from '@/data/products';
import { useProductStore } from '@/store/productStore';

const features = [
  {
    icon: Leaf,
    title: '100% Sustainable',
    description: 'All materials are organic, recycled, or responsibly sourced',
  },
  {
    icon: Truck,
    title: 'Free Carbon-Neutral Shipping',
    description: 'On all orders over $75, delivered with zero emissions',
  },
  {
    icon: RefreshCw,
    title: '30-Day Returns',
    description: 'Not happy? Return it within 30 days, no questions asked',
  },
  {
    icon: Shield,
    title: 'Lifetime Warranty',
    description: 'We stand behind our products with a lifetime guarantee',
  },
];

const stats = [
  { value: '50K+', label: 'Happy Customers' },
  { value: '2M+', label: 'Plastic Bottles Saved' },
  { value: '100%', label: 'Carbon Neutral' },
  { value: '4.9★', label: 'Average Rating' },
];

const testimonials = [
  {
    name: 'Sarah J.',
    role: 'Conscious Shopper',
    content: 'The quality of the organic cotton is unmatched. Finally, a brand that cares as much about style as they do about the planet.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
  },
  {
    name: 'Marcus K.',
    role: 'Sustainable Architect',
    content: 'Love the minimal aesthetic and the transparent supply chain. The pants I bought are already my daily favorite.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
  },
  {
    name: 'Elena R.',
    role: 'Fashion Blogger',
    content: 'EcoShop proves that sustainable fashion can be incredibly chic. Their new collection is absolutely beautiful.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
  },
];

const Index = () => {
  const { products, isLoading, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const featuredProducts = products.filter(p => p.featured);
  const newArrivals = products.filter(p => p.tags.includes('new')).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CartSheet />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-secondary/30">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
          <div className="container py-20 md:py-32 lg:py-40">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8 relative z-10"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                  <Leaf className="w-4 h-4" />
                  Spring Collection 2024
                </div>
                <h1 className="text-display-md md:text-display-lg leading-[0.95] tracking-tighter">
                  Fashion <br />
                  <span className="text-gradient italic font-serif">Reimagined</span><br />
                  Sustainable.
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Crafted for those who value elegance and ethics. Discover our new season of organic linens and recycled essentials.
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <Button variant="hero" size="xl" className="h-16 px-10 text-lg shadow-elevated" asChild>
                    <Link to="/products">
                      Explore Collection
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="xl" className="h-16 px-10 text-lg border-2" asChild>
                    <Link to="/about">Our Philosophy</Link>
                  </Button>
                </div>

                <div className="flex items-center gap-6 pt-10">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-background overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-bold">Joined by 50k+</div>
                    <div className="text-xs text-muted-foreground font-medium">Conscious fashionistas</div>
                  </div>
                </div>
              </motion.div>

              {/* Hero Image Group */}
              <div className="relative grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="relative space-y-4"
                >
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-card">
                    <img
                      src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800"
                      alt="Fashion Model 1"
                      className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                    />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-soft bg-accent/10 p-4">
                    <div className="w-full h-full rounded-2xl bg-gradient-hero flex flex-col items-center justify-center text-primary-foreground text-center p-4">
                      <span className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">Trend</span>
                      <span className="text-lg font-bold">Organic Linens</span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="relative space-y-4 pt-12"
                >
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-soft bg-secondary p-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">100%</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">Carbon Neutral</div>
                    </div>
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-elevated">
                    <img
                      src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"
                      alt="Fashion Model 2"
                      className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Trends Section */}
        <section className="container py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800" className="absolute inset-0 w-full h-full object-cover" alt="Minimalism" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold mb-2">Sustainable Essentials</h3>
                <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300">Timeless pieces that last a lifetime.</p>
                <Link to="/products" className="text-white text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all underline underline-offset-4">
                  Shop Minimalism <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800" className="absolute inset-0 w-full h-full object-cover" alt="Urban" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold mb-2">Urban Eco-Wear</h3>
                <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300">Modern silhouettes meeting organic fabrics.</p>
                <Link to="/products" className="text-white text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all underline underline-offset-4">
                  Shop Streetwear <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img src="https://images.unsplash.com/photo-1539109132332-629ee6284fe3?w=800" className="absolute inset-0 w-full h-full object-cover" alt="Luxury" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold mb-2">Premium Linens</h3>
                <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300">Elevated textures for luxury conscious living.</p>
                <Link to="/products" className="text-white text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all underline underline-offset-4">
                  Shop Premium <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Home of Categories */}
        <section className="bg-secondary/40 py-20">
          <div className="container">
            <div className="text-center mb-16">
              <span className="text-sm font-bold text-primary tracking-[0.2em] uppercase">Browse Diversity</span>
              <h2 className="text-4xl font-bold mt-4">Fashion for Everyone</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-4 group cursor-pointer"
                >
                  <Link to={`/products?category=${category.id}`} className="w-24 h-24 rounded-full bg-background shadow-soft flex items-center justify-center text-3xl transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-card">
                    {category.icon}
                  </Link>
                  <span className="font-bold text-sm tracking-tight">{category.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Sellers Sections - Dynamic with API data */}
        <section className="container py-24">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-sm font-bold text-primary tracking-widest uppercase">Popular Choice</span>
              <h2 className="text-4xl font-bold mt-3 tracking-tighter">Current Bestsellers</h2>
            </div>
            <Button variant="outline" className="hidden sm:flex" asChild>
              <Link to="/products" className="font-bold">See All All</Link>
            </Button>
          </div>
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
              <p className="text-muted-foreground animate-pulse">Syncing catalog...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.slice(0, 8).map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </section>

        {/* Editorial Look of the Day */}
        <section className="container py-24">
          <div className="bg-foreground text-background rounded-[40px] overflow-hidden grid lg:grid-cols-2 shadow-elevated">
            <div className="relative aspect-square lg:aspect-auto">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000" className="w-full h-full object-cover" alt="Model" />
              <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl">
                <span className="text-xs font-bold uppercase tracking-widest block opacity-70">Look ID</span>
                <span className="text-lg font-bold">#SPR-2024-001</span>
              </div>
            </div>
            <div className="p-12 md:p-20 flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-bold tracking-[0.3em] uppercase block">Editorial</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter text-white">The Art of <br /> Conscious Layers</h2>
                <p className="text-white/60 text-lg leading-relaxed max-w-md">
                  Discover how to style our organic cotton tees with recycled wool cardigans. A perfect blend for the transitional season.
                </p>
              </div>
              <div className="space-y-6 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-white font-medium opacity-80 group-hover:opacity-100 transition-opacity">1. Organic Oversized Knit</span>
                  <span className="text-white font-bold">$85.00</span>
                </div>
                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-white font-medium opacity-80 group-hover:opacity-100 transition-opacity">2. Recycled Denim Jean</span>
                  <span className="text-white font-bold">$120.00</span>
                </div>
              </div>
              <Button variant="buy" size="xl" className="w-fit px-12 h-16 shadow-lg shadow-primary/20" asChild>
                <Link to="/products">Shop the Look</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-secondary/20 py-24 border-y border-border/50">
          <div className="container">
            <h2 className="text-center text-4xl font-bold mb-16 tracking-tighter">Voices of the Movement</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-background p-10 rounded-3xl shadow-soft border border-border/10 relative">
                  <div className="absolute -top-6 left-10 w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white text-2xl font-serif">“</div>
                  <p className="italic text-muted-foreground leading-relaxed mb-8">"{t.content}"</p>
                  <div className="flex items-center gap-4">
                    <img src={t.avatar} className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" alt={t.name} />
                    <div>
                      <div className="font-bold tracking-tight">{t.name}</div>
                      <div className="text-xs text-primary font-medium">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 text-center">
          <div className="container max-w-4xl space-y-12">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Wear the future.</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join 50,000+ others making the conscious choice. Sign up for 15% off your first order.
              </p>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <input type="email" placeholder="email@example.com" className="flex-1 h-14 rounded-2xl bg-secondary border-transparent px-6 font-medium focus:ring-2 focus:ring-primary outline-none" />
                <Button variant="hero" className="h-14 px-10 font-bold">Join Now</Button>
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Free returns & Carbon neutral shipping</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
