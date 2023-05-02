import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Recipes = () => {
    const { id } = useParams();
    const chef = useLoaderData();
    return (
        <div>
            {/* Banner - chef picture, chef name, a short bio/description, likes, number of recipes, and years of experience. */}
            {id}
            {
                console.log(chef.bio)
            }
        </div>
    );
};

export default Recipes;