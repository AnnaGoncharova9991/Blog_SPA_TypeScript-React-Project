import React, { useState, useCallback, useMemo, FocusEvent, useEffect } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { registration } from '../../services/authServices';
import { Link } from 'react-router-dom';
import Preloader from '../../components/Preloader';
import {
  EMPTY_EMAIL,
  EMPTY_PASSWORD,
  EMPTY_USERNAME,
  INCORRECT_PASSWORD,
  INCORRECT_USERNAME,
  REG_EMAIL,
} from '../../constants';
import './RegistrationPage.scss';

const initialRegistrationForm = { username: '', email: '', password: '' };

const RegistrationPage = () => {
  const [RegistrationForm, setRegistrationForm] = useState(initialRegistrationForm);
  const [isRegistered, setIsRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [emailWrong, setEmailWrong] = useState(false);
  const [passwordWrong, setPasswordWrong] = useState(false);
  const [userNameWrong, setUserNameWrong] = useState(false);
  const [emailError, setEmailError] = useState(EMPTY_EMAIL);
  const [userNameError, setUserNameError] = useState(EMPTY_USERNAME);
  const [passwordError, setPasswordError] = useState(EMPTY_PASSWORD);
  const [formValid, setFormValid] = useState(false);

  const onRegistrationFormChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRegistrationForm((prevState) => ({
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
        case 'username':
          if (e.target.value.length < 8 || e.target.value.length > 15) {
            setUserNameError(INCORRECT_USERNAME);
            if (!e.target.value) {
              setUserNameError(EMPTY_USERNAME);
            }
          } else {
            setUserNameError('');
          }
          break;
      }
    },
    [RegistrationForm.email, RegistrationForm.password, RegistrationForm.username]
  );

  const onRegistrationFormSubmit = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      try {
        setIsLoading(true);
        const response = await registration({
          username: RegistrationForm.username,
          email: RegistrationForm.email,
          password: RegistrationForm.password,
        });

        if (response.data) {
          setIsRegistered(true);
          setRegistrationForm(initialRegistrationForm);
        }
      } catch (e: any) {
        const [errorValue] = Object.values(e?.response?.data).flat();
        setErrorMessage(errorValue as string);
      } finally {
        setIsLoading(false);
      }
    },
    [RegistrationForm]
  );

  const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case 'email':
        setEmailWrong(true);
        break;
      case 'password':
        setPasswordWrong(true);
        break;
      case 'username':
        setUserNameWrong(true);
        break;
    }
  };

  useEffect(() => {
    if (emailError || passwordError || userNameError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError, userNameError]);

  return (
    <>
      {isRegistered ? (
        <div>
          <p className='warning-letter-text'>Pleaes check email to verify your account!</p>
          <Link to='/login'>
            <Button text='Go to the login page' />
          </Link>
        </div>
      ) : (
        <>
          {!isLoading ? (
            <>
              <div className='container'>
                <h2>Registration</h2>
                <form className='wrapper-form'>
                  {errorMessage && <div className='warning-text'> {errorMessage} </div>}
                  <Input
                    className='registration-form-input'
                    onChange={onRegistrationFormChange}
                    fieldName='username'
                    value={RegistrationForm.username}
                    onBlur={blurHandler}
                  />
                  {userNameWrong && userNameError && <div className='warning-text'>{userNameError}</div>}
                  <Input
                    className='registration-form-input'
                    onChange={onRegistrationFormChange}
                    fieldName='email'
                    value={RegistrationForm.email}
                    onBlur={blurHandler}
                  />
                  {emailWrong && emailError && <div className='warning-text'>{emailError}</div>}
                  <Input
                    className='registration-form-input'
                    onChange={onRegistrationFormChange}
                    fieldName='password'
                    value={RegistrationForm.password}
                    onBlur={blurHandler}
                  />
                  {passwordWrong && passwordError && <div className='warning-text'>{passwordError}</div>}
                  <div className='registration-form-btn-wrapper'>
                    <Button
                      className='registration-form-btn'
                      disabled={!formValid}
                      type='button'
                      text='Sign up'
                      onClick={onRegistrationFormSubmit}
                    />
                    <Link to='/login'>
                      <Button className='registration-form-btn' text='Go to the login page' />
                    </Link>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <Preloader />
          )}
        </>
      )}
    </>
  );
};

export default RegistrationPage;
