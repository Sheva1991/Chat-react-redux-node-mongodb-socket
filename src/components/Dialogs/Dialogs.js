import React from "react";
import orderBy from "lodash/orderBy";
import { Input, Empty } from "antd";
import DialogItem from '../DialogItem/DialogItem';

import "./Dialogs.scss";

const Dialogs = ({ items, userId, onSearch, inputValue, currentDialogId }) => (
    <div className="dialogs">
        <div className="dialogs__search">
            <Input.Search
                placeholder="Поиск среди контактов"
                onChange={e => onSearch(e.target.value)}
                value={inputValue}
            />
        </div>
        {/* {items.map(item => (
            <DialogItem
                key={item._id}
                user={item.user}
                message={item}
                undread={0}
                isMe={item.user._id === userId} />

        ))
        } */}

        {items.length ? (
            orderBy(items, ["createdAt"], ["desc"]).map(item => (
                <DialogItem
                    key={item._id}
                    {...item}
                    isMe={item.user._id === userId} />
            ))
        ) : (
                <Empty
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    description="Ничего не найдено"
                />
            )}

        {/* {items.length ? (
            orderBy(items, ["created_at"], ["desc"]).map(item => (
                <DialogItem
                    key={item._id}
                    isMe={item.author._id === userId}
                    userId={userId}
                    currentDialogId={currentDialogId}
                    {...item}
                />
            ))
        ) : (
                <Empty
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    description="Ничего не найдено"
                />
            )} */}
    </div>
);

export default Dialogs;
