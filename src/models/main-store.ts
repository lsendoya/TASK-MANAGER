import { QueryCache, QueryClient } from '@tanstack/react-query';

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24, // 24 hours
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchOnReconnect: false,
      retry: false,
    },
  },
  queryCache: new QueryCache(),
});
