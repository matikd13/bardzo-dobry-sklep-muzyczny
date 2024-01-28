import { Grid, Button, TextField, Stack, FormControl} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

export default function MyProfile() {

  const [name, setName] = useState('nata');
  const [surname, setSurname] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [house_number, setHouse_number] = useState('');
  const [zip_code, setZip_code] = useState('');
  const [city, setCity] = useState('');

  //TODO1: i tu wyobrażam sobie, ze jak ktos zaklada konto, tam wypelnia dane, 
  //to potem po zalogowaniu ma juz je w polach, trzeba je pobrac z bazy danych, jak? 
  //i czy trzeba tu funkcje set.. (changeField nizej) ktora bedzie to podmieniac?

  //TODO2: id jest, trzeba podpiac baze i tak zrobic zeby to dzialalo z uzytkownikami xd

  const changeField = () => {
    setName('dupa')
  }

  const { id } = useParams();

  //docelowo rutują do odpowiednich stron
  const navigate= useNavigate();

    const routeToHistory = () => {
      navigate('/');
      console.log('dupa')
    }

    const routeToCart = () => {
      navigate('/');
    } 

    const routeToFavorites = () => {
      navigate('/');
    } 

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
                <h3>Twoje dane (na ten moment id strony xd): { id }</h3> 
                  <TextField
                    required
                    id="outlined-required"
                    label="Imię"
                    defaultValue={name}
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
                    <h3>Adres wysyłki:</h3>
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
                    {/* tu mnie pojebalo z tym edit xd<Button type="submit" variant="contained" color="error">Edit</Button> */}
                  </Stack>
                </form>
        
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="flex-end">
              <Grid item mx={4}><Button onClick={routeToHistory} className="bg-sky-500" variant="contained">Historia zamówień</Button></Grid>
              <Grid item mx={4}><Button onClick={routeToCart} className="bg-sky-500" variant="contained">Koszyk</Button></Grid>
              <Grid item mx={4}><Button onClick={routeToFavorites} className="bg-sky-500" variant="contained">ulubione produkty</Button></Grid>
            </Grid>
      </div>
      </>
    );
  }
