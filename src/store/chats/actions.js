import {deleteMessagesFromChat} from "../messages/actions";

export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";
export const UPDATE_CHAT_BLINKING = "CHATS::UPDATE_CHAT_BLINKING";

export const addChat = (name) => ({
    type: ADD_CHAT,
    name,
});

export const updateChatBlinking = (chatId, isBlinking) => ({
    type: UPDATE_CHAT_BLINKING,
    chatId,
    isBlinking
});

export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    chatId,
});

export const deleteChatWithMessages = (chatId) => (dispatch, getState) => {
    dispatch(deleteChat(chatId));
    dispatch(deleteMessagesFromChat(chatId));
};