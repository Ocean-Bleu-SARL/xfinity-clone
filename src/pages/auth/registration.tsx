import Input from '@/components/common/Input';
import PrimaryButton from '@/components/common/PrimaryButton';
import MainLayout from '@/components/layouts/MainLayout';
import PAGES from '@/config/routes';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RegistrationFormSchemaAsType, registrationFormSchema } from '@/data/forms';
import { NextPage } from 'next';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserWithEmailAndPassword, getAuth, sendSignInLinkToEmail } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';
import { notify } from '@/utils/helpers';
import { firebaseAuth } from '@/config/firebase';
import { FirebaseError } from 'firebase/app';
import { useAuth } from '@/providers/AuthProvider';
import { User } from '@/data/models';
import { useRouter } from 'next/router';
import { redirect } from 'next/dist/server/api-utils';
import LoadingPage from '@/components/common/LoadingPage';

export const actionCodeSettings = {
  url: `${process.env.NEXT_PUBLIC_BASE}${PAGES.account.index}`,
  handleCodeInApp: true,
};

const RegistrationPage: NextPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegistrationFormSchemaAsType>({
    resolver: zodResolver(registrationFormSchema)
  });

  const [registrating, setRegistrating] = useState(false);
  const { user, setUser } = useAuth();
  const router = useRouter();

  const onSubmit = (data: RegistrationFormSchemaAsType) => {
    setRegistrating(true);
    createUserWithEmailAndPassword(firebaseAuth, data.email, data.password)
      .then((userCreds) => {
        console.log(userCreds);
        setUser({ email: userCreds.user.email! });
        sendSignInLinkToEmail(firebaseAuth, userCreds.user.email!, actionCodeSettings).then(() => {
          toast.success('Success');
        }).catch((error) => {
          console.log(error.code ?? 'Failed to send email auth link');
        }).finally(() => {
          setRegistrating(false);
          router.push(PAGES.auth.confirmEmail);
        });
      })
      .catch((error) => {
        console.error(error);
        setRegistrating(false);
        toast.error(error.code ?? 'Something went wrong');
      });
  };

  if (user) {
    router.push(PAGES.account.index)
  }

  return (
    <MainLayout onSubmit={handleSubmit(onSubmit)}>
      <div className='md:py-16 mmd:pt-0 text-black flex items-center justify-center' >
        <form className='py-20 px-3 md:px-20 md:bg-secondary  rounded-xl'>
          <h1 className='text-center font-bold text-3xl md:text-white'>Register on OBwire</h1>
          <p className='text-center md:text-white mb-10 text mt-2'>Please provide these information to create your account</p>
          <div className="flex justify-between gap-1 mb-1">
            <Input {...register('firstName')} error={errors.firstName?.message} placeholder='First name' inputclassname='bg-white h-12 rounded-md' />
            <Input  {...register('lastName')} placeholder='Last name' inputclassname='bg-white h-12 rounded-md' />
          </div>
          <Input
            type='tel'
            {...register('phone')}
            error={errors.phone?.message}
            placeholder='Phone (699...)' maxLength={9} inputclassname='mb-1 bg-white h-12 rounded-md' />
          <Input
            type='email'
            {...register('email')}
            placeholder='Email' error={errors.email?.message} inputclassname='mb-1 bg-white h-12 rounded-md' />
          <Input {...register('password')} error={errors.password?.message} type='password' placeholder='Password' inputclassname='mb-1 bg-white h-12 rounded-md' />
          <Input {...register('repassword')} error={errors.repassword?.message} type='password' placeholder='Re-enter password' inputclassname='mb-1 bg-white h-12 rounded-md' />
          <div className='mmd:hidden'>
            <PrimaryButton loading={registrating} type={'submit'} label='Create account' buttoncolor='white' textcolor='secondary' className='mt-6 rounded-md h-12 text-base' />
          </div>
          <div className='md:hidden'>
            <PrimaryButton loading={registrating} type={'submit'} label='Create account' buttoncolor='secondary' textcolor='white' className='mt-6 rounded-md h-12 text-base' />
          </div>
          <div className='flex gap-1 items-center mt-6'>
            <p className='md:text-white'>Already have an account?</p>
            <Link href={PAGES.auth.authentication} className='text-black mmd:text-secondary font-bold underline'>Log in</Link>
          </div>
        </form>
        <Toaster />
      </div>
    </MainLayout>
  );
};

export default RegistrationPage;