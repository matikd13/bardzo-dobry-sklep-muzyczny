import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { PropsWithChildren, useMemo } from 'react';

const GQL_URI = import.meta.env.VITE_GQL_URI;

export default function CustomApolloProvider({ children }: PropsWithChildren) {
  const client = useMemo(() => {
    return new ApolloClient({
      uri: GQL_URI,
      cache: new InMemoryCache(),
    });
  }, []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
