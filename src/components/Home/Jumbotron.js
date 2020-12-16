import React, {useEffect} from "react";
import {  Jumbotron as Jumbo, Container} from "react-bootstrap"
import styled from "styled-components";
import Steak from "../../assets/steak.png"
import {useDispatch, useSelector} from "react-redux";
import { randomJoke} from "../../Redux/actions";

const Styles = styled.div`
    .jumbotron {
        background: url(${Steak}) no-repeat ;
        background-size: cover;
        color: white;
        height: 90vh;
        display:flex;
        align-items: center;
    }
    
    .joke {
        text-align: center;
        
    }

div#wave {
    position:relative;
    text-align:center;
    width:100px;
    height:100px;
    margin-left: auto;
    margin-right: auto;
.dot {
    display:inline-block;
    width:12px;
    height:12px;
    border-radius:50%;
    margin-right:3px;
    background:white;
    animation: wave 1.3s linear infinite;

        &:nth-child(2) {
            tanimation-delay: -1.1s;
        }
        
        &:nth-child(3) {
            tanimation-delay: -0.9s;
        }
    }
}

@keyframes wave {
    0%, 60%, 100% {
    transform: initial;
}

30% {
    transform: translateY(-15px);
    }
}
`;


const Jumbotron = () => {

    const Jokes = useSelector(state => state.recipes.foodJoke.text)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(randomJoke());
    },[]);

    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <Container className="container">
                    <h1 className="joke">{Jokes ? Jokes : <div id="wave">
                        <span className="dot"> </span>
                        <span className="dot"> </span>
                        <span className="dot"> </span>
                    </div>}</h1>
                </Container>
            </Jumbo>
        </Styles>
    )
};

export default Jumbotron;