import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
  users2: Array<User>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
};

export type TestPageQueryVariables = Exact<{ [key: string]: never; }>;


export type TestPageQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', email: string, isActive: boolean }> };


export const TestPageDocument = gql`
    query TestPage {
  users {
    email
    isActive
  }
}
    `;

/**
 * __useTestPageQuery__
 *
 * To run a query within a React component, call `useTestPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useTestPageQuery(baseOptions?: Apollo.QueryHookOptions<TestPageQuery, TestPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TestPageQuery, TestPageQueryVariables>(TestPageDocument, options);
      }
export function useTestPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TestPageQuery, TestPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TestPageQuery, TestPageQueryVariables>(TestPageDocument, options);
        }
export function useTestPageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TestPageQuery, TestPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TestPageQuery, TestPageQueryVariables>(TestPageDocument, options);
        }
export type TestPageQueryHookResult = ReturnType<typeof useTestPageQuery>;
export type TestPageLazyQueryHookResult = ReturnType<typeof useTestPageLazyQuery>;
export type TestPageSuspenseQueryHookResult = ReturnType<typeof useTestPageSuspenseQuery>;
export type TestPageQueryResult = Apollo.QueryResult<TestPageQuery, TestPageQueryVariables>;