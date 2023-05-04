import React from "react";
import { FaHamburger } from "react-icons/fa";

const TopRecipies = () => {
    return (
        <div>
            <div className="flex items-center justify-center">
                <h1 className="text-4xl mt-16 mb-6 font-bold ">Top Recipe's</h1>
                <FaHamburger className="text-center text-4xl text-red-400 rotate-12"></FaHamburger>
            </div>
            <div className="ml-2 mr-2 lg:ml-0 lg:mr-0 grid grid-cols-1 md:grid-cols-4 my-6 gap-4">
                <div className="relative block overflow-hidden rounded-xl bg-[url(https://i.ibb.co/nb14cwM/koshamangso.jpg)] bg-cover bg-center bg-no-repeat">
                    <div className="absolute inset-0 bg-black/25"></div>

                    <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                        <div className="sm:pt-18 pt-12 text-white lg:pt-24">
                            <h3 className="text-xl font-bold sm:text-2xl">
                                Kosha Mangsho
                            </h3>

                            <p className="text-sm">Mutton</p>
                        </div>

                        <span className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white">
                            4.6
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-yellow-300"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </span>
                    </div>
                </div>

                <div className="relative block overflow-hidden rounded-xl bg-[url(https://i.ibb.co/m0kHRWd/biriyani.jpg)] bg-cover bg-center bg-no-repeat">
                    <div className="absolute inset-0 bg-black/25"></div>

                    <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                        <div className="sm:pt-18 pt-12 text-white lg:pt-24">
                            <h3 className="text-xl font-bold sm:text-2xl">
                                Biriyani
                            </h3>

                            <p className="text-sm">Mutton</p>
                        </div>

                        <span className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white">
                            4.9
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-yellow-300"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="relative block overflow-hidden rounded-xl bg-[url(https://i.ibb.co/Rp1W81X/roufish.png)] bg-cover bg-center bg-no-repeat">
                    <div className="absolute inset-0 bg-black/25"></div>

                    <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                        <div className="sm:pt-18 pt-12 text-white lg:pt-24">
                            <h3 className="text-xl font-bold sm:text-2xl">
                                Rui Macher Jhol
                            </h3>

                            <p className="text-sm">Fish</p>
                        </div>

                        <span className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white">
                            4.8
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-yellow-300"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="relative block overflow-hidden rounded-xl bg-[url(https://i.ibb.co/y5TWMTZ/Kacchi-Biryani.jpg)] bg-cover bg-center bg-no-repeat">
                    <div className="absolute inset-0 bg-black/25"></div>

                    <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                        <div className="sm:pt-18 pt-12 text-white lg:pt-24">
                            <h3 className="text-xl font-bold sm:text-2xl">
                                Kacchi Biriyani
                            </h3>

                            <p className="text-sm">Mutton</p>
                        </div>

                        <span className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white">
                            4.8
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-yellow-300"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopRecipies;
