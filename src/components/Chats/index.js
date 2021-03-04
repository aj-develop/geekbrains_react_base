import '../../css/style.css';
import Message from "../Message";
import MessageField from "../MessageField";
import ChatList from "../ChatList";
import ChatHeader from "../ChatHeader";
import React, {useState, useCallback, useEffect, useMemo} from 'react';
import {useParams, useRouteMatch} from "react-router-dom";
import {AUTHORS} from "../../utils/constants";
import Profile from "../Profile";

const Chats = () => {
    let chatId = +useParams().chatId;
    const profileId = +useParams().profileId;
    if (!chatId) {
        chatId = profileId;
    }
    const match = useRouteMatch();

    console.log(match.url);

    const [chats, setChats] = useState(
        [
            {id: 1, name: 'София', messageList: []},
            {id: 2, name: 'Михаил', messageList: []},
            {
                id: 3, name: 'Робот', messageList: [
                    {author: 'Робот', text: 'Привет!'},
                    {author: 'Робот', text: 'Как дела?'}
                ]
            },
            {
                id: 4, name: 'Евгения', messageList: [
                    {author: 'Евгения', text: 'Привет!'},
                ]
            },
            {id: 5, name: 'Игорь', messageList: []},
        ]
    );

    const selectedChat = useMemo(
        () => chats.find(
            chat => chat.id === chatId),
        [chatId, chats]
    );

    const chatNotSelected = !chatId || !selectedChat ? true : false;

    const selectedChatIndex = useMemo(
        () => chats.findIndex((
            chat) => chat.id === chatId),
        [chatId, chats]
    );

    const addMessage = useCallback(
        (author, text) => {
            const newChats = [...chats];
            newChats[selectedChatIndex] = {
                ...selectedChat,
                messageList: [...selectedChat.messageList, {author, text}],
            }
            setChats(newChats);
        },
        [chats, selectedChat, selectedChatIndex]
    );


    useEffect(() => {
            if (!chatNotSelected) {
                let timeout;
                if (
                    selectedChat.messageList?.length > 0 &&
                    selectedChat.messageList[selectedChat.messageList?.length - 1]?.author !== AUTHORS.BOT &&
                    selectedChat.messageList[selectedChat.messageList?.length - 1]?.author !== 'София' &&
                    selectedChat.messageList[selectedChat.messageList?.length - 1]?.author !== 'Евгения' &&
                    selectedChat.messageList[selectedChat.messageList?.length - 1]?.author !== 'Игорь' &&
                    selectedChat.messageList[selectedChat.messageList?.length - 1]?.author !== 'Михаил'

                ) {
                    timeout = setTimeout(() =>
                            addMessage(selectedChat.name, "Не приставай ко мне"),
                        1000
                    );
                }
                return () => clearTimeout(timeout);
            }
        }, [addMessage, selectedChat]
    );


    return (
        <div className="container">
            <div className="chat-wrapper">
                {(() => {
                    switch (true) {
                        case /^\/chats\/\d$/.test(match.url):
                            return (
                                <>
                                    <ChatList chats={chats} chatId={chatId}/>
                                    <div className="chat">
                                        <ChatHeader selectedChat={selectedChat}/>
                                        <MessageField messages={selectedChat?.messageList || []}/>
                                        <Message onAddMessage={addMessage}/>
                                    </div>
                                </>
                            );
                        case /^\/chats$/.test(match.url):
                            return (
                                <>
                                    <ChatList chats={chats} chatId={chatId} selectedChat={selectedChat}/>
                                    <div className="chat">
                                        <ChatHeader selectedChat={selectedChat}/>
                                        <MessageField chatNotSelected={true}/>
                                    </div>
                                </>
                            );
                        case /^\/profile\/\d$/.test(match.url):
                            return (
                                <>
                                    <ChatList chats={chats} chatId={chatId}/>
                                    <div className="chat">
                                        <ChatHeader selectedChat={selectedChat}/>
                                        <Profile selectedChat={selectedChat}/>
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