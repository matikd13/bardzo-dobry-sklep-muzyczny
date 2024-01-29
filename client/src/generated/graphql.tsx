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
  Date: { input: string; output: string; }
  Decimal: { input: string; output: string; }
};

export type Category = {
  __typename?: 'Category';
  categoryType: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  makeOrder: StripeResponse;
  updateUserAddress: User;
};


export type MutationMakeOrderArgs = {
  orderItems: Array<OrderItemInput>;
};


export type MutationUpdateUserAddressArgs = {
  city: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  street: Scalars['String']['input'];
  streetNumber: Scalars['String']['input'];
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['String']['output'];
  orderItems: Array<OrderItem>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  amount: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  product: Product;
};

export type OrderItemInput = {
  prodId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

export type Product = {
  __typename?: 'Product';
  author: Maybe<Scalars['String']['output']>;
  category: Category;
  discontinued: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  image: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  price: Scalars['Decimal']['output'];
  quantity: Scalars['Int']['output'];
  releaseDate: Maybe<Scalars['Date']['output']>;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  me: User;
  order: Order;
  products: Array<Product>;
  users: Array<User>;
};


export type QueryOrderArgs = {
  id: Scalars['String']['input'];
};

export type StripeResponse = {
  __typename?: 'StripeResponse';
  url: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  city: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  street: Scalars['String']['output'];
  streetNumber: Scalars['String']['output'];
};

export type ProductsList_ProductFragment = { __typename?: 'Product', id: string, name: string, author: string | null, quantity: number, image: string | null, price: string };

export type UpdateUserAddressMutationVariables = Exact<{
  phoneNumber: Scalars['String']['input'];
  street: Scalars['String']['input'];
  streetNumber: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  city: Scalars['String']['input'];
}>;


export type UpdateUserAddressMutation = { __typename?: 'Mutation', updateUserAddress: { __typename?: 'User', id: string } };

export type MakeOrderMutationVariables = Exact<{
  orderItems: Array<OrderItemInput> | OrderItemInput;
}>;


export type MakeOrderMutation = { __typename?: 'Mutation', makeOrder: { __typename?: 'StripeResponse', url: string } };

export type OrderQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type OrderQuery = { __typename?: 'Query', order: { __typename?: 'Order', id: string, orderItems: Array<{ __typename?: 'OrderItem', amount: number, id: string, product: { __typename?: 'Product', id: string, name: string, author: string | null, releaseDate: string | null, image: string | null, quantity: number, price: string, discontinued: boolean } }> } };

export type HomePage_ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePage_ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, name: string, author: string | null, quantity: number, image: string | null, price: string }> };

export type SearchPage_ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type SearchPage_ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, name: string, author: string | null, quantity: number, image: string | null, price: string }> };

export type SearchPage_ProductFragment = { __typename?: 'Product', id: string, name: string, author: string | null, quantity: number, image: string | null, price: string };

export type UserContextQueryVariables = Exact<{ [key: string]: never; }>;


export type UserContextQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, email: string, isActive: boolean, lastName: string, firstName: string, phoneNumber: string, street: string, streetNumber: string, postalCode: string, city: string } };

export const ProductsList_ProductFragmentDoc = gql`
    fragment ProductsList_Product on Product {
  id
  name
  author
  quantity
  image
  price
}
    `;
export const SearchPage_ProductFragmentDoc = gql`
    fragment SearchPage_Product on Product {
  id
  name
  author
  quantity
  image
  price
}
    `;
export const UpdateUserAddressDocument = gql`
    mutation UpdateUserAddress($phoneNumber: String!, $street: String!, $streetNumber: String!, $postalCode: String!, $city: String!) {
  updateUserAddress(
    phoneNumber: $phoneNumber
    street: $street
    streetNumber: $streetNumber
    postalCode: $postalCode
    city: $city
  ) {
    id
  }
}
    `;
export type UpdateUserAddressMutationFn = Apollo.MutationFunction<UpdateUserAddressMutation, UpdateUserAddressMutationVariables>;

/**
 * __useUpdateUserAddressMutation__
 *
 * To run a mutation, you first call `useUpdateUserAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserAddressMutation, { data, loading, error }] = useUpdateUserAddressMutation({
 *   variables: {
 *      phoneNumber: // value for 'phoneNumber'
 *      street: // value for 'street'
 *      streetNumber: // value for 'streetNumber'
 *      postalCode: // value for 'postalCode'
 *      city: // value for 'city'
 *   },
 * });
 */
export function useUpdateUserAddressMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserAddressMutation, UpdateUserAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserAddressMutation, UpdateUserAddressMutationVariables>(UpdateUserAddressDocument, options);
      }
export type UpdateUserAddressMutationHookResult = ReturnType<typeof useUpdateUserAddressMutation>;
export type UpdateUserAddressMutationResult = Apollo.MutationResult<UpdateUserAddressMutation>;
export type UpdateUserAddressMutationOptions = Apollo.BaseMutationOptions<UpdateUserAddressMutation, UpdateUserAddressMutationVariables>;
export const MakeOrderDocument = gql`
    mutation MakeOrder($orderItems: [OrderItemInput!]!) {
  makeOrder(orderItems: $orderItems) {
    url
  }
}
    `;
export type MakeOrderMutationFn = Apollo.MutationFunction<MakeOrderMutation, MakeOrderMutationVariables>;

/**
 * __useMakeOrderMutation__
 *
 * To run a mutation, you first call `useMakeOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMakeOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [makeOrderMutation, { data, loading, error }] = useMakeOrderMutation({
 *   variables: {
 *      orderItems: // value for 'orderItems'
 *   },
 * });
 */
