import React from "react";
import logo from "./../../../../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        < >
            <div className="navbar bg-base-150">
                <div className="flex-1">
                    <div className="w-16 rounded-full">
                        <img src={logo} />
                    </div>
                    <a className="btn btn-ghost normal-case text-xl font-cursive">RannaGhor</a>
                </div>
                <div className="flex-none">
                <ul class="menu menu-horizontal px-1">
                    <li><Link>Home</Link></li>
                    <li><Link>Home</Link></li>
                    <li><Link>Home</Link></li>
                </ul>
                    <div className="dropdown dropdown-end">
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
