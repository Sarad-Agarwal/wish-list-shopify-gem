# 💖 Shopify Wishlist App

A feature-rich embedded Shopify app that adds a **"Save for Later / Wishlist"** feature to a storefront. Built with **Remix + React**, designed to integrate seamlessly with Shopify using the official **Shopify CLI Remix template**.

---

## ✨ Features

* 🛍️ Browse and view products with rich details
* ❤️ Save products to a wishlist for future purchase
* 🛒 Add products to cart with simple UI feedback (dummy action)
* 📃 View all saved products on a dedicated **Wishlist** page
* ❌ Remove items from wishlist anytime
* 🔁 Move items from wishlist to cart (dummy action)
* 🔐 Persistent storage using **session cookies**
* 📱 Responsive design for both mobile and desktop screens
* ✅ Visual feedback for wishlist/cart actions

---

## ⚙️ Setup Steps

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd shopify-wishlist-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Access your app**:
   Open your browser and visit:
   `http://localhost:8080`

---

## 💾 How Wishlist Persistence Works

This app uses **Remix session cookies** to persist wishlist and cart data across routes and sessions:

* When a product is saved, its `id` is added to a `wishlist` cookie (and optionally `cart`).
* Cookies are set with a `max-age=604800` (7 days).
* On app load, cookies are read and decoded to rehydrate the wishlist/cart state.
* Products are rendered dynamically from this stored state.

This gives a **seamless experience without login**, simulating a real-world feature expected from modern storefronts.

---

## 🧱 Implementation Details

* **Remix + React**: Modern stack for full-stack development.
* **Session Cookies**: Cookie-based state persistence with server-side rendering support.
* **React Context API**: Centralized app-wide state for product actions.
* **Tailwind CSS**: Clean and responsive styling.
* **Modular Components**: Organized, reusable UI blocks for products, wishlist, and layout.

---

## ⚠️ Challenges Faced

1. **Understanding OAuth Flow**
   Even though no real API calls were needed, understanding how Shopify's embedded OAuth + `<ShopifyProvider>` works was essential before adding custom logic.

2. **Cookie Handling in Remix**
   Handling cookies in Remix requires a different pattern than typical React apps—middleware, `loader()`, and `action()` had to be correctly structured.

3. **Wishlist State Synchronization**
   Ensuring the UI reflects cookie updates immediately was tricky, especially when mixing server-side logic with React's client-side state.

4. **Dummy vs Real Logic**
   Maintaining dummy "Add to Cart" and "Move to Cart" actions cleanly without confusing real Shopify behavior required clear component separation.

5. **Remix Route Management**
   Extending custom routes (`/wishlist`, `/products`) while maintaining Shopify's embedded app structure inside an iframe took thoughtful routing structure.

---

## 🔮 Future Improvements

1. **Real Shopify Cart Integration**
2. **User Account Sync for Wishlist**
3. **Product Variant Handling (size, color, etc.)**
4. **Wishlist Sharing via links or email**
5. **Stock Status Display**
6. **Recently Viewed Section**
7. **Pagination and Lazy Loading**
8. **Analytics for Wishlist Usage**

---

## 💡 Technologies Used

* **Remix**
* **React**
* **Shopify CLI**
* **Tailwind CSS**
* **React Router**
* **shadcn/ui** – UI components
* **Lucide Icons** – Icon set
* **Session Cookies** – for persistence
