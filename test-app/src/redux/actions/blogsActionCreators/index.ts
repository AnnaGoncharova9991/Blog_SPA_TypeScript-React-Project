import { BlobOptions } from "buffer";
import { IBlogPost } from "../../../types/blogsTypes";
import { InferActionType } from "../../store";
import { GET_BLOGS, BLOGS_LOADING, GET_BLOGS_SUCCESS, GET_BLOGS_FAILURE } from "../actions";

export const blogsActionCreators = {
  // redux-saga
  getBlogs: () => {
    return {
      type: GET_BLOGS,
    }
  },

  // reducers
  setBlogsLoading: (isLoading: boolean) => {
    return{
        type: BLOGS_LOADING,
        payload: isLoading,
    }
  },

  getBlogsSuccess: (blogs: IBlogPost[]) => {
    return {
        type: GET_BLOGS_SUCCESS,
        payload: blogs,
    }
  },

  getBlogsFailure: (error: string) => {
    return {
        type: GET_BLOGS_FAILURE,
        payload: error,
    }
  },

};

export type AuthActionType = InferActionType<typeof blogsActionCreators>;
