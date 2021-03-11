import {CHANGE_NAME} from './actions';

const initialState = {
    profileList: {
        1: {name: 'София', age: '24'},
        2: {name: 'Михаил', age: '32'},
        3: {name: 'Робот', age: '100'},
        4: {name: 'Евгения', age: '29'},
        5: {name: 'Игорь', age: '37'},
    },
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: action.name
            }
        default:
            return state;
    }
}

export default profileReducer;