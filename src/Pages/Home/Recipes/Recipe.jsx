import React from "react";
import { FaHeart } from "react-icons/fa";
import Rating from "react-rating";

const Recipe = ({ chef }) => {
    const recipes = chef.recipes;

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
                                <a
                                    className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                                    href="/get-started"
                                >
                                    Get Started
                                </a>

                                <a
                                    className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                                    href="/about"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* banner end */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/*  */}

                {recipes.map((recipe) => {
                    return (
                        <div class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                            <img
                                alt="Home"
                                src={recipe.meal_pic_url}
                                class="h-96 w-full rounded-md object-cover"
                            />

                            <div class="mt-2">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div>
                                            <p className="mt-4 font-bold sm:text-xl/relaxed">
                                                {recipe.name}
                                            </p>
                                        </div>

                                        <div>
                                            <p>
                                                <Rating
                                                    placeholderRating={Math.floor(
                                                        recipe.ratings
                                                    )}
                                                    emptySymbol={
                                                        <img
                                                            src="https://i.ibb.co/4gg8hGs/star-grey.png"
                                                            className="icon"
                                                        />
                                                    }
                                                    placeholderSymbol={
                                                        <img
                                                            src="https://i.ibb.co/MPXh9zS/star-red.png"
                                                            className="icon"
                                                        />
                                                    }
                                                    fullSymbol={
                                                        <img
                                                            src="https://i.ibb.co/DWkDR7C/star-yellow.png"
                                                            className="icon"
                                                        />
                                                    }
                                                    readonly
                                                />
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <button className="btn p-4 btn-error">
                                            <FaHeart className="text-white text-md">
                                                {" "}
                                            </FaHeart>
                                        </button>
                                    </div>
                                </div>

                                <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 mt-4">
                                    <b>Ingredients :</b>
                                    {recipe.ingredients.map((i) => (
                                        <p className="capitalize " key={i.name}>{i}, </p>
                                    ))}
                                    etc.
                                </div>

                                <div className="mt-2"><b>Cooking Method: </b>{recipe.cooking_method}</div>
                            </div>
                        </div>
                    );
                })}

                {/*  */}
            </div>
        </>
    );
};

export default Recipe;
