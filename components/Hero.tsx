import Image from 'next/image';
import React from 'react';
import Me from 'public/images/me.jpg';

export const Hero = () => {
  return (
    <div className="py-28">
      <div className="px-2 grid grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-20 justify-center items-center">
        <div className="">
          <h1 className="text-5xl md:text-7xl mb-5 font-bold tracking-wide">
            Mahmoud Abdelwahab
          </h1>
          <p className="text-xl mb-5">
            Developer, Writer and Maker. Obsessed with creating exceptional,
            high-quality content and applications. Currently a Developer at
            Advocate at{' '}
            <a href="https://neon.tech" className="">
              Neon
            </a>
          </p>
        </div>

        <div>
          <Image
            src={Me}
            alt="Mahmoud Abdelwahab"
            width="400px"
            height="400px"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
