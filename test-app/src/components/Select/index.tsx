import React, { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './select.scss';

export interface ISelectOption {
  label: string;
  value: string;
}

export interface ISelectProps {
  options: ISelectOption[];
  onSortChange: (sortItem: string) => void;
}

const initialSelectvalue = '';

const Select = ({ options, onSortChange }: ISelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialSelectvalue);
  const faCross = faXmark as IconProp;

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (option: ISelectOption): any => {
    setSelectedOption(option.label);
    onSortChange(option.value);
    toggling();
  };
  const onClearClicked = (): any => {
    setSelectedOption(initialSelectvalue);
    onSortChange(initialSelectvalue);
    toggling();
  };

  return (
    <div className='select-wrapper'>
      <div className='select-btn' onClick={toggling}>
        <>
          {selectedOption || ''}
          {isOpen ? <span className='arrow-up'></span> : <span className='arrow-down'></span>}
        </>
      </div>
      {isOpen && (
        <div className='select-dropdown-content'>
          <ul className='select-dropdown-content-list'>
            {options.map((option) => (
              <li className='select-dropdown-content-item' onClick={() => onOptionClicked(option)} key={option.label}>
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
      <button className='cross-icon-btn' onClick={onClearClicked}>
        <FontAwesomeIcon className='cross-icon' icon={faCross} />
      </button>
    </div>
  );
};
export default React.memo(Select);
