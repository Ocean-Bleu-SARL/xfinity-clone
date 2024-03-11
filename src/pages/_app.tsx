import '@/styles/globals.css';
import { AppProps } from 'next/app';
import React, { FC } from 'react';
import { LangProvider } from '@/providers';
import NoSSR from 'react-no-ssr';
import AuthProvider from '@/providers/AuthProvider';

const OceanBleuApp: FC<AppProps> = ({ Component, pageProps }) => {

    return (
        <NoSSR>
            <AuthProvider>
                <LangProvider>
                        <div className="font-cabin text-sm overflow-x-hidden tracking-wider">
                            <Component {...pageProps} />
                        </div>
                </LangProvider>
            </AuthProvider>
        </NoSSR>
    );
};

export default OceanBleuApp;