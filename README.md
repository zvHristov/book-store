
# Project Title
Book store
## Acknowledgements

This is a simple React application for an online bookstore that allows users to browse available books, add books to a shopping cart, and update their profile. The application uses Chakra UI for styling and Context API for managing the cart state.

## Key Technical Choices

- **React**: Used React for building the user interface.
- **Chakra UI**: Utilized Chakra UI library for quick and easy styling of components.
- **Context API**: Implemented Context API for managing the cart state, allowing global access to `addToCart` and `removeFromCart` functions.
- **TypeScript**: The application is written in TypeScript, providing static typing and improved code safety.

## Features

- **Book Browsing**: Users can browse a list of available books with search functionality by title or author.
- **Add to Cart**: Users can add books to their shopping cart.
- **User Profile**: Users can update their information (first name, last name, email).
- **Shopping Cart**: The cart is always visible and displays added books along with the total price.

## Unimplemented Features

- **Payment System**: Currently, there is no integration with a payment system.
- **Inventory Management**: There is no logic implemented for managing book stock when added to the cart.
- **Testing**: Unit and integration tests are not included.

## Trade-offs

During the development of the application, the following trade-offs were made:

- We chose not to implement complex inventory management due to time constraints.
- Additionally, tests were not added as the primary focus was on functionality.

## How to Run the Application

1. Clone the repository:

2. Install dependencies:

```bash
  npm install
```

3. Start the application:

```bash
  npm run dev
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
