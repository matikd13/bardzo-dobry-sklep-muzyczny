import { Box, Grid, Typography } from '@mui/material';

export default function Footer() {
  return (
    <>
      <Box className="bg-blue-950 px-10 py-6 text-blue-50">
        <Grid container spacing={2} direction="row" justifyContent="space-evenly" alignItems="center">
          <Grid item xs={4}>
            <Typography variant="h6" fontFamily="roboto" sx={{ textAlign: 'center' }}>
              Bardzo Dobry Sklep MuzycznyTM
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Grid sx={{ textAlign: 'center' }}>
              <Typography variant="h6" fontFamily="roboto">
                Autorzy:
              </Typography>
              <Typography fontFamily="roboto">Michał, Natalia, Mateusz, Jakub</Typography>
            </Grid>
          </Grid>
          <Grid item xs={4} className="text-center font-serif text-2xl font-bold">
            Wersja systemu: Beta 0.01
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
