import React from 'react'
import propTypes from 'prop-types'
import { Button as BaseButton } from 'antd'
import classNames from 'classnames'
import './Button.scss'


const Button = (props) => {
    return (
        <BaseButton {...props} className={classNames('button', props.className)}>{props.children}</BaseButton>
    )
}

Button.propTypes = {
    className: propTypes.string
}

export default Button
