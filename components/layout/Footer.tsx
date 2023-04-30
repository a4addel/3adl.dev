import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-start max-w-screen-lg px-4 mx-auto py-8">
      <hr className="w-full border-1 border-gray-100 dark:border-gray-800 mb-8" />
      <div className="w-full grid grid-cols-1 gap-4 pb-16 sm:grid-cols-4">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a>Home</a>
          </Link>

        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/writing">
            <a>Writing</a>
          </Link>
          
        </div>
        <div className="flex flex-col space-y-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/3adl_for_real"
          >
            Twitter
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/a4addel"
          >
            GitHub
          </a>
           
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/a4addel"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex flex-col space-y-4">
           
          <Link href="/rss.xml">
            <a>RSS</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};
