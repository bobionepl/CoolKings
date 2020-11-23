import React, {useEffect} from "react";
import {Container} from "react-bootstrap";
import RecipeCard from "../Cards/RecipeCard";
import Newsletter from "../Newsletter";
import Footer from "../Footer";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {fetchRecipes} from "../../Redux/actions";
import Spinner from "react-bootstrap/Spinner";


const Styles = styled.div`
    .header_results {
        padding-top: 150px;  
        margin-bottom: 50px;  
        display:flex;
        align-items:center;
        justify-content: center;
        border-bottom: 7px solid black;
        text-align:center;
        
        
        h1 {
            font-family:'Alfa Slab One';
            font-size:3rem;
            font-weight: 800;
            }
    }
    .results {
            display:flex;
            flex-direction:row;
            flex-wrap: wrap;
            justify-content: space-between;
           
           
           .card {
                margin:10px;
           }
        }
`



const WhatToCook = () => {

    const results = useSelector(state => state.recipes.carouselRecipes);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRecipes());

    },[]);


    return (
        !results ?
            <Spinner animation="border" role="status"
                     style={{position:"relative", top:"calc(40vh - 1rem)", left: "calc(50vw - 1rem)"}}>
                <span className="sr-only">Loading...</span>
            </Spinner>
            :
        <Styles>
            <Container >
                <div className="header_results">
                    <h1>What To Cook This Week?</h1>
                </div>
                <div className="results">
                    {results?.map((result, index) => <RecipeCard className="card" recipe={result} key={index}/>)}
                </div>
            </Container>
            <Newsletter/>
            <Footer/>
        </Styles>
    )
}

export default WhatToCook;