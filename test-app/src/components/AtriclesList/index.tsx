import React from 'react';
import ArticleCard from './ArticleCard';
import { IArticlePost } from '../../types/articlesTypes';
import { Link } from 'react-router-dom';
import './ArticlesList.scss';

interface IArticlesList {
  articles: IArticlePost[];
}

const ArticlesList = ({ articles }: IArticlesList) => {
  return (
    <div className='list-wrapper'>
      <ul className='articles-list'>
        {articles.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/articles/${item.id}`}>
                <ArticleCard title={item.title} imageUrl={item.imageUrl} publishedAt={item.publishedAt} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default React.memo(ArticlesList);
