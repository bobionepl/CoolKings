import { combineReducers } from 'redux';
import { recipeFetched, searchResultsFetched, recipeByIdFetched, foodJoke} from "./actions";
import {ADD_PRODUCT, REMOVE_PRODUCT} from "./actions";

const initialState = {
    loading: false,
    error: "",
    carouselRecipes: null,
    searchRecipes: null,
    idRecipes: null,
    foodJoke: "",
}

function recipes(state = initialState, action) {
    switch (action.type){
        case recipeFetched:
            return {...state, carouselRecipes: action.payload}

        case searchResultsFetched:
            return {...state, searchRecipes: action.payload}

        case recipeByIdFetched:
            return {...state, idRecipes: action.payload}

        case foodJoke:
            return {...state, foodJoke: action.payload}
        default:
            return state
    }
}

const products = (state=[],action) => {
    switch (action.type) {
        case(ADD_PRODUCT):
            return [...state, action.product]
        case(REMOVE_PRODUCT):
            return state.filter((product, index) => {
                if(action.productIndex !== index){
                    return product;
                }
            })
        default:
            return state;
    }
};




export default combineReducers({
    recipes,
    products
});