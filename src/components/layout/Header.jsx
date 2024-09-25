import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-center items-center my-5">
      <ul className="flex justify-between items-center gap-3">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-emerald-500 rounded-md px-4 py-2 text-white"
                : "bg-white text-emerald-500 hover:bg-emerald-300 hover:text-white rounded-md px-4 py-2"
            }
          >
            Inventory
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cashier"
            className={({ isActive }) =>
              isActive
                ? "bg-emerald-500 rounded-md px-4 py-2 text-white"
                : "bg-white text-emerald-500 hover:bg-emerald-300 hover:text-white rounded-md px-4 py-2"
            }
          >
            Cashier
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
