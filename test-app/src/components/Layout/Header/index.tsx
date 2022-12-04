import React from "react";
import { useEffect, useState, useCallback} from "react";
import { authActionCreators } from "../../../redux/actions/authActionCreators";
import { blogsActionCreators } from "../../../redux/actions/blogsActionCreators";
import { articlesActionCreators } from "../../../redux/actions/articlesActionCreators";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  dataAuthSelector,
  isAuthAuthSelector,
} from "../../../redux/selectors/authSelectors";
import { isActivePageArticlesSelector } from "../../../redux/selectors/articlesSelectors";
import { isActivePageBlogsSelector } from "../../../redux/selectors/blogsSelectors";
import Button from "../../Button";
import Input from "../../Input";
import "./Header.scss";

const Header = () => {
  const dispatch = useAppDispatch();
  const { username} = useAppSelector(dataAuthSelector);
  const isAuth = useAppSelector(isAuthAuthSelector);
  const IsArticlesPageActive = useAppSelector(isActivePageArticlesSelector);
  const IsBlogsPageActive = useAppSelector(isActivePageBlogsSelector);
  const [userInitials, setUserInitials] = useState("");

  const [searchForm, setSearchForm] = useState({searchText: ''})

  const onSearchTextChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchForm (prevState => ({ ...prevState, [e.target.id]: e.target.value}))
  }, []);

  const getUserInitials = (username: string): string => {
    if (username){
      const lettersOfUserName: string[] = username.split("");
      let userInitials = `${lettersOfUserName[0]}`;
      for (let i = 1; i < lettersOfUserName.length; i++) {
        if (lettersOfUserName[i] === "_") {
          userInitials += lettersOfUserName[i + 1];
        }
      }
      return userInitials.toUpperCase();
    } else {
      return '';
    }
  };

  useEffect(() => {
    setUserInitials(getUserInitials(username));
    setSearchForm({searchText: ''});
  }, [username, IsBlogsPageActive, IsArticlesPageActive]);

  const onLogOut = useCallback(() => {
   dispatch(authActionCreators.logOut());
  }, [dispatch]);

  return (
    <>
      <header>
        <div className="logo-img"></div>        
        {isAuth && (
          <>
            <form className="header-search-form-wpapper" 
                onSubmit = {(e) => {
                  e.preventDefault();
                  IsBlogsPageActive && (<>{dispatch(blogsActionCreators.getBlogsWithFilter(searchForm.searchText))}  {dispatch(articlesActionCreators.setArticlesFilter(''))}</>)
                  IsArticlesPageActive && (<>{dispatch(articlesActionCreators.getArticlesWithFilter(searchForm.searchText))} {dispatch(blogsActionCreators.setBlogsFilter(''))}</>)
                }}>
              <Input value={searchForm.searchText} fieldName = 'searchText' onChange={onSearchTextChange}/>
            </form>
            <div className="header-username-wrapper">
              <div className="userInitials">
                <p>{userInitials}</p>
              </div>
              <div className="username-text">
                <p>{username}</p>
              </div>
            </div>
            <div className="header-logout-wrapper">
              <Button type="button" text="Log Out" onClick={onLogOut}/>
            </div>
          </>
        )}
        
      </header>
    </>
  );
};
export default Header;
