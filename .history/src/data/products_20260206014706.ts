export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  images: string[];
  colors: string[];
  sizes: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured: boolean;
  sustainable: boolean;
  tags: string[];
}

export const categories = [
  { id: 'all', name: 'All Products', icon: '🌿' },
  { id: 'tees', name: 'T-Shirts', icon: '👕' },
  { id: 'hoodies', name: 'Hoodies', icon: '🧥' },
  { id: 'pants', name: 'Pants', icon: '👖' },
  { id: 'accessories', name: 'Accessories', icon: '🎒' },
  { id: 'clothing', name: 'Clothing Items', icon: '👗' },
  { id: 'panjabi', name: 'Panjabi', icon: '🥻' },
];

export const products: Product[] = [
  {
    id: 'eco-classic-tee',
    name: 'EcoClassic Organic Tee',
    description: 'Made from 100% organic cotton, this classic tee combines comfort with sustainability. Soft, breathable, and perfect for everyday wear.',
    price: 45,
    originalPrice: 55,
    category: 'tees',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800',
    ],
    colors: ['#1a1a1a', '#f5f5f5', '#2d5016', '#8b4513'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.8,
    reviewCount: 342,
    inStock: true,
    featured: true,
    sustainable: true,
    tags: ['bestseller', 'organic'],
  },
  {
    id: 'hemp-blend-hoodie',
    name: 'Hemp Blend Comfort Hoodie',
    description: 'Our signature hoodie crafted from hemp-cotton blend. Incredibly soft, naturally antimicrobial, and gets softer with every wash.',
    price: 89,
    category: 'hoodies',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800',
    ],
    colors: ['#2d3436', '#dfe6e9', '#00b894', '#6c5ce7'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    rating: 4.9,
    reviewCount: 189,
    inStock: true,
    featured: true,
    sustainable: true,
    tags: ['new', 'hemp'],
  },
  {
    id: 'recycled-joggers',
    name: 'Recycled Ocean Joggers',
    description: 'Made from recycled ocean plastics, these joggers are as comfortable as they are eco-conscious. Tapered fit with elastic cuffs.',
    price: 75,
    originalPrice: 85,
    category: 'pants',
    images: [
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800',
    ],
    colors: ['#2c3e50', '#34495e', '#16a085'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.7,
    reviewCount: 256,
    inStock: true,
    featured: true,
    sustainable: true,
    tags: ['recycled', 'ocean-friendly'],
  },
  {
    id: 'bamboo-crew-tee',
    name: 'Bamboo Crew Neck',
    description: 'Ultra-soft bamboo fabric that regulates temperature naturally. Perfect for sensitive skin and all-day comfort.',
    price: 52,
    category: 'tees',
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800',
    ],
    colors: ['#ecf0f1', '#2c3e50', '#27ae60', '#e74c3c'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    rating: 4.6,
    reviewCount: 128,
    inStock: true,
    featured: false,
    sustainable: true,
    tags: ['bamboo', 'hypoallergenic'],
  },
  {
    id: 'organic-zip-hoodie',
    name: 'Organic Zip-Up Hoodie',
    description: 'Full-zip organic cotton hoodie with a modern fit. Features recycled metal zipper and kangaroo pocket.',
    price: 95,
    category: 'hoodies',
    images: [
      'https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=800',
      'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=800',
    ],
    colors: ['#1a1a1a', '#bdc3c7', '#2980b9'],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.8,
    reviewCount: 97,
    inStock: true,
    featured: false,
    sustainable: true,
    tags: ['organic', 'zip-up'],
  },
  {
    id: 'cork-sneakers',
    name: 'Cork & Cotton Sneakers',
    description: 'Innovative sneakers with cork soles and organic cotton uppers. Naturally water-resistant and incredibly lightweight.',
    price: 125,
    originalPrice: 145,
    category: 'footwear',
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
    ],
    colors: ['#d4a373', '#264653', '#2a9d8f'],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    rating: 4.9,
    reviewCount: 203,
    inStock: true,
    featured: true,
    sustainable: true,
    tags: ['cork', 'bestseller'],
  },
  {
    id: 'hemp-cap',
    name: 'Hemp Baseball Cap',
    description: 'Classic cap made from durable hemp fabric. Adjustable strap with recycled brass buckle.',
    price: 32,
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800',
      'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800',
    ],
    colors: ['#2d3436', '#00b894', '#fdcb6e'],
    sizes: ['One Size'],
    rating: 4.5,
    reviewCount: 76,
    inStock: true,
    featured: false,
    sustainable: true,
    tags: ['hemp', 'unisex'],
  },
  {
    id: 'recycled-backpack',
    name: 'Recycled Adventure Pack',
    description: '25L backpack made from 100% recycled materials. Waterproof coating, laptop sleeve, and lifetime warranty.',
    price: 110,
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
      'https://images.unsplash.com/photo-1581605405669-fcdf81165b5c?w=800',
    ],
    colors: ['#2c3e50', '#16a085', '#e67e22'],
    sizes: ['One Size'],
    rating: 4.8,
    reviewCount: 154,
    inStock: true,
    featured: true,
    sustainable: true,
    tags: ['recycled', 'waterproof'],
  },
  {
    id: 'linen-pants',
    name: 'Organic Linen Trousers',
    description: 'Breathable linen pants perfect for warm weather. Relaxed fit with drawstring waist.',
    price: 85,
    category: 'pants',
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800',
    ],
    colors: ['#f5f5dc', '#2c3e50', '#7f8c8d'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    featured: false,
    sustainable: true,
    tags: ['linen', 'summer'],
  },
  {
    id: 'wool-beanie',
    name: 'Merino Wool Beanie',
    description: 'Ethically sourced merino wool beanie. Naturally temperature-regulating and itch-free.',
    price: 38,
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800',
      'https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?w=800',
    ],
    colors: ['#2d3436', '#636e72', '#00b894', '#d63031'],
    sizes: ['One Size'],
    rating: 4.7,
    reviewCount: 112,
    inStock: true,
    featured: false,
    sustainable: true,
    tags: ['wool', 'winter'],
  },
  {
    id: 'tencel-dress-shirt',
    name: 'Tencel Dress Shirt',
    description: 'Silky smooth TENCEL™ fabric made from eucalyptus. Wrinkle-resistant and perfect for work or weekends.',
    price: 78,
    category: 'tees',
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800',
    ],
    colors: ['#ecf0f1', '#3498db', '#2c3e50'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    rating: 4.8,
    reviewCount: 67,
    inStock: true,
    featured: false,
    sustainable: true,
    tags: ['tencel', 'formal'],
  },
  {
    id: 'eco-trail-runners',
    name: 'EcoTrail Running Shoes',
    description: 'Performance trail runners with algae-based foam and recycled mesh upper. Grip meets sustainability.',
    price: 145,
    category: 'footwear',
    images: [
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800',
      'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800',
    ],
    colors: ['#2d3436', '#00b894', '#fdcb6e'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    rating: 4.9,
    reviewCount: 178,
    inStock: true,
    featured: true,
    sustainable: true,
    tags: ['running', 'performance'],
  },
  {
    id: 'organic-cotton-jacket',
    name: 'Organic Cotton Bomber Jacket',
    description: 'Classic bomber jacket crafted from GOTS-certified organic cotton. Features recycled zipper and ribbed cuffs for a perfect fit.',
    price: 120,
    originalPrice: 150,
    category: 'clothing',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800',
      'https://images.unsplash.com/photo-1551488852-0801756acb50?w=800',
    ],
    colors: ['#2d3436', '#f5f5f5', '#8e44ad'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
    featured: true,
    sustainable: true,
    tags: ['bomber', 'organic'],
  },
  {
    id: 'hemp-overall-shorts',
    name: 'Hemp Canvas Overall Shorts',
    description: 'Durable overall shorts made from tough hemp canvas. Adjustable straps and multiple pockets for functionality.',
    price: 68,
    category: 'clothing',
    images: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800',
    ],
    colors: ['#d4a373', '#2c3e50', '#16a085'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.5,
    reviewCount: 45,
    inStock: true,
    featured: false,
    sustainable: true,
    tags: ['hemp', 'casual'],
  },
  {
    id: 'bamboo-yoga-set',
    name: 'Bamboo Yoga Ensemble',
    description: 'Complete yoga set including top and leggings made from silky bamboo viscose. Four-way stretch for maximum flexibility.',
    price: 85,
    originalPrice: 100,
    category: 'clothing',
    images: [
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800',
    ],
    colors: ['#2c3e50', '#e74c3c', '#9b59b6'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    featured: true,
    sustainable: true,
    tags: ['yoga', 'bamboo'],
  },
  {
    id: 'recycled-denim-shirt',
    name: 'Upcycled Denim Shirt',
    description: 'Handcrafted shirt made from upcycled vintage denim. Each piece is unique with natural variations in color and texture.',
    price: 75,
    category: 'clothing',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800',
    ],
    colors: ['#5d6d7e', '#3498db', '#1a5276'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    rating: 4.6,
    reviewCount: 78,
    inStock: true,
    featured: false,
    sustainable: true,
    tags: ['upcycled', 'denim'],
  },
  {
    id: 'tencel-wrap-dress',
    name: 'Tencel Wrap Dress',
    description: 'Elegant wrap dress made from sustainable TENCEL™ lyocell. Flattering silhouette with adjustable tie waist.',
    price: 95,
    category: 'clothing',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800',
    ],
    colors: ['#e74c3c', '#2c3e50', '#f39c12'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.9,
    reviewCount: 112,
    inStock: true,
    featured: true,
    sustainable: true,
    tags: ['tencel', 'elegant'],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter((product) => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};
