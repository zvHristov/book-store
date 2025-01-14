import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { customTheme } from "../customTheme.ts";
import { CartProvider } from './context/CartContext'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
)
