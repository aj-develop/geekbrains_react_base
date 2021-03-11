import {API_URL} from "../../utils/constants";

export const GET_NEWS = "NEWS::GET_NEWS";
export const GET_NEWS_REQUEST = "NEWS::GET_NEWS_REQUEST";
export const GET_NEWS_SUCCESS = "NEWS::GET_NEWS_SUCCESS";
export const GET_NEWS_FAILURE = "NEWS::GET_NEWS_FAILURE";

export const getNewsRequest = () => ({
    type: GET_NEWS_REQUEST,
});

export const getNewsSuccess = (data) => ({
    type: GET_NEWS_SUCCESS,
    payload: data,
});

export const getNewsFailure = (err) => ({
    type: GET_NEWS_FAILURE,
    payload: err,
});

export const getNews = () => async (dispatch) => {
    dispatch(getNewsRequest());

    try {
        const res = await fetch(API_URL);
        const response = await res.json();
        dispatch(getNewsSuccess(response));
    } catch (err) {
        dispatch(getNewsFailure(err.message));
    }
};