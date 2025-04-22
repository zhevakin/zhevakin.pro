'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    const newPath = `/${newLocale}${pathname.replace(/^\/[a-z]{2}/, '')}`;
    router.push(newPath);
  };

  const languages = [
    { label: 'English', value: 'en' },
    { label: 'Русский', value: 'ru' },
  ];

  return (
    <div className="flex items-center space-x-2">
      {languages.map((loc) => (
        <button
          key={loc.value}
          onClick={() => handleLanguageChange(loc.value)}
          className={`cursor-pointer rounded-md px-2 py-1 text-sm font-medium ${
            locale === loc.value
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {loc.label}
        </button>
      ))}
    </div>
  );
}
