import React, {useRef, useState} from "react";
import {Card, Container} from "react-bootstrap"
import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {searchByProducts} from "../../Redux/actions";
import "../style.css";
import {
    faHamburger,
    faFish,
    faSeedling,
    faDrumstickBite,
    faPizzaSlice,
    faBaby,
    faBacon,
    faChartPie
}
from '@fortawesome/free-solid-svg-icons'
import burger from "../../assets/burgercat.png";
import fishcat from "../../assets/fishcat.png";
import chickencat from "../../assets/chicken.png";
import steakcat from "../../assets/steakcat.png";
import cakecat from "../../assets/cakescat.png";
import soupcat from "../../assets/soup.png";
import vegecat from "../../assets/vegecat.png";
import pizzacat from "../../assets/pizzacat.png";

const hamburger = <FontAwesomeIcon icon={faHamburger} size="8x"/>
const chicken = <FontAwesomeIcon icon={faDrumstickBite} size="8x"/>
const fish = <FontAwesomeIcon icon={faFish} size="8x"/>
const vege = <FontAwesomeIcon icon={faSeedling} size="8x"/>
const pizza = <FontAwesomeIcon icon={faPizzaSlice} size="8x"/>
const soup = <FontAwesomeIcon icon={faBaby} size="8x"/>
const steak = <FontAwesomeIcon icon={faBacon} size="8x"/>
const pie = <FontAwesomeIcon icon={faChartPie} size="8x"/>

const Styles = styled.div`
       .header-name {
            text-align: center;
            border-bottom: 7px solid black;
            margin-bottom: 30px;
            
            h1 {
                font-size:4rem;
                font-weight: 800;
                font-family:'Alfa Slab One';
            }
       }
       
   .container {
       
       margin-bottom: 30px;
   }
       
   .card-container {
        width: 100%;
        display:flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: center;
        }
        .box {
            position:relative;
            width: 250px;
            height: 500px;
            transition: .5s;
            background-color: #ccc;
            
                &:hover{
                    transform: scale(1.1);
                    z-index: 1;
                    box-shadow: 0 5px 20px rgba(0,0,0,1);
                }
            }
            
            .box:nth-child(odd) .thumb{
                bottom: 0;
                left: 0;
            }
            
           .thumb {
                position: absolute;
                width: 100%;
                height: 250px;
                overflow:hidden;
                }
                
                .img-thumb {
                    width: 100%;
                    height: 250px;
                }
           

                .details {
                    position: absolute;
                    width: 100%;
                    height: 250px;
                    overflow: hidden;
                    background: #333;
                }
                   .category-card {
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 100%;
                        padding:20px;
                        box-sizing: border-box;
                        text-align: center;
                        transition: .5s;
                   }
               
               
            
       
       
       .box:nth-child(even) .details{
            bottom: 0;
            left:0;  
        
       }
       .box:nth-child(1) .details{
            background: #316a70;
       }
       .box:nth-child(2) .details{
            background: #DC7E3B;
       }
       .box:nth-child(3) .details{
            background: #0C1D28;
       }
       .box:nth-child(4) .details{
            background: #A36D2C;
       }
       .box:nth-child(5) .details{
            background: #4C4686;
       }
       .box:nth-child(6) .details{
            background: #6B90AD;
       }
       .box:nth-child(7) .details{
            background: #5e0000;
       }
       .box:nth-child(8) .details{
            background: #3C334B;
       }
       
        .fas {
            margin:auto;
            color: #fff;
        }
        .title {
            margin: 0;
            padding: 0;
            padding: 10px 0;
            color: #fff;
        }
        .btn {
            display: inline-block;
            padding: 5px 20px;
            color: #fff;
            border: 2px solid #fff;
            text-decoration: none;
            transition: .5s;
            border-radius: 20px;
            transform: scale(0);
            
            &:hover {
                background: #fff;
                color: #262626;
            }
        }
        
        .box:hover .details .btn {
            transform: scale(1);
        }
        
            @media (max-width: 1200px){
                .card-container{
                    width: 100%;
                    height: auto;
                    padding: 20px;
                    box-sizing: border-box;
                }   
                .box {
                    height: 250px;
                
                }
                .thumb {
                    display: none;
                }
            }
            
            @media (max-width: 768px){
                .card-container{
                    display: initial;
                }   
                
                .box {
                    width: 50%;
                    height: 250px;
                    float: left; 
                }
            }
            @media (max-width: 480px){
                .card-container{
                    top: 0;
                    left: 0;
                    transform: translate(0);
                }   
                
                .box {
                    width: 100%;
                    height: 250px;
                    float: none; 
                }
            }
`;

