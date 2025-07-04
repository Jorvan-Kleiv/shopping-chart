# T-Shirt E-Commerce Application

A modern, e-commerce web application built with Vue 3 and TypeScript, focused on selling t-shirts from various brands.

<!-- Add a screenshot of your application here:
![T-Shirt E-Commerce Application](./public/app-screenshot.png)
-->

## Features

- **Product Catalog**: Browse through a collection of t-shirts from popular brands
- **Shopping Cart**: Add products to cart, view cart items, and see total amount
- **Persistent Cart**: Cart data is saved between sessions
- **Responsive Design**: Built with TailwindCSS for a responsive and modern UI

## Technologies Used

- **Vue 3**: Progressive JavaScript framework
- **TypeScript**: For type safety and better developer experience
- **Pinia**: State management with persistence
- **Vue Router**: For navigation
- **TailwindCSS**: Utility-first CSS framework
- **Vite**: Next generation frontend tooling
- **Vitest**: Unit testing framework

## Prerequisites

- Node.js (v14.0 or higher)
- npm (v6.0 or higher)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/jorvan-kleiv/shopping-chart.git
   cd shopping-chart
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

### Development

Run the development server:
```sh
npm run dev
```

This will start the development server at `http://localhost:3000` (or another port if 5173 is already in use).

### Building for Production

Compile and minify for production:
```sh
npm run build
```

### Preview Production Build

Preview the production build:
```sh
npm run preview
```


## Project Structure

```
chart-ecom/
├── public/             # Public static assets
├── src/
│   ├── assets/         # Assets like images, fonts, and global CSS
│   ├── components/     # Reusable Vue components
│   │   ├── CartItem.vue    # Shopping cart item component
│   │   ├── Drawer.vue      # Sliding drawer component for cart
│   │   ├── Header.vue      # Application header with navigation
│   │   └── ProductCard.vue # Product display card
│   ├── router/         # Vue Router configuration
│   ├── stores/         # Pinia stores
│   │   ├── cart.ts     # Shopping cart state management
│   │   └── global.ts   # Global application state
│   ├── views/          # Page components
│   │   └── HomeView.vue # Main product listing page
│   ├── App.vue         # Root component
│   └── main.ts         # Application entry point
├── index.html          # HTML entry point
└── package.json        # Project dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons provided by [Lucide](https://lucide.dev/)
- UI inspiration from modern e-commerce platforms

## Link of the project

- Visit the official [Shopping chart Application](https://myshopping-chart.vercel.app/) here