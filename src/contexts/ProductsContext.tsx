
import React, { createContext, useContext, useState, useEffect } from "react";
import { dummyProducts } from "@/data/products";

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
}

interface ProductsContextType {
  products: Product[];
  wishlist: Product[];
  cart: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  moveToCart: (productId: string) => void;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(dummyProducts);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  // Load wishlist from cookies on initial render
  useEffect(() => {
    const savedWishlist = document.cookie
      .split("; ")
      .find(row => row.startsWith("wishlist="));
    
    if (savedWishlist) {
      try {
        const wishlistIds = JSON.parse(decodeURIComponent(savedWishlist.split("=")[1]));
        const savedProducts = products.filter(product => wishlistIds.includes(product.id));
        setWishlist(savedProducts);
      } catch (error) {
        console.error("Error parsing wishlist from cookies:", error);
      }
    }

    // Load cart from cookies
    const savedCart = document.cookie
      .split("; ")
      .find(row => row.startsWith("cart="));
    
    if (savedCart) {
      try {
        const cartIds = JSON.parse(decodeURIComponent(savedCart.split("=")[1]));
        const savedCartProducts = products.filter(product => cartIds.includes(product.id));
        setCart(savedCartProducts);
      } catch (error) {
        console.error("Error parsing cart from cookies:", error);
      }
    }
  }, [products]);

  // Save wishlist to cookies whenever it changes
  useEffect(() => {
    const wishlistIds = wishlist.map(item => item.id);
    document.cookie = `wishlist=${encodeURIComponent(JSON.stringify(wishlistIds))}; path=/; max-age=604800; SameSite=Lax`;
  }, [wishlist]);

  // Save cart to cookies whenever it changes
  useEffect(() => {
    const cartIds = cart.map(item => item.id);
    document.cookie = `cart=${encodeURIComponent(JSON.stringify(cartIds))}; path=/; max-age=604800; SameSite=Lax`;
  }, [cart]);

  const addToWishlist = (product: Product) => {
    setWishlist(prev => {
      if (!prev.some(item => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist(prev => prev.filter(item => item.id !== productId));
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some(item => item.id === productId);
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      if (!prev.some(item => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const moveToCart = (productId: string) => {
    const product = wishlist.find(item => item.id === productId);
    if (product) {
      addToCart(product);
      removeFromWishlist(productId);
    }
  };

  return (
    <ProductsContext.Provider 
      value={{ 
        products, 
        wishlist, 
        cart, 
        addToWishlist, 
        removeFromWishlist, 
        isInWishlist, 
        addToCart, 
        removeFromCart, 
        moveToCart 
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};
