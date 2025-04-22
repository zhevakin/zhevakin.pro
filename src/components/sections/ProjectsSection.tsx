import { useTranslations, useLocale } from 'next-intl';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function ProjectsSection() {
  const t = useTranslations();
  const locale = useLocale();

  // Determine the Quizzly domain based on the language
  const quizzlyDomain = locale === 'ru' ? 'quizzly.ru' : 'quizzly.io';

  return (
    <section className="mb-16">
      <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
        {t('projects.title')}
      </h2>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>
              <a
                href={`https://${quizzlyDomain}`}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                {t('projects.quizzly.title')}
              </a>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">{t('projects.quizzly.description')}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <a
                href="https://unislide.io"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                {t('projects.unislide.title')}
              </a>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">{t('projects.unislide.description')}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
