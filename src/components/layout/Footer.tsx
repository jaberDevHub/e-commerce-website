import { Link } from 'react-router-dom';
import { Leaf, Instagram, Twitter, Facebook, Shield, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerLinks = {
  shop: [
    { label: 'All Products', href: '/products' },
    { label: 'New Arrivals', href: '/products?filter=new' },
    { label: 'Best Sellers', href: '/products?filter=bestseller' },
    { label: 'Sale', href: '/products?filter=sale' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
  ],
  support: [
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Shipping', href: '/shipping' },
    { label: 'Returns', href: '/returns' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary/50 pt-20 border-t border-border/50">
      <div className="container pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-2 space-y-8">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-hero shadow-soft">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold tracking-tighter">
                Eco<span className="text-primary font-serif italic">Shop</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              We're on a mission to prove that fashion can be both premium and kind to the environment.
              By merging timeless design with organic and recycled materials, we create pieces that last a lifetime—not a season.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-background/50 hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-background/50 hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-background/50 hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Nav Categories */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">Shop</h4>
            <ul className="space-y-4">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">Account</h4>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">My Profile</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Orders</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Track Order</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Wishlist</li>
            </ul>
          </div>

          {/* Trust Badges */}
          <div className="col-span-2 lg:col-span-1 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">Certification</h4>
            <div className="flex flex-wrap gap-4 opacity-40 grayscale hover:grayscale-0 transition-all">
              <div className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center border border-border">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[10px] font-bold">B-CORP</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center border border-border">
                  <RefreshCw className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[10px] font-bold">RECYCLED</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal */}
      <div className="border-t border-border/30 bg-secondary/30">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-muted-foreground/60">
            <span>© 2024 EcoShop Global</span>
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
          </div>

          {/* Payment Icons Placeholder */}
          <div className="flex items-center gap-4 opacity-30 grayscale">
            <div className="w-10 h-6 bg-foreground rounded-sm" />
            <div className="w-10 h-6 bg-foreground rounded-sm" />
            <div className="w-10 h-6 bg-foreground rounded-sm" />
            <div className="w-10 h-6 bg-foreground rounded-sm" />
          </div>
        </div>
      </div>
    </footer>
  );
}
