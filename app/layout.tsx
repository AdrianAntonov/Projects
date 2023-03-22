import QueryProvider from './../libs/QueryProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './globals.css';
import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-lato',
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
        <body className={`${lato.className}`}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </body>
      </QueryProvider>
    </html>
  );
}
