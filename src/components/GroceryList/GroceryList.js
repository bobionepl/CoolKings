import React from "react";
import List from "./List";
import GroceryForm from "./GroceryForm"
import {useSelector} from "react-redux";
import {selectProducts} from "../../Redux/selectors";
import {Container} from "react-bootstrap";

const GroceryList = (props) => {

    const products = useSelector(state => selectProducts(state, props.match.params.filter))

    return (
        <Container style={{heigh:"100vh"}}>
            <GroceryForm/>
            <List products={products}/>
        </Container>
    )

}

export default GroceryList;