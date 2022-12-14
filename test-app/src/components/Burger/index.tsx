import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Burger.scss';

import { Link } from 'react-router-dom';

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const faBurgerIcon = faBars as IconProp;

  const toggling = () => setIsOpen(!isOpen);

  return (
    <>
      <button className='burger-btn' onClick={toggling}>
        <FontAwesomeIcon className='burger-icon' icon={faBurgerIcon} />
      </button>
      {isOpen && (
        <>
          <div className='mask'></div>
          <div className='burger-dropdown-content'>
            <ul className='burger-dropdown-content-list'>
              <Link to='/blogs'>
                <li className='burger-dropdown-content-item' onClick={toggling} key={'blogs'}>
                  Blogs
                </li>
              </Link>
              <Link to='/articles'>
                <li className='burger-dropdown-content-item' onClick={toggling} key={'articles'}>
                  Articles
                </li>
              </Link>
            </ul>
          </div>
          <div className='burger-body-mask'></div>
        </>
      )}
    </>
  );
};
export default React.memo(Burger);
