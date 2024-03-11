import Input from '@/components/common/Input';
import LoadingPage from '@/components/common/LoadingPage';
import PrimaryButton from '@/components/common/PrimaryButton';
import MainLayout from '@/components/layouts/MainLayout';
import { firebaseAuth } from '@/config/firebase';
import PAGES from '@/config/routes';
import { AuthenticationFormSchemaAsType, authenticationFormSchema } from '@/data/forms';
import { useAuth } from '@/providers/AuthProvider';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AuthenticationPage = () => {

    const [authenticating, setAuthenticating] = useState(false);
    const router = useRouter();
    const { user, setUser } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<AuthenticationFormSchemaAsType>({
        resolver: zodResolver(authenticationFormSchema)
    });

    const onSubmit = (data: AuthenticationFormSchemaAsType) => {
        setAuthenticating(true);
        if (data.identifier.includes('@')) {
            signInWithEmailAndPassword(firebaseAuth, data.identifier, data.password)
                .then((userCreds) => {
                    setUser({ email: userCreds.user.email! });
                    router.push(PAGES.account.index);
                })
                .catch((error) => {
                    toast.error(error.code ?? 'Failed');
                });
        } else {

        }
    };

    if (user) {
        router.push(PAGES.account.index);
    }

    return (
        <MainLayout>
            <div className='md:py-16 mmd:pt-0 text-black flex items-center justify-center' >
                <form onSubmit={handleSubmit(onSubmit)} className='py-20 px-3 md:px-20 md:bg-secondary  rounded-xl'>
                    <h1 className='text-center font-bold text-3xl md:text-white'>Sign in to OBwire</h1>
                    <p className='text-center md:text-white mb-10 text mt-2'>Please provide your information to sign into your account</p>
                    <Input
                        {...register('identifier')}
                        placeholder='Email, phone number'
                        error={errors.identifier?.message}
                        inputclassname='mb-1 bg-white h-12 rounded-md'
                    />
                    <Input
                        type='password'
                        {...register('password')}
                        placeholder='Password'
                        error={errors.password?.message}
                        inputclassname='mb-1 bg-white h-12 rounded-md'
                    />
                    <div className='mmd:hidden'>
                        <PrimaryButton loading={authenticating} type={'submit'} label='Sign in' buttoncolor='white' textcolor='secondary' className='mt-6 rounded-md h-12 text-base' />
                    </div>
                    <div className='md:hidden'>
                        <PrimaryButton loading={authenticating} type={'submit'} label='Sign in' buttoncolor='secondary' textcolor='white' className='mt-6 rounded-md h-12 text-base' />
                    </div>
                    <div className='flex gap-1 items-center mt-6'>
                        <p className='md:text-white'>Don't have an account?</p>
                        <Link href={PAGES.auth.registration} className='text-black mmd:text-secondary font-bold underline'>Create one</Link>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
};

export default AuthenticationPage;
