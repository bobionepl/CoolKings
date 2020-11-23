import React from "react";
import RecipeCard, {savedRecipe} from "../Cards/RecipeCard";
import Spinner from "react-bootstrap/Spinner";
import {Container} from "react-bootstrap";
import styled from "styled-components";
import Newsletter from "../Newsletter";
import Footer from "../Footer";

const Styles = styled.div`
    .header_results {
        padding-top: 150px;   
        display:flex;
        align-items:center;
        justify-content: center;
        border-bottom: 7px solid black;
        
        
        h1 {
            font-family:'Alfa Slab One';
            font-size:4rem;
            font-weight: 800;
            text-align: center;
            }
    }
    .saved_recipes {
            display:flex;
            flex-direction:row;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: -100px;
            
            
           
           .card{
                margin: 10px;
           }
        }

`;


const RecipeBox = () => {


    var savedRecipes = JSON.parse(localStorage.getItem('data'));

    console.log(savedRecipes)
    return (

        !savedRecipes ?
            <Spinner animation="border" role="status"
                     style={{position: "relative", top: "calc(40vh - 1rem)", left: "calc(50vw - 1rem)"}}>
                <span className="sr-only">Loading...</span>
            </Spinner>
            :
            <Styles>
            <Container>
                <div className="header_results">
                    <h1>Your Favorite Recipes</h1>
                </div>
                <div className="saved_recipes" style={{paddingTop: '200px', display: "flex", flexWrap: "wrap"}}>
                    {savedRecipes?.map((result, index) => <RecipeCard className="card" recipe={result.recipe}
                                                                      key={index}/>)}
                </div>

            </Container>
                <Newsletter/>
                <Footer/>
        </Styles>
    )
}

export default RecipeBox;