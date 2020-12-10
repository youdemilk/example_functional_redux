import { call, put } from "redux-saga/effects";
import {
  FETCH_COMMENTS_FAILED,
  FETCH_COMMENTS_SUCCESS,
  FETCH_POSTS_FAILED,
  FETCH_POSTS_SUCCESS,
} from "../../consts/consts";

export function* fetchPosts(api) {
  try {
    const response = yield call(api.getPosts);

    if (response.ok) {
      yield put({
        type: FETCH_POSTS_SUCCESS,
        payload: response.data,
      });
    }

    if (!response.ok) {
      yield put({ type: FETCH_POSTS_FAILED, payload: response });
    }
  } catch (error) {
    yield put({ type: FETCH_POSTS_FAILED, payload: error });
  }
}

export function* fetchComments(api) {
  try {
    const response = yield call(api.getComments);

    if (response.ok) {
      yield put({
        type: FETCH_COMMENTS_SUCCESS,
        payload: response.data,
      });
    }

    if (!response.ok) {
      yield put({ type: FETCH_COMMENTS_FAILED, payload: response });
    }
  } catch (error) {
    yield put({ type: FETCH_COMMENTS_FAILED, payload: error });
  }
}
