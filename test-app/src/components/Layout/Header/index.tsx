import React from "react";
import { useAppSelector } from "../../../redux/hooks";
import {
  dataAuthSelector,
  isAuthAuthSelector,
} from "../../../redux/selectors/authSelectors";

const Header = () => {
  const { username, email } = useAppSelector(dataAuthSelector);
  const isAuth = useAppSelector(isAuthAuthSelector);

  return (
    <>
      <header>
        <div> logo</div>
        <div>
          <button>search</button>
            {
                isAuth && ( <>
                    <div>AM</div>
                    <div>
                      <p>{username}</p>
                    </div>
                  </>)
                
            }
        </div>
      </header>
    </>
  );
};
export default Header;
