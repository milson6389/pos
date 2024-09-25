import { Link } from "react-router-dom";
import Card from "../components/layout/Card";
import ItemList from "../components/item/ItemList";
import { useSelector } from "react-redux";

const Home = () => {
  const itemCount = useSelector((state) => state.pos.items).length;
  return (
    <Card>
      <Link
        to="/item"
        className="border rounded-md bg-emerald-500 py-2 px-4 text-white ms-auto"
      >
        Add New Item
      </Link>
      {itemCount > 0 && <ItemList />}
    </Card>
  );
};

export default Home;
