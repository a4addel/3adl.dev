import React from 'react';
import { getAllPosts } from 'utils/mdx';
import Link from 'next/link';
import { InferGetStaticPropsType } from 'next';
import { MagnifyingGlassIcon, SquareIcon } from '@radix-ui/react-icons';
import { Newsletter } from 'components/Newsletter';
import pinnedPosts from 'data/pinnedPosts.json';
import { generateRSSFeed } from 'utils/generateRSS';

const Writing = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const emptyQuery = '';
  const [state, setState] = React.useState({
    filteredData: [],
    query: emptyQuery,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;

    // this is how we get all of our posts
    const allPosts = posts || [];

    // return all filtered posts
    const filteredData = allPosts.filter((post) => {
      // destructure data from post frontmatter

      const { description, title, categories } = post.data;
      return (
        // standardize data with .toLowerCase()
        // return true if the description, title or tags
        // contains the query string
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (categories &&
          categories
            .join('') // convert tags from an array to string
            .toLowerCase()
            .includes(query.toLowerCase()))
      );
    });

    // update state according to the latest query and results
    setState({
      query, // with current query string from the `Input` event
      // @ts-ignore
      filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
    });
  };

  const { filteredData, query } = state;
  const hasSearchResults = filteredData && query !== emptyQuery;
  posts = hasSearchResults ? filteredData : posts;

  return (
    <div className="pt-6 md:pt-20 px-4">
      <h1 className="mb-6 text-4xl md:text-6xl font-semibold tracking-wide md:text-center">
        Writing
      </h1>
      <p className="mb-20 text-lg md:text-xl font-normal max-w-xl leading-relaxed md:mx-auto md:text-center">
        Thinking out loud and sharing the things I learn about Software
        Engineering, Developer Relations, Design and more
      </p>
      <div className="mb-10 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="w-6 h-6" />
        </div>
        <input
          type="text"
          aria-label="Search"
          placeholder="Search posts..."
          onChange={handleInputChange}
          className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 py-3 max-w-xl border-gray-300 rounded-md placeholder-gray-300 shadow-sm bg-white dark:bg-gray-700 dark:text-gray-50"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-10 gap-x-10 gap-y-10 pb-16">
        <div className="col-span-1 md:col-span-7">
          <ul className="grid grid-cols-1 gap-y-10 max-w-2xl mb-10">
            {posts.length === 0 ? (
              <p>No results</p>
            ) : (
              posts
                .filter((post) => post.data.published === true)
                .map((post, i) => (
                  <li className="flex flex-col space-y-3" key={i}>
                    <Link
                      as={`/writing/${post.filePath.replace(/\.mdx?$/, '')}`}
                      href={`/writing/[slug]`}
                    >
                      <a className=" hover:text-blue-300 text-2xl font-semibold">
                        {post.data.title}
                      </a>
                    </Link>
                    <p className="text-lg text-gray-400 dark:text-gray-200">
                      {post.data.description}
                    </p>
                    <Link
                      as={`/writing/${post.filePath.replace(/\.mdx?$/, '')}`}
                      href={`/writing/[slug]`}
                    >
                      <a className=" hover:text-blue-300 font-semibold tracking-tight">
                        Read more
                      </a>
                    </Link>
                  </li>
                ))
            )}
          </ul>
          <Newsletter />
        </div>
        <div className="col-span-1 md:col-span-3 sticky">
          <h2 className="text-lg uppercase tracking-wider font-medium mb-3">
            Top Picks
          </h2>
          <ul className="space-y-4">
            {pinnedPosts.map((post, i) => (
              <li key={i} className="flex space-x-3 items-center font-medium">
                <SquareIcon
                  fill="currentColor"
                  className=" dark:bg-gray-100 dark:stroke-gray-100 bg-gray-900 stroke-gray-900 w-2 h-2 mt-1.5"
                />
                <Link href={`/writing/${post.href}`}>
                  <a className="text-lg hover:text-blue-300">{post.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Writing;

export function getStaticProps() {
  const posts = getAllPosts();
  generateRSSFeed(posts);
  return { props: { posts } };
}
