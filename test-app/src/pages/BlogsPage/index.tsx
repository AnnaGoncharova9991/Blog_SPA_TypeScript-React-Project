import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { blogsActionCreators } from '../../redux/actions/blogsActionCreators';
import {
  blogsPostsBlogsSelector,
  pagesCountBlogsSelector,
  currentPageBlogsSelector,
} from '../../redux/selectors/blogsSelectors';
import BlogList from '../../components/BlogList';
import Pagination from '../../components/Pagination';
import './BlocksPage.scss';

const BlogsPage = () => {
  const dispatch = useAppDispatch();
  const blogs = useAppSelector(blogsPostsBlogsSelector);
  const pagesCount = useAppSelector(pagesCountBlogsSelector);
  const page: number = useAppSelector(currentPageBlogsSelector);
  console.log(page, pagesCount);

  const onPageChange = (page: number | string) => {
    dispatch(blogsActionCreators.getBlogsWithPage(page));
  };

  useEffect(() => {
    dispatch(blogsActionCreators.getBlogs());
    dispatch(blogsActionCreators.setPagesCount());
  }, [dispatch]);

  return (
    <>
      {pagesCount && (
        <>
          <h2>Blogs</h2>
          <BlogList blogs={blogs} />
          <Pagination
            currentPage={page}
            pageCount={pagesCount}
            blogsPerPageLimit={10}
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
