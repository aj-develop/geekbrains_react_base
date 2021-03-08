import {ADD_MESSAGE, DELETE_MESSAGES_FROM_CHAT} from "./actions";

const initialState = {
    messageList: {
        3: [
            {author: 'Робот', text: 'Привет!'},
            {author: 'Робот', text: 'Как дела?'}
        ]
    },
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const currentList = state.messageList[action.chatId] || [];
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: [
                        ...currentList,
                        {
                            ...action.message,
                            id: `${action.chatId}${currentList.length}`,
                        },
                    ],
                },
            };
        }
        case DELETE_MESSAGES_FROM_CHAT: {
            return {
                ...state,
                messageList: state.messageList.filter(
                    messageListItem => messageListItem[action.chatId] !== action.chatId
                )
            };
        }
        default:
            return state;
    }
};

export default messagesReducer;
