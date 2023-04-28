'use client';
import * as React from 'react';
import Navbar from '@/components/Navbar';

export default function QuestionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <h3>Hello</h3> */}
      <Navbar />
      <main>{children}</main>
    </>
  );
}
