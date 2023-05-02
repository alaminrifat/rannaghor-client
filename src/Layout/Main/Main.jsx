import React from "react";
import Navbar from "../../Pages/Shared/Header/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="min-h-screen flex flex-col container mx-auto">
            <Navbar  />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer className="absolute bottom-0 w-full" />
        </div>
    );
};

export default Main;
