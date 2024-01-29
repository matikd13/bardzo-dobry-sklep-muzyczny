import { useForm } from 'react-hook-form';
import { gql } from '@apollo/client';
import { UserType, useUserContext } from '@utils/auth/UserContext';
import { useUpdateUserAddressMutation } from '@generated/graphql';

gql`
  mutation UpdateUserAddress(
    $phoneNumber: String!
    $street: String!
    $streetNumber: String!
    $postalCode: String!
    $city: String!
  ) {
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

export default function useProfile() {
  const { user } = useUserContext();
  const { control, handleSubmit } = useForm<UserType>({ defaultValues: user ?? {} });

  const [UpdateUserAddress] = useUpdateUserAddressMutation({
    refetchQueries: ['UserContext'],
    onCompleted: () => console.log('jej'),
  });

  const onSubmit = (data: UserType) => {
    console.log(data);
    UpdateUserAddress({ variables: { ...data } });
  };

  return { control, handleSubmit: handleSubmit(onSubmit) };
}
