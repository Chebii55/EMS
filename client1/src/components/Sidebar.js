import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`absolute bg-gray-800 text-white w-56 min-h-screen overflow-y-auto transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ease-in-out duration-300`}
    >
      <div className="p-4">
        <h1 className="text-2xl font-semibold">...</h1>
        <ul className="mt-4">
          <li className="mb-2">
            <Link to="/dashboard" className="block hover:text-indigo-400">
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/payroll" className="block hover:text-indigo-400">
              Payroll
            </Link>
          </li>
          <li className="mb-2">
            <Link to="#" className="block hover:text-indigo-400">
              Leave
            </Link>
          </li>
          <li className="mb-2">
            <Link to="#" className="block hover:text-indigo-400">
              Performance Statement
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
