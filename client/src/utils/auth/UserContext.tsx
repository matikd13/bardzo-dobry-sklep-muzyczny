import { gql } from '@apollo/client';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { UserContextQuery, useUserContextQuery } from '@generated/graphql';

gql`
  query UserContext {
    me {
      id
      email
      isActive
      lastName
      firstName
      phoneNumber
      street
      streetNumber
      postalCode
      city
    }
  }
`;

export type UserType = UserContextQuery['me'];

type UserContextValue = {
  userEmail: string | null;
  userId: string | null;
  user: UserType | null;
  loading: boolean;
};

const UserContext = createContext<UserContextValue>({
  userEmail: null,
  userId: null,
  user: null,
  loading: true,
});

export function UserProvider({ children }: PropsWithChildren) {
  const { data, loading } = useUserContextQuery();

  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    setUserEmail(data?.me.email ?? null);
    setUserId(data?.me.id ?? null);
    setUser(data?.me ?? null);
  }, [data?.me]);

  return (
    <UserContext.Provider
      value={{
        userEmail,
        userId,
        user,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext(): UserContextValue {
  return useContext(UserContext);
}
