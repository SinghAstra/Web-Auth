import React from "react";
import { Link } from "react-router-dom";

const Drawer = () => {
  return (
    <div className="drawer-side ">
      <label
        htmlFor="my-drawer-4"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="menu p-4 w-96 min-h-full bg-base-200 text-base-content flex justify-between flex-col ">
        <ul>
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
        <div className="flex gap-2 w-full">
          <Link
            className="py-2 flex-1 hover:bg-stone-700 hover:bg-opacity-50 font-medium rounded-md transition ease-in-out delay-50 flex items-center justify-center"
            to={"/login"}
          >
            Sign in
          </Link>
          <Link
            className="py-2 flex-1 hover:bg-teal-800 bg-teal-950 rounded-md font-medium flex items-center justify-center"
            to={"/register"}
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Drawer;