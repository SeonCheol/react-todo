import * as React from 'react'
import TodoList from '../components/TodoList'

import {connect} from 'react-redux'
import {ActionCreatorsMapObject, bindActionCreators} from "redux"

import {List, Map} from "immutable";
import {Todo} from "../App";
import * as todosActions from '../modules/todos'

interface ActionsProps {
    TodosActions: ActionCreatorsMapObject<any>
}

interface StateProps {
    todos: List<Map<string, Todo>>
}

type Props = ActionsProps & StateProps

class TodoListContainer extends React.PureComponent<Props> {
    public render() {
        const {todos} = this.props
        const {handleToggle, handleRemove} = this

        return (
            <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
        )
    }

    private handleToggle = (id) => {
        const {TodosActions} = this.props
        TodosActions.toggle(id)
    }
    private handleRemove = (id) => {
        const {TodosActions} = this.props
        console.log(TodosActions, id)
        TodosActions.remove(id)
    }

}

export default connect(
    (state) => ({
        todos: state.todos
    }),
    (dispatch) => ({
        TodosActions: bindActionCreators(todosActions, dispatch)
    })
)(TodoListContainer)