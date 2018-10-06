import { FETCH_POSTS, FETCH_SINGLE_POST, DELETE_POST, HANDLE_ERROR } from '../action-creators/actionCreators';

const initialState = {
    posts: [],
}

export const RootReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_POSTS:
            return {...state, posts: action.posts };
        case FETCH_SINGLE_POST:
            return {...state, post: action.post };
        case DELETE_POST:
            return {...state };
        case HANDLE_ERROR:
            return { ...state, error: action.error };
        default:
            return state;
    }
}