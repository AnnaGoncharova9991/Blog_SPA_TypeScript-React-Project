import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { blogsActionCreators } from '../../redux/actions/blogsActionCreators';
import {
  blogsPostsBlogsSelector,
  pagesCountBlogsSelector,
  currentPageBlogsSelector,
  sortBlogsSelector,
} from '../../redux/selectors/blogsSelectors';
import Select from '../../components/Select';
import BlogList from '../../components/BlogList';
import Pagination from '../../components/Pagination';
import './BlocksPage.scss';
import Tab from '../../components/Tab';
import { articlesActionCreators } from '../../redux/actions/articlesActionCreators';

const OPTIONS = [
  { label: 'Clean sort', value: '' },
  { label: 'Title (A-Z)', value: 'title' },
  { label: 'Description (A-Z)', value: 'summary' },
];

const TAB_BUTTONS = [
  { btnName: 'Blogs', btnPathTo: '/blogs' },
  { btnName: 'Articles', btnPathTo: '/articles' },
];

const BlogsPage = () => {
  const dispatch = useAppDispatch();
  const blogs = useAppSelector(blogsPostsBlogsSelector);
  const pagesCount = useAppSelector(pagesCountBlogsSelector);
  const page: number = useAppSelector(currentPageBlogsSelector);
  const sortItem: string = useAppSelector(sortBlogsSelector);

  const onSortChange = (sortItem: string) => {
    dispatch(blogsActionCreators.getBlogsWithSort(sortItem));
  };

  const onPageChange = (page: number | string) => {
    dispatch(blogsActionCreators.getBlogsWithPage(page));
  };

  useEffect(() => {
    dispatch(blogsActionCreators.getBlogs(sortItem));
    dispatch(blogsActionCreators.setPagesCount());
    dispatch(articlesActionCreators.setArticlesPageIsActive(false));
    dispatch(blogsActionCreators.setBlogsPageIsActive(true));
  }, [dispatch]);

  return (
    <>
      {pagesCount && (
        <>
          <h2 className='blogs-title'>Blogs</h2>
          <Tab btnsDescription={TAB_BUTTONS} activeBtn = {'Blogs'}/>
          <Select
            options={OPTIONS} onSortChange={(sortItem) => onSortChange(sortItem)}
          />
          <BlogList blogs={blogs} />
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

export default BlogsPage;
