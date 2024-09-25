import { Link } from "react-router-dom";
import Card from "../components/layout/Card";
import ItemList from "../components/item/ItemList";

const Home = () => {
  return (
    <Card>
      <Link
        to="/item"
        className="border rounded-md bg-emerald-500 py-2 px-4 text-white ms-auto"
      >
        Add New Item
      </Link>
      <ItemList />
    </Card>
  );
};

export default Home;
