import { all, takeLatest } from "redux-saga/effects";
import { create } from "../../services/api";
import {
  FETCH_COMMENTS_REQUEST,
  FETCH_POSTS_REQUEST,
} from "../../consts/consts";
import { fetchComments, fetchPosts } from "./mockSaga";

export const rootSaga = function* root() {
  const api = create();

  yield all([
    takeLatest(FETCH_POSTS_REQUEST, fetchPosts, api),
    takeLatest(FETCH_COMMENTS_REQUEST, fetchComments, api),
  ]);
};
