import React from "react";
import {Container} from "react-bootstrap";
import styled from "styled-components";
import "../style.css"
import Newsletter from "../Newsletter";
import {useSelector} from "react-redux";
import RecipeCard from "../Cards/RecipeCard";
import Footer from "../Footer";


const Styles = styled.div`
    .header_results {
        padding-top: 150px;  
        margin-bottom: 50px;  
        display:flex;
        align-items:center;
        justify-content: center;
        border-bottom: 7px solid black;
        
        
        h1 {
            font-family:'Alfa Slab One';
            font-size:4rem;
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

const Results = () => {

    const results = useSelector(state => state.recipes.searchRecipes);
    console.log(results)

    return (
        <Styles>
            <Container >
                <div className="header_results">
                    <h1>Results</h1>
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

export default Results;