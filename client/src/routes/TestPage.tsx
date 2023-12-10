import { gql } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import { useTestPageQuery } from '@generated/graphql';

gql`
  query TestPage {
    users {
      email
      isActive
    }
  }
`;

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={async () => {
        await loginWithRedirect();
      }}
    >
      Log In
    </Button>
  );
}

const LogoutButton = () => {
  const { logout } = useAuth0();

  return <button onClick={() => void logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>;
};

export default function TestPage() {
  const { loading, error, data } = useTestPageQuery({ context: {} });
  const { user, isLoading, getAccessTokenSilently } = useAuth0();

  if (loading || isLoading) return <>Wait</>;
  if (error) return <>Error</>;

  async function getToken() {
    console.log(await getAccessTokenSilently());
  }

  return (
    <>
      {data?.users.map((user) => <p key={user.email}>{user.email}</p>)}
      {user?.email}
      <Button onClick={() => getToken()}>Token</Button>
      <LoginButton />
      <LogoutButton />
    </>
  );
}