import data from "./data"
import modal from "./modal"

import {combineReducers} from "redux";
const rootReduce=combineReducers({
    data,
    modal
})
export default rootReduce;