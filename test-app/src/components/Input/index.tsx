import React, { InputHTMLAttributes} from "react";
import './Input.scss';

         
interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    fieldName: string;
};


const Input = ({value, onChange, fieldName, ...rest}: IInputProps) => {

    return (
        <label className='input-label'>
                 {fieldName}
            <input 
                {...rest} 
                onChange ={onChange} 
                value = {value}
                id = {fieldName}
                autoComplete = 'off'
            />
        </label>
       
    )
}

export default React.memo(Input);