import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import './Message.scss'
import AudioMessage from '../AudioMessage/AudioMessage'
// import { Popover, Button, Icon } from 'antd';
const chekedSvgReaded = require('../../assets/images/dbcheked.svg')
const chekedSvgNoReaded = require('../../assets/images/cheked.svg')



const Message = ({ avatar, text, user, date, isMe, isReaded, attachments, isTyping, audio, setPreviewImage }) => {
    const renderAttachment = item => {
        if (item.ext !== 'webm') {
            return (
                <div
                    key={item._id}
                    onClick={() => setPreviewImage(item.url)}
                    className="message__attachments-item">
                    <div className="message__attachments-item-overlay">
                        {/* <Icon type="eye" style={{ color: 'white', fontSize: 18 }} /> */}
                    </div>

                    <img src={item.url} alt={item.filename} />
                </div>
            );
        } else {
            return <AudioMessage key={item._id} audioSrc={item.url} />;
        }
    };
    return (
        <div className={classNames('message', {
            'message--isMe': isMe,
            'message--is-typing': isTyping,
            'message--image': attachments && attachments.length === 1,
            'message--is-audio': audio,
        })} >
            <div className='message__content'>
                {isMe & isReaded ? <img className='message__icon-readed'
                    src={chekedSvgReaded} alt="cheked icon" /> :
                    <img className='message__icon-readed'
                        src={chekedSvgNoReaded} alt="cheked icon" />
                }
                <div className="message__ava">
                    <img className='avatar' src={avatar} alt={user ? `Avatar ${user.fullname}` : `Avatar`} />
                </div>
                <div className='message__info'>
                    {(audio || text || isTyping) &&
                        (<div className='message__bubble'>
                            {text && <p className='message__text'>{text}</p>}
                            {isTyping && (
                                <div className="message__typing">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            )}
                            {audio && <AudioMessage audioSrc={audio} />}
                        </div>)}

                    {attachments && (
                        <div className="message__attachments">
                            {attachments.map(item => renderAttachment(item))}
                        </div>
                    )}

                    {/* {attachments && (<div className='message__attachments'>
                        {attachments.map((item, index) => (
                            <div key={index + 1} className="message__attachments-item">
                                <img src={item.url} alt={item.filename} />
                            </div>
                        ))}
                    </div>
                    )} */}
                    {date && (<span className='message__date'>{formatDistanceToNow(new Date(date), { addSuffix: true })}</span>)}
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
    atachments: propTypes.array,
    isReaded: propTypes.bool,
    isTyping: propTypes.bool,
    audio: propTypes.bool,
}

export default Message
