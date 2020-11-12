import React from "react";
import {Container} from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`

`
const divStyle = {
    backgroundColor: "#eb812e",
    height:"150px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
}


const Footer = () => {


    return (
        <div style={divStyle}>
            <Styles>
                <Container>
                <div className="container" > &copy; {new Date().getFullYear()} Copyright: <a href="/"> CoolKings.com </a></div>
                </Container>
            </Styles>
        </div>
    );
}

export default Footer;