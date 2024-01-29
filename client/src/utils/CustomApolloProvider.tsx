import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { setContext } from '@apollo/client/link/context';
import { useAuth0 } from '@auth0/auth0-react';

const GQL_URI = import.meta.env.VITE_GQL_URI;

export default function CustomApolloProvider({ children }: PropsWithChildren) {
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState(localStorage.getItem('token') ?? '');

  useEffect(() => {
    async function getToken() {
      const token = await getAccessTokenSilently();
      setToken(token);
      localStorage.setItem('token', token);
    }

    void getToken();
  }, [getAccessTokenSilently]);

  const httpLink = createHttpLink({
    uri: GQL_URI,
  });

  const authLink = setContext((_, { headers }) => {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = useMemo(() => {
    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authLink, httpLink, token]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
