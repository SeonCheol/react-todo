import {List, Map} from "immutable";
import * as React from 'react';
import './App.css';
import PageTemplate from './components/PageTemplate'
import TodoInputContainer from "./container/TodoInputContainer";
import TodoListContainer from "./container/TodoListContainer";


// interface OwnProps {}
export interface Todo {
    id: number
    text: string
    done: boolean
}

interface OwnState {
    input: string
    todos: List<Map<string, Todo>>
}


class App extends React.Component<{}, OwnState> {

    public render() {
        return (
            <PageTemplate>
                <TodoInputContainer/>
                <TodoListContainer/>
            </PageTemplate>
        );
    }


}

export default App;
