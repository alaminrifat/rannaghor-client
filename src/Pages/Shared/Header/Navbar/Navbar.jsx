import React from "react";
import logo from "./../../../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100 mb-2 border-b-2 border-red-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/blog"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to={"/"}>
                            <div className="w-16 rounded-full">
                                <img src={logo} />
                            </div>
                        </Link>
                        <Link
                            to={"/"}
                            className="normal-case text-3xl font-cursive text-red-400"
                        >
                            RannaGhor
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-10 px-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Blog
                            </NavLink>
                        </li>
                        {/* conditional Rendaring */}
                        <li>
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="invisible lg:navbar-end  lg:visible">
                    <div className="avatar placeholder">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                            <span>P</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
