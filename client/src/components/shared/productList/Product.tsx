import { Box, Card, CardMedia, CardContent, Typography, CardActions, Grid, Button } from '@mui/material';
import { ProductsList_ProductFragment } from '@generated/graphql';
import { useCartContext } from '@utils/CartContext';

const titleTypoStyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  maxWidth: '100%',
};

export default function Product({ product }: { product: ProductsList_ProductFragment }) {
  const { addToCart } = useCartContext();
  return (
    <Box>
      <Card sx={{ maxWidth: 400 }} style={{ backgroundColor: 'white' }}>
        <CardMedia sx={{ height: 300 }} image={product.image ?? ''} title="bajojajo" />
        <CardContent>
          <Typography sx={titleTypoStyle} gutterBottom variant="h5" component="div">
            {product.author} - {product.name}
          </Typography>
        </CardContent>

        <CardActions sx={{ height: 60 }}>
          <Grid alignItems="center" container spacing={2} justifyContent="space-between">
            <Box sx={{ p: 2 }}>
              <Typography sx={{ p: 2 }} variant="h6">
                {product.price} zł
              </Typography>
            </Box>
            <Box sx={{ p: 2 }}>
              <Button sx={{ p: 2 }} onClick={() => addToCart(product)} className="bg-sky-200" variant="contained">
                Dodaj do koszyka
              </Button>
            </Box>
          </Grid>
        </CardActions>
      </Card>
    </Box>
  );
}
