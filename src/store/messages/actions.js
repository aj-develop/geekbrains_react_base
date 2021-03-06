import {AUTHORS} from "../../utils/constants";

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
            dispatch(addMessage(chatId, {text: 'Не приставай ко мне', author: selectedChat.name}));
        }, 1000);
    }
};