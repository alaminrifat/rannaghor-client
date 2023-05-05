import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

import Rating from "react-rating";
import Swal from "sweetalert2";

const RecipeCard = ({ recipe }) => {
    // console.log("data ", recipe);
    const [isDisabled, setIsDisabled] = useState(false);
    // const recipes = chef.recipes;
    const handleFav = () => {
        Swal.fire(
            "Favourite?",
            "This item added to your favourite.",
            "success"
        );
        setIsDisabled(true);
    };
    return (
        <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
            <img
                alt="Home"
                src={recipe.meal_pic_url}
                className="h-96 w-full rounded-md object-cover"
            />

            <div className="mt-2">
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
                        <button
                            className="btn p-4 btn-error"
                            onClick={handleFav}
                            disabled={isDisabled}
                        >
                            <FaHeart className="text-white text-md"> </FaHeart>
                        </button>
                    </div>
                </div>

                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 mt-4">
                    <b>Ingredients :</b>
                    {recipe.ingredients.map((i) => (
                        <p className="capitalize " key={i.name}>
                            {i},{" "}
                        </p>
                    ))}
                    etc.
                </div>

                <div className="mt-2">
                    <b>Cooking Method: </b>
                    {recipe.cooking_method}
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
