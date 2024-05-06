import * as Actions from "./constants"

export function signInWithEmail({ email, password }) {
    return {
        type: Actions.SIGN_IN_WITH_EMAIL,
        email,
        password
    };
}

export function signUpWithEmail({ name, email, password }) {
    return {
        type: Actions.SIGN_UP_WITH_EMAIL,
        name,
        email,
        password
    };
}

export function fetchAllPosts() {
    return {
        type: Actions.FETCH_ALL_POSTS_LIST,
    };
}

export function createPost(uid, title, description, price, postVisibility, imageURL) {
    return {
        type: Actions.CREATE_FEED_POST,
        uid,
        title,
        description,
        price,
        postVisibility,
        imageURL
    };
}