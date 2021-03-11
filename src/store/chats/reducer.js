import {ADD_CHAT, DELETE_CHAT, UPDATE_CHAT_BLINKING} from "./actions";

const initialState = {
    chatList: [
        {id: 1, name: 'София', isBlinking: false},
        {id: 2, name: 'Михаил', isBlinking: false},
        {id: 3, name: 'Робот', isBlinking: false},
        {id: 4, name: 'Евгения', isBlinking: false},
        {id: 5, name: 'Игорь', isBlinking: false},
    ],
};

const chatsReducer = (state = initialState, action) => {

        switch (action.type) {
            case ADD_CHAT:
                let newChatId = +state.chatList.length + 1;
                return {
                    ...state,
                    chatList: [
                        ...state.chatList,
                        {id: newChatId, name: action.name},
                    ],
                };
            case UPDATE_CHAT_BLINKING:
                const index = state.chatList.findIndex(chatListItem => chatListItem.id === action.chatId);
                const newChatList = [...state.chatList];
                newChatList[index].isBlinking = action.isBlinking;
                return {
                    ...state,
                    chatList: newChatList,
                };
            case DELETE_CHAT:
                return {
                    ...state,
                    chatList: state.chatList.filter(
                        chatListItem => chatListItem.id !== action.chatId
                    )
                };

            default:
                return state;
        }
    }
;

export default chatsReducer;