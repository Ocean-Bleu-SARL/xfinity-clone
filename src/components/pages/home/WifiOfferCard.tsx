import PrimaryButton from '@/components/common/PrimaryButton';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { FC } from 'react';
import { BiArrowToRight } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { MdDone } from 'react-icons/md';

interface WifiOfferCardProps {
  debit: number;
  startingPrice: number;
  features: string[];
  label?: string;
  className?: string;
  buttonColor?: string;
  buttonTextColor?: string;
}

const WifiOfferCard: FC<WifiOfferCardProps> = (props) => {
  const t = useTranslations('WifiOfferCard');

  return (
    <div className={`bg-white rounded-xl ${!!props.label?'h-[190px]':'h-[150px]'} md:h-[375px] mmd:w-[90%] mmd:max-w-[370px] w-[370px] text-primary`}>
      {!!props.label && <h1 className='bg-secondary bg-opacity-25 text-center py-2 text-secondary uppercase text-opacity-50 font-bold'>{props.label}</h1>}
      <div className='p-8'>
        <p className='text-lg'><span className='text-4xl font-bold'>{props.debit}</span> Mbps</p>
        <p className='font-semibold'>{t('startingAt')} <span>{props.startingPrice} XAF</span>/mo</p>
        {props.features.length > 0 && <ul className='mt-8 mmd:hidden'>
          {props.features.map((feature, index) => <li key={index} className='my-3 flex gap-3'><MdDone className='text-secondary' size={18} /> {feature}</li>)}
        </ul>}
        <PrimaryButton label={t('shop')} hoverable className='mt-10 py-[9px] mmd:hidden' buttoncolor={props.buttonColor} textcolor={props.buttonTextColor}/>
        <Link href={``} className='md:hidden text-thirth mt-5 font-semibold flex gap-2 items-center'>{t('shop')} <BsArrowRight /> </Link>
      </div>
    </div>
  );
};

export default WifiOfferCard;
