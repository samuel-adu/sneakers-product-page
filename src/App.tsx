import Header from './components/Header';

import Product from './components/Product';
import { useState } from 'react';

function App() {
  const [quantity, setQuantity] = useState<number>(0);
  return (
    <>
      <Header count={quantity} />
      <Product count={quantity} setCount={setQuantity} />
    </>
  );
}

export default App;
