import '../../css/style.css';
import arrow from "../../img/arrow.png";
import pp from "../../img/pp.png";
import video from "../../img/video.png";
import phone from "../../img/phone.png";
import more from "../../img/more.png";
import MessageField from "../MessageField";
import ChatList from "../ChatList";
import {useMemo, useState} from "react";
import {useParams} from "react-router-dom";

const Chats = () => {
    const chatId = +useParams().chatId;

    const [chats, setChats] = useState(
        [
            {id: 1, name: 'София', messageList: []},
            {id: 2, name: 'Михаил', messageList: []},
            {
                id: 3, name: 'Робот', messageList: [
                    {id: 0, message: {author: 'Робот', text: 'Привет!'}},
                    {id: 1, message: {author: 'Робот', text: 'Как дела?'}}
                ]
            },
            {
                id: 4, name: 'Евгения', messageList: [
                    {id: 0, message: {author: 'Евгения', text: 'Привет!'}},
                ]
            },
            {id: 5, name: 'Игорь', messageList: []},
        ]
    );

    const selectedChat = useMemo(() => chats.find(
        chat => chat.id === chatId),
        [chatId, chats]
    );

    if (!chatId) {
        return (
            <h2>chatId is empty</h2>
        )
    }

    return (
        <div className="container">
            <div className="chat-wrapper">
                <ChatList chats={chats} chatId={chatId}/>
                <div className="chat">
                    <div className="chat-header">
                        <div className="profile">
                            <div className="left">
                                <img src={arrow} className="arrow" alt="arrow"/>
                                <img src={pp} className="pp" alt="pp"/>
                                <h2>Робот</h2>
                                <span>online</span>
                            </div>
                            <div className="right">
                                <img src={video} className="icon" alt="video"/>
                                <img src={phone} className="icon" alt="phone"/>
                                <img src={more} className="icon" alt="more"/>
                            </div>
                        </div>
                    </div>
                    <MessageField chats={chats} selectedChat={selectedChat?.messageList || []}/>
                </div>
            </div>
        </div>
    )
}
export default Chats;