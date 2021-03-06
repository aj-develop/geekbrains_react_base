import {ADD_CHAT, UPDATE_CHAT} from "./actions";

const initialState = {
    chatList: [
        {id: 1, name: 'София'},
        {id: 2, name: 'Михаил'},
        {id: 3, name: 'Робот'},
        {id: 4, name: 'Евгения'},
        {id: 5, name: 'Игорь'},
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
            case UPDATE_CHAT:
                return {
                    ...state,
                    chatList: [
                        ...state.chatList,
                        {
                            id: action.chatId,
                            name: action.name,
                        },
                    ],
                };

            default:
                return state;
        }
    }
;

export default chatsReducer;