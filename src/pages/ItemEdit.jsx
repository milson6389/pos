import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/layout/Card";

const ItemEdit = () => {
  const data = useLoaderData();
  const [itemName, setItemName] = useState(data?.name);
  const [itemImg, setItemImg] = useState(data?.image);
  const [price, setPrice] = useState(data?.price);

  const setItemNameHandler = (e) => {
    e.preventDefault();
    setItemName(e.target.value);
  };

  const setItemImgHandler = (e) => {
    e.preventDefault();
    setItemImg(e.target.value);
  };

  const setPriceHandler = (e) => {
    e.preventDefault();
    setPrice(Number(e.target.value));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card>
      <h1 className="text-2xl font-bold text-center mb-3">Edit Item</h1>
      <form onSubmit={formSubmitHandler}>
        <div className="flex flex-col mb-3 w-full">
          <label htmlFor="item">Item Name</label>
          <input
            value={itemName}
            onChange={setItemNameHandler}
            type="text"
            name="item"
            id="item"
            className="border rounded-md p-1"
          />
        </div>
        <div className="flex flex-col mb-3 w-full">
          <label htmlFor="image">Image Link</label>
          <input
            value={itemImg}
            onChange={setItemImgHandler}
            type="text"
            name="image"
            id="image"
            className="border rounded-md p-1"
          />
        </div>
        <div className="flex flex-col mb-3 w-full">
          <label htmlFor="price">Price</label>
          <input
            value={price}
            onChange={setPriceHandler}
            type="number"
            name="price"
            id="price"
            className="border rounded-md p-1"
          />
        </div>
        <div className="flex justify-end mb-3 w-full">
          <button className="border rounded-md px-2 py-1 w-full bg-emerald-500 text-white">
            Save
          </button>
        </div>
      </form>
    </Card>
  );
};

export default ItemEdit;
