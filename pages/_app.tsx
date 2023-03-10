import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { UserProvider } from '@auth0/nextjs-auth0/client';

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { client } from '@/models/main-store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <UserProvider>
        <QueryClientProvider client={client}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </UserProvider>
    </ChakraProvider>
  );
}
