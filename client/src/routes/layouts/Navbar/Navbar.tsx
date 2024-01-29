import { Grid, Box, Typography, ButtonBase, IconButton } from '@mui/material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import ManageSearchTwoToneIcon from '@mui/icons-material/ManageSearchTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Link } from 'react-router-dom';
import { useUserContext } from '@utils/auth/UserContext';
import { LoginButton } from '@utils/auth/LoginFunction';
import { useAuth0 } from '@auth0/auth0-react';

export default function Navbar() {
  const { userId } = useUserContext();
  const { logout } = useAuth0();
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
            {userId ? (
              <IconButton component={Link} to="/profile">
                <PersonOutlineTwoToneIcon sx={{ fontSize: '4rem' }} />
              </IconButton>
            ) : (
              <LoginButton />
            )}
          </Grid>
        </Grid>
      </Box>
      {userId && (
        <button onClick={() => void logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
      )}
    </>
  );
}
