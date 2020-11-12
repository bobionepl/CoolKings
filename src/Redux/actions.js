import axios from "axios";
export const recipeFetched = "RECIPE_FETCHED";
export const searchResultsFetched = "SEARCH_RESULTS_FETCHED";
export const recipeByIdFetched = "RECIPE_BY_ID_FETCHED";
// const API_KEY = "91a0f2d58ddf4839ac7296ef9a744545";
const API_KEY = '44b93bf76bfd40d3bfa570133fcd438d';

export const fetchRecipes = () => (dispatch, getState) => {

    const url = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=6`;

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
            console.log(response);
            dispatch({
                type: recipeByIdFetched,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
}






