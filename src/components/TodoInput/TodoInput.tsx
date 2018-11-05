import * as classNames from 'classnames/bind'
import * as React from 'react'
import * as s from 'src/styles/TodoInput.scss'

const cx = classNames.bind(s)

const TodoInput = ({value = '', onChange, onInsert}) => {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onInsert()
        }
    }
    return (
        <div className={cx('todo-input')}>
            <input onChange={onChange} value={value} onKeyPress={handleKeyPress}/>
            <div className={cx('add-button')} onClick={onInsert}>추가</div>
        </div>
    )
}

export default TodoInput