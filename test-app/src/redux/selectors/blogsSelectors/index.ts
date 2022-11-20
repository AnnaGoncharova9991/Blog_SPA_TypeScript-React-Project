import { RootState } from "../../store";

export const blogsPostsBlogsSelector = (state: RootState) => state.blogs.blogs;
export const filterBlogsSelector = (state: RootState) => state.blogs.filter;
