import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
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

        {/* About Section */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            {t('about.title')}
          </h2>
          <p className="leading-relaxed text-gray-600 dark:text-gray-300">{t('about.content')}</p>
        </section>

        {/* Personal Projects Section */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            {t('projects.title')}
          </h2>
          <div className="space-y-6">
            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
              <h3 className="mb-2 text-xl font-medium text-gray-900 dark:text-white">
                <a
                  href="https://quizzly.io"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {t('projects.quizzly.title')}
                </a>
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('projects.quizzly.description')}
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
              <h3 className="mb-2 text-xl font-medium text-gray-900 dark:text-white">
                <a
                  href="https://unislide.io"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {t('projects.unislide.title')}
                </a>
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('projects.unislide.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
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
                <span className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-700">
                  React
                </span>
                <span className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-700">Node</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded bg-gray-50 px-2 py-1 text-sm dark:bg-gray-800">
                  GitHub
                </span>
                <span className="rounded bg-gray-50 px-2 py-1 text-sm dark:bg-gray-800">AWS</span>
                <span className="rounded bg-gray-50 px-2 py-1 text-sm dark:bg-gray-800">
                  Sentry
                </span>
                <span className="rounded bg-gray-50 px-2 py-1 text-sm dark:bg-gray-800">
                  Prismic
                </span>
                <span className="rounded bg-gray-50 px-2 py-1 text-sm dark:bg-gray-800">Figma</span>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <div className="mb-2 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    {t('experience.uscreen.title')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('experience.uscreen.company')}
                  </p>
                </div>
                <span className="text-sm text-gray-500">{t('experience.uscreen.period')}</span>
              </div>
              <p className="mb-2 text-gray-600 dark:text-gray-300">
                {t('experience.uscreen.description')}
              </p>
              <div className="mb-2 flex flex-wrap gap-2">
                <span className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-700">Vue</span>
                <span className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-700">
                  Ruby on Rails
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded bg-gray-50 px-2 py-1 text-sm dark:bg-gray-800">
                  GitHub
                </span>
                <span className="rounded bg-gray-50 px-2 py-1 text-sm dark:bg-gray-800">
                  Heroku
                </span>
                <span className="rounded bg-gray-50 px-2 py-1 text-sm dark:bg-gray-800">
                  Docker
                </span>
                <span className="rounded bg-gray-50 px-2 py-1 text-sm dark:bg-gray-800">
                  Storybook
                </span>
                <span className="rounded bg-gray-50 px-2 py-1 text-sm dark:bg-gray-800">
                  Sentry
                </span>
                <span className="rounded bg-gray-50 px-2 py-1 text-sm dark:bg-gray-800">
                  Fastly
                </span>
                <span className="rounded bg-gray-50 px-2 py-1 text-sm dark:bg-gray-800">
                  Mixpanel
                </span>
                <span className="rounded bg-gray-50 px-2 py-1 text-sm dark:bg-gray-800">Figma</span>
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
                <span className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-700">
                  React
                </span>
                <span className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-700">Node</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded bg-gray-50 px-2 py-1 text-sm dark:bg-gray-800">
                  GitHub
                </span>
                <span className="rounded bg-gray-50 px-2 py-1 text-sm dark:bg-gray-800">
                  Heroku
                </span>
                <span className="rounded bg-gray-50 px-2 py-1 text-sm dark:bg-gray-800">
                  Sentry
                </span>
                <span className="rounded bg-gray-50 px-2 py-1 text-sm dark:bg-gray-800">
                  Cloudflare
                </span>
                <span className="rounded bg-gray-50 px-2 py-1 text-sm dark:bg-gray-800">
                  Mixpanel
                </span>
                <span className="rounded bg-gray-50 px-2 py-1 text-sm dark:bg-gray-800">
                  Optimizely
                </span>
                <span className="rounded bg-gray-50 px-2 py-1 text-sm dark:bg-gray-800">
                  Sketch
                </span>
                <span className="rounded bg-gray-50 px-2 py-1 text-sm dark:bg-gray-800">
                  Zeplin
                </span>
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
                <span className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-700">
                  AngularJS
                </span>
                <span className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-700">.Net</span>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <div className="mb-2 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    {t('experience.alpari.title')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('experience.alpari.company')}
                  </p>
                </div>
                <span className="text-sm text-gray-500">{t('experience.alpari.period')}</span>
              </div>
              <p className="mb-2 text-gray-600 dark:text-gray-300">
                {t('experience.alpari.description')}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-700">
                  jQuery
                </span>
                <span className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-700">PHP</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
