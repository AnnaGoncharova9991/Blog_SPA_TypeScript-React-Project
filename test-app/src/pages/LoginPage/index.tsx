import React, { useState, useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import "./LoginPage.scss";
import Button from "../../components/Button";
import { authActionCreators } from "../../redux/actions/authActionCreators";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { errorAuthSelector, isLoadingAuthSelector, dataAuthSelector, isAuthAuthSelector } from "../../redux/selectors/authSelectors";

const initialLoginForm = { email: "", password: "" };

const LoginPage = () => {
  const [LoginForm, setLoginForm] = useState(initialLoginForm);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const errorMessage = useAppSelector(errorAuthSelector);
  const isLoading = useAppSelector(isLoadingAuthSelector);
  const data = useAppSelector(dataAuthSelector);
  const isAuth = useAppSelector(isAuthAuthSelector);

  useEffect(() => {
    if (isAuth){
      navigate('/blogs', {replace: true});
    }      
  }, [isAuth, navigate]);

  const onLoginFormChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginForm((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    },
    []
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

  return (
    <>
      {!isLoading ? (
        <>
          <div className="container">
            <div className="wrapper-form">
              {errorMessage && <p>{errorMessage}</p>}
              <Input onChange={onLoginFormChange} fieldName="email" value={LoginForm.email} />
              <Input onChange={onLoginFormChange} fieldName="password" value={LoginForm.password} />
              <Button type="button" text="Sign in" onClick={onLoginFormSubmit} />
              <div className="wrapper-sing-up">
                <span className="sing-up-text">Don't have an account?</span>
                <Link to ='/registration' >
                  <span className="sing-up-link">Sing Up</span>
                </Link>                
              </div>
            </div>
          </div>
        </>
      ) : ( <div>Loading...</div>)
      }
    </>
  );
};

export default LoginPage;
