import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.png";
import TopBar from "./TopBar";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content pt-2">
        <label
          htmlFor="my-drawer-2"
          className="drawer-button lg:hidden flex flex-row-reverse justify-between pr-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
          <img
            className="cursor-pointer"
            onClick={() => navigate("/")}
            src={logo}
            alt="logo"
          />
        </label>
        <TopBar />
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="w-full flex justify-center py-5">
          <img
            className="cursor-pointer"
            onClick={() => navigate("/")}
            src={logo}
            alt="logo"
          />
        </div>
        <ul className="menu pl-11 w-72 min-h-full text-white">
          <li className="font-bold">
            <Link to="">Profile</Link>
          </li>
          <li className="font-bold">
            <Link to="all-products">All Flowers</Link>
          </li>
          <li className="font-bold">
            <Link to="add-product">Add New Flower</Link>
          </li>
          <li className="font-bold">
            <Link to="/">Back to Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
