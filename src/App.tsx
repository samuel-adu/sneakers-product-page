import Header from './components/Header';
import Product from './pages/ProductPage';
import CartModal from './components/CartModal';
import { useCartContext } from '@/hooks/useCartContext';
import { Toaster } from 'react-hot-toast';

function App() {
  const { showCartModal, closeCartModal, openCartModal } = useCartContext();
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
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
