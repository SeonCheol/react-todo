import {List, Map} from "immutable";
import * as React from 'react'
import TodoItem from 'src/components/TodoItem'
import {Todo} from "../../App";

interface OwnProps {
    todos: List<Map<string, Todo>>
    onToggle
    onRemove
}

class TodoList extends React.Component<OwnProps> {

    public shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos
    }

    public render() {
        const {todos, onToggle, onRemove} = this.props
        const todoList = todos.map((todo) => {
            if (typeof todo === 'undefined') {
                return
            }
            const todoObj = todo.get('todo')
            const handleToggle = () => {
                onToggle(todoObj.id)
            }
            const handleRemove = () => {
                onRemove(todoObj.id)
            }

            if (typeof todoObj === 'undefined') {
                return
            }

            return (
                <TodoItem done={todoObj.done}
                          key={todoObj.id}
                          onToggle={handleToggle}
                          onRemove={handleRemove}>
                    {todoObj.text}
                </TodoItem>
            )
        })

        return (
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoList