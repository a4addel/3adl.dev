import React from 'react';
import Image from 'next/image';

const Design = () => {
  return (
    <div className="pt-6 md:pt-20">
      <h1 className="mb-6 text-4xl md:text-6xl font-semibold tracking-wide ">
        Design
      </h1>
      <p className="mb-10 text-lg md:text-xl font-normal max-w-2xl leading-relaxed ">
        Building and Crafting user interfaces.
        <br /> Current focus is all things developer tools: landing pages,
        documentation, and Developer Experience.{' '}
        <a
          className="text-blue-300 hover:underline"
          href="mailto:hey@mahmoud.codes"
        >
          Get in touch{' '}
        </a>
      </p>

      <div className="flex flex-col items-center justify-center space-y-28 py-20">
        <div>
          <div className="mb-10 shadow-lg bg-gray-900 shadow-blue-350 rounded-lg">
            <Image
              className="rounded-lg"
              alt="Temporal landing page"
              src={'/images/temporal.png'}
              width={1440}
              height={796}
            />
          </div>
          <h2 className="mb-5 text-3xl md:text-4xl font-semibold tracking-wide md:text-center">
            Temporal
          </h2>
          <p className="md:text-center text-xl">
            Redesign of the
            <a href="https://temporal.io" className="text-blue-300 mx-1.5">
              temporal.io
            </a>
            website.
          </p>
        </div>
        <div>
          <div className="mb-10 shadow-lg bg-gray-900 shadow-green-350 rounded-lg">
            <Image
              className="rounded-lg"
              alt="Temporal landing page"
              src={'/images/coming-soon.png'}
              width={1440}
              height={796}
            />
          </div>
          <h2 className="mb-5 text-3xl md:text-4xl font-semibold tracking-wide md:text-center">
            Devx Design Blog
          </h2>
          <p className="md:text-center text-xl">
            A blog about all things Developer Experience.{' '}
            <a href="https://temporal.io" className="text-blue-300 mx-1.5">
              devx.design
            </a>{' '}
            (Coming soon)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Design;
