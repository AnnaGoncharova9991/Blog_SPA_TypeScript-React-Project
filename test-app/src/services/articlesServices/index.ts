import { AxiosResponse } from 'axios';
import { axiosContent } from '../../api';
import { IArticlePost, IArticlesResponsePagesCount } from '../../types/articlesTypes';

export const getArticles = async ({
  filter = '',
  page = 1,
  limit = 12,
  sort = '',
}: {
  filter?: string;
  page?: number;
  limit?: number;
  sort?: string;
}) => {
  return await axiosContent.get<IArticlePost[]>(
    `/v3/articles?_limit=${limit}&summary_contains=${filter}&_start=${limit * (page - 1)}&_sort=${sort}`
  );
};

export const getOneArticle = async ({ id = '' }: { id: string }) => {
  return await axiosContent.get<IArticlePost>(`/v3/articles/${id}`);
};

export const getPagesCount = async () => {
  return await axiosContent.get<IArticlesResponsePagesCount>(`/v3/articles/count`);
};