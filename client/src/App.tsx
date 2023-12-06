import AppRouter from './routes/AppRouter';
import CustomApolloProvider from '@CustomApolloProvider';

export default function App() {
  return (
    <CustomApolloProvider>
      <AppRouter />
    </CustomApolloProvider>
  );
}
