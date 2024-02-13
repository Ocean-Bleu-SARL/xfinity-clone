import React from 'react';
import MainLayout from '@/pages/layout';
import FindInternetCard from '@/components/pages/home/FindInternetCard';
import { useTranslations } from 'next-intl';
import { NextPage } from 'next';
import WifiOfferCard from '@/components/pages/home/WifiOfferCard';
import Input from '@/components/common/Input';
import PrimaryButton from '@/components/common/PrimaryButton';
import { PiPhone } from 'react-icons/pi';

const IndexPage: NextPage = () => {

  const t = useTranslations('IndexPage');
  const w = useTranslations('WifiOfferCard');
  const f = useTranslations('features');

  const findInternetComponentBg = {
    backgroundImage: 'url(/assets/images/internet-background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <MainLayout>
      <div style={findInternetComponentBg} className='py-7 md:py-14 md:py-20'>
        <FindInternetCard className='ml-[10%] mmd:hidden' />
        <div className='md:hidden px-[5%]'>
          <h1 className='mmd:text-3xl text-4xl font-bold mb-10 md:mb-12'>{t('find')}</h1>
          <Input label={t('placeholder')} className='mb-5' contained inputClassName='bg-white rounded-md h-16' />
          <PrimaryButton label={t('shop')} className='text-lg mb-4 py-4' />
        </div>
      </div>
      <div className="md:hidden bg-white py-6 px-[4%]">
        <p className='text-2xl text-thirth font-semibold'>{t('gh')}</p>
        <p className='text-xl text-thirth'>{t('ghd')}</p>
        <a href='tel:+237658545207' className='w-fit flex items-center mt-8 text-lg gap-2 px-6 rounded-full text-thirth justify-center py-1 border border-thirth'><PiPhone size={21}/> {t('call')}</a>
      </div>
      <div className='py-12 md:py-28 bg-secondary text-onSecondary px-[4%]'>
        <h1 className='mmd:text-4xl text-5xl font-bold text-center mb-8 md:mb-16'>{t('greatDeal')}</h1>
        <div className="flex mmd:flex-col gap-5 md:gap-[2.5%] justify-center items-center ">
          <WifiOfferCard label={w('mostPopular')} debit={400} startingPrice={40000} features={[
            f('ndevices', { n: '8' }),
            f('largeFiles'),
            f('streamMany'),
          ]} />
          <WifiOfferCard label={w('bestValue')} debit={1200} startingPrice={85000} features={[
            f('unlimitedDevices'),
            f('streamExp'),
            f('multiplayer'),
          ]} />
        </div>
      </div>
      <div className='bg-gray-200 py-12 md:py-28 '>
        <h1 className='text-thirth text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16'>{t('priceNearYou')}</h1>
        <div className='flex flex-wrap justify-center gap-4'>
          <WifiOfferCard debit={400} startingPrice={40000} features={[
            f('unlimitedDevices'),
            f('streamExp'),
            f('multiplayer'),
          ]} buttonColor='thirth' />
          <WifiOfferCard debit={1200} startingPrice={85000} features={[
            f('12+devices'),
            f('heavyUsage'),
            f('speedStream'),
          ]} buttonColor='thirth' />
          <WifiOfferCard debit={400} startingPrice={40000} features={[
            f('ndevices', { n: '11' }),
            f('showsQuickly'),
            f('HDStream'),
          ]} buttonColor='thirth' />
          <WifiOfferCard debit={1200} startingPrice={85000} features={[
            f('ndevices', { n: '8' }),
            f('photo'),
            f('conference'),
          ]} buttonColor='thirth' />
          <WifiOfferCard debit={1200} startingPrice={85000} features={[
            f('ndevices', { n: '5' }),
            f('photo'),
            f('conference'),
          ]} buttonColor='thirth' />
        </div>

      </div>
    </MainLayout>
  );
};

export default IndexPage;
