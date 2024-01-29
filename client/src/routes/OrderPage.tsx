import { gql } from '@apollo/client';
import { useParams, useSearchParams } from 'react-router-dom';
import { useHomePage_ProductsQuery, useOrderQuery } from '@generated/graphql';
import SerchedProduct from '@components/shared/searchedProduct/SerchedProduct';

gql`
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

export default function OrderPage() {
  const { id } = useParams();
  const [urlParams] = useSearchParams();

  const success = !!urlParams.get('success');

  const { data } = useOrderQuery({ variables: { id: id ?? '' } });
  const { data: data2 } = useHomePage_ProductsQuery();

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto 20px auto' }}>
      {success ? 'Zamówienie opłacone' : 'Zamówienie nieopłacone, prosimy o kontakt z działem pomocy'}
      {data?.order.orderItems.map((item) => (
        <SerchedProduct
          key={item.id}
          product={data2?.products.find((prod) => prod.id === item.product.id)}
          quantity={item.amount}
        />
      ))}
    </div>
  );
}
