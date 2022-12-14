import React, { InputHTMLAttributes, FocusEvent } from 'react';
import './Input.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fieldName?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  ref?: React.MutableRefObject<null>;
 }

const Input = ({ value, onChange, fieldName, onKeyDown, onBlur, ref, ...rest }: IInputProps) => {
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
        onBlur={onBlur}
        ref={ref}
      />
    </label>
  );
};

export default React.memo(Input);
