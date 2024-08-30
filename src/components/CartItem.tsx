import { FaTrashCan } from 'react-icons/fa6';
import { useCartContext } from '@/hooks/useCartContext';
import toast from 'react-hot-toast';

type CartItemProps = {
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
};

function CartItem({ item }: CartItemProps) {
  const { removeFromCart } = useCartContext();

  function deleteItemFromCart() {
    removeFromCart(item.id);
    toast.error('item removed from cart');
  }

  return (
    <div className="cart-item flex items-center justify-between gap-4 w-full">
      <img src={item.image} alt="" width={50} height={50} className="rounded" />

      <div>
        <p className="base-text">{item.name}</p>
        <div className="flex gap-2">
          <p className="base-text">
            ${item.price.toFixed(2)} x {item.quantity}
          </p>
          <p className="total-cost">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>

      <button
        aria-label="delete item"
        className="delete-btn"
        onClick={deleteItemFromCart}
      >
        <FaTrashCan />
      </button>
    </div>
  );
}

export default CartItem;
