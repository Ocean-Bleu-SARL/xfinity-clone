import LoadingPage from '@/components/common/LoadingPage';
import PrimaryButton from '@/components/common/PrimaryButton';
import MainLayout from '@/components/layouts/MainLayout';
import { firebaseAuth } from '@/config/firebase';
import { useAuth } from '@/providers/AuthProvider';
import { NextPage } from 'next';
import React, { useState } from 'react';
import { actionCodeSettings } from './registration';
import { sendSignInLinkToEmail } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import toast, { Toaster } from 'react-hot-toast';

const ConfirmEmailPage: NextPage = () => {
    const { user } = useAuth();
    const [sending, setSending] = useState(false);

    if (!user) return <LoadingPage />;

    const resend = () => {
        setSending(true);
        sendSignInLinkToEmail(firebaseAuth, user.email!, actionCodeSettings)
            .then(() => {
                toast.success('Sent');
                setSending(false);
            })
            .catch((error) => {
                toast.error(error.code ?? 'Failed');
                setSending(false);
            });
    };

    return (
        <MainLayout>
            <div className='md:py-16 mmd:pt-0 text-black flex items-center justify-center' >
                <div className='py-20 px-3 md:px-20 md:bg-secondary md:w-[600px] rounded-xl'>
                    <h1 className='text-center font-bold text-3xl md:text-white'>Confirm your email address</h1>
                    <p className='text-center text-base md:text-white mb-5 text mt-2'>An authentication link has been sent to your email address <strong>{user.email}</strong></p>
                    <p className='text-center text-base md:text-white mb-10 text mt-2'>Click on that link to access your account</p>
                    <div className='mmd:hidden'>
                        <PrimaryButton loading={sending} onClick={resend} label='Did not received the link ? Re-send' buttoncolor='white' textcolor='secondary' className='mt-6 rounded-md h-12 text-base' />
                    </div>
                    <div className='md:hidden'>
                        <PrimaryButton loading={sending} onClick={resend} label='Did not received the link ? Re-send' buttoncolor='secondary' textcolor='white' className='mt-6 rounded-md h-12 text-base' />
                    </div>
                </div>
                <Toaster />
            </div>
        </MainLayout>
    );
};

export default ConfirmEmailPage;