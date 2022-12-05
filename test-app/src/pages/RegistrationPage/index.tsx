import React, { useState, useCallback, useMemo } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { registration } from '../../services/authServices';
import { Link } from 'react-router-dom';

const initialRegistrationForm = { username: '', email: '', password: '' };

const RegistrationPage = () => {
  const [RegistrationForm, setRegistrationForm] = useState(
    initialRegistrationForm
  );
  const [isRegistered, setIsRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onRegistrationFormChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRegistrationForm((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    },
    []
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

  const isButtonDisabled = useMemo(() => {
    const formValue = Object.values(RegistrationForm);
    return !(formValue.filter((item) => !!item).length === formValue.length);
  }, [RegistrationForm]);

  return (
    <>
      {isRegistered ? (
        <div>
          <p>Pleaes check email to verify your account!</p>
          <Link to='/login'>
            <Button text='Go to the login page' />
          </Link>
        </div>
      ) : (
        <>
          {!isLoading ? (
            <>
              <div className='container'>
                <div className='wrapper-form'>
                  {errorMessage && <p> {errorMessage} </p>}
                  <Input
                    onChange={onRegistrationFormChange}
                    fieldName='username'
                    value={RegistrationForm.username}
                  />
                  <Input
                    onChange={onRegistrationFormChange}
                    fieldName='email'
                    value={RegistrationForm.email}
                  />
                  <Input
                    onChange={onRegistrationFormChange}
                    fieldName='password'
                    value={RegistrationForm.password}
                  />
                  <div>
                    <Button
                      disabled={isButtonDisabled}
                      type='button'
                      text='Sign up'
                      onClick={onRegistrationFormSubmit}
                    />
                    <Link to='/login'>
                      <Button text='Go to the login page' />
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </>
      )}
    </>
  );
};

export default RegistrationPage;
