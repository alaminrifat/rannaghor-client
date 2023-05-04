import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";
import errror_img from '../../../public/404.svg'
const ErrorPage = () => {
    const error = useRouteError();
    const status = useRouteError();
    return (
        <section className="flex items-center h-screen p-16  text-gray-900">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                <img src={errror_img} alt=""  className="w-96 mb-6"/>
                    <Link
                        to="/"
                        className="btn bg-red-500 border-none hover:bg-red-700"
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
