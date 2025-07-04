import { create } from 'zustand';

const useStore = create((set) => ({
    count: 0,
    products: [],

    increment: () => set((state) => ({ count: state.count + 1})),
    decrement: () => set((state) => ({ count: state.count - 1})),
    reset: () => set({ count: 0 }),
    addProduct: (productId) => 
        set((state) => ({ products: [...state.products, productId]})),
}));

export default useStore;