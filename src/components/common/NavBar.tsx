import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { PiPhone } from "react-icons/pi";
import { Squash as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LocaleSwitcher from '@/components/common/LocaleSwitcher';
import MenuComponent from '@/components/mobile/MenuComponent';
import PAGES from '@/config/routes';


export interface MenuLinkProps {
  href: string;
  label: string;
}

const NavBar = () => {

  const [isOpen, setOpen] = useState(false);

  const t = useTranslations('NavBar');
  const path = usePathname();
  console.log(path);

  const links: MenuLinkProps[] = [
    {
      href: PAGES.home,
      label: t('home')
    },
    {
      href: PAGES.bundles,
      label: t('obBD')
    },
    {
      href: PAGES.tv,
      label: 'OB TV'
    },
    {
      href: PAGES.help,
      label: t('cs')
    },
    {
      href: PAGES.account.index,
      label: t('account')
    }
  ];

  return (
    <header className='bg-primary text-white py-3 md:py-4 px-[4%] md:px-outter'>
      <MenuComponent links={links} className={`${isOpen ? '' : 'hidden'}`} />
      <div className='flex justify-between items-center '>
        <div className='flex gap-2'>
          <div className={`z-50 md:hidden ${isOpen?'fixed top-2 left-[4.5%]':''}`}><Hamburger onToggle={() => setOpen(!isOpen)} /></div>
          <div className='flex gap-2 md:gap-4 items-center'>
            <h1 className='md:text-3xl font-bold font-crete '>OCEAN BLEU</h1>
            <div className='h-11 w-[1px] bg-white' />
            <div>
              <p dangerouslySetInnerHTML={{ __html: t.raw('ar') }}></p>
            </div>
          </div>
        </div>
        <div className='flex gap-2 items-center mmd:hidden'>
          <PiPhone size={23} />
          <div className=''>
            <p className='font-bold'>+237 658545207</p>
            <p>{t('gh')}</p>
          </div>
        </div>
        <a href='tel:+237658545207' className='md:hidden w-fit flex items-center gap-2 rounded-full justify-center py-2 px-4 border'><PiPhone size={21} /> {t('call')}</a>
      </div>
      <div className='bg-white w-full h-[1px] my-3 mmd:hidden' />
      <div className="flex justify-between items-center mmd:hidden">
        <div className='flex gap-4'>
          {
            links.map((link,index) => {
              return <Link key={link+index.toString()} href={link.href} className={`${path === link.href ? 'text-onPrimary' : 'text-gray-400'} hover:underline font-bold`}>
                {link.label}
              </Link>;
            })
          }
        </div>
        <LocaleSwitcher />
      </div>
    </header>
  );
};

export default NavBar;