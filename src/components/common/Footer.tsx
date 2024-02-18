import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const t = useTranslations('Footer');
  const u = useTranslations('');

  return (
    <div className='py-7 h-fit w-full bg-primary px-[4%] md:px-outter flex mmd:flex-col md:justify-between'>
      <div className='md:w-3/5 mmd:order-2'>
        <p className='mb-5' dangerouslySetInnerHTML={{ __html: t.raw('moreInfo') }} />
        <p className='mb-5'>{t('wifiClaims')}</p>
        <p className='mb-5'>{t('prepaid')}</p>
        <Link href='/policies' className='underline'>{t('readMore')}</Link>
        <p className='mt-3'>{t('allRights')}</p>
      </div>
      <div className='mmd:order-1 text-sm flex gap-4 items-top md:w-2/5 justify-start mmd:mb-6 md:justify-end'>
        <h1 className='text-2xl font-bold font-crete underline'>OCEAN BLEU</h1>
        <div className='h-11 w-[1px] bg-white' />
        <div>
          <p dangerouslySetInnerHTML={{ __html: u.raw('NavBar.ar') }}></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;