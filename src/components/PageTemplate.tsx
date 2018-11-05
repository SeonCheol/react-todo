import * as classNames from 'classnames/bind'
import * as React from 'react'
import s from '../styles/PageTemplate.style.scss'

const cx = classNames.bind(s)

const PageTemplate = ({children}) => {
    console.log(s, cx('content'), s.content)
    return (
        <div className={cx('page-template')}>
            <h1>일정 관리</h1>
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    )
}

export default PageTemplate