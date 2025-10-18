# Small Shop — React (Context API)

A small e‑commerce / storefront demo built with React that demonstrates using the Context API for global state (cart, products, UI state). This project is intentionally lightweight and focused on showing how to structure components, manage global state with Context + useReducer/useState, and build a responsive shopping UI.

Repository language composition
- JavaScript — 66.5%
- CSS — 30.7%
- HTML — 2.8%

Table of contents
- About
- Features
- Tech stack
- Preview
- Getting started
- Available scripts
- Environment variables (optional)
- Project structure
- State management (Context API)
- Data & assets
- Styling & responsiveness
- Testing (recommended)
- Deployment
- Contributing
- License
- Contact

About
-----
Small Shop is a simple React application demonstrating a small store front: product listing, product details, cart management, and basic checkout flows. The app uses React Context API (and optionally useReducer) for global state instead of heavier state libraries. It's a great starter project for learning Context patterns and building small React apps.

Features
--------
- Product listing and search/filtering (client-side)
- Product detail view with add-to-cart
- Shopping cart with quantity adjustments and removal
- Persistent cart (localStorage) — optional
- Simple mock checkout flow (UI-only)
- Responsive layout for mobile and desktop
- Clean component structure and modular CSS

Tech stack
----------
- React (functional components & hooks)
- JavaScript (ES6+)
- CSS (vanilla CSS; BEM-like or CSS Modules if configured)
- Optional: react-router for routing (single-page navigation)

Preview
-------
Add screenshots or a demo link here after deploying:
- Screenshot examples: /public/screenshots/home.png, /public/screenshots/cart.png

Getting started
---------------
1. Clone the repo
   git clone https://github.com/Mohamedzaiid/small-shop-using-contextApi.git
   cd small-shop-using-contextApi

2. Install dependencies
   npm install
   or
   yarn install

3. Start development server
   npm start
   or
   yarn start

4. Open in browser:
   http://localhost:3000

Available scripts
-----------------
Check package.json for exact scripts; typical scripts:
- npm start — start dev server (create-react-app / Vite)
- npm run build — build production assets
- npm test — run tests (if configured)
- npm run lint — run linter (if configured)
- npm run format — run formatter (Prettier) (if configured)

Environment variables (optional)
--------------------------------
This app is frontend-only by default and may not require env vars. If you connect to an API or third‑party service, add a .env file and prefix variables with REACT_APP_ (for CRA) or follow the Vite env convention.

Example (if you add a backend or analytics):
- REACT_APP_API_URL=https://api.example.com
- REACT_APP_STRIPE_PUBLIC_KEY=pk_test_...

Never commit sensitive keys to the repository.

Project structure (example)
---------------------------
Your project may vary slightly, but a recommended layout:

/public
  index.html
  favicon.ico
  /images
/src
  /assets             # static images, icons
  /components         # UI components (ProductCard, Header, Footer, CartItem)
  /pages              # page-level components (Home, Product, Cart, Checkout)
  /context            # Context providers (CartContext, ProductsContext)
  /hooks              # custom hooks (useLocalStorage, useFetch)
  /reducers           # reducer functions (cartReducer)
  /services           # data fetchers or API wrappers
  /styles             # global styles, variables
  /data               # sample products JSON (if present)
  App.js
  index.js
.gitignore
package.json
README.md

State management (Context API)
------------------------------
This project uses Context API to keep global state simple and idiomatic:

- CartContext (recommended)
  - Provides: cart state, total price, item counts
  - Actions: addToCart(product), removeFromCart(productId), updateQuantity(productId, qty), clearCart()
  - Implementation tip: use useReducer for predictable state transitions

- ProductsContext (optional)
  - Provides product list and filtered results if you centralize product data

- Persist cart to localStorage
  - On initialization, hydrate cart from localStorage
  - On cart updates, persist to localStorage to keep the cart between sessions

Example cart context usage:
```js
const { cart, addToCart, removeFromCart } = useContext(CartContext);
```

Data & assets
-------------
- The repo may include a /src/data/products.json or similar — use that for local product data.
- Replace placeholder images with real product photos for a production-ready demo.
- If you connect to a backend, implement services in /src/services/api.js and update data fetching hooks.

Styling & responsiveness
------------------------
- Layout uses responsive CSS (Flexbox / Grid).
- Keep a small set of CSS variables for colors, spacing, and typography in /src/styles/variables.css.
- Use mobile-first breakpoints and test on multiple viewports.
- Prefer semantic HTML (buttons for actions, form elements for inputs) for accessibility.

Testing (recommended)
---------------------
- Unit tests: Jest + React Testing Library for components and hooks.
- Integration/E2E tests: Cypress or Playwright for flows like add-to-cart and checkout.
- Example test commands:
  npm test

Deployment
----------
- Build:
  npm run build

- Deploy the contents of the build folder to:
  - Vercel, Netlify — suitable for React SPA
  - GitHub Pages (static site)
  - S3 + CloudFront or similar static hosting

If you add a backend, host the frontend and backend separately and set REACT_APP_API_URL accordingly.

Contributing
------------
Contributions are welcome. Suggested workflow:
1. Fork the repository
2. Create a feature branch: git checkout -b feat/your-feature
3. Implement changes and add tests
4. Run linters/tests locally
5. Open a pull request describing your changes

License
-------
Add a LICENSE file to the repo (MIT is a common choice for demos). If no LICENSE exists, include one before publishing widely.

Contact
-------
Author: @Mohamedzaiid  
Open an issue if you find bugs or want to request features.

Notes & next steps
------------------
- Add a .env.example if you integrate external APIs.
- Add unit tests for critical hooks and cart reducer.
- Add a /docs/screenshots folder with images for the README.
