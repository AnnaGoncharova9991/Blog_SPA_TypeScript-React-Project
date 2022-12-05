import React, { InputHTMLAttributes, useRef } from 'react';
import './Input.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fieldName: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({ value, onChange, fieldName, onKeyDown, ...rest }: IInputProps) => {
  return (
    <label className='input-label'>
      {fieldName}
      <input
        {...rest}
        onChange={onChange}
        value={value}
        id={fieldName}
        autoComplete='off'
        onKeyDown={onKeyDown}
      />
    </label>
  );
};

export default React.memo(Input);
