import { useSelector } from "react-redux";

import Card from "../components/layout/Card";
import Cart from "../components/cart/Cart";
import ItemList from "../components/item/ItemList";

const Cashier = () => {
  const cartData = useSelector((state) => state.cart.carts);
  return (
    <Card>
      <div className="flex flex-col">
        <ItemList isCart={true} />
        {cartData.length > 0 && <Cart />}
      </div>
    </Card>
  );
};

export default Cashier;
