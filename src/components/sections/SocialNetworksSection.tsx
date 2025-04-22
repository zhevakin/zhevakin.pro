import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';

export default function SocialNetworksSection() {
  return (
    <section className="mb-16">
      <div className="flex gap-6">
        <a
          href="https://github.com/zhevakin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <FaGithub className="h-6 w-6" />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/zhevakin/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <FaLinkedin className="h-6 w-6" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://www.instagram.com/ivan.zhevakin/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <FaInstagram className="h-6 w-6" />
          <span>Instagram</span>
        </a>
      </div>
    </section>
  );
}
