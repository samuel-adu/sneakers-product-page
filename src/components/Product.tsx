import '../styles/product.css';
import Quantity from './Quantity';
import Carousel from './Carousel';
import Button from './Button';

type ProductProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

function Product({ count, setCount }: ProductProps) {
  return (
    <main>
      <div className="container">
        <div className="product-page">
          <Carousel />

          <div>
            <h1 className="company-name">sneaker company</h1>
            <h2 className="product-name">fall limited edition sneakers</h2>
            <p className="product-desc">
              These low-profile sneakers are perfect casual wear companion.
              Featuring a durable rubber outter sole, they'll withstand
              everything the weather can offer.
            </p>

            <div className="price-tab">
              <div className="new-price">
                <p className="price">$125.00</p>
                <p className="discount">50%</p>
              </div>
              <p className="old-price">$250.00</p>
            </div>

            <div className="add-to-cart-tab">
              <Quantity count={count} setCount={setCount} />
              <Button />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Product;
