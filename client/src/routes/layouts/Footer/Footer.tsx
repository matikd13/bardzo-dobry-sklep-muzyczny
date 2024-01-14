import { Box, Grid } from '@mui/material';

export default function Footer() {
  return (
    <>
      <Box className="bg-blue-950 px-10 py-6 text-blue-50">
        <Grid container spacing={2} direction="row" justifyContent="space-evenly" alignItems="center">
          <Grid item xs={4} className="text-center font-serif text-2xl font-bold">
            Bardzo Dobry Sklep MuzycznyTM
          </Grid>
          <Grid item xs={2}>
            <table className="text-center">
              <p className="text-xl font-bold">Kontakt:</p>
              <tr>
                <th className="text-left">Michał</th>
                <th>
                  <a
                    href="https://www.youtube.com/watch?v=wh9QLjk3M2k"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Github
                  </a>
                </th>
              </tr>
              <tr>
                <th className="text-left">Natalia</th>
                <th>
                  <a
                    href="https://www.youtube.com/watch?v=wh9QLjk3M2k"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Github
                  </a>
                </th>
              </tr>
              <tr>
                <th className="text-left">Mateusz</th>
                <th>
                  <a
                    href="https://www.youtube.com/watch?v=wh9QLjk3M2k"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Github
                  </a>
                </th>
              </tr>
              <tr>
                <th className="text-left">Kuba</th>
                <th>
                  <a
                    href="https://www.youtube.com/watch?v=wh9QLjk3M2k"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Github
                  </a>
                </th>
              </tr>
            </table>
          </Grid>
          <Grid item xs={6} className="text-center font-serif text-2xl font-bold">
            Wersja systemu: Beta 0.01
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
