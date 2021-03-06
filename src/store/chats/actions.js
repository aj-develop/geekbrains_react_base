export const ADD_CHAT = "CHATS::ADD_CHAT";
export const UPDATE_CHAT = "CHATS::UPDATE_CHAT";

export const addChat = (name) => ({
    type: ADD_CHAT,
    name,
});

export const updateChat = (chatId, name) => ({
    type: UPDATE_CHAT,
    chatId,
    name,
});