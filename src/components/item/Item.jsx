import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../store/posSlice";
import { addCartItem } from "../../store/cartSlice";

const Item = ({ detail, isCart = false }) => {
  const dispatch = useDispatch();
  const deleteItemHandler = () => {
    if (confirm("Remove Item ?")) {
      dispatch(deleteItem({ id: detail.id }));
    }
  };
  const addToCartHandler = () => {
    dispatch(
      addCartItem({
        id: detail.id,
        name: detail.name,
        price: detail.price,
      })
    );
  };
  return (
    <tr className="border hover:bg-slate-200">
      <td>{detail.id}</td>
      <td>{detail.name}</td>
      <td>
        <img className="w-[50px]" src={detail.image} alt={detail.name} />
      </td>
      <td>{detail.price}</td>
      <td>
        {isCart ? (
          <button
            onClick={addToCartHandler}
            className="border rounded-md p-1 bg-emerald-500 text-white"
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        ) : (
          <>
            <Link to={`/item/${detail.id}`}>
              <i className="fa-solid fa-pen-to-square text-sky-500"></i>
            </Link>
            <button onClick={deleteItemHandler} className="mx-2">
              <i className="fa-solid fa-trash text-red-500"></i>
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default Item;
