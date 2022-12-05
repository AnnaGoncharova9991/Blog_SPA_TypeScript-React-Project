import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import './Tab.scss';

interface ITabBtnProps {
  btnName: string;
  btnPathTo: string;
}

interface ITabProps {
  btnsDescription: ITabBtnProps[];
  activeBtn: string;
}

const Tab = ({ btnsDescription, activeBtn }: ITabProps) => {
  return (
    <>
      <div className='tab-wrapper'>
        {btnsDescription.map((btn) => (
          <Link to={btn.btnPathTo}>
            <Button
              className={
                activeBtn === btn.btnName ? 'tab-button active' : 'tab-button'
              }
              text={btn.btnName}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Tab;
