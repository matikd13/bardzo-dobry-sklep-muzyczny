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
  const { loading, error, data } = useTestPageQuery();
  const { user } = useAuth0();

  if (loading) return <>Wait</>;
  if (error) return <>Error</>;

  return (
    <>
      {data?.users.map((user) => <p key={user.email}>{user.email}</p>)}
      {user?.email}
      <LoginButton />
      <LogoutButton />
    </>
  );
}
