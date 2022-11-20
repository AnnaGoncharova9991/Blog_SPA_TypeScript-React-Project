import { BlobOptions } from "buffer";
import { IBlogPost } from "../../../types/blogsTypes";
import { InferActionType } from "../../store";
import { GET_BLOGS,
        BLOGS_LOADING,
        GET_BLOGS_SUCCESS,
        GET_BLOGS_FAILURE,
        GET_BLOGS_WITH_FILTER,
        SET_BLOGS_FILTER } from "../actions";

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

  //with filter
  getBlogsWithFilter: (filter: string) => {
    return {
        type: GET_BLOGS_WITH_FILTER,
        payload: filter,
    }
  },

  setBlogsFilter: (filter: string) => {
    return {
        type: SET_BLOGS_FILTER,
        payload: filter,
    }
  }

};

export type AuthActionType = InferActionType<typeof blogsActionCreators>;
