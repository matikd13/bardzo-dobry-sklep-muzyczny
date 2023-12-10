import { gql } from '@apollo/client';
import { useTestPageQuery } from '@generated/graphql';

gql`
  query TestPage {
    users {
      email
      isActive
    }
  }
`;

export default function TestPage() {
  const { loading, error, data } = useTestPageQuery({ context: {} });

  if (loading) return <>Wait</>;
  if (error) return <>Error</>;

  return <>{data?.users.map((user) => user.email)}</>;
}
