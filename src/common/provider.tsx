'use client';

import React, { type ReactNode } from 'react';
import ThemeProvider from '@/common/theme-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface ProviderProps {
  children: ReactNode;
}

function Providers({ children }: ProviderProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default Providers;
