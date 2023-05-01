import React from "react";
import Navbar from "../../Pages/Shared/Header/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
