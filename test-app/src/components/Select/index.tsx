import React, { useState } from 'react';
import './select.scss';

export interface ISelectOption {
  label: string;
  value: string;
}

export interface ISelectProps {
  options: ISelectOption[];
  onSortChange: (sortItem: string) => void;
}

const Select = ({ options, onSortChange }: ISelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (option: ISelectOption): any => {
    setSelectedOption(option.label);
    onSortChange(option.value);
    toggling();
    console.log(selectedOption);
  };

  return (
    <div className='select-wrapper'>
      <div className='select-btn' onClick={toggling}>
        {selectedOption || ''}
        {isOpen ? (
          <span className='arrow-up'></span>
        ) : (
          <span className='arrow-down'></span>
        )}
      </div>
      {isOpen && (
        <div className='select-dropdown-content'>
          <ul className='select-dropdown-content-list'>
            {options.map((option) => (
              <li
                className='select-dropdown-content-item'
                onClick={() => onOptionClicked(option)}
                key={option.label}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default React.memo(Select);
