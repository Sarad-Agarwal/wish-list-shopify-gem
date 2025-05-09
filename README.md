
# Shopify Wishlist App

A minimal embedded Shopify app that adds a "Save for Later / Wishlist" feature to a storefront. Built with React and designed to integrate with Shopify using the Remix template.

## Features

- Browse and view products
- Save products to a wishlist for later
- View all saved products in the wishlist page
- Remove products from the wishlist
- Move products from wishlist to cart

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

This app uses session cookies to persist the wishlist state across routes. When a user adds a product to their wishlist:

1. The product ID is stored in a cookie named "wishlist"
2. This cookie is set with a 7-day expiration (max-age=604800)
3. The cookie is read on initial page load to restore the wishlist state
4. When products are removed from the wishlist, the cookie is updated accordingly

This approach ensures that users' wishlists persist even if they close their browser and return later, providing a seamless shopping experience.

## Future Improvements

The next feature to add would be synchronization with a Shopify customer account. This would allow:

- Wishlist persistence across devices
- Sharing wishlists with friends
- Email notifications when wishlist items go on sale
- Integration with Shopify's customer accounts and login system

This would require setting up a proper database to store user wishlists and integrating with Shopify's authentication system.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Router
- shadcn/ui for UI components

