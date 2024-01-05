import { Button, Grid, Box } from '@mui/material';

export default function Navbar() {
  return (
    <>
      <div>
        <Box className="inset-x-0 top-0 bg-blue-950 px-10 py-8 text-blue-50" sx={{ width: '100%' }}>
          <Grid container direction="row" alignItems="center" justifyContent="space-evenly">
            <Grid>
              <Button className="bg-sky-500" variant="contained" size="large">
                Menu
              </Button>
            </Grid>

            <Grid>
              <Button className="bg-sky-500" variant="contained" size="large">
                Szukaj
              </Button>
            </Grid>

            <Grid xs={5}>
              <p className="text-center font-serif text-xl">BARDZO DOBRY SKLEP MUZYCZNY</p>
            </Grid>

            <Grid>
              <Button className="bg-sky-500" variant="contained" size="large">
                Profil
              </Button>
            </Grid>

            <Grid>
              <Button className="bg-sky-500" variant="contained" size="large">
                Koszyk
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
