import React from 'react'
import { Placeholder } from 'react-bootstrap';

type Type = {
    type: string;
    placeholder: string;
    inputValue: string | number;
    change: (value: string) => void;
    required?: boolean;
    pattern?: string;
}
const Input = ({ type, placeholder, inputValue, change, pattern,  required }: Type) => {
    return (
        <div className="control">
            <input type={type} pattern={pattern} className="input text-dark p-3 w-100 bg-white border border-primary my-3" placeholder={placeholder} value={inputValue} onChange={(e) => {
                let formValue = e.target?.value ?? "";
                change(formValue);
            }} required = {required} />
        </div>
    );
}

export default Input;