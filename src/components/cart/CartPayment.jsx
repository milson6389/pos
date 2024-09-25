import { useDispatch, useSelector } from "react-redux";
import Card from "../layout/Card";
import { useState } from "react";
import { clearCart } from "../../store/cartSlice";

const CartPayment = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.carts);
  const total = cartData.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );
  const [custPaid, setCustPaid] = useState();
  const [custReturn, setCustReturn] = useState(0);
  const [showReturn, setShowReturn] = useState(false);

  const validConfirm = Number(custPaid) > Number(total);

  const setCustPaidHandler = (e) => {
    setCustPaid(Number(e.target.value));
    if (!validConfirm) {
      setCustReturn(0);
    }
  };

  const setCustReturnHandler = () => {
    if (validConfirm) {
      setCustReturn(Number(custPaid) - Number(total));
      setShowReturn(true);
    }
  };

  const clear = () => {
    if (confirm("Clear ?")) {
      dispatch(clearCart());
    }
  };

  return (
    <Card className="w-full">
      <h1 className="text-2xl text-center">Payment</h1>
      <div className="flex flex-col mb-3">
        <label htmlFor="total">Total</label>
        <input
          type="text"
          name="total"
          id="total"
          className="border rounded-md p-2"
          value={total}
          disabled
        />
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="total">Customer Paid</label>
        <input
          type="number"
          name="total"
          id="total"
          className="border rounded-md p-2"
          value={custPaid}
          onChange={setCustPaidHandler}
        />
      </div>
      <div className="flex flex-col justify-end mb-3">
        {validConfirm ? (
          <button
            onClick={setCustReturnHandler}
            className="border rounded-md px-2 py-1 w-full bg-emerald-500 text-white"
          >
            Confirm
          </button>
        ) : (
          <button
            disabled
            className="border rounded-md px-2 py-1 w-full bg-emerald-300 text-white"
          >
            Confirm
          </button>
        )}
      </div>
      {validConfirm && showReturn && custReturn > 0 && (
        <>
          <div className="flex flex-col mb-3">
            <label htmlFor="total">Return</label>
            <input
              type="number"
              name="total"
              id="total"
              className="border rounded-md p-2"
              value={custReturn}
              disabled
            />
          </div>
          <button
            onClick={clear}
            className="border rounded-md px-2 py-1 w-full bg-emerald-500 text-white"
          >
            Clear
          </button>
        </>
      )}
    </Card>
  );
};

export default CartPayment;
