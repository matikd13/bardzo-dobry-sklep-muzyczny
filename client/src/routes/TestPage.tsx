import { gql, useQuery } from '@apollo/client';

const GET_USERS = gql`
  query Users {
    users {
      email
      isActive
    }
  }
`;

export default function TestPage() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <>Wait</>;
  if (error) return <>Error</>;

  return <>{data.users[0].email}</>;
}
