import React from 'react';
import useSound from 'use-sound';
import Name from '../public/sounds/name.mp3';
import { motion } from 'framer-motion';

const companies = [
  {
    title: 'Developer Advocate',
    company: 'WorkOS',
    url: 'https://workos.com',
    date: 'Jan 2021 - July 2022',
    icon: (
      <svg
        className="rounded-lg shadow shadow-[#6363F1] dark:bg-gray-900 w-16 h-16 "
        viewBox="0 0 246 246"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43 123.015C43 126.059 43.8226 129.102 45.3033 131.652L73.189 180.021C76.0681 184.956 80.4278 188.987 85.8569 190.797C96.5506 194.334 107.573 189.81 112.838 180.679L119.583 168.998L93.0135 123.015L121.064 74.318L127.809 62.6372C129.865 59.1001 132.498 56.3033 135.706 54H132.827H92.4376C84.8698 54 77.8778 58.0307 74.0939 64.6114L45.3855 114.378C43.8226 116.928 43 119.972 43 123.015Z"
          fill="white"
        />
        <path
          d="M202.253 123.015C202.253 119.972 201.431 116.928 199.95 114.378L171.653 65.3517C166.389 56.3032 155.366 51.6967 144.672 55.2338C139.243 57.0435 134.883 61.0742 132.004 66.0097L125.67 77.0324L152.24 123.015L124.19 171.63L117.444 183.311C115.388 186.766 112.756 189.645 109.548 191.948H112.427H152.816C160.384 191.948 167.376 187.918 171.16 181.337L199.868 131.57C201.431 129.02 202.253 126.059 202.253 123.015Z"
          fill="white"
        />
        <path
          d="M43 123.015C43 126.059 43.8226 129.102 45.3033 131.652L73.189 180.021C76.0681 184.956 80.4278 188.987 85.8569 190.797C96.5506 194.334 107.573 189.81 112.838 180.679L119.583 168.998L93.0135 123.015L121.064 74.318L127.809 62.6372C129.865 59.1001 132.498 56.3033 135.706 54H132.827H92.4376C84.8698 54 77.8778 58.0307 74.0939 64.6114L45.3855 114.378C43.8226 116.928 43 119.972 43 123.015Z"
          fill="#6363F1"
        />
        <path
          d="M202.253 123.015C202.253 119.972 201.431 116.928 199.95 114.378L171.653 65.3517C166.389 56.3032 155.366 51.6967 144.672 55.2338C139.243 57.0435 134.883 61.0742 132.004 66.0097L125.67 77.0324L152.24 123.015L124.19 171.63L117.444 183.311C115.388 186.766 112.756 189.645 109.548 191.948H112.427H152.816C160.384 191.948 167.376 187.918 171.16 181.337L199.868 131.57C201.431 129.02 202.253 126.059 202.253 123.015Z"
          fill="#6363F1"
        />
      </svg>
    ),
  },

  {
    title: 'Designer Engineer Consultant',
    company: 'Temporal',
    url: 'https://temporal.io',
    date: 'July 2021 - Dec 2021',
    icon: (
      <svg
        className="p-2 rounded-lg shadow shadow-gray-200 dark:shadow-white dark:bg-gray-900 w-16 h-16"
        viewBox="0 0 168 168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M113.05 54.9535C109.135 25.6185 99.2242 1.12695 83.9992 1.12695C68.7781 1.12695 58.867 25.6143 54.9484 54.9535C25.6137 58.8679 1.12207 68.7788 1.12207 84.004C1.12207 99.2248 25.6137 109.136 54.9484 113.055C58.8628 142.385 68.7739 166.881 83.9992 166.881C99.22 166.881 109.131 142.389 113.05 113.055C142.385 109.136 166.876 99.229 166.876 84.004C166.876 68.7788 142.38 58.8679 113.05 54.9535ZM53.9941 104.505C25.8978 100.446 9.51495 91.1586 9.51495 83.9998C9.51495 76.8411 25.9021 67.5532 53.9941 63.4946C53.3751 70.2591 53.0528 77.1634 53.0528 83.9998C53.0528 90.836 53.3751 97.749 53.9941 104.505ZM84.0034 9.51557C91.1622 9.51557 100.45 25.9027 104.508 53.9948C97.7483 53.3757 90.8399 53.0534 84.0034 53.0534C77.1669 53.0534 70.2585 53.3757 63.4982 53.9948C67.5568 25.8985 76.8447 9.51557 84.0034 9.51557ZM114.008 104.505C112.626 104.708 106.951 105.37 105.518 105.514C105.378 106.952 104.708 112.622 104.508 114.005C100.45 142.101 91.1622 158.488 84.0034 158.488C76.8447 158.488 67.5568 142.101 63.4982 114.005C63.2988 112.622 62.6288 106.948 62.4888 105.514C61.8358 98.8558 61.4413 91.7012 61.4413 83.9998C61.4413 76.3024 61.8358 69.1478 62.4888 62.481C69.1472 61.828 76.3017 61.4335 84.0034 61.4335C91.7006 61.4335 98.8552 61.828 105.518 62.481C106.956 62.621 112.626 63.291 114.008 63.4904C142.105 67.549 158.496 76.8411 158.496 83.9954C158.492 91.1499 142.105 100.446 114.008 104.505Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: 'Developer Advocate',
    company: 'Prisma',
    url: 'https://prisma.io',
    date: 'Nov 2020 - Dec 2021',
    icon: (
      <svg
        className="rounded-lg shadow shadow-gray-200 dark:shadow-white dark:bg-gray-900 w-16 h-16"
        viewBox="0 0 224 224"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M175.079 152.386L121.989 39.6422C121.329 38.2547 120.306 37.0713 119.029 36.2174C117.752 35.3635 116.268 34.8707 114.733 34.7913C113.196 34.6883 111.661 35.0087 110.293 35.7177C108.925 36.4267 107.778 37.4971 106.977 38.8125L49.3944 132.075C48.5187 133.484 48.0627 135.112 48.0798 136.77C48.0969 138.429 48.5864 140.048 49.4908 141.437L77.6433 185.034C78.7083 186.67 80.2739 187.918 82.1065 188.592C83.9391 189.266 85.9405 189.33 87.8121 188.773L169.51 164.607C170.74 164.248 171.879 163.628 172.849 162.791C173.819 161.953 174.598 160.917 175.133 159.753C175.661 158.594 175.929 157.335 175.921 156.062C175.912 154.789 175.626 153.533 175.083 152.382L175.079 152.386ZM163.193 157.221L93.8671 177.721C91.7523 178.35 89.7224 176.517 90.1623 174.383L114.93 55.7886C115.393 53.5697 118.458 53.2185 119.426 55.2715L165.277 152.637C165.479 153.07 165.585 153.543 165.588 154.022C165.59 154.501 165.489 154.975 165.29 155.41C165.092 155.846 164.801 156.234 164.438 156.546C164.075 156.859 163.649 157.089 163.189 157.221H163.193Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const About = () => {
  const [play] = useSound(Name, { interrupt: true });

  return (
    <div className="pt-6 md:pt-20 max-w-2xl mx-auto mb-16 px-2">
      <h1 className="mb-6 text-4xl md:text-6xl font-semibold tracking-wide">
        About Me
      </h1>
      <div className="prose md:prose-lg prose-p:text-gray-900 dark:prose-p:text-gray-100 dark:prose-invert prose-gray mb-16">
        <p>
          Hey I&apos;m Mahmoud! [maħmuːd]{' '}
          <motion.button
            name="Name Button"
            role="button"
            aria-label="How I pronounce my name"
            whileHover={{
              scale: 1.15,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 0.8,
              transition: { duration: 0.2 },
            }}
            className="bg-gray-500 p-1.5 rounded-full cursor-pointer"
            onClick={() => play()}
          >
            <svg
              className="w-3 h-3"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 12.25L3.5 2.75L3.5 2.75L12.5 7.5L3.5 12.25Z"
                fill="#ecedee"
              />
            </svg>
          </motion.button>{' '}
          I&apos;m currently a Software Engineer and Developer Advocate. I love
          creating videos, writing articles, and educating developers.
        </p>

        <p>
          I&apos;m also an instructor at{' '}
          <a href="https://egghead.io/q/resources-by-mahmoud-abdelwahab">
            Egghead.io
          </a>
          , where I create instructional screencasts on various Web
          technologies.
        </p>

        <p>
          I enjoy reading and writing about a variety of topics like software
          development, design and tech careers. I&apos;m also a big advocate for
          learning in public and for being an infinite learner.
        </p>

        <p>
          I also publish videos on my{' '}
          <a href="https://www.youtube.com/mahmoudabdelwahab">
            YouTube channel
          </a>{' '}
          (expect more videos this year 👀)
        </p>

        <h2>Speaker Bio</h2>
        <p>
          Mahmoud is passionate about Software Development and Developer
          communities. He currently works as a Developer Advocate at{' '}
          <a href="https://neon.tech">Neon</a> . He loves creating videos on his{' '}
          <a href="https://youtube.com/c/MahmoudAbdelwahab">YouTube Channel</a>{' '}
          and in his free time, he teaches at{' '}
          <a href="https://egghead.io/q/resources-by-mahmoud-abdelwahab">
            Egghead.io
          </a>
        </p>
      </div>

      <div className="py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Companies I&apos;ve worked with
        </h2>
        <div className="space-y-10">
          {companies.map((company, i) => (
            <div key={i} className="flex items-center space-x-5">
              {company.icon}
              <div>
                <h3 className="text-xl font-medium">{company.title}</h3>
                <p className="text-lg">
                  <a href={company.url} className="hover:underline">
                    {company.company}
                  </a>{' '}
                  •{' '}
                  <span className="text-gray-400 dark:text-gray-200">
                    {company.date}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
