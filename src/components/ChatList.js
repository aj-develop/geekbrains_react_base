import ListGroup from 'react-bootstrap/ListGroup';
import React, {useCallback, useState} from "react";
import {Link} from "react-router-dom";
import AddChatDialog from "./AddChatDialog";
import {useDispatch, useSelector} from "react-redux";
import {addChat} from "../store/chats/actions";

const ChatList = ({chatId}) => {

    const chats = useSelector(state => state.chats.chatList);
    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);

    const addNewChat = useCallback((name) => {
        dispatch(addChat(name));
        setVisible(false);
    }, [dispatch]);

    const handleClose = useCallback(() => {
        setVisible(false);
    }, []);

    const handleOpen = useCallback(() => {
        setVisible(true);
    }, []);

    const renderChatList = useCallback(chat => (
        <Link key={chat.id} to={`/chats/${chat.id}`}>
            <ListGroup.Item active={chat.id === chatId}>
                {chat.name}
            </ListGroup.Item>
        </Link>
    ), [chatId]);

    return (
        <div className="chat-list">
            <div className="list-group-item addChat" onClick={handleOpen}>
                <i className="fas fa-user-plus"></i>
            </div>
            <ListGroup>
                {chats.map(renderChatList)}
            </ListGroup>
            <AddChatDialog
                onClose={handleClose}
                onSubmit={addNewChat}
                visible={visible}
            />
        </div>
    )
}

export default ChatList;