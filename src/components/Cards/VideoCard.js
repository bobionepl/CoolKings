import React from "react";
import {Card} from "react-bootstrap"
import styled from "styled-components";

const Styles = styled.div`
    .recipe_card {
        width:200px;
        height:250px;
    }
       
    .card_img{ 
        height:150px;    
    }
`;

function VideoCard() {



    return (
        <Styles>
            <Card className="recipe_card">
                <Card.Img className="card_img" variant="top" src=""/>
                <Card.Body>
                    <Card.Title>Guide Title</Card.Title>
                    <Card.Text>
                        author
                    </Card.Text>
                </Card.Body>
            </Card>
        </Styles>
    )
};

export default VideoCard;