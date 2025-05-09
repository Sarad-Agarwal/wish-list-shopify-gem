
# Shopify Wishlist App

A feature-rich embedded Shopify app that adds a "Save for Later / Wishlist" feature to a storefront. Built with React and designed to integrate with Shopify using the Remix template.

## Features

- Browse and view products with high-quality images
- Save products to a wishlist for later purchase
- Add products to cart with visual feedback
- View all saved products in the wishlist page
- Remove products from the wishlist
- Move products directly from wishlist to cart
- Persistent storage using session cookies
- Visual indicators for wishlist and cart status
- Responsive design for mobile and desktop

## Setup Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd shopify-wishlist-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:8080`

## How Wishlist Persistence Works

This app uses session cookies to persist both the wishlist and cart state across routes and browser sessions:

1. Product IDs are stored in cookies named "wishlist" and "cart"
2. These cookies are set with a 7-day expiration (max-age=604800)
3. When the app loads, it reads these cookies to restore the wishlist and cart state
4. When products are added or removed, the cookies are updated automatically
5. The implementation uses `document.cookie` with proper encoding/decoding

This approach ensures that users' selections persist even if they close their browser and return later, providing a seamless shopping experience without requiring user accounts.

## Implementation Details

- **React Context API**: Manages global state for products, wishlist, and cart
- **Cookie-based persistence**: Maintains state between sessions
- **Responsive UI**: Built with Tailwind CSS for adaptability across devices
- **Component Architecture**: Modular design with reusable components

## Future Improvements

1. **Customer Account Integration**: Synchronize wishlist with Shopify customer accounts
2. **Product Variants**: Add support for selecting product variants (size, color, etc.)
3. **Quantity Control**: Allow users to specify quantities for cart items
4. **Wishlist Sharing**: Enable users to share their wishlists via email or social media
5. **Stock Status**: Show when items are low in stock or unavailable
6. **Recently Viewed**: Track and display recently viewed products
7. **Performance Optimization**: Implement lazy loading for product images
8. **Analytics**: Add tracking to monitor wishlist conversion rates

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Router
- shadcn/ui for UI components
- Lucide Icons
