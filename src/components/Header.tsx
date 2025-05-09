
import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "@/contexts/ProductsContext";
import { Bookmark } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const { wishlist } = useProducts();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-indigo-600">
            Shopify Wishlist
          </Link>

          <nav className="flex items-center space-x-4">
            <Link to="/products" className="text-gray-700 hover:text-indigo-600">
              Products
            </Link>
            <Link to="/wishlist" className="flex items-center text-gray-700 hover:text-indigo-600 relative">
              <Bookmark className="w-5 h-5 mr-1" />
              <span>Wishlist</span>
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
