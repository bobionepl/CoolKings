import React from "react";
import VideoCard from "../Cards/VideoCard";
import {Container} from "react-bootstrap"
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../style.css"

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
`

const VideoCarousel = () => {


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
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <Styles>
            <Container>
                <div className="header-name clearfix">
                </div>
                <h3>How To Basic</h3>
                <p>Our guides offer recipes, videos, techniques and tips for novices and advanced cooks.</p>
                <Slider {...settings} className="slider">
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                </Slider>
            </Container>
        </Styles>

    )
};


export default VideoCarousel;