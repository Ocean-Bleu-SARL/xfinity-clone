import React, { FC } from 'react';

interface PrimaryButtonProps {
    label: string;
    onClick?: (e?: any) => void;
    className?: string;
    hoverable?: boolean;
    buttonColor?: string;
    textColor?: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ label, onClick, hoverable = false, className, ...props }) => {
    const buttonColor = !!props.buttonColor ? props.buttonColor : 'secondary';
    const textColor = !!props.textColor ? props.textColor : 'onSecondary';
    const hoverStyle = `border border-${buttonColor} text-${buttonColor} hover:bg-${buttonColor} hover:text-${textColor}`;
    const buttonStyle = `bg-${buttonColor} text-${textColor}`;

    return (
        <button onClick={onClick} className={`${className} ${hoverable ? hoverStyle : buttonStyle} w-full px-16 rounded-full font-bold py-3`}>{label}</button>
    );
};

export default PrimaryButton;
