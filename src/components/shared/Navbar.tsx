import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import Loading from "./Loading";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const [signOut, sLoading] = useSignOut(auth);

  if (loading || sLoading) {
    return <Loading />;
  }
  return (
    <div className="navbar bg-transparent container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-white w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="shop">Shop</Link>
            </li>
            <li>
              <Link to="blog">Blog</Link>
            </li>
            <li>
              <Link to="about-us">About us</Link>
            </li>
            <li>
              <Link to="contact-us">Contact us</Link>
            </li>
          </ul>
        </div>
        <img
          className="cursor-pointer"
          onClick={() => navigate("/")}
          src={logo}
          alt="logo"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="blog">Blog</Link>
          </li>
          <li>
            <Link to="about-us">About us</Link>
          </li>
          <li>
            <Link to="contact-us">Contact us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <button
            onClick={async () => {
              const success = await signOut();
              if (success) {
                alert("You are sign out");
                localStorage.removeItem("token");
              }
            }}
            className="btn"
          >
            Logout
          </button>
        ) : (
          <button className="btn">Login</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
