import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipe from './Recipe';

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
            {/* Recipe */}
            <Recipe chef={chef}></Recipe>
        </div>
    );
};

export default Recipes;