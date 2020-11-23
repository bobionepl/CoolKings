import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import {NavigationBar} from "./components/NavigationBar";
import { Provider } from 'react-redux';
import store from "./Redux/store";
import ResultPage from "./components/Results/Results";
import RecipePage from "./components/RecipePage/RecipePage"
import WhatToCookPage from "./components/WhatToCook/WhatToCookPage";
import GroceryList from "./components/GroceryList/GroceryList";
import RecipeBox from "./components/RecipeBox/RecipeBox";

function App() {
    return (
        <Provider store={store}>
                <Router>
                    <NavigationBar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/results" component={ResultPage} />
                        <Route path="/recipe" component={RecipePage} />
                        <Route path='/propositions' component={WhatToCookPage} />
                        <Route path="/grocery" component={GroceryList}/>
                        <Route path="/recipeBox" component={RecipeBox}/>
                    </Switch>
                </Router>
        </Provider>
    );
}

export default App;
