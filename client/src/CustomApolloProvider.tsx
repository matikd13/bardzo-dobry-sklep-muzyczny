import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { PropsWithChildren, useMemo } from 'react';

export default function CustomApolloProvider({ children }: PropsWithChildren) {
  const client = useMemo(() => {
    return new ApolloClient({
      uri: 'https://flyby-router-demo.herokuapp.com/',
      cache: new InMemoryCache(),
    });
  }, []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
