import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import pinnedPosts from 'data/pinnedPosts.json';

export const Writing = () => {
  return (
    <div className="py-20">
      <div className="grid grid-cols-1 gap-20">
        <div>
          <h2 className="text-4xl font-medium mb-5">Recent Writing</h2>
          <ul className="space-y-10">
            {pinnedPosts.map((post, i) => (
              <li className="space-y-1" key={i}>
                <Link href={`/writing/${post.href}`}>
                  <a className="text-2xl hover:text-blue-300">{post.title}</a>
                </Link>
                <p className="text-xl text-gray-400 dark:text-gray-200">
                  {post.description}
                </p>
              </li>
            ))}
          </ul>
          <Link href="/writing">
            <a className="mt-8 text-lg hover:text-blue-300 flex space-x-2 items-center">
              <span>View All Posts</span>
              <ArrowRightIcon className="w-4 h-4 mt-1" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
