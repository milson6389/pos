import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/layout/Root";
import Home from "./pages/Home";
import ItemAdd from "./pages/ItemAdd";
import ItemEdit from "./pages/ItemEdit";
import Cashier from "./pages/Cashier";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          index: true,
          element: <Home />,
        },
        {
          path: "/item",
          element: <ItemAdd />,
        },
        {
          path: "/item/:id",
          element: <ItemEdit />,
        },
        {
          path: "/cashier",
          element: <Cashier />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
