import {AUTHORS} from "../../utils/constants";
import {updateChatBlinking} from "../chats/actions";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    chatId,
    message,
});

export const addBotMessage = (chatId, message, selectedChat) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message));
    if (message.author === AUTHORS.ME) {
        setTimeout(() => {
            dispatch(updateChatBlinking(chatId,));
            dispatch(addMessage(chatId, {text: 'Не приставай ко мне', author: selectedChat.name}));
            let setIntervalID = setInterval(() => {
                    dispatch(updateChatBlinking(chatId, selectedChat.isBlinking ? false : true))
                },
                500
            )
            setTimeout(() => clearInterval(setIntervalID), 3000);
        }, 1000);
    }
};