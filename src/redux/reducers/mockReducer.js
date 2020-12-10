import {
  FETCH_COMMENTS_FAILED,
  FETCH_COMMENTS_SUCCESS,
  FETCH_POSTS_FAILED,
  FETCH_POSTS_SUCCESS,
} from "../../consts/consts";

const INITIAL_STATE = {
  posts: [],
  comments: [],
};

export const mockReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload };
    case FETCH_POSTS_FAILED:
      return state;
    case FETCH_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload };
    case FETCH_COMMENTS_FAILED:
      return state;
    default:
      return state;
  }
};
