import AppRouter from './routes/AppRouter';
import CustomApolloProvider from './utils/CustomApolloProvider';
import CustomAuth0Provider from './utils/auth/CustomAuth0Provider';
import CartProvider from '@utils/CartContext';
import { UserProvider } from '@utils/auth/UserContext';

export default function App() {
  return (
    <CustomAuth0Provider>
      <CustomApolloProvider>
        <UserProvider>
          <CartProvider>
            <AppRouter />
          </CartProvider>
        </UserProvider>
      </CustomApolloProvider>
    </CustomAuth0Provider>
  );
}
