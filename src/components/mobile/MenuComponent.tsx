import React, { FC } from 'react';
import { MenuLinkProps } from '../common/NavBar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import LocaleSwitcher from '../common/LocaleSwitcher';

interface MenuComponentProps {
    links: MenuLinkProps[];
    className?: string;
}
const MenuComponent: FC<MenuComponentProps> = ({ links, className }) => {
    const path = usePathname();

    return (
        <div className={`${className} h-[100vh] block w-[85%] overflow-hidden bg-primary  fixed left-0 top-0 z-40`}>
            <nav>
                <ul className='absolute bottom-0 w-full left-0 right-0 px-8 text-lg'>
                    <LocaleSwitcher className='mb-2'/>
                    {
                        links.map((link, index) => (
                            <li key={link + index.toString()} className={`${path === link.href ? 'text-onPrimary' : 'text-gray-400'} border-t-2 border-gray-400 py-2 font-bold`}>
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))
                    }
                    <div className='px-10 border-t-2 border-gray-400 py-2'></div>
                </ul>
            </nav>
        </div>
    );
};

export default MenuComponent;