import React, { useEffect, useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { blogsActionCreators } from '../../redux/actions/blogsActionCreators';
import {
  blogsPostsBlogsSelector,
  pagesCountBlogsSelector,
  currentPageBlogsSelector,
  sortBlogsSelector,
  isLoadingBlogsSelector,
} from '../../redux/selectors/blogsSelectors';
import Select from '../../components/Select';
import BlogList from '../../components/BlogList';
import Pagination from '../../components/Pagination';
import Tab from '../../components/Tab';
import Preloader from '../../components/Preloader';
import { articlesActionCreators } from '../../redux/actions/articlesActionCreators';
import { OPTIONS } from '../../constants';
import { TAB_BUTTONS } from '../../constants';
import useWindowSize from '../../redux/hooks/useWindowSize';
import './BlocksPage.scss';

const BlogsPage = () => {
  const dispatch = useAppDispatch();
  const blogs = useAppSelector(blogsPostsBlogsSelector);
  const pagesCount = useAppSelector(pagesCountBlogsSelector);
  const page: number = useAppSelector(currentPageBlogsSelector);
  const sortItem: string = useAppSelector(sortBlogsSelector);
  const isLoading = useAppSelector(isLoadingBlogsSelector);

  const size = useWindowSize();

  const onSortChange = useCallback(
    (sortItem: string) => {
      dispatch(blogsActionCreators.getBlogsWithSort(sortItem));
    },
    [dispatch, sortItem]
  );

  const onPageChange = useCallback(
    (page: number | string) => {
      dispatch(blogsActionCreators.getBlogsWithPage(page));
    },
    [dispatch, page]
  );

  useEffect(() => {
    dispatch(blogsActionCreators.getBlogs(sortItem));
    dispatch(blogsActionCreators.setPagesCount());
    dispatch(blogsActionCreators.setBlogsPageIsActive(true));
    dispatch(articlesActionCreators.setArticlesPageIsActive(false));
  }, [dispatch]);

  return (
    <>
      {!isLoading ? (
        <>
          {pagesCount && (
            <>
              <h2 className='blogs-title'>Blogs</h2>
              {size?.width && size?.width > 520 && <Tab btnsDescription={TAB_BUTTONS} activeBtn={'Blogs'} />}
              <Select options={OPTIONS} onSortChange={(sortItem) => onSortChange(sortItem)} />
              <div className='blogs-wrapper'>
                <BlogList blogs={blogs} />
                { blogs.length!! &&
                  (<Pagination
                  currentPage={page}
                  pageCount={pagesCount}
                  blogsPerPageLimit={12}
                  className='pagination-bar'
                  siblingCount={1}
                  onPageChange={(page) => onPageChange(page)}
                />)
                }
                
              </div>
            </>
          )}
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default BlogsPage;
