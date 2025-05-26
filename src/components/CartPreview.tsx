import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPreview = () => {
  const { showPreview, lastAdded, closePreview } = useCart();

  if (!showPreview || !lastAdded) return null;

  return (
    <div
      className="fixed top-6 right-0 z-50 transition-transform duration-300"
      style={{
        transform: showPreview ? "translateX(0)" : "translateX(110%)",
        minWidth: 260,
        maxWidth: 340,
      }}
    >
      <div className="bg-[#F4F5F7] border-l-4 border-[#B88E2F] rounded-l-xl shadow-xl p-4 flex items-center gap-4">
        <img
          src={lastAdded.image}
          alt={lastAdded.name}
          className="w-16 h-16 object-cover rounded-lg border border-[#B88E2F]"
        />
        <div className="flex-1">
          <div className="font-bold text-[#333333] text-base">
            {lastAdded.name}
          </div>
          <div className="text-[#666666] text-sm">
            Price: ${lastAdded.price}
          </div>
          <div className="text-[#666666] text-sm">
            Quantity: {lastAdded.quantity}
          </div>
        </div>
        <button
          onClick={closePreview}
          className="text-[#B88E2F] font-bold text-xl px-2 hover:text-[#333333] transition"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
      <div className="flex justify-end mt-2 pr-2">
        <Link
          to="/cart"
          className="text-[#B88E2F] text-sm font-semibold border border-[#B88E2F] px-3 py-1 rounded hover:bg-[#B88E2F] hover:text-white transition"
          onClick={closePreview}
        >
          Go to Cart
        </Link>
      </div>
    </div>
  );
};

export default CartPreview;
