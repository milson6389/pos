import { useDispatch } from "react-redux";
import { deleteCartItem, updateCartItem } from "../../store/cartSlice";

const CartItem = ({ detail }) => {
  const dispatch = useDispatch();
  const removeItem = () => {
    if (confirm("Remove Item from Cart ?")) {
      dispatch(deleteCartItem({ id: detail.item_id }));
    }
  };
  const addItem = () => {
    dispatch(updateCartItem({ id: detail.item_id, qty: 1 }));
  };
  const returnItem = () => {
    dispatch(updateCartItem({ id: detail.item_id, qty: -1 }));
  };

  return (
    <div className="flex justify-between items-center py-4 px-1 border rounded-md">
      <h1 className="text-sm">
        {detail.quantity} x {detail.name}
        <span className="text-red-500"> @${detail.price}</span>
      </h1>
      <div className="flex gap-2">
        <button onClick={returnItem} className="border rounded-md p-1 w-1/3">
          -
        </button>
        <button onClick={addItem} className="border rounded-md p-1 w-1/3">
          +
        </button>
        <button onClick={removeItem} className="border rounded-md p-1 w-1/3">
          <i className="fas fa-trash text-red-500"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
