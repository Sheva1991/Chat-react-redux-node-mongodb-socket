import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import './Message.scss'
const chekedSvgReaded = require('../../assets/images/dbcheked.svg')
const chekedSvgNoReaded = require('../../assets/images/cheked.svg')



const Message = ({ avatar, text, user, date, isMe, isReaded, atachments }) => {
    return (
        <div className={classNames('message', { 'message--isMe': isMe })} >
            <div className='message__content'>
                {isMe & isReaded ? <img className='message__icon-readed'
                    src={chekedSvgReaded} alt="cheked icon" /> :
                    <img className='message__icon-readed'
                        src={chekedSvgNoReaded} alt="cheked icon" />
                }
                <div className="message__ava">
                    <img className='avatar' src={avatar} alt={`Avatar ${user.fullname}`} />
                </div>
                <div className='message__info'>
                    <div className='message__bubble'>
                        <p className='message__text'>{text}</p>
                    </div>
                    <div className='message__atachments'>
                        {atachments &&
                            atachments.map((item, index) =>
                                <div key={index + 1} className="message__atachments-item">
                                    <img src={item.url} alt={item.filename} />
                                </div>)
                        }
                    </div>
                    <span className='message__date'>{formatDistanceToNow(new Date(date), { addSuffix: true })}</span>
                </div>
            </div>
        </div >
    )
}

Message.propTypes = {
    avatar: propTypes.string,
    text: propTypes.string,
    date: propTypes.string,
    user: propTypes.object,
    atachments: propTypes.array
}

export default Message
