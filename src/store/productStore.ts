import { create } from 'zustand';
import { Product, products as localProducts } from '../data/products';
import { d as kagDataEncoded } from '../data/kag_data';

const getKaggleProducts = (): Product[] => {
    try {
        return JSON.parse(atob(kagDataEncoded));
    } catch (e) {
        console.error('Failed to decode protected data');
        return [];
    }
};

const kaggleProducts = getKaggleProducts();

interface ProductState {
    products: Product[];
    isLoading: boolean;
    error: string | null;
    fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set, get) => ({
    products: localProducts,
    isLoading: false,
    error: null,
    fetchProducts: async () => {
        // If products are already loaded (more than local), don't fetch again unless needed
        if (get().products.length > localProducts.length) return;

        set({ isLoading: true, error: null });
        try {
            const [dummyRes, fakeStoreRes] = await Promise.all([
                fetch('https://dummyjson.com/products?limit=100').then(res => res.json()),
                fetch('https://fakestoreapiserver.reactbd.org/api/products?page=1&perPage=200').then(res => res.json())
            ]);

            const clothingCategories = [
                'mens-shirts',
                'womens-dresses',
                'tops',
                'mens-shoes',
                'womens-shoes',
                'womens-bags',
                'mens-watches',
                'womens-watches',
                'sunglasses'
            ];

            const dummyProducts: Product[] = dummyRes.products
                .filter((p: any) => clothingCategories.includes(p.category))
                .map((p: any) => ({
                    id: `dummy-${p.id}`,
                    name: p.title,
                    description: p.description,
                    price: p.price,
                    originalPrice: Math.round(p.price / (1 - p.discountPercentage / 100)),
                    category: p.category === 'tops' ? 'tees' :
                        p.category === 'mens-shirts' ? 'tees' :
                            ['womens-dresses', 'womens-bags', 'sunglasses'].includes(p.category) ? 'clothing' : 'clothing',
                    images: p.images,
                    colors: ['#1a1a1a', '#f5f5f5'],
                    sizes: ['S', 'M', 'L', 'XL'],
                    rating: p.rating,
                    reviewCount: Math.floor(Math.random() * 200) + 50,
                    inStock: p.stock > 0,
                    featured: p.rating > 4.5,
                    sustainable: Math.random() > 0.5,
                    tags: p.tags || []
                }));

            const fakeStoreProducts: Product[] = fakeStoreRes.data
                .filter((p: any) => ['men', 'women', 'kids'].includes(p.category.toLowerCase()))
                .map((p: any) => ({
                    id: `fake-${p._id}`,
                    name: p.title,
                    description: p.description,
                    price: p.price,
                    originalPrice: p.oldPrice ? Number(p.oldPrice) : undefined,
                    category: p.category.toLowerCase() === 'men' ? 'tees' :
                        p.category.toLowerCase() === 'women' ? 'clothing' : 'clothing',
                    images: [p.image],
                    colors: p.colors || ['#1a1a1a'],
                    sizes: p.size || ['M', 'L'],
                    rating: p.rating,
                    reviewCount: Math.floor(Math.random() * 100) + 20,
                    inStock: p.stock > 0,
                    featured: p.isNew || false,
                    sustainable: true,
                    tags: [p.type].filter(Boolean)
                }));

            const combined = [...localProducts, ...dummyProducts, ...fakeStoreProducts, ...(kaggleProducts as Product[])];

            // Remove duplicates by ID just in case
            const uniqueProducts = Array.from(new Map(combined.map(p => [p.id, p])).values());

            set({ products: uniqueProducts, isLoading: false });
        } catch (err) {
            console.error('Failed to fetch products:', err);
            set({ error: 'Failed to load external products', isLoading: false });
        }
    }
}));
