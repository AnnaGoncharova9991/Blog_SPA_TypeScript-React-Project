import { IBlogPost } from '../../../types/blogsTypes';
import {
  BLOGS_LOADING,
  GET_BLOGS_SUCCESS,
  GET_BLOG_SUCCESS,
  GET_BLOGS_FAILURE,
  GET_BLOG_FAILURE,
  SET_BLOGS_FILTER,
  SET_BLOGS_SORT,
  GET_BLOGS_PAGES_COUNT_SUCCESS,
  SET_BLOGS_PAGE,
  SET_BLOGS_ISACTIVE_PAGE,
} from '../../actions/actions';

interface IInitialBlogsPage {
  blogs: IBlogPost[];
  isLoading: boolean;
  error: null | string;
  filter: string;
  currentPage: number;
  pageCount: number;
  sort: string;
  isActivePage: boolean;
}

const initialState: IInitialBlogsPage = {
  blogs: [],
  isLoading: false,
  error: null,
  filter: '',
  currentPage: 1,
  pageCount: 0,
  sort: '',
  isActivePage: true,
};

const blogsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case BLOGS_LOADING:
      return { ...state, isLoading: action.payload };
    case GET_BLOGS_SUCCESS:
      return { ...state, blogs: [...action.payload], error: null };
    case GET_BLOG_SUCCESS:
      return { ...state, blogs: [{...action.payload}], error: null };
    case GET_BLOGS_FAILURE:
      return { ...state, error: action.payload };
    case GET_BLOG_FAILURE:
      return { ...state, error: action.payload };
    case SET_BLOGS_FILTER:
      return { ...state, filter: action.payload };
    case SET_BLOGS_SORT:
      return { ...state, sort: action.payload };
    case SET_BLOGS_PAGE:
      return { ...state, currentPage: action.payload };
    case GET_BLOGS_PAGES_COUNT_SUCCESS:
      return { ...state, pageCount: action.payload };
    case SET_BLOGS_ISACTIVE_PAGE:
      return { ...state, isActivePage: action.payload, currentPage: 1, filter: '', sort: ''};
  }
  return state;
};

export default blogsReducer;
