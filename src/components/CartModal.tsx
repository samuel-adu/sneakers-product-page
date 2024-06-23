import Cart from './Cart';

type CartModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function CartModal({ isOpen, onClose }: CartModalProps) {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        onClick={(event) => event.stopPropagation()}
        className="modal-content"
      >
        <div className="modal-header">
          <h3 className="font-bold">Cart</h3>
        </div>
        <div className="modal-main">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default CartModal;
