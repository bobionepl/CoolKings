import React from "react";
import Jumbotron from "./Jumbotron";
import Category from "./Category";
import RecipeCarousel from "./RecipeCarousel";
import VideoCarousel from "./VideoCarousel";
import Newsletter from "../Newsletter";
import Footer from "../Footer";
const Home = () => {

    return (
        <div style={{background:"#f2f3ef"}}>
            <Jumbotron />
            <RecipeCarousel />
            <Category />
            <VideoCarousel />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home;