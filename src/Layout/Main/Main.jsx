import React from "react";
import Navbar from "../../Pages/Shared/Header/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import { FadeLoader } from "react-spinners";
const Main = () => {
    const navigation = useNavigation();
    return (
        <div className="min-h-screen flex flex-col container mx-auto">
            <Navbar />
            <main className="flex-grow">
                <div>
                    {navigation.state === "loading" ? (
                        <FadeLoader color="#36d7b7" />
                    ) : (
                        ""
                    )}
                </div>
                <Outlet />
            </main>
            <Footer className="absolute bottom-0 w-full" />
        </div>
    );
};

export default Main;
