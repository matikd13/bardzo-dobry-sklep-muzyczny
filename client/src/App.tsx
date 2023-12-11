import AppRouter from './routes/AppRouter';
import CustomApolloProvider from './utils/CustomApolloProvider';
import CustomAuth0Provider from './utils/auth/CustomAuth0Provider';

export default function App() {
  return (
    <CustomAuth0Provider>
      <CustomApolloProvider>
        <AppRouter />
      </CustomApolloProvider>
    </CustomAuth0Provider>
  );
}
