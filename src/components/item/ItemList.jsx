import { useSelector } from "react-redux";
import Item from "./Item";

const ItemList = ({ search = "" }) => {
  const items = useSelector((state) => state.pos.items);

  return (
    <table className="border w-full overflow-x-auto text-center my-5">
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
            return <Item key={dt.id} detail={dt} />;
          })}
      </tbody>
    </table>
  );
};

export default ItemList;
