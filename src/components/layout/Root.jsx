import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Root = () => {
  return (
    <Fragment>
      <Header />
      <main className="flex justify-center items-center my-10">
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Root;
