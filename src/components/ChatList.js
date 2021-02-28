import ListGroup from 'react-bootstrap/ListGroup';
import React from "react";

const ChatList = () => {

    const chats = [
        'Робот',
        'София',
        'Михаил'
    ];


    return (
        <div className="chat-list">
            <ListGroup>
                {chats.map(chat => (
                    <ListGroup.Item>{chat}</ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}

export default ChatList;