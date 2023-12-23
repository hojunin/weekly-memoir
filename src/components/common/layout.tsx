'use client';
import React from 'react';
import Header from './header';
import Footer from './footer';
import { SessionProvider } from 'next-auth/react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <SessionProvider>
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </SessionProvider>
    </main>
  );
};

export default Layout;
