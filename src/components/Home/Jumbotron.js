import React from "react";
import {  Jumbotron as Jumbo, Container} from "react-bootstrap"
import styled from "styled-components";
import Steak from "../../assets/steak.jpg"

const Styles = styled.div`
    .jumbotron {
        background: url(${Steak}) no-repeat ;
        background-size: cover;
        color: white;
        height: 90vh;
     
    }
    
    .circle-figure {
        position:relative;
        bottom: -50px;
        right: -100px;
        
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: #5e0000;
        font-weight: bold;
        justify-content: center;
        z-index:420;
    }
    
    .square-figure {
        position:relative;
        top: 230px;
        
        
        width: 300px;
        height: 300px;
        background-color: white;
        text-align: center;
        
    }
    .square-figure-cap{
        color:black;
    }
    

`;

const Jumbotron = () => {

    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <Container>
                <div className="overlay"></div>
                    {/*<Figure className="circle-figure">*/}
                    {/*    <Figure.Caption className="circle-figure-cap">*/}
                    {/*        Recipe of the Day*/}
                    {/*    </Figure.Caption>*/}
                    {/*</Figure>*/}
                    {/*<Figure className="square-figure">*/}
                    {/*    <Figure.Caption className="square-figure-cap">*/}
                    {/*        <h2>Bobi-Wan Kenobi (Balinese Sticky Glazed Pork Ribs)</h2>*/}
                    {/*        <p>This sweet and smoky dish can easily be made in advance and reheated</p>*/}
                    {/*        <p>Bobi-Wan Kenobi</p>*/}
                    {/*    </Figure.Caption>*/}
                    {/*</Figure>*/}
                </Container>
            </Jumbo>
        </Styles>
    )
};

export default Jumbotron;