import AppRouter from './routes/AppRouter';
import CustomApolloProvider from './Providers/CustomApolloProvider';
import AuthProvider from './Providers/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <CustomApolloProvider>
        <AppRouter />
      </CustomApolloProvider>
    </AuthProvider>
  );
}
