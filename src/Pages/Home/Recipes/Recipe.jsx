import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import Rating from "react-rating";
import Swal from "sweetalert2";
import RecipeCard from "./RecipeCard";

const Recipe = ({ chef }) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const recipes = chef.recipes;
    const handleFav = () => {
        Swal.fire(
            "Favourite?",
            "This item added to your favourite.",
            "success"
        );
        setIsDisabled(true);
    };

    return (
        <>
            {/* Banner */}
            <div>
                <section className="bg-gray-50">
                    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:py-28 lg:items-center">
                        <div className="mx-auto max-w-xl text-center">
                            <div className="avatar">
                                <div className="w-64 rounded-full shadow-xl border-4 border-red-400">
                                    <img src={chef.chef_pic_url} />
                                </div>
                            </div>
                            <h1 className="text-3xl font-extrabold sm:text-5xl">
                                {chef.name}
                            </h1>
                            <p className="mt-4 font-bold sm:text-xl/relaxed">
                                {chef.years_of_experience}+ Years of Experience
                            </p>
                            <div className="flex justify-evenly">
                                <p className="mt-1 sm:text-xl/relaxed flex items-center gap-2">
                                    <FaHeart className="text-red-400"></FaHeart>
                                    {chef.likes}
                                </p>
                                <p className="mt-1 sm:text-xl/relaxed">
                                    <strong>{chef.num_recpies}</strong> exciting
                                    recipes
                                </p>
                            </div>

                            <p className="mt-2 sm:text-xl/relaxed">
                                {chef.bio}
                            </p>

                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                {/* some */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* banner end */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/*  */}

                {recipes.map((recipe) => (
                    <RecipeCard recipe={recipe} key={recipe.name}></RecipeCard>
                ))}
            </div>
        </>
    );
};

export default Recipe;
