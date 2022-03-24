import * as api from "../api";

interface actionType {
  type: string;
  payload: [];
}
export const getPosts =
  () => async (dispatch: (action: actionType) => void) => {
    try {
      const { data } = await api.fetchPosts();
      dispatch({ type: "FETCH_ALL", payload: data });
    } catch (error: any) {
      console.log(error.message);
    }
  };

export const createPost = (post: any) => async (dispatch: any) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (err: any) {
    console.log(err);
  }
};
