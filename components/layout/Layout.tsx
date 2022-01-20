import React from 'react';
import { Footer } from './Footer';
import { Nav } from './Nav';

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className=" dark:text-gray-100 text-gray-900 bg-gray-50 dark:bg-gray-1000  px-4">
      <Nav />
      <main className="max-w-screen-lg mx-auto">{children}</main>
      <Footer />
    </div>
  );
};
