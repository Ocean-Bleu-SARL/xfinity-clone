import React, { FC } from 'react';

interface PrimaryButtonProps {
    label: string;
    onClick?: (e?: any) => void;
    className?: string;
    hoverable?: boolean;
    buttonColor?: string;
    textColor?: string;
}


const PrimaryButton: FC<PrimaryButtonProps> = ({ label, onClick, hoverable, className, ...props }) => {
    const color = props.buttonColor ? props.buttonColor : 'secondary';
    const textColor = props.textColor ? props.textColor : 'onSecondary';
    return (
        <button onClick={onClick} className={`${className} ${hoverable ? `border border-${color} text-${color} hover:text-${textColor} hover:bg-${color} hover:border-0` : `bg-${color} text-${textColor}`} w-full px-16  rounded-full font-bold py-3`}>{label}</button>
    );
};

export default PrimaryButton;
