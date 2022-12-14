import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import Button from '../../components/Button';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { articlesActionCreators } from '../../redux/actions/articlesActionCreators';
import { articlesPostsArticlesSelector } from '../../redux/selectors/articlesSelectors';
import { Link } from 'react-router-dom';
import './ArticlePage.scss';
import { DOTS } from '../../constants';
import facebookImg from '../../img/facebook.png';
import twitterImg from '../../img/twitter.png';

const ArticlePage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [article] = useAppSelector(articlesPostsArticlesSelector);

  useEffect(() => {
    id && dispatch(articlesActionCreators.getOneArticle(id));
  }, [dispatch, id]);

  return (
    <>
      {article && (
        <div className='article-post-conteiner'>
          <div className='home-btn-wrapper'>
            <Link to={`/articles`}>
              <Button className='home-btn' text='Home' />
            </Link>
            <span className='article-post-id'> Post {id} </span>
          </div>
          <h2 className='article-post-title'>{article.title}</h2>
          <div className='article-post-img-wrapper'>
            <img className='article-post-img' src={`${article.imageUrl}`} />
          </div>
          <div className='article-post-text-wrapper'>
            <article>{article.summary}</article>
          </div>
          <div className='social-links-wrapper'>
            <div className='social-links-item'>
              <a href='https://www.facebook.com/'>
                <img className='facebook' src={facebookImg} alt='facebook' />
              </a>
            </div>
            <div className='social-links-item'>
              <a href='https://www.facebook.com/'>
                <img className='facebook' src={twitterImg} alt='facebook' />
              </a>
            </div>
            <div className='social-links-item'>
              <a href='#'>
                <p className='dots'>{DOTS}</p>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ArticlePage;
