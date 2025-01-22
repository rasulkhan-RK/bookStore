/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Login from "./register/Login";
import { useAuth } from "./context/AuthProvider";
import Logout from "./register/Logout";

function Navbar() {
  const navItems = (
    <>
      <li>
        <a href="/">Home </a>
      </li>

      <li>
        <a href="/course">Course </a>
      </li>

      <li>
        <a href="/contact">Contact </a>
      </li>

      <li>
        <a href="/about">About </a>
      </li>
    </>
  );
  const [sticky, setSticky] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  //Local useContexct-API
  const [authUser, setAuthUser] = useAuth();

  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  // Handle navbar Sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`container max-w-screen-2xl z-10 mx-auto md:px-20 px-4 bg-white dark:bg-slate-900 dark:text-white  text-black  ${
          sticky
            ? "sticky top-0 left-0 right-0 dark:bg-slate-500 dark:text-white shadow-md bg-base-200 duration-300 transition-all ease-in-out"
            : ""
        } `}
      >
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu menu-sm dropdown-content bg-black text-white  dark:bg-slate-100 dark:text-black w-52 rounded-box z-[1] mt-3  p-2 shadow"
              >
                {navItems}
              </ul>
            </div>
            <a className=" text-l md:text-2xl font-bold cursor-pointer">
              Book Store
            </a>
          </div>
          <div className="navbar-end space-x-4">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>
            <div className="hidden md:block ">
              <label className=" border px-3 py-2 rounded-md flex items-center gap-2">
                <input
                  type="text"
                  className="grow outline-none bg-transparent "
                  placeholder="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <div>
              <label className="grid cursor-pointer place-items-center">
                <input
                  type="checkbox"
                  value="synthwave"
                  className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
                />
                <svg
                  className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <svg
                  className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
            </div>

            {authUser ? (
              <Logout authUser={authUser} setAuthUser={setAuthUser} />
            ) : (
              <div>
                <a
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  className="bg-black text-white hover:bg-slate-700 duration-300 cursor-pointer px-3 py-2 rounded-md"
                >
                  Login
                </a>
                {<Login />}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
