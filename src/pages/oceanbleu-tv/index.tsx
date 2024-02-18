import { NextPage } from 'next';
import React from 'react';
import MainLayout from '../layout';
import FindBestPlanCard from '@/components/pages/bundles/FindBestPlanCard';
import { useTranslations } from 'next-intl';

const OceanBleuTvPage: NextPage = () => {

    const t = useTranslations('OceanBleuTvPage');

    return (
        <MainLayout>

            <div className='bg-[#ECECF3] md:flex py-8 md:py-20 px-[3%] md:px-outter tracking-wider'>
                <div className='md:w-1/2 w-full'>
                    <h1 className='font-bold text-base mb-3'>OCEANBLEU TV</h1>
                    <p className="text-secondary font-bold text-3xl md:w-2/3 tracking-wider text-overflow-wrap mb-3">{t('getUltimate')}</p>
                    <p className='font-medium mmd:mb-6'>{t('hundreds')}</p>
                </div>
                <FindBestPlanCard className='md:w-1/2' color='secondary' />
            </div>


            <div className='md:flex items-center md:px-[8%] py-8 md:py-20 gap-24 mmd:px-[7%]'>
                <div className='md:w-1/2 flex flex-col items-center'>
                    <div className='w-fit md:h-[250px] flex mmd:my-5'>
                        <img src="/assets/images/img-1.png" className='w-full h-full' alt="img-tv" />
                    </div>
                </div>
                <div className='md:w-1/2 '>
                    <h1 className='font-bold text-xl mb-3 mt-8'>{t('enjoy')}</h1>
                    <p className='md:w-2/3 text-base pb-5 leading-8'>{t('enjoyText')}</p>
                </div>
            </div>


            <div className='flex mmd:flex-col md:items-center bg-[#F6F6FA] mmd:py-8'>
                <div className='mmd:order-2 md:w-1/2 md:bg-blue-100 py-10 md:py-20 px-[8%] md:px-[4%]'>
                    <h1 className='text-3xl font-bold text-blue-500 mb-5'>{t('features')}</h1>
                    <h2 className='font-bold text-2xl mb-4'>{t('changeWay')}</h2>
                    <div className='text-base leading-8 mb-5'>
                        <p>{t('feature-1')}</p>
                        <p>{t('feature-2')}</p>
                        <p>{t('feature-3')}</p>
                        <p>{t('feature-4')}</p>
                        <p>{t('feature-5')}</p>
                    </div>
                    <button className='px-6 py-3 border w-fit border-primary rounded-[5%] font-bold hover:bg-primary hover:text-onPrimary'>{t('shopOffer')}</button>
                </div>
                <div className='mmd:order-1 md:w-1/2 flex justify-center md:justify-end md:py-20 px-[4%]'>
                    <div className='mmd:h-[160px] flex md:h-[300px] w-fit'>
                        <img src="/assets/images/img-3.png" className='w-full h-full' alt="tv" />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default OceanBleuTvPage;