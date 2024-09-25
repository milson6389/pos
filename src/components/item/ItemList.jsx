import { useSelector } from "react-redux";
import Item from "./Item";

const ItemList = ({ isCart = false }) => {
  const items = useSelector((state) => state.pos.items);

  return (
    <div className="border rounded-md overflow-x-hidden my-5">
      <table className="w-full overflow-x-auto text-center">
        <thead className="bg-black text-white">
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 &&
            items.map((dt) => {
              return <Item key={dt.id} detail={dt} isCart={isCart} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
