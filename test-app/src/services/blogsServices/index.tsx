import { AxiosResponse } from "axios";
import { axiosContent } from "../../api";
import { IBlogPost } from "../../types/blogsTypes";

export const getBlogs = async ({filter = ''}: {filter?: string}) => {
    return await axiosContent.get<IBlogPost[] >(`/v3/blogs?summary_contains=${filter}`);
}