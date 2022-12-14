import React, { useState, useCallback, useEffect, useMemo, FocusEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import './LoginPage.scss';
import Button from '../../components/Button';
import { authActionCreators } from '../../redux/actions/authActionCreators';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  errorAuthSelector,
  isLoadingAuthSelector,
  dataAuthSelector,
  isAuthAuthSelector,
} from '../../redux/selectors/authSelectors';
import Preloader from '../../components/Preloader';
import { EMPTY_EMAIL, EMPTY_PASSWORD, INCORRECT_PASSWORD, REG_EMAIL } from '../../constants';

const initialLoginForm = { email: '', password: '' };

const LoginPage = () => {
  const [LoginForm, setLoginForm] = useState(initialLoginForm);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const errorMessage = useAppSelector(errorAuthSelector);
  const isLoading = useAppSelector(isLoadingAuthSelector);
  const data = useAppSelector(dataAuthSelector);
  const isAuth = useAppSelector(isAuthAuthSelector);

  const [emailWrong, setEmailWrong] = useState(false);
  const [passwordWrong, setPasswordWrong] = useState(false);
  const [emailError, setEmailError] = useState(EMPTY_EMAIL);
  const [passwordError, setPasswordError] = useState(EMPTY_PASSWORD);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (isAuth) {
      navigate('/blogs', { replace: true });
    }
  }, [isAuth, navigate]);

  const onLoginFormChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginForm((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
      switch (e.target.id) {
        case 'email':
          if (!REG_EMAIL.test(String(e.target.value))) {
            setEmailError('Incorrect email');
            if (!e.target.value) {
              setEmailError(EMPTY_EMAIL);
            }
          } else {
            setEmailError('');
          }
          break;
        case 'password':
          if (e.target.value.length < 8 || e.target.value.length > 25) {
            setPasswordError(INCORRECT_PASSWORD);
            if (!e.target.value) {
              setPasswordError(EMPTY_PASSWORD);
            }
          } else {
            setPasswordError('');
          }
          break;
      }
    },
    [LoginForm.email, LoginForm.password]
  );

  const onLoginFormSubmit = useCallback(
    () =>
      dispatch(
        authActionCreators.getLogin({
          email: LoginForm.email,
          password: LoginForm.password,
        })
      ),
    [dispatch, LoginForm.email, LoginForm.password]
  );

  const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case 'email':
        setEmailWrong(true);
        break;
      case 'password':
        setPasswordWrong(true);
        break;
    }
  };

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  return (
    <>
      {!isLoading ? (
        <>
          <div className='container'>
            <h2>Sing In</h2>
            <form className='wrapper-form'>
              {errorMessage && <div className='warning-text'>{errorMessage}</div>}
              <Input
                placeholder='Your email'
                className='login-form-input'
                onChange={onLoginFormChange}
                fieldName='email'
                value={LoginForm.email}
                onBlur={blurHandler}
              />
              {emailWrong && emailError && <div className='warning-text'>{emailError}</div>}
              <Input
                placeholder='Your password'
                className='login-form-input'
                onChange={onLoginFormChange}
                fieldName='password'
                value={LoginForm.password}
                onBlur={blurHandler}
              />
              {passwordWrong && passwordError && <div className='warning-text'>{passwordError}</div>}
              <Button
                className='login-form-btn'
                disabled={!formValid}
                type='button'
                text='Sign in'
                onClick={onLoginFormSubmit}
              />
              <div className='wrapper-sing-up'>
                <span className='sing-up-text'>Don't have an account?</span>
                <Link to='/registration'>
                  <span className='sing-up-link'>Sing Up</span>
                </Link>
              </div>
            </form>
          </div>
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default LoginPage;
