import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import { CartProvider } from './contexts/CartContext'

function App() {

  return (
    <><CartProvider>
     <Header />
     <Menu />
    </CartProvider>
    </>
  )
}

export default App
