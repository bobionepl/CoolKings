import React, {useEffect, useState} from "react";
import RecipeCard from "../Cards/RecipeCard";
import {Container} from "react-bootstrap"
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../style.css"
import {useDispatch, useSelector} from "react-redux";
import { fetchRecipes, chooseRecipe } from "../../Redux/actions";

const Styles = styled.div`

        .container{
            margin-bottom:10vh;
        }
        
        .header-name {
            text-align: center;
            border-bottom: 7px solid black;
            padding: 10vh 0 30px;
            margin-bottom: 10px;
            
             h1{
                font-family: 'Alfa Slab One';
                font-weight: 700;
                }
        }
        
       .slick-arrow {
             height:20px;  
             color:pink;
       
       }

        .sc-dlnjPT {
        display: flex;
        justify-content: center;
        }
        
        @media (max-width: 480px) {
            .recipe_card.card {
               
            }
            
            .sc-dlfnbm.jwVnuF {
                display:flex;
                justify-content: center;
            }
        
        }
`

function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "none",

            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "none",

            }}
            onClick={onClick}
        />
    );
}


const RecipeCarousel = () => {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    nextArrow: <SampleNextArrow/>,
                    prevArrow: <SamplePrevArrow/>,
                }
            }
        ]
    };
    //
    const recipes = useSelector(state => state.recipes.carouselRecipes);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRecipes());

    },[]);



    return (
        <Styles>
            <Container>
                <div className="header-name clearfix">
                    <h1>What To Cook This Week</h1>
                </div>
                <h3>CoolKing Suggestion's</h3>
                <p>Recipes selected throughout the week by CoolKing</p>
                <Slider {...settings} className="slider">
                    {recipes?.map((recipe,index) => <RecipeCard recipe={recipe} key={index}/>)}
                </Slider>
            </Container>
        </Styles>

    )
};


export default RecipeCarousel;
