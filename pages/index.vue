<template>
  <div class="container">
    <div>
      <div class="flex items-center mb-8 pt-4">
        <div class="mr-8 lg:mr-12 w-32 lg:w-64">
          <img src="~/assets/images/ivan-zhevakin.jpg" class="rounded-full" />
        </div>
        <div>
          <h1 class="text-2xl lg:text-6xl">Ivan Zhevakin</h1>
          <h2 class="lg:text-3xl text-gray-600">
            Product-focused web developer
          </h2>
        </div>
      </div>
      <div class="mb-8">
        <a
          href="https://github.com/zhevakin"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey mr-8"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/zhevakin/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          Linked In
        </a>
      </div>
      <h4 class="font-bold mb-2">About</h4>
      <p class="mb-8">
        Working as a web developer since 2008. Currently I’m focusing on
        building the complex web applications using JS frameworks: React, Vue,
        Angular. Besides I really care about good UI/UX and always trying not
        just build the application but deliver great experience to users. Also I
        believe that great projects could be completed only by high motivated
        teams so I’m always trying to keep team communication at a high level.
      </p>
      <div>
        <h4 class="font-bold mb-2">Job experience</h4>
        <article
          v-for="(job, index) in experience.jobs"
          :key="index"
          class="mb-8"
        >
          <small class="gray-300 text-sm">
            <span v-if="job.till">
              {{ job.from | date }} - {{ job.till | date }}
            </span>
            <span v-else> Since {{ job.from | date }} </span>
          </small>
          <div class="text-xl">
            {{ job.title }}
            <span> at </span>
            <a :href="job.url" target="_blank">{{ job.company }}</a>
          </div>
          <div class="mb-2">
            {{ job.description }}
          </div>
          <div class="mb-2">Stack: {{ job.stack.join(', ') }}</div>
          <div v-if="job.tools" class="mb-2">
            Tools: {{ job.tools.join(', ') }}
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  filters: {
    date(val) {
      return dayjs(val).format('MMM YYYY')
    },
  },
  async asyncData({ $content }) {
    const experience = await $content('experience').fetch()

    return {
      experience,
    }
  },
}
</script>

<style scoped>
a {
  @apply text-blue-600;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
}
</style>
