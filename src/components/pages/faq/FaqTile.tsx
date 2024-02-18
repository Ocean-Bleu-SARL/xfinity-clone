import React, { FC, ReactNode } from 'react';

interface FaqTileProps {
    title: string,
    content: ReactNode;
    className?: string;
}

const FaqTile: FC<FaqTileProps> = ({ title, content, className }) => {
    return (
        <div className={`${className}`}>
            <details>
                <summary>{title}</summary>
                {content}
            </details>
        </div>
    );
};

export default FaqTile;