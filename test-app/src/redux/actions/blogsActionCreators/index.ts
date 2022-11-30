import { BlobOptions } from 'buffer';
import { IBlogPost } from '../../../types/blogsTypes';
import { InferActionType } from '../../store';
import {
  GET_BLOGS,
  GET_PAGES_COUNT,
  BLOGS_LOADING,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAILURE,
  GET_BLOGS_PAGES_COUNT_SUCCESS,
  GET_BLOGS_WITH_FILTER,
  SET_BLOGS_FILTER,
  SET_BLOGS_SORT,
  GET_BLOGS_WITH_SORT,
  GET_BLOGS_WITH_PAGE,
  SET_PAGE,
} from '../actions';

export const blogsActionCreators = {
  // redux-saga
  getBlogs: ( sort : string) => {
    return {
      type: GET_BLOGS,
      payload: { sort }
    };
  },

  setPagesCount: () => {
    return {
      type: GET_PAGES_COUNT,
    };
  },

  // reducers
  setBlogsLoading: (isLoading: boolean) => {
    return {
      type: BLOGS_LOADING,
      payload: isLoading,
    };
  },

  getBlogsSuccess: (blogs: IBlogPost[]) => {
    return {
      type: GET_BLOGS_SUCCESS,
      payload: blogs,
    };
  },

  getBlogsFailure: (error: string) => {
    return {
      type: GET_BLOGS_FAILURE,
      payload: error,
    };
  },
  getBlogsPagesCountSuccess: (count: number) => {
    return {
      type: GET_BLOGS_PAGES_COUNT_SUCCESS,
      payload: count,
    };
  },

  //with filter
  getBlogsWithFilter: (filter: string) => {
    return {
      type: GET_BLOGS_WITH_FILTER,
      payload: filter,
    };
  },

  setBlogsFilter: (filter: string) => {
    return {
      type: SET_BLOGS_FILTER,
      payload: filter,
    };
  },

    setBlogsSort: (sort: string) => {
        return { 
            type: SET_BLOGS_SORT,
            payload: sort
        };
    },

    getBlogsWithSort: (sort: string) => {
        return { 
            type: GET_BLOGS_WITH_SORT,
            payload: sort
        };
    },


  //with pagination
  getBlogsWithPage: (page: number | string) => {
    return {
      type: GET_BLOGS_WITH_PAGE,
      payload: page,
    };
  },

  setBlogsPage: (page: number | string) => {
    return {
      type: SET_PAGE,
      payload: page,
    };
  },
};

export type AuthActionType = InferActionType<typeof blogsActionCreators>;
