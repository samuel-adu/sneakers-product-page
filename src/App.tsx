import Header from './components/Header';
import { CartContextProvider } from './context/CartContext';
import Product from './pages/ProductPage';

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Product />
    </CartContextProvider>
  );
}

export default App;
