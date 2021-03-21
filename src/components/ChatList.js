import ListGroup from 'react-bootstrap/ListGroup';
import React, {useCallback, useState} from "react";
import {Link} from "react-router-dom";
import AddChatDialog from "./AddChatDialog";
import DeleteChatDialog from "./DeleteChatDialog";
import {useDispatch, useSelector} from "react-redux";
import {addChat, deleteChatWithMessages} from "../store/chats/actions";

const ChatList = ({chatId}) => {

    const chats = useSelector(state => state.chats.chatList);
    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);
    const [deleteVisible, setDeleteVisible] = useState(false);

    const addNewChat = useCallback((name) => {
        dispatch(addChat(name));
        setVisible(false);
    }, [dispatch]);

    const deleteChatFromList = useCallback((chatId) => {
        //console.log(chatId)
        dispatch(deleteChatWithMessages(chatId));
        setDeleteVisible(false);
    }, [dispatch]);

    const handleClose = useCallback(() => {
        setVisible(false);
    }, []);

    const handleDeleteClose = useCallback(() => {
        setDeleteVisible(false);
    }, []);

    const handleOpen = useCallback(() => {
        setVisible(true);
    }, []);

    const handleDeleteOpen = useCallback(() => {
        setDeleteVisible(true);
    }, []);

    const renderChatList = useCallback(chat => (
            <Link key={chat.id} to={`/chats/${chat.id}`}>
                <ListGroup.Item className={chat.isBlinking ? 'blink' : ''} active={chat.id === chatId}>
                    {chat.name}
                </ListGroup.Item>
            </Link>
        ),
        [chatId]
        )
    ;

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