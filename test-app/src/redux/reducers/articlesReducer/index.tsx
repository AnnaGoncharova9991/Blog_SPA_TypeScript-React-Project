import { IArticlePost } from '../../../types/articlesTypes';
import {
  ARTICLES_LOADING,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLES_FAILURE,
  GET_ARTICLE_FAILURE,
  SET_ARTICLES_FILTER,
  SET_ARTICLES_SORT,
  SET_ARTICLES_PAGE,
  GET_ARTICLES_PAGES_COUNT_SUCCESS,
  SET_ARTICLE_ISACTIVE_PAGE,
} from '../../actions/actions';

interface IInitialArticlesPage {
  articles: IArticlePost[];
  isLoading: boolean;
  error: null | string;
  filter: string;
  currentPage: number;
  pageCount: number;
  sort: string;
  isActivePage: boolean;
}

const initialState: IInitialArticlesPage = {
  articles: [],
  isLoading: false,
  error: null,
  filter: '',
  currentPage: 1,
  pageCount: 0,
  sort: '',
  isActivePage: false,
};

const articlesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ARTICLES_LOADING:
      return { ...state, isLoading: action.payload };
    case GET_ARTICLES_SUCCESS:
      return { ...state, articles: [...action.payload], error: null };
    case GET_ARTICLE_SUCCESS:
      return { ...state, articles: [{...action.payload}], error: null };
    case GET_ARTICLES_FAILURE:
      return { ...state, error: action.payload };
    case GET_ARTICLE_FAILURE:
      return { ...state, error: action.payload };
    case SET_ARTICLES_FILTER:
      return { ...state, filter: action.payload };
    case SET_ARTICLES_SORT:
      return { ...state, sort: action.payload };
    case SET_ARTICLES_PAGE:
      return { ...state, currentPage: action.payload };
    case GET_ARTICLES_PAGES_COUNT_SUCCESS:
      return { ...state, pageCount: action.payload };
    case SET_ARTICLE_ISACTIVE_PAGE:
      return { ...state, isActivePage: action.payload, currentPage: 1, filter: '', sort: '' };
  }
  return state;
    };
    
export default articlesReducer;