export function useMakeOrderMutation(baseOptions?: Apollo.MutationHookOptions<MakeOrderMutation, MakeOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MakeOrderMutation, MakeOrderMutationVariables>(MakeOrderDocument, options);
      }
export type MakeOrderMutationHookResult = ReturnType<typeof useMakeOrderMutation>;
export type MakeOrderMutationResult = Apollo.MutationResult<MakeOrderMutation>;
export type MakeOrderMutationOptions = Apollo.BaseMutationOptions<MakeOrderMutation, MakeOrderMutationVariables>;
export const OrderDocument = gql`
    query Order($id: String!) {
  order(id: $id) {
    id
    orderItems {
      amount
      product {
        id
        name
        author
        releaseDate
        image
        quantity
        price
        discontinued
      }
      id
    }
  }
}
    `;

/**
 * __useOrderQuery__
 *
 * To run a query within a React component, call `useOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrderQuery(baseOptions: Apollo.QueryHookOptions<OrderQuery, OrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
      }
export function useOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderQuery, OrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
        }
export function useOrderSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<OrderQuery, OrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
        }
export type OrderQueryHookResult = ReturnType<typeof useOrderQuery>;
export type OrderLazyQueryHookResult = ReturnType<typeof useOrderLazyQuery>;
export type OrderSuspenseQueryHookResult = ReturnType<typeof useOrderSuspenseQuery>;
export type OrderQueryResult = Apollo.QueryResult<OrderQuery, OrderQueryVariables>;
export const HomePage_ProductsDocument = gql`
    query HomePage_Products {
  products {
    ...ProductsList_Product
  }
}
    ${ProductsList_ProductFragmentDoc}`;

/**
 * __useHomePage_ProductsQuery__
 *
 * To run a query within a React component, call `useHomePage_ProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomePage_ProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomePage_ProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomePage_ProductsQuery(baseOptions?: Apollo.QueryHookOptions<HomePage_ProductsQuery, HomePage_ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomePage_ProductsQuery, HomePage_ProductsQueryVariables>(HomePage_ProductsDocument, options);
      }
export function useHomePage_ProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomePage_ProductsQuery, HomePage_ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomePage_ProductsQuery, HomePage_ProductsQueryVariables>(HomePage_ProductsDocument, options);
        }
export function useHomePage_ProductsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HomePage_ProductsQuery, HomePage_ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HomePage_ProductsQuery, HomePage_ProductsQueryVariables>(HomePage_ProductsDocument, options);
        }
export type HomePage_ProductsQueryHookResult = ReturnType<typeof useHomePage_ProductsQuery>;
export type HomePage_ProductsLazyQueryHookResult = ReturnType<typeof useHomePage_ProductsLazyQuery>;
export type HomePage_ProductsSuspenseQueryHookResult = ReturnType<typeof useHomePage_ProductsSuspenseQuery>;
export type HomePage_ProductsQueryResult = Apollo.QueryResult<HomePage_ProductsQuery, HomePage_ProductsQueryVariables>;
export const SearchPage_ProductsDocument = gql`
    query SearchPage_Products {
  products {
    ...ProductsList_Product
  }
}
    ${ProductsList_ProductFragmentDoc}`;

/**
 * __useSearchPage_ProductsQuery__
 *
 * To run a query within a React component, call `useSearchPage_ProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPage_ProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPage_ProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSearchPage_ProductsQuery(baseOptions?: Apollo.QueryHookOptions<SearchPage_ProductsQuery, SearchPage_ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchPage_ProductsQuery, SearchPage_ProductsQueryVariables>(SearchPage_ProductsDocument, options);
      }
export function useSearchPage_ProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchPage_ProductsQuery, SearchPage_ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchPage_ProductsQuery, SearchPage_ProductsQueryVariables>(SearchPage_ProductsDocument, options);
        }
export function useSearchPage_ProductsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchPage_ProductsQuery, SearchPage_ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchPage_ProductsQuery, SearchPage_ProductsQueryVariables>(SearchPage_ProductsDocument, options);
        }
export type SearchPage_ProductsQueryHookResult = ReturnType<typeof useSearchPage_ProductsQuery>;
export type SearchPage_ProductsLazyQueryHookResult = ReturnType<typeof useSearchPage_ProductsLazyQuery>;
export type SearchPage_ProductsSuspenseQueryHookResult = ReturnType<typeof useSearchPage_ProductsSuspenseQuery>;
export type SearchPage_ProductsQueryResult = Apollo.QueryResult<SearchPage_ProductsQuery, SearchPage_ProductsQueryVariables>;
export const UserContextDocument = gql`
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

/**
 * __useUserContextQuery__
 *
 * To run a query within a React component, call `useUserContextQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserContextQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserContextQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserContextQuery(baseOptions?: Apollo.QueryHookOptions<UserContextQuery, UserContextQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserContextQuery, UserContextQueryVariables>(UserContextDocument, options);
      }
export function useUserContextLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserContextQuery, UserContextQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserContextQuery, UserContextQueryVariables>(UserContextDocument, options);
        }
export function useUserContextSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UserContextQuery, UserContextQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserContextQuery, UserContextQueryVariables>(UserContextDocument, options);
        }
export type UserContextQueryHookResult = ReturnType<typeof useUserContextQuery>;
export type UserContextLazyQueryHookResult = ReturnType<typeof useUserContextLazyQuery>;
export type UserContextSuspenseQueryHookResult = ReturnType<typeof useUserContextSuspenseQuery>;
export type UserContextQueryResult = Apollo.QueryResult<UserContextQuery, UserContextQueryVariables>;