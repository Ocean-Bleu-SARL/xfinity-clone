import '@/styles/globals.css';

import { AppProps } from 'next/app';
import React, { FC } from 'react';
import { ThemeProvider } from 'next-themes';
import { LangProvider } from '@/providers';
import { MobileMenuProvider } from '@/providers/MobileMenuProvider';

const OceanBleuApp: FC<AppProps> = ({ Component, pageProps }) => {

    return (
        <LangProvider>
            <MobileMenuProvider>
                <div className="font-cabin text-sm container overflow-x-hidden">
                    <Component {...pageProps} />
                </div>
            </MobileMenuProvider>
        </LangProvider>
    );
};

export default OceanBleuApp;