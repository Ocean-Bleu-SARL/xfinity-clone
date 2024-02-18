import React, { FC, useState } from 'react';

interface InputProps {
    label?: string,
    placeholder?: string,
    className?: string;
    inputClassName?: string;
    contained?: boolean;
}

const Input: FC<InputProps> = ({ label, placeholder, className, inputClassName, contained }) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <div className={`relative ${className}`}>
            <input
                type="text"
                id="floating_outlined"
                className={`${inputClassName} block px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent border border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder={!focused ? placeholder : ''}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
            />
            <label
                htmlFor="floating_outlined"
                className={`absolute text-sm  duration-300 transform origin-[0] px-2
                ${contained && !focused ? 'top-[10px]': ''}
                ${
                    contained ? 'top-5 left-2' : 'top-2 bg-white'
                } ${
                    focused ? '-translate-y-4 text-xs' : 'translate-y-1/2 text-sm'
                } ${contained && focused ? 'text-primary': 'text-gray-500'}
                `}
            >
                {label}
            </label>
        </div>
    );
};

export default Input;
