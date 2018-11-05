import {combineReducers} from "redux";
import input from './input'
import todos from './todos'


console.log(input, todos);
export default combineReducers({
    input, todos
})