import { useRef } from "react";

const ItemSearch = ({ searchItem }) => {
  const search = useRef();

  const onChangeHandler = () => {
    const queries = search.current.value.trim();
    searchItem(queries);
  };

  return (
    <div className="flex items-center relative w-full my-5">
      <input
        type="text"
        className="border rounded-md w-full px-2 py-1"
        placeholder="Search Item"
        onChange={onChangeHandler}
        ref={search}
      />
      <i className="fa-solid fa-magnifying-glass absolute end-2 text-slate-300" />
    </div>
  );
};

export default ItemSearch;
