import { Box, Card, CardContent, Typography, CardActions, CardMedia, Button, Grid, Divider } from '@mui/material';
import Carousel from 'react-multi-carousel';

export default function ProductsList() {
  const productList = [
    { title: 'Roksana Węgiel', price: '49,99 zł', img: 'dwd', id: '1' },
    { title: 'Roksana Kręgiel', price: '42,99 zł', img: 'dwd', id: '2' },
    { title: 'Roksana Dżnigiel', price: '43,99 zł', img: 'dwd', id: '3' },
  ];

  const thickDivider = {
    borderBottom: '2px solid #123',
  };

  const titleTypoStyle = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
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
          Polecane:{' '}
        </Typography>
        <Divider sx={thickDivider}></Divider>
      </Box>
      <Box sx={{ pl: 6 }}>
        <Carousel responsive={responsive} showDots={false} draggable={false}>
          <Box>
            <Card sx={{ maxWidth: 400 }} style={{ backgroundColor: 'white' }}>
              <CardMedia sx={{ height: 300 }} image="src/static/image/hold-up-let-him-cook.png" title="bajojajo" />
              <CardContent>
                <Typography sx={titleTypoStyle} gutterBottom variant="h5" component="div">
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
                    <Button sx={{ p: 2 }} className="bg-sky-200" variant="contained">
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
                <Typography sx={titleTypoStyle} gutterBottom variant="h5" component="div">
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
                <Typography sx={titleTypoStyle} gutterBottom variant="h5" component="div">
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
                <Typography sx={titleTypoStyle} gutterBottom variant="h5" component="div">
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
                <Typography sx={titleTypoStyle} gutterBottom variant="h5" component="div">
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
      <Box margin={2}>
        <Divider style={thickDivider}></Divider>
      </Box>
    </>
  );
}
