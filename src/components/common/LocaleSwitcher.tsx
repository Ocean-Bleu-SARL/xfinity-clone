import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

const LocaleSwitcher = () => {
    const currentLocale = localStorage.getItem('lang') || 'en';
    const [showLanguages, setShowLanguages] = useState(false);
    const t = useTranslations('LocaleSwitcher');

    const locales = [
        {
            locale: 'en',
            flag: '/assets/images/en-flag.svg'
        },
        {
            locale: 'fr',
            flag: '/assets/images/fr-flag.svg'
        },
    ];

    const [current, setCurrent] = useState(locales.find((l) => l.locale === currentLocale) || locales[0]);

    const onLocaleChange = (locale: string) => {
        setShowLanguages(false);
        setCurrent(locales.find((l) => l.locale === locale) || locales[0]);
        const oldValue = localStorage.getItem('lang');
        localStorage.setItem('lang', locale);
        window.dispatchEvent(new StorageEvent('storage', {
            key: 'lang',
            oldValue,
            newValue: locale,
            storageArea: localStorage,
            url: location.href
        }));
    };

    return (
        <div>
            <button
                onClick={() => setShowLanguages(!showLanguages)}
                id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="bg-opacity-25 text-white gap-1 bg-white hover:bg-gray-800 font-medium rounded-lg px-4 py-2.5 flex items-center" type="button">
                <div className='w-5 h-fit'>
                    <img src={current.flag} alt="flag" />
                </div>
                <span>{t(current.locale,{locale: currentLocale})}</span>
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>
            <div id="dropdownHover" className={`z-10 ${showLanguages ? '' : 'hidden'} bg-opacity-50 absolute mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                    {locales.map((locale) => (
                        <li key={locale.locale}>
                            <button
                                onClick={() => onLocaleChange(locale.locale)}
                                className="w-full px-4 py-2 bg-opacity-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-2">
                                <span>{t(locale.locale,{locale: currentLocale})}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LocaleSwitcher;