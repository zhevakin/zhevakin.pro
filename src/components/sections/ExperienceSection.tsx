import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/badge';

export default function ExperienceSection() {
  const t = useTranslations();

  return (
    <section className="mb-16">
      <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
        {t('experience.title')}
      </h2>
      <div className="space-y-8">
        <div className="border-l-4 border-blue-500 pl-4">
          <div className="mb-2 flex items-start justify-between">
            <div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                {t('experience.dice.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{t('experience.dice.company')}</p>
            </div>
            <span className="text-sm text-gray-500">{t('experience.dice.period')}</span>
          </div>
          <p className="mb-2 text-gray-600 dark:text-gray-300">
            {t('experience.dice.description')}
          </p>
          <div className="mb-2 flex flex-wrap gap-2">
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">Next.js</Badge>
            <Badge variant="outline">AWS</Badge>
            <Badge variant="outline">Docker</Badge>
            <Badge variant="outline">Storybook</Badge>
            <Badge variant="outline">Prismic</Badge>
          </div>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <div className="mb-2 flex items-start justify-between">
            <div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                {t('experience.uscreen.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{t('experience.uscreen.company')}</p>
            </div>
            <span className="text-sm text-gray-500">{t('experience.uscreen.period')}</span>
          </div>
          <p className="mb-2 text-gray-600 dark:text-gray-300">
            {t('experience.uscreen.description')}
          </p>
          <div className="mb-2 flex flex-wrap gap-2">
            <Badge variant="outline">Vue</Badge>
            <Badge variant="outline">Ruby on Rails</Badge>
            <Badge variant="outline">Heroku</Badge>
            <Badge variant="outline">Docker</Badge>
            <Badge variant="outline">Storybook</Badge>
          </div>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <div className="mb-2 flex items-start justify-between">
            <div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                {t('experience.paulcamper.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('experience.paulcamper.company')}
              </p>
            </div>
            <span className="text-sm text-gray-500">{t('experience.paulcamper.period')}</span>
          </div>
          <p className="mb-2 text-gray-600 dark:text-gray-300">
            {t('experience.paulcamper.description')}
          </p>
          <div className="mb-2 flex flex-wrap gap-2">
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">Node</Badge>
            <Badge variant="outline">GitHub</Badge>
            <Badge variant="outline">Heroku</Badge>
          </div>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <div className="mb-2 flex items-start justify-between">
            <div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                {t('experience.intermedia.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('experience.intermedia.company')}
              </p>
            </div>
            <span className="text-sm text-gray-500">{t('experience.intermedia.period')}</span>
          </div>
          <p className="mb-2 text-gray-600 dark:text-gray-300">
            {t('experience.intermedia.description')}
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">AngularJS</Badge>
            <Badge variant="outline">.Net</Badge>
          </div>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <div className="mb-2 flex items-start justify-between">
            <div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                {t('experience.alpari.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{t('experience.alpari.company')}</p>
            </div>
            <span className="text-sm text-gray-500">{t('experience.alpari.period')}</span>
          </div>
          <p className="mb-2 text-gray-600 dark:text-gray-300">
            {t('experience.alpari.description')}
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">jQuery</Badge>
            <Badge variant="outline">PHP</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
