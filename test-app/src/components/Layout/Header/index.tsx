import React from "react";
import { useEffect, useState, useCallback} from "react";
import { authActionCreators } from "../../../redux/actions/authActionCreators";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  dataAuthSelector,
  isAuthAuthSelector,
} from "../../../redux/selectors/authSelectors";
import Button from "../../Button";
import "./Header.scss";

const Header = () => {
  const dispatch = useAppDispatch();
  const { username, email } = useAppSelector(dataAuthSelector);
  const isAuth = useAppSelector(isAuthAuthSelector);
  const [userInitials, setUserInitials] = useState("");

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
  }, [username]);

  const onLogOut = useCallback(() => {
   dispatch(authActionCreators.logOut());
  }, [dispatch]);

  return (
    <>
      <header>
        <div className="logo-img"></div>
        <div className="header-search-wpapper"></div>
        {isAuth && (
          <>
            <div className="header-username-wrapper">
              <div className="userInitials">
                <p>{userInitials}</p>
              </div>
              <div className="username-text">
                <p>{username}</p>
              </div>
            </div>
          </>
        )}
        <div className="header-logout-wrapper">
          <Button type="button" text="Log Out" onClick={onLogOut}/>
        </div>
      </header>
    </>
  );
};
export default Header;
