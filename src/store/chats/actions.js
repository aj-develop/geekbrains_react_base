export const ADD_CHAT = "CHATS::ADD_CHAT";
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