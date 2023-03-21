'use client';
import * as React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

function queryFetch({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default queryFetch;
