import { Card, CardContent, Typography, Button, CardMedia, Grid, Box } from '@mui/material';

type ProductProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export default function Product({ id, title, price, description, image }: ProductProps) {
  return (
    <Card style={{ marginBottom: '16px', borderRadius: '12px', height: '200px', position: 'relative' }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            alt={title}
            height="100"
            image={image}
            style={{ objectPosition: 'left bottom', objectFit: 'cover', borderTopLeftRadius: '12px' }}
          />
        </Grid>
        <Grid item xs={8}>
          <CardContent style={{ paddingBottom: 0 }}>
            <Typography variant="h4" component="div">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Cena: {price} zł
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            style={{ paddingRight: '8px', paddingBottom: '8px', position: 'absolute', bottom: 0, right: 0 }}
          >
            <Button variant="contained" color="primary">
              Dodaj do koszyka
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
