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
const Unif = Germania_One({
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
      <QueryProvider>
        {/* <body className={`${lato.className} h-screen`}> */}
        <body className={`${Unif.className} h-screen`}>
          <Navbar />
          {children}
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </body>
      </QueryProvider>
    </html>
  );
}
