import * as Actions from "./constants"
import { errorInit as initError } from './config';
import { notificationMessage } from '../../src/utils/error';
import { REHYDRATE } from 'redux-persist/lib/constants';

const INITIAL_STATE = {
    user: null,
    isLogin: false,
    loading: false,
    loginError: '',
    loginSuccess: false,
    signUpError: '',
    signUpSuccess: false,
    posts: [],
    comments: []
}

function modulesReducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case Actions.SIGN_IN_WITH_EMAIL:
            return { ...state, loading: true, loginError: initError };
        case Actions.SIGN_IN_WITH_EMAIL_SUCCESS:
            return { ...state, user: action.payload.user, loading: false, isLogin: true };
        case Actions.SIGN_IN_WITH_EMAIL_ERROR:
            const errorSignIn = notificationMessage(action.payload);
            return { ...state, loading: false, loginError: errorSignIn };
        case Actions.SIGN_UP_WITH_EMAIL:
            return { ...state, loading: true, signUpError: initError };
        case Actions.SIGN_IN_WITH_EMAIL:
            return { ...state, loading: true, loginError: initError };
        case Actions.FETCH_ALL_POSTS_LIST_SUCCESS:
            return { ...state, posts: action.payload.posts };
        case Actions.CREATE_FEED_POST_SUCCESS:
            return { ...state, posts: [...state.posts, action.payload.post] };
        case Actions.FETCH_ALL_POSTS:
            return { ...state, posts: action.posts };
        case Actions.FETCH_ALL_COMMENTS:
            return {...state, comments: action.comments };
        case REHYDRATE:
            if (action.payload && action.payload.auth) {
                const { auth } = action.payload;
                return { ...initState };
            } else {
                return state;
            }

        default:
            return state
    }
}

export default modulesReducer;