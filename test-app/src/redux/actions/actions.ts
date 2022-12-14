// auth actions
export const LOGIN = 'LOGIN' as const;
export const AUTH_LOADING = 'AUTH_LOADING' as const;
export const GET_LOGIN_DATA_SUCCESS = 'GET_LOGIN_DATA_SUCCESS' as const;
export const GET_LOGIN_DATA_FAILURE = 'GET_LOGIN_DATA_FAILURE' as const;
export const LOGOUT = 'LOGOUT' as const;

//blogs
export const GET_BLOGS = 'GET_BLOGS' as const;
export const GET_ONE_BLOG = 'GET_ONE_BLOG' as const;
export const GET_PAGES_COUNT = 'GET_PAGES_COUNT' as const;
export const BLOGS_LOADING = 'BLOGS_LOADING' as const;
export const GET_BLOGS_SUCCESS = 'GET_BLOGS_SUCCESS' as const;
export const GET_BLOG_SUCCESS = 'GET_BLOG_SUCCESS' as const;
export const GET_BLOGS_PAGES_COUNT_SUCCESS = 'GET_BLOGS_PAGES_COUNT_SUCCESS' as const;
export const GET_BLOGS_FAILURE = 'GET_BLOGS_FAILURE' as const;
export const GET_BLOG_FAILURE = 'GET_BLOG_FAILURE' as const;
export const GET_BLOGS_WITH_FILTER = 'GET_BLOGS_WITH_FILTER' as const;
export const SET_BLOGS_FILTER = 'SET_BLOGS_FILTER' as const;
export const SET_BLOGS_SORT = 'SET_BLOGS_SORT' as const;
export const GET_BLOGS_WITH_SORT = 'GET_BLOGS_WITH_SORT' as const;
export const GET_BLOGS_WITH_PAGE = 'GET_BLOGS_WITH_PAGE' as const;
export const SET_BLOGS_PAGE = 'SET_PAGE' as const;
export const SET_BLOGS_ISACTIVE_PAGE = 'SET_BLOGS_ISACTIVE_PAGE' as const;

//articles
export const ARTICLES_LOADING = 'ARTICLES_LOADING' as const;
export const GET_ARTICLES = 'GET_ARTICLES' as const;
export const GET_ONE_ARTICLE = 'GET_ONE_ARTICLE' as const;
export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS' as const;
export const GET_ARTICLE_SUCCESS = 'GET_ARTICLE_SUCCESS' as const;
export const GET_ARTICLES_FAILURE = 'GET_ARTICLES_FAILURE' as const;
export const GET_ARTICLE_FAILURE = 'GET_ARTICLE_FAILURE' as const;
export const GET_ARTICLES_WITH_FILTER = 'GET_ARTICLES_WITH_FILTER' as const;
export const SET_ARTICLES_FILTER = 'SET_ARTICLES_FILTER' as const;
export const GET_ARTICLES_WITH_PAGE = 'GET_ARTICLES_WITH_PAGE' as const;
export const GET_ARTICLES_PAGES_COUNT_SUCCESS = 'GET_ARTICLES_PAGES_COUNT_SUCCESS' as const;
export const SET_ARTICLES_PAGE = 'SET_ARTICLES_PAGE' as const;
export const GET_ARTICLES_WITH_SORT = 'GET_ARTICLES_WITH_SORT' as const;
export const SET_ARTICLES_SORT = 'SET_ARTICLES_SORT' as const;
export const SET_ARTICLE_ISACTIVE_PAGE = 'SET_ARTICLE_ISACTIVE_PAGE' as const;