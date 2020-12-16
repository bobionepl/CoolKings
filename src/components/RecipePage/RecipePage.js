import React from "react";
import styled from "styled-components";
import {Container} from "react-bootstrap";
import "../style.css";
import {useSelector} from "react-redux";
import Newsletter from "../Newsletter";
import Footer from "../Footer";
import Spinner from "react-bootstrap/Spinner";
import "../../css/checkedBox.css"

const Styles = styled.div`

 
    .header {
        padding-top: 100px;
        
        h1{
            font-family: 'Playfair Display', serif;
            margin-bottom: 30px;
        }
        
        .span {
            font-family: 'Alfa Slab One';
            font-size: 0.8rem;
        }
    }
    
    .recipe_info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;     
        padding-bottom: 50px;
        border-bottom: 4px solid black;
           
        .recipe_img {
            height: 400px;
            width: 600px;
            margin-bottom: 20px;
        }
    }
    .recipe_instruction_box {
        display: flex;
        margin-bottom: 40px;
        justify-content:space-between;
        
        .recipe_ingredients { 
            width: 30%;
        }
        
        .recipe_instruction {
            width: 65%;
            
            .inst_list {
                counter-increment: steps;
                list-style-type: none;
                
                &:before{
                    content: "Step " counter(steps);
                    margin-right: 0.5rem;
                    color: #eb812e;
                }
            }
        }
    }
    .small_header {
        font-family: 'Playfair Display', serif;
        font-size: 19px;
    }
    
    @media (max-width: 480px) {
    
        .recipe_info {
            .recipe_img {
                height: 250px;
                width: 100%;
            }
        }
        
        .recipe_instruction_box .recipe_ingredients li {
            font-size: 15px;
        }
        
        .recipe_instruction_box .recipe_instruction li {
            font-size: 15p;
        }
    }
`;


const RecipePage = () => {

    const recipe = useSelector(state => state.recipes.idRecipes);

    return (
        !recipe ?
            <Spinner animation="border" role="status"
                     style={{position:"relative", top:"calc(40vh - 1rem)", left: "calc(50vw - 1rem)"}}>
                <span className="sr-only">Loading...</span>
            </Spinner>
            :
            <Styles>
                <Container className="container">
                    <header className="header">
                        <div>
                            <h1>{recipe.title}</h1>
                        </div>
                        <div>
                            <p><span className="span">YIELD  </span> {recipe.servings} servings </p>
                            <p><span className="span">TIME  </span> {recipe.readyInMinutes} minutes</p>
                        </div>
                    </header>
                    <div className="recipe_info">
                        <img src={recipe.image} alt="" className="recipe_img"/>
                        <div>
                            <p>{recipe.summary ? recipe.summary.replaceAll("<b>", "").replaceAll("</b>", "")
                                .replaceAll(/<a href=".+">/g, "").replaceAll("</a>", "").replaceAll(">", " ") : "there is no summary for this recipe"}</p>
                        </div>
                    </div>
                    <div className="recipe_instruction_box">
                        <div className="recipe_ingredients">
                            <h4 className="small_header">Ingredients</h4>
                            {recipe.extendedIngredients ? recipe.extendedIngredients.map((ingredient, index) => <li key={index}>{ingredient.original}</li>) : "there is no Ingredients information"}
                        </div>
                        <div className="recipe_instruction">
                            <h4 className="small_header">Preparation</h4>
                            {recipe.analyzedInstructions[0] ? recipe.analyzedInstructions[0].steps.map((step, index) =>
                                <li key={index} className="inst_list">{step.step}</li>) : "there is no instruction for this recipe"}
                        </div>
                    </div>
                </Container>
                <Newsletter/>
                <Footer/>
            </Styles>

    )
}

export default RecipePage;