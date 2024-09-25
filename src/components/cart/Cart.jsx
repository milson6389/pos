import CartList from "./CartList";
import ItemList from "../item/ItemList";
import CartPayment from "./CartPayment";

const Cart = () => {
  return (
    <div>
      <CartList />
      <CartPayment />
    </div>
  );
};

export default Cart;
