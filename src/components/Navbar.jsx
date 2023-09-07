import React from "react";
import { Link } from "react-router-dom";
import signInGooglePopUp from "../lib/auth/withGoogle";
import signOut from "../lib/auth/signOut";

const navigationLocations = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Review",
    path: "/review",
  },
  {
    name: "Take Quiz",
    path: "/quiz",
  },
];
import image from "./EROV_LOGO.png";
export default function Navbar({ loggedIn }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="sticky top-0 flex flex-wrap items-center justify-between px-2 py-1 bg-blue-600 mb-3 shadow-lg">
        <div className="container w-full px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-1 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              <img src={image} height={"100px"} className="w-12"/>
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex items-center w-full lg:w-auto" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto w-full">
              {navigationLocations.map(({ name, path }) => (
                <Link
                  key={`nav_${name}`}
                  to={path}
                  className="px-3 py-1 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <span className="ml-2">{name}</span>
                </Link>
              ))}

              <li className="text-right ml-10">
                {loggedIn ? (
                  <>
                    <span className="text-white text-xs mr-5">
                      {loggedIn.email}
                    </span>
                    <button
                      onClick={signOut}
                      className="text-blue-700 bg-white p-2 rounded-md text-xs uppercase font-bold leading-snug"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {window.location.href = "/login"}}
                    className="text-blue-700 bg-white p-2 rounded-md text-xs uppercase font-bold leading-snug"
                  >
                    Login
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