const Category = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = (e) => {
        console.log(e.target.attributes.value.value)
        dispatch(searchByProducts(e.target.attributes.value.value));
        history.push(`/results/${e.target.attributes.value.value}`);
    };

    return (
        <Styles>
            <Container>
                <div className="header-name">
                    <h1>Recipes By Category</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere iure nisi quidem quo quod
                        vero.</p>
                </div>
                <div className="container">
                    <div className="card-container">
                        <div className="box">
                            <div className="thumb">
                                <img src={fishcat} className="img-thumb" alt=""/>
                            </div>
                            <div className="details">
                                <Card className="category-card details" >
                                    <i className="fas fa-fish">{fish}</i>
                                    <Card.Title className="title" value="fish">Fish</Card.Title>
                                    <a onClick={handleClick} className="btn" value="fish">show</a>
                                </Card>
                            </div>

                        </div>
                        <div className="box">
                            <div className="thumb">
                                <img src={burger} className="img-thumb" alt=""/>
                            </div>
                            <div className="details" >
                                <Card className="category-card details" >
                                    <i className="fas fa-hamburger">{hamburger}</i>
                                    <Card.Title className="title">Burgers</Card.Title>
                                    <a onClick={handleClick} className="btn" value="burgers">show</a>
                                </Card>
                            </div>
                        </div>
                        <div className="box">
                            <div className="thumb">
                                <img src={chickencat} className="img-thumb" alt=""/>
                            </div>
                            <div className="details">
                                <Card className="category-card details" >
                                    <i className="fas fa-chicken">{chicken}</i>
                                    <Card.Title className="title">Chicken</Card.Title>
                                    <a onClick={handleClick} className="btn" value="chicken">show</a>

                                </Card>
                            </div>

                        </div>
                        <div className="box">
                            <div className="thumb">
                                <img src={vegecat} className="img-thumb" alt=""/>
                            </div>
                            <div className="details">

                                <Card className="category-card details" >
                                    <i className="fas fa-vege">{vege}</i>
                                    <Card.Title className="title">Vege</Card.Title>
                                    <a onClick={handleClick} className="btn" value="vegetarian">show</a>
                                </Card>
                            </div>

                        </div>
                        <div className="box">
                            <div className="thumb">
                                <img src={pizzacat} className="img-thumb" alt=""/>
                            </div>
                            <div className="details">
                                <Card className="category-card details" >
                                    <i className="fas fa-pizza">{pizza}</i>
                                    <Card.Title className="title">Pizza</Card.Title>
                                    <a onClick={handleClick} className="btn" value="pizza">show</a>
                                </Card>
                            </div>

                        </div>
                        <div className="box">
                            <div className="thumb">
                                <img src={soupcat} className="img-thumb" alt=""/>
                            </div>
                            <div className="details">

                                <Card className="category-card details" >
                                    <i className="fas fa-soup">{soup}</i>
                                    <Card.Title className="title">Soup</Card.Title>
                                    <a onClick={handleClick} className="btn" value="soup">show</a>
                                </Card>
                            </div>

                        </div>
                        <div className="box">
                            <div className="thumb">
                                <img src={steakcat} className="img-thumb" alt=""/>
                            </div>
                            <div className="details">

                                <Card className="category-card details">
                                    <i className="fas fa-steak">{steak}</i>
                                    <Card.Title className="title">Steaks</Card.Title>
                                    <a onClick={handleClick} className="btn" value="steak">show</a>
                                </Card>
                            </div>
                        </div>
                        <div className="box">
                            <div className="thumb">
                                <img src={cakecat} className="img-thumb" alt=""/>
                            </div>
                            <div className="details">
                                <Card className="category-card details" >
                                    <i className="fas fa-pie">{pie}</i>
                                    <Card.Title className="title">Cakes</Card.Title>
                                    <a onClick={handleClick} className="btn" value="pie">show</a>

                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Styles>
    )
};

export default Category;


