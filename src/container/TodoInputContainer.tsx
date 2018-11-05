import * as React from 'react'
import TodoInput from '../components/TodoInput'

import {connect} from 'react-redux'
import {ActionCreatorsMapObject, bindActionCreators} from "redux"

import {Todo} from "../App";
import * as inputActions from '../modules/input'
import * as todosActions from '../modules/todos'

interface OwnProps {
    value: string
}

interface StateProps {
    value: string
}

interface DispatchProps {
    InputActions: ActionCreatorsMapObject<any>
    TodosActions: ActionCreatorsMapObject<any>
}

type Props = OwnProps & DispatchProps & StateProps

class TodoInputContainer extends React.PureComponent<Props> {
    protected id: number

    constructor(props) {
        super(props)
        this.id = 1
    }

    public render() {
        const {value} = this.props
        const {handleChange, handleInsert} = this

        return (
            <TodoInput
                onChange={handleChange}
                onInsert={handleInsert}
                value={value}/>
        )
    }

    private getId = (): number => {
        return ++this.id
    }

    private handleChange = (e) => {
        const {value} = e.target
        const {InputActions} = this.props
        InputActions.setInput(value)
    }

    private handleInsert = () => {
        const {InputActions, TodosActions, value} = this.props
        const todo: Todo = {
            id: this.getId(),
            done: false,
            text: value,
        }
        TodosActions.insert(todo)
        InputActions.setInput('')
    }
}

export default connect(
    (state) => {
        console.log(state)
        return {
            value: state.input.get('value')
        }
    },
    (dispatch) => {

        const InputActions = bindActionCreators(inputActions, dispatch)
        const TodosActions = bindActionCreators(todosActions, dispatch)

        console.log(InputActions, TodosActions)
        return {
            InputActions,
            TodosActions
        }

    }
)
(TodoInputContainer)