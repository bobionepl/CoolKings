import React from "react";
import {Container, InputGroup, Button, FormControl} from "react-bootstrap"
import styled from "styled-components";

const divStyle = {
    backgroundColor: "#e6e7e3",
    height:"200px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    clear:"both",
}

const Styles = styled.div`

   
    .inputBtn {
        background: #eb812e;
        color: white;
        border: none;
        box-shadow: none;
    }
    
    h1 {
        font-size: 2rem;
       
    }
    p {
        font-size: 1rem;
    }
`

const Newsletter = () => {

    return (
        <div style={divStyle}>
            <Styles>
                <Container >
                    <div>
                        <h1>Get Our Newsletter</h1>
                        <p>Get recipes, tips and special offers delivered straight to your inbox. </p>
                    </div>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Add Your Email"
                            aria-label="Add Your Email"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button className="inputBtn" variant="outline-secondary">Sign Up</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Container>
            </Styles>
        </div>
    )
};

export default Newsletter;