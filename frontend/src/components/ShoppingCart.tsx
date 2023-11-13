import { type ReactNode } from 'react';

interface ShoppingCartProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ show, onClose, children }: ShoppingCartProps) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={onClose} className='font-bold'>Close</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
