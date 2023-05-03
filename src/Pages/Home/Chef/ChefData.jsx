import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";
import { TbChefHat } from "react-icons/tb";
const ChefData = () => {
    const [chef, setChef] = useState([]);

    useEffect(() => {
        fetch("https://chef-recipe-hunter-server-alaminrifat.vercel.app/chef")
            .then((res) => res.json())
            .then((data) => setChef(data));
    }, []);

    return (
        <>
            <div className="flex items-center justify-center">
                <h1 className="text-4xl mt-16 mb-6 font-bold ">
                    Top Chef's
                </h1>
                <TbChefHat className="text-center text-4xl text-red-400 rotate-12"></TbChefHat>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 my-10 ">
                {chef.map((c) => (
                    <ChefCard key={c.key} chef={c}>
                        {c.name}
                    </ChefCard>
                ))}
            </div>
        </>
    );
};

export default ChefData;
