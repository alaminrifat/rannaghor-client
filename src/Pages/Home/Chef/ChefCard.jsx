import React from "react";
import { FaHeart } from "react-icons/fa";

const ChefCard = ({ chef }) => {
    const { name, chef_pic_url, years_of_experience, num_recpies, likes } =
        chef;
    console.log(name);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={chef_pic_url} alt="Chef" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-lg"><span className="text-error font-semibold" >{years_of_experience}+</span> Years of Experience</p>
                    <p className="text-lg"><span className="text-error font-semibold">{num_recpies}</span>  Exciting recipes</p>
                    <div className="flex items-center justify-around mt-10">
                        <div className="flex items-center text-2xl gap-2 ">
                            <FaHeart className="text-red-400"></FaHeart>
                            {likes}
                        </div>
                        <div>
                            <button className="btn rounded-full btn-error text-white ms-28">
                                See Recipes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;
