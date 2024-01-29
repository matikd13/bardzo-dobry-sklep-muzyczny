import { SearchPage_ProductFragment } from '@generated/graphql';
import { Card, CardContent, Typography, Button, CardMedia, Grid, Box } from '@mui/material';
import { useCartContext } from '@utils/CartContext';

type ProductProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export default function SerchedProduct({
  product,
  quantity,
}: {
  product?: SearchPage_ProductFragment;
  quantity?: number;
}) {
  const { addToCart } = useCartContext();

  return !product ? (
    <></>
  ) : (
    <Card style={{ marginBottom: '16px', borderRadius: '12px', height: '200px', position: 'relative' }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            alt={product.name}
            height="100"
            image={product.image ?? ''}
            style={{ objectPosition: 'left bottom', objectFit: 'cover', borderTopLeftRadius: '12px' }}
          />
        </Grid>
        <Grid item xs={8}>
          <CardContent style={{ paddingBottom: 0 }}>
            <Typography variant="h4" component="div">
              {product.author} - {product.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Cena: {product.price} zł
            </Typography>
          </CardContent>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            style={{ paddingRight: '8px', paddingBottom: '8px', position: 'absolute', bottom: 0, right: 0 }}
          >
            {quantity ? (
              quantity
            ) : (
              <Button variant="contained" onClick={() => addToCart(product)} color="primary">
                Dodaj do koszyka
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
