import React, { FC } from 'react';

interface DividerProps {
    direction: 'h' | 'v',
    thickness: number,
    className?: string;
}

const Divider: FC<DividerProps> = ({ direction, thickness, className }) => {
    const hStyle = `h-[${thickness}px] w-full`;
    const vStyle = `h-full w-[${thickness}px]`;
    
    return <div className={`${className} bg-white ${direction === 'v' ? vStyle : hStyle}`} />
};

export default Divider;