import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </CartProvider>
    </ThemeProvider>
  )
}
