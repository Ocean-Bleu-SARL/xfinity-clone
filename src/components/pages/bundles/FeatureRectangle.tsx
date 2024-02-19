import { useTranslations } from 'next-intl';
import React, { FC } from 'react';

interface FeatureRectangleProps {
    className?: string;
    features: string[];
    /* The value will be concatanated to /assets/images/ */
    image: string;
    green: boolean;
    title: string;
}

const FeatureRectangle: FC<FeatureRectangleProps> = ({ className, title, features, image, green }) => {
    const t = useTranslations('BundlesPage');

    return (
        <div className={`${className} relative w-[90%] md:w-[35%] h-[900px] x   rounded-[5%] ${green?'bg-thirth':'bg-[#1F69FF]'} text-white py-8`}>
            <h1 className='font-bold text-2xl text-center '>{title}</h1>
            <ul className='font-medium tracking-wider leading-8 text-lg mt-6 px-[10%] md:px-[6%] flex flex-col gap-1'>
                {
                    features.map((feature, index) => (
                        <li>{feature}</li>
                    ))
                }
            </ul>
            <div className='flex justify-center my-10 '>
                <button className='px-6 py-3 border w-fit border-white rounded-[5%] font-bold hover:bg-white hover:text-primary'>{t('shopOffer')}</button>
            </div>
            <div className='absolute w-full bottom-0 flex'>
                <img src={`/assets/images/${image}`} className="w-full rounded-b-[5%] h-full" alt={`product-image`} />
            </div>
        </div>
    );
};

export default FeatureRectangle;