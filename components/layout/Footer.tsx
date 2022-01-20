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
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/writing">
            <a>Writing</a>
          </Link>
          <Link href="/speaking">
            <a>Speaking</a>
          </Link>
          <Link href="/design">
            <a>Design</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/thisismahmoud_"
          >
            Twitter
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/m-abdelwahab"
          >
            GitHub
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/c/MahmoudAbdelwahab"
          >
            YouTube
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/mahmoud-codes"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/uses">
            <a>Uses</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};
