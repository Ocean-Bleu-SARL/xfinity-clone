import Input from '@/components/common/Input';
import PrimaryButton from '@/components/common/PrimaryButton';
import { useTranslations } from 'next-intl';
import React, { FC } from 'react';
import { PiPhone } from 'react-icons/pi';

interface FindInternetCardProps {
    className?: string;
}

const FindInternetCard: FC<FindInternetCardProps> = ({ className }) => {

    const t = useTranslations('FindInternetComponent');
    const u = useTranslations();
    return (
        <div className={` ${className} flex flex-col w-[480px] px-14 py-10 shadow-md rounded-xl  bg-white`}>
            <h1 className='text-4xl font-bold mb-12'>{t('find')}</h1>
            <Input label={t('placeholder')} className='mb-5' inputClassName='rounded-md h-14' />
            <PrimaryButton label={t('shop')} className='text-lg mb-4 py-4'/>
            <div className=''>
                <div className='flex gap-2 items-center mb-2'>
                    <PiPhone size={23} />
                    <p className='font-bold text-base'>+237 658545207</p>
                </div>
                <p>{u('NavBar.gh')}</p>
            </div>
        </div>
    );
};

export default FindInternetCard;