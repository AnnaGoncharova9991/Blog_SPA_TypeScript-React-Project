import React, { useState, useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { articlesActionCreators } from '../../redux/actions/articlesActionCreators';
import { blogsActionCreators } from '../../redux/actions/blogsActionCreators';
import {
  articlesPostsArticlesSelector,
  pagesCountArticlesSelector,
  currentPageArticlesSelector,
  sortArticlesSelector,
} from '../../redux/selectors/articlesSelectors';
import Select from '../../components/Select';
import Pagination from '../../components/Pagination';
import Tab from '../../components/Tab';
import './ArticlesPage.scss';
import ArticlesList from '../../components/AtriclesList';
import { OPTIONS, TAB_BUTTONS } from '../../constants';

const ArticlesPage = () => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector(articlesPostsArticlesSelector);
  const pagesCount = useAppSelector(pagesCountArticlesSelector);
  const page: number = useAppSelector(currentPageArticlesSelector);
  const sortItem: string = useAppSelector(sortArticlesSelector);

  const onSortChange = useCallback(
    (sortItem: string) => {
      dispatch(articlesActionCreators.getArticlesWithSort(sortItem));
    },
    [dispatch, sortItem]
  );

  const onPageChange = useCallback(
    (page: number | string) => {
      dispatch(articlesActionCreators.getArticlesWithPage(page));
    },
    [dispatch, page]
  );

  useEffect(() => {
    dispatch(articlesActionCreators.getArticles(sortItem));
    dispatch(articlesActionCreators.setPagesCount());
    dispatch(articlesActionCreators.setArticlesPageIsActive(true));
    dispatch(blogsActionCreators.setBlogsPageIsActive(false));
  }, [dispatch]);

  return (
    <>
      {pagesCount && (
        <>
          <h2 className='articles-title'>Articles</h2>
          <Tab btnsDescription={TAB_BUTTONS} activeBtn={'Articles'} />
          <Select
            options={OPTIONS}
            onSortChange={(sortItem) => onSortChange(sortItem)}
          />
          <ArticlesList articles={articles} />
          <Pagination
            currentPage={page}
            pageCount={pagesCount}
            blogsPerPageLimit={12}
            className='pagination-bar'
            siblingCount={1}
            onPageChange={(page) => onPageChange(page)}
          />
        </>
      )}
    </>
  );
};

export default ArticlesPage;
