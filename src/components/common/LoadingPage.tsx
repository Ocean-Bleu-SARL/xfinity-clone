import { useTranslations } from 'next-intl';
import React from 'react';

interface LoadingPageProps {
    className?: string;
    spinSize?: string;
}

const LoadingPage: React.FC<LoadingPageProps> = ({
    className = '',
    spinSize = 'w-16 h-16',
}) => {

    const t = useTranslations('common');

    const text = t('loading') || 'Loading...';
    return (
        <div
            className={`${className} transition-all flex flex-col justify-center items-center mt-10 pt-20 h-[80vh]`}
        >
            <div
                className={`${spinSize} animate-spin rounded-full border-t-2 border-b-2 border-secondary dark:border-gray-100`}
            />
            <h3 className="mt-2 text-secondary dark:text-white text-center">{text}</h3>
        </div>
    );
};

export default LoadingPage;