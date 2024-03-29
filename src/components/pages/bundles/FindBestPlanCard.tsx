import Input from '@/components/common/Input';
import PrimaryButton from '@/components/common/PrimaryButton';
import { useTranslations } from 'next-intl';
import React, { FC } from 'react';

interface FindBestPlanCardProps {
    className?: string;
    green?: boolean;
}

const FindBestPlanCard: FC<FindBestPlanCardProps> = ({ className = '', green }) => {
    const t = useTranslations("BundlesPage");
    const c = useTranslations();
    return (
        <div className={`${className}`}>
            <div className="flex h-fit items-center flex-col">
                <div className={`w-full md:w-fit ${green?'bg-thirth':'bg-secondary'} px-5 py-8 rounded-tr-[20%] rounded-bl-[20%]`}>
                    <p className='text-2xl mb-8 font-bold text-white text-center'>{t('findBestPlan')}</p>
                    <Input placeholder={c('FindInternetComponent.placeholder')} inputclassname='bg-white rounded-md md:w-[350px]' className='mb-5' />
                    <button className='w-full font-bold text-base py-3 bg-white rounded-md text-primary'>{c('FindInternetComponent.shop')}</button>
                </div>
            </div>
        </div>
    );
};

export default FindBestPlanCard;