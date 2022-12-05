import ArticleCard from './ArticleCard';
import { IArticlePost } from '../../types/articlesTypes';
import { Link } from 'react-router-dom';
import './ArticlesList.scss';

interface IArticlesList {
  articles: IArticlePost[];
}

const ArticlesList = ({ articles }: IArticlesList) => {
  return (
    <ul>
      {articles.map((item) => {
        return (
          <li key={item.id}>
            <Link to={`/articles/${item.id}`}>
              <ArticleCard
                title={item.title}
                imageUrl={item.imageUrl}
                publishedAt={item.publishedAt}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ArticlesList;
