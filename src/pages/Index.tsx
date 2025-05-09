
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Shopify Wishlist App
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            A simple and elegant way to save your favorite products for later.
            Browse our products and create your personalized wishlist.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/products">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md text-lg">
                Browse Products
              </Button>
            </Link>
            <Link to="/wishlist">
              <Button variant="outline" className="px-6 py-3 rounded-md text-lg">
                View Wishlist
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Save Your Favorites</h3>
            <p className="text-gray-600">
              Found something you love? Save it to your wishlist with a simple click and 
              come back to it anytime.
            </p>
          </Card>
          <Card className="p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Move to Cart</h3>
            <p className="text-gray-600">
              Ready to purchase? Easily move items from your wishlist to your shopping
              cart when you're ready to buy.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
