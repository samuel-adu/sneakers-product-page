import '../styles/quantity.css';
import minus from '../assets/icons/icon-minus.svg';
import plus from '../assets/icons/icon-plus.svg';

type QuantityProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

function Quantity({ count, setCount }: QuantityProps) {
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  return (
    <div className="quantity-tab">
      <button onClick={decrement}>
        <img src={minus} alt="" />
      </button>

      <p>{count}</p>

      <button onClick={increment}>
        <img src={plus} alt="" />
      </button>
    </div>
  );
}

export default Quantity;
