import React, {useState} from "react";
import {Card} from "react-bootstrap";
import styled from "styled-components";
import {chooseRecipe} from "../../Redux/actions";
import {useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



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
        
        &:hover {
            cursor: pointer;
        }
    }
    .card_title{
        font-size: 15px;
        font-weight: bold;
        margin-top: -15px;
        text-overflow: ellipsis;
        overflow:hidden;
        white-space:nowrap;
        
        &:hover {
            text-overflow: clip;
            white-space:normal;
            overflow:visible;
           
        }   
    }
    
    .card_title:hover ~ .sourceName {
        display:none;
    }
    
    
    
    .card_footer {
        display:flex;
        justify-content: space-between;
    }
    
    @media (max-width: 480px) {
        .recipe_card {
            width:150px;
            height:260px;
           
        }
    
        .sourceName { 
            display:none;
        }
        
        .card-body{
            min-height:0px;
        }
        .card_title {
            margin-bottom:0px;
        }
    }
`;




function RecipeCard ({recipe}) {

    const bookMark = <FontAwesomeIcon icon={faBookmark} size="2x"/>
    const {icons, setIcon} = useState('faBars');
    const dispatch = useDispatch();
    const history = useHistory();
    const recipeID = recipe.id;

    const handleClick = () => {
        dispatch(chooseRecipe(recipeID));
        history.push(`/recipe/${recipeID}`);
    }

    const setFavorite = () => {

        if(localStorage.getItem('data') == null){
            localStorage.setItem('data', "[]")
        };
        const savedRecipe = JSON.parse(localStorage.getItem('data'));

        savedRecipe.push({recipe});

        localStorage.setItem('data',JSON.stringify(savedRecipe))

    }
    // const getFavorite = () => {
    //     let data = sessionStorage.getItem("mydata")
    //     data = JSON.parse(data)
    //     console.log(sessionStorage)
    // }
    return (
        <Styles>
            <Card className="recipe_card" >
                <Card.Img className="card_img" variant="top" src={recipe.image} onClick={handleClick}/>
                <Card.Body className="card_body">
                    <Card.Title className="card_title">{recipe.title}</Card.Title>
                    <Card.Text className="sourceName">
                        {recipe.sourceName}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="card_footer">
                    <small className="text-muted">Cooking Time: {recipe.readyInMinutes} min</small>
                    <i className="far fa-bookmark" onClick={setFavorite}>{bookMark}</i>
                </Card.Footer>
            </Card>
        </Styles>
    )
};

export default RecipeCard;
