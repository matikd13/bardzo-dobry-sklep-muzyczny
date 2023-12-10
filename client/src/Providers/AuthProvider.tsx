import { Auth0Provider } from '@auth0/auth0-react';
import { PropsWithChildren } from 'react';

const DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
const CLIENT_ID = import.meta.env.VITE_AUTH0_ID;

export default function AuthProvider({ children }: PropsWithChildren) {
  return (
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'bdsm',
        scope: 'profile email',
      }}
    >
      {children}
    </Auth0Provider>
  );
}
