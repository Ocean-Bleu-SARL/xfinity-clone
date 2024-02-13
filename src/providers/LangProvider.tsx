import React, { FC, ReactNode, useEffect, useState } from 'react';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import LoadingPage from '@/components/common/LoadingPage';

interface LangProviderProps {
  children: ReactNode;
}
const LangProvider: FC<LangProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<AbstractIntlMessages | undefined>();
  const [storedLanguage, setSoredLanguage] = useState(() => {
    const systemLang = Intl.DateTimeFormat().resolvedOptions().locale ?? navigator.language ?? 'en';

    return systemLang.startsWith('fr') ? 'fr' : 'en';
  });

  const getMessages = async (locale: string): Promise<AbstractIntlMessages> => {
    const messages = (await import(`@/i18n/${locale}.json`)).default;
    return messages;
  };

  const syncLang = async (newLang?: string | null) => {
    const lang = newLang ?? localStorage.getItem('lang') ?? storedLanguage;
    const data = await getMessages(lang);
    setMessages(data);
    setSoredLanguage(lang);
  };

  const handleLangChange = (e: StorageEvent) => {
    if (e.key === 'lang') syncLang(e.newValue);
  };

  useEffect(() => {
    const localStorage = window.localStorage;
    syncLang();
    window.addEventListener('storage', handleLangChange);
    return () => window.removeEventListener('storage', handleLangChange);
  }, []);

  useEffect(() => { }, [messages]);

  return (
    <NextIntlClientProvider locale={storedLanguage} messages={messages}>
      {messages ? children : <LoadingPage />}
    </NextIntlClientProvider>
  );
};

export default LangProvider;