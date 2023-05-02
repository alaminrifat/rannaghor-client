import React from "react";

const Recipe = ({chef}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={chef.recipes[0].meal_pic_url}
                        alt="Album"
                        className="w-64 image-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
            <div className="card   lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={chef.recipes[2].meal_pic_url}
                        alt="Album"
                        className="w-64 image-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={chef.recipes[1].meal_pic_url}
                        alt="Album"
                        className="w-64 image-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;
