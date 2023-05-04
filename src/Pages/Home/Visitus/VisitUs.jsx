import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Map } from "react-map-gl";
import Swal from "sweetalert2";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const VisitUs = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627,
        },
        zoom: 11,
    };
    const reserved = () => {
        Swal.fire("We wil Contact with you for the reservation");
    };
    return (
        <div>
            <div className="flex items-center justify-center">
                <h1 className="text-4xl mt-16 mb-6 font-bold ">
                    Make a Reservation
                </h1>
                <HiOutlineLocationMarker className="text-center text-4xl text-red-400 rotate-12"></HiOutlineLocationMarker>
            </div>

            <section className="bg-slate-100">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl uppercase">
                            You are always welcome at out place
                        </h2>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            We aim to home-produce as much as possiblefor the
                            best quality, and to reduce food mcious cakes,
                            traditional Devon soups, sauces and
                            accompanimentsion.We aim to home-produce as much as
                            possiblefor the best quality, and to reduce food
                            mcious cakes.
                        </p>
                    </div>

                    <div className="mx-auto mt-8 max-w-xl">
                        <form action="#" className="sm:flex sm:gap-4">
                            <div className="sm:flex-1">
                                <label  className="sr-only">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                                />
                            </div>

                            <button
                                onClick={reserved}
                                className="btn group mt-4 flex w-full items-center justify-center gap-2 border-0 rounded-md bg-red-400 px-5 py-3 text-white transition focus:outline-none focus:ring  sm:mt-0 sm:w-auto hover:bg-red-600"
                            >
                                <span className="text-sm font-medium">Reserve</span>

                                <svg
                                    className="h-5 w-5 rtl:rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VisitUs;
