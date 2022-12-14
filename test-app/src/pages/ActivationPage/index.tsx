import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { accountActivation } from '../../services/authServices';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Preloader from '../../components/Preloader';
import './ActivationPage.scss';

const ActivationPage = () => {
  const { uid, token } = useParams();

  const [isActivated, setIsActivated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (uid && token) {
      const activateAccount = async () => {
        try {
          setIsLoading(true);
          const response = await accountActivation({ uid, token });

          if (response) {
            setIsActivated(true);
          }
        } catch (e: any) {
          setErrorMessage(e?.response?.data?.detail as string);
        } finally {
          setIsLoading(false);
        }
      };

      activateAccount();
    }
  }, [uid, token]);

  return (
    <>
      {isActivated ? (
        <div className='activation-text-wrapper'>
          <p className='activation-text'>Your account is successfully activated!</p>
          <Link to='/login'>
            <Button className='activation-btn' text='Go to the login page' />
          </Link>
        </div>
      ) : (
        <>
          {!isLoading ? (
            <>
              <div className='container'>
                <div className='wrapper-activation-page'>
                  {errorMessage && <p> {errorMessage} </p>}
                </div>
              </div>
            </>
          ) : (
            <Preloader/>
          )}
        </>
      )}
    </>
  );
};

export default ActivationPage;
