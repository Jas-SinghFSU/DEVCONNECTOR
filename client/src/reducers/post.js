import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST
} from "../actions/types";

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case UPDATE_LIKES:
      return {
        ...state,
        //Go through all the posts in the post state, and if the post in the state is the one we clicked, then change it's likes/dislikes inside the state. For all the other posts that we didn't alter, just return themselves
        posts: state.posts.map(post =>
          post._id === payload.postId ? { ...post, likes: payload.likes } : post
        ),
        loading: false
      };
    case DELETE_POST:
      return {
        ...state,
        // Filter the posts to remove the one of the id that we deleted
        posts: state.posts.filter(post => post._id !== payload.postId),
        loading: false
      };

    default:
      return state;
  }
}
