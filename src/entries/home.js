import React from "react";
import { render } from "react-dom";
import Home from "../pages/containers/home"
//import data from '../api.json';
import { createStore } from 'redux';
import data from "../schemas/index.js"
import { Provider } from "react-redux";
import reducer from "../reducer/data";
console.log(data)
const initialState = {
    data: {
        //...data,
        entities:data.entities,
        categories:data.result.categories
    },
    search:[]
}
const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const app = document.getElementById("home-container");

render(
    <Provider store={store}>
        <Home />
    </Provider>,
    app);