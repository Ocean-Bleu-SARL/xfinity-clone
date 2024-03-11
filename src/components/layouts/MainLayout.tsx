import Footer from '@/components/common/Footer';
import NavBar from '@/components/common/NavBar';
import React, { FC, ReactNode } from 'react';

interface MainLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    childrenClassName?: string;
}

const MainLayout: FC<MainLayoutProps> = ({ children, ...otherProps }) => {
    return (
        <div className='bg-white'>
            <NavBar />
            <div className='text-sm text-black' {...otherProps}>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;