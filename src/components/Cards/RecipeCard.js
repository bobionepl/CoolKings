import React, {useEffect} from "react";
import {Card} from "react-bootstrap";
import styled from "styled-components";
import {chooseRecipe} from "../../Redux/actions";
import {useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";


const Styles = styled.div`
    .recipe_card {
        width:200px;
        height:300px;
    }
    
    .card_body{
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .card_img{ 
        height:150px;    
    }
    .card_title{
        font-size: 15px;
        font-weight: bold;
        margin-top: -15px;
    }
    
`;



function RecipeCard ({recipe}) {

    const dispatch = useDispatch();
    const history = useHistory();
    const recipeID = recipe.id;

    const handleClick = () => {

        dispatch(chooseRecipe(recipeID));
        history.push(`/recipe/${recipeID}`);
    }


    return (
        <Styles>
            <Card className="recipe_card" onClick={handleClick}>
                <Card.Img className="card_img" variant="top" src={recipe.image}/>
                <Card.Body className="card_body">
                    <Card.Title className="card_title">{recipe.title}</Card.Title>
                    <Card.Text>
                        {recipe.sourceName}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Cooking Time: {recipe.readyInMinutes} min</small>
                </Card.Footer>
            </Card>
        </Styles>
    )
};

export default RecipeCard;