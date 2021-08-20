import React, { FormEvent } from 'react';

interface InputProps {
    type: 'text';
    id: string;
    error?: string;
    isInvalid?: boolean;
    placeholder?: string;
    className?: string;
    name?: string;
    value?: any;
    onChange?: (e: FormEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
    type,
    error,
    id,
    name,
    placeholder = '',
    className,
    isInvalid,
    onChange = () => {},
    value,
}) => {
    return (
        <div>
            <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 transition-colors duration-200 border-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white border-gray-800 ${className}`}
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {isInvalid && <p className="input-error">{error}</p>}
        </div>
    );
};
