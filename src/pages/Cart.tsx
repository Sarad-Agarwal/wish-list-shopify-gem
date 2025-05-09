
import React from "react";
import { useProducts } from "@/contexts/ProductsContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Minus, Plus, Trash2 } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Cart = () => {
  const { cart, removeFromCart } = useProducts();

  const handleRemove = (productId: string) => {
    removeFromCart(productId);
    toast({
      title: "Item removed",
      description: "The product has been removed from your cart.",
    });
  };

  const handleCheckout = () => {
    toast({
      title: "Checkout",
      description: "This is a demo app. Checkout functionality is not implemented.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">My Cart</h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-medium text-gray-600 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Browse our products and add items to your cart</p>
            <Link to="/products">
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                Browse Products
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {cart.map((product) => (
              <Card key={product.id} className="overflow-hidden p-4">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/4">
                    <AspectRatio ratio={1} className="bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                  
                  <div className="flex flex-col justify-between p-4 flex-grow">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
                      <p className="text-indigo-600 font-semibold mt-1">${product.price.toFixed(2)}</p>
                      <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <Button 
                        variant="outline"
                        className="text-red-600 border-red-300 hover:bg-red-50"
                        onClick={() => handleRemove(product.id)}
                      >
                        <Trash2 className="mr-1 h-4 w-4" />
                        Remove
                      </Button>
                      
                      <div className="flex items-center">
                        <span className="text-gray-700 mr-2">Quantity: 1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
            
            <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium text-gray-900">Total</span>
                <span className="text-xl font-bold text-indigo-600">
                  ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                </span>
              </div>
              <Button 
                className="w-full mt-4"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
