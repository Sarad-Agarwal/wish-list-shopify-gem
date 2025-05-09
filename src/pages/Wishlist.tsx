
import React from "react";
import { useProducts } from "@/contexts/ProductsContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { ShoppingCart, Trash2 } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useProducts();

  const handleRemove = (productId: string) => {
    removeFromWishlist(productId);
    toast({
      title: "Item removed",
      description: "The product has been removed from your wishlist.",
    });
  };

  const handleMoveToCart = (product: any) => {
    addToCart(product);
    removeFromWishlist(product.id);
    toast({
      title: "Moved to cart",
      description: "The product has been moved to your cart.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">My Wishlist</h1>
        
        {wishlist.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-medium text-gray-600 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-6">Save items you'd like to purchase later</p>
            <Link to="/products">
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                Browse Products
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((product) => (
              <Card key={product.id} className="overflow-hidden flex flex-col h-full">
                <div className="relative">
                  <AspectRatio ratio={4/3} className="bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </AspectRatio>
                </div>
                
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">{product.title}</h3>
                  <p className="text-indigo-600 font-semibold mb-3">${product.price.toFixed(2)}</p>
                  <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">{product.description}</p>
                  
                  <div className="flex space-x-2 mt-auto">
                    <Button 
                      variant="default"
                      className="flex-1"
                      onClick={() => handleMoveToCart(product)}
                    >
                      <ShoppingCart className="mr-1 h-4 w-4" />
                      Move to Cart
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 text-red-600 border-red-300 hover:bg-red-50"
                      onClick={() => handleRemove(product.id)}
                    >
                      <Trash2 className="mr-1 h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Wishlist;
