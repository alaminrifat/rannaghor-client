import React from 'react';
import Slider from '../Slider/Slider';
import ChefData from '../Chef/ChefData';
import TopRecipies from '../TopRecipies/TopRecipies';
import VisitUs from '../Visitus/VisitUs';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <ChefData></ChefData>
            <TopRecipies></TopRecipies>
            <VisitUs></VisitUs>
        </div>
    );
};

export default Home;