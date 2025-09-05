import { create } from 'zustand';
import { IProduct } from '~/api';

interface State {
  products: IProduct[];
  setProducts: (prods: State["products"]) => void
}

export const useProductStore = create<State>((set) => ({
  products: [],
  setProducts: (products) => set(() => ({ products })),
}));
