import React from 'react'
import propTypes from 'prop-types'
import './Block.scss'
import classNames from 'classnames'



const Block = ({ children, className }) => {
    return (
        <div className={classNames('block', className)}>
            {children}
        </div>
    )
}

Block.propTypes = {
    className: propTypes.string
}

export default Block
