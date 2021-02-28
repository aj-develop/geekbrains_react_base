import ListGroup from 'react-bootstrap/ListGroup';
import React from "react";

const ChatList = () => {

    const chats = [
        'София',
        'Михаил',
        'Робот',
        'Игорь',
        'Евгения'
    ];


    return (
        <div className="chat-list">
            <ListGroup>
                {chats.map(chat => (
                    <ListGroup.Item active={chat === 'Робот'}>{chat}</ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}

export default ChatList;