import React from 'react';
import { usePagination } from '../../redux/hooks';
import { IPaginationProps } from '../../types/paginationTypes';
import { DOTS } from '../../constants';
import classnames from 'classnames';
import './Pagination.scss';

const Pagination = ({
  currentPage,
  pageCount,
  blogsPerPageLimit,
  className,
  siblingCount = 1,
  onPageChange,
  ...rest
}: IPaginationProps) => {
  let lastPage: number | string;

  const paginationRange = usePagination({
    currentPage,
    pageCount,
    siblingCount,
    blogsPerPageLimit,
  });

  if (paginationRange) {
    lastPage = paginationRange[paginationRange.length - 1];
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <ul
      className={classnames('pagination-container', { [className]: className })}
    >
      <li
        className={classnames('pagination-item pagination-item-arrow-start', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
        key='Prev'
      >
        <div className='arrow left' />
      </li>
      <div className='pagination-item-pages-wrapper'>
        {paginationRange?.map((pageNumber) => {
          if (pageNumber === DOTS || pageNumber === DOTS) {
            return (
              <li className='pagination-item dots' key={Math.random()}>
                &#8230;
              </li>
            );
          }

          return (
            <li
              className={classnames('pagination-item', {
                selected: pageNumber == currentPage,
              })}
              onClick={() => onPageChange(pageNumber)}
              key={pageNumber}
            >
              {pageNumber}
            </li>
          );
        })}
      </div>
      <li
        className={classnames('pagination-item pagination-item-arrow-end', {
          disabled: currentPage === lastPage!,
        })}
        onClick={onNext}
        key='Next'
      >
        <div className='arrow right' />
      </li>
    </ul>
  );
};

export default React.memo(Pagination);
