import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../store/posSlice";

const Item = ({ detail }) => {
  const dispatch = useDispatch();
  const deleteItemHandler = () => {
    if (confirm("Remove Item ?")) {
      dispatch(deleteItem({ id: detail.id }));
    }
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
        <Link to={`/item/${detail.id}`}>
          <i className="fa-solid fa-pen-to-square text-sky-500"></i>
        </Link>
        <button onClick={deleteItemHandler} className="mx-2">
          <i className="fa-solid fa-trash text-red-500"></i>
        </button>
      </td>
    </tr>
  );
};

export default Item;
