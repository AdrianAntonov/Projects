import QueryProvider from './../libs/QueryProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Germania_One } from 'next/font/google';

import './globals.css';
// import { Lato } from 'next/font/google';
import Navbar from '@/components/Navbar';

// const lato = Lato({
//   subsets: ['latin'],
//   weight: ['400', '700', '900'],
//   variable: '--font-lato',
// });
const germania_one = Germania_One({
  subsets: ['latin'],
  variable: '--font-Germania_One',
  weight: '400',
});

export const metadata = {
  title: 'Quiz App',
  description: 'Amazing Quiz Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={`${lato.className} h-screen`}> */}
      <body className={`${germania_one.className} flex h-screen flex-col `}>
        <QueryProvider>
          <Navbar />
          {children}
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryProvider>
      </body>
    </html>
  );
}
