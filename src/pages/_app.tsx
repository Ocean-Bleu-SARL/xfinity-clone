import '@/styles/globals.css';
import { AppProps } from 'next/app';
import React, { FC } from 'react';
import { LangProvider } from '@/providers';
import { MobileMenuProvider } from '@/providers/MobileMenuProvider';

const OceanBleuApp: FC<AppProps> = ({ Component, pageProps }) => {

    return (
        <LangProvider>
            <MobileMenuProvider>
                <div className="font-cabin text-sm overflow-x-hidden tracking-wider">
                    <Component {...pageProps} />
                </div>
            </MobileMenuProvider>
        </LangProvider>
    );
};

export default OceanBleuApp;