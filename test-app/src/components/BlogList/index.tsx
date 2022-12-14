import React from 'react';
import { IBlogPost } from '../../types/blogsTypes';
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';
import './BlogList.scss';

interface IBlogList {
  blogs: IBlogPost[];
}

const BlogList = ({ blogs }: IBlogList) => {
  return (
    <div className='list-wrapper'>
      <ul className='blogs-list'>
        {blogs.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/blog/${item.id}`}>
                <BlogCard title={item.title} imageUrl={item.imageUrl} publishedAt={item.publishedAt} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogList;
