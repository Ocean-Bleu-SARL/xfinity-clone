import React, { FC, forwardRef, useState } from 'react';
import { FieldError } from 'react-hook-form';
import { BsEye } from 'react-icons/bs';
import { GoEyeClosed } from 'react-icons/go';

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string,
    placeholder?: string,
    className?: string;
    inputclassname?: string;
    contained?: boolean;
    error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { label, className, inputclassname: inputClassName, placeholder, contained, error } = props;
    const [focused, setFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
    };


    return (
        <div className={`relative ${className}`}>
            <input
                {...props}
                ref={ref}
                onInvalid={(e) => { e.preventDefault(); }}
                type={showPassword ? undefined : props.type}
                className={`${inputClassName} block px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent border border-1 border-gray-300 appearance-none focus:outline-none `}
                placeholder={!focused ? placeholder : ''}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <label
                className={`absolute text-sm  duration-300 transform origin-[0] px-2
                ${contained && !focused ? 'top-[10px]' : ''}
                ${contained ? 'top-5 left-2' : 'top-2 bg-white'
                    } ${focused ? '-translate-y-4 text-xs' : 'translate-y-1/2 text-sm'
                    } ${contained && focused ? 'text-primary' : 'text-gray-500'}
                `}
            >
                {label}
            </label>
            {!!error && <p className='pl-2 text-[red] text-xsm my-1'>{error}</p>}
            {
                props.type === 'password' &&
                <span onClick={() => setShowPassword(!showPassword)} className={`w-fit h-fit absolute transform ${error?'-translate-y-[400%]':'-translate-y-[240%]'} right-4 opacity-50`}>
                    {showPassword ? <GoEyeClosed /> : <BsEye />}
                </span>
            }
        </div>
    );
});

export default Input;
