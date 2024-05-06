import AsyncStorage from '@react-native-community/async-storage';
import { put, call, select, takeEvery } from 'redux-saga/effects';
import auth from '@react-native-firebase/auth'
import * as Actions from './constants';
import { signInService } from './../services/firebase/signinService'
import { signupService } from './../services/firebase/signupService'
import { fetchPostsService } from './../services/firebase/fetchPostsService'
import { createNewPostService } from './../services/firebase/createNewPostService'
import { handleError } from '../utils/error';
import NavigationService from '../utils/navigation';


/**
 * Do login success
 * @param token
 * @param user
 * @returns {IterableIterator<*>}
 */
function* doLoginSuccess(userData = {}) {
  var user = userData;
  yield put({
    type: Actions.SIGN_IN_WITH_EMAIL_SUCCESS,
    payload: { user },
  });
  yield call(NavigationService.navigate, "HomeMain");
}

/**
 * Sign In saga
 * @param username
 * @param password
 * @returns {IterableIterator<*>}
 */
function* signInWithEmailSaga({ email, password }) {
  try {
    let userData = {
      email: email,
      password: password
    }
    const { user } = yield call(signInService, userData);
    yield call(doLoginSuccess, user);
  } catch (e) {
    yield put({
      type: Actions.SIGN_IN_WITH_EMAIL_ERROR,
      payload: {
        message: e && e.message ? e.message : '',
      },
    });
    yield call(handleError, null)
  }
}

function* signUpWithEmailSaga({ name, email, password }) {
  try {
    let userData = {
      name: name,
      email: email,
      password: password
    }
    const { user } = yield call(signupService, userData);
    yield call(doLoginSuccess, user);
  } catch (e) {
    yield put({
      type: Actions.SIGN_UP_WITH_EMAIL_ERROR,
      payload: {
        message: e && e.message ? e.message : '',
      },
    });
    yield call(handleError, null)
  }
}

function* fetchAllPostsSaga() {
  try {
    const { posts } = yield call(fetchPostsService);
    yield put({
      type: Actions.FETCH_ALL_POSTS_LIST_SUCCESS,
      payload: { posts },
    });
  } catch (e) {
    yield put({
      type: Actions.FETCH_ALL_POSTS_LIST_ERROR,
      payload: {
        message: e && e.message ? e.message : '',
      },
    });
    yield call(handleError, null)
  }
}

function* createFeedPostSaga({ uid, title, description, price, postVisibility, imageURL }) {
  try {
    let post = {
        title: title,
        description: description,
        price: price,
        postVisibility: postVisibility,
        postCreatorId: uid,
        imageURL: imageURL ? imageURL: '' ,
        comments: 0

    }
    yield call(createNewPostService, post);
    yield put({
      type: Actions.CREATE_FEED_POST_SUCCESS,
      payload: post,
    });
  } catch (e) {
    yield put({
      type: Actions.CREATE_FEED_POST_ERROR,
      payload: {
        message: e && e.message ? e.message : '',
      },
    });
    yield call(handleError, null)
  }
}



export default function* modulesSaga() {
  yield takeEvery(Actions.SIGN_IN_WITH_EMAIL, signInWithEmailSaga);
  yield takeEvery(Actions.SIGN_UP_WITH_EMAIL, signUpWithEmailSaga);
  yield takeEvery(Actions.FETCH_ALL_POSTS_LIST, fetchAllPostsSaga);
  yield takeEvery(Actions.CREATE_FEED_POST, createFeedPostSaga);
  
}
