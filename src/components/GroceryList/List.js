import React from "react";
import {useDispatch} from "react-redux";
import {removeProduct} from "../../Redux/actions";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {Form} from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const trash = <FontAwesomeIcon icon={faTrashAlt} size="1x"/>
const Styles = styled.div`
    .list {
        height: 70vh;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-top:30px;
        
        @media (max-width: 768px) {
            max-width: 250px;
            flex-wrap: no-wrap;
            height:100%;
        }
    }
    
    .list_position {
        max-width: 15vw;
        margin: 15px 1.2rem 0 0;
        display:flex;
        justify-content: space-between;
        
         @media (max-width: 768px) {
            max-width: 250px;
        }

    }
    span {
        text-overflow: ellipsis;
        overflow:hidden;
        white-space:nowrap;
       
    }
    
    .delete_btn {
        z-index:100;
    }
`;


const List = ({products}) => {

    const dispatch = useDispatch();

    const handleClick = (index) => {
        dispatch(removeProduct(index))
    }

    return (
        <Styles>
            <ul className="list">
                {products.map((product, index) => (
                    <li className="list_position" key={index}><span>{product.name}</span>
                        <i className="delete_btn" onClick={() => handleClick(index)}>{trash}</i>
                    </li>
                ))}
            </ul>
        </Styles>
    )
};

export default List;