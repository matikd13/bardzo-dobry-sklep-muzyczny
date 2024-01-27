import { Grid, Button, TextField, Stack, FormControl, Typography, Paper} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

export default function MyProfile() {

  const [user, setUser] = useState([
    {
    id: 1,
    name: "Nata",
    surname: "Dupa",
    number: 123456789,
    email: "buziaczek@02.pl",
    street: "Budryka" ,
    house_number: 2,
    zip_code: "38-543",
    city: "Craków"
    }
  ])

  //TODO1: i tu wyobrażam sobie, ze jak ktos zaklada konto, tam wypelnia dane, 
  //to potem po zalogowaniu ma juz je w polach, trzeba je pobrac z bazy danych, jak? 
  //i czy trzeba tu funkcje set.. (changeField nizej) ktora bedzie to podmieniac?

  //TODO2: id jest, trzeba podpiac baze i tak zrobic zeby to dzialalo z uzytkownikami xd

  

  const { id } = useParams();

  //docelowo rutują do odpowiednich stron
  const navigate= useNavigate();

    const routeToCart = () => {
      navigate('/cart/:id');
    } 

   const listUser = user.map((el) =>
      <li key={el.id}>
          <Paper sx={{ width: 600, height: 600, m: 4, borderRadius: 10}} elevation={2} variant="outlined">
            <Grid padding={2} container xs={6} direction="column">
              <form noValidate>
              <Grid item sm container xs={6} direction="column"  >
                 <Typography mb={2} variant='h5' sx={{ fontWeight: "bold"}}>Twoje dane:</Typography> 
                    <Grid item marginBottom={2} >
                    <TextField
                    required
                    id="outlined-required"
                    label="Imię"
                    defaultValue={el.name}
                    />
                    </Grid>
                    <Grid item marginBottom={2}>
                    <TextField
                    required
                    id="outlined-required"
                    label="Nazwisko"
                    defaultValue={el.surname}
                    />
                    </Grid>
                    <Grid item marginBottom={2}>
                    <TextField
                    required
                    id="outlined-required"
                    type="number"
                    label="Numer telefonu"
                    defaultValue={el.number}
                    />
                    </Grid>
                    <Grid item marginBottom={2}>
                    <TextField
                    required
                    id="outlined-required"
                    type="email"
                    label="E-mail"
                    defaultValue={el.email}
                    />
                    </Grid>
                  </Grid>
                  <Typography m={2} variant='h5' sx={{ fontWeight: "bold"}}>Adres wysyłki:</Typography>
                  <Grid item sm container xs={6} direction="column"  >
                    <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Ulica"
                    defaultValue={el.street}
                    />
                    <Grid item marginBottom={2}>
                    <TextField
                    required
                    id="outlined-required"
                    type="number"
                    label="Nr mieszkania/domu"
                    defaultValue={el.house_number}
                    />
                    </Grid>
                    <Grid item marginBottom={2}>
                    <TextField
                    required
                    id="outlined-required"
                    label="Kod pocztowy"
                    defaultValue={el.zip_code}
                    />
                    </Grid>
                    <Grid item marginBottom={2}>
                    <TextField
                    required
                    id="outlined-required"
                    label="Miasto"
                    defaultValue={el.city}
                    />
                    </Grid>
                    </Grid>
                    
                    </form>
              
            </Grid>
          </Paper>
      </li>
   
   );

    return (
      <>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack spacing={6} justifyContent="center" alignItems="center" padding={4}>
              <div>
                <ul>{listUser}</ul>
              </div>
          <Grid item mx={4}><Button onClick={routeToCart}  className="bg-sky-500" variant="contained">Przejdź do koszyka</Button></Grid>
          </Stack>
          </Grid>
        </Grid>
            
           
                
                 
               
                
              
            
           
              
             
           
            
     
      </>
    );
  }
