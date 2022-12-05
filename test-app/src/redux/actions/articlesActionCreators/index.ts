import {
  GET_ARTICLES,
  ARTICLES_LOADING,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLES_FAILURE,
  GET_ARTICLE_FAILURE,
  GET_ONE_ARTICLE,
  GET_PAGES_COUNT,
  GET_ARTICLES_WITH_FILTER,
  SET_ARTICLES_FILTER,
  GET_ARTICLES_WITH_PAGE,
  SET_ARTICLES_PAGE,
  GET_ARTICLES_WITH_SORT,
  SET_ARTICLES_SORT,
  GET_ARTICLES_PAGES_COUNT_SUCCESS,
  SET_ARTICLE_ISACTIVE_PAGE,
} from '../actions';
import { InferActionType } from '../../store';
import { IArticlePost } from '../../../types/articlesTypes';

export const articlesActionCreators = {
  // redux-saga
  getArticles: (sort: string) => {
    return {
      type: GET_ARTICLES,
      payload: { sort },
    };
  },

  getOneArticle: (id: string) => {
    return {
      type: GET_ONE_ARTICLE,
      payload: { id },
    };
  },

  setPagesCount: () => {
    return {
      type: GET_PAGES_COUNT,
    };
  },

  // reducers
  setArticlesLoading: (isLoading: boolean) => {
    return {
      type: ARTICLES_LOADING,
      payload: isLoading,
    };
  },

  getArticlesSuccess: (articles: IArticlePost[]) => {
    return {
      type: GET_ARTICLES_SUCCESS,
      payload: articles,
    };
  },

  getArticleSuccess: (article: IArticlePost) => {
    return {
      type: GET_ARTICLE_SUCCESS,
      payload: article,
    };
  },

  getArticlesFailure: (error: string) => {
    return {
      type: GET_ARTICLES_FAILURE,
      payload: error,
    };
  },

  getArticleFailure: (error: string) => {
    return {
      type: GET_ARTICLE_FAILURE,
      payload: error,
    };
  },

  getArticlesPagesCountSuccess: (count: number) => {
    return {
      type: GET_ARTICLES_PAGES_COUNT_SUCCESS,
      payload: count,
    };
  },

  setArticlesPageIsActive: (isActive: boolean) => {
    return {
      type: SET_ARTICLE_ISACTIVE_PAGE,
      payload: isActive,
    };
  },

  //with filter
  getArticlesWithFilter: (filter: string) => {
    return {
      type: GET_ARTICLES_WITH_FILTER,
      payload: filter,
    };
  },

  setArticlesFilter: (filter: string) => {
    return {
      type: SET_ARTICLES_FILTER,
      payload: filter,
    };
  },

  setArticlesSort: (sort: string) => {
    return {
      type: SET_ARTICLES_SORT,
      payload: sort,
    };
  },

  getArticlesWithSort: (sort: string) => {
    return {
      type: GET_ARTICLES_WITH_SORT,
      payload: sort,
    };
  },

  //with pagination
  getArticlesWithPage: (page: number | string) => {
    return {
      type: GET_ARTICLES_WITH_PAGE,
      payload: page,
    };
  },

  setArticlesPage: (page: number | string) => {
    return {
      type: SET_ARTICLES_PAGE,
      payload: page,
    };
  },
};

export type ArticlesActionType = InferActionType<typeof articlesActionCreators>;
