import AccountLayout from '@/components/layouts/AccountLayout';
import PAGES from '@/config/routes';
import { useAuth } from '@/providers/AuthProvider';
import { useRouter } from 'next/router';
import React from 'react';

const AccountPage = () => {
  const { user, setUser } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push(PAGES.auth.registration);
  }

  return (
    <AccountLayout>
      <div></div>
    </AccountLayout>
  );
};

export default AccountPage;