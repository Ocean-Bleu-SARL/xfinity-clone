import FindBestPlanCard from '@/components/pages/bundles/FindBestPlanCard';
import { NextPage } from 'next';
import { useTranslations } from 'next-intl';
import React from 'react';
import MainLayout from '@/pages/layout';
import FeatureRectangle from '@/components/pages/bundles/FeatureRectangle';
import Link from 'next/link';
import PAGES from '@/config/routes';

const BundlesPage: NextPage = () => {

  const t = useTranslations('BundlesPage');
  const c = useTranslations();

  const internetSection = {
    backgroundImage: 'url(/assets/images/img-2.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <MainLayout>

      <div className='md:flex py-8 md:py-20 px-[3%] md:px-outter tracking-wider'>
        <div className='md:w-1/2 w-full'>
          <h1 className='font-bold text-base mb-3'>OCEAN BLEU TV + Internet</h1>
          <p className="text-thirth font-bold text-3xl md:w-2/3 tracking-wider text-overflow-wrap mb-3">{t('choose')}</p>
          <p className='font-medium mmd:mb-6'>{t('liveTv')}</p>
        </div>
        <FindBestPlanCard className='md:w-1/2' />
      </div>

      
      <div className='bg-[#ECECF3] md:flex items-center py-8 md:px-[8%] md:py-20 gap-24 mmd:px-[7%]'>
        <div className='md:w-1/2 flex flex-col items-center'>
          <h1 className='font-bold text-base text-center pb-4' dangerouslySetInnerHTML={{ __html: t.raw('saveBig') }} />
          <div className='w-fit md:h-[250px] flex mmd:my-5'>
            <img src="/assets/images/img-1.png" className='w-full h-full' alt="img-tv" />
          </div>
        </div>
        <div className='md:w-1/2 '>
          <h1 className='font-bold text-xl mb-3 mt-8'>{'OceanBleu Internet + ' + t('bundles')}</h1>
          <p className='md:w-2/3 text-base pb-5 leading-8'>{t('bundlesText')}</p>
          <button className='px-6 py-3 border border-primary rounded-[5%] font-bold hover:bg-primary hover:text-onPrimary'>{t('shopOffer')}</button>
        </div>
      </div>


      <div className='md:flex'>
        <div className='md:w-1/2 flex flex-col justify-center mmd:mx-[5%] md:pl-outter'>
          <h1 className='text-secondary text-3xl font-bold pb-3 pt-7'>Internet</h1>
          <div className='text-base leading-8 font-semibold mb-5'>
            <p>{t('speedUp')}</p>
            <p>{t('tool-1')}</p>
            <p>{t('tool-2')}</p>
            <p>{t('tool-3')}</p>
          </div>
          <button className='px-6 py-3 border w-fit border-primary rounded-[5%] font-bold hover:bg-primary hover:text-onPrimary'>{t('shopOffer')}</button>
        </div>
        <div className='md:w-1/2 h-[300px] mmd:mt-12 md:h-[500px] flex justify-end'>
          <img src="/assets/images/img-2.jpg" alt="internet=img" />
        </div>
      </div>


      <div className='md:flex items-center bg-[#F6F6FA] mmd:py-8'>
        <div className='md:w-1/2 flex justify-center md:justify-end md:py-20 px-[4%]'>
          <div className='mmd:h-[160px] md:h-[300px] flex w-fit'>
            <img src="/assets/images/img-3.png" className='w-full h-full' alt="tv" />
          </div>
        </div>
        <div className='md:w-1/2 md:bg-blue-100 py-10 md:py-20 px-[8%] md:px-[4%]'>
          <h1 className='text-3xl font-bold text-blue-500 mb-5'>TV</h1>
          <div className='font-semibold text-base leading-8 mb-5'>
            <p>{t('tv-1')}</p>
            <p>{t('tv-2')}</p>
            <p>{t('tv-3')}</p>
            <p>{t('tv-4')}</p>
            <p>{t('tv-5')}</p>
          </div>
          <button className='px-6 py-3 border w-fit border-primary rounded-[5%] font-bold hover:bg-primary hover:text-onPrimary'>{t('shopOffer')}</button>
        </div>
      </div>


      <div className='py-8 md:py-32'>
        <div className='bg-[#F6F6FA] py-8 md:py-24 mx-[3%] md:mx-[10%]'>
          <h1 className='text-center font-bold text-xl'>{'OceanBleu ' + t('features')}</h1>
          <h2 dangerouslySetInnerHTML={{ __html: t.raw('switch') }} className='text-center text-3xl font-bold py-3 px-[10%]' />
        </div>
        <div className='flex mmd:flex-col mmd:items-center md:justify-center gap-8 md:gap-20 pt-8 md:pt-32'>

          <FeatureRectangle features={[
            t('voice-1'),
            t('voice-2'),
            t('voice-3'),
            t('voice-4'),
            t('voice-5'),
          ]} image='img-4.png' background='[#1F69FF]' title={t('voice')} />

          <FeatureRectangle features={[
            t('security-1'),
            t('security-2'),
            t('security-3'),
            t('security-4'),
            t('security-5')
          ]} image='img-5.png' background='thirth' title={t('security')} />

        </div>
      </div>


      <div>
        <h1 className='text-center font-bold text-2xl'>{t('workBetterTogether')}</h1>
        <div className="flex justify-center mmd:mx-10">
          <img src="/assets/images/img-6.png" alt="products" className='my-5' />
        </div>
        <div className='flex justify-center my-10'>
          <button className='px-6 py-3 border w-fit border-primary rounded-[5%] font-bold hover:bg-primary hover:text-onPrimary'>{t('shopOffer')}</button>
        </div>
      </div>


      <div className='md:px-outter w-full md:h-[100px] bg-[#1a1a1a] md:flex items-center text-white justify-between mmd:py-8'>
        <div className='text-sm flex gap-4 mmd:hidden'>
          <h1 className='text-2xl font-bold font-crete underline'>OCEAN BLEU</h1>
          <div className='h-11 w-[1px] bg-white' />
          <div>
            <p dangerouslySetInnerHTML={{ __html: c.raw('NavBar.ar') }}></p>
          </div>
        </div>
        <nav>
          <ul className='flex gap-6 [&>_>li]:hover:underline mmd:justify-center'>
            <li><Link href={PAGES.faq}>FAQ</Link></li>
            <li><Link href={PAGES.moving}>{t('Footer.moving')}</Link></li>
            <li><Link href={PAGES.terms.privacy}>{t('Footer.privacy')}</Link></li>
          </ul>
        </nav>
      </div>

    </MainLayout>
  );
};

export default BundlesPage;