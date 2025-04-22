import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations();

  return (
    <section className="mb-16">
      <div className="flex items-center gap-8">
        <div className="relative h-32 w-32 overflow-hidden rounded-full">
          <Image
            src="/images/ivan-zhevakin.jpg"
            alt="Ivan Zhevakin"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">{t('hero.subtitle')}</p>
        </div>
      </div>
    </section>
  );
}
