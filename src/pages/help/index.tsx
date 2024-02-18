import { NextPage } from 'next';
import React from 'react';
import MainLayout from '../layout';
import { useTranslations } from 'next-intl';
import FaqTile from '@/components/pages/faq/FaqTile';

const HelpPage: NextPage = () => {
    const t = useTranslations('HelpPage');

    return (
        <MainLayout>
            <div className='py-32 px-[4%]'>
                <div className='tracking-widest mb-12'>
                    <p className='text-xl text-blue-500  mb-4 font-semibold'>{t('service')}</p>
                    <h1 className='text-2xl font-bold mb-4'>{t('serviceDesc')}</h1>
                    <p className='leading-8 text-base md:w-1/2'>{t('detail')}</p>
                </div>
                <FaqTile title={'Billing questions'} content={'+237 658545207'}/>
                <FaqTile title={'Service en panne'} content={'+237 658545207'}/>
                <FaqTile title={'General'} content={'+237 658545207'}/>
            </div>
        </MainLayout>
    );
};

export default HelpPage;