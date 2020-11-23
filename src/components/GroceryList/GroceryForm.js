import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addProduct} from "../../Redux/actions";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import "../style.css";

const Styles = styled.div`

    .container {
        display:flex;
        flex-direction:column;
        align-items:center;
        padding-top: 100px;
        padding-bottom: 30px;
        border-bottom: 5px solid black;
        
        h1 {
            font-family:'Alfa Slab One';

        }
    }

    .form{

    }
`

const GroceryForm = () => {
    const [product, setProduct] = useState({
        name: "",
        value: "",
    });

    const {name, value} = product;
    const dispatch = useDispatch();

    const clear = () => {
        setProduct({
            ...product,
            value: "",
        });
    }
        const handleSubmit = (e) => {
            e.preventDefault();
            dispatch(addProduct(createProduct()));
            clear();
        };


        const handleChange = (e) => {
            setProduct({
                ...product,
                [e.target.name]: e.target.value,
                value: e.target.value
            })

        };

        const createProduct = () => {
            return {
                name,
            }
        };

        return (
            <Styles>
                <div className="container">
                    <h1>Grocery List:</h1>
                    <form action="" onSubmit={handleSubmit} className="form">
                        <TextField onChange={handleChange} value={value} name="name" id="standard-search"
                                   label="Add Product" type="text"/>
                    </form>
                </div>
            </Styles>

        )

}
export default GroceryForm;