import {
    GET_NEWS_REQUEST,
    GET_NEWS_FAILURE,
    GET_NEWS_SUCCESS,
} from "./actions";
import {STATUSES} from "../../utils/constants";

const initialState = {
    news: [],
    request: STATUSES.IDLE,
    error: null,
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS_REQUEST:
            return {
                ...state,
                request: STATUSES.REQUEST,
            };
        case GET_NEWS_SUCCESS:
            return {
                ...state,
                news: action.payload,
                request: STATUSES.SUCCESS,
            };
        case GET_NEWS_FAILURE:
            return {
                ...state,
                request: STATUSES.FAILURE,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default newsReducer;