import { motion } from 'framer-motion';
import { Leaf, Users, Globe, Award, Heart, Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSheet } from '@/components/cart/CartSheet';

const values = [
  {
    icon: Leaf,
    title: 'Sustainability First',
    description: 'Every decision we make starts with the planet. From materials to manufacturing, we minimize our environmental footprint.',
  },
  {
    icon: Users,
    title: 'Ethical Production',
    description: 'We partner with factories that pay fair wages, provide safe conditions, and treat workers with dignity and respect.',
  },
  {
    icon: Globe,
    title: 'Carbon Neutral',
    description: "We offset 100% of our carbon emissions through verified reforestation projects around the world.",
  },
  {
    icon: Recycle,
    title: 'Circular Economy',
    description: "Our products are designed to last, and when they are done, we will take them back and recycle them responsibly.",
  },
];

const milestones = [
  { year: '2019', title: 'Founded', description: 'Started in a small garage with a big dream' },
  { year: '2020', title: 'First Collection', description: 'Launched our organic cotton basics line' },
  { year: '2021', title: 'B-Corp Certified', description: 'Became a certified B Corporation' },
  { year: '2022', title: '100K Customers', description: 'Reached 100,000 happy customers' },
  { year: '2023', title: 'Carbon Neutral', description: 'Achieved full carbon neutrality' },
  { year: '2024', title: '2M Trees Planted', description: 'One purchase = one tree planted' },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CartSheet />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-secondary">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="container py-20 md:py-32 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Our Story
              </div>
              <h1 className="mb-6">
                Fashion That{' '}
                <span className="text-gradient">Does Good</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We believe the clothes you wear should feel as good on your conscience 
                as they do on your body. That's why we've dedicated ourselves to creating 
                sustainable fashion that doesn't compromise on style, quality, or the planet.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="container py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-primary uppercase tracking-widest">Our Mission</span>
              <h2 className="mt-2 mb-6">
                Clothing the World, Sustainably
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At EcoShop, we're on a mission to prove that sustainable fashion can be 
                beautiful, affordable, and accessible to everyone. We work with the most 
                innovative eco-friendly materials—from organic cotton and hemp to recycled 
                ocean plastics—to create clothing that looks great and feels even better.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every piece we make is designed to last for years, not seasons. When fashion 
                is made to endure, it's better for your wallet and better for our planet.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800"
                  alt="Sustainable fashion workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-background shadow-card max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center">
                    <Award className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold">B-Corp Certified</div>
                    <div className="text-sm text-muted-foreground">Top 5% globally</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-secondary py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-sm font-medium text-primary uppercase tracking-widest">Our Values</span>
              <h2 className="mt-2">What We Stand For</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background rounded-2xl p-6 shadow-soft"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="container py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Our Journey</span>
            <h2 className="mt-2">Milestones Along the Way</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1 md:text-right">
                    {index % 2 === 0 && (
                      <div className="bg-secondary rounded-2xl p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                        <h4 className="font-semibold mb-1">{milestone.title}</h4>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="hidden md:flex items-center justify-center w-4">
                    <div className="w-4 h-4 rounded-full bg-primary" />
                  </div>
                  <div className="flex-1">
                    {index % 2 !== 0 && (
                      <div className="bg-secondary rounded-2xl p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                        <h4 className="font-semibold mb-1">{milestone.title}</h4>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 md:p-16 text-center"
          >
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-primary-foreground mb-4">
                Join the Movement
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Every purchase you make supports sustainable practices and plants a tree. 
                Together, we can make fashion a force for good.
              </p>
              <Button variant="buy" size="xl" asChild>
                <Link to="/products">Shop Now</Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
