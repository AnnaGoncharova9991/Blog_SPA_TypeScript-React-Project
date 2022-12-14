import React from 'react';
import './ArticleCard.scss';

interface IArticleCard {
  title: string;
  imageUrl: string;
  publishedAt: string;
}

const ArticleCard = ({ title, imageUrl, publishedAt }: IArticleCard) => {
  return (
    <div className='article-card-wrapper'>
      <>
        <div className='article-card-img-wrapper'>
          <img className='articlecard-img' src={imageUrl} />
        </div>
        <div className='article-card-text-wrapper'>
          <span className='article-card-published-date'>{publishedAt}</span>
          <h4 className='article-card-text'>{title}</h4>
        </div>
      </>
    </div>
  );
};

export default React.memo(ArticleCard);
