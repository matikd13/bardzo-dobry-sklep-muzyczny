import { Avatar, Grid, Button, TextField, Stack, FormControl} from '@mui/material';




export default function MyProfile() {
    return (
      <>
      <div>
            <Grid container direction="row" my={4} justifyContent="center" alignItems="flex-start" >
           
           <form noValidate>
            <Stack
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
              >
                <div>
                  <TextField
                    required
                    id="outlined-required"
                    label="Imię"
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Nazwisko"
                  />
                  <TextField
                    required
                    id="outlined-required"
                    type="number"
                    label="Numer telefonu"
                    />
                    <TextField
                    required
                    id="outlined-required"
                    type="email"
                    label="E-mail"
                    />
                  </div>
                  <div>
                    <p>Adres wysyłki:</p>
                    <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Ulica"
                    />
                    <TextField
                    required
                    id="outlined-required"
                    type="number"
                    label="Nr mieszkania/domu"
                    />
                    <TextField
                    required
                    id="outlined-required"
                    label="Kod pocztowy"
                    />
                    <TextField
                    required
                    id="outlined-required"
                    label="Miasto"
                    />
                    </div>
                    <Button type="submit" variant="contained" color="error">Edit</Button>
                  </Stack>
                </form>
        
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="flex-end">
              <Grid item mx={4}><Button className="bg-sky-500" variant="contained">Historia zamówień</Button></Grid>
              <Grid item mx={4}><Button className="bg-sky-500" variant="contained">Twój koszyk</Button></Grid>
              <Grid item mx={4}><Button className="bg-sky-500" variant="contained">ulubione produkty</Button></Grid>
            </Grid>
      </div>
      </>
    );
  }
