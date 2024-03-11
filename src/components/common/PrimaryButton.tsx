import React, { FC } from 'react';
import { ScaleLoader } from 'react-spinners';

interface PrimaryButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    label: string;
    onClick?: (e?: any) => void;
    className?: string;
    hoverable?: boolean;
    buttoncolor?: string;
    textcolor?: string;
    loading?: boolean;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ label, onClick, hoverable = false, className, loading, ...props }) => {
    const buttonColor = !!props.buttoncolor ? props.buttoncolor : 'secondary';
    const textColor = !!props.textcolor ? props.textcolor : 'onSecondary';
    const hoverStyle = `border border-${buttonColor} text-${buttonColor} hover:bg-${buttonColor} hover:text-${textColor}`;
    const buttonStyle = `bg-${buttonColor} text-${textColor}`;

    return (
        <button {...props} onClick={onClick} className={`${className} ${hoverable ? hoverStyle : buttonStyle} flex justify-center items-center w-full px-16 rounded-full font-bold py-3`}>{
            loading ?
                <ScaleLoader height={20} margin={4} speedMultiplier={1.2} width={2} color={buttonColor === 'secondary' ? 'white' : undefined} loading={loading} />
                : label
        }</button>
    );
};

export default PrimaryButton;
