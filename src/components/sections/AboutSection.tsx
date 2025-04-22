import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations();

  return (
    <section className="mb-16">
      <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
        {t('about.title')}
      </h2>
      <p className="leading-relaxed text-gray-600 dark:text-gray-300">{t('about.content')}</p>
    </section>
  );
}
