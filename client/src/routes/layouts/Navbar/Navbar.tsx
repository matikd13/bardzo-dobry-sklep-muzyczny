import { Grid, Box, Typography, ButtonBase, IconButton } from '@mui/material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import ManageSearchTwoToneIcon from '@mui/icons-material/ManageSearchTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <Box className="inset-x-0 top-0 bg-blue-950 px-10 py-8 text-blue-50" sx={{ width: '100%' }}>
        <Grid container direction="row" alignItems="center" justifyContent="space-evenly">
          <Grid className="rounded-lg bg-sky-600">
            <IconButton component={Link} to="/">
              <ManageSearchTwoToneIcon sx={{ fontSize: '4rem' }} />
            </IconButton>
          </Grid>

          <Grid className="rounded-lg bg-sky-600">
            <IconButton component={Link} to="/search">
              <SearchTwoToneIcon sx={{ fontSize: '4rem' }} />
            </IconButton>
          </Grid>

          <Grid xs={4}>
            <ButtonBase component={Link} to="/" focusRipple sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontFamily: 'Roboto', textAlign: 'center' }}>
                BARDZO DOBRY SKLEP MUZYCZNY
              </Typography>
            </ButtonBase>
          </Grid>

          <Grid className="rounded-lg bg-sky-600">
            <IconButton component={Link} to="/cart">
              <ShoppingCartTwoToneIcon sx={{ fontSize: '4rem' }} />
            </IconButton>
          </Grid>

          <Grid className="rounded-lg bg-sky-600">
            <IconButton component={Link} to="/profile">
              <PersonOutlineTwoToneIcon sx={{ fontSize: '4rem' }} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
