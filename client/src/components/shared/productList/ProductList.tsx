import { Box, Card, CardContent, Typography, CardActions, CardMedia, Button, Grid, Divider } from '@mui/material';
import Carousel from 'react-multi-carousel';

export default function ProductsList() {
  const productList = [
    { title: 'Roksana Węgiel', price: '49,99 zł', img: 'dwd', id: '1' },
    { title: 'Roksana Kręgiel', price: '42,99 zł', img: 'dwd', id: '2' },
    { title: 'Roksana Dżnigiel', price: '43,99 zł', img: 'dwd', id: '3' },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
      <Typography variant="h1">Polecane: </Typography>
      <Box sx={{ pl: 6 }}>
        <Carousel responsive={responsive} showDots>
          <Box>
            <Card sx={{ maxWidth: 400 }} style={{ backgroundColor: 'white' }}>
              <CardMedia sx={{ height: 300 }} image="src/static/image/hold-up-let-him-cook.png" title="bajojajo" />
              <CardContent>
                <Typography sx={{ textAlign: 'left' }} gutterBottom variant="h5" component="div">
                  Roksana Węgiel CD
                </Typography>
              </CardContent>
              <CardActions sx={{ height: 60 }}>
                <Grid alignItems="center" container spacing={2} justifyContent="space-between">
                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ p: 2 }} variant="h6">
                      50 zł
                    </Typography>
                  </Box>
                  <Box sx={{ p: 2 }}>
                    <Button sx={{ p: 2 }} className="bg-sky-800" variant="contained">
                      Dodaj do koszyka
                    </Button>
                  </Box>
                </Grid>
              </CardActions>
            </Card>
          </Box>

          <Box>
            <Card sx={{ maxWidth: 400 }} style={{ backgroundColor: 'white' }}>
              <CardMedia sx={{ height: 300 }} image="src/static/image/hold-up-let-him-cook.png" title="bajojajo" />
              <CardContent>
                <Typography sx={{ textAlign: 'left' }} gutterBottom variant="h5" component="div">
                  Roksana Węgiel CD
                </Typography>
              </CardContent>
              <CardActions sx={{ height: 60 }}>
                <Grid alignItems="center" container spacing={2} justifyContent="space-between">
                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ p: 2 }} variant="h6">
                      50 zł
                    </Typography>
                  </Box>
                  <Box sx={{ p: 2 }}>
                    <Button sx={{ p: 2 }} className="bg-sky-800" variant="contained">
                      Dodaj do koszyka
                    </Button>
                  </Box>
                </Grid>
              </CardActions>
            </Card>
          </Box>

          <Box>
            <Card sx={{ maxWidth: 400 }} style={{ backgroundColor: 'white' }}>
              <CardMedia sx={{ height: 300 }} image="src/static/image/hold-up-let-him-cook.png" title="bajojajo" />
              <CardContent>
                <Typography sx={{ textAlign: 'left' }} gutterBottom variant="h5" component="div">
                  Roksana Węgiel CD
                </Typography>
              </CardContent>
              <CardActions sx={{ height: 60 }}>
                <Grid alignItems="center" container spacing={2} justifyContent="space-between">
                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ p: 2 }} variant="h6">
                      50 zł
                    </Typography>
                  </Box>
                  <Box sx={{ p: 2 }}>
                    <Button sx={{ p: 2 }} className="bg-sky-800" variant="contained">
                      Dodaj do koszyka
                    </Button>
                  </Box>
                </Grid>
              </CardActions>
            </Card>
          </Box>

          <Box>
            <Card sx={{ maxWidth: 400 }} style={{ backgroundColor: 'white' }}>
              <CardMedia sx={{ height: 300 }} image="src/static/image/hold-up-let-him-cook.png" title="bajojajo" />
              <CardContent>
                <Typography sx={{ textAlign: 'left' }} gutterBottom variant="h5" component="div">
                  Roksana Węgiel CD
                </Typography>
              </CardContent>
              <CardActions sx={{ height: 60 }}>
                <Grid alignItems="center" container spacing={2} justifyContent="space-between">
                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ p: 2 }} variant="h6">
                      50 zł
                    </Typography>
                  </Box>
                  <Box sx={{ p: 2 }}>
                    <Button sx={{ p: 2 }} className="bg-sky-800" variant="contained">
                      Dodaj do koszyka
                    </Button>
                  </Box>
                </Grid>
              </CardActions>
            </Card>
          </Box>

          <Box>
            <Card sx={{ maxWidth: 400 }} style={{ backgroundColor: 'white' }}>
              <CardMedia sx={{ height: 300 }} image="src/static/image/hold-up-let-him-cook.png" title="bajojajo" />
              <CardContent>
                <Typography sx={{ textAlign: 'left' }} gutterBottom variant="h5" component="div">
                  Roksana Węgiel CD
                </Typography>
              </CardContent>
              <CardActions sx={{ height: 60 }}>
                <Grid alignItems="center" container spacing={2} justifyContent="space-between">
                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ p: 2 }} variant="h6">
                      50 zł
                    </Typography>
                  </Box>
                  <Box sx={{ p: 2 }}>
                    <Button sx={{ p: 2 }} className="bg-sky-800" variant="contained">
                      Dodaj do koszyka
                    </Button>
                  </Box>
                </Grid>
              </CardActions>
            </Card>
          </Box>
        </Carousel>
      </Box>
    </>
  );
}
