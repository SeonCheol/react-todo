import * as classNames from 'classnames/bind'
import * as React from 'react'
import * as s from 'src/styles/TodoItem.scss'

const cx = classNames.bind(s)

interface OwnProps {
    done: boolean
    children
    onToggle
    onRemove
}

class TodoItem extends React.Component<OwnProps> {
    constructor(props) {
        super(props)
    }

    public shouldComponentUpdate(nextProps, nextState) {
        return this.props.done !== nextProps.done
    }

    public render() {
        const {done, children, onToggle} = this.props

        return (
            <div className={cx('todo-item')} onClick={onToggle}>
                <input className={cx('tick')}
                       type='checkbox' checked={done} readOnly={true}/>
                <div className={cx('text', {done})}>{children}</div>
                <div className={cx('delete')} onClick={this.handleRemove}>[지우기]</div>
            </div>
        )
    }

    private handleRemove = (e) => {
        this.props.onRemove()
        e.stopPropagation()
    }
}

export default TodoItem