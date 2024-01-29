import { gql } from '@apollo/client';
import ProductsList from '@components/shared/productList/ProductList';
import { useHomePage_ProductsQuery } from '@generated/graphql';

gql`
  query HomePage_Products {
    products {
      ...ProductsList_Product
    }
  }
`;


export default function HomePage() {
  const { data } = useHomePage_ProductsQuery();

  return (
    <>
      <ProductsList products={data?.products ?? []} />
    </>
  );
}
