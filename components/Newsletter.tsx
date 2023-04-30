// @ts-nocheck
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { fetcher } from 'utils';
import useSWR from 'swr';

export const Newsletter = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitted },
  } = useForm();

  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { data } = useSWR('/api/subscribers', fetcher);

  const onSubmit = async (data) => {
    setIsLoading(true);

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: data.email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      setMessage(error);
      return;
    }

    setMessage('Please check your inbox to confirm your subscription!');
    setIsLoading(false);
  };

  return (
    <div className="py-8 space-y-4 border-t border-b border-gray-300 border-dashed  dark:border-gray-100 bg-elevated">
      <div className="space-y-4">
        <p className="flex items-center font-semibold text-xl">
          Subscribe to the Newsletter
        </p>
        <p className="text-tertiary">
          Get updates about new posts, new projects, or other meaningful updates
          to this site delivered to your inbox. Alternatively, you can{' '}
          <a
            href="http://twitter.com/3adl_for_real"
            className=""
          >
            follow me on Twitter
          </a>
          .
        </p>
        <p>{!data ? null : `Join ${data?.count} other subscribers!`} </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-2 mt-2 md:grid-cols-3"
      >
        <label className="md:col-span-2">
          <span className="sr-only">Email address</span>

          <input
            {...register('email', { required: true })}
            type="email"
            className="w-full focus:outline-none px-4 dark:border-gray-800 dark:focus:border-gray-600 focus:ring-0 focus:ring-blue-500 focus:border-blue-500 block py-3 max-w-xl border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-700 dark:text-gray-50 placeholder-gray-300"
            placeholder="Email address"
            name="email"
            required={true}
          />
        </label>
        <button
          disabled={isSubmitted}
          className="flex items-center rounded justify-center flex-none px-4 py-2 space-x-3 font-medium bg-blue-400 text-white hover:bg-blue-450 dark:bg-blue-500 dark:hover:bg-blue-600 w-full"
          type="submit"
        >
          {isLoading ? 'Loading..' : 'Subscribe'}
        </button>
      </form>
      {isSubmitted && <p className="text-sm text-green-400">{message}</p>}
    </div>
  );
};
