import { combineReducers } from 'redux';
import { recipeFetched, searchResultsFetched, recipeByIdFetched} from "./actions";

const initialState = {
    loading: false,
    error: "",
    carouselRecipes: null,
    searchRecipes: null,
    idRecipes: null,
}

function recipes(state = initialState, action) {
    switch (action.type){
        case recipeFetched:
            return {...state, carouselRecipes: action.payload}

        case searchResultsFetched:
            return {...state, searchRecipes: action.payload}

        case recipeByIdFetched:
            return {...state, idRecipes: action.payload}

        default:
            return state
    }
}



export default combineReducers({
    recipes
});