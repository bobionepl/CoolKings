import axios from "axios";
export const recipeFetched = "RECIPE_FETCHED";
export const searchResultsFetched = "SEARCH_RESULTS_FETCHED";
export const recipeByIdFetched = "RECIPE_BY_ID_FETCHED";
export const foodJoke = "FOOD_JOKE";
export const ADD_PRODUCT = "addProduct";
export const REMOVE_PRODUCT = "removeProduct";
// const API_KEY = "91a0f2d58ddf4839ac7296ef9a744545";
const API_KEY = '44b93bf76bfd40d3bfa570133fcd438d';

export const fetchRecipes = () => (dispatch, getState) => {

    const url = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=20`;

    axios.get(url)
        .then(response => {
            dispatch({
                type: recipeFetched,
                payload: response.data.recipes
            })
        })
        .catch(error => {
            console.log(error);
        })

}

export const searchByProducts = (products) => (dispatch, getState) =>{
    let searchQuery = products.trim().replaceAll(",", "").replaceAll(" ", ",+");
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${searchQuery}&number=20`
    axios.get(url)
        .then(response => {
            dispatch({
                type: searchResultsFetched,
                payload: response.data
            })

        })
        .catch(error => {
            console.log(error);
        })
}

export const chooseRecipe = (id) => (dispatch, getState) => {

    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`

    axios.get(url)
        .then(response => {
            dispatch({
                type: recipeByIdFetched,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
}

export const randomJoke = () => (dispatch,getState) => {

    const url = `https://api.spoonacular.com/food/jokes/random?apiKey=${API_KEY}`

    axios.get(url)
        .then(response => {
            dispatch({
                type: foodJoke,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
}

export const addProduct = (product) => ({type: ADD_PRODUCT,product})
export const removeProduct = (productIndex) => ({
    type: REMOVE_PRODUCT,
    productIndex
})




