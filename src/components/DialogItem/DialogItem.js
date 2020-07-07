import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import { Link } from 'react-router-dom';

import Avatar from '../Avatar/Avatar';
import IconReaded from '../IconReaded/IconReaded';

const getMessageTime = createdAt => {
    if (isToday(createdAt)) {
        return format(createdAt, 'HH:mm');
    } else {
        return format(createdAt, 'dd.MM.yyyy');
    }
    // if (true) {
    //     return format(new Date(2020, 5, 11), 'dd/MM/yyyy');
    // }
};

const renderLastMessage = (message, userId) => {
    let text = '';
    if (!message.text && message.attachments.length) {
        text = 'прикрепленный файл';
    } else {
        text = message.text;
    }

    return `${message.user._id === userId ? 'Вы: ' : ''}${text}`;
};

// const DialogItem = ({
//     _id,
//     undread,
//     created_at,
//     text,
//     isMe,
//     currentDialogId,
//     partner,
//     lastMessage,
//     userId,
// }) => (
//         <Link to={`/dialog/${_id}`}>
//             <div className={classNames('dialogs__item', {
//                 'dialogs__item--online': partner.isOnline,
//                 'dialogs__item--selected': currentDialogId === _id,
//             })}>
//                 <div className="dialogs__item-avatar">
//                     <Avatar user={partner} />
//                 </div>
// <div className="dialogs__item-info">
//     <div className="dialogs__item-info-top">
//         <b>{partner.fullname}</b>
//         <span>{getMessageTime(lastMessage.createdAt)}</span>
//     </div>
//     <div className="dialogs__item-info-bottom">
//         <p>{renderLastMessage(lastMessage, userId)}</p>
//         {isMe && <IconReaded isMe={isMe} isReaded={lastMessage.readed} />}
//         {lastMessage.undread > 0 && (
//             <div className="dialogs__item-info-bottom-count">
//                 {lastMessage.undread > 9 ? '+9' : lastMessage.undread}
//             </div>
//         )}
//     </div>
// </div>
//             </div>
//         </Link>
//     );

const DialogItem = ({ user, message, undread, isMe }) => {

    return (
        <div className={classNames('dialogs__item', {
            'dialogs__item--online': message.user.isOnline,
        })}>
            <div className="dialogs__item-avatar">
                <Avatar user={message.user} />
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{message.user.fullname}</b>
                    <span>{getMessageTime(message.createdAt)}</span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>{message.text}</p>
                    {isMe && <IconReaded isMe={true} isReaded={false} />}
                    {undread > 0 && (
                        <div className="dialogs__item-info-bottom-count">
                            {undread > 9 ? +9 : undread}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DialogItem;
