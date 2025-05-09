
import React from "react";
import { useProducts } from "@/contexts/ProductsContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Bookmark, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Products = () => {
  const { products, addToWishlist, isInWishlist, addToCart } = useProducts();

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: "This product has been added to your cart.",
    });
  };

  const handleSaveForLater = (product: any) => {
    addToWishlist(product);
    toast({
      title: "Saved for later",
      description: "This product has been added to your wishlist.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Our Products</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden flex flex-col h-full">
              <div className="relative">
                <AspectRatio ratio={4/3} className="bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </AspectRatio>
                {isInWishlist(product.id) && (
                  <div className="absolute top-2 right-2">
                    <Bookmark className="text-indigo-600 fill-indigo-600 h-6 w-6" />
                  </div>
                )}
              </div>
              
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-lg font-medium text-gray-900 mb-1">{product.title}</h3>
                <p className="text-indigo-600 font-semibold mb-3">${product.price.toFixed(2)}</p>
                <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">{product.description}</p>
                
                <div className="flex space-x-2 mt-auto">
                  <Button 
                    className="flex-1"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="mr-1 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button 
                    variant={isInWishlist(product.id) ? "outline" : "secondary"}
                    className="flex-1"
                    onClick={() => handleSaveForLater(product)}
                    disabled={isInWishlist(product.id)}
                  >
                    {isInWishlist(product.id) ? "Saved" : "Save for Later"}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
