import { FC, ReactNode, useState, useEffect, useMemo } from 'react';
import { NextIntlClientProvider, AbstractIntlMessages } from 'next-intl';
import LoadingPage from '@/components/common/LoadingPage';

const LangProvider: FC<{ children: ReactNode; }> = ({ children }) => {
	const [messages, setMessages] = useState<AbstractIntlMessages | undefined>();
	const defaultLang = useMemo<'fr' | 'en'>(() => {
		const systemLang = Intl.DateTimeFormat().resolvedOptions().locale ?? navigator.language ?? 'en';

		return systemLang.startsWith('fr') ? 'fr' : 'en';
	}, [Intl.DateTimeFormat().resolvedOptions().locale, navigator.language]);

	const [storedLanguage, setStoredLanguage] = useState<string>(defaultLang);

	const getMessages = async (locale: string): Promise<AbstractIntlMessages> => {
		return (await import(`@/i18n/${locale}.json`)).default;
	};

	useEffect(() => {
		const localStorage = window.localStorage;

		const syncLang = async (newLang?: string | null) => {
			const lang = newLang ?? localStorage.getItem('lang') ?? storedLanguage;
			const data = await getMessages(lang);

			setMessages(data);
			setStoredLanguage(lang);
		};

		const handleLangChange = (ev: StorageEvent) => {
			if (ev.key === 'lang') syncLang(ev.newValue);
		};

		syncLang();
		window.addEventListener('storage', handleLangChange);

		return () => window.removeEventListener('storage', handleLangChange);
	}, []);

	// Update app when messages load
	useEffect(() => { }, [messages]);

	return (
		<NextIntlClientProvider locale={defaultLang} messages={messages}>
			{messages ? children : <LoadingPage />}
		</NextIntlClientProvider>
	);
};

export default LangProvider;