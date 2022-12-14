import { RootState } from '../../store';

export const articlesPostsArticlesSelector = (state: RootState) => state.articles.articles;
export const filterArticlesSelector = (state: RootState) => state.articles.filter;
export const pagesCountArticlesSelector = (state: RootState) => state.articles.pageCount;
export const sortArticlesSelector = (state: RootState) => state.articles.sort;
export const currentPageArticlesSelector = (state: RootState) => state.articles.currentPage;
export const isActivePageArticlesSelector = (state: RootState) => state.articles.isActivePage;
export const isLoadingArticlesSelector = (state: RootState) => state.articles.isLoading;
