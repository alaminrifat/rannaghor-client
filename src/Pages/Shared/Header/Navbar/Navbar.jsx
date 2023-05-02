import React from "react";
import logo from "./../../../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-150">
                <div className="flex-1">
                    <Link to={'/'}>
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
                <div className="flex-none">
                    <ul className="flex gap-6 px-1 text-lg ">
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
                    <div className="dropdown dropdown-end ms-6">
                        <div className="w-10 rounded-full">
                            <img src={logo} />
                            {/* TODO: add user profile logo  */}
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default Navbar;
