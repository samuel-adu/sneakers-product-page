import Header from './components/Header';
import Product from './pages/ProductPage';
import CartModal from './components/CartModal';
import { useCartContext } from '@/hooks/useCartContext';

function App() {
  const { showCartModal, closeCartModal, openCartModal } = useCartContext();
  return (
    <>
      <CartModal isOpen={showCartModal} onClose={closeCartModal} />
      <Header
        showCartModal={showCartModal}
        closeCartModal={closeCartModal}
        openCartModal={openCartModal}
      />
      <Product />
    </>
  );
}

export default App;
