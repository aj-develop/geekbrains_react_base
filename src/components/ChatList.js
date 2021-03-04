import ListGroup from 'react-bootstrap/ListGroup';
import React, {useCallback} from "react";
import {Link} from "react-router-dom";

const ChatList = ({chats, chatId}) => {
    console.log(chatId)
    console.log(chats)
    const renderChatList = useCallback(chat => (
        <Link key={chat.id} to={`/chats/${chat.id}`}>
            <ListGroup.Item active={chat.id === chatId}>
                {chat.name}
            </ListGroup.Item>
        </Link>
    ), [chatId]);

    return (
        <div className="chat-list">
            <ListGroup>
                {chats.map(renderChatList)}
            </ListGroup>
        </div>
    )
}

export default ChatList;