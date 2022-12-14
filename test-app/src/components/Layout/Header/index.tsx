import React, { useEffect, useState, useCallback, useRef }from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { authActionCreators } from '../../../redux/actions/authActionCreators';
import { blogsActionCreators } from '../../../redux/actions/blogsActionCreators';
import { articlesActionCreators } from '../../../redux/actions/articlesActionCreators';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { dataAuthSelector, isAuthAuthSelector } from '../../../redux/selectors/authSelectors';
import { isActivePageArticlesSelector, filterArticlesSelector } from '../../../redux/selectors/articlesSelectors';
import { isActivePageBlogsSelector, filterBlogsSelector } from '../../../redux/selectors/blogsSelectors';
import { getUserInitials } from '../../../utils/searchForm';
import Button from '../../Button';
import Input from '../../Input';
import './Header.scss';
import useWindowSize from '../../../redux/hooks/useWindowSize';
import Burger from '../../Burger';

const Header = () => {
  const dispatch = useAppDispatch();
  const { username } = useAppSelector(dataAuthSelector);
  const isAuth = useAppSelector(isAuthAuthSelector);
  const IsArticlesPageActive = useAppSelector(isActivePageArticlesSelector);
  const IsBlogsPageActive = useAppSelector(isActivePageBlogsSelector);
  const blogsFilter = useAppSelector(filterBlogsSelector);
  const articlesFilter = useAppSelector(filterArticlesSelector);
  const [userInitials, setUserInitials] = useState('');
  const [searchForm, setSearchForm] = useState({ searchText: '' });
  const [isSearchFormActive, setIsSearchFormActive] = useState(false);
  const faSearchIcon = faSearch as IconProp;
  const faCross = faXmark as IconProp;
  const inputReference = useRef(null);

  const size = useWindowSize();

  const toggling = () => setIsSearchFormActive(!isSearchFormActive);

  const onBlogSearchForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    IsBlogsPageActive && (
      <>
        {dispatch(blogsActionCreators.getBlogsWithFilter(searchForm.searchText))}
        {dispatch(articlesActionCreators.setArticlesFilter(''))}
      </>
    );
  };

  const onArticleSearchForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    IsArticlesPageActive && (
      <>
        {dispatch(articlesActionCreators.getArticlesWithFilter(searchForm.searchText))}
        {dispatch(blogsActionCreators.setBlogsFilter(''))}
      </>
    );
  };

  const onSearchTextChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchForm((prevState) => ({ ...prevState, searchText: e.target.value }));
  }, []);

  useEffect(() => {
    setUserInitials(getUserInitials(username));
    setSearchForm({ searchText: '' });
  }, [username, IsBlogsPageActive, IsArticlesPageActive]);

  const onLogOut = useCallback(() => {
    dispatch(authActionCreators.logOut());
  }, [dispatch]);

  const cleanInput = useCallback(() =>{
    setSearchForm((prevState) => ({ ...prevState, searchText: '' }));
    IsArticlesPageActive && (
      <>
        {dispatch(articlesActionCreators.getArticlesWithFilter(searchForm.searchText))}
        {dispatch(blogsActionCreators.setBlogsFilter(''))}
      </>
    );
    IsBlogsPageActive && (
      <>
        {dispatch(blogsActionCreators.getBlogsWithFilter(searchForm.searchText))}
        {dispatch(articlesActionCreators.setArticlesFilter(''))}
      </>
    );
    
  }, [dispatch, IsBlogsPageActive, IsArticlesPageActive]);

  return (
    <>
      <header>
        <div className='logo-img'></div>
        {isAuth && (
          <>
            {size?.width && size?.width > 520 ? (
              <form
                className='search-form-wpapper'
                onSubmit={(e) => {
                  onBlogSearchForm(e);
                  onArticleSearchForm(e);
                }}
              >
                { isSearchFormActive && <Input className='search-input-fild' value={searchForm.searchText} onChange={onSearchTextChange} ref={inputReference}/>
                }

                {searchForm.searchText !== '' ? (
                  <FontAwesomeIcon className='cross-icon' icon={faCross} onClick={cleanInput}/>
                ) : (
                  <FontAwesomeIcon className='search-icon' icon={faSearchIcon} onClick={toggling}/>
                )}

                <div className='header-username-wrapper'>
                  <div className='userInitials'>
                    <p>{userInitials}</p>
                  </div>
                  <div className='username-text'>
                    <p>{username}</p>
                  </div>
                  <Button className='header-logout-btn' type='button' text='Log Out' onClick={onLogOut} />
                </div>
              </form>
            ) : (
              <Burger />
            )}
          </>
        )}
      </header>
    </>
  );
};
export default Header;
