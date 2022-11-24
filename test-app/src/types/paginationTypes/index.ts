export interface IPaginationProps extends React.ComponentProps<'button'> {
    currentPage: number;
    pageCount: number;
    blogsPerPageLimit: number;
    siblingCount: number;
    className: string;
    onPageChange: (page: number | string) => void;
  };

  export interface IUsePaginationProps {
    currentPage: number;
    pageCount: number;
    siblingCount: number;
    blogsPerPageLimit: number;
  };