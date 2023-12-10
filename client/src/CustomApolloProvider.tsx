import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { PropsWithChildren, useMemo } from 'react';

export default function CustomApolloProvider({ children }: PropsWithChildren) {
  const client = useMemo(() => {
    return new ApolloClient({
      uri: import.meta.env.VITE_GQL_URI,
      cache: new InMemoryCache(),
    });
  }, []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
