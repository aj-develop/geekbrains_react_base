import '../../css/style.css';
import Message from "../Message";
import MessageField from "../MessageField";
import ChatList from "../ChatList";
import ChatHeader from "../ChatHeader";
import InstallPopup from "../InstallPopup";
import React, {useCallback, useMemo} from 'react';
import {useParams, useRouteMatch, Redirect} from "react-router-dom";
import Profile from "../Profile";
import {useDispatch, useSelector} from "react-redux";
import {addBotMessage} from "../../store/messages/actions";

const Chats = () => {
    let chatId = +useParams().chatId;
    const profileId = +useParams().profileId;
    if (!chatId) {
        chatId = profileId;
    }
    const match = useRouteMatch();

    const chats = useSelector(state => state.chats.chatList);
    const messages = useSelector((state) => state.messages.messageList);

    const dispatch = useDispatch();

    const selectedChat = useMemo(
        () => chats.find((chat) => chat.id === chatId),
        [chatId, chats]
    );

    const addMessage = useCallback(
        (text, author) => {
            dispatch(addBotMessage(selectedChat?.id, {text, author}, selectedChat));
        },
        [selectedChat, dispatch]
    );

    const messageList = useMemo(() => messages?.[selectedChat?.id] || [], [
        messages,
        selectedChat,
    ]);

    return (
        <div className="container">
            <div className="chat-wrapper">
                {(() => {
                    switch (true) {
                        case /^\/$/.test(match.url):
                            return <Redirect to='/chats'/>
                        case /^\/chats\/\d$/.test(match.url):
                            return (
                                <>
                                    <ChatList chatId={chatId}/>
                                    <div className="chat">
                                        <ChatHeader chatId={chatId}/>
                                        <MessageField messages={messageList}/>
                                        <Message onAddMessage={addMessage}/>
                                        <InstallPopup/>
                                    </div>
                                </>
                            );
                        case /^\/chats$/.test(match.url):
                            return (
                                <>
                                    <ChatList chatId={chatId}/>
                                    <div className="chat">
                                        <ChatHeader chatId={chatId}/>
                                        <MessageField chatNotSelected={true}/>
                                        <InstallPopup/>
                                    </div>
                                </>
                            );
                        case /^\/profile\/\d$/.test(match.url):
                            return (
                                <>
                                    <ChatList chatId={chatId}/>
                                    <div className="chat">
                                        <ChatHeader chatId={chatId}/>
                                        <Profile chatId={chatId}/>
                                        <InstallPopup/>
                                    </div>
                                </>
                            );
                        default:
                            return <h2>Неверный URL либо доступ к изображению ограничен</h2>
                    }
                })()}
            </div>
        </div>
    )
}
export default Chats;