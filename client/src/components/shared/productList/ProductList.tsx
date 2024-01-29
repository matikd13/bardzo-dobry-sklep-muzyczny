import { Box, Typography, Divider } from '@mui/material';
import Carousel from 'react-multi-carousel';
import { gql } from '@apollo/client';
import Product from './Product';
import { ProductsList_ProductFragment } from '@generated/graphql';

gql`
  fragment ProductsList_Product on Product {
    id
    name
    author
    quantity
    image
    price
  }
`;

export default function ProductsList({ products }: { products: ProductsList_ProductFragment[] }) {
  const thickDivider = {
    borderBottom: '2px solid #123',
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Box margin={2}>
        <Typography variant="h2" fontFamily="roboto">
          Polecane:
        </Typography>
        <Divider sx={thickDivider}></Divider>
      </Box>
      <Box sx={{ pl: 6 }}>
        <Carousel responsive={responsive} showDots={false} draggable={false}>
          {products.map((prod) => (
            <Product key={prod.id} product={prod} />
          ))}
        </Carousel>
      </Box>
      <Box margin={2}>
        <Divider style={thickDivider}></Divider>
      </Box>
    </>
  );
}
