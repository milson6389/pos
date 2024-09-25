import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Card from "../layout/Card";

const CartList = () => {
  const cartData = useSelector((state) => state.cart.carts);
  return (
    <Card className="w-full">
      <h1 className="text-2xl text-center">List Item</h1>
      <ul className="my-5 flex flex-col gap-3">
        {cartData.map((dt) => {
          return <CartItem key={dt.id} detail={dt} />;
        })}
      </ul>
    </Card>
  );
};

export default CartList;
