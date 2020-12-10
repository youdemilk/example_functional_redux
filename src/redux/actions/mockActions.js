import {
  FETCH_COMMENTS_FAILED,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_REQUEST,
  FETCH_POSTS_FAILED,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_REQUEST,
} from "../../consts/consts";
import { create } from "../../services/api";

const api = create();

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsUpdateAction());

    try {
      const response = await api.getPosts();

      dispatch(fetchPostsSuccessAction(response.data));
    } catch (err) {
      dispatch(fetchPostsFailedAction(err.message));
    }
  };
};
//
// export const fetchComments = () => {
//   return async (dispatch) => {
//     dispatch(fetchCommentsUpdateAction());
//
//     try {
//       const response = await api.getComments();
//
//       dispatch(fetchCommentsSuccessAction(response.data));
//     } catch (err) {
//       dispatch(fetchCommentsFailedAction(err.message));
//     }
//   };
// };

export const fetchPostsSuccessAction = (payload) => ({
  type: FETCH_POSTS_SUCCESS,
  payload,
});

export const fetchPostsUpdateAction = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsFailedAction = (payload) => ({
  type: FETCH_POSTS_FAILED,
  payload,
});

export const fetchCommentsSuccessAction = (payload) => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload,
});

export const fetchCommentsUpdateAction = () => ({
  type: FETCH_COMMENTS_REQUEST,
});

export const fetchCommentsFailedAction = (payload) => ({
  type: FETCH_COMMENTS_FAILED,
  payload,
});
