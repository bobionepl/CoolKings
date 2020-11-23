import React, {useRef, useState} from "react";
import {Card, Container} from "react-bootstrap"
import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import "../style.css";
import {faHamburger, faFish, faSeedling, faDrumstickBite, faPizzaSlice, faBaby, faBacon, faChartPie} from '@fortawesome/free-solid-svg-icons'
import {Link, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {searchByProducts} from "../../Redux/actions";

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
            
            h1 {
                font-size:4rem;
                font-weight: 800;
                font-family:'Alfa Slab One';
            }
       }
       
   .card-container {
        display:flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: center;
        margin:30px;
   }
       
       .category-card {
            width: 200px;
            height: 200px;
            background-color: #eb812e;
            margin: 20px;
            display:flex;
            align-items:center;
            transition: all .2s ease-in-out;
            
            &:hover {
                transform: scale(1.1);
                box-shadow: 0 0 12px rgba(0, 0, 0, 0.6);
                cursor: pointer;
            }
       }
        
        .fas {
            margin:auto;
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere iure nisi quidem quo quod vero.</p>
                </div>
                <div className="card-container">
                    <Card className="category-card" value="fish" onClick={handleClick}>
                        <i className="fas fa-fish">{fish}</i>
                        <Card.Title value="fish">Fish</Card.Title>
                    </Card>
                    <Card className="category-card" value="burgers" onClick={handleClick}>
                        <i className="fas fa-hamburger">{hamburger}</i>
                        <Card.Title>Burgers</Card.Title>
                    </Card>
                    <Card className="category-card" value="chicken" onClick={handleClick}>
                        <i className="fas fa-chicken">{chicken}</i>
                        <Card.Title>Chicken</Card.Title>
                    </Card>
                    <Card className="category-card" value="vegetarian" onClick={handleClick}>
                        <i className="fas fa-vege">{vege}</i>
                        <Card.Title>Vege</Card.Title>
                    </Card>
                    <Card className="category-card" value="pizza" onClick={handleClick}>
                        <i className="fas fa-pizza">{pizza}</i>
                        <Card.Title>Pizza</Card.Title>
                    </Card>
                    <Card className="category-card" value="soup" onClick={handleClick}>
                        <i className="fas fa-soup">{soup}</i>
                        <Card.Title>Soup</Card.Title>
                    </Card>
                    <Card className="category-card" value="steak" onClick={handleClick}>
                        <i className="fas fa-steak">{steak}</i>
                        <Card.Title>Steaks</Card.Title>
                    </Card>
                    <Card className="category-card" value="pie" onClick={handleClick}>
                        <i className="fas fa-pie">{pie}</i>
                        <Card.Title>Cakes</Card.Title>
                    </Card>
                </div>
            </Container>
        </Styles>
    )
};

export default Category;


