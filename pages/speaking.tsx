import React from 'react';
import talks from 'data/talks.json';

const Speaking = () => {
  return (
    <div className="py-6 md:py-20 max-w-2xl mx-auto px-2">
      <h1 className="mb-6 text-4xl md:text-6xl font-semibold tracking-wide">
        Speaking
      </h1>
      <p className="text-lg md:text-xl font-normal max-w-xl leading-relaxed">
        Talks and appearances I&rsquo;ve had over the years
      </p>

      <div className="grid grid-cols-1 gap-y-12 py-10">
        {talks.map((talk, i) => {
          const { topic, title, description, event, link } = talk;
          return (
            <div className="space-y-2.5 max-w-xl" key={i}>
              <span className="text-sm rounded-md bg-gray-700 text-gray-50 dark:text-gray-100 dark:bg-gray-500 px-3 py-1 mr-2">
                {topic}
              </span>
              <a
                className="block text-xl font-medium hover:text-underline"
                rel="noopener noreferrer"
                target="_blank"
                href={link}
              >
                {title}
              </a>
              <p className="text-lg">{description}</p>
              <h3 className="text-sm">{event}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Speaking;
