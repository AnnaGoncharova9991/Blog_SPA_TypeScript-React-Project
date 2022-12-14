import { RootState } from '../../store';

export const blogsPostsBlogsSelector = (state: RootState) => state.blogs.blogs;
export const filterBlogsSelector = (state: RootState) => state.blogs.filter;
export const pagesCountBlogsSelector = (state: RootState) => state.blogs.pageCount;
export const sortBlogsSelector = (state: RootState) => state.blogs.sort;
export const currentPageBlogsSelector = (state: RootState) => state.blogs.currentPage;
export const isActivePageBlogsSelector = (state: RootState) => state.blogs.isActivePage;
export const isLoadingBlogsSelector = (state: RootState) => state.blogs.isLoading;